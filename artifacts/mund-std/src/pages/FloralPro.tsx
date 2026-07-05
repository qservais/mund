import { Link } from "wouter";
import ArtboardShell, { SERIF, BODY, CTA_LINK } from "@/components/ArtboardShell";
import { Helmet } from "react-helmet-async";
import { SubForm, type FormField } from "@/components/SubForm";
import { useLang } from "@/context/LanguageContext";
import overlayRef from "@assets/floral_1778527882896.png";

import img1 from "@assets/5_1782856798282.jpg";
import img2 from "@assets/6_1782856798282.jpg";
import img3 from "@assets/7_1782856798282.JPEG";
import img4 from "@assets/8_1782856798283.JPEG";
import img5 from "@assets/9_1782856798283.jpg";

const F = '"Helvetica Now Display","Helvetica Neue",Helvetica,Arial,sans-serif';
const S = '"Cormorant Garamond","Times New Roman",serif';

const PRO_FIELDS_FR: FormField[] = [
  { type: "checkboxgroup", name: "format",     label: "Par quel format êtes-vous intéressés ?",       required: true,  options: ["COMPOSITION", "BOUQUET 360°", "BOUQUET PORTRAIT"] },
  { type: "checkboxgroup", name: "frequence",  label: "À quelle fréquence ?",                         required: true,  options: ["1 FOIS/MOIS", "2 FOIS/MOIS", "3 FOIS/MOIS", "CHAQUE SEMAINE"] },
  { type: "textarea",      name: "entreprise", label: "Dites-nous en plus sur votre entreprise",      required: true,  placeholder: "Nom de l'espace, type d'activité, taille du lieu…" },
  { type: "email",         name: "email",      label: "Votre email",                                  required: true,  placeholder: "vous@exemple.be" },
  { type: "tel",           name: "telephone",  label: "Votre numéro de téléphone",                   required: true,  placeholder: "+32 4…" },
  { type: "checkboxgroup", name: "source",     label: "Comment avez-vous entendu parler de nous ?",  required: false, options: ["SOCIAL MEDIA", "GOOGLE", "AI", "BOUCHE À OREILLE"] },
];

const PRO_FIELDS_EN: FormField[] = [
  { type: "checkboxgroup", name: "format",     label: "Which format are you interested in?",  required: true,  options: ["COMPOSITION", "BOUQUET 360°", "PORTRAIT BOUQUET"] },
  { type: "checkboxgroup", name: "frequence",  label: "At what frequency?",                   required: true,  options: ["1×/MONTH", "2×/MONTH", "3×/MONTH", "EVERY WEEK"] },
  { type: "textarea",      name: "entreprise", label: "Tell us more about your business",    required: true,  placeholder: "Space name, type of activity, size…" },
  { type: "email",         name: "email",      label: "Your email",                           required: true,  placeholder: "you@example.com" },
  { type: "tel",           name: "telephone",  label: "Your phone number",                   required: true,  placeholder: "+32 4…" },
  { type: "checkboxgroup", name: "source",     label: "How did you hear about us?",          required: false, options: ["SOCIAL MEDIA", "GOOGLE", "AI", "WORD OF MOUTH"] },
];

const copy = {
  fr: {
    back:    "← abonnements",
    header:  "ABONNEMENTS",
    sub:     "espaces & professionnels",
    title:   "ESPACES & PROFESSIONNELS",
    body:    "nous proposons un travail floral récurent pour vos espaces professionnels,\nhôtels, boutiques, bureaux, cabinets...\nchaque intervention est développée sur mesure, pensée en lien avec l'identité\nde l'espace.\nnous définissons ensemble le format et la fréquence selon vos besoins.\n\nce formulaire nous permet de recueillir quelques informations avant notre\npremier échange, afin de mieux comprendre vos besoins et vous proposer\nune formule adaptée à votre espace.",
    italic:  "nous composons avec votre image et votre espace.",
    fields:  PRO_FIELDS_FR,
    submit:  "Envoyer la demande",
    success: "Demande bien reçue",
    successBody: (email: string) => `Merci.\nNous vous répondons sous 48h, du mardi au samedi.\n${email}`,
    reset:   "← Envoyer une autre demande",
  },
  en: {
    back:    "← subscriptions",
    header:  "SUBSCRIPTIONS",
    sub:     "spaces & professionals",
    title:   "SPACES & PROFESSIONALS",
    body:    "we offer recurring floral work for your professional spaces,\nhotels, boutiques, offices, practices...\neach intervention is developed to measure, conceived in relation\nto the identity of the space.\nwe define together the format and frequency according to your needs.\n\nthis form allows us to gather a few details before our first conversation,\nso we can better understand your needs and suggest a formula\nsuited to your space.",
    italic:  "we compose with your image and your space.",
    fields:  PRO_FIELDS_EN,
    submit:  "Send enquiry",
    success: "Enquiry received",
    successBody: (email: string) => `Thank you.\nWe will reply within 48h, Tuesday to Saturday.\n${email}`,
    reset:   "← Send another enquiry",
  },
};

/* ── Desktop grid constants ───────────────────── */
const COL_R   = 840;
const COL_W   = 161;
const COL_GAP = 10;
const ROW_H   = 230;
const ROW_GAP = 10;
const COL_2   = COL_R + COL_W + COL_GAP;   /* 1011 */
const FULL_W  = COL_W * 2 + COL_GAP;        /* 332  */
const GRID_TOP = 220;

function Mobile({ c }: { c: typeof copy.fr }) {
  const t = (s: string) => s.split("\n").join(" ");
  const photos = [img1, img2, img3, img4, img5];
  return (
    <div>
      <Link href="/abonnements" style={{ fontFamily: F, fontSize: 15, fontWeight: 300, letterSpacing: "-0.04em", color: "rgba(0,0,0,0.4)", textDecoration: "none", display: "block", marginBottom: 24 }}>{c.back}</Link>
      <div style={{ fontFamily: S, fontSize: 18, fontWeight: 700, letterSpacing: "-0.05em", textTransform: "uppercase", lineHeight: 1, marginBottom: 8 }}>{c.title}</div>
      <p style={{ fontFamily: F, fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1.0, margin: "0 0 10px" }}>{t(c.body)}</p>
      <p style={{ fontFamily: F, fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1.0, margin: "0 0 24px", textAlign: "right" }}>{c.italic}</p>
      {/* 2-col grid, last image spans full width */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 36 }}>
        {photos.slice(0, 4).map((src, i) => (
          <img key={i} src={src} alt="" style={{ width: "100%", aspectRatio: "7/10", objectFit: "cover", display: "block" }} />
        ))}
        <img src={photos[4]} alt="" style={{ gridColumn: "1 / -1", width: "100%", aspectRatio: "4/3", objectFit: "cover", objectPosition: "center 40%", display: "block" }} />
      </div>
      <SubForm fields={c.fields} submit={c.submit} success={c.success} successBody={c.successBody} reset={c.reset} apiPath="/api/subscribe" subscribeType="pro" />
    </div>
  );
}

export default function FloralPro() {
  const { lang } = useLang();
  const c = copy[lang];
  const bl = (text: string) => text.split("\n").map((l, i) => <span key={i}>{l}<br /></span>);

  return (
    <>
    <Helmet>
      <title>{lang === "fr" ? "Abonnements professionnels — MUND STUDIO" : "Professional Subscriptions — MUND STUDIO"}</title>
      <meta name="description" content={lang === "fr" ? "Abonnements floraux pour espaces professionnels — hôtels, boutiques, bureaux. MUND STUDIO, Liège." : "Floral subscriptions for professional spaces — hotels, boutiques, offices. MUND STUDIO, Liège."} />
      <link rel="canonical" href="https://mund.be/floral/pro" />
    </Helmet>
    <ArtboardShell overlayRef={overlayRef} minHeight={1500} mobile={<Mobile c={c} />}>

      {/* ── back link ── */}
      <Link href="/abonnements" style={{ position: "absolute", left: 130, top: 148, ...CTA_LINK, color: "rgba(0,0,0,0.38)", borderBottomColor: "rgba(0,0,0,0.2)" }}>
        {c.back}
      </Link>

      {/* ── header top-right ── */}
      <div style={{ position: "absolute", left: COL_R, top: 130, width: FULL_W, textAlign: "right" }}>
        <div style={{ ...SERIF }}>{c.header}</div>
        <p style={{ ...BODY, margin: 0, color: "rgba(0,0,0,0.45)" }}>{c.sub}</p>
      </div>

      {/* ── 2×2 grid ── */}
      <img src={img1} alt="" style={{ position: "absolute", left: COL_R, top: GRID_TOP,              width: COL_W, height: ROW_H, objectFit: "cover" }} />
      <img src={img2} alt="" style={{ position: "absolute", left: COL_2, top: GRID_TOP,              width: COL_W, height: ROW_H, objectFit: "cover" }} />
      <img src={img3} alt="" style={{ position: "absolute", left: COL_R, top: GRID_TOP + ROW_H + ROW_GAP, width: COL_W, height: ROW_H, objectFit: "cover" }} />
      <img src={img4} alt="" style={{ position: "absolute", left: COL_2, top: GRID_TOP + ROW_H + ROW_GAP, width: COL_W, height: ROW_H, objectFit: "cover" }} />

      {/* ── full-width 5th image ── */}
      <img src={img5} alt="" style={{ position: "absolute", left: COL_R, top: GRID_TOP + (ROW_H + ROW_GAP) * 2, width: FULL_W, height: 180, objectFit: "cover", objectPosition: "center 35%" }} />

      {/* ── left column ── */}
      <div style={{ position: "absolute", left: 130, top: 195, width: 640 }}>
        <div style={{ ...SERIF, marginBottom: 18 }}>{c.title}</div>
        <p style={{ ...BODY, margin: 0, marginBottom: 10 }}>{bl(c.body)}</p>
        <p style={{ ...SERIF, fontWeight: 400, textTransform: "none", textAlign: "right", marginBottom: 36 }}>{c.italic}</p>
        <SubForm fields={c.fields} submit={c.submit} success={c.success} successBody={c.successBody} reset={c.reset} apiPath="/api/subscribe" subscribeType="pro" />
      </div>

    </ArtboardShell>
    </>
  );
}
