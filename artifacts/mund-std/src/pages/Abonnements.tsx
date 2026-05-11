import { Link } from "wouter";
import { useLang } from "@/context/LanguageContext";
import { plates } from "@/data/plates";

const copy = {
  fr: {
    title: "nos abonnements",
    subtitle:
      "retrouvez notre travail floral pour vos espaces ou votre habitation.",

    proLabel: "espaces & professionnels",
    proText:
      "nous proposons un travail floral récurrent pour vos espaces professionnels, hôtels, boutiques, bureaux, cabinets. chaque intervention est développée sur mesure, pensée en lien avec l'identité de l'espace. nous définissons ensemble le format et la fréquence selon vos besoins.",
    proItalic: "nous composons avec votre image et votre espace.",
    proLink: "pour toute demande, contactez-nous",

    partLabel: "particuliers",
    partText:
      "chaque deuxième jeudi du mois, nous vous proposons un bouquet surprise composé selon les arrivages du moment. une manière d'inviter notre travail chez vous en le voyant évoluer au fil des saisons ou de manière occasionnelle.",
    partItalic: "un rendez-vous mensuel autour des fleurs de saison.",
    partLink: "réserver un bouquet",
  },
  en: {
    title: "our subscriptions",
    subtitle:
      "find our floral work for your spaces or your home.",

    proLabel: "spaces & professionals",
    proText:
      "we offer recurring floral work for your professional spaces, hotels, boutiques, offices, practices. each intervention is developed to measure, conceived in relation to the identity of the space. we define together the format and frequency according to your needs.",
    proItalic: "we compose with your image and your space.",
    proLink: "for any enquiry, contact us",

    partLabel: "private clients",
    partText:
      "every second thursday of the month, we offer you a surprise bouquet composed according to current arrivals. a way to invite our work into your home, watching it evolve with the seasons or on an occasional basis.",
    partItalic: "a monthly appointment around seasonal flowers.",
    partLink: "reserve a bouquet",
  },
};

export default function Abonnements() {
  const { lang } = useLang();
  const c = copy[lang];

  const imgMain = plates[10];
  const imgSecond = plates[3];

  return (
    <div className="px-6 md:px-8 xl:px-14">

      {/* Title */}
      <section className="py-10 md:py-14 border-b border-foreground/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div />
          <div className="md:col-span-2 flex flex-col gap-3">
            <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-foreground/40">
              {c.title}
            </span>
            <p className="font-sans text-[11px] leading-[1.9] text-foreground/60 max-w-[44ch]">
              {c.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Two-col: text blocks + image */}
      <section className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* Left: pro + particuliers */}
        <div className="flex flex-col gap-12">
          {/* Pro */}
          <div className="flex flex-col gap-5 border-b border-foreground/10 pb-10">
            <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-foreground/40">
              {c.proLabel}
            </span>
            <p className="font-sans text-[11px] leading-[1.9] text-foreground/75 max-w-[44ch]">
              {c.proText}
            </p>
            <p className="font-mono text-[9px] italic tracking-[0.2em] text-foreground/45">
              {c.proItalic}
            </p>
            <Link
              href="/contact"
              className="font-mono text-[9px] uppercase tracking-[0.25em] text-foreground/55 border-b border-foreground/30 pb-[2px] w-fit hover:text-accent hover:border-accent transition-colors"
            >
              {c.proLink}
            </Link>
          </div>

          {/* Particuliers */}
          <div className="flex flex-col gap-5">
            <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-foreground/40">
              {c.partLabel}
            </span>
            <p className="font-sans text-[11px] leading-[1.9] text-foreground/75 max-w-[44ch]">
              {c.partText}
            </p>
            <p className="font-mono text-[9px] italic tracking-[0.2em] text-foreground/45">
              {c.partItalic}
            </p>
            <Link
              href="/contact"
              className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent border-b border-accent pb-[2px] w-fit hover:opacity-70 transition-opacity"
              data-testid="link-reserver"
            >
              {c.partLink}
            </Link>
          </div>
        </div>

        {/* Right: images */}
        <div className="flex flex-col gap-4">
          <img
            src={imgMain.src}
            alt={imgMain.alt}
            className="w-full aspect-[3/4] object-cover"
          />
          <img
            src={imgSecond.src}
            alt={imgSecond.alt}
            className="w-2/3 aspect-square object-cover self-end"
          />
        </div>
      </section>
    </div>
  );
}
