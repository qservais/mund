// Per-model USD pricing per token, for cost logging only (not billing-accurate).
// Standard rates — claude-sonnet-5 has an introductory $2/$10 rate through
// 2026-08-31, but this uses the durable post-intro rate so estimates don't
// need to change again in a few weeks.
const PRICING: Record<string, { input: number; output: number }> = {
  "claude-sonnet-5": { input: 3 / 1_000_000, output: 15 / 1_000_000 },
  "claude-opus-4-8": { input: 5 / 1_000_000, output: 25 / 1_000_000 },
  "claude-haiku-4-5": { input: 1 / 1_000_000, output: 5 / 1_000_000 },
};

export function estimateCostUsd(model: string, inputTokens: number, outputTokens: number): number {
  const pricing = PRICING[model] ?? PRICING["claude-sonnet-5"]!;
  return inputTokens * pricing.input + outputTokens * pricing.output;
}
