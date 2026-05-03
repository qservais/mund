import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import logoUrl from "@assets/image_1777805879105.png";
import heroImgUrl from "@assets/470152122_122142130910374224_2764620469980688957_n_1777805889705.jpg";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative w-full h-[100svh] flex flex-col items-center justify-center overflow-hidden pt-20">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <img 
          src={heroImgUrl} 
          alt="Composition florale avec dahlias" 
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/90" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full max-w-4xl"
        >
          <img 
            src={logoUrl} 
            alt="mund." 
            className="w-full h-auto max-w-[80vw] md:max-w-2xl mx-auto drop-shadow-sm invert dark:invert-0 mix-blend-multiply"
          />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="mt-12 text-sm md:text-base font-sans tracking-[0.2em] uppercase text-foreground/80 max-w-lg text-balance"
        >
          Studio floral & scénographies végétales
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-sans tracking-widest uppercase">Découvrir</span>
        <div className="w-[1px] h-12 bg-foreground/30 overflow-hidden relative">
          <motion.div 
            className="w-full h-full bg-foreground absolute top-0 left-0"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
