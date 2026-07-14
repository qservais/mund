import { mkdir, writeFile, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { eq, desc } from "drizzle-orm";
import { db, seoPages } from "@workspace/db";
import { renderArticleHtml, renderListingHtml } from "@workspace/journal";

// Writes a static HTML snapshot of every published journal article into
// artifacts/mund-std/public/journal/. Vite copies public/ verbatim into the
// build output, so these ship as plain, dependency-free HTML files served
// directly by the static host — a fallback that works even if the dynamic
// /journal route (see artifacts/api-server/.replit-artifact/artifact.toml)
// isn't reachable, and the only way journal content reaches production
// between deploys of mund-std. Re-run this (and redeploy mund-std) whenever
// published articles change and you want the static copy refreshed.
const here = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(here, "../../artifacts/mund-std/public/journal");

async function main() {
  const articles = await db
    .select()
    .from(seoPages)
    .where(eq(seoPages.status, "published"))
    .orderBy(desc(seoPages.date));

  await rm(OUT_DIR, { recursive: true, force: true });
  await mkdir(OUT_DIR, { recursive: true });
  await writeFile(path.join(OUT_DIR, "index.html"), renderListingHtml(articles), "utf-8");

  for (const article of articles) {
    const dir = path.join(OUT_DIR, article.slug);
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, "index.html"), renderArticleHtml(article), "utf-8");
  }

  console.log(`${articles.length} article(s) écrits dans ${OUT_DIR}`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(() => process.exit());
