const COMBINING_DIACRITICS = new RegExp("[\\u0300-\\u036f]", "g");

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(COMBINING_DIACRITICS, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}
