import img01 from "@assets/626467322_17934961971161771_3662617065775760134_n._1777806036053.jpg";
import img02 from "@assets/626488966_17934961944161771_7273886817966626180_n._1777806036053.jpg";
import img03 from "@assets/626518008_17934961953161771_8014125308187955234_n._1777806036053.jpg";
import img05 from "@assets/626625225_17934961932161771_7786532183815332101_n._1777806036053.jpg";
import img06 from "@assets/631503775_17936135724161771_7695730491443903255_n._1777806036054.jpg";
import img07 from "@assets/631712593_17936135751161771_822116378189591435_n._1777806036054.jpg";
import img08 from "@assets/632004268_17936135760161771_6077639138614133001_n._1777806036054.jpg";
import img10 from "@assets/657927985_17875601865563074_3400857847866793533_n._1777806036054.jpg";
import img11 from "@assets/658044112_17875601877563074_6274336354711419466_n._1777806036054.jpg";
import img12 from "@assets/658667262_17875601886563074_86142893132348652_n._1777806036054.jpg";
import img13 from "@assets/470152122_122142130910374224_2764620469980688957_n_1777805889705.jpg";
import img15 from "@assets/626467322_17934961971161771_3662617065775760134_n._1777806036053.jpg";

// Real projects
import bdm1 from "@/assets/projects/bord_de_meuse/1.jpg";
import bdm2 from "@/assets/projects/bord_de_meuse/2.jpg";
import bdm3 from "@/assets/projects/bord_de_meuse/3.jpg";
import bdm4 from "@/assets/projects/bord_de_meuse/4.jpg";
import bdm5 from "@/assets/projects/bord_de_meuse/5.jpg";
import lt1 from "@/assets/projects/im_back/1.jpg";
import lt2 from "@/assets/projects/im_back/2.jpg";
import lt3 from "@/assets/projects/im_back/3.jpg";
import lt4 from "@/assets/projects/im_back/4.jpg";
import lt5 from "@/assets/projects/im_back/5.jpg";
import lt6 from "@/assets/projects/im_back/6.jpg";
import az1 from "@/assets/projects/backfromthedead/1.jpg";
import az2 from "@/assets/projects/backfromthedead/2.jpg";
import az3 from "@/assets/projects/backfromthedead/3.jpg";
import az4 from "@/assets/projects/backfromthedead/4.jpg";
import az5 from "@/assets/projects/backfromthedead/5.jpg";
import az6 from "@/assets/projects/backfromthedead/6.jpg";
import az7 from "@/assets/projects/backfromthedead/7.jpg";

export type Plate = {
  n: string;
  slug: string;
  src: string;
  alt: string;
  title: string;
  meta: string;
  category: string;
  year: string;
  location: string;
  story: string;
  /** Optional credits, e.g. photographer / collaborator IG handles */
  credits?: string;
  /** Optional gallery for the detail page (defaults to [src]). */
  gallery?: string[];
  /** Optional editorial sub-line (often bilingual EN/FR) */
  tagline?: string;
};

export const plates: Plate[] = [
  {
    n: "01",
    slug: "lara-thibault",
    src: lt1,
    gallery: [lt1, lt2, lt3, lt4, lt5, lt6],
    alt: "Mariage Lara & Thibault",
    title: "Lara & Thibault",
    tagline: "I'm back. This is just the warm up.",
    meta: "Mariage / Clôture de saison 2025",
    category: "Mariage",
    year: "2025",
    location: "Liège, BE",
    credits: "Photos : @parowuidar",
    story:
      "Mon dernier mariage de 2025, mais surtout la rencontre d'une mariée soleil. De longues conversations, un lieu incroyable, quelques idées lancées et une confiance donnée. Je ne pouvais pas mieux clôturer cette saison.",
  },
  {
    n: "02",
    slug: "amaranthe-dentelle",
    src: img05,
    alt: "Détail amaranthe",
    title: "Amaranthe & dentelle",
    meta: "Détail / Studio",
    category: "Studio",
    year: "2024",
    location: "Atelier",
    story:
      "Étude au studio sur les contrastes de matière : la rigueur graphique de la dentelle d'une robe sur la chute molle d'un amaranthe vert. Un dialogue entre tissu et végétal qui informe ensuite tout le travail de mariée.",
  },
  {
    n: "03",
    slug: "ceremonie-civile",
    src: img03,
    alt: "Couple de mariés",
    title: "Cérémonie civile",
    meta: "Liège / 2024",
    category: "Mariage",
    year: "2024",
    location: "Liège, BE",
    story:
      "Scénographie tout en discrétion pour une cérémonie civile en centre-ville : un seul geste floral porté par la mariée, qui traverse la lumière et donne le ton de la journée. Tout le reste passe par les volumes du lieu.",
  },
  {
    n: "04",
    slug: "miroirs-alliums",
    src: img01,
    alt: "Centre Allium",
    title: "Miroirs & alliums",
    meta: "Table / Privé",
    category: "Table privée",
    year: "2024",
    location: "Domaine privé",
    story:
      "Une table de mariage en aller-retour : miroirs au sol, allium sphériques en suspension visuelle, bougies sourdes. La table devient un paysage qui se reflète, une mise en abyme qui démultiplie les fleurs sans les multiplier.",
  },
  {
    n: "05",
    slug: "lignes-minimales",
    src: img12,
    alt: "Coquelicots et bougies",
    title: "Lignes minimales",
    meta: "Composition éphémère",
    category: "Composition",
    year: "2025",
    location: "Studio",
    story:
      "Étude de minimalisme : trois coquelicots, deux bougies, une nappe blanche. Tout est dans le silence entre les éléments. La photographie cherche la juste distance pour que la composition tienne sans en rajouter.",
  },
  {
    n: "06",
    slug: "gloriosa",
    src: img02,
    alt: "Gloriosa architecturale",
    title: "Gloriosa",
    meta: "Installation sol",
    category: "Installation",
    year: "2024",
    location: "Liège, BE",
    story:
      "Installation au sol pour un événement privé : la gloriosa devient ligne dessinée, un trait orange qui parcourt la pièce. Inspiration directe d'Ikebana et des dessins muraux d'archi : la fleur comme tracé.",
  },
  {
    n: "07",
    slug: "contraste-brut",
    src: img10,
    alt: "Anthurium béton",
    title: "Contraste brut",
    meta: "Éditorial",
    category: "Éditorial",
    year: "2025",
    location: "Studio",
    story:
      "Un anthurium rouge contre un mur de béton brut : matière contre matière, le rapport entre la fleur et l'architecture devient le sujet. Photographié pour un éditorial autour de la palette terracotta du studio.",
  },
  {
    n: "08",
    slug: "camaieu",
    src: img11,
    alt: "Anthurium pastel",
    title: "Camaïeu",
    meta: "Studio",
    category: "Studio",
    year: "2025",
    location: "Atelier",
    story:
      "Recherche de palette : un camaïeu pastel construit autour d'un anthurium rose pâle, complété par des branches plus claires. Les lignes restent franches malgré la douceur des tons.",
  },
  {
    n: "09",
    slug: "bord-de-meuse",
    src: bdm1,
    gallery: [bdm1, bdm2, bdm3, bdm4, bdm5],
    alt: "Installation végétale Bord de Meuse",
    title: "Bord de Meuse",
    tagline: "Let the green in.",
    meta: "Installation végétale / Inauguration 2025",
    category: "Installation",
    year: "2025",
    location: "Liège, BE",
    credits: "Co-réalisation : @ophelie.demulier · Architecture : Luc Spits",
    story:
      "Installation végétale pour l'inauguration de Bord de Meuse — la dernière du studio en 2025, réalisée avec la précieuse aide et surtout le talent d'@ophelie.demulier. Le concept : l'eau et la végétation ont laissé la place au bâtiment réalisé par Luc Spits architecture. Le temps d'un weekend, elles venaient en reprendre possession.",
  },
  {
    n: "10",
    slug: "lignage",
    src: img06,
    alt: "Fougères banc chêne",
    title: "Lignage",
    meta: "Lobby corporate",
    category: "Architecture",
    year: "2024",
    location: "Bruxelles, BE",
    story:
      "Banc en chêne, fougères graphiques posées en ligne : un lobby corporate qui retrouve une mesure humaine grâce à un geste végétal lent. La discrétion du dispositif est le sujet.",
  },
  {
    n: "11",
    slug: "glaieuls-reunions",
    src: img08,
    alt: "Glaïeuls",
    title: "Glaïeuls & réunions",
    meta: "Bureaux",
    category: "Bureaux",
    year: "2025",
    location: "Liège, BE",
    story:
      "Glaïeuls posés sur une table de réunion : couleur saturée, port droit, presque militaire. La fleur prend toute la place dans une pièce neutre — un parti-pris frontal pour habiter un espace de travail.",
  },
  {
    n: "12",
    slug: "mur-vivant",
    src: img07,
    alt: "Mur béton végétal",
    title: "Mur vivant",
    meta: "Architecture",
    category: "Architecture",
    year: "2025",
    location: "Liège, BE",
    story:
      "Recherche pour un mur d'eau et de fleurs séchées en façade intérieure d'un bâtiment public. La trame est régulière, le végétal aléatoire : le contraste fait le tableau.",
  },
  {
    n: "13",
    slug: "hivernale",
    src: img13,
    alt: "Bouquet hivernal",
    title: "Hivernale",
    meta: "Atelier",
    category: "Studio",
    year: "2024",
    location: "Atelier",
    story:
      "Bouquet d'hiver, palette tirée vers les bruns et les blancs cassés : eucalyptus, branches sèches, une seule clémentine pour la note vive. La lumière froide de l'atelier devient le second sujet de l'image.",
  },
  {
    n: "14",
    slug: "high-contrast",
    src: az1,
    gallery: [az1, az2, az3, az4, az5, az6, az7],
    alt: "Composition florale haute saturation pour Aziza Bulwer",
    title: "High contrast",
    tagline: "Back from the dead. Brought high contrast as a gift.",
    meta: "Composition récurrente / Liège",
    category: "Composition",
    year: "2025",
    location: "Salon @azizabulwerhairstylist, Liège",
    credits: "Pour @azizabulwerhairstylist",
    story:
      "Composition florale réalisée pour @azizabulwerhairstylist, la reine des chevelures de rêves, qui me laisse créer deux fois par mois pour son cocon. Une confiance totale depuis le début, sans aucune contrainte — je peux expérimenter les couleurs et chercher les fleurs les plus étranges. Parce que non, tout le monde n'est pas ok avec les minis cerveaux et les fleurs à boutons. Elle, oui.",
  },
  {
    n: "15",
    slug: "allium-in-extenso",
    src: img15,
    alt: "Composition Allium close-up",
    title: "Allium, in extenso",
    meta: "Macro",
    category: "Studio",
    year: "2025",
    location: "Atelier",
    story:
      "Macro d'une sphère d'allium : on regarde la fleur comme on regarderait une coupole. Étude de structure pour préparer une installation suspendue prévue à l'automne 2025.",
  },
];

export const getPlateBySlug = (slug: string): Plate | undefined =>
  plates.find((p) => p.slug === slug);

export const getNeighbours = (slug: string) => {
  const idx = plates.findIndex((p) => p.slug === slug);
  if (idx < 0) return { prev: undefined, next: undefined };
  return {
    prev: plates[(idx - 1 + plates.length) % plates.length],
    next: plates[(idx + 1) % plates.length],
  };
};
