# MEGA-PROMPT REPLIT — AUDIT-FIRST → LIVRAISON COMPLÈTE — madebydone.be (v4.1 unifié)

> **Ce prompt fusionne 3 prompts Done. :** pré-livraison technique, audit SEO/indexing/AI-rendering, et audit UX/UI/a11y back-office.
> Il ajoute un **bootstrap de skills** (auto-install + inventaire) et impose **une seule philosophie : AUDIT-FIRST → validation → FIX**, y compris pour les non-négociables (favicon, nettoyage Replit, build, secrets), qui sont marqués P0 mais attendent quand même le feu vert.

---

## Variables à remplir avant de lancer

```
PRODUCTION_DOMAIN   = https://example.com
PREVIEW_URL         = https://<app>.replit.app        # ou .repl.co
DYNAMIC_ROUTE       = /blog/<vrai-slug>                # une vraie URL DB/CMS ; vide si aucune
LANGUAGES           = FR, NL, EN                        # vide si monolingue
LOCALE_DEFAUT       = fr-BE                             # fr-BE / nl-BE / en
PROJECT_TYPE        = vitrine | e-commerce | SaaS | multi-tenant | refonte
```

## Identité agent & règles globales

Tu es l'agent de build (Replit Agent / Claude Code / autre). Tu travailles pour **Done.** (madebydone.be).
Stack par défaut : **Next.js 14 App Router, TypeScript, Tailwind, Framer Motion, Lucide (SVG only, zéro emoji), Resend, next-intl**.

**Non négociables transverses (à respecter dans toutes les phases) :**
- Crédit footer **« Site réalisé par Done. — madebydone.be »** présent et intact.
- Couleur de marque Done. `#3361FF` / `#2B5BFF` jamais altérée dans les composants Done.
- **Zéro placeholder visible** sur le site livré (aucun texte entre crochets, aucun lorem).
- **Zéro trace Replit** côté client (HTML, JS, mentions légales, favicon).
- **Aucune promesse juridique absolue** dans les textes légaux.

## Philosophie d'exécution (UNIQUE)

1. **PHASE 0a — Bootstrap skills** (auto-install + fallback). Aucune autre action avant.
2. **PHASE 0b — Cadrage interactif** (exploitation des skills + élicitation client + plan validé).
3. **PHASE 1 — AUDIT (READ-ONLY).** Aucune modification, aucun install de dépendance applicative, aucun edit de config, aucune commande destructive. Un seul rapport, preuves obligatoires.
4. **STOP.** Attendre la validation explicite du client (Quentin).
5. **PHASE 2 — FIX par vagues** (Wave 1 → 2 → 3) seulement après feu vert.
6. **PHASE 3 — Vérification pré-livraison finale** (checklist-gate) avant de déclarer « prêt ».

> **Règle de preuve (globale, non négociable) :** ne jamais marquer un point ✅ sans preuve. Preuve = sortie `curl` collée, `fichier:ligne`, ou description de screenshot. Un humain qui clique dans l'app ne prouve rien : seul un `curl` direct reproduit ce que voit Googlebot.

## Légende de sévérité unifiée (remplace les 2 échelles d'origine)

| Niveau | Libellé | Définition |
|---|---|---|
| 🔴 **P0** | Critical | Bloque crawl/indexation, sécurité, ou casse une promesse Done. (redirect loop, CSR-only, `noindex`, robots block, hard/soft 404, secret exposé, trace Replit visible, crédit footer absent). |
| 🟠 **P1** | High | Dégrade fortement ranking/conversion/a11y sans bloquer (CWV mauvais, formulaire cassé clavier, contraste AA échoué sur contenu clé). |
| 🟡 **P2** | Medium | Défaut notable, impact modéré (meta description manquante, état vide absent, incohérence design system). |
| 🔵 **P3** | Low | Cosmétique / nice-to-have. |
| ✅ **Pass** | — | Conforme, **avec la preuve** qui le démontre. |
| ⚪ **N/V** | Not Verified | **Pas pu vérifier** (outil absent, donnée hors d'atteinte, accès manquant). À déclarer explicitement — JAMAIS transformer un N/V en ✅ par déduction. |
| ℹ️ **Info** | — | Non applicable / contexte / décision consciente. |

## Format de finding unifié (obligatoire pour CHAQUE constat)

```
### [Scope: route ou composant] — [Titre du problème]
- Sévérité : 🔴 P0 | 🟠 P1 | 🟡 P2 | 🔵 P3 | ✅ Pass | ℹ️ Info
- Axe       : Rendering | SEO | i18n | Perf/CWV | Sécurité | Secrets | A11y | UX/UI | Email | Assets | Deps | Contenu | Data | Légal | Replit | Deploy
- Preuve    : `fichier:ligne` OU sortie curl collée OU description de screenshot
- Impact    : 1–2 phrases (impact utilisateur / business / crawl)
- Fix       : concret et spécifique (pas de conseil vague)
- Effort    : S | M | L
- Risque si modifié : ce qui pourrait casser
```

---

# PHASE 0a — BOOTSTRAP DES SKILLS (AUTO-INSTALL)

But : garantir que les skills de référence sont **présentes et chargeables** avant tout audit. Chaque skill a un mécanisme d'install natif différent ; si le mécanisme natif n'existe pas dans cet environnement (cas fréquent sur **Replit Agent**), utiliser le **fallback universel**.

### Marche à suivre, pour chaque skill

1. **Détecter** : la skill est-elle déjà disponible (dossier `skills/<name>/SKILL.md`, plugin chargé, ou commande dispo) ?
2. **Si absente → installer** via le mécanisme natif ci-dessous.
3. **Si le mécanisme natif échoue / indisponible → fallback universel :**
   ```bash
   mkdir -p ./.agent-skills
   git clone --depth 1 <repo_url> ./.agent-skills/<name>
   # puis CHARGER en contexte le(s) SKILL.md pertinent(s) :
   #   ./.agent-skills/<name>/skill/SKILL.md   (impeccable)
   #   ./.agent-skills/<name>/skills/<sub>/SKILL.md  (taste-skill, superpowers)
   ```
   Le fallback fonctionne partout (Replit inclus) car une skill = un `SKILL.md` lisible comme contexte.
4. **Logger** dans le rapport Phase 1 : skill, version/commit, méthode d'install (native vs fallback), statut.

### Table des skills requises

| Skill | Repo | Install natif | Rôle dans ce prompt |
|---|---|---|---|
| **impeccable** | `github.com/pbakaus/impeccable` | bundles via impeccable.style, ou copie de `skill/` ; commandes `/impeccable …` | **Audit UX/UI + a11y front** : `/impeccable audit` (a11y/perf/responsive), `/impeccable critique` (hiérarchie, clarté), références typo/couleur/motion/spatial/interaction/responsive/ux-writing + 27 anti-patterns. |
| **taste-skill** | `github.com/leonxlnx/taste-skill` | `npx skills add https://github.com/Leonxlnx/taste-skill` (option `--skill "design-taste-frontend"`) | **Qualité design "anti-slop"** (layout, typo, motion, spacing) — surtout sur les V1 « séduction ». |
| **ui-ux-pro-max** | `github.com/nextlevelbuilder/ui-ux-pro-max-skill` | `npm i -g uipro-cli` (puis commandes CLI) | **Cohérence design system** : 161 règles de raisonnement, 67 styles, générateur de design system. |
| **superpowers** | `github.com/obra/superpowers` | Claude Code : `/plugin install superpowers@claude-plugins-official` ; Gemini : `gemini extensions install …` ; **n'existe pas en natif Replit** | **Méthodologie d'EXÉCUTION (Phase 2)** : TDD, `brainstorming`, `writing-plans`, `requesting-code-review`, `systematic-debugging`, `verification-before-completion`. **Pas un outil d'audit** — gouverne la discipline des fixes Wave 2/3. |

> ⚠️ **Ne pas confondre les rôles.** impeccable / taste / ui-ux-pro-max alimentent l'**audit design** (Phase 1, §11). superpowers encadre la **manière d'implémenter les correctifs** (Phase 2). Si superpowers ne s'installe pas dans l'environnement courant, charger au minimum, via fallback, les `SKILL.md` de `test-driven-development`, `requesting-code-review`, `verification-before-completion`.

### Inventaire des skills natives du projet (ex-Étape 0.1)

En plus des 4 ci-dessus, recenser les **agent skills déjà installées** sur le projet (SEO, sécurité, perf, framework, Prisma/Drizzle, RGPD…). Les interroger selon leur domaine. **Règle : les skills sont des co-pilotes, pas la vérité absolue.** En cas de conflit avec une règle stricte de ce prompt (nettoyage Replit, zéro placeholder, RGPD strict, règle de preuve), **ce prompt l'emporte**. Documenter chaque arbitrage.

---

# PHASE 0b — CADRAGE INTERACTIF (OBLIGATOIRE)

Ne jamais lancer l'audit à l'aveugle. Présenter au client (Quentin) le questionnaire ci-dessous **de façon groupée et lisible** (menu numéroté), pas une question à la fois. Adapter selon `PROJECT_TYPE`.

```
Avant l'audit pré-livraison, quelques précisions pour adapter le périmètre.
Réponds en numérotant tes choix, ou écris "défaut" pour tout activer en standard.

1. Tracking analytique
   a) Aucun (vitrine simple, RGPD allégé)
   b) GTM + GA4 (Consent Mode v2)
   c) GTM + GA4 + autres (Meta Pixel, Hotjar…) — préciser
   → Si b/c : as-tu un ID GTM réel ? (sinon placeholder signalé)

2. Bannière de consentement (CMP)
   a) Inutile (lié à 1.a)   b) CMP existant — lequel ?
   c) Bannière maison minimale   d) Aucune pour l'instant — signaler

3. Pages légales (cocher)
   [ ] Mentions légales  [ ] Confidentialité  [ ] Cookies (si tracking)
   [ ] CGV + rétractation 14 j (si paiement)  [ ] Aucune (gérées ailleurs)

4. CGV (si pertinent)
   a) B2C (rétractation 14 j)  b) B2B  c) B2C+B2B  d) Aucune

5. Langues : [détecté auto = LANGUAGES]  — confirmer + LOCALE_DEFAUT

6. CSP   a) Report-Only (reco 1re livraison)  b) Enforce  c) Aucune

7. Médias  a) Agressif (WebP partout, originaux supprimés)  b) Conservateur

8. Périmètre back-office : y a-t-il un /admin, /dashboard ou des routes
   protégées à auditer en UX/UI ?  a) Oui  b) Non

9. Refonte ? Anciennes URLs à rediriger (301) ?  a) Oui (liste)  b) Non

Non négociables (toujours audités, juste pour info) :
build check · audit secrets client · nettoyage Replit · favicon (purge + double
fail-safe) · a11y de base · pages d'erreur (404 + error.tsx) · crédit footer Done.
```

### Plan d'action validé (ex-Étape 0.3)
À partir des réponses + apports des skills : produire un **plan synthétique** (parties activées/sautées avec raison, outils tiers détectés, skills mobilisées, estimation grossière du nb de fichiers, points d'attention projet) → **le soumettre pour validation**. N'exécuter l'audit qu'après. En cas de doute, redemander.

---

# PHASE 1 — AUDIT (READ-ONLY)

## §0 — Protocole de complétude (anti-oubli — à faire AVANT tout le reste)

L'objectif n'est pas « zéro défaut » mais **« zéro angle mort silencieux »**. Un oubli déclaré vaut mieux qu'un faux ✅.

**(a) Découverte exhaustive des routes — 4 sources, puis réconciliation.** Ne jamais auditer « les pages que je crois exister ». Énumérer depuis :
1. le **routeur / système de fichiers** (`app/**/page.tsx`, `pages/**`, route configs),
2. le **`sitemap.xml`** live,
3. tous les **liens internes** (nav, footer, menus, CTA — grep `href=`),
4. un **crawl réel** (ex. `npx linkinator PRODUCTION_DOMAIN --recurse` ou équivalent).

Puis **réconcilier** : toute route présente dans une source mais absente d'une autre est un finding (orpheline, manquante du sitemap, lien mort…). **Aucune route ne sort de l'audit sans être soit auditée, soit explicitement exclue avec raison.**

**(b) Matrice de couverture (obligatoire dans le rapport).** Lignes = routes découvertes ; colonnes = axes (§1→§21). Chaque cellule = `✅ / 🔴🟠🟡🔵 / ⚪ N/V / ℹ️ N/A`. **Une cellule vide = oubli** → le rapport ne peut pas être déclaré complet tant qu'il reste des cellules vides.

**(c) Registre des inconnues (N/V) & des hypothèses.** Tenir deux listes vivantes : ce que tu n'as **pas pu** vérifier (+ pourquoi + ce qu'il faudrait pour le faire), et chaque **hypothèse** posée. Ces listes apparaissent dans le livrable.

**(d) Seconde passe adversariale.** Une fois le rapport rédigé, répondre explicitement : *« Qu'est-ce que je n'ai PAS vérifié, et qu'est-ce qui pourrait casser malgré un rapport tout-vert ? »* — et compléter en conséquence.

## Règle de tooling : déterministe d'abord, jugement LLM en dernier recours

Partout où un outil déterministe existe, **l'exécuter et coller la sortie** plutôt que juger à l'œil. Lancer (si présents, sinon le noter en N/V) :
- **`npm audit --production`** + `npm outdated` → §18 supply chain.
- **axe-core** (`npx @axe-core/cli URL` ou Playwright+axe) → §10 a11y automatisé, en plus du manuel.
- **Lighthouse / PageSpeed Insights** (`npx lighthouse URL --only-categories=performance,accessibility,seo,best-practices`) → §8 CWV lab.
- **Vérificateur de liens** (linkinator / lychee) → §1, §17.
- **CLI déterministe d'impeccable** (27 règles anti-patterns, **sans clé API**) → §11.
- **Scripts de la skill `seo`** locale (preuves déterministes) → §1–§6.

> Le jugement de l'agent ne remplace jamais un outil disponible. S'il n'y a pas d'outil, le dire (et tester quand même au `curl` / à la main avec preuve).

---

Inspecter le **code** ET sonder le **site live** (`PRODUCTION_DOMAIN`, ou `PREVIEW_URL` si pas encore en prod). Pour chaque check live, tester **trois classes de routes** : Home `/`, une page statique (`/services`, `/about`), une page dynamique (`DYNAMIC_ROUTE`). Tester en requête **par défaut** ET en **Googlebot-mobile + header de langue** (la logique locale/redirect ne se déclenche souvent que pour les crawlers).

```bash
UA="Mozilla/5.0 (Linux; Android 6.0.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/W.X.Y.Z Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
```

## §1 — Rendering & crawlability — PRIORITÉ MAXIMALE
Le #1 tueur d'indexation : le serveur ne renvoie pas de vrai HTML en un seul hop. Pour chaque classe de route :
```bash
# (a) chaîne de redirection — doit être un SEUL 200, pas de boucle/chaîne Location
curl -sIL "PRODUCTION_DOMAIN/<path>" | grep -i "^HTTP\|^location"
# (b) idem en Googlebot mobile + langue (attrape les boucles locale)
curl -sIL -A "$UA" -H "Accept-Language: fr-BE" "PRODUCTION_DOMAIN/<path>" | grep -i "^HTTP\|^location"
# (c) contenu réel dans le HTML serveur, ou coquille vide / page 404 ?
curl -s "PRODUCTION_DOMAIN/<path>" | grep -ic '<div id="root"></div>'        # 1 = SPA shell vide
curl -s "PRODUCTION_DOMAIN/<path>" | grep -o "<h1[^>]*>[^<]*</h1>" | head -1   # vrai <h1> présent ?
```
Flaguer : **CSR-only shell** · **redirect loop / chaîne > 5 hops** · **soft 404** (200 servant du contenu 404) · **hard 404** sur route liée (nav/footer/sitemap) · **boucle trailing-slash** (`/x` ⇄ `/x/`) · **boucle locale** (`/x` ⇄ `/<lang>/x`). Indiquer le mécanisme de rendu par classe : **SSR / SSG / pre-render / CSR-only**.

## §2 — Robots & directives d'indexation
- `robots.txt` joignable (200), **pas de `Disallow: /` accidentel**, ligne `Sitemap:` vers le vrai sitemap.
- **Pas de `noindex` parasite** : grep `noindex`, `index: false`, `<meta name="robots"` ; vérifier l'en-tête `X-Robots-Tag` sur pages publiques (`curl -sI "PRODUCTION_DOMAIN/" | grep -i "x-robots-tag"`).
- **Crawlers IA** (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `CCBot`, `Bytespider`) : reporter allow/block et confirmer que c'est un choix *conscient*. N'affecte pas l'indexation Google — un block IA ne doit jamais toucher Googlebot par ricochet.

## §3 — Canonical
- Chaque page indexable a un `<link rel="canonical">` **auto-référent, absolu**, sur `PRODUCTION_DOMAIN`.
- **Aucun `.replit.app` / `.repl.co` / `localhost`** en canonical (grep code + HTML live).
- La forme (trailing-slash) du canonical **correspond à la forme qui renvoie 200**.
- Multilingue : chaque version de langue pointe vers elle-même.

## §4 — Sitemap
- `sitemap.xml` → 200 + XML valide, **URLs absolues prod uniquement**.
- Inclut **toutes** les routes indexables, y compris dynamiques (généré en interrogeant la DB/CMS, pas à la main).
- **Exclut** tout ce qui 404, redirige, ou est `noindex`. A `<lastmod>`, référencé dans `robots.txt`.
- Cross-check : chaque URL du sitemap passe le test « single 200 » de §1.

## §5 — Métadonnées par page
- `<title>` + `<meta name="description">` **uniques** par route, **server-rendered** (présents dans le HTML `curl` brut, pas injectés côté client seulement).
- `<html lang="…">` correct (et par locale si multilingue).
- Open Graph (`og:title/description/type/url/image`) + Twitter card, valeurs image/URL **absolues**.
- Aucun doublon de title/description.

## §6 — Données structurées (JSON-LD uniquement)
- Présent où pertinent : `Organization`/`LocalBusiness` (home, commerces locaux), `BlogPosting`/`Article`, `BreadcrumbList`.
- Dans `<script type="application/ld+json">` — **jamais** Microdata/RDFa. Valide (`@context`/`@type`, pas de placeholder).
- 🔴 **Flaguer et retirer** `FAQPage` (restreint gouv/santé depuis août 2023) et `HowTo` (rich results retirés sept 2023). Ne pas les recommander pour un site commercial.
- Pas requis pour l'indexation ni l'IA — ne pas sur-investir.

## §7 — i18n (si `LANGUAGES` rempli)
- Le routing locale **ne boucle pas** (rejouer §1 avec chaque header de langue).
- `hreflang` **réciproques** + `x-default`.
- Chaque URL de locale → 200 en un hop, avec son propre canonical + metadata. `JSON-LD inLanguage` cohérent. Pas de mélange `fr` / `fr-BE`.

## §8 — Performance & Core Web Vitals
- Reporter **LCP, INP** (⚠️ **pas FID**, retiré sept 2024), **CLS** (PageSpeed Insights si dispo). Indexation Google = **100 % mobile-first**.
- **Images** : tout `<img>` a un `alt` pertinent ; `width`/`height` explicites (anti-CLS) ; formats modernes (WebP/AVIF) ; `loading="lazy"` sous le fold ; `fetchpriority="high"` sur l'image LCP. **Aucune image > 200KB** (hero justifié max 400KB).
- **Vidéos** : H.264/VP9 CRF 28–32, décoratives sans audio (`-an`), `preload="metadata"` + `poster`, > 20MB → héberger en externe.
- **Fonts** : `font-display: swap`, `preconnect`.
- Joindre un **tableau avant/après** (poids images, First Load JS par route — aucune route > 300KB JS sans justif).

## §9 — Sécurité HTTP & secrets
**Headers** (`curl -sI`) : `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `X-Frame-Options`/`frame-ancestors`, `Referrer-Policy`, `Permissions-Policy` (caméra/micro/géoloc off si inutilisés), **CSP** (mode selon réponse Q6, whitelist des outils tiers détectés).
**Secrets côté client (P0 si trouvé)** :
- Aucune `NEXT_PUBLIC_* / VITE_* / PUBLIC_*` contenant `KEY/SECRET/TOKEN/PASSWORD` avec valeur sensible.
- `.env*` dans `.gitignore` ; jamais commité dans l'historique git (vérifier) ; `.env.example` sans valeurs réelles.
- Clés Resend/Stripe/OpenAI utilisées **uniquement** en API routes / server actions.
- Après build : grep dans le bundle client d'une string suspecte (20+ chars) après mot-clé sensible. Si secret historiquement commité → signaler rotation.

## §10 — Accessibilité (WCAG 2.2 AA)
Mobiliser **impeccable** (références a11y + `/impeccable audit`).
- Contraste texte ET non-texte (focus inclus). Navigation clavier (tab order, focus visible, pas de piège, skip links).
- HTML sémantique (landmarks, hiérarchie de headings, un seul `<h1>`, listes, boutons vs liens). ARIA seulement où nécessaire, correctement.
- Formulaires : `label`, descriptions, erreurs liées via `aria-describedby`. Contenu dynamique : `aria-live` pour toasts, modales annoncées.
- `prefers-reduced-motion` respecté par Framer Motion. Cibles tactiles ≥ 44×44px. `rel="noopener noreferrer"` sur tout `target="_blank"`.

## §11 — UX/UI — front public + back-office
D'abord **produire un inventaire route par route** (scanner `/admin`, `/dashboard`, `/back-office`, routes protégées, UI multi-tenant) et le faire confirmer. Mobiliser **impeccable** (`/critique`, `/audit`), **taste-skill** (anti-slop), **ui-ux-pro-max** (cohérence design system). Évaluer chaque écran sur :
- **UI/visuel** : hiérarchie (échelle typo, rythme d'espacement), cohérence design system (spacing/radius/ombres/tokens couleur), réutilisation vs styles one-off, **états vide / chargement / erreur / succès**, densité adaptée à la tâche, parité dark mode.
- **UX/interaction** : 10 heuristiques de Nielsen par écran (flaguer violations), clarté de navigation (où suis-je / où aller / comment revenir), design de formulaire (placement label, validation inline, récupération d'erreur, autosave, confirmation d'action destructive), design de table (tri/filtre/pagination/bulk/priorité colonnes mobile), perception de latence (optimistic UI, skeletons vs spinners), chemins de complétion (clics min pour le top 3 des tâches).
- **Responsive** : breakpoints sm/md/lg/xl, usabilité mobile des tables/forms, collapse sidebar/nav.
- **IA (information architecture)** : regroupement/labels de menu, découvrabilité des actions secondaires, charge cognitive.

## §12 — Légal & footer
- Pages légales selon Q3 (mentions, confidentialité, cookies si tracking, CGV + rétractation 14 j si paiement). Cohérentes avec formulaires/scripts détectés.
- **Aucun placeholder/crochet visible.** Aucune promesse juridique absolue.
- Footer : liens légaux, copyright sans doublon, **crédit Done. présent**.
- Signaler (sobrement) si validation avocat/DPO nécessaire : e-commerce avancé, santé, données sensibles, mineurs, recrutement, vidéosurveillance, transferts internationaux, profiling avancé, espace membre, marketplace, abonnements à tacite reconduction, ticketing, multi-tenant B2B.

## §13 — Pièges spécifiques Replit (haut rendement — vérifier à chaque build)
- 🔴 **Domaine `.replit.app` indexable en doublon.** Replit garde le projet joignable sur le sous-domaine ET le domaine custom, sans switch natif. Google peut indexer la copie `.replit.app`.
  ```bash
  curl -sI "PREVIEW_URL/" | grep -i "^HTTP\|^x-robots-tag"
  ```
  **Fix à vérifier** : canonical pointe vers le domaine custom, ET/OU le serveur détecte l'host `.replit.app` et renvoie `X-Robots-Tag: noindex` ou un 301. Reporter ce qui est en place.
- 🔴 **404 / soft-404 sur deep-link SPA** dû au rewrite statique. Sur Replit Static, les URLs profondes renvoient 404 sauf rewrite vers `index.html` ; mais un rewrite aveugle `200 index.html` partout crée des **soft 404**. Vérifier les deux : vraies routes = 200 + contenu ; routes inexistantes = vrai 404. Reporter les règles de rewrite du fichier `.replit`.
- 🔴 **robots.txt bloquant JS/CSS** → Google ne peut pas rendre une app CSR. Confirmer que les assets sont crawlables ; seuls `/admin` et drafts en `Disallow`.
- ⚠️ **Mauvais type de déploiement** : Static = pages marketing en HTML direct (indexation instantanée) ; Autoscale/Reserved VM = SSR/API/DB. Domaines custom : Autoscale, Reserved VM, Static — **pas** Scheduled. Reporter le type utilisé vs besoin du contenu.
- ⚠️ **Cold-start 5xx** : un déploiement qui dort renvoie 5xx pile quand Googlebot crawle → Google recule. Vérifier que ça reste chaud (Reserved VM ou Autoscale min-instance).
- ℹ️ **Pattern recommandé** : surface marketing statique/SSR (home, services, blog, FAQ) indépendante du JS + app interactive sur ses propres routes.

## §14 — Santé déploiement & favicon
- Build de **production**, pas un dev server. HTTPS partout, pas de mixed content.
- **Normalisation d'host en un seul hop** (`www`↔non-`www`, `http`→`https`) :
  ```bash
  curl -sIL "http://PRODUCTION_DOMAIN/" | grep -i "^HTTP\|^location"
  ```
- Codes honnêtes : vrai 404 pour pages absentes, vrai 200 pour valides. Pages d'erreur : 404 perso + `error.tsx` + `global-error.tsx` (Next.js 14).
- **Favicon (double fail-safe anti-Replit)** : aucun favicon Replit résiduel ; tous les fichiers (16/32/180/192/512 + `.ico` + `apple-touch-icon` + `site.webmanifest`) générés depuis le **vrai logo** ; `theme-color` (variantes dark/light si dark mode) ; cache-busting `?v=` ; **pas de mélange API `metadata` Next.js 14 / balises manuelles** ; recherche exhaustive « replit » → zéro résultat côté `<head>`/`/public`. (Procédure complète en **Annexe C**.)

## §15 — AI search readiness
- **Le contenu doit être dans le HTML serveur** (lié à §1) — le contenu JS-gated est ce qui exclut des AI Overviews / AI Mode (qui tournent sur l'index normal).
- HTML sémantique + hiérarchie `<h1>`–`<h3>` claire.
- ✅ Confirmer qu'on ne gaspille pas d'effort sur des tactiques débunkées : pas de `llms.txt` (non utilisé par Google), pas de « content chunking », pas de réécriture AI-only, pas de fausses « mentions ».

## §16 — Formulaires & délivrabilité email (Resend) — souvent P0
Angle mort #1 de Done. : un formulaire qui n'envoie rien, ou un email qui part en spam, **sans erreur visible**. Vérifier de bout en bout :
- **Envoi réel** : soumettre chaque formulaire (mode test) et **confirmer la réception** (pas seulement « 200 retourné »). Tester aussi le chemin d'erreur (clé Resend absente → message utilisateur propre, pas de crash).
- **Domaine d'envoi vérifié** dans Resend (statut « verified »), expéditeur sur le domaine client (pas `onboarding@resend.dev`).
- **Records DNS mail intacts** — le piège post-déploiement Replit/OVH (cf. casse mail après migration DNS) :
  ```bash
  dig +short TXT  PRODUCTION_DOMAIN | grep -i spf      # SPF présent, inclut resend
  dig +short TXT  resend._domainkey.PRODUCTION_DOMAIN  # DKIM Resend présent
  dig +short TXT  _dmarc.PRODUCTION_DOMAIN             # DMARC présent (p=none min.)
  dig +short MX   PRODUCTION_DOMAIN                    # MX existants non écrasés par le deploy
  ```
- **Anti-abus** : honeypot + rate-limiting sur les formulaires exposés. **Échappement HTML** des champs dans l'email sortant (anti-injection).
- **Contenu de l'email** : pas de placeholder, expéditeur/objet cohérents, reply-to correct.

## §17 — Assets & liens externes (404 silencieux)
- **`og:image` et favicon renvoient 200** et la bonne taille (`curl -sI <og:image-url>` ; OG = 1200×630). Un `og:image` cassé = aperçu social vide.
- **Aucun asset en 404** dans l'onglet Network (images, fonts, scripts). 
- **Liens sortants** non morts (le link-checker de §0 couvre interne ET externe ; vérifier les `target="_blank"`).
- Images : aucune **image stock générique** là où un vrai asset client existe ou est attendu (mauvais pour la conversion et le SEO).

## §18 — Dépendances & supply chain
- `npm audit --production` : reporter les vulnérabilités **High/Critical** (et seulement celles-là comme P0/P1 ; le bruit dev reste info).
- `npm outdated` : signaler les paquets majeurs en retard touchant la sécurité.
- Aucun secret dans `package-lock.json` / scripts `postinstall` suspects.

## §19 — Contenu & rédactionnel
- **Orthographe/grammaire** par langue (FR, NL, EN) — passer le contenu réel, pas juste « présence de texte ».
- **Cohérence des coordonnées** : téléphone, email, adresse, BCE/TVA **identiques** partout (header, footer, mentions légales, JSON-LD `LocalBusiness`, formulaire). Une incohérence = perte de confiance + NAP SEO local cassé.
- Zéro lorem, zéro `[crochet]`, zéro « John Doe » résiduel.

## §20 — Données & migrations (projets V2 / DB)
Si Prisma/Drizzle + DB réelle :
- **Migrations appliquées en prod** (pas de drift schéma ↔ DB). 
- **Aucune donnée de démo/seed** visible en prod (les mocks JSON V1 ne doivent pas fuiter en V2).
- Connexion DB via secret serveur uniquement (recoupe §9), pas d'URL DB en `NEXT_PUBLIC_*`.
- Pour multi-tenant : isolation des données vérifiée (un tenant ne voit pas un autre).

## §21 — Robustesse & cas limites
- Comportement **sans JS** (au moins le contenu critique + le `<noscript>` sur les pages clés).
- **Pages d'erreur réelles** testées (provoquer une 500 contrôlée → `error.tsx` s'affiche proprement).
- **Débordement de texte** (chaînes longues, traductions plus longues), états **vide** réels (liste sans résultat), **double-submit** de formulaire.

---

## Livrable de la Phase 1 (un seul rapport Markdown)

1. **Inventaire & matrice de couverture** (§0) : routes (4 sources réconciliées) × axes, aucune cellule vide ; skills bootstrapées (méthode + statut) + skills natives mobilisées + outils déterministes lancés (avec sortie).
2. **Findings** groupés par § (§1→§21), chacun au **format de finding unifié**, avec preuve.
3. **Scorecard** (0–5 par axe et par route clé : UI / UX / A11y / SEO / Perf / Sécurité / Email).
4. **Plan d'action priorisé P0 → P3** (chaque item = changement concret).
5. **Quick wins** (fort impact, faible effort, faible risque).
6. **Liste des Criticals** que tu proposerais d'attaquer en premier dans la Phase 2.
7. **Registre N/V** (non vérifié + pourquoi + ce qu'il faudrait) et **registre d'hypothèses**.
8. **Seconde passe adversariale** (§0.d) : angles morts résiduels et ce qui pourrait casser malgré un rapport vert.
9. **Infos manquantes** (destinées à l'agence, pas au site : ID GTM réel, CMP, secrets à rotater…).

Tableau de synthèse par section :

| Sévérité | Constat | Preuve | Impact | Fix |
|---|---|---|---|---|

### ⛔ STOP — attendre la validation explicite de Quentin avant la Phase 2.

---

# PHASE 2 — FIX (après feu vert uniquement)

Encadrer l'exécution avec **superpowers** (TDD si tests présents, `requesting-code-review` entre tâches, `verification-before-completion`). Implémenter par vagues ; **chaque item P0/P3 attend l'approbation** (oui, même les non-négociables : ils sont prioritaires mais ne s'exécutent pas sans feu vert).

- **Wave 1 — Quick wins** : zéro risque, pas de breaking change (tokens/espacement, attributs a11y, contraste, `alt`, headers de sécurité, meta/canonical, `rel=noopener`).
- **Wave 2 — Composant** : changements mono-fichier (états vide/erreur, validation formulaire, favicon, sitemap/robots, JSON-LD, CSP Report-Only).
- **Wave 3 — Structurel** : IA, navigation, redesign de tables, routing locale, redirections 301, type de déploiement Replit — **approbation explicite par item**.

Pour chaque changement : **fichiers touchés · plan de rétrocompat · checklist de test manuel avant/après · procédure de rollback**.

---

# PHASE 3 — VÉRIFICATION PRÉ-LIVRAISON (checklist-gate finale)

À ne cocher qu'avec preuve. Ne déclarer « prêt à livrer » que si tout est ✅ ou ℹ️ justifié.

**Rendering/SEO** : single-200 sur les 3 classes (curl) · robots OK · canonical absolu prod · sitemap dynamique valide · titles/descriptions uniques server-rendered · JSON-LD valide sans FAQPage/HowTo.
**i18n** : pas de boucle locale · hreflang réciproques + x-default · canonical par langue.
**Favicon** : purge faite · double fail-safe · zéro Replit dans `<head>`/`/public` · cache-busting.
**Tracking/RGPD** : Consent Mode v2 `denied` AVANT GTM · dataLayer · `form_submit`/`cta_click` **vérifiés qui se déclenchent** (DevTools) · GA4 reçoit · zéro cookie analytics avant consentement.
**Email/Resend** : envoi réel **reçu** · domaine vérifié · SPF/DKIM/DMARC présents (`dig`) · MX non écrasés post-deploy · échappement HTML · chemin d'erreur propre.
**A11y** : axe-core lancé (0 violation critique) · alt · labels · un seul h1 · clavier OK · reduced-motion · cibles 44px.
**Perf/CWV** : Lighthouse/PSI lancé · images WebP < 200KB · width/height · lazy/fetchpriority · fonts swap · tableau avant/après.
**Sécurité** : 5 headers + CSP · aucun script légitime bloqué.
**Secrets** : aucune clé sensible côté client · `.env` ignoré · grep bundle clean.
**Dépendances** : `npm audit` sans High/Critical non traité.
**Assets/liens** : og:image + favicon en 200 · aucun asset 404 (Network) · liens internes ET externes vivants (link-checker).
**Contenu** : orthographe FR/NL/EN OK · coordonnées (tel/email/adresse/BCE) cohérentes partout + JSON-LD · zéro stock générique injustifié.
**Data (V2)** : migrations appliquées · aucun seed/démo en prod · isolation tenant (si multi-tenant).
**Technique** : 404 perso · error.tsx/global-error.tsx **testés (500 provoquée)** · 301 testées (`curl -I`) · formulaires (validation client+serveur, honeypot/rate-limit si critique) · pas de mixed content · sans-JS acceptable.
**Build** : `npm run build` clean · pas de `debugger` · pas de `console.log` client injustifié · aucune route > 300KB JS sans justif.
**Légal/footer** : pages accessibles · cohérentes traceurs/formulaires · **zéro placeholder** · crédit Done. présent · pas de doublon copyright.
**Replit** : zéro mention « replit »/« repl.co »/« repl.dev » côté client · `.replit.app` non indexable (canonical/noindex/301) · type de déploiement adapté.
**Complétude** : matrice de couverture sans cellule vide · **registre N/V vidé ou assumé** (chaque N/V soit résolu, soit transmis à l'agence comme action restante).
**Récap final** : Phase 0 documentée · routes créées · fichiers modifiés · scripts détectés · parties sautées + raison · actions restantes côté agence (ID GTM, CMP, rotation secrets) · recommandations skills non implémentées = « améliorations futures ».

---

# Annexe A — Décodeur Google Search Console

| Statut GSC | Sens probable | Où regarder |
|---|---|---|
| Découverte – non indexée | URL connue, pas encore crawlée (file d'attente / crawl-budget) | §4/§5 liens internes ; §14 pas lent/5xx ; Request indexing |
| Explorée – non indexée | Crawlée mais jugée thin/dupliquée/coquille CSR | §15 qualité ; §1 vrai contenu en HTML ? |
| Erreur de redirections | Boucle ou chaîne trop longue | §1 trace + §7 boucle locale + §14 host |
| Page avec redirection | 301/302 ailleurs (souvent normal) | sitemap doit lister la destination (§4) |
| Introuvable (404) | URL en 404 | §1 hard-404 ; retirer du sitemap ou restaurer |
| Soft 404 | 200 mais vide/erreur (rewrite SPA aveugle) | §1 soft 404 + §13 rewrite `.replit` |
| Autre page avec balise canonique | Google a indexé le canonical, variante dédupliquée (souvent `.replit.app`) | §3 canonical + §13 doublon |
| Doublon sans canonique | Google a choisi seul | §3 canonical auto-référent |
| Bloquée par robots.txt | Disallow | §2 |
| Exclue par noindex | meta/X-Robots-Tag noindex | §2 |
| Erreur serveur (5xx) | Échec au crawl (cold start) | §14 garder chaud |

# Annexe B — Curls de référence
```bash
UA="…Googlebot/2.1…"   # voir Phase 1
curl -sIL "PRODUCTION_DOMAIN/PATH" | grep -i "^HTTP\|^location"             # redirections
curl -sIL -A "$UA" -H "Accept-Language: fr-BE" "PRODUCTION_DOMAIN/PATH" | grep -i "^HTTP\|^location"
curl -s  "PRODUCTION_DOMAIN/PATH" | grep -ic '<div id="root"></div>'         # shell CSR
curl -s  "PRODUCTION_DOMAIN/PATH" | grep -o "<h1[^>]*>[^<]*</h1>" | head -1   # h1 réel
curl -sI "PRODUCTION_DOMAIN/"     | grep -i "x-robots-tag"                    # noindex header
curl -sI "PREVIEW_URL/"           | grep -i "^HTTP\|^x-robots-tag"            # doublon .replit.app
curl -sIL "http://PRODUCTION_DOMAIN/" | grep -i "^HTTP\|^location"            # normalisation host
```

# Annexe C — Favicon double fail-safe (procédure)
1. **Purge préventive** : supprimer tout favicon existant (`/public`, `/app`, balises `<link rel="icon">`) — recherche exhaustive « replit » incluse.
2. **Source** : identifier le vrai logo (header/footer/assets) ou générer depuis les initiales si absent.
3. **Génération** : `favicon.ico`, `16/32`, `apple-touch-icon` 180, `192/512`, `site.webmanifest` référencé, `theme-color` (+ variantes dark/light).
4. **Une seule voie sur Next.js 14** : soit l'API `metadata`/fichiers spéciaux, soit les balises manuelles — **jamais les deux**. Cache-busting `?v=` sur chaque balise.
5. **Vérification 3 niveaux** : fichiers présents · balises correctes dans le `<head>` rendu · recherche « replit » = zéro résultat (+ simulation runtime si possible).

# Annexe D — Bonus (si la structure le permet, sans sur-engineering)
`site.config` (nom, société, BCE/TVA, adresse, contacts, outils tiers, langues, locale défaut — champs vides non rendus) · `LegalPageLayout` · `i18n.config` (langues/locales/slugs traduits) · `tracking.ts` centralisant les `dataLayer.push` dans le respect du Consent Mode.
