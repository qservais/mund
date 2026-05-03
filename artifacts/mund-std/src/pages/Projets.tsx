import { motion } from "framer-motion";
import Plate from "@/components/Plate";
import { plates } from "@/data/plates";

export default function Projets() {
  return (
    <section className="relative w-full pt-40 md:pt-56 pb-32 md:pb-48">
      {/* Section header */}
      <div className="px-6 md:px-12 xl:px-24 mb-24 md:mb-40 grid grid-cols-12 gap-6 items-end">
        <div className="col-span-12 md:col-span-3 flex flex-col gap-2">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/60"
          >
            Moodboard 001
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent"
          >
            15 planches
          </motion.span>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 md:col-span-9 font-mono uppercase text-[10vw] md:text-[5.5vw] leading-[1] tracking-[0.02em] font-medium"
        >
          Travaux<br />
          récents.
        </motion.h1>
      </div>

      {/* Mosaic */}
      <div className="px-6 md:px-12 xl:px-24 flex flex-col gap-32 md:gap-48">
        {/* Movement 1 — opening pair, asymmetric */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-8 md:col-span-4 md:col-start-2">
            <Plate plate={plates[0]} imgClass="aspect-[3/4]" />
          </div>
          <div className="col-span-7 col-start-6 md:col-span-3 md:col-start-8 md:mt-48">
            <Plate plate={plates[1]} imgClass="aspect-square" />
          </div>
        </div>

        {/* Movement 2 — full bleed editorial interruption */}
        <div className="-mx-6 md:-mx-12 xl:-mx-24">
          <motion.figure
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
            className="relative w-full hover-trigger"
          >
            <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
              <img
                src={plates[2].src}
                alt={plates[2].alt}
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <figcaption className="flex flex-wrap items-baseline gap-3 pt-3 px-6 md:px-12 xl:px-24 font-mono text-[9px] uppercase tracking-[0.25em] text-foreground/65">
              <span className="text-accent">{plates[2].n}</span>
              <span className="text-foreground/85">{plates[2].title}</span>
              <span className="ml-auto text-foreground/50">{plates[2].meta}</span>
            </figcaption>
          </motion.figure>
        </div>

        {/* Movement 3 — moodboard grid 04-09 */}
        <div>
          <div className="mb-12 grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/60">
                Planches 04 → 09
              </span>
            </div>
            <h2 className="col-span-12 md:col-span-9 font-mono uppercase text-xl md:text-3xl tracking-[0.03em] text-foreground/90">
              Tables, gestes, objets.
            </h2>
          </div>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12 md:gap-y-20">
            <div className="col-span-6 md:col-span-3 md:col-start-1"><Plate plate={plates[3]} imgClass="aspect-[4/5]" /></div>
            <div className="col-span-6 md:col-span-3 md:col-start-5 md:mt-24"><Plate plate={plates[4]} imgClass="aspect-[4/5]" /></div>
            <div className="col-span-6 md:col-span-3 md:col-start-9"><Plate plate={plates[5]} imgClass="aspect-[4/5]" /></div>
            <div className="col-span-6 md:col-span-3 md:col-start-2 md:mt-12"><Plate plate={plates[6]} imgClass="aspect-[3/4]" /></div>
            <div className="col-span-6 md:col-span-3 md:col-start-6"><Plate plate={plates[7]} imgClass="aspect-[3/4]" /></div>
            <div className="col-span-12 md:col-span-3 md:col-start-10 md:mt-24"><Plate plate={plates[8]} imgClass="aspect-[3/4]" /></div>
          </div>
        </div>

        {/* Movement 4 — overlapping collage pair */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-8 items-start">
          <div className="col-span-12 md:col-span-3 md:col-start-1">
            <p className="font-mono text-[11px] leading-[1.9] text-foreground/80 text-justify">
              Deux photographies posées l'une sur l'autre, comme un collage de
              page de droite&nbsp;: la rigueur d'un lobby, la <span className="text-accent">tendresse</span>
              &nbsp;d'un bouquet bureau. La scénographie ne s'arrête jamais à la
              fleur ; elle tient au cadre qui l'accueille.
            </p>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-5 relative">
            <div className="relative">
              <div className="w-[78%]">
                <Plate plate={plates[9]} imgClass="aspect-[4/3]" />
              </div>
              <div className="absolute right-0 top-[28%] w-[48%] z-10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]">
                <Plate plate={plates[10]} imgClass="aspect-[4/5]" align="right" />
              </div>
            </div>
          </div>
        </div>

        {/* Movement 5 — three-up rhythm */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-6 md:col-span-3 md:col-start-2 md:mt-16">
            <Plate plate={plates[11]} imgClass="aspect-[3/4]" />
          </div>
          <div className="col-span-6 md:col-span-4 md:col-start-6">
            <Plate plate={plates[12]} imgClass="aspect-[4/5]" />
          </div>
          <div className="col-span-6 col-start-4 md:col-span-2 md:col-start-11 md:mt-32">
            <Plate plate={plates[13]} imgClass="aspect-[3/4]" />
          </div>
        </div>

        {/* Movement 6 — closing isolated plate */}
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-4 md:col-start-2">
            <Plate plate={plates[14]} imgClass="aspect-[5/4]" />
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-8 flex flex-col gap-3 md:pb-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              Fin du moodboard 001
            </span>
            <p className="font-mono text-[11px] leading-[1.9] text-foreground/70 text-justify">
              Quinze planches sélectionnées dans l'archive du studio. D'autres
              dorment dans les cartons&mdash;sur demande, écrivez-nous via la
              page contact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
