import { motion } from "framer-motion";
import imgDisco from "@assets/626683964_17934961980161771_9106265817495129291_n._1777806036052.jpg";

export default function Manifesto() {
  return (
    <section
      id="manifeste"
      className="relative w-full py-32 md:py-56 px-6 md:px-12 xl:px-24"
    >
      <div className="mx-auto max-w-6xl grid grid-cols-12 gap-x-6 gap-y-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="col-span-12 md:col-span-3 md:col-start-1 flex flex-col gap-2"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/60">
            03.05.2026
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
            Édito — 02
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 md:col-span-9 md:col-start-4"
        >
          <h2 className="font-sans uppercase text-[8vw] md:text-[4.2vw] leading-[0.95] tracking-[-0.01em] font-semibold">
            Peindre avec<br />
            le vivant.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="col-span-12 md:col-span-4 md:col-start-4"
        >
          <p className="font-sans text-sm md:text-base leading-[1.75] text-foreground/85 text-justify">
            Mund.std est un studio de design floral contemporain basé à Liège,
            dirigé par <span className="text-accent">Julie Ahn</span>. Une
            approche architecturale et poétique&nbsp;: fleurs de saison,
            structures sculpturales, volumes généreux et audacieux. Bouquets
            personnalisés sur commande et design événementiel — chaque
            composition est pensée comme une œuvre éphémère, à mi-chemin entre
            l'architecture et la peinture.
          </p>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col gap-2"
        >
          <div className="relative aspect-[3/4] overflow-hidden bg-muted">
            <img
              src={imgDisco}
              alt="Boule à facettes dans des amaranthes"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <figcaption className="flex items-baseline justify-between font-mono text-[9px] uppercase tracking-[0.25em] text-foreground/60 pt-1">
            <span>fig. 02</span>
            <span>Amaranthus / Reflets</span>
          </figcaption>
        </motion.figure>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="col-span-12 md:col-span-9 md:col-start-4 border-t border-foreground/15 pt-6 mt-8 flex flex-wrap gap-x-10 gap-y-2 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/70"
        >
          <span>— Mariages</span>
          <span>— Événements</span>
          <span>— Installations</span>
          <span>— Scénographies</span>
          <span>— Direction artistique</span>
        </motion.div>
      </div>
    </section>
  );
}
