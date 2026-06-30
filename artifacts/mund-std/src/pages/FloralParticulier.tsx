import { Link } from "wouter";
import ArtboardShell, { SERIF, BODY, CTA_LINK } from "@/components/ArtboardShell";
import { SubForm, type FormField } from "@/components/SubForm";
import { useLang } from "@/context/LanguageContext";
import overlayRef from "@assets/floral_1778527882896.png";

import img1 from "@assets/20250117_111842000_iOS_1782856745220.jpg";
import img2 from "@assets/20250205_085941000_iOS_1782856745221.jpg";
import img3 from "@assets/20250205_090041000_iOS_1782856745221.jpg";
import img4 from "@assets/20250318_163628000_iOS_1782856745221.png";
import img5 from "@assets/IMG_3778_1782856745221.jpeg";
import img6 from "@assets/IMG_6231_1782856745222.JPEG";

const PHOTOS = [img1, img2, img3, img4, img5, img6];

const F = '"Helvetica Now Display","Helvetica Neue",Helvetica,Arial,sans-serif';
const S = '"Cormorant Garamond","Times New Roman",serif';

const PART_FIELDS_FR: FormField[] = [
  { type: "checkboxgroup", name: "format",    label: "Par quel format êtes-vous intéressés ?", required: true,  options: ["BOUQUET 360°", "BOUQUET PORTRAIT"] },
  { type: "checkboxgroup", name: "frequence", label: "À quelle fréquence ?",                  required: true,  options: ["ONE SHOT", "ABONNEMENT 3 MOIS", "ABONNEMENT 6 MOIS", "ABONNEMENT 9 MOIS", "ABONNEMENT 12 MOIS"] },
  { type: "checkboxgroup", name: "retrait",   label: "Retrait ou livraison",                  required: true,  options: ["RETRAIT AU STUDIO — RUE MONULPHE, LIÈGE", "LIVRAISON"] },
  { type: "textarea",      name: "adresse",   label: "Adresse si livraison",                  required: false, placeholder: "Rue, numéro — Liège" },
  { type: "email",         name: "email",     label: "Votre email",                           required: true,  placeholder: "vous@exemple.be" },
  { type: "tel",           name: "telephone", label: "Votre numéro de téléphone",            required: true,  placeholder: "+32 4…" },
  { type: "textarea",      name: "info",      label: "Informations complémentaires",          required: false, placeholder: "Préférences, allergies, code porte…" },
  { type: "checkboxgroup", name: "source",    label: "Comment avez-vous entendu parler de nous ?", required: false, options: ["SOCIAL MEDIA", "GOOGLE", "AI", "BOUCHE À OREILLE"] },
];

const PART_FIELDS_EN: FormField[] = [
  { type: "checkboxgroup", name: "format",    label: "Which format are you interested in?", required: true,  options: ["BOUQUET 360°", "PORTRAIT BOUQUET"] },
  { type: "checkboxgroup", name: "frequence", label: "At what frequency?",                  required: true,  options: ["ONE SHOT", "3-MONTH SUBSCRIPTION", "6-MONTH SUBSCRIPTION", "9-MONTH SUBSCRIPTION", "12-MONTH SUBSCRIPTION"] },
  { type: "checkboxgroup", name: "retrait",   label: "Collection or delivery?",             required: true,  options: ["COLLECTION AT THE STUDIO — RUE MONULPHE, LIÈGE", "DELIVERY"] },
  { type: "textarea",      name: "adresse",   label: "Address if delivery",                 required: false, placeholder: "Street, number — Liège" },
  { type: "email",         name: "email",     label: "Your email",                          required: true,  placeholder: "you@example.com" },
  { type: "tel",           name: "telephone", label: "Your phone number",                  required: true,  placeholder: "+32 4…" },
  { type: "textarea",      name: "info",      label: "Additional information",              required: false, placeholder: "Preferences, allergies, door code…" },
  { type: "checkboxgroup", name: "source",    label: "How did you hear about us?",         required: false, options: ["SOCIAL MEDIA", "GOOGLE", "AI", "WORD OF MOUTH"] },
];

const copy = {
  fr: {
    back:    "← abonnements",
    header:  "ABONNEMENTS",
    sub:     "particuliers",
    title:   "PARTICULIERS",
    body:    "chaque deuxième jeudi du mois, nous vous proposons un bouquet surprise\ncomposé selon les arrivages du moment.\nune manière d'inviter notre travail chez vous en le voyant évoluer au fil des\nsaisons ou de manière occasionnelle.\n\nles bouquets sont disponibles en retrait au studio ou en livraison à domicile.\nles commandes ponctuelles sont clôturées le deuxième lundi de chaque mois.",
    italic:  "un rendez-vous mensuel autour des fleurs de saison.",
    fields:  PART_FIELDS_FR,
    submit:  "Envoyer",
    success: "Inscription bien reçue",
    successBody: (email: string) => `Merci.\nNous vous contacterons pour confirmer le premier rendez-vous.\n${email}`,
    reset:   "← Envoyer une autre inscription",
  },
  en: {
    back:    "← subscriptions",
    header:  "SUBSCRIPTIONS",
    sub:     "private clients",
    title:   "PRIVATE CLIENTS",
    body:    "every second thursday of the month, we offer you a surprise bouquet\ncomposed according to current arrivals.\na way to invite our work into your home,\nwatching it evolve with the seasons or on an occasional basis.\n\nbouquets are available for collection at the studio or home delivery.\nonce-off orders close on the second monday of each month.",
    italic:  "a monthly appointment around seasonal flowers.",
    fields:  PART_FIELDS_EN,
    submit:  "Send",
    success: "Registration received",
    successBody: (email: string) => `Thank you.\nWe will contact you to confirm the first appointment.\n${email}`,
    reset:   "← Send another registration",
  },
};

function Mobile({ c }: { c: typeof copy.fr }) {
  const t = (s: string) => s.split("\n").join(" ");
  return (
    <div>
      <Link href="/abonnements" style={{ fontFamily: F, fontSize: 15, fontWeight: 300, letterSpacing: "-0.04em", color: "rgba(0,0,0,0.4)", textDecoration: "none", display: "block", marginBottom: 24 }}>{c.back}</Link>
      <div style={{ fontFamily: S, fontSize: 18, fontWeight: 700, letterSpacing: "-0.05em", textTransform: "uppercase", lineHeight: 1, marginBottom: 8 }}>{c.title}</div>
      <p style={{ fontFamily: F, fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1.0, margin: "0 0 10px" }}>{t(c.body)}</p>
      <p style={{ fontFamily: F, fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1.0, margin: "0 0 24px", textAlign: "right" }}>{c.italic}</p>
      {/* 2-col photo grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 36 }}>
        {PHOTOS.map((src, i) => (
          <img key={i} src={src} alt="" style={{ width: "100%", aspectRatio: "7/10", objectFit: "cover", display: "block" }} />
        ))}
      </div>
      <SubForm fields={c.fields} submit={c.submit} success={c.success} successBody={c.successBody} reset={c.reset} />
    </div>
  );
}

/* ── Desktop grid constants ─────────────────────── */
const COL_R   = 840;   /* right column x start       */
const COL_W   = 161;   /* each photo column width     */
const COL_GAP = 10;    /* gap between the two columns */
const ROW_H   = 230;   /* photo height (≈7:10)        */
const ROW_GAP = 10;    /* gap between rows            */
const COL_2   = COL_R + COL_W + COL_GAP;  /* = 1011  */
const GRID_TOP = 220;

function photoLeft(col: 0 | 1) { return col === 0 ? COL_R : COL_2; }
function photoTop(row: number)  { return GRID_TOP + row * (ROW_H + ROW_GAP); }

export default function FloralParticulier() {
  const { lang } = useLang();
  const c = copy[lang];
  const bl = (text: string) => text.split("\n").map((l, i) => <span key={i}>{l}<br /></span>);

  /* layout: 3 rows × 2 cols */
  const grid: [number, number][] = [
    [0, 0], [1, 0],   /* row 0 */
    [0, 1], [1, 1],   /* row 1 */
    [0, 2], [1, 2],   /* row 2 */
  ];

  return (
    <ArtboardShell overlayRef={overlayRef} minHeight={1750} mobile={<Mobile c={c} />}>

      {/* ── back link ── */}
      <Link href="/abonnements" style={{ position: "absolute", left: 130, top: 148, ...CTA_LINK, color: "rgba(0,0,0,0.38)", borderBottomColor: "rgba(0,0,0,0.2)" }}>
        {c.back}
      </Link>

      {/* ── header top-right ── */}
      <div style={{ position: "absolute", left: 840, top: 130, width: COL_W * 2 + COL_GAP, textAlign: "right" }}>
        <div style={{ ...SERIF }}>{c.header}</div>
        <p style={{ ...BODY, margin: 0, color: "rgba(0,0,0,0.45)" }}>{c.sub}</p>
      </div>

      {/* ── 2×3 photo grid ── */}
      {PHOTOS.map((src, i) => {
        const [col, row] = grid[i];
        return (
          <img
            key={i}
            src={src}
            alt=""
            style={{
              position: "absolute",
              left: photoLeft(col as 0 | 1),
              top:  photoTop(row),
              width: COL_W,
              height: ROW_H,
              objectFit: "cover",
            }}
          />
        );
      })}

      {/* ── left column ── */}
      <div style={{ position: "absolute", left: 130, top: 195, width: 640 }}>
        <div style={{ ...SERIF, marginBottom: 18 }}>{c.title}</div>
        <p style={{ ...BODY, margin: 0, marginBottom: 10 }}>{bl(c.body)}</p>
        <p style={{ ...SERIF, fontWeight: 400, textTransform: "none", textAlign: "right", marginBottom: 36 }}>{c.italic}</p>
        <SubForm fields={c.fields} submit={c.submit} success={c.success} successBody={c.successBody} reset={c.reset} />
      </div>

    </ArtboardShell>
  );
}
