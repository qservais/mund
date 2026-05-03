import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section className="relative w-full pt-40 md:pt-56 pb-32 md:pb-48 px-6 md:px-12 xl:px-24">
      {/* Header */}
      <div className="grid grid-cols-12 gap-6 mb-20 md:mb-32 items-end">
        <div className="col-span-12 md:col-span-3 flex flex-col gap-2">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/60"
          >
            Édition 26 / Contact
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.7 }}
            className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent"
          >
            Sur rendez-vous
          </motion.span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 md:col-span-9 flex flex-col gap-3"
        >
          <p className="font-sans font-light italic text-3xl md:text-5xl text-foreground/55">
            écrivez-nous —
          </p>
          <h1 className="font-sans uppercase text-[10vw] md:text-[6vw] leading-[0.92] tracking-[-0.015em] font-semibold">
            Discutons<br />
            de vos projets.
          </h1>
        </motion.div>
      </div>

      <div className="grid grid-cols-12 gap-x-6 gap-y-16">
        {/* Left — coordinates */}
        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-12 md:col-span-4 md:col-start-1 flex flex-col gap-10"
        >
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/50">
              Atelier
            </span>
            {/* Address sourced from MUND STUDIO Instagram bio (@mund.std):
                "Rue Monulphe 7, Liège, Belgium 4000" */}
            <p className="font-sans text-sm leading-[1.6]">
              MUND STUDIO<br />
              Rue Monulphe 7<br />
              4000 Liège, Belgique
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/50">
              Services
            </span>
            <p className="font-sans text-sm leading-[1.7] text-foreground/85">
              Design floral · Événements ·<br />
              Mariages · Abonnements sur mesure
            </p>
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent mt-1">
              Agenda 2026 &amp; 2027 ouverts
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/50">
              Ouverture
            </span>
            <p className="font-sans text-sm leading-[1.6]">
              Du mardi au samedi,<br />sur rendez-vous.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/50">
              Réseaux
            </span>
            <a
              href="https://instagram.com/mund.std"
              target="_blank"
              rel="noreferrer"
              className="font-sans text-sm leading-[1.6] hover:text-accent transition-colors w-fit"
              data-testid="link-instagram"
            >
              Instagram&nbsp;— @mund.std
            </a>
            <a
              href="https://www.facebook.com/p/Mund-Std-61561226727135/"
              target="_blank"
              rel="noreferrer"
              className="font-sans text-sm leading-[1.6] hover:text-accent transition-colors w-fit"
              data-testid="link-facebook"
            >
              Facebook&nbsp;— Mund Std
            </a>
          </div>
          <div className="flex flex-col gap-2 pt-4 border-t border-foreground/15">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent">
              Direction
            </span>
            {/* Director name "Julie Ahn" provided in the user brief
                (architecte running mund.std). */}
            <p className="font-sans text-sm leading-[1.6]">
              Julie Ahn,<br />architecte & designer florale.
            </p>
          </div>
        </motion.aside>

        {/* Right — form */}
        <div className="col-span-12 md:col-span-7 md:col-start-6">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-10"
                data-testid="form-contact"
              >
                {fields.map((field, i) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative flex flex-col gap-3"
                  >
                    <label
                      htmlFor={field.name}
                      className="font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/55 flex items-baseline justify-between"
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
                        className="peer w-full bg-transparent border-b border-foreground/30 pb-3 pt-1 font-sans text-base leading-[1.6] text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground transition-colors resize-none"
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
                        className="peer w-full bg-transparent border-b border-foreground/30 pb-3 pt-1 font-sans text-base text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground transition-colors"
                        data-testid={`input-${field.name}`}
                      />
                    )}
                    <span className="pointer-events-none absolute left-0 -bottom-px h-px bg-accent w-0 peer-focus:w-full transition-[width] duration-700 ease-out" />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + fields.length * 0.07, duration: 0.6 }}
                  className="flex items-baseline justify-between gap-6 pt-6"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/45 max-w-xs">
                    Réponse sous 48h, du mardi au samedi.
                  </p>
                  <motion.button
                    type="submit"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="group inline-flex items-baseline gap-4 font-mono uppercase text-sm tracking-[0.25em] text-foreground border-b border-foreground pb-2 hover:text-accent hover:border-accent transition-colors"
                    data-testid="button-submit"
                  >
                    <span>Envoyer</span>
                    <span aria-hidden>&rarr;</span>
                  </motion.button>
                </motion.div>
              </motion.form>
            ) : (
              <motion.div
                key="thanks"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-8 pt-4"
                data-testid="contact-success"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  Message bien reçu
                </span>
                <h2 className="font-sans uppercase text-3xl md:text-5xl leading-[1.05] tracking-[-0.01em] font-semibold">
                  Merci, {values.nom?.split(" ")[0] || "à très vite"}.<br />
                  Nous vous répondons sous 48h.
                </h2>
                <p className="font-sans text-sm leading-[1.7] text-foreground/70 max-w-md">
                  D'ici là, vous pouvez aussi nous écrire en message direct sur
                  Instagram (@mund.std) ou Facebook&nbsp;: c'est souvent là que
                  les premières esquisses se dessinent.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="self-start font-mono uppercase text-xs tracking-[0.25em] text-foreground/60 hover:text-accent border-b border-foreground/40 hover:border-accent pb-1 transition-colors"
                  data-testid="button-reset"
                >
                  ← Envoyer un autre message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
