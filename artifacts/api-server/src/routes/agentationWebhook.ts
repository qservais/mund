import { Router, type IRouter } from "express";
import { z } from "zod";
import { db } from "@workspace/db";
import { reviewCommentsTable } from "@workspace/db";
import { logger } from "../lib/logger";

const router: IRouter = Router();

const AnnotationSchema = z.object({
  comment: z.string().optional(),
  element: z.string().optional(),
  elementPath: z.string().optional(),
}).passthrough();

const WebhookPayloadSchema = z.object({
  event: z.string(),
  timestamp: z.union([z.string(), z.number()]).optional(),
  url: z.string().optional(),
  annotation: AnnotationSchema.optional(),
  annotations: z.array(AnnotationSchema).optional(),
  output: z.unknown().optional(),
}).passthrough();

router.post("/agentation-webhook", async (req, res) => {
  const parsed = WebhookPayloadSchema.safeParse(req.body);
  if (!parsed.success) {
    logger.warn({ issues: parsed.error.issues }, "agentation-webhook: invalid payload");
    res.status(400).json({ ok: false, error: "invalid payload" });
    return;
  }

  const { event, url, annotation, annotations } = parsed.data;
  const raw = req.body;

  try {
    if (event === "annotation.add" && annotation) {
      await db.insert(reviewCommentsTable).values({
        pageUrl: url ?? null,
        comment: annotation.comment ?? null,
        element: annotation.element ?? null,
        elementPath: annotation.elementPath ?? null,
        event,
        raw,
      });
      logger.info({ event, url }, "agentation-webhook: annotation inserted");
    } else if (event === "submit" && Array.isArray(annotations)) {
      for (const ann of annotations) {
        await db.insert(reviewCommentsTable).values({
          pageUrl: url ?? null,
          comment: ann.comment ?? null,
          element: ann.element ?? null,
          elementPath: ann.elementPath ?? null,
          event,
          raw,
        });
      }
      logger.info({ event, url, count: annotations.length }, "agentation-webhook: batch annotations inserted");
    } else {
      logger.info({ event }, "agentation-webhook: unhandled event, acknowledged");
    }

    res.json({ ok: true });
  } catch (err) {
    logger.error({ err, event }, "agentation-webhook: db insert failed");
    res.status(500).json({ ok: false, error: "internal error" });
  }
});

export default router;
