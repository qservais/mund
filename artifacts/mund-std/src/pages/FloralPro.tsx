import { Link } from "wouter";
import ArtboardShell, { SERIF, BODY, CTA_LINK } from "@/components/ArtboardShell";
import { SubForm, type FormField } from "@/components/SubForm";
import { useLang } from "@/context/LanguageContext";
import overlayRef from "@assets/floral_1778527882896.png";
const imgMain = "/images/svc1.webp";

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

function Mobile({ c }: { c: typeof copy.fr }) {
  const t = (s: string) => s.split("\n").join(" ");
  return (
    <div>
      <Link href="/abonnements" style={{ fontFamily: F, fontSize: 15, fontWeight: 300, letterSpacing: "-0.04em", color: "rgba(0,0,0,0.4)", textDecoration: "none", display: "block", marginBottom: 24 }}>{c.back}</Link>
      <div style={{ fontFamily: S, fontSize: 18, fontWeight: 700, letterSpacing: "-0.05em", textTransform: "uppercase", lineHeight: 1, marginBottom: 8 }}>{c.title}</div>
      <p style={{ fontFamily: F, fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1.0, margin: "0 0 10px" }}>{t(c.body)}</p>
      <p style={{ fontFamily: F, fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1.0, margin: "0 0 28px", textAlign: "right" }}>{c.italic}</p>
      <img src={imgMain} alt="" style={{ width: "100%", aspectRatio: "7/10", objectFit: "cover", display: "block", marginBottom: 36 }} />
      <SubForm fields={c.fields} submit={c.submit} success={c.success} successBody={c.successBody} reset={c.reset} />
    </div>
  );
}

export default function FloralPro() {
  const { lang } = useLang();
  const c = copy[lang];
  const bl = (text: string) => text.split("\n").map((l, i) => <span key={i}>{l}<br /></span>);

  return (
    <ArtboardShell overlayRef={overlayRef} minHeight={1500} mobile={<Mobile c={c} />}>

      {/* ── back link ── */}
      <Link href="/abonnements" style={{ position: "absolute", left: 130, top: 148, ...CTA_LINK, color: "rgba(0,0,0,0.38)", borderBottomColor: "rgba(0,0,0,0.2)" }}>
        {c.back}
      </Link>

      {/* ── header top-right ── */}
      <div style={{ position: "absolute", left: 840, top: 130, width: 330, textAlign: "right" }}>
        <div style={{ ...SERIF }}>{c.header}</div>
        <p style={{ ...BODY, margin: 0, color: "rgba(0,0,0,0.45)" }}>{c.sub}</p>
      </div>

      {/* ── image right ── */}
      <img src={imgMain} alt="" style={{ position: "absolute", left: 840, top: 220, width: 335, height: 534, objectFit: "cover" }} />

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
