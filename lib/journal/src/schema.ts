import { z } from "zod/v4";

export const SectionSchema = z.object({
  heading: z.string().min(3),
  content: z.string().min(50),
});

export const ArticleSchema = z.object({
  title: z.string().min(10).max(100),
  metaTitle: z.string().min(10).max(70),
  metaDescription: z.string().min(50).max(165),
  intro: z.string().min(80),
  sections: z.array(SectionSchema).min(3).max(5),
  readTime: z.string().min(2).max(12),
  tags: z.array(z.string()).max(8),
});

export type Article = z.infer<typeof ArticleSchema>;
export type Section = z.infer<typeof SectionSchema>;

/**
 * Plain JSON Schema counterpart of ArticleSchema for the Claude API's
 * output_config.format (json_schema). Structured outputs don't support
 * minLength/maxLength/array-length constraints, so those are enforced by
 * ArticleSchema.parse() afterward instead.
 */
export const ARTICLE_JSON_SCHEMA = {
  type: "object",
  properties: {
    title: { type: "string", description: "Titre H1 accrocheur (max 70 caractères)" },
    metaTitle: { type: "string", description: "Titre SEO (max 60 caractères)" },
    metaDescription: { type: "string", description: "Meta description avec valeur ajoutée (max 155 caractères)" },
    intro: { type: "string", description: "Introduction, 2-3 paragraphes (~150 mots)" },
    sections: {
      type: "array",
      description: "3 à 5 sections H2, chacune 150-200 mots",
      items: {
        type: "object",
        properties: {
          heading: { type: "string" },
          content: { type: "string" },
        },
        required: ["heading", "content"],
        additionalProperties: false,
      },
    },
    readTime: { type: "string", description: "Ex: '5 min'" },
    tags: {
      type: "array",
      items: { type: "string" },
    },
  },
  required: ["title", "metaTitle", "metaDescription", "intro", "sections", "readTime", "tags"],
  additionalProperties: false,
};
