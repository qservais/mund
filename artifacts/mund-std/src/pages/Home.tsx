import { Link } from "wouter";
import { useLang } from "@/context/LanguageContext";
import { plates } from "@/data/plates";

const copy = {
  fr: {
    label: "floral design",
    desc: "mund est un studio de composition alliant les fleurs et les matériaux vivants. nous jouons avec les rythmes, le vide, l'équilibre et le déséquilibre.",
    caption: "le végétal devient sculpture, moment, intention.",
    servicesLabel: "nos services",
    col1: ["abonnement professionnel", "abonnement mensuel", "bouquets"],
    col2: ["mariages", "événements", "set design / scénographie"],
    devisLabel: "devis & projets",
    devisText:
      "nous accompagnons chaque projet de manière unique. vous souhaitez en savoir plus sur notre manière de travailler ou travailler avec nous ?",
    devisLink: "écrivez-nous",
  },
  en: {
    label: "floral design",
    desc: "mund is a composition studio combining flowers and living materials. we play with rhythms, void, balance and imbalance.",
    caption: "the plant becomes sculpture, moment, intention.",
    servicesLabel: "our services",
    col1: ["professional subscription", "monthly subscription", "bouquets"],
    col2: ["weddings", "events", "set design / scenography"],
    devisLabel: "quotes & projects",
    devisText:
      "we support each project in a unique way. would you like to know more about how we work or work with us?",
    devisLink: "write to us",
  },
};

export default function Home() {
  const { lang } = useLang();
  const c = copy[lang];

  const hero = plates[0];
  const img2 = plates[8];
  const img3 = plates[5];

  return (
    <div className="px-6 md:px-8 xl:px-14">
      {/* Hero: two-col */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 py-10 md:py-14" data-testid="home-hero">
        {/* Left */}
        <div className="flex flex-col justify-between gap-10">
          <div className="flex flex-col gap-6">
            <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-foreground/40">
              {c.label}
            </span>
            <p className="font-sans text-[11px] leading-[1.9] text-foreground/75 max-w-[38ch]">
              {c.desc}
            </p>
          </div>
          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/40 italic">
            {c.caption}
          </p>
        </div>

        {/* Right: hero image */}
        <div>
          <img
            src={hero.src}
            alt={hero.alt}
            className="w-full aspect-[4/5] object-cover"
          />
        </div>
      </section>

      <div className="h-px bg-foreground/10 my-2" />

      {/* Services */}
      <section className="py-10 md:py-12" data-testid="home-services">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-foreground/40 md:pt-1">
            {c.servicesLabel}
          </span>
          <ul className="flex flex-col gap-[10px]">
            {c.col1.map((s) => (
              <li
                key={s}
                className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/70"
              >
                {s}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-[10px]">
            {c.col2.map((s) => (
              <li
                key={s}
                className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/70"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="h-px bg-foreground/10 my-2" />

      {/* Two small images */}
      <section className="py-10 md:py-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <div className="col-span-1 md:col-span-2 md:col-start-2">
          <img
            src={img2.src}
            alt={img2.alt}
            className="w-full aspect-square object-cover"
          />
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/35 mt-2">
            {img2.title}
          </p>
        </div>
        <div className="col-span-1 md:col-span-1 md:col-start-4 md:mt-16 self-start">
          <img
            src={img3.src}
            alt={img3.alt}
            className="w-full aspect-[3/4] object-cover"
          />
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/35 mt-2">
            {img3.title}
          </p>
        </div>
      </section>

      <div className="h-px bg-foreground/10 my-2" />

      {/* Devis CTA */}
      <section className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-3 gap-8" data-testid="home-cta">
        <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-foreground/40">
          {c.devisLabel}
        </span>
        <div className="md:col-span-2 flex flex-col gap-5">
          <p className="font-sans text-[11px] leading-[1.9] text-foreground/70 max-w-[52ch]">
            {c.devisText}
          </p>
          <Link
            href="/contact"
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground border-b border-foreground pb-[2px] w-fit hover:text-accent hover:border-accent transition-colors"
            data-testid="link-contact-cta"
          >
            {c.devisLink}
          </Link>
        </div>
      </section>
    </div>
  );
}
