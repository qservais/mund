/**
 * Converts all site images to WebP at appropriate display sizes.
 * Run: node scripts/convert-images.mjs
 */
import sharp from "sharp";
import { mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const ATTACHED = join(ROOT, "../../attached_assets");
const PROJECTS = join(ROOT, "src/assets/projects");
const OUT = join(ROOT, "public/images");

mkdirSync(OUT, { recursive: true });
mkdirSync(join(OUT, "projects/bord_de_meuse"), { recursive: true });
mkdirSync(join(OUT, "projects/im_back"), { recursive: true });
mkdirSync(join(OUT, "projects/backfromthedead"), { recursive: true });

const Q = 82; // WebP quality

const jobs = [
  // ── Home page ─────────────────────────────────────────────────────────────
  { src: join(ATTACHED, "IMG_4763_1778527475088.jpeg"),  out: "hero-home.webp",     w: 1400 },
  { src: join(ATTACHED, "IMG_6053_1778527475094.jpeg"),  out: "svc1.webp",          w: 700  },
  { src: join(ATTACHED, "IMG_6283_1778527475095.jpeg"),  out: "svc2.webp",          w: 700  },

  // ── Floral / work page ────────────────────────────────────────────────────
  { src: join(ATTACHED, "IMG_5685_1778527498241.jpeg"),  out: "floral-right.webp",  w: 800  },
  { src: join(ATTACHED, "IMG_5675_1778527498241.jpeg"),  out: "floral-set1.webp",   w: 800  },
  { src: join(ATTACHED, "IMG_5692_1778527498242.jpeg"),  out: "floral-set2.webp",   w: 800  },

  // ── Abonnements page ──────────────────────────────────────────────────────
  // svc1 already covers IMG_6053

  // ── About page ────────────────────────────────────────────────────────────
  { src: join(ATTACHED, "IMG_3296_1778527976668.jpeg"),  out: "julie.webp",         w: 600  },

  // ── Past page (big grid images) ───────────────────────────────────────────
  { src: join(ATTACHED, "FullSizeRender_1778527384373.jpeg"), out: "past-1.webp",   w: 900  },
  { src: join(ATTACHED, "IMG_2681_1778527384374.jpeg"),       out: "past-2.webp",   w: 900  },
  { src: join(ATTACHED, "IMG_4719_1778527384375.jpeg"),       out: "past-3.webp",   w: 900  },
  { src: join(ATTACHED, "IMG_5685_1778527384375.jpeg"),       out: "past-4.webp",   w: 900  },
  { src: join(ATTACHED, "IMG_6860_1778527384375.jpeg"),       out: "past-5.webp",   w: 900  },
  { src: join(ATTACHED, "IMG_7362_1778527384375.jpeg"),       out: "past-6.webp",   w: 900  },

  // ── Plates — Instagram JPGs (already small, just WebP) ───────────────────
  { src: join(ATTACHED, "626467322_17934961971161771_3662617065775760134_n._1777806036053.jpg"), out: "plate-01.webp", w: 900 },
  { src: join(ATTACHED, "626488966_17934961944161771_7273886817966626180_n._1777806036053.jpg"), out: "plate-02.webp", w: 900 },
  { src: join(ATTACHED, "626518008_17934961953161771_8014125308187955234_n._1777806036053.jpg"), out: "plate-03.webp", w: 900 },
  { src: join(ATTACHED, "626625225_17934961932161771_7786532183815332101_n._1777806036053.jpg"), out: "plate-05.webp", w: 900 },
  { src: join(ATTACHED, "631503775_17936135724161771_7695730491443903255_n._1777806036054.jpg"), out: "plate-06.webp", w: 900 },
  { src: join(ATTACHED, "631712593_17936135751161771_822116378189591435_n._1777806036054.jpg"),  out: "plate-07.webp", w: 900 },
  { src: join(ATTACHED, "632004268_17936135760161771_6077639138614133001_n._1777806036054.jpg"), out: "plate-08.webp", w: 900 },
  { src: join(ATTACHED, "657927985_17875601865563074_3400857847866793533_n._1777806036054.jpg"), out: "plate-10.webp", w: 900 },
  { src: join(ATTACHED, "658044112_17875601877563074_6274336354711419466_n._1777806036054.jpg"), out: "plate-11.webp", w: 900 },
  { src: join(ATTACHED, "658667262_17875601886563074_86142893132348652_n._1777806036054.jpg"),   out: "plate-12.webp", w: 900 },
  { src: join(ATTACHED, "470152122_122142130910374224_2764620469980688957_n_1777805889705.jpg"), out: "plate-13.webp", w: 900 },

  // ── Project galleries ─────────────────────────────────────────────────────
  ...[1,2,3,4,5].map(n => ({
    src: join(PROJECTS, `bord_de_meuse/${n}.jpg`),
    out: `projects/bord_de_meuse/${n}.webp`, w: 1400,
  })),
  ...[1,2,3,4,5,6].map(n => ({
    src: join(PROJECTS, `im_back/${n}.jpg`),
    out: `projects/im_back/${n}.webp`, w: 1400,
  })),
  ...[1,2,3,4,5,6,7].map(n => ({
    src: join(PROJECTS, `backfromthedead/${n}.jpg`),
    out: `projects/backfromthedead/${n}.webp`, w: 1400,
  })),
];

let ok = 0, fail = 0;

await Promise.all(
  jobs.map(async ({ src, out, w }) => {
    try {
      const dest = join(OUT, out);
      await sharp(src)
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: Q })
        .toFile(dest);
      const { size } = (await import("fs")).statSync(dest);
      console.log(`✓ ${out.padEnd(40)} ${(size/1024).toFixed(0)} KB`);
      ok++;
    } catch (e) {
      console.error(`✗ ${out}: ${e.message}`);
      fail++;
    }
  })
);

console.log(`\nDone — ${ok} converted, ${fail} failed.`);
