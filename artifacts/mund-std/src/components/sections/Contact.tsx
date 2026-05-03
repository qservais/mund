import { motion } from "framer-motion";
import imgContact from "@assets/626625225_17934961932161771_7786532183815332101_n._1777806036053.jpg";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full px-6 md:px-12 xl:px-24 py-32 md:py-56"
    >
      <div className="mx-auto max-w-6xl grid grid-cols-12 gap-x-6 gap-y-16 items-start">
        {/* Left — colophon */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="col-span-12 md:col-span-6"
        >
          <div className="flex items-baseline justify-between border-b border-foreground/20 pb-6 mb-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
              mund.std
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/60">
              Édition 26 / Printemps
            </span>
          </div>

          <h2 className="font-mono uppercase text-3xl md:text-5xl leading-[1.1] tracking-[0.02em] font-medium mb-16">
            Discutons de<br />vos projets<br />botaniques.
          </h2>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 max-w-md">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/50">
                Atelier
              </span>
              <p className="font-mono text-xs leading-[1.7]">
                Liège,<br />
                Belgique
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/50">
                Ouverture
              </span>
              <p className="font-mono text-xs leading-[1.7]">
                Du mardi<br />
                au samedi
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
                className="font-mono text-xs leading-[1.7] hover:text-accent transition-colors w-fit"
              >
                Instagram<br />@mund.std
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/50">
                Contact
              </span>
              <a
                href="https://www.facebook.com/p/Mund-Std-61561226727135/"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs leading-[1.7] hover:text-accent transition-colors w-fit"
              >
                Facebook<br />Mund Std
              </a>
            </div>

            <div className="col-span-2 flex flex-col gap-2 pt-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent">
                Demandes de devis
              </span>
              <a
                href="https://instagram.com/mund.std"
                target="_blank"
                rel="noreferrer"
                className="font-mono uppercase tracking-[0.05em] text-base md:text-xl hover:underline underline-offset-4 decoration-accent w-fit"
              >
                Message direct sur Instagram &rarr;
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right — single posed photograph */}
        <motion.figure
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, delay: 0.15 }}
          className="col-span-12 md:col-span-5 md:col-start-8 md:mt-24"
        >
          <div className="relative aspect-[3/4] overflow-hidden bg-muted">
            <img
              src={imgContact}
              alt="Détail floral mund.std"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <figcaption className="flex items-baseline justify-between font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/60 pt-3">
            <span>fig. 16</span>
            <span>Bonjour.</span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
