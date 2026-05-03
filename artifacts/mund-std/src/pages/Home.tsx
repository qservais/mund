import { Link } from "wouter";
import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Plate from "@/components/Plate";
import { plates } from "@/data/plates";

export default function Home() {
  const teaser = [plates[0], plates[5], plates[8]];

  return (
    <>
      <Hero />
      <Manifesto />

      {/* Aperçu des projets */}
      <section className="relative w-full py-32 md:py-48 px-6 md:px-12 xl:px-24">
        <div className="grid grid-cols-12 gap-6 mb-20 md:mb-32 items-end">
          <div className="col-span-12 md:col-span-3 flex flex-col gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/60">
              Aperçu 003
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              03 / 15 planches
            </span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-sans uppercase text-[9vw] md:text-[5vw] leading-[0.95] tracking-[-0.01em] font-semibold">
              Quelques<br />gestes récents.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-12 md:gap-y-20">
          <div className="col-span-12 md:col-span-4 md:col-start-1">
            <Plate plate={teaser[0]} imgClass="aspect-[3/4]" linkable />
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-5 md:mt-32">
            <Plate plate={teaser[1]} imgClass="aspect-[4/5]" linkable />
          </div>
          <div className="col-span-12 md:col-span-3 md:col-start-10 md:mt-12">
            <Plate plate={teaser[2]} imgClass="aspect-[3/4]" linkable />
          </div>
        </div>

        <div className="mt-24 flex justify-center">
          <Link
            href="/projets"
            className="group inline-flex items-baseline gap-4 font-mono uppercase text-xs md:text-sm tracking-[0.25em] text-foreground hover:text-accent transition-colors"
            data-testid="link-all-projects"
          >
            <span>Voir les 15 planches</span>
            <motion.span
              aria-hidden
              className="inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
            >
              &rarr;
            </motion.span>
          </Link>
        </div>
      </section>

      {/* CTA contact */}
      <section className="relative w-full py-32 md:py-48 px-6 md:px-12 xl:px-24 border-t border-foreground/15">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/60">
              Devis & projets
            </span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-sans uppercase text-[8vw] md:text-[4.4vw] leading-[0.95] tracking-[-0.01em] font-semibold mb-10">
              Un événement,<br />une scénographie&nbsp;?
            </h2>
            <Link
              href="/contact"
              className="group inline-flex items-baseline gap-4 font-mono uppercase text-sm md:text-base tracking-[0.2em] text-foreground border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
              data-testid="link-contact-cta"
            >
              <span>Écrire au studio</span>
              <span aria-hidden className="inline-block transition-transform group-hover:translate-x-2">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
