import ArtboardShell, { BODY } from "@/components/ArtboardShell";
import { Link } from "wouter";
import { plates } from "@/data/plates";
import overlayRef from "@assets/past_1778525400140.png";

const img1 = "/images/past-1.webp";
const img2 = "/images/past-2.webp";
const img3 = "/images/past-3.webp";
const img4 = "/images/past-4.webp";
const img5 = "/images/past-5.webp";
const img6 = "/images/past-6.webp";

const GRID_ITEMS = [
  { label: "001 - sapiens",       src: img4,                                        slug: "lara-thibault",   left: 130, top:  190, w: 260, h: 220 },
  { label: "002 - lara",          src: img3,                                        slug: "lara-thibault",   left: 435, top:  190, w: 260, h: 220 },
  { label: "003 - jardin",        src: "/images/projects/bord_de_meuse/2.webp",    slug: "bord-de-meuse",   left: 640, top:  500, w: 300, h: 210 },
  { label: "004 - bord de meuse", src: img1,                                        slug: "bord-de-meuse",   left: 965, top:  535, w: 220, h: 260 },
  { label: "005 - composition",   src: img6,                                        slug: "lignes-minimales",left: 480, top:  775, w: 210, h: 300 },
  { label: "006 - grappe",        src: img5,                                        slug: "high-contrast",   left: 730, top:  775, w: 210, h: 300 },
  { label: "007 - vitu",          src: img2,                                        slug: "contraste-brut",  left: 930, top: 1130, w: 255, h: 225 },
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
    <ArtboardShell overlayRef={overlayRef} minHeight={1600} mobile={<PastMobile />}>
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
