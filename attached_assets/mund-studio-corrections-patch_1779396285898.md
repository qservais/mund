# MUND STUDIO — Correction & Polish Patch (Replit Agent)

**Project:** https://mund.madebydone.be
**Type:** Targeted corrective patch — no new features, no redesign, no content rewriting.
**Goal:** Apply the client's typography, alignment, spacing and interaction fixes so the live site matches the supplied Canva reference mockups (files `1`–`5`).
**Reference mockups represent the intended final state.** When in doubt about a value, match the Canva mockups visually rather than inventing your own.

---

## 0. GROUND RULES (read first, applies to the whole project)

1. **Do NOT touch** anything not explicitly listed below. Preserve all existing copy, page structure, routes, fonts (families), and the `Site réalisé par Done. — madebydone.be` footer credit.
2. **Icons:** SVG only. Never introduce emoji.
3. **No placeholder text, no Lorem Ipsum.** Keep the real client copy.
4. After implementing, run the verification checklist in section 8 before declaring done.

---

## 1. GLOBAL TYPOGRAPHY SYSTEM (apply site-wide, every page)

These rules fix the recurring problems visible on every page. Implement them as shared design tokens / global CSS, then make sure no component overrides them.

### 1.1 Remove all italics
- **No italic text anywhere on the site.** Search the entire codebase for `italic`, `font-style: italic`, `<em>`-driven italics, `<i>` tags used for styling, and Tailwind `italic` classes. Remove them all.
- The phrases currently in italic (e.g. `le végétal devient sculpture, moment, intention.`, `nous composons avec votre image et votre espace.`, `un rendez-vous mensuel autour des fleurs de saison.`, `vides et pleins, chaos et structure`, etc.) must render upright.

### 1.2 No color variation in type
- **All text uses a single text color.** Remove every per-element color change on text.
- Weight variation is allowed and encouraged (lighter / heavier), but **never** a different hue. Search for inline `color:` on text, colored Tailwind text classes, and any "accent color" applied to words/phrases, and normalize them to the single base text color.
- This includes the `DIRECTION` label on the Contact page, which currently renders in a reddish tone — it must use the base text color like every other label.

### 1.3 Exactly TWO font sizes across the entire site
The client wants size uniformity. There must be **only two** text sizes in use:

- `--font-size-body`: the default size for everything (Canva size **12**).
- `--font-size-serif-lc`: slightly larger, used **only** for serif text set in lowercase (Canva size **13**).

Implementation notes:
- Define both as CSS custom properties and apply them through shared utility classes. **Remove every other font-size declaration** so nothing renders larger or smaller than these two values.
- Calibrate the two px/rem values so the rendered proportions match the Canva mockups (the body size is the baseline; the serif-lowercase size is one small step larger, ~12:13 ratio). Suggested starting point: body `15px`, serif-lowercase `16px` — then fine-tune against the mockups.
- Section headings (e.g. `FLORAL DESIGN`, `NOS SERVICES`, `MARIAGES`) keep their serif family and weight but should sit in the same size scale — do not let them balloon. Match the mockups.

### 1.4 Tight line-height on grouped text
- **Set `line-height: 1.0`** (Canva interligne 1.0) for all grouped/multi-line text blocks and sentences.
- This is the single biggest cause of the current misalignments: the existing line-height is far too large, which pushes everything out of position. Tightening it will resolve most of the alignment drift automatically — then apply the page-specific alignment fixes below on top.

### 1.5 Bilingual language toggle (header, top-right)
- Currently the header shows only `en`. Replace it with **both languages separated by a vertical bar**: `fr | en`.
- The currently active language is emphasized (e.g. heavier weight / full opacity); the inactive one is the link to switch. Keep the same single text color (no colored highlight — weight/opacity only).

---

## 2. PAGE: HOME / ACCUEIL
*(Reference: Canva mockup file `5` / the home mockup with the lavender-and-yellow arrangement. Current state: cloud-photo version.)*

### 2.1 Navigation
- **Add a `contact` entry to the main navigation menu** (currently: work / floral / past / about). It links to the Contact page. Place it consistently with the existing menu order.

### 2.2 Typography
- Apply all global rules from section 1 (no italics, single color, two sizes only, line-height 1.0).

### 2.3 Hero photo & top block
- The **main photo is not centered** — it is offset. Shift it so it is properly aligned (the Canva reference offsets it ~1cm relative to center; match the mockup).
- The **top of the `mund studio` wordmark aligns with the top edge of the main photo** — the photo must not extend above the wordmark.
- The text block under the main photo (`le végétal devient sculpture, moment, intention.`) **aligns to the right edge of the main photo**.
- **Move that text block closer to the main photo** (reduce the vertical gap between the photo and the line beneath it).

### 2.4 Bottom section (services + devis)
- **Remove the horizontal divider line** that currently separates the upper block from the lower block.
- **Increase the vertical gap** between the top block (part 1) and the "services + devis" block (Canva reference ≈ 5–7cm; create a clearly larger breathing space than now).
- **`NOS SERVICES` two-column list:** align the columns so that `scénographie` (right column) lines up with `bouquets` (left column), and the bottom of the `NOS SERVICES` block aligns with the top of `mariages`. (i.e. balance the two columns so their baselines match the mockup.)
- **`DEVIS & PROJETS` block:** reflow so it is **exactly three lines of text** — the word `travailler` must sit on the same line as the rest of its sentence (no orphan/wrap pushing it down).
- **`écrivez-nous`:** restyle it to use the **same font family as the titles (serif), in lowercase, and bold.**
- **Image orientation:** ensure all home-page photos display in the correct orientation (no rotated/sideways images — fix any EXIF/transform rotation issue).

---

## 3. PAGE: WORK
*(Reference: Canva mockup file with `MARIAGES / EVENEMENTS / SET DESIGN / UNE VISION GLOBALE`.)*

### 3.1 Typography
- Apply all global rules from section 1.

### 3.2 Clickable links (redirects)
- Make **`contactez-nous`**, **`c'est ici`** and **`écrivez-nous`** clickable links that **redirect to the Contact page**.

### 3.3 Alignment (match the Canva mockup precisely)
- `chaque mariage…` aligns to the start of the `a` in `contactez-nous`.
- `EVENEMENTS` (title only) aligns to the **left edge of the first photo** (but positioned well below it).
- `un lieu, un moment,…` aligns on the `u` of `chaque` in the text above it, and has **no extra marked gap** (use the normal line-height 1.0 spacing) between it and the last line of the text above.
- The vertical spacing between `envie de…` and `votre identité` **equals** the spacing between `vous souhaitez…` and `rien n'est standardisé`.
- Same rule for the spacing between `une idée ? On…` and `mesure pour des campagnes…` (equal spacing).
- `nous composons…` is inserted into that space and aligns to the start of the `m` in `campagne`.
- The `SET DESIGN` title aligns to the bottom of `envie de discuter…`.
- **The two bottom photos use a more vertical (portrait) format** — approx ratio **7.5 wide × 10 high**. Resize/crop their display frames accordingly.
- `UNE VISION GLOBALE` sits **closer to the bottom of the photos** (Canva reference ≈ 1.2cm gap — tighten it).
- The spacing between `contactez-nous` and `chaque élément est pensé…` **equals** the spacing between `vous souhaitez…` and `rien n'est standardisé`.
- `composez au-delà du floral` is inserted into that space and aligns to the `d` of `de la direction visuelle…`.

---

## 4. PAGE: FLORAL / ABONNEMENTS
*(Reference: Canva mockup file `8`-style with `NOS ABONNEMENTS / ESPACES & PROFESSIONNELS / PARTICULIERS`.)*

### 4.1 Typography
- Apply all global rules from section 1.

### 4.2 Clickable links (redirects)
- Make **`contactez-nous`** clickable → **redirect to the Contact page.**
- Make **`c'est par ici`** clickable → **redirect to the subscription / bouquet-subscription page** (the abonnement signup flow).

### 4.3 Spacing & alignment
- **No marked gap** between `NOS ABONNEMENTS` and the text directly below it — use the same line-height (1.0) as if they were one single text group.
- For **both sections** (`ESPACES & PROFESSIONNELS` and `PARTICULIERS`): the spacing between the text elements (title // text group // bold sentence) must be **identical** between the two sections.
- **The photo is shorter** — display format approx **7 wide × 12 high** (placement stays as-is). Also fix the photo's orientation (correct sense, not rotated).
- The bottom of the `PARTICULIERS` section aligns with the **bottom of the photo**.

---

## 5. PAGE: PAST
*(Reference: Canva mockup `7`.)*

- **Deferred per client.** Photo positioning and format will be revised once she sends the final image files. **Do not change the Past page layout yet** beyond applying the global typography rules from section 1 (no italics, single color, two sizes, line-height 1.0) to its labels/captions.

---

## 6. PAGE: ABOUT
*(Reference: Canva mockup `6`.)*

### 6.1 Typography
- Apply all global rules from section 1.
- **Body text is justified** on this page (`text-align: justify`).

### 6.2 Spacing between blocks (use these exact relationships; calibrate cm to match the mockup)
- **1cm gap** between the title (`MUND STUDIO / LES FLEURS / AUTREMENT`) and the first text block.
- `après un parcours…` and `dans son studio…` are **one single text block** — remove the marked separation currently between them.
- **0.5cm gap** between text block 1 and text block 2.
- **2cm gap** between block 2 and block 3.
- **1cm gap** between block 3 and block 4. **Block 4 must NOT sit to the right of block 3** — it stacks below (single column), not in a second column.
- `vides et pleins / chaos et structure`: render in **serif, bold, lowercase**, with a **1cm gap** above it (from block 4).
- The photo sits **2cm below the last text block.**
- `le temps est beau… / une petite averse` (handwritten line): **shift it to the right** so that the word `le` sits at the **horizontal middle of the photo.**

---

## 7. PAGE: CONTACT
*(Reference: current Contact screenshot.)*

### 7.1 Typography
- Apply all global rules from section 1 (this also fixes the reddish `DIRECTION` label → base color).

### 7.2 Content removals
- **Remove** the `OUVERTURE` block entirely (`Du mardi au samedi, sur rendez-vous.`).
- **Remove `architecte`** from the direction line: `Julie Ahn, architecte & designer florale.` → becomes **`Julie Ahn, designer florale.`**
- **Remove the response-delay text** near the submit button (`RÉPONSE SOUS 48H, DU MARDI AU SAMEDI.`).

### 7.3 Form logic — unblock subscription inquiries
The `04 — DATE ENVISAGÉE` field currently behaves in a way that blocks professionals contacting about a **subscription** (they have no specific date).

- **Make field `04 — DATE ENVISAGÉE` optional** (remove any required validation). A submission with no date must go through successfully.
- **Add `abonnement` to the suggestions** of field `03 — NATURE DU PROJET`: update its placeholder from `Mariage, événement, scénographie…` to include subscriptions, e.g. **`Mariage, événement, scénographie, abonnement…`**
- Goal: subscription requests flow through smoothly without being blocked by a mandatory date.

---

## 8. VERIFICATION CHECKLIST (run before finishing)

- [ ] `grep` the codebase: **zero** occurrences of `italic` / `font-style: italic` / `<i>` styling / Tailwind `italic`.
- [ ] **Zero** per-element text color overrides remain; all text is one color (incl. `DIRECTION` label).
- [ ] Only **two** font sizes resolve in the rendered DOM (body + serif-lowercase). No stray sizes.
- [ ] Grouped text blocks render at **line-height 1.0**.
- [ ] Header shows **`fr | en`** with a vertical bar; active language emphasized by weight/opacity only.
- [ ] `contact` appears in the main nav and routes to the Contact page.
- [ ] Home: divider line removed; hero photo aligned; `DEVIS & PROJETS` is exactly 3 lines; `écrivez-nous` is serif/lowercase/bold.
- [ ] Work: `contactez-nous`, `c'est ici`, `écrivez-nous` all link to Contact; bottom photos are portrait (~7.5×10).
- [ ] Floral: `contactez-nous` → Contact; `c'est par ici` → subscription page; photo is ~7×12 and correctly oriented.
- [ ] About: text justified; single-column blocks (block 4 not beside block 3); handwritten line shifted so `le` is centered on the photo.
- [ ] Contact: `OUVERTURE`, `architecte`, and the 48h delay all removed; date field optional; `abonnement` added to the project-type suggestions.
- [ ] No images displayed rotated/sideways anywhere.
- [ ] `Site réalisé par Done. — madebydone.be` footer credit still present.
