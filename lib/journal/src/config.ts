export const BUSINESS_CONFIG = {
  name: "MUND STUDIO",
  type: "design floral",
  expertField: "création florale et scénographie végétale en Belgique",

  city: "Liège",
  region: "Wallonie",
  country: "Belgique",
  address: "Rue Monulphe 7, 4000 Liège, Belgique",

  siteUrl: (process.env["SITE_URL"] ?? "https://mund.be").replace(/\/$/, ""),
  journalPath: "/journal",

  language: "fr",
  locale: "fr_BE",
  authorOrgName: "MUND STUDIO",

  allowedCategories: [
    "Mariage",
    "Événements & Scénographie",
    "Conseils & Entretien",
    "Abonnements floraux",
    "Saisons & Botanique",
    "Inspiration",
  ] as const,

  defaultCategory: "Conseils & Entretien",
  minWords: 600,
  maxWords: 900,

  // claude-sonnet-5: near-Opus quality on this kind of structured, ~700-word
  // generation task at a fraction of the cost — sensible for a recurring
  // cron job. Bump to claude-opus-4-8 if quality ever falls short.
  anthropicModel: "claude-sonnet-5",
  anthropicMaxTokens: 4096,
} as const;

export type AllowedCategory = (typeof BUSINESS_CONFIG.allowedCategories)[number];
