import { useState, type FormEvent } from "react";
import { useLang } from "@/context/LanguageContext";

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
      { name: "nom",     label: "Votre nom",         type: "text",  placeholder: "Prénom & nom",                                          required: true  },
      { name: "email",   label: "Email",              type: "email", placeholder: "vous@exemple.be",                                       required: true  },
      { name: "type",    label: "Nature du projet",   type: "text",  placeholder: "Mariage, événement, scénographie…",                     required: false },
      { name: "date",    label: "Date envisagée",     type: "text",  placeholder: "Saison, mois, journée…",                               required: false },
      { name: "message", label: "Votre message",      type: "text",  placeholder: "Décrivez le lieu, le nombre d'invités, l'ambiance…",    required: true, multiline: true },
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
      { name: "nom",     label: "Your name",          type: "text",  placeholder: "First & last name",                                    required: true  },
      { name: "email",   label: "Email",              type: "email", placeholder: "you@example.com",                                      required: true  },
      { name: "type",    label: "Project type",       type: "text",  placeholder: "Wedding, event, scenography…",                        required: false },
      { name: "date",    label: "Planned date",       type: "text",  placeholder: "Season, month, day…",                                 required: false },
      { name: "message", label: "Your message",       type: "text",  placeholder: "Describe the venue, number of guests, atmosphere…",   required: true, multiline: true },
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

  function reset() {
    setValues({});
    setSubmitted(false);
  }

  return (
    <section className="relative w-full pt-10 pb-24 px-6 md:px-8 xl:px-14">
      {/* Header */}
      <div className="border-b border-foreground/10 pb-8 mb-12">
        <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-foreground/40">
          {c.header}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12">
        {/* Left — coordinates */}
        <aside className="md:col-span-4 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/40">
              {c.atelier}
            </span>
            <p className="font-sans text-[11px] leading-[1.8] text-foreground/65">
              {c.adresse.map((line, i) => (
                <span key={i}>{line}{i < c.adresse.length - 1 && <br />}</span>
              ))}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/40">
              {c.ouverture}
            </span>
            <p className="font-sans text-[11px] leading-[1.8] text-foreground/65">
              {c.horaires[0]}<br />{c.horaires[1]}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/40">
              {c.reseaux}
            </span>
            <a
              href="https://instagram.com/mund.std"
              target="_blank"
              rel="noreferrer"
              className="font-sans text-[11px] leading-[1.8] text-foreground/65 hover:text-accent transition-colors w-fit"
              data-testid="link-instagram"
            >
              Instagram — @mund.std
            </a>
            <a
              href="https://www.facebook.com/p/Mund-Std-61561226727135/"
              target="_blank"
              rel="noreferrer"
              className="font-sans text-[11px] leading-[1.8] text-foreground/65 hover:text-accent transition-colors w-fit"
              data-testid="link-facebook"
            >
              Facebook — Mund Std
            </a>
          </div>
          <div className="flex flex-col gap-2 pt-4 border-t border-foreground/10">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent">
              {c.direction}
            </span>
            <p className="font-sans text-[11px] leading-[1.8] text-foreground/65">
              {c.directionText[0]}<br />{c.directionText[1]}
            </p>
          </div>
        </aside>

        {/* Right — form */}
        <div className="md:col-span-7 md:col-start-6">
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-8"
              data-testid="form-contact"
            >
              {c.fields.map((field, i) => (
                <div key={field.name} className="group relative flex flex-col gap-3">
                  <label
                    htmlFor={field.name}
                    className="font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/45 flex items-baseline justify-between"
                  >
                    <span>{String(i + 1).padStart(2, "0")} — {field.label}</span>
                    {field.required && <span className="text-accent">*</span>}
                  </label>
                  {"multiline" in field && field.multiline ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      required={field.required}
                      placeholder={field.placeholder}
                      rows={5}
                      value={values[field.name] ?? ""}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, [field.name]: e.target.value }))
                      }
                      className="peer w-full bg-transparent border-b border-foreground/20 pb-3 pt-1 font-sans text-[11px] leading-[1.8] text-foreground placeholder:text-foreground/25 focus:outline-none focus:border-foreground transition-colors resize-none"
                      data-testid={`input-${field.name}`}
                    />
                  ) : (
                    <input
                      id={field.name}
                      type={field.type}
                      name={field.name}
                      required={field.required}
                      placeholder={field.placeholder}
                      value={values[field.name] ?? ""}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, [field.name]: e.target.value }))
                      }
                      className="peer w-full bg-transparent border-b border-foreground/20 pb-3 pt-1 font-sans text-[11px] text-foreground placeholder:text-foreground/25 focus:outline-none focus:border-foreground transition-colors"
                      data-testid={`input-${field.name}`}
                    />
                  )}
                  <span className="pointer-events-none absolute left-0 -bottom-px h-px bg-accent w-0 peer-focus:w-full transition-[width] duration-500 ease-out" />
                </div>
              ))}

              <div className="flex items-baseline justify-between gap-6 pt-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-foreground/35 max-w-xs">
                  {c.note}
                </p>
                <button
                  type="submit"
                  className="inline-flex items-baseline gap-3 font-mono uppercase text-[10px] tracking-[0.25em] text-foreground border-b border-foreground pb-[2px] hover:text-accent hover:border-accent transition-colors"
                  data-testid="button-submit"
                >
                  <span>{c.submit}</span>
                  <span aria-hidden>&rarr;</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="flex flex-col gap-6 pt-2" data-testid="contact-success">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent">
                {c.success}
              </span>
              <p className="font-sans text-[11px] leading-[1.9] text-foreground/70 max-w-md whitespace-pre-line">
                {c.successBody(values.nom?.split(" ")[0] || (lang === "fr" ? "à très vite" : "see you soon"))}
              </p>
              <button
                type="button"
                onClick={reset}
                className="self-start font-mono uppercase text-[9px] tracking-[0.25em] text-foreground/45 hover:text-accent border-b border-foreground/30 hover:border-accent pb-[2px] transition-colors"
                data-testid="button-reset"
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
