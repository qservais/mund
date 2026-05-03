import { motion } from "framer-motion";

import img01 from "@assets/626467322_17934961971161771_3662617065775760134_n._1777806036053.jpg";
import img02 from "@assets/626488966_17934961944161771_7273886817966626180_n._1777806036053.jpg";
import img03 from "@assets/626518008_17934961953161771_8014125308187955234_n._1777806036053.jpg";
import img04 from "@assets/626619100_17934961989161771_3853617996805756525_n._1777806036053.jpg";
import img05 from "@assets/626625225_17934961932161771_7786532183815332101_n._1777806036053.jpg";
import img06 from "@assets/631503775_17936135724161771_7695730491443903255_n._1777806036054.jpg";
import img07 from "@assets/631712593_17936135751161771_822116378189591435_n._1777806036054.jpg";
import img08 from "@assets/632004268_17936135760161771_6077639138614133001_n._1777806036054.jpg";
import img09 from "@assets/633244361_17936135781161771_1714601659444056169_n._1777806036053.jpg";
import img10 from "@assets/657927985_17875601865563074_3400857847866793533_n._1777806036054.jpg";
import img11 from "@assets/658044112_17875601877563074_6274336354711419466_n._1777806036054.jpg";
import img12 from "@assets/658667262_17875601886563074_86142893132348652_n._1777806036054.jpg";
import img13 from "@assets/470152122_122142130910374224_2764620469980688957_n_1777805889705.jpg";
import img14 from "@assets/626683964_17934961980161771_9106265817495129291_n._1777806036052.jpg";
import img15 from "@assets/626467322_17934961971161771_3662617065775760134_n._1777806036053.jpg";

type Plate = {
  n: string;
  src: string;
  alt: string;
  title: string;
  meta: string;
};

const plates: Plate[] = [
  { n: "01", src: img04, alt: "Mariée bouquet sauvage", title: "Cérémonie sauvage", meta: "Mariage / Été 2024" },
  { n: "02", src: img05, alt: "Détail amaranthe", title: "Amaranthe & dentelle", meta: "Détail / Studio" },
  { n: "03", src: img03, alt: "Couple de mariés", title: "Hôtel de Ville", meta: "Mons / 2024" },
  { n: "04", src: img01, alt: "Centre Allium", title: "Miroirs & alliums", meta: "Table / Privé" },
  { n: "05", src: img12, alt: "Coquelicots et bougies", title: "Lignes minimales", meta: "Composition éphémère" },
  { n: "06", src: img02, alt: "Gloriosa architecturale", title: "Gloriosa", meta: "Installation sol" },
  { n: "07", src: img10, alt: "Anthurium béton", title: "Contraste brut", meta: "Éditorial" },
  { n: "08", src: img11, alt: "Anthurium pastel", title: "Camaïeu", meta: "Studio" },
  { n: "09", src: img09, alt: "Atrium végétal", title: "Atrium", meta: "MoMu / Anvers" },
  { n: "10", src: img06, alt: "Fougères banc chêne", title: "Lignage", meta: "Lobby corporate" },
  { n: "11", src: img08, alt: "Glaïeuls", title: "Glaïeuls & réunions", meta: "Bureaux" },
  { n: "12", src: img07, alt: "Mur béton végétal", title: "Mur vivant", meta: "Architecture" },
  { n: "13", src: img13, alt: "Bouquet hivernal", title: "Hivernale", meta: "Atelier" },
  { n: "14", src: img14, alt: "Boule à facettes amaranthe", title: "Disco botanique", meta: "Soirée privée" },
  { n: "15", src: img15, alt: "Composition Allium close-up", title: "Allium, in extenso", meta: "Macro" },
];

function Plate({
  plate,
  className = "",
  imgClass = "aspect-[3/4]",
  align = "left",
}: {
  plate: Plate;
  className?: string;
  imgClass?: string;
  align?: "left" | "right";
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`group flex flex-col gap-2 hover-trigger ${className}`}
    >
      <div className={`relative overflow-hidden bg-muted ${imgClass}`}>
        <img
          src={plate.src}
          alt={plate.alt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
        />
      </div>
      <figcaption
        className={`flex items-baseline gap-3 pt-1 font-mono text-[9px] uppercase tracking-[0.25em] text-foreground/65 ${
          align === "right" ? "justify-end text-right" : ""
        }`}
      >
        <span className="text-accent">{plate.n}</span>
        <span className="text-foreground/85">{plate.title}</span>
        <span className="ml-auto md:ml-3 text-foreground/50">{plate.meta}</span>
      </figcaption>
    </motion.figure>
  );
}

export default function Portfolio() {
  return (
    <section id="travaux" className="relative w-full py-32 md:py-48">
      {/* Section header */}
      <div className="px-6 md:px-12 xl:px-24 mb-24 md:mb-40 grid grid-cols-12 gap-6 items-end">
        <div className="col-span-12 md:col-span-3 flex flex-col gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/60">
            Moodboard 001
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
            15 planches
          </span>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="font-serif text-[14vw] md:text-[9vw] leading-[0.85] tracking-tight">
            Travaux<br />
            <span className="italic">récents.</span>
          </h2>
        </div>
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

        {/* Movement 3 — moodboard grid 01-06 references */}
        <div>
          <div className="mb-12 grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/60">
                Planches 04 → 09
              </span>
            </div>
            <h3 className="col-span-12 md:col-span-9 font-serif italic text-3xl md:text-5xl text-foreground/90">
              Tables, gestes, objets.
            </h3>
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
              dorment dans les cartons&mdash;sur demande, écrivez-nous en
              message direct.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
