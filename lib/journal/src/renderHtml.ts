import type { SeoPage } from "@workspace/db";
import { BUSINESS_CONFIG } from "./config";

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const INTERNAL_LINK_RE = /\[([^\]]+)\]\(\/([a-z0-9-]+)\)/g;

/** Escapes plain text while turning `[anchor](/slug)` into a real link to another journal article. */
function renderInlineContent(text: string): string {
  let result = "";
  let lastIndex = 0;
  for (const match of text.matchAll(INTERNAL_LINK_RE)) {
    const anchor = match[1] ?? "";
    const targetSlug = match[2] ?? "";
    const index = match.index ?? 0;
    result += escapeHtml(text.slice(lastIndex, index));
    result += `<a href="${escapeHtml(BUSINESS_CONFIG.journalPath)}/${escapeHtml(targetSlug)}">${escapeHtml(anchor)}</a>`;
    lastIndex = index + match[0].length;
  }
  result += escapeHtml(text.slice(lastIndex));
  return result;
}

function formatDateFr(d: Date): string {
  return d.toLocaleDateString("fr-BE", { day: "numeric", month: "long", year: "numeric" });
}

function articleUrl(slug: string): string {
  return `${BUSINESS_CONFIG.siteUrl}${BUSINESS_CONFIG.journalPath}/${slug}`;
}

const BASE_STYLE = `
:root{color-scheme:light}
*{box-sizing:border-box}
body{margin:0;background:#f4f4f2;color:#151515;font-family:Georgia,"Iowan Old Style","Palatino Linotype",Palatino,serif;-webkit-font-smoothing:antialiased}
a{color:inherit}
.site-header,.site-footer{padding:24px clamp(16px,6vw,64px);font-family:-apple-system,BlinkMacSystemFont,"Helvetica Neue",Arial,sans-serif;font-size:14px}
.site-header a{text-decoration:none;font-weight:600;text-transform:lowercase;letter-spacing:.02em}
.site-footer{border-top:1px solid rgba(0,0,0,.1);color:rgba(0,0,0,.5)}
main{max-width:680px;margin:0 auto;padding:24px clamp(16px,6vw,64px) 80px}
.eyebrow{font-family:-apple-system,BlinkMacSystemFont,"Helvetica Neue",Arial,sans-serif;font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:rgba(0,0,0,.5);margin:0 0 8px}
h1{font-size:clamp(28px,5vw,42px);line-height:1.15;margin:0 0 12px;font-weight:600}
h2{font-size:22px;line-height:1.25;margin:40px 0 12px;font-weight:600}
.meta{font-family:-apple-system,BlinkMacSystemFont,"Helvetica Neue",Arial,sans-serif;font-size:13px;color:rgba(0,0,0,.5);margin:0 0 32px}
.hero-fallback{width:100%;aspect-ratio:16/9;border-radius:4px;margin:0 0 32px;background:linear-gradient(135deg,#e4e0d6 0%,#cfc8b8 50%,#b9ae97 100%)}
p{font-size:17px;line-height:1.65;margin:0 0 18px}
.intro p{font-size:19px}
.intro a,section a{text-decoration:underline}
.tags{list-style:none;display:flex;flex-wrap:wrap;gap:8px;padding:0;margin:40px 0 0}
.tags li{font-family:-apple-system,BlinkMacSystemFont,"Helvetica Neue",Arial,sans-serif;font-size:12px;background:rgba(0,0,0,.06);padding:5px 12px;border-radius:999px}
.listing{list-style:none;padding:0;margin:32px 0 0;display:flex;flex-direction:column;gap:32px}
.listing li a{display:block;text-decoration:none;color:inherit;border-top:1px solid rgba(0,0,0,.1);padding-top:24px}
.listing h2{margin:0 0 8px;font-size:24px}
`.trim();

export function renderArticleHtml(article: SeoPage): string {
  const url = articleUrl(article.slug);
  const metaTitle = article.metaTitle || article.title;
  const metaDescription = article.metaDescription ?? "";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: metaDescription,
    datePublished: article.date.toISOString(),
    dateModified: article.updatedAt.toISOString(),
    author: { "@type": "Organization", name: BUSINESS_CONFIG.authorOrgName },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_CONFIG.authorOrgName,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const sectionsHtml = article.sections
    .map((s) => `<section><h2>${escapeHtml(s.heading)}</h2><p>${renderInlineContent(s.content)}</p></section>`)
    .join("\n");

  const tagsHtml = article.tags.length
    ? `<ul class="tags">${article.tags.map((t) => `<li>${escapeHtml(t)}</li>`).join("")}</ul>`
    : "";

  return `<!doctype html>
<html lang="${BUSINESS_CONFIG.language}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(metaTitle)}</title>
<meta name="description" content="${escapeHtml(metaDescription)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="article">
<meta property="og:title" content="${escapeHtml(metaTitle)}">
<meta property="og:description" content="${escapeHtml(metaDescription)}">
<meta property="og:url" content="${url}">
<meta property="og:locale" content="${BUSINESS_CONFIG.locale}">
<meta property="article:published_time" content="${article.date.toISOString()}">
<meta property="article:modified_time" content="${article.updatedAt.toISOString()}">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${escapeHtml(metaTitle)}">
<meta name="twitter:description" content="${escapeHtml(metaDescription)}">
<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
<style>${BASE_STYLE}</style>
</head>
<body>
<header class="site-header"><a href="${BUSINESS_CONFIG.siteUrl}/">mund studio</a></header>
<main>
<article>
<p class="eyebrow">${escapeHtml(article.category ?? "")}</p>
<h1>${escapeHtml(article.title)}</h1>
<p class="meta">${escapeHtml(article.readTime ?? "")} · Mis à jour le ${formatDateFr(article.updatedAt)}</p>
<div class="hero-fallback" aria-hidden="true"></div>
<div class="intro"><p>${renderInlineContent(article.intro)}</p></div>
${sectionsHtml}
${tagsHtml}
</article>
</main>
<footer class="site-footer">${escapeHtml(BUSINESS_CONFIG.name)} — ${escapeHtml(BUSINESS_CONFIG.address)}</footer>
</body>
</html>`;
}

export function renderListingHtml(articles: SeoPage[]): string {
  const url = `${BUSINESS_CONFIG.siteUrl}${BUSINESS_CONFIG.journalPath}`;

  const items = articles
    .map(
      (a) => `<li><a href="${escapeHtml(BUSINESS_CONFIG.journalPath)}/${escapeHtml(a.slug)}">
<p class="eyebrow">${escapeHtml(a.category ?? "")}</p>
<h2>${escapeHtml(a.title)}</h2>
<p>${escapeHtml(a.metaDescription ?? "")}</p>
</a></li>`,
    )
    .join("\n");

  return `<!doctype html>
<html lang="${BUSINESS_CONFIG.language}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Journal — ${escapeHtml(BUSINESS_CONFIG.name)}</title>
<meta name="description" content="Conseils, coulisses et inspirations florales par ${escapeHtml(BUSINESS_CONFIG.name)}.">
<link rel="canonical" href="${url}">
<style>${BASE_STYLE}</style>
</head>
<body>
<header class="site-header"><a href="${BUSINESS_CONFIG.siteUrl}/">mund studio</a></header>
<main>
<h1>Journal</h1>
<ul class="listing">
${items}
</ul>
</main>
<footer class="site-footer">${escapeHtml(BUSINESS_CONFIG.name)} — ${escapeHtml(BUSINESS_CONFIG.address)}</footer>
</body>
</html>`;
}

export function renderSitemapXml(articles: SeoPage[]): string {
  const base = BUSINESS_CONFIG.siteUrl;
  const journalPath = BUSINESS_CONFIG.journalPath;
  const today = new Date().toISOString().slice(0, 10);

  const urls = [
    { loc: `${base}${journalPath}`, lastmod: today, changefreq: "daily", priority: "0.7" },
    ...articles.map((a) => ({
      loc: `${base}${journalPath}/${a.slug}`,
      lastmod: a.updatedAt.toISOString().slice(0, 10),
      changefreq: "monthly",
      priority: "0.6",
    })),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;
}
