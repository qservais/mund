import { pgTable, serial, text, integer, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const reviewCommentsTable = pgTable("review_comments", {
  id: serial("id").primaryKey(),
  pageUrl: text("page_url"),
  comment: text("comment"),
  element: text("element"),
  elementPath: text("element_path"),
  event: text("event"),
  raw: jsonb("raw"),
  resolved: integer("resolved").default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export const insertReviewCommentSchema = createInsertSchema(reviewCommentsTable).omit({
  id: true,
  createdAt: true,
});

export type InsertReviewComment = z.infer<typeof insertReviewCommentSchema>;
export type ReviewComment = typeof reviewCommentsTable.$inferSelect;
