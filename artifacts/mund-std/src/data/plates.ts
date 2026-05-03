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

export type Plate = {
  n: string;
  src: string;
  alt: string;
  title: string;
  meta: string;
};

export const plates: Plate[] = [
  { n: "01", src: img04, alt: "Mariée bouquet sauvage", title: "Cérémonie sauvage", meta: "Mariage / Été 2024" },
  { n: "02", src: img05, alt: "Détail amaranthe", title: "Amaranthe & dentelle", meta: "Détail / Studio" },
  { n: "03", src: img03, alt: "Couple de mariés", title: "Cérémonie civile", meta: "Liège / 2024" },
  { n: "04", src: img01, alt: "Centre Allium", title: "Miroirs & alliums", meta: "Table / Privé" },
  { n: "05", src: img12, alt: "Coquelicots et bougies", title: "Lignes minimales", meta: "Composition éphémère" },
  { n: "06", src: img02, alt: "Gloriosa architecturale", title: "Gloriosa", meta: "Installation sol" },
  { n: "07", src: img10, alt: "Anthurium béton", title: "Contraste brut", meta: "Éditorial" },
  { n: "08", src: img11, alt: "Anthurium pastel", title: "Camaïeu", meta: "Studio" },
  { n: "09", src: img09, alt: "Atrium végétal", title: "Atrium", meta: "Lobby / Liège" },
  { n: "10", src: img06, alt: "Fougères banc chêne", title: "Lignage", meta: "Lobby corporate" },
  { n: "11", src: img08, alt: "Glaïeuls", title: "Glaïeuls & réunions", meta: "Bureaux" },
  { n: "12", src: img07, alt: "Mur béton végétal", title: "Mur vivant", meta: "Architecture" },
  { n: "13", src: img13, alt: "Bouquet hivernal", title: "Hivernale", meta: "Atelier" },
  { n: "14", src: img14, alt: "Boule à facettes amaranthe", title: "Disco botanique", meta: "Soirée privée" },
  { n: "15", src: img15, alt: "Composition Allium close-up", title: "Allium, in extenso", meta: "Macro" },
];
