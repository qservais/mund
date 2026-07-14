import { Router, type IRouter, type Request, type Response, type NextFunction } from "express";
import rateLimit from "express-rate-limit";
import { timingSafeEqual } from "node:crypto";
import { z } from "zod";
import { eq, desc, count, sum } from "drizzle-orm";
import { db, seoPages, generationLogs } from "@workspace/db";
import { BUSINESS_CONFIG, generateArticle, pickNextTopic } from "@workspace/journal";
import { logger } from "../lib/logger";

const router: IRouter = Router();

function bearerAuth(req: Request, res: Response, next: NextFunction) {
  const secret = process.env["CRON_SECRET"];
  if (!secret) {
    res.status(503).json({ error: "CRON_SECRET non configuré" });
    return;
  }

  const auth = req.headers.authorization;
  if (!auth?.startsWith("Bearer ")) {
    res.status(401).json({ error: "Token manquant" });
    return;
  }

  const provided = Buffer.from(auth.slice(7).trim());
  const expected = Buffer.from(secret);
  if (provided.length !== expected.length || !timingSafeEqual(provided, expected)) {
    res.status(401).json({ error: "Token invalide" });
    return;
  }
  next();
}

const generateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Rate limit dépassé (10/h max)" },
});

const GenerateBodySchema = z.object({
  topic: z.string().min(1).optional(),
  category: z.enum(BUSINESS_CONFIG.allowedCategories).optional(),
});

// Runs the generation synchronously (unlike a 202+background-job pattern):
// this deploys on Replit autoscale, where the instance can be recycled right
// after a response is sent, which would kill an in-flight background promise.
router.post("/journal/generate", generateLimiter, bearerAuth, async (req: Request, res: Response) => {
  const body = GenerateBodySchema.safeParse(req.body ?? {});
  if (!body.success) {
    res.status(400).json({ error: "Corps de requête invalide", details: body.error.issues });
    return;
  }

  let { topic, category } = body.data;
  if (!topic) {
    const picked = await pickNextTopic();
    topic = picked.topic;
    category = category ?? picked.category;
  }
  if (!category) {
    category = BUSINESS_CONFIG.defaultCategory;
  }

  const result = await generateArticle(topic, category);

  if (!result.ok) {
    logger.error({ topic, error: result.error }, "journal: generation failed");
    res.status(502).json({ error: result.error });
    return;
  }

  logger.info({ slug: result.slug }, "journal: article published");
  res.status(201).json({ status: "published", slug: result.slug, title: result.title });
});

router.get("/journal/stats", bearerAuth, async (_req: Request, res: Response) => {
  const [successStats] = await db
    .select({ totalSuccess: count(), totalCostUsd: sum(generationLogs.costUsd) })
    .from(generationLogs)
    .where(eq(generationLogs.status, "success"));

  const [lastRun] = await db.select().from(generationLogs).orderBy(desc(generationLogs.createdAt)).limit(1);

  res.json({ stats: successStats ?? { totalSuccess: 0, totalCostUsd: null }, lastRun: lastRun ?? null });
});

router.delete("/journal/:slug", bearerAuth, async (req: Request, res: Response) => {
  const slug = req.params["slug"];
  if (typeof slug !== "string") {
    res.status(400).json({ error: "Slug invalide" });
    return;
  }
  await db.delete(seoPages).where(eq(seoPages.slug, slug));
  res.status(204).send();
});

export default router;
