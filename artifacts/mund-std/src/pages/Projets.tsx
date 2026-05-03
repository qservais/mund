import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import Plate from "@/components/Plate";
import { plates } from "@/data/plates";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";

export default function Projets() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      ".float-img",
      { opacity: [0, 1] },
      { duration: 0.6, delay: stagger(0.1, { startDelay: 0.4 }) },
    );
  }, [animate]);

  return (
    <section className="relative w-full pt-32 md:pt-40 pb-32 md:pb-48">
      {/* Parallax moodboard hero */}
      <div
        ref={scope}
        className="relative w-full h-[78vh] min-h-[560px] md:min-h-[680px] overflow-hidden mb-24 md:mb-40"
      >
        {/* Centered headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-30 flex flex-col items-center justify-center px-6 text-center pointer-events-none"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-foreground/55 mb-3">
            Moodboard 001 &nbsp;/&nbsp; <span className="text-accent">15 planches</span>
          </span>
          <p className="font-serif italic text-2xl md:text-4xl text-foreground/70 mb-2 mix-blend-multiply">
            quinze gestes —
          </p>
          <h1 className="font-sans uppercase text-[14vw] md:text-[8.5vw] leading-[0.88] tracking-[-0.02em] font-semibold max-w-[12ch] mix-blend-multiply">
            Travaux<br />récents.
          </h1>
          <span className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/45">
            ↓ &nbsp; faites bouger la souris
          </span>
        </motion.div>

        {/* Floating images */}
        <Floating sensitivity={-0.6} easingFactor={0.06} className="overflow-hidden">
          <FloatingElement depth={0.6} className="top-[6%] left-[6%]">
            <img
              src={plates[0].src}
              alt=""
              className="float-img w-24 h-32 md:w-36 md:h-48 object-cover opacity-0 grayscale-[10%]"
            />
          </FloatingElement>
          <FloatingElement depth={1.2} className="top-[4%] left-[28%]">
            <img
              src={plates[3].src}
              alt=""
              className="float-img w-20 h-20 md:w-28 md:h-28 object-cover opacity-0"
            />
          </FloatingElement>
          <FloatingElement depth={2.4} className="top-[2%] right-[26%]">
            <img
              src={plates[5].src}
              alt=""
              className="float-img w-28 h-40 md:w-40 md:h-56 object-cover opacity-0"
            />
          </FloatingElement>
          <FloatingElement depth={0.8} className="top-[8%] right-[4%]">
            <img
              src={plates[1].src}
              alt=""
              className="float-img w-24 h-24 md:w-32 md:h-32 object-cover opacity-0"
            />
          </FloatingElement>

          <FloatingElement depth={1.5} className="top-[42%] left-[2%]">
            <img
              src={plates[10].src}
              alt=""
              className="float-img w-28 h-36 md:w-36 md:h-44 object-cover opacity-0"
            />
          </FloatingElement>
          <FloatingElement depth={2} className="top-[44%] right-[3%]">
            <img
              src={plates[7].src}
              alt=""
              className="float-img w-24 h-32 md:w-32 md:h-44 object-cover opacity-0"
            />
          </FloatingElement>

          <FloatingElement depth={3.5} className="bottom-[6%] left-[14%]">
            <img
              src={plates[12].src}
              alt=""
              className="float-img w-36 h-48 md:w-52 md:h-64 object-cover opacity-0"
            />
          </FloatingElement>
          <FloatingElement depth={1.6} className="bottom-[10%] left-[44%]">
            <img
              src={plates[9].src}
              alt=""
              className="float-img w-24 h-24 md:w-32 md:h-32 object-cover opacity-0"
            />
          </FloatingElement>
          <FloatingElement depth={2.2} className="bottom-[4%] right-[10%]">
            <img
              src={plates[14].src}
              alt=""
              className="float-img w-32 h-32 md:w-44 md:h-44 object-cover opacity-0"
            />
          </FloatingElement>
        </Floating>

        {/* Vignette to keep title legible */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_center,_hsl(var(--background))_18%,_transparent_62%)]" />
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
            <h2 className="col-span-12 md:col-span-9 font-sans uppercase text-2xl md:text-4xl tracking-[-0.005em] font-semibold text-foreground/90">
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
            <p className="font-sans text-sm md:text-base leading-[1.7] text-foreground/80 text-justify">
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
            <p className="font-sans text-sm md:text-base leading-[1.7] text-foreground/70 text-justify">
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
