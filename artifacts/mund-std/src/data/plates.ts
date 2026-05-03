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
  slug: string;
  src: string;
  alt: string;
  title: string;
  meta: string;
  category: string;
  year: string;
  location: string;
  story: string;
};

export const plates: Plate[] = [
  {
    n: "01",
    slug: "ceremonie-sauvage",
    src: img04,
    alt: "Mariée bouquet sauvage",
    title: "Cérémonie sauvage",
    meta: "Mariage / Été 2024",
    category: "Mariage",
    year: "2024",
    location: "Liège, BE",
    story:
      "Un bouquet pensé comme un pré dérivé : gloriosa, alstromères, herbes folles cueillies à la main. La mariée porte le geste plutôt qu'un objet, et la cérémonie se laisse traverser par le mouvement du bouquet à chaque pas.",
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
    slug: "atrium",
    src: img09,
    alt: "Atrium végétal",
    title: "Atrium",
    meta: "Lobby / Liège",
    category: "Architecture",
    year: "2025",
    location: "Liège, BE",
    story:
      "Composition pour l'atrium d'un immeuble de bureaux liégeois : on travaille ici à l'échelle du lieu, les volumes floraux dialoguent avec l'escalier et la verrière. Le végétal devient un repère architectural.",
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
    slug: "disco-botanique",
    src: img14,
    alt: "Boule à facettes amaranthe",
    title: "Disco botanique",
    meta: "Soirée privée",
    category: "Événement",
    year: "2024",
    location: "Liège, BE",
    story:
      "Une boule à facettes habillée d'amaranthe pour une soirée privée : référence assumée aux scénographies pop des années 70. La lumière éclate la fleur en miroirs, la fête devient sculpture.",
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
