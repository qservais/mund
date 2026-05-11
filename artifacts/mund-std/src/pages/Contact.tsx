import { useState, type FormEvent } from "react";
import { useLang } from "@/context/LanguageContext";

// ── Typography tokens (match the rest of the site) ──────────
const FF = '"Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif';

const LABEL: React.CSSProperties = {
  fontFamily: FF, fontWeight: 300, fontSize: 9,
  textTransform: "uppercase", letterSpacing: "0.32em",
  color: "rgba(0,0,0,0.40)", lineHeight: 1,
};
const BODY_SM: React.CSSProperties = {
  fontFamily: FF, fontWeight: 300, fontSize: 13,
  letterSpacing: "-0.04em", lineHeight: 1.7,
  color: "rgba(0,0,0,0.65)",
};
const FIELD_LABEL: React.CSSProperties = {
  fontFamily: FF, fontWeight: 300, fontSize: 9,
  textTransform: "uppercase", letterSpacing: "0.28em",
  color: "rgba(0,0,0,0.45)", lineHeight: 1,
  display: "flex", alignItems: "baseline", justifyContent: "space-between",
};
const INPUT: React.CSSProperties = {
  fontFamily: FF, fontWeight: 300, fontSize: 13,
  letterSpacing: "-0.04em", lineHeight: 1.7,
  color: "#151515", background: "transparent",
  border: "none", borderBottom: "1px solid rgba(0,0,0,0.18)",
  paddingBottom: 10, paddingTop: 2,
  width: "100%", outline: "none",
};

const copy = {
  fr: {
    header: "contact",
    atelier: "Atelier",
    adresse: ["MUND STUDIO", "Rue Monulphe 7", "4000 Liège, Belgique"],
    ouverture: "Ouverture",
    horaires: ["Du mardi au samedi,", "sur rendez-vous."],
    reseaux: "Réseaux",
    direction: "Direction",
    directionText: ["Julie Ahn,", "architecte & designer florale."],
    fields: [
      { name: "nom",     label: "Votre nom",       type: "text",  placeholder: "Prénom & nom",                                        required: true  },
      { name: "email",   label: "Email",            type: "email", placeholder: "vous@exemple.be",                                     required: true  },
      { name: "type",    label: "Nature du projet", type: "text",  placeholder: "Mariage, événement, scénographie…",                   required: false },
      { name: "date",    label: "Date envisagée",   type: "text",  placeholder: "Saison, mois, journée…",                             required: false },
      { name: "message", label: "Votre message",    type: "text",  placeholder: "Décrivez le lieu, le nombre d'invités, l'ambiance…", required: true, multiline: true },
    ],
    note:    "Réponse sous 48h, du mardi au samedi.",
    submit:  "Envoyer",
    success: "Message bien reçu",
    successBody: (nom: string) =>
      `Merci, ${nom}.\nNous vous répondons sous 48h, du mardi au samedi.`,
    reset: "← Envoyer un autre message",
  },
  en: {
    header: "contact",
    atelier: "Studio",
    adresse: ["MUND STUDIO", "7 Rue Monulphe", "4000 Liège, Belgium"],
    ouverture: "Hours",
    horaires: ["Tuesday to Saturday,", "by appointment."],
    reseaux: "Social",
    direction: "Direction",
    directionText: ["Julie Ahn,", "architect & floral designer."],
    fields: [
      { name: "nom",     label: "Your name",     type: "text",  placeholder: "First & last name",                                  required: true  },
      { name: "email",   label: "Email",          type: "email", placeholder: "you@example.com",                                    required: true  },
      { name: "type",    label: "Project type",   type: "text",  placeholder: "Wedding, event, scenography…",                      required: false },
      { name: "date",    label: "Planned date",   type: "text",  placeholder: "Season, month, day…",                              required: false },
      { name: "message", label: "Your message",   type: "text",  placeholder: "Describe the venue, guests, atmosphere…",          required: true, multiline: true },
    ],
    note:    "We reply within 48h, Tuesday to Saturday.",
    submit:  "Send",
    success: "Message received",
    successBody: (nom: string) =>
      `Thank you, ${nom}.\nWe will reply within 48h, Tuesday to Saturday.`,
    reset: "← Send another message",
  },
} as const;

export default function Contact() {
  const { lang } = useLang();
  const c = copy[lang];
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState<Record<string, string>>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }
  function reset() { setValues({}); setSubmitted(false); }

  return (
    <section style={{ position: "relative", width: "100%", paddingTop: 40, paddingBottom: 96, paddingLeft: 56, paddingRight: 56 }}>

      {/* ── Header ──────────────────────────────────────────── */}
      <div style={{ borderBottom: "1px solid rgba(0,0,0,0.10)", paddingBottom: 32, marginBottom: 48 }}>
        <span style={{ ...LABEL }}>{c.header}</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 48px" }}>

        {/* ── Left — coordonnées ──────────────────────────── */}
        <aside style={{ display: "flex", flexDirection: "column", gap: 32 }}>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={LABEL}>{c.atelier}</span>
            <p style={{ ...BODY_SM, margin: 0 }}>
              {c.adresse.map((line, i) => <span key={i}>{line}{i < c.adresse.length - 1 && <br />}</span>)}
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={LABEL}>{c.ouverture}</span>
            <p style={{ ...BODY_SM, margin: 0 }}>{c.horaires[0]}<br />{c.horaires[1]}</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={LABEL}>{c.reseaux}</span>
            <a
              href="https://instagram.com/mund.std"
              target="_blank" rel="noreferrer"
              data-testid="link-instagram"
              style={{ ...BODY_SM, textDecoration: "none" }}
            >
              Instagram — @mund.std
            </a>
            <a
              href="https://www.facebook.com/p/Mund-Std-61561226727135/"
              target="_blank" rel="noreferrer"
              data-testid="link-facebook"
              style={{ ...BODY_SM, textDecoration: "none" }}
            >
              Facebook — Mund Std
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingTop: 16, borderTop: "1px solid rgba(0,0,0,0.10)" }}>
            <span style={{ ...LABEL, color: "#c0392b" }}>{c.direction}</span>
            <p style={{ ...BODY_SM, margin: 0 }}>{c.directionText[0]}<br />{c.directionText[1]}</p>
          </div>

        </aside>

        {/* ── Right — formulaire ──────────────────────────── */}
        <div>
          {!submitted ? (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 32 }} data-testid="form-contact">

              {c.fields.map((field, i) => (
                <div key={field.name} style={{ position: "relative", display: "flex", flexDirection: "column", gap: 12 }}>
                  <label htmlFor={field.name} style={FIELD_LABEL}>
                    <span>{String(i + 1).padStart(2, "0")} — {field.label}</span>
                    {field.required && <span style={{ color: "#c0392b" }}>*</span>}
                  </label>
                  {"multiline" in field && field.multiline ? (
                    <textarea
                      id={field.name} name={field.name}
                      required={field.required}
                      placeholder={field.placeholder}
                      rows={5}
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

              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 24, paddingTop: 16 }}>
                <p style={{ ...LABEL, maxWidth: 260, lineHeight: 1.5 }}>{c.note}</p>
                <button
                  type="submit"
                  data-testid="button-submit"
                  style={{
                    fontFamily: FF, fontWeight: 300, fontSize: 10,
                    textTransform: "uppercase", letterSpacing: "0.25em",
                    color: "#151515", background: "transparent", border: "none",
                    borderBottom: "1px solid #151515", paddingBottom: 2,
                    cursor: "pointer", display: "inline-flex", gap: 10, alignItems: "baseline",
                  }}
                >
                  <span>{c.submit}</span>
                  <span aria-hidden>→</span>
                </button>
              </div>

            </form>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 24, paddingTop: 8 }} data-testid="contact-success">
              <span style={{ ...LABEL, color: "#c0392b" }}>{c.success}</span>
              <p style={{ ...BODY_SM, margin: 0, maxWidth: 380, whiteSpace: "pre-line" }}>
                {c.successBody(values.nom?.split(" ")[0] || (lang === "fr" ? "à très vite" : "see you soon"))}
              </p>
              <button
                type="button" onClick={reset}
                data-testid="button-reset"
                style={{
                  fontFamily: FF, fontWeight: 300, fontSize: 9,
                  textTransform: "uppercase", letterSpacing: "0.25em",
                  color: "rgba(0,0,0,0.45)", background: "transparent", border: "none",
                  borderBottom: "1px solid rgba(0,0,0,0.30)", paddingBottom: 2,
                  cursor: "pointer", alignSelf: "flex-start",
                }}
              >
                {c.reset}
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
