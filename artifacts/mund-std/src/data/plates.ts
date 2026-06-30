export type PlateLayout = "A" | "B" | "C" | "D" | "E";

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
  credits?: string;
  gallery?: string[];
  tagline?: string;
  layout?: PlateLayout;
};

const LAYOUT_CYCLE: PlateLayout[] = ["A", "B", "C", "D", "E"];

export const resolveLayout = (plate: Plate): PlateLayout => {
  if (plate.layout) return plate.layout;
  const n = parseInt(plate.n, 10);
  return LAYOUT_CYCLE[(n - 1) % 5];
};

const p = (name: string) => `/images/${name}`;

export const plates: Plate[] = [
  {
    n: "01",
    slug: "lara-thibault",
    src: p("projects/lara_thibault/1.jpg"),
    gallery: [1,2,3,4,5,6,7,8,9,10,11,12,13].map(n => p(`projects/lara_thibault/${n}.jpg`)),
    alt: "Mariage Lara & Thibault",
    title: "Lara & Thibault",
    meta: "Mariage / Clôture de saison 2025",
    category: "Mariage",
    year: "2025",
    location: "Liège, BE",
    story: "Mon dernier mariage de 2025, mais surtout la rencontre d'une mariée soleil. De longues conversations, un lieu incroyable, quelques idées lancées et une confiance donnée. Je ne pouvais pas mieux clôturer cette saison.",
  },
  {
    n: "02",
    slug: "amaranthe-dentelle",
    src: p("plate-05.webp"),
    alt: "Détail amaranthe",
    title: "Amaranthe & dentelle",
    meta: "Détail / Studio",
    category: "Studio",
    year: "2024",
    location: "Atelier",
    story: "Étude au studio sur les contrastes de matière : la rigueur graphique de la dentelle d'une robe sur la chute molle d'un amaranthe vert. Un dialogue entre tissu et végétal qui informe ensuite tout le travail de mariée.",
  },
  {
    n: "03",
    slug: "ceremonie-civile",
    src: p("plate-03.webp"),
    alt: "Couple de mariés",
    title: "Cérémonie civile",
    meta: "Liège / 2024",
    category: "Mariage",
    year: "2024",
    location: "Liège, BE",
    story: "Scénographie tout en discrétion pour une cérémonie civile en centre-ville : un seul geste floral porté par la mariée, qui traverse la lumière et donne le ton de la journée. Tout le reste passe par les volumes du lieu.",
  },
  {
    n: "04",
    slug: "miroirs-alliums",
    src: p("plate-01.webp"),
    alt: "Centre Allium",
    title: "Miroirs & alliums",
    meta: "Table / Privé",
    category: "Table privée",
    year: "2024",
    location: "Domaine privé",
    story: "Une table de mariage en aller-retour : miroirs au sol, allium sphériques en suspension visuelle, bougies sourdes. La table devient un paysage qui se reflète, une mise en abyme qui démultiplie les fleurs sans les multiplier.",
  },
  {
    n: "05",
    slug: "lignes-minimales",
    src: p("plate-12.webp"),
    alt: "Coquelicots et bougies",
    title: "Lignes minimales",
    meta: "Composition éphémère",
    category: "Composition",
    year: "2025",
    location: "Studio",
    story: "Étude de minimalisme : trois coquelicots, deux bougies, une nappe blanche. Tout est dans le silence entre les éléments. La photographie cherche la juste distance pour que la composition tienne sans en rajouter.",
  },
  {
    n: "06",
    slug: "gloriosa",
    src: p("plate-02.webp"),
    alt: "Gloriosa architecturale",
    title: "Gloriosa",
    meta: "Installation sol",
    category: "Installation",
    year: "2024",
    location: "Liège, BE",
    story: "Installation au sol pour un événement privé : la gloriosa devient ligne dessinée, un trait orange qui parcourt la pièce. Inspiration directe d'Ikebana et des dessins muraux d'archi : la fleur comme tracé.",
  },
  {
    n: "07",
    slug: "contraste-brut",
    src: p("plate-10.webp"),
    alt: "Anthurium béton",
    title: "Contraste brut",
    meta: "Éditorial",
    category: "Éditorial",
    year: "2025",
    location: "Studio",
    story: "Un anthurium rouge contre un mur de béton brut : matière contre matière, le rapport entre la fleur et l'architecture devient le sujet. Photographié pour un éditorial autour de la palette terracotta du studio.",
  },
  {
    n: "08",
    slug: "camaieu",
    src: p("plate-11.webp"),
    alt: "Anthurium pastel",
    title: "Camaïeu",
    meta: "Studio",
    category: "Studio",
    year: "2025",
    location: "Atelier",
    story: "Recherche de palette : un camaïeu pastel construit autour d'un anthurium rose pâle, complété par des branches plus claires. Les lignes restent franches malgré la douceur des tons.",
  },
  {
    n: "09",
    slug: "bord-de-meuse",
    src: p("projects/bord_de_meuse/4.jpg"),
    gallery: [1,2,3,4,5,6,7,8,9].map(n => p(`projects/bord_de_meuse/${n}.jpg`)),
    alt: "Installation végétale Bord de Meuse",
    title: "Bord de Meuse",
    tagline: "Let the green in.",
    meta: "Installation végétale / Inauguration 2025",
    category: "Installation",
    year: "2025",
    location: "Liège, BE",
    credits: "Co-réalisation : @ophelie.demulier · Architecture : Luc Spits",
    layout: "D",
    story: "Installation végétale pour l'inauguration de Bord de Meuse — la dernière du studio en 2025, réalisée avec la précieuse aide et surtout le talent d'@ophelie.demulier. Le concept : l'eau et la végétation ont laissé la place au bâtiment réalisé par Luc Spits architecture. Le temps d'un weekend, elles venaient en reprendre possession.",
  },
  {
    n: "10",
    slug: "lignage",
    src: p("plate-06.webp"),
    alt: "Fougères banc chêne",
    title: "Lignage",
    meta: "Lobby corporate",
    category: "Architecture",
    year: "2024",
    location: "Bruxelles, BE",
    story: "Banc en chêne, fougères graphiques posées en ligne : un lobby corporate qui retrouve une mesure humaine grâce à un geste végétal lent. La discrétion du dispositif est le sujet.",
  },
  {
    n: "11",
    slug: "glaieuls-reunions",
    src: p("plate-08.webp"),
    alt: "Glaïeuls",
    title: "Glaïeuls & réunions",
    meta: "Bureaux",
    category: "Bureaux",
    year: "2025",
    location: "Liège, BE",
    story: "Glaïeuls posés sur une table de réunion : couleur saturée, port droit, presque militaire. La fleur prend toute la place dans une pièce neutre — un parti-pris frontal pour habiter un espace de travail.",
  },
  {
    n: "12",
    slug: "mur-vivant",
    src: p("plate-07.webp"),
    alt: "Mur béton végétal",
    title: "Mur vivant",
    meta: "Architecture",
    category: "Architecture",
    year: "2025",
    location: "Liège, BE",
    story: "Recherche pour un mur d'eau et de fleurs séchées en façade intérieure d'un bâtiment public. La trame est régulière, le végétal aléatoire : le contraste fait le tableau.",
  },
  {
    n: "13",
    slug: "hivernale",
    src: p("plate-13.webp"),
    alt: "Bouquet hivernal",
    title: "Hivernale",
    meta: "Atelier",
    category: "Studio",
    year: "2024",
    location: "Atelier",
    story: "Bouquet d'hiver, palette tirée vers les bruns et les blancs cassés : eucalyptus, branches sèches, une seule clémentine pour la note vive. La lumière froide de l'atelier devient le second sujet de l'image.",
  },
  {
    n: "14",
    slug: "high-contrast",
    src: p("projects/backfromthedead/1.webp"),
    gallery: [1,2,3,4,5,6,7].map(n => p(`projects/backfromthedead/${n}.webp`)),
    alt: "Composition florale haute saturation pour Aziza Bulwer",
    title: "High contrast",
    tagline: "Back from the dead. Brought high contrast as a gift.",
    meta: "Composition récurrente / Liège",
    category: "Composition",
    year: "2025",
    location: "Salon @azizabulwerhairstylist, Liège",
    credits: "Pour @azizabulwerhairstylist",
    layout: "B",
    story: "Composition florale réalisée pour @azizabulwerhairstylist, la reine des chevelures de rêves, qui me laisse créer deux fois par mois pour son cocon. Une confiance totale depuis le début, sans aucune contrainte — je peux expérimenter les couleurs et chercher les fleurs les plus étranges. Parce que non, tout le monde n'est pas ok avec les minis cerveaux et les fleurs à boutons. Elle, oui.",
  },
  {
    n: "15",
    slug: "allium-in-extenso",
    src: p("plate-01.webp"),
    alt: "Composition Allium close-up",
    title: "Allium, in extenso",
    meta: "Macro",
    category: "Studio",
    year: "2025",
    location: "Atelier",
    story: "Macro d'une sphère d'allium : on regarde la fleur comme on regarderait une coupole. Étude de structure pour préparer une installation suspendue prévue à l'automne 2025.",
  },
  {
    n: "16",
    slug: "colin-juliette",
    src: p("projects/colin_juliette/1.jpg"),
    gallery: [1,2,3,4,5,6,7,8,9,10,11].map(n => p(`projects/colin_juliette/${n}.jpg`)),
    alt: "Mariage Colin & Juliette",
    title: "Colin & Juliette",
    meta: "Mariage / Été 2025",
    category: "Mariage",
    year: "2025",
    location: "Belgique, BE",
    story: "Un mariage d'été, une lumière de juillet. Les compositions suivent le rythme du lieu et de la journée — fleurs généreuses, structure légère. Tout tient dans l'équilibre entre l'abondance et le vide.",
  },
  {
    n: "17",
    slug: "composition-2",
    src: p("projects/composition_2/1.jpg"),
    gallery: [1,2,3].map(n => p(`projects/composition_2/${n}.jpg`)),
    alt: "Composition II — studio",
    title: "Composition II",
    meta: "Studio / 2026",
    category: "Studio",
    year: "2026",
    location: "Atelier",
    story: "Étude de composition au studio. Trois images, un même geste — la fleur posée, regardée, déplacée. La répétition révèle ce que l'instant seul ne montre pas.",
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
