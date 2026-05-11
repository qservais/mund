import { Link } from "wouter";
import { useLang } from "@/context/LanguageContext";
import { plates } from "@/data/plates";

const copy = {
  fr: {
    mariagesLabel: "mariages",
    mariagesText:
      "le studio propose un service de conception florale pour votre mariage. nous abordons ces moments avec autant de singularité qu'ils en ont pour vous. ils sont des compositions à construire, en lien avec le lieu, un rythme, une manière de se rassembler. nous avançons ensemble pour définir la direction en tenant compte de l'ensemble des éléments présents et ainsi créer un événement à votre mesure, rien n'est standardisé.",
    mariagesItalic: "chaque mariage est un projet à part.",
    mariagesLink: "vous souhaitez en savoir plus ? contactez-nous",

    eventsLabel: "événements",
    eventsText:
      "nous intervenons sur tous types d'événements pour des marques, des agences événementielles et des particuliers. nos installations florales se développent à différentes échelles. chaque projet se développe en réponse à un contexte précis, une ambiance ou à votre identité.",
    eventsItalic: "un lieu, un moment, une intervention.",
    eventsLink: "envie de discuter de votre projet ? c'est ici",

    setLabel: "set design",
    setText:
      "le studio vous accompagne dans vos projets de set design et scénographie florale. en collaboration avec des marques, photographes et studios créatifs, nous réalisons des compositions et installations sur mesure pour des campagnes, shootings, vitrines ou projets éditoriaux.",
    setItalic: "nous composons avec votre image et votre direction artistique.",
    setLink: "une idée ? on lui donne vie, écrivez-nous",

    globalLabel: "une vision globale",
    globalText:
      "pour certains projets, nous pouvons développer une approche plus globale et dépasser le cadre floral. en collaboration avec maison vagabonde, nous pouvons intervenir sur l'ensemble de la direction visuelle et spatiale : scénographie, composition des tables, choix des matières, lumières, graphisme. chaque élément est pensé en relation afin de construire un ensemble cohérent.",
    globalItalic: "composer au-delà du floral.",
    globalLink: "contactez-nous",

    aboLink: "voir nos abonnements →",
  },
  en: {
    mariagesLabel: "weddings",
    mariagesText:
      "the studio offers a floral design service for your wedding. we approach these moments with as much singularity as they hold for you. they are compositions to be built, linked to the venue, a rhythm, a way of gathering. we work together to define the direction taking into account all the elements present, creating an event tailored to you — nothing is standardised.",
    mariagesItalic: "each wedding is a project in its own right.",
    mariagesLink: "would you like to know more? contact us",

    eventsLabel: "events",
    eventsText:
      "we work on all types of events for brands, event agencies and private clients. our floral installations develop at different scales. each project develops in response to a precise context, an atmosphere or your identity.",
    eventsItalic: "a place, a moment, an intervention.",
    eventsLink: "want to discuss your project? right here",

    setLabel: "set design",
    setText:
      "the studio supports you in your set design and floral scenography projects. in collaboration with brands, photographers and creative studios, we create bespoke compositions and installations for campaigns, shoots, window displays or editorial projects.",
    setItalic: "we compose with your image and your art direction.",
    setLink: "an idea? let's bring it to life — write to us",

    globalLabel: "a global vision",
    globalText:
      "for certain projects, we can develop a broader approach that goes beyond the floral frame. in collaboration with maison vagabonde, we can intervene on the entire visual and spatial direction: scenography, table compositions, choice of materials, lighting, graphic design. each element is considered in relation to construct a coherent whole.",
    globalItalic: "composing beyond the floral.",
    globalLink: "contact us",

    aboLink: "see our subscriptions →",
  },
};

export default function Floral() {
  const { lang } = useLang();
  const c = copy[lang];

  const imgWedding = plates[0];
  const imgEvent = plates[8];
  const imgSet1 = plates[13];
  const imgSet2 = plates[5];

  return (
    <div className="px-6 md:px-8 xl:px-14">

      {/* MARIAGES */}
      <section className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 border-b border-foreground/10">
        <div className="flex flex-col gap-6 justify-start">
          <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-foreground/40">
            {c.mariagesLabel}
          </span>
          <p className="font-sans text-[11px] leading-[1.9] text-foreground/75 max-w-[44ch]">
            {c.mariagesText}
          </p>
          <p className="font-mono text-[9px] italic tracking-[0.2em] text-foreground/45">
            {c.mariagesItalic}
          </p>
          <Link
            href="/contact"
            className="font-mono text-[9px] uppercase tracking-[0.25em] text-foreground/55 border-b border-foreground/30 pb-[2px] w-fit hover:text-accent hover:border-accent transition-colors"
          >
            {c.mariagesLink}
          </Link>
        </div>
        <div>
          <img
            src={imgWedding.src}
            alt={imgWedding.alt}
            className="w-full aspect-[3/4] object-cover"
          />
        </div>
      </section>

      {/* ÉVÉNEMENTS */}
      <section className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 border-b border-foreground/10">
        <div>
          <img
            src={imgEvent.src}
            alt={imgEvent.alt}
            className="w-full aspect-[4/5] object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 justify-start md:pt-8">
          <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-foreground/40">
            {c.eventsLabel}
          </span>
          <p className="font-sans text-[11px] leading-[1.9] text-foreground/75 max-w-[44ch]">
            {c.eventsText}
          </p>
          <p className="font-mono text-[9px] italic tracking-[0.2em] text-foreground/45">
            {c.eventsItalic}
          </p>
          <Link
            href="/contact"
            className="font-mono text-[9px] uppercase tracking-[0.25em] text-foreground/55 border-b border-foreground/30 pb-[2px] w-fit hover:text-accent hover:border-accent transition-colors"
          >
            {c.eventsLink}
          </Link>
        </div>
      </section>

      {/* SET DESIGN */}
      <section className="py-10 md:py-14 border-b border-foreground/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-foreground/40 md:pt-1">
            {c.setLabel}
          </span>
          <div className="md:col-span-2 flex flex-col gap-6">
            <p className="font-sans text-[11px] leading-[1.9] text-foreground/75 max-w-[52ch]">
              {c.setText}
            </p>
            <p className="font-mono text-[9px] italic tracking-[0.2em] text-foreground/45">
              {c.setItalic}
            </p>
            <Link
              href="/contact"
              className="font-mono text-[9px] uppercase tracking-[0.25em] text-foreground/55 border-b border-foreground/30 pb-[2px] w-fit hover:text-accent hover:border-accent transition-colors"
            >
              {c.setLink}
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="md:col-start-2">
            <img
              src={imgSet1.src}
              alt={imgSet1.alt}
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
          <div className="md:mt-12">
            <img
              src={imgSet2.src}
              alt={imgSet2.alt}
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
        </div>
      </section>

      {/* UNE VISION GLOBALE */}
      <section className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-3 gap-8">
        <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-foreground/40 md:pt-1">
          {c.globalLabel}
        </span>
        <div className="md:col-span-2 flex flex-col gap-6">
          <p className="font-sans text-[11px] leading-[1.9] text-foreground/75 max-w-[52ch]">
            {c.globalText}
          </p>
          <p className="font-mono text-[9px] italic tracking-[0.2em] text-foreground/45">
            {c.globalItalic}
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="/contact"
              className="font-mono text-[9px] uppercase tracking-[0.25em] text-foreground/55 border-b border-foreground/30 pb-[2px] w-fit hover:text-accent hover:border-accent transition-colors"
            >
              {c.globalLink}
            </Link>
            <Link
              href="/abonnements"
              className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent w-fit hover:opacity-70 transition-opacity"
            >
              {c.aboLink}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
