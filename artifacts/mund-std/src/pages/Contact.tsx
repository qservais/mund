import { useState, type FormEvent } from "react";

type Field = {
  name: "nom" | "email" | "type" | "date" | "message";
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  multiline?: boolean;
};

const fields: Field[] = [
  { name: "nom", label: "Votre nom", required: true, placeholder: "Prénom & nom" },
  { name: "email", label: "Email", type: "email", required: true, placeholder: "vous@exemple.be" },
  { name: "type", label: "Nature du projet", placeholder: "Mariage, événement, scénographie…" },
  { name: "date", label: "Date envisagée", placeholder: "Saison, mois, journée…" },
  { name: "message", label: "Votre message", required: true, multiline: true, placeholder: "Décrivez le lieu, le nombre d'invités, l'ambiance recherchée…" },
];

export default function Contact() {
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
          contact
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12">
        {/* Left — coordinates */}
        <aside className="md:col-span-4 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/40">
              Atelier
            </span>
            <p className="font-sans text-[11px] leading-[1.8] text-foreground/65">
              MUND STUDIO<br />
              Rue Monulphe 7<br />
              4000 Liège, Belgique
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/40">
              Ouverture
            </span>
            <p className="font-sans text-[11px] leading-[1.8] text-foreground/65">
              Du mardi au samedi,<br />sur rendez-vous.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/40">
              Réseaux
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
              Direction
            </span>
            <p className="font-sans text-[11px] leading-[1.8] text-foreground/65">
              Julie Ahn,<br />architecte & designer florale.
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
              {fields.map((field, i) => (
                <div key={field.name} className="group relative flex flex-col gap-3">
                  <label
                    htmlFor={field.name}
                    className="font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/45 flex items-baseline justify-between"
                  >
                    <span>
                      {String(i + 1).padStart(2, "0")} — {field.label}
                    </span>
                    {field.required && (
                      <span className="text-accent">*</span>
                    )}
                  </label>
                  {field.multiline ? (
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
                      type={field.type ?? "text"}
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
                  Réponse sous 48h, du mardi au samedi.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-baseline gap-3 font-mono uppercase text-[10px] tracking-[0.25em] text-foreground border-b border-foreground pb-[2px] hover:text-accent hover:border-accent transition-colors"
                  data-testid="button-submit"
                >
                  <span>Envoyer</span>
                  <span aria-hidden>&rarr;</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="flex flex-col gap-6 pt-2" data-testid="contact-success">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent">
                Message bien reçu
              </span>
              <p className="font-sans text-[11px] leading-[1.9] text-foreground/70 max-w-md">
                Merci, {values.nom?.split(" ")[0] || "à très vite"}.<br />
                Nous vous répondons sous 48h, du mardi au samedi.
              </p>
              <button
                type="button"
                onClick={reset}
                className="self-start font-mono uppercase text-[9px] tracking-[0.25em] text-foreground/45 hover:text-accent border-b border-foreground/30 hover:border-accent pb-[2px] transition-colors"
                data-testid="button-reset"
              >
                ← Envoyer un autre message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
