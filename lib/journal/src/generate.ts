import Anthropic from "@anthropic-ai/sdk";
import { eq, asc } from "drizzle-orm";
import { db, seoPages, generationLogs, type SeoInternalLink } from "@workspace/db";
import { BUSINESS_CONFIG, type AllowedCategory } from "./config";
import { ArticleSchema, ARTICLE_JSON_SCHEMA } from "./schema";
import { slugify } from "./slug";
import { estimateCostUsd } from "./pricing";
import topicsCatalogJson from "./topics.json";

export type Topic = { topic: string; category: AllowedCategory };

export const topicsCatalog = topicsCatalogJson as Topic[];

/** Prefers a never-generated topic; once the catalog is exhausted, re-picks the stalest published article to refresh. */
export async function pickNextTopic(): Promise<Topic> {
  const existing = await db.select({ slug: seoPages.slug }).from(seoPages);
  const usedSlugs = new Set(existing.map((p) => p.slug));
  const unused = topicsCatalog.filter((t) => !usedSlugs.has(slugify(t.topic)));

  if (unused.length > 0) {
    return unused[Math.floor(Math.random() * unused.length)]!;
  }

  const [oldest] = await db
    .select()
    .from(seoPages)
    .where(eq(seoPages.status, "published"))
    .orderBy(asc(seoPages.lastReviewedAt))
    .limit(1);

  const fromCatalog = topicsCatalog.find((t) => slugify(t.topic) === oldest?.slug);
  return fromCatalog ?? topicsCatalog[0]!;
}

export type GenerateResult =
  | { ok: true; slug: string; title: string }
  | { ok: false; error: string };

const INTERNAL_LINK_RE = /\[([^\]]+)\]\(\/([a-z0-9-]+)\)/g;

export async function generateArticle(topic: string, category: AllowedCategory): Promise<GenerateResult> {
  const slug = slugify(topic);
  const year = new Date().getFullYear();
  const cfg = BUSINESS_CONFIG;

  // Lock the slug first: a duplicate insert means another run is already
  // handling this topic, so bail out instead of generating twice.
  try {
    await db.insert(seoPages).values({
      slug,
      title: `[En cours] ${topic}`,
      intro: "",
      sections: [],
      category,
      status: "generating",
    });
  } catch {
    return { ok: false, error: `Slug "${slug}" déjà en cours ou existant` };
  }

  const existingArticles = await db
    .select({ slug: seoPages.slug, title: seoPages.title })
    .from(seoPages)
    .where(eq(seoPages.status, "published"));

  const existingList = existingArticles.length
    ? existingArticles
        .slice(0, 15)
        .map((a) => `- "${a.title}" -> slug: ${a.slug}`)
        .join("\n")
    : "(aucun article existant pour le moment)";

  const systemPrompt = `Tu es un expert en ${cfg.expertField}. Tu rédiges des articles de blog SEO en français pour ${cfg.name}, studio de design floral fondé par Julie Ahn et basé à ${cfg.city} (${cfg.region}, ${cfg.country}). Le studio conçoit des compositions florales sur mesure et sculpturales pour des mariages, événements, scénographies, et propose des abonnements floraux pour particuliers et professionnels.

Règles strictes anti-hallucination :
- N'invente JAMAIS de prix ou de fourchette de prix. Dis que chaque projet est unique et renvoie vers un devis personnalisé.
- N'invente pas de noms de clients, de lieux d'événements ou de témoignages spécifiques.
- N'invente pas de données botaniques précises (durée de vie exacte en jours, toxicité, etc.) sans les nuancer ("en général", "selon les variétés").
- N'invente pas de récompenses, labels ou mentions presse.
- Utilise ${year} pour toute mention d'année. Évite "récemment" sans contexte temporel.
- Ton professionnel, chaleureux et éditorial — jamais familier, jamais survendeur.

Tu réponds uniquement avec un objet JSON respectant strictement le schéma fourni.`;

  const userPrompt = `Rédige un article de blog SEO sur le sujet suivant.

Sujet : ${topic}
Catégorie : ${category}
Longueur cible : ${cfg.minWords} à ${cfg.maxWords} mots au total (intro + sections)
Ton : professionnel, éditorial, utile à quelqu'un qui prépare un mariage, un événement, ou s'intéresse aux fleurs en ${cfg.country}.

Articles déjà publiés sur le site (pour le maillage interne — choisis 0 à 2 liens pertinents à insérer dans le corps d'une section, au format markdown [texte d'ancre](/slug), en réutilisant exactement un des slugs listés ci-dessous ; n'insère jamais un lien vers un slug absent de cette liste) :
${existingList}

Génère 3 à 5 sections H2.`;

  let usage: { input_tokens: number; output_tokens: number } = { input_tokens: 0, output_tokens: 0 };
  let parsed: ReturnType<typeof ArticleSchema.parse>;

  try {
    const anthropic = new Anthropic();
    const message = await anthropic.messages.create({
      model: cfg.anthropicModel,
      max_tokens: cfg.anthropicMaxTokens,
      thinking: { type: "disabled" },
      system: systemPrompt,
      output_config: { format: { type: "json_schema", schema: ARTICLE_JSON_SCHEMA } },
      messages: [{ role: "user", content: userPrompt }],
    });

    usage = message.usage;
    const rawText = message.content.map((b) => (b.type === "text" ? b.text : "")).join("");

    parsed = ArticleSchema.parse(JSON.parse(rawText));
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    await db.update(seoPages).set({ status: "failed", title: `[Échec] ${topic}` }).where(eq(seoPages.slug, slug));
    await db.insert(generationLogs).values({
      topic,
      slug,
      status: "failed",
      errorMessage,
      model: cfg.anthropicModel,
    });
    return { ok: false, error: errorMessage };
  }

  const internalLinks: SeoInternalLink[] = [];
  for (const section of parsed.sections) {
    for (const match of section.content.matchAll(INTERNAL_LINK_RE)) {
      internalLinks.push({ anchor: match[1]!, slug: match[2]! });
    }
  }

  const now = new Date();
  await db
    .update(seoPages)
    .set({
      title: parsed.title,
      metaTitle: parsed.metaTitle,
      metaDescription: parsed.metaDescription,
      intro: parsed.intro,
      sections: parsed.sections,
      internalLinks,
      readTime: parsed.readTime,
      tags: parsed.tags,
      status: "published",
      updatedAt: now,
      lastReviewedAt: now,
    })
    .where(eq(seoPages.slug, slug));

  await db.insert(generationLogs).values({
    topic,
    slug,
    status: "success",
    inputTokens: usage.input_tokens,
    outputTokens: usage.output_tokens,
    costUsd: estimateCostUsd(cfg.anthropicModel, usage.input_tokens, usage.output_tokens).toFixed(6),
    model: cfg.anthropicModel,
  });

  return { ok: true, slug, title: parsed.title };
}
