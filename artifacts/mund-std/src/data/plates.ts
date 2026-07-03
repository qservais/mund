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

const p = (name: string) => `/images/${name}`;

export const plates: Plate[] = [
  {
    n: "001",
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
    n: "002",
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
    n: "003",
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
    n: "004",
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
    n: "005",
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
  {
    n: "006",
    slug: "composition-1",
    src: p("projects/composition_1/1.jpg"),
    gallery: [1,2,3,4].map(n => p(`projects/composition_1/${n}.jpg`)),
    alt: "Composition I — studio",
    title: "Composition I",
    meta: "Studio / Printemps 2026",
    category: "Studio",
    year: "2026",
    location: "Atelier",
    story: "Cosmos, géraniums blancs, menthe noire. Une composition construite dans la lumière du matin — le socle blanc, le mur qui pèle, les tiges qui s'échappent vers le haut. Rien de symétrique, tout d'équilibré.",
  },
];

export const getPlateBySlug = (slug: string): Plate | undefined =>
  plates.find((p) => p.slug === slug);

export const getNeighbours = (slug: string) => {
  const idx = plates.findIndex((p) => p.slug === slug);
  if (idx < 0) return { prev: undefined, next: undefined };
  return {
    prev: plates[idx - 1],
    next: plates[idx + 1],
  };
};
