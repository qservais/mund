import { motion } from "framer-motion";
import imgDisco from "@assets/626683964_17934961980161771_9106265817495129291_n._1777806036052.jpg";
import imgConcrete from "@assets/631712593_17936135751161771_822116378189591435_n._1777806036054.jpg";

export default function Manifesto() {
  return (
    <section className="relative w-full py-32 md:py-48 px-6 md:px-12 xl:px-24 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        
        <div className="col-span-1 lg:col-span-5 flex flex-col gap-8 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight text-balance">
              La tension entre nature luxuriante et retenue architecturale.
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
              Nous composons des installations où la sauvagerie des tiges vient rompre la rigueur du béton. Une recherche constante d'équilibre entre l'opulence des pigments vifs et la douceur des lumières naturelles.
            </p>
            <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
              Chaque bouquet, chaque table, chaque espace est pensé comme une toile. Nous n'assemblons pas des fleurs ; nous peignons avec le vivant.
            </p>
            <span className="font-sans text-[10px] tracking-widest uppercase mt-4 block">À propos</span>
          </motion.div>
        </div>

        <div className="col-span-1 lg:col-span-7 relative flex items-center justify-end">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-[400px] lg:max-w-lg aspect-[3/4] z-10"
          >
            <img 
              src={imgDisco} 
              alt="Boule à facettes dans des amarantes" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 md:-bottom-12 md:-left-12 text-xs font-sans tracking-wider rotate-[-90deg] origin-bottom-left text-muted-foreground">
              Amaranthus & Reflets
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="absolute top-1/4 -left-10 lg:left-10 w-2/3 max-w-[280px] aspect-[4/5] z-0 opacity-60 hidden md:block"
          >
            <img 
              src={imgConcrete} 
              alt="Mur en béton et végétaux" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
