import { Router, type IRouter, type Request, type Response } from "express";
import { eq, and, desc } from "drizzle-orm";
import { db, seoPages } from "@workspace/db";
import { renderArticleHtml, renderListingHtml, renderSitemapXml } from "@workspace/journal";

// Mounted at the app root (not under /api) so URLs stay clean: /journal,
// /journal/:slug, /journal/sitemap.xml. Server-rendered plain HTML strings —
// no React, no client JS needed to see content — for fast indexing.
// Deliberately NOT linked from any nav/menu on the main site.
const router: IRouter = Router();

// Must be registered before "/journal/:slug" or that route would swallow it.
router.get("/journal/sitemap.xml", async (_req: Request, res: Response) => {
  const articles = await db
    .select()
    .from(seoPages)
    .where(eq(seoPages.status, "published"))
    .orderBy(desc(seoPages.date));

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.send(renderSitemapXml(articles));
});

router.get("/journal", async (_req: Request, res: Response) => {
  const articles = await db
    .select()
    .from(seoPages)
    .where(eq(seoPages.status, "published"))
    .orderBy(desc(seoPages.date));

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.send(renderListingHtml(articles));
});

router.get("/journal/:slug", async (req: Request, res: Response) => {
  const slug = req.params["slug"];
  if (typeof slug !== "string") {
    res.status(404).send("Article introuvable.");
    return;
  }

  const [article] = await db
    .select()
    .from(seoPages)
    .where(and(eq(seoPages.slug, slug), eq(seoPages.status, "published")))
    .limit(1);

  if (!article) {
    res.status(404).send("Article introuvable.");
    return;
  }

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.send(renderArticleHtml(article));
});

export default router;
