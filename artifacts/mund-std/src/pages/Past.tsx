import ArtboardShell, { BODY } from "@/components/ArtboardShell";
import { Link } from "wouter";
import overlayRef from "@assets/past_1778525400140.png";

const GRID_ITEMS = [
  {
    label: "001 — lara & thibault",
    src: "/images/projects/lara_thibault/4.jpg",
    slug: "lara-thibault",
    left: 130, top: 190, w: 250, h: 340,
  },
  {
    label: "002 — colin & juliette",
    src: "/images/projects/colin_juliette/1.jpg",
    slug: "colin-juliette",
    left: 435, top: 240, w: 230, h: 300,
  },
  {
    label: "003 — bord de meuse",
    src: "/images/projects/bord_de_meuse/2.jpg",
    slug: "bord-de-meuse",
    left: 780, top: 190, w: 290, h: 210,
  },
  {
    label: "004 — high contrast",
    src: "/images/projects/backfromthedead/3.webp",
    slug: "high-contrast",
    left: 730, top: 620, w: 220, h: 300,
  },
  {
    label: "005 — composition II",
    src: "/images/projects/composition_2/2.jpg",
    slug: "composition-2",
    left: 130, top: 660, w: 250, h: 250,
  },
];

const CAPTION: React.CSSProperties = {
  ...BODY,
  letterSpacing: "-0.07em",
  lineHeight: 1,
  color: "#151515",
  marginTop: 6,
};

const F = '"Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif';

function PastMobile() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 12px" }}>
      {GRID_ITEMS.map(({ label, src, slug }) => (
        <Link
          key={label}
          href={`/projets/${slug}`}
          style={{ display: "block", textDecoration: "none" }}
        >
          <img
            src={src}
            alt={label}
            loading="lazy"
            style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }}
          />
          <div style={{
            fontFamily: F,
            fontSize: 15,
            fontWeight: 300,
            letterSpacing: "-0.06em",
            lineHeight: 1,
            color: "#151515",
            marginTop: 6,
          }}>
            {label}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function Past() {
  return (
    <ArtboardShell overlayRef={overlayRef} minHeight={1200} mobile={<PastMobile />}>
      {GRID_ITEMS.map(({ label, src, slug, left, top, w, h }) => (
        <div key={label} style={{ position: "absolute", left, top }}>
          <Link href={`/projets/${slug}`} style={{ display: "block", textDecoration: "none" }}>
            <img
              src={src}
              alt={label}
              loading="lazy"
              style={{ width: w, height: h, objectFit: "cover", display: "block" }}
            />
            <div style={CAPTION}>{label}</div>
          </Link>
        </div>
      ))}
    </ArtboardShell>
  );
}
