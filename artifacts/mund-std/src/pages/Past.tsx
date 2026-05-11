import ArtboardShell from "@/components/ArtboardShell";
import { Link } from "wouter";
import { plates } from "@/data/plates";
import overlayRef from "@assets/past_1778525400140.png";

// 7 items matching the reference grid, each with absolute position and size
const GRID_ITEMS = [
  { label: "001 - sapiens",       plateIdx: 13, left: 130, top: 190, w: 260, h: 220 },
  { label: "002 - lara",          plateIdx:  0, left: 435, top: 190, w: 260, h: 220 },
  { label: "003 - jardin",        plateIdx: 10, left: 640, top: 500, w: 300, h: 210 },
  { label: "004 - bord de meuse", plateIdx:  9, left: 965, top: 535, w: 220, h: 260 },
  { label: "005 - composition",   plateIdx:  4, left: 480, top: 775, w: 210, h: 300 },
  { label: "006 - grappe",        plateIdx:  5, left: 730, top: 775, w: 210, h: 300 },
  { label: "007 - vitu",          plateIdx:  6, left: 930, top:1130, w: 255, h: 225 },
];

const CAPTION: React.CSSProperties = {
  fontFamily: '"Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: 14,
  fontWeight: 300,
  letterSpacing: "-0.07em",
  lineHeight: 1,
  color: "#151515",
  marginTop: 6,
};

export default function Past() {
  return (
    <ArtboardShell overlayRef={overlayRef} minHeight={1600}>
      {GRID_ITEMS.map(({ label, plateIdx, left, top, w, h }) => {
        const plate = plates[plateIdx];
        return (
          <div key={label} style={{ position: "absolute", left, top }}>
            <Link href={`/projets/${plate.slug}`} style={{ display: "block", textDecoration: "none" }}>
              <img
                src={plate.src}
                alt={plate.alt}
                loading="lazy"
                style={{ width: w, height: h, objectFit: "cover", display: "block" }}
              />
              <div style={CAPTION}>{label}</div>
            </Link>
          </div>
        );
      })}
    </ArtboardShell>
  );
}
