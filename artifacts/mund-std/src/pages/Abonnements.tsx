import { useState, type FormEvent } from "react";
import ArtboardShell, { SERIF, BODY } from "@/components/ArtboardShell";
import { useLang } from "@/context/LanguageContext";
import overlayRef from "@assets/floral_1778527882896.png";
const imgMain = "/images/svc1.webp";

const FIELD_LBL: React.CSSProperties = {
  ...BODY, textTransform: "uppercase", letterSpacing: "0.24em",
  color: "rgba(0,0,0,0.38)", lineHeight: 1, display: "block",
};
const INPUT: React.CSSProperties = {
  ...BODY,
  color: "#151515", background: "transparent",
  border: "none", borderBottom: "1px solid rgba(0,0,0,0.18)",
  paddingBottom: 9, paddingTop: 2,
  width: "100%", outline: "none",
};

type CheckboxField = {
  type: "checkboxgroup"; name: string; label: string;
  options: string[]; required: boolean;
};
type TextField = {
  type: "text" | "email" | "tel" | "textarea"; name: string; label: string;
  placeholder: string; required: boolean;
};
type FormField = CheckboxField | TextField;

const PRO_FIELDS_FR: FormField[] = [
  { type: "checkboxgroup", name: "format",     label: "Par quel format êtes-vous intéressés ?",   required: true,  options: ["COMPOSITION", "BOUQUET 360°", "BOUQUET PORTRAIT"] },
  { type: "checkboxgroup", name: "frequence",  label: "À quelle fréquence ?",                     required: true,  options: ["1 FOIS/MOIS", "2 FOIS/MOIS", "3 FOIS/MOIS", "CHAQUE SEMAINE"] },
  { type: "textarea",      name: "entreprise", label: "Dites-nous en plus sur votre entreprise",  required: true,  placeholder: "Nom de l'espace, type d'activité, taille du lieu…" },
  { type: "email",         name: "email",      label: "Votre email",                              required: true,  placeholder: "vous@exemple.be" },
  { type: "tel",           name: "telephone",  label: "Votre numéro de téléphone",               required: true,  placeholder: "+32 4…" },
  { type: "checkboxgroup", name: "source",     label: "Comment avez-vous entendu parler de nous ?", required: false, options: ["SOCIAL MEDIA", "GOOGLE", "AI", "BOUCHE À OREILLE"] },
];

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

const PRO_FIELDS_EN: FormField[] = [
  { type: "checkboxgroup", name: "format",     label: "Which format are you interested in?",  required: true,  options: ["COMPOSITION", "BOUQUET 360°", "PORTRAIT BOUQUET"] },
  { type: "checkboxgroup", name: "frequence",  label: "At what frequency?",                   required: true,  options: ["1×/MONTH", "2×/MONTH", "3×/MONTH", "EVERY WEEK"] },
  { type: "textarea",      name: "entreprise", label: "Tell us more about your business",    required: true,  placeholder: "Space name, type of activity, size…" },
  { type: "email",         name: "email",      label: "Your email",                           required: true,  placeholder: "you@example.com" },
  { type: "tel",           name: "telephone",  label: "Your phone number",                   required: true,  placeholder: "+32 4…" },
  { type: "checkboxgroup", name: "source",     label: "How did you hear about us?",          required: false, options: ["SOCIAL MEDIA", "GOOGLE", "AI", "WORD OF MOUTH"] },
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
    aboTitle: "NOS ABONNEMENTS",
    aboSub: "retrouver notre travail floral pour vos espaces\nou votre habitation.",
    proTitle: "ESPACES & PROFESSIONNELS",
    proBody: "nous proposons un travail floral récurent pour vos espaces professionnels,\nhôtels, boutiques, bureaux, cabinets...\nchaque intervention est développée sur mesure, pensée en lien avec l'identité\nde l'espace.\nnous définissons ensemble le format et la fréquence selon vos besoins.",
    proItalic: "nous composons avec votre image et votre espace.",
    proFields: PRO_FIELDS_FR,
    proSubmit:       "Envoyer la demande",
    proSuccess:      "Demande bien reçue",
    proSuccessBody:  (email: string) => `Merci.\nNous vous répondons sous 48h, du mardi au samedi.\n${email}`,
    proReset:        "← Envoyer une autre demande",
    partTitle: "PARTICULIERS",
    partBody: "chaque deuxième jeudi du mois, nous vous proposons un bouquet surprise\ncomposé selon les arrivages du moment.\nune manière d'inviter notre travail chez vous en le voyant évoluer au fil des\nsaisons ou de manière occasionnelle.",
    partItalic: "un rendez-vous mensuel autour des fleurs de saison.",
    partFields: PART_FIELDS_FR,
    partSubmit:      "Envoyer",
    partSuccess:     "Inscription bien reçue",
    partSuccessBody: (email: string) => `Merci.\nNous vous contacterons pour confirmer le premier rendez-vous.\n${email}`,
    partReset:       "← Envoyer une autre inscription",
    required:        "Au moins une option requise",
  },
  en: {
    aboTitle: "OUR SUBSCRIPTIONS",
    aboSub: "find our floral work for your spaces\nor your home.",
    proTitle: "SPACES & PROFESSIONALS",
    proBody: "we offer recurring floral work for your professional spaces,\nhotels, boutiques, offices, practices...\neach intervention is developed to measure, conceived in relation\nto the identity of the space.\nwe define together the format and frequency according to your needs.",
    proItalic: "we compose with your image and your space.",
    proFields: PRO_FIELDS_EN,
    proSubmit:       "Send enquiry",
    proSuccess:      "Enquiry received",
    proSuccessBody:  (email: string) => `Thank you.\nWe will reply within 48h, Tuesday to Saturday.\n${email}`,
    proReset:        "← Send another enquiry",
    partTitle: "PRIVATE CLIENTS",
    partBody: "every second thursday of the month, we offer you a surprise bouquet\ncomposed according to current arrivals.\na way to invite our work into your home,\nwatching it evolve with the seasons or on an occasional basis.",
    partItalic: "a monthly appointment around seasonal flowers.",
    partFields: PART_FIELDS_EN,
    partSubmit:       "Send",
    partSuccess:      "Registration received",
    partSuccessBody:  (email: string) => `Thank you.\nWe will contact you to confirm the first appointment.\n${email}`,
    partReset:        "← Send another registration",
    required:         "At least one option required",
  },
};

type FormValues = Record<string, string | string[]>;

function CheckboxOption({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <div
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onClick={onChange}
      onKeyDown={(e) => (e.key === " " || e.key === "Enter") && onChange()}
      style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", userSelect: "none" }}
    >
      <span style={{
        width: 9, height: 9, flexShrink: 0,
        border: "1px solid rgba(0,0,0,0.4)",
        background: checked ? "#151515" : "transparent",
        display: "inline-block",
        transition: "background 0.12s",
      }} />
      <span style={{ ...BODY, textTransform: "uppercase", letterSpacing: "0.12em", lineHeight: 1 }}>
        {label}
      </span>
    </div>
  );
}

function SubForm({
  fields, submit, success, successBody, reset, style,
}: {
  fields: FormField[];
  submit: string;
  success: string;
  successBody: (email: string) => string;
  reset: string;
  style?: React.CSSProperties;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues]       = useState<FormValues>({});
  const [errors, setErrors]       = useState<Record<string, boolean>>({});

  const toggleCheckbox = (name: string, opt: string) => {
    setValues((prev) => {
      const cur = (prev[name] as string[] | undefined) ?? [];
      const next = cur.includes(opt) ? cur.filter((v) => v !== opt) : [...cur, opt];
      return { ...prev, [name]: next };
    });
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};
    let ok = true;
    for (const f of fields) {
      if (f.required && f.type === "checkboxgroup") {
        const val = (values[f.name] as string[] | undefined) ?? [];
        if (val.length === 0) { newErrors[f.name] = true; ok = false; }
      }
    }
    if (!ok) { setErrors(newErrors); return; }
    setSubmitted(true);
  };

  if (submitted) {
    const email = (values["email"] as string) ?? "";
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, ...style }} data-testid="sub-success">
        <span style={{ ...SERIF, textTransform: "none" }}>{success}</span>
        <p style={{ ...BODY, lineHeight: 1.15, margin: 0, whiteSpace: "pre-line", color: "rgba(0,0,0,0.5)" }}>
          {successBody(email)}
        </p>
        <button
          type="button"
          onClick={() => { setValues({}); setErrors({}); setSubmitted(false); }}
          style={{
            ...BODY, textTransform: "uppercase", letterSpacing: "0.2em",
            color: "rgba(0,0,0,0.45)", background: "transparent", border: "none",
            borderBottom: "1px solid rgba(0,0,0,0.25)", paddingBottom: 2,
            cursor: "pointer", alignSelf: "flex-start",
          }}
        >
          {reset}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24, ...style }}>
      {fields.map((field, i) => {
        const idx = String(i + 1).padStart(2, "0");
        if (field.type === "checkboxgroup") {
          const selected = (values[field.name] as string[] | undefined) ?? [];
          return (
            <div key={field.name} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                <span style={FIELD_LBL}>{idx} — {field.label}{field.required && " *"}</span>
                {errors[field.name] && (
                  <span style={{ ...BODY, color: "rgba(180,0,0,0.65)", fontSize: 11 }}>↑ requis</span>
                )}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 7, paddingTop: 2 }}>
                {field.options.map((opt) => (
                  <CheckboxOption
                    key={opt} label={opt}
                    checked={selected.includes(opt)}
                    onChange={() => toggleCheckbox(field.name, opt)}
                  />
                ))}
              </div>
            </div>
          );
        }

        return (
          <div key={field.name} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
              <span style={FIELD_LBL}>{idx} — {field.label}</span>
              {field.required && <span style={FIELD_LBL}>*</span>}
            </div>
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                required={field.required}
                placeholder={(field as TextField).placeholder}
                rows={3}
                value={(values[field.name] as string) ?? ""}
                onChange={(e) => setValues((v) => ({ ...v, [field.name]: e.target.value }))}
                style={{ ...INPUT, resize: "none" }}
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                required={field.required}
                placeholder={(field as TextField).placeholder}
                value={(values[field.name] as string) ?? ""}
                onChange={(e) => setValues((v) => ({ ...v, [field.name]: e.target.value }))}
                style={INPUT}
              />
            )}
          </div>
        );
      })}

      <div style={{
        display: "flex", alignItems: "baseline",
        justifyContent: "flex-end", paddingTop: 8,
        borderTop: "1px solid rgba(0,0,0,0.10)",
      }}>
        <button
          type="submit"
          style={{
            ...BODY, textTransform: "uppercase", letterSpacing: "0.22em",
            color: "#151515", background: "transparent", border: "none",
            borderBottom: "1px solid #151515", paddingBottom: 2,
            cursor: "pointer", display: "inline-flex", gap: 10, alignItems: "baseline",
          }}
        >
          <span>{submit}</span>
          <span aria-hidden>→</span>
        </button>
      </div>
    </form>
  );
}

function AbonnementsMobile({ c }: { c: typeof copy.fr }) {
  const bodyText = (t: string) => t.split("\n").join(" ");
  return (
    <div>
      <div style={{ fontFamily: '"Cormorant Garamond","Times New Roman",serif', fontSize: 18, fontWeight: 700, letterSpacing: "-0.05em", textTransform: "uppercase", lineHeight: 1, marginBottom: 8 }}>
        {c.aboTitle}
      </div>
      <p style={{ fontFamily: '"Helvetica Now Display","Helvetica Neue",Helvetica,Arial,sans-serif', fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1.0, margin: "0 0 28px" }}>
        {bodyText(c.aboSub)}
      </p>
      <img src={imgMain} alt="" style={{ width: "100%", aspectRatio: "7/12", objectFit: "cover", display: "block", marginBottom: 36 }} />

      <div id="pro" style={{ marginBottom: 16 }}>
        <div style={{ fontFamily: '"Cormorant Garamond","Times New Roman",serif', fontSize: 18, fontWeight: 700, letterSpacing: "-0.05em", textTransform: "uppercase", lineHeight: 1, marginBottom: 14 }}>
          {c.proTitle}
        </div>
        <p style={{ fontFamily: '"Helvetica Now Display","Helvetica Neue",Helvetica,Arial,sans-serif', fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1.0, margin: "0 0 10px" }}>
          {bodyText(c.proBody)}
        </p>
        <p style={{ fontFamily: '"Helvetica Now Display","Helvetica Neue",Helvetica,Arial,sans-serif', fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1.0, margin: "0 0 28px", textAlign: "right" }}>
          {c.proItalic}
        </p>
        <SubForm fields={c.proFields} submit={c.proSubmit} success={c.proSuccess} successBody={c.proSuccessBody} reset={c.proReset} />
      </div>

      <div style={{ height: 1, backgroundColor: "rgba(0,0,0,0.15)", margin: "40px 0" }} />

      <div id="particulier">
        <div style={{ fontFamily: '"Cormorant Garamond","Times New Roman",serif', fontSize: 18, fontWeight: 700, letterSpacing: "-0.05em", textTransform: "uppercase", lineHeight: 1, marginBottom: 14 }}>
          {c.partTitle}
        </div>
        <p style={{ fontFamily: '"Helvetica Now Display","Helvetica Neue",Helvetica,Arial,sans-serif', fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1.0, margin: "0 0 10px" }}>
          {bodyText(c.partBody)}
        </p>
        <p style={{ fontFamily: '"Helvetica Now Display","Helvetica Neue",Helvetica,Arial,sans-serif', fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1.0, margin: "0 0 28px", textAlign: "right" }}>
          {c.partItalic}
        </p>
        <SubForm fields={c.partFields} submit={c.partSubmit} success={c.partSuccess} successBody={c.partSuccessBody} reset={c.partReset} />
      </div>
    </div>
  );
}

export default function Abonnements() {
  const { lang } = useLang();
  const c = copy[lang];
  const bodyLines = (text: string) =>
    text.split("\n").map((l, i) => <span key={i}>{l}<br /></span>);

  return (
    <ArtboardShell overlayRef={overlayRef} minHeight={2600} mobile={<AbonnementsMobile c={c} />}>

      {/* ── NOS ABONNEMENTS — top right ── */}
      <div style={{ position: "absolute", left: 840, top: 130, width: 330, textAlign: "right" }}>
        <div style={{ ...SERIF }}>{c.aboTitle}</div>
        <p style={{ ...BODY, margin: 0 }}>{bodyLines(c.aboSub)}</p>
      </div>

      {/* ── Image right ── */}
      <img
        src={imgMain}
        alt=""
        style={{ position: "absolute", left: 840, top: 220, width: 335, height: 574, objectFit: "cover" }}
      />

      {/* ── ESPACES & PROFESSIONNELS ── */}
      <div id="pro" style={{ position: "absolute", left: 120, top: 200, width: 620 }}>
        <div style={{ ...SERIF, marginBottom: 18 }}>{c.proTitle}</div>
        <p style={{ ...BODY, margin: 0, marginBottom: 10 }}>{bodyLines(c.proBody)}</p>
        <p style={{ ...SERIF, fontWeight: 400, textTransform: "none", textAlign: "right", marginBottom: 32 }}>
          {c.proItalic}
        </p>
        <SubForm
          fields={c.proFields}
          submit={c.proSubmit}
          success={c.proSuccess}
          successBody={c.proSuccessBody}
          reset={c.proReset}
        />
      </div>

      {/* ── Separator ── */}
      <div style={{
        position: "absolute", left: 120, top: 1260, width: 1060,
        height: 1, backgroundColor: "rgba(0,0,0,0.13)",
      }} />

      {/* ── PARTICULIERS ── */}
      <div id="particulier" style={{ position: "absolute", left: 120, top: 1320, width: 620 }}>
        <div style={{ ...SERIF, marginBottom: 18 }}>{c.partTitle}</div>
        <p style={{ ...BODY, margin: 0, marginBottom: 10 }}>{bodyLines(c.partBody)}</p>
        <p style={{ ...SERIF, fontWeight: 400, textTransform: "none", textAlign: "right", marginBottom: 32 }}>
          {c.partItalic}
        </p>
        <SubForm
          fields={c.partFields}
          submit={c.partSubmit}
          success={c.partSuccess}
          successBody={c.partSuccessBody}
          reset={c.partReset}
        />
      </div>

    </ArtboardShell>
  );
}
