---
name: Image strategy MUND STUDIO
description: Règle d'or pour les images — toujours /public/images/*.webp, jamais @assets pour les photos de contenu
---

## Règle

Les photos de contenu (heroes, galeries, portraits) doivent être référencées par URL statique vers `/public/images/*.webp` (fichier dans `artifacts/mund-std/public/images/`), PAS importées via `@assets` (qui pointe vers `attached_assets/` — fichiers JPG/PNG bruts pouvant dépasser 20MB).

**Why:** Les fichiers dans `attached_assets/` sont des photos brutes non compressées (jusqu'à 23MB). Vite les bundle tel quel. Les WebPs dans `/public/images/` sont 97–99% plus légers et servis directement par le serveur statique.

**How to apply:**
- Pour toute nouvelle image de contenu : convertir avec `ffmpeg -c:v libwebp -quality 82` et déposer dans `public/images/`
- Dans le composant : `const img = "/images/mon-image.webp"` (string, pas import)
- Les overlay PNG de référence ArtboardShell (6MB chacun, `overlayRef` prop) sont des exceptions — ils servent uniquement au positionnement desktop et peuvent rester en @assets pour l'instant
- Hero image : toujours marquer `priority` sur `<LazyImage>` ou `fetchPriority="high"` sur `<img>` brut

## Correspondances connues (attached_assets → public/images)
- PAGE_1_-_1_1782856875003.jpg → hero-home.webp
- PAGE_1-2_1782856875004.JPG → svc1.webp
- PAGE_1-3_1782856875004.jpg → svc2.webp
- WORK_1_1782856875004.jpg → floral-right.webp
- WORK_2_1782856875004.jpg → floral-set1.webp
- WORK_3_1782856875004.jpg → floral-set2.webp
- ABOUT_1782856875002.jpg → julie.webp
- 5/6/7/8/9_1782856798282*.jpg → pro-*.webp (générés)
- iOS/IMG_*.jpg|png|jpeg → abn-1 à abn-6.webp (générés)
