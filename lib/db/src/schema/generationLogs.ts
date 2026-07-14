import { pgTable, serial, text, timestamp, integer, numeric } from "drizzle-orm/pg-core";

export const generationLogs = pgTable("generation_logs", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  topic: text("topic").notNull(),
  slug: text("slug"),
  status: text("status").notNull(), // 'success' | 'failed'
  errorMessage: text("error_message"),
  inputTokens: integer("input_tokens"),
  outputTokens: integer("output_tokens"),
  costUsd: numeric("cost_usd", { precision: 10, scale: 6 }),
  model: text("model"),
});

export type GenerationLog = typeof generationLogs.$inferSelect;
