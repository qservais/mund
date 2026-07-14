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

// Same tokens as the live site (see artifacts/mund-std/src/components/Layout.tsx,
// ArtboardShell.tsx, MobileShell.tsx and index.css): #f4f4f2 / #151515, Cormorant
// Garamond for headings (loaded from the same Google Fonts URL as index.html —
// "Helvetica Now Display" is never actually @font-face'd anywhere on the site, so
// it already falls back to Helvetica Neue/Arial there too; same here).
// Deliberate deviation: the site's own body-copy token (BODY in ArtboardShell.tsx)
// is 15px / weight 300 / letter-spacing -0.06em / line-height 1.0 — accurate for
// short nav labels and 2-3 sentence bios, but that tracking/line-height would make
// 150+ word article paragraphs look broken. Headings, nav, meta, and footer use the
// exact site tokens; article paragraphs use a lighter tracking and taller
// line-height so multi-paragraph sections stay readable.
const SERIF_FONT = '"Cormorant Garamond", "Times New Roman", Times, serif';
const BODY_FONT = '"Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif';

// Full 5-item menu (matches MobileShell.tsx / ArtboardShell.tsx — Layout.tsx's
// desktop non-artboard header omits "contact", but that looks like an
// inconsistency in the site itself rather than something worth copying here).
const NAV_ITEMS: { href: string; label: string }[] = [
  { href: "/floral", label: "créations" },
  { href: "/abonnements", label: "fleurs" },
  { href: "/past", label: "archive" },
  { href: "/about", label: "à propos" },
  { href: "/contact", label: "contact" },
];

const GOOGLE_FONTS_HEAD = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&display=swap" rel="stylesheet">`;

const BASE_STYLE = `
:root{color-scheme:light}
*{box-sizing:border-box}
html{overflow-x:hidden}
body{margin:0;background:#f4f4f2;color:#151515;font-family:${BODY_FONT};-webkit-font-smoothing:antialiased;overflow-x:hidden}
a{color:inherit}

.site-header{position:sticky;top:0;z-index:40;background:#f4f4f2}
.site-header-inner{display:grid;grid-template-columns:1fr auto 1fr;align-items:start;padding:24px clamp(16px,10vw,130px) 16px;gap:16px}
.site-nav{display:flex;flex-direction:column;gap:4px}
.site-nav a{font-family:${BODY_FONT};font-size:15px;font-weight:300;letter-spacing:-0.06em;line-height:0.9;color:rgba(0,0,0,0.38);text-decoration:none}
.site-brand{display:block;text-decoration:none;justify-self:center}
.site-brand img{width:clamp(140px,22vw,260px);display:block}
.site-header-right{display:flex;justify-content:flex-end;align-items:baseline}
.site-header-right a{font-family:${BODY_FONT};font-size:15px;font-weight:300;letter-spacing:-0.06em;color:rgba(0,0,0,0.45);text-decoration:none}
.site-header-divider{height:1px;background:rgba(0,0,0,0.1);margin:0 clamp(16px,10vw,130px)}
.nav-toggle{position:absolute;opacity:0;height:0;width:0}
.nav-toggle-label{display:none}
.mobile-menu{display:none}

main{max-width:700px;margin:0 auto;padding:56px clamp(16px,10vw,64px) 96px}

.eyebrow{font-family:${BODY_FONT};font-size:12px;font-weight:300;text-transform:uppercase;letter-spacing:0.08em;color:rgba(0,0,0,0.45);margin:0 0 14px}
h1{font-family:${SERIF_FONT};font-weight:700;letter-spacing:-0.03em;font-size:clamp(30px,4.5vw,46px);line-height:1.08;margin:0 0 16px}
h2{font-family:${SERIF_FONT};font-weight:700;letter-spacing:-0.02em;font-size:clamp(21px,2.6vw,26px);line-height:1.2;margin:44px 0 14px}
.meta{font-family:${BODY_FONT};font-size:13px;font-weight:300;letter-spacing:-0.02em;color:rgba(0,0,0,0.45);margin:0 0 32px}
.hero-fallback{width:100%;aspect-ratio:16/9;margin:0 0 36px;background:linear-gradient(135deg,#eae6db 0%,#ddd7c8 55%,#c9c1ac 100%)}
p{font-family:${BODY_FONT};font-size:17px;font-weight:300;letter-spacing:-0.01em;line-height:1.55;margin:0 0 18px}
.intro p{font-size:19px;line-height:1.5}
.intro a,section a{text-decoration:underline;text-underline-offset:2px}
.tags{list-style:none;display:flex;flex-wrap:wrap;gap:8px;padding:0;margin:44px 0 0}
.tags li{font-family:${BODY_FONT};font-size:12px;font-weight:300;letter-spacing:-0.01em;background:rgba(0,0,0,.06);padding:6px 14px;border-radius:999px}

.cta-block{margin-top:56px;padding-top:40px;border-top:1px solid rgba(0,0,0,.1)}
.cta-block p{font-size:17px}
.cta-link{display:inline-block;font-family:${BODY_FONT};font-size:17px;font-weight:300;letter-spacing:-0.02em;color:#151515;text-decoration:none;border-bottom:1px solid rgba(0,0,0,.55);padding-bottom:2px;margin:2px 0 28px}
.explore-more{display:flex;flex-wrap:wrap;gap:8px 20px}
.explore-more a{font-family:${BODY_FONT};font-size:14px;font-weight:300;letter-spacing:-0.02em;color:rgba(0,0,0,.5);text-decoration:underline;text-underline-offset:2px}

.listing-list{list-style:none;padding:0;margin:8px 0 0}
.listing-list li{border-top:1px solid rgba(0,0,0,.1)}
.listing-list li:last-child{border-bottom:1px solid rgba(0,0,0,.1)}
.listing-list a{display:block;text-decoration:none;color:inherit;padding:28px 0}
.listing-list h2{margin:2px 0 8px;font-size:24px}
.listing-list p{font-size:15px;line-height:1.5;margin:0;color:rgba(0,0,0,.65)}

.site-footer{padding:22px clamp(16px,10vw,130px);border-top:1px solid rgba(0,0,0,.1);display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:8px;font-family:${BODY_FONT};font-size:15px;font-weight:300;letter-spacing:-0.06em;color:rgba(0,0,0,.4)}
.site-footer a{color:rgba(0,0,0,.4);text-decoration:none}

@media (max-width: 640px){
  .site-header-inner{position:relative;display:flex;align-items:center;padding:18px 20px 14px}
  .site-nav,.site-header-right{display:none}
  .site-brand{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}
  .site-brand img{width:clamp(120px,38vw,200px)}
  .nav-toggle-label{display:flex;flex-direction:column;justify-content:center;gap:5px;width:24px;height:16px;cursor:pointer}
  .nav-toggle-label span{display:block;height:1px;background:#151515}
  .mobile-menu{display:flex;flex-direction:column;max-height:0;overflow:hidden;padding:0 20px;transition:max-height .35s ease}
  .mobile-menu a{font-family:${SERIF_FONT};font-size:24px;font-weight:700;text-transform:uppercase;letter-spacing:-0.02em;color:#151515;text-decoration:none;padding:12px 0;border-top:1px solid rgba(0,0,0,.08)}
  .nav-toggle:checked ~ .mobile-menu{max-height:400px;padding-bottom:16px}
  .site-footer{flex-direction:column;text-align:center}
}
`.trim();

function renderHeader(): string {
  const navDesktop = NAV_ITEMS.map(
    (item) => `<a href="${BUSINESS_CONFIG.siteUrl}${item.href}">${escapeHtml(item.label)}</a>`,
  ).join("\n");
  const navMobile = NAV_ITEMS.map(
    (item) => `<a href="${BUSINESS_CONFIG.siteUrl}${item.href}">${escapeHtml(item.label)}</a>`,
  ).join("\n");

  return `<header class="site-header">
<input type="checkbox" id="nav-toggle" class="nav-toggle">
<div class="site-header-inner">
<nav class="site-nav">
${navDesktop}
</nav>
<a class="site-brand" href="${BUSINESS_CONFIG.siteUrl}/"><img src="/svg/mund%20studio.svg" alt="mund studio"></a>
<div class="site-header-right"><a href="${BUSINESS_CONFIG.siteUrl}/floral/pro">pro</a></div>
<label for="nav-toggle" class="nav-toggle-label" aria-label="Menu"><span></span><span></span><span></span></label>
</div>
<div class="site-header-divider"></div>
<nav class="mobile-menu" aria-label="Menu principal">
${navMobile}
</nav>
</header>`;
}

function renderFooter(): string {
  return `<footer class="site-footer">
<span>${escapeHtml(BUSINESS_CONFIG.name)} — ${escapeHtml(BUSINESS_CONFIG.address)}</span>
<span>vides et pleins / chaos et structure</span>
<a href="https://instagram.com/mund.std" target="_blank" rel="noreferrer">@mund.std</a>
</footer>`;
}

function renderCtaBlock(): string {
  return `<section class="cta-block">
<p class="eyebrow">Devis &amp; projets</p>
<p>Nous accompagnons chaque projet floral de manière unique — mariage, événement ou abonnement. Envie d'en discuter ?</p>
<a class="cta-link" href="${BUSINESS_CONFIG.siteUrl}/contact">Écrivez-nous →</a>
<nav class="explore-more" aria-label="Explorer le site">
<a href="${BUSINESS_CONFIG.siteUrl}/floral">voir nos créations</a>
<a href="${BUSINESS_CONFIG.siteUrl}/abonnements">découvrir les abonnements</a>
</nav>
</section>`;
}

function htmlShell(head: string, body: string): string {
  return `<!doctype html>
<html lang="${BUSINESS_CONFIG.language}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="icon" type="image/svg+xml" href="/favicon.svg?v=2">
${GOOGLE_FONTS_HEAD}
${head}
<style>${BASE_STYLE}</style>
</head>
<body>
${renderHeader()}
<main>
${body}
</main>
${renderFooter()}
</body>
</html>`;
}

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
    publisher: { "@type": "Organization", name: BUSINESS_CONFIG.authorOrgName },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const head = `<title>${escapeHtml(metaTitle)}</title>
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
<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;

  const sectionsHtml = article.sections
    .map((s) => `<section><h2>${escapeHtml(s.heading)}</h2><p>${renderInlineContent(s.content)}</p></section>`)
    .join("\n");

  const tagsHtml = article.tags.length
    ? `<ul class="tags">${article.tags.map((t) => `<li>${escapeHtml(t)}</li>`).join("")}</ul>`
    : "";

  const body = `<article>
<p class="eyebrow">${escapeHtml(article.category ?? "")}</p>
<h1>${escapeHtml(article.title)}</h1>
<p class="meta">${escapeHtml(article.readTime ?? "")} · Mis à jour le ${formatDateFr(article.updatedAt)}</p>
<div class="hero-fallback" aria-hidden="true"></div>
<div class="intro"><p>${renderInlineContent(article.intro)}</p></div>
${sectionsHtml}
${tagsHtml}
${renderCtaBlock()}
</article>`;

  return htmlShell(head, body);
}

export function renderListingHtml(articles: SeoPage[]): string {
  const url = `${BUSINESS_CONFIG.siteUrl}${BUSINESS_CONFIG.journalPath}`;

  const head = `<title>Journal — ${escapeHtml(BUSINESS_CONFIG.name)}</title>
<meta name="description" content="Conseils, coulisses et inspirations florales par ${escapeHtml(BUSINESS_CONFIG.name)}.">
<link rel="canonical" href="${url}">`;

  const items = articles
    .map(
      (a) => `<li><a href="${escapeHtml(BUSINESS_CONFIG.journalPath)}/${escapeHtml(a.slug)}">
<p class="eyebrow">${escapeHtml(a.category ?? "")}</p>
<h2>${escapeHtml(a.title)}</h2>
<p>${escapeHtml(a.metaDescription ?? "")}</p>
</a></li>`,
    )
    .join("\n");

  const body = `<h1>Journal</h1>
<ul class="listing-list">
${items}
</ul>`;

  return htmlShell(head, body);
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
