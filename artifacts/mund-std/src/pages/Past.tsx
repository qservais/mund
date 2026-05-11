import ArtboardShell, { BODY } from "@/components/ArtboardShell";
import { Link } from "wouter";
import { plates } from "@/data/plates";
import overlayRef from "@assets/past_1778525400140.png";

import img1 from "@assets/FullSizeRender_1778527384373.jpeg";
import img2 from "@assets/IMG_2681_1778527384374.jpeg";
import img3 from "@assets/IMG_4719_1778527384375.jpeg";
import img4 from "@assets/IMG_5685_1778527384375.jpeg";
import img5 from "@assets/IMG_6860_1778527384375.jpeg";
import img6 from "@assets/IMG_7362_1778527384375.jpeg";

// 7 slots — 6 new images + 1 existing plate (plates[9] = bord de meuse)
const GRID_ITEMS = [
  { label: "001 - sapiens",       src: img1,           slug: "lara-thibault",    left: 130, top:  190, w: 260, h: 220 },
  { label: "002 - lara",          src: img3,           slug: "ceremonie-civile", left: 435, top:  190, w: 260, h: 220 },
  { label: "003 - jardin",        src: plates[9].src,  slug: "bord-de-meuse",    left: 640, top:  500, w: 300, h: 210 },
  { label: "004 - bord de meuse", src: img4,           slug: "miroirs-alliums",  left: 965, top:  535, w: 220, h: 260 },
  { label: "005 - composition",   src: img5,           slug: "lignes-minimales", left: 480, top:  775, w: 210, h: 300 },
  { label: "006 - grappe",        src: img2,           slug: "high-contrast",    left: 730, top:  775, w: 210, h: 300 },
  { label: "007 - vitu",          src: img6,           slug: "contraste-brut",   left: 930, top: 1130, w: 255, h: 225 },
];

const CAPTION: React.CSSProperties = {
  ...BODY,
  fontSize: 14,
  letterSpacing: "-0.07em",
  lineHeight: 1,
  color: "#151515",
  marginTop: 6,
};

export default function Past() {
  return (
    <ArtboardShell overlayRef={overlayRef} minHeight={1600}>
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
