import { Link } from "wouter";
import { useLang } from "@/context/LanguageContext";
import { plates } from "@/data/plates";

const copy = {
  fr: {
    header: "mund studio / les fleurs / autrement",
    bio1:
      "après un parcours en art et en architecture où elle aborde le design et la scénographie, julie ahn s'oriente finalement vers la création florale et fonde mund. dans son studio les compositions sont sculpturales, les fleurs sont envisagées comme des éléments de composition, au même titre qu'une matière, une lumière ou un objet.",
    bio2:
      "les interventions du studio sont sur mesure, pensées dans leur ensemble avec une attention portée aux formes autant qu'à la fleur seule.",
    col1:
      "le nom mund est emprunté au grand-père de julie, ébéniste et jardinier, dont l'univers multiple continue d'influencer sa manière de composer et de regarder les choses.",
    col2:
      "le studio travaille en belgique et partout ailleurs sur des événements, mariages, set design et scénographies florales.",
    footerLabel: "vides et pleins / chaos et structure",
    quote: "le temps est beau / une petite averse",
    contactLabel: "écrire au studio",
    instaLabel: "@mund.std",
    adresseLabel: "atelier",
  },
  en: {
    header: "mund studio / flowers / differently",
    bio1:
      "after a background in art and architecture exploring design and scenography, julie ahn turned to floral creation and founded mund. in her studio, compositions are sculptural — flowers are seen as elements of composition, on a par with a material, a light or an object.",
    bio2:
      "the studio's interventions are bespoke, conceived as a whole with attention paid to forms as much as to the individual flower.",
    col1:
      "the name mund is borrowed from julie's grandfather, a cabinetmaker and gardener, whose multiple universe continues to influence her way of composing and looking at things.",
    col2:
      "the studio works in belgium and anywhere else on events, weddings, set design and floral scenography.",
    footerLabel: "voids and solids / chaos and structure",
    quote: "the weather is fine / a light shower",
    contactLabel: "write to the studio",
    instaLabel: "@mund.std",
    adresseLabel: "studio",
  },
};

export default function About() {
  const { lang } = useLang();
  const c = copy[lang];

  const photo = plates[0];

  return (
    <div className="px-6 md:px-8 xl:px-14">

      {/* Header */}
      <section className="py-10 md:py-12 border-b border-foreground/10">
        <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-foreground/40">
          {c.header}
        </span>
      </section>

      {/* Bio + photo */}
      <section className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 border-b border-foreground/10">
        <div className="flex flex-col gap-6">
          <p className="font-sans text-[11px] leading-[1.9] text-foreground/75 max-w-[44ch]">
            {c.bio1}
          </p>
          <p className="font-sans text-[11px] leading-[1.9] text-foreground/75 max-w-[44ch]">
            {c.bio2}
          </p>
        </div>
        <div>
          <img
            src={photo.src}
            alt="Julie Ahn — Mund Studio"
            className="w-full aspect-[3/4] object-cover object-top"
          />
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/30 mt-2">
            Julie Ahn
          </p>
        </div>
      </section>

      {/* Two text columns */}
      <section className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 border-b border-foreground/10">
        <p className="font-sans text-[11px] leading-[1.9] text-foreground/65 max-w-[40ch]">
          {c.col1}
        </p>
        <p className="font-sans text-[11px] leading-[1.9] text-foreground/65 max-w-[40ch]">
          {c.col2}
        </p>
      </section>

      {/* Quote */}
      <section className="py-10 md:py-14 border-b border-foreground/10">
        <p className="font-mono text-[9px] italic tracking-[0.25em] text-foreground/35 text-center">
          {c.quote}
        </p>
      </section>

      {/* Adresse + contact */}
      <section className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-foreground/35">
            {c.adresseLabel}
          </span>
          <address className="not-italic font-sans text-[11px] leading-[1.9] text-foreground/60">
            MUND STUDIO<br />
            Rue Monulphe 7<br />
            4000 Liège, Belgique
          </address>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-foreground/35">
            contact
          </span>
          <Link
            href="/contact"
            className="font-mono text-[9px] uppercase tracking-[0.25em] text-foreground/55 border-b border-foreground/25 pb-[2px] w-fit hover:text-accent hover:border-accent transition-colors"
            data-testid="about-contact-link"
          >
            {c.contactLabel}
          </Link>
          <a
            href="https://instagram.com/mund.std"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[9px] uppercase tracking-[0.25em] text-foreground/55 border-b border-foreground/25 pb-[2px] w-fit hover:text-accent hover:border-accent transition-colors"
            data-testid="about-instagram-link"
          >
            {c.instaLabel}
          </a>
        </div>
        <div className="flex flex-col justify-end">
          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/25">
            {c.footerLabel}
          </p>
        </div>
      </section>
    </div>
  );
}
