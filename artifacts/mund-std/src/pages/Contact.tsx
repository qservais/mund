import { useState, type FormEvent } from "react";
import { useLang } from "@/context/LanguageContext";
import ArtboardShell, { SERIF, BODY } from "@/components/ArtboardShell";

const FF  = '"Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif';

const LBL: React.CSSProperties = {
  ...BODY, textTransform: "uppercase", letterSpacing: "0.28em",
  color: "rgba(0,0,0,0.38)", lineHeight: 1, display: "block",
};
const INFO: React.CSSProperties = {
  ...BODY, lineHeight: 1.0,
};
const FIELD_LBL: React.CSSProperties = {
  ...BODY, textTransform: "uppercase", letterSpacing: "0.24em",
  color: "rgba(0,0,0,0.38)", lineHeight: 1,
  display: "flex", alignItems: "baseline", justifyContent: "space-between",
};
const INPUT: React.CSSProperties = {
  ...BODY,
  color: "#151515", background: "transparent",
  border: "none", borderBottom: "1px solid rgba(0,0,0,0.18)",
  paddingBottom: 9, paddingTop: 2,
  width: "100%", outline: "none",
};

const copy = {
  fr: {
    title: "CONTACT",
    atelier: "Atelier",
    adresse: ["MUND STUDIO", "Rue Monulphe 7", "4000 Liège, Belgique"],
    reseaux: "Réseaux",
    direction: "Direction",
    directionText: ["Julie Ahn,", "designer florale."],
    caption: "vides et pleins, chaos et structure.",
    fields: [
      { name: "nom",     label: "Votre nom",       type: "text",  placeholder: "Prénom & nom",                                       required: true  },
      { name: "email",   label: "Email",            type: "email", placeholder: "vous@exemple.be",                                    required: true  },
      { name: "type",    label: "Nature du projet", type: "text",  placeholder: "Mariage, événement, scénographie, abonnement…",      required: false },
      { name: "date",    label: "Date envisagée",   type: "text",  placeholder: "Saison, mois, journée…",                            required: false },
      { name: "message", label: "Votre message",    type: "text",  placeholder: "Décrivez le lieu, le nombre d'invités, l'ambiance…", required: true, multiline: true },
    ],
    submit:      "Envoyer",
    success:     "Message bien reçu",
    successBody: (nom: string) =>
      `Merci ${nom}.\nNous vous répondons sous 48h, du mardi au samedi.`,
    reset: "← Envoyer un autre message",
  },
  en: {
    title: "CONTACT",
    atelier: "Studio",
    adresse: ["MUND STUDIO", "7 Rue Monulphe", "4000 Liège, Belgium"],
    reseaux: "Social",
    direction: "Direction",
    directionText: ["Julie Ahn,", "floral designer."],
    caption: "voids and solids, chaos and structure.",
    fields: [
      { name: "nom",     label: "Your name",     type: "text",  placeholder: "First & last name",                                 required: true  },
      { name: "email",   label: "Email",          type: "email", placeholder: "you@example.com",                                   required: true  },
      { name: "type",    label: "Project type",   type: "text",  placeholder: "Wedding, event, scenography, subscription…",       required: false },
      { name: "date",    label: "Planned date",   type: "text",  placeholder: "Season, month, day…",                             required: false },
      { name: "message", label: "Your message",   type: "text",  placeholder: "Describe the venue, guests, atmosphere…",         required: true, multiline: true },
    ],
    submit:      "Send",
    success:     "Message received",
    successBody: (nom: string) =>
      `Thank you, ${nom}.\nWe will reply within 48h, Tuesday to Saturday.`,
    reset: "← Send another message",
  },
} as const;

function ContactForm({
  c, style,
}: {
  c: typeof copy.fr;
  style?: React.CSSProperties;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues]       = useState<Record<string, string>>({});
  const { lang } = useLang();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }
  function reset() { setValues({}); setSubmitted(false); }

  if (submitted) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 24, ...style }} data-testid="contact-success">
        <span style={{ ...SERIF, textTransform: "none" }}>{c.success}</span>
        <p style={{ ...BODY, lineHeight: 1.0, margin: 0, whiteSpace: "pre-line" }}>
          {c.successBody(values.nom?.split(" ")[0] || (lang === "fr" ? "à très vite" : "see you soon"))}
        </p>
        <button
          type="button"
          onClick={reset}
          data-testid="button-reset"
          style={{
            ...BODY, textTransform: "uppercase", letterSpacing: "0.2em",
            color: "rgba(0,0,0,0.45)", background: "transparent", border: "none",
            borderBottom: "1px solid rgba(0,0,0,0.25)", paddingBottom: 2,
            cursor: "pointer", alignSelf: "flex-start",
          }}
        >
          {c.reset}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 28, ...style }}
      data-testid="form-contact"
    >
      {c.fields.map((field, i) => (
        <div key={field.name} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <label htmlFor={field.name} style={FIELD_LBL}>
            <span>{String(i + 1).padStart(2, "0")} — {field.label}</span>
            {field.required && <span>*</span>}
          </label>
          {"multiline" in field && field.multiline ? (
            <textarea
              id={field.name} name={field.name}
              required={field.required}
              placeholder={field.placeholder}
              rows={4}
              value={values[field.name] ?? ""}
              onChange={(e) => setValues((v) => ({ ...v, [field.name]: e.target.value }))}
              data-testid={`input-${field.name}`}
              style={{ ...INPUT, resize: "none" }}
            />
          ) : (
            <input
              id={field.name} type={field.type} name={field.name}
              required={field.required}
              placeholder={field.placeholder}
              value={values[field.name] ?? ""}
              onChange={(e) => setValues((v) => ({ ...v, [field.name]: e.target.value }))}
              data-testid={`input-${field.name}`}
              style={INPUT}
            />
          )}
        </div>
      ))}

      <div style={{
        display: "flex", alignItems: "baseline",
        justifyContent: "flex-end", gap: 24, paddingTop: 8,
        borderTop: "1px solid rgba(0,0,0,0.10)",
      }}>
        <button
          type="submit"
          data-testid="button-submit"
          style={{
            ...BODY, textTransform: "uppercase", letterSpacing: "0.22em",
            color: "#151515", background: "transparent", border: "none",
            borderBottom: "1px solid #151515", paddingBottom: 2,
            cursor: "pointer", display: "inline-flex", gap: 10, alignItems: "baseline",
            whiteSpace: "nowrap",
          }}
        >
          <span>{c.submit}</span>
          <span aria-hidden>→</span>
        </button>
      </div>
    </form>
  );
}

function ContactMobile({ c }: { c: typeof copy.fr }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      <div style={{ ...SERIF, marginBottom: 32 }}>{c.title}</div>

      <div style={{ height: 1, backgroundColor: "rgba(0,0,0,0.12)", marginBottom: 32 }} />

      <div style={{ display: "flex", flexDirection: "column", gap: 28, marginBottom: 40 }}>
        <div>
          <span style={LBL}>{c.atelier}</span>
          <div style={{ marginTop: 10 }}>
            {c.adresse.map((l, i) => <div key={i} style={INFO}>{l}</div>)}
          </div>
        </div>
        <div>
          <span style={LBL}>{c.reseaux}</span>
          <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 4 }}>
            <a href="https://instagram.com/mund.std" target="_blank" rel="noreferrer"
               style={{ ...INFO, textDecoration: "none" }} data-testid="link-instagram">
              Instagram — @mund.std
            </a>
            <a href="https://www.facebook.com/p/Mund-Std-61561226727135/" target="_blank" rel="noreferrer"
               style={{ ...INFO, textDecoration: "none" }} data-testid="link-facebook">
              Facebook — Mund Std
            </a>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.10)", paddingTop: 20 }}>
          <span style={LBL}>{c.direction}</span>
          <div style={{ marginTop: 10 }}>
            {c.directionText.map((l, i) => <div key={i} style={INFO}>{l}</div>)}
          </div>
        </div>
      </div>

      <div style={{ height: 1, backgroundColor: "rgba(0,0,0,0.12)", marginBottom: 36 }} />

      <ContactForm c={c} />
    </div>
  );
}

export default function Contact() {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <ArtboardShell minHeight={1200} mobile={<ContactMobile c={c} />}>

      {/* ── CONTACT title ──────────────────────────────────────── */}
      <div style={{ position: "absolute", left: 130, top: 195 }}>
        <div style={{ ...SERIF }}>{c.title}</div>
      </div>

      {/* ── HR ─────────────────────────────────────────────────── */}
      <div style={{
        position: "absolute", left: 130, top: 222,
        width: 940, height: 1, backgroundColor: "rgba(0,0,0,0.13)",
      }} />

      {/* ── Atelier ────────────────────────────────────────────── */}
      <div style={{ position: "absolute", left: 130, top: 250 }}>
        <span style={LBL}>{c.atelier}</span>
        <div style={{ marginTop: 12 }}>
          {c.adresse.map((l, i) => <div key={i} style={INFO}>{l}</div>)}
        </div>
      </div>

      {/* ── Réseaux ────────────────────────────────────────────── */}
      <div style={{ position: "absolute", left: 130, top: 370 }}>
        <span style={LBL}>{c.reseaux}</span>
        <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 6 }}>
          <a href="https://instagram.com/mund.std" target="_blank" rel="noreferrer"
             style={{ ...INFO, textDecoration: "none", display: "block" }}
             data-testid="link-instagram">Instagram — @mund.std</a>
          <a href="https://www.facebook.com/p/Mund-Std-61561226727135/" target="_blank" rel="noreferrer"
             style={{ ...INFO, textDecoration: "none", display: "block" }}
             data-testid="link-facebook">Facebook — Mund Std</a>
        </div>
      </div>

      {/* ── Direction ──────────────────────────────────────────── */}
      <div style={{
        position: "absolute", left: 130, top: 480,
        paddingTop: 20, borderTop: "1px solid rgba(0,0,0,0.10)", width: 260,
      }}>
        <span style={LBL}>{c.direction}</span>
        <div style={{ marginTop: 12 }}>
          {c.directionText.map((l, i) => <div key={i} style={INFO}>{l}</div>)}
        </div>
      </div>

      {/* ── Caption ────────────────────────────────────────────── */}
      <div style={{
        position: "absolute", left: 130, top: 610,
        ...BODY, color: "rgba(0,0,0,0.35)", letterSpacing: "-0.04em",
      }}>
        {c.caption}
      </div>

      {/* ── Formulaire ─────────────────────────────────────────── */}
      <div style={{ position: "absolute", left: 490, top: 250, width: 680 }}>
        <ContactForm c={c} />
      </div>

    </ArtboardShell>
  );
}
