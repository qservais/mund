import { pgTable, serial, text, timestamp, jsonb, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export type SeoSection = { heading: string; content: string };
export type SeoInternalLink = { anchor: string; slug: string };

export const seoPages = pgTable("seo_pages", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  date: timestamp("date", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  lastReviewedAt: timestamp("last_reviewed_at", { withTimezone: true }).notNull().defaultNow(),

  title: text("title").notNull(),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  intro: text("intro").notNull().default(""),
  sections: jsonb("sections").$type<SeoSection[]>().notNull().default([]),
  internalLinks: jsonb("internal_links").$type<SeoInternalLink[]>().notNull().default([]),

  heroImageUrl: text("hero_image_url"),
  heroImageAlt: text("hero_image_alt"),

  category: text("category"),
  readTime: text("read_time"),
  tags: text("tags").array().notNull().default([]),

  // 'generating' locks the slug during a run so two concurrent triggers can't
  // create duplicate articles; 'failed' keeps a record for debugging without
  // publishing anything; 'archived' hides a page without deleting its row.
  status: varchar("status", { length: 16 }).notNull().default("published"),
});

export const insertSeoPageSchema = createInsertSchema(seoPages).omit({ id: true });
export type InsertSeoPage = z.infer<typeof insertSeoPageSchema>;
export type SeoPage = typeof seoPages.$inferSelect;
