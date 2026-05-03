import { motion } from "framer-motion";

import imgBrideVivid from "@assets/626619100_17934961989161771_3853617996805756525_n._1777806036053.jpg";
import imgAllium from "@assets/626467322_17934961971161771_3662617065775760134_n._1777806036053.jpg";
import imgCoupleBack from "@assets/626518008_17934961953161771_8014125308187955234_n._1777806036053.jpg";
import imgGloriosa from "@assets/626488966_17934961944161771_7273886817966626180_n._1777806036053.jpg";
import imgBrideDetail from "@assets/626625225_17934961932161771_7786532183815332101_n._1777806036053.jpg";
import imgLushGreen from "@assets/633244361_17936135781161771_1714601659444056169_n._1777806036053.jpg";
import imgGladioli from "@assets/632004268_17936135760161771_6077639138614133001_n._1777806036054.jpg";
import imgOakBench from "@assets/631503775_17936135724161771_7695730491443903255_n._1777806036054.jpg";
import imgPoppies from "@assets/658667262_17875601886563074_86142893132348652_n._1777806036054.jpg";
import imgAnthuriumConcrete from "@assets/657927985_17875601865563074_3400857847866793533_n._1777806036054.jpg";
import imgAnthuriumInterior from "@assets/658044112_17875601877563074_6274336354711419466_n._1777806036054.jpg";

export default function Portfolio() {
  const ProjectItem = ({ 
    src, alt, title, subtitle, className, imgClassName 
  }: { 
    src: string, alt: string, title: string, subtitle: string, className?: string, imgClassName?: string 
  }) => (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`group relative flex flex-col gap-4 hover-trigger ${className}`}
    >
      <div className="overflow-hidden bg-muted">
        <img 
          src={src} 
          alt={alt} 
          className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${imgClassName}`}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="font-serif italic text-xl text-foreground">{title}</h3>
        <span className="font-sans text-[10px] tracking-wider uppercase text-muted-foreground">{subtitle}</span>
      </div>
    </motion.div>
  );

  return (
    <section id="travaux" className="w-full py-24 bg-background">
      <div className="w-full mb-24 px-6 md:px-12 text-center md:text-left">
        <span className="font-sans text-[10px] tracking-widest uppercase mb-4 block">Sélection</span>
        <h2 className="font-serif text-5xl md:text-7xl">Travaux Récents</h2>
      </div>

      {/* Editorial Grid */}
      <div className="px-6 md:px-12 xl:px-24 w-full flex flex-col gap-32">
        
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
          <div className="md:col-span-5 md:col-start-2">
            <ProjectItem 
              src={imgBrideVivid} 
              alt="Mariée avec bouquet sauvage" 
              title="Cérémonie Sauvage" 
              subtitle="Mariage, Été 2024"
              imgClassName="aspect-[3/4]"
            />
          </div>
          <div className="md:col-span-4 mt-12 md:mt-32">
            <ProjectItem 
              src={imgBrideDetail} 
              alt="Détail bouquet mariée" 
              title="Amaranthe & Dentelle" 
              subtitle="Détails"
              imgClassName="aspect-square"
            />
          </div>
        </div>

        {/* Full Bleed Interruption */}
        <div className="w-full h-[60vh] md:h-[80vh] relative -mx-6 md:-mx-12 xl:-mx-24 w-[calc(100%+48px)] md:w-[calc(100%+96px)] xl:w-[calc(100%+192px)]">
          <img src={imgCoupleBack} alt="Couple de mariés" className="w-full h-full object-cover object-top" loading="lazy"/>
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-background/80 backdrop-blur px-4 py-2">
            <span className="font-sans text-[10px] tracking-widest uppercase">Hôtel de Ville, Mons</span>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          <div className="md:col-span-6">
            <ProjectItem 
              src={imgAllium} 
              alt="Centre de table Allium" 
              title="Miroirs & Alliums" 
              subtitle="Scénographie de table"
              imgClassName="aspect-[4/3]"
            />
          </div>
          <div className="md:col-span-4 md:col-start-8 mt-16 md:-mt-16">
            <ProjectItem 
              src={imgPoppies} 
              alt="Coquelicots et bougies" 
              title="Lignes Minimales" 
              subtitle="Composition Éphémère"
              imgClassName="aspect-[3/4]"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mt-12">
             <ProjectItem 
              src={imgAnthuriumConcrete} 
              alt="Anthurium sur béton" 
              title="Contraste Brut" 
              subtitle="Éditorial"
              imgClassName="aspect-[4/5]"
            />
          </div>
          <div className="mt-0 md:-mt-12">
             <ProjectItem 
              src={imgAnthuriumInterior} 
              alt="Anthurium intérieur" 
              title="Camaïeu Pastel" 
              subtitle="Studio"
              imgClassName="aspect-[4/5]"
            />
          </div>
          <div className="mt-12 md:mt-24">
             <ProjectItem 
              src={imgGloriosa} 
              alt="Arrangement Gloriosa" 
              title="Gloriosa Architecturale" 
              subtitle="Installation sol"
              imgClassName="aspect-[4/5]"
            />
          </div>
        </div>

        {/* Big landscape corporate */}
        <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
          <h2 className="font-serif italic text-3xl md:text-5xl text-center">Installations Corporate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <ProjectItem 
              src={imgLushGreen} 
              alt="Plantes vertes atrium" 
              title="Atrium Végétal" 
              subtitle="MoMu, Anvers"
              imgClassName="aspect-square"
            />
            <div className="flex flex-col gap-8 md:gap-16">
              <ProjectItem 
                src={imgOakBench} 
                alt="Fougères sur banc en chêne" 
                title="Accueil Lignage" 
                subtitle="Lobby"
                imgClassName="aspect-video"
              />
              <ProjectItem 
                src={imgGladioli} 
                alt="Glaïeuls en salle de conférence" 
                title="Glaïeuls & Réunions" 
                subtitle="Bureaux"
                imgClassName="aspect-video"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
