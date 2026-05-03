import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-foreground text-background py-32 md:py-48 px-6 md:px-12 xl:px-24">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        
        <div className="flex flex-col gap-8 justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif italic text-4xl md:text-6xl leading-tight"
          >
            Discutons de vos projets botaniques.
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-2 mt-8"
          >
            <span className="font-sans text-[10px] tracking-widest uppercase text-background/60 mb-2">Pour toute demande</span>
            <a href="https://instagram.com/mund.std" target="_blank" rel="noreferrer" className="font-sans text-xl md:text-2xl hover:italic transition-all duration-300 w-fit">
              Message direct sur Instagram
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col justify-end gap-12 font-sans"
        >
          <div>
            <span className="text-[10px] tracking-widest uppercase text-background/60 mb-4 block">Atelier</span>
            <p className="not-italic text-sm md:text-base leading-relaxed opacity-90">
              Belgique<br/>
              Sur rendez-vous
            </p>
          </div>

          <div>
            <span className="text-[10px] tracking-widest uppercase text-background/60 mb-4 block">Réseaux</span>
            <a href="https://instagram.com/mund.std" target="_blank" rel="noreferrer" className="text-sm md:text-base leading-relaxed opacity-90 hover:italic block w-fit">
              Instagram @mund.std
            </a>
            <a href="https://www.facebook.com/p/Mund-Std-61561226727135/" target="_blank" rel="noreferrer" className="text-sm md:text-base leading-relaxed opacity-90 hover:italic block w-fit mt-1">
              Facebook Mund Std
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
