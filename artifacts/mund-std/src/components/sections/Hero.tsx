import { motion } from "framer-motion";
import heroImgUrl from "@assets/626467322_17934961971161771_3662617065775760134_n._1777806036053.jpg"; // Allium center piece
import wordmarkUrl from "@/assets/wordmark.png";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 xl:px-24 overflow-hidden">
      <div className="flex-1 flex flex-col justify-center relative z-10 w-full">
        
        {/* Timestamp / Issue number */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-0 right-0 text-[10px] md:text-xs font-mono uppercase tracking-widest text-foreground/60 flex flex-col items-end gap-1"
        >
          <span>ISSUE N°01</span>
          <span>{new Date().getFullYear()}</span>
        </motion.div>

        {/* Massive Serif Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="w-full flex flex-col"
        >
          <h1 className="leading-none">
            <img
              src={wordmarkUrl}
              alt="mund."
              className="block w-[60vw] md:w-[46vw] max-w-[640px] h-auto select-none -ml-[2vw] md:-ml-[1.5vw]"
              draggable={false}
            />
            <span className="sr-only">mund.std</span>
          </h1>
          <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-8 w-full max-w-4xl">
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] max-w-[200px] leading-relaxed text-foreground/80">
              Studio floral &<br />scénographies<br />végétales.
            </p>
            <div className="w-16 h-[1px] bg-accent"></div>
          </div>
        </motion.div>

        {/* Isolated small photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
          className="absolute top-1/2 md:top-1/4 right-[10%] md:right-[20%] w-[45vw] md:w-[25vw] max-w-[300px] hover-trigger"
        >
          <div className="relative aspect-[3/4] bg-muted shadow-xl">
            <img 
              src={heroImgUrl} 
              alt="Composition florale avec dahlias" 
              className="w-full h-full object-cover grayscale-[20%] contrast-125"
            />
            <div className="absolute -bottom-6 -left-6 text-[9px] font-mono tracking-widest uppercase rotate-[-90deg] origin-bottom-left text-foreground/70">
              00 — COVER
            </div>
          </div>
        </motion.div>

      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="w-full flex justify-between items-end border-t border-foreground/20 pt-4"
      >
        <span className="text-[9px] font-mono tracking-widest uppercase">Liège, BE</span>
        <span className="text-[9px] font-mono tracking-widest uppercase">Scroll &rarr;</span>
      </motion.div>
    </section>
  );
}
