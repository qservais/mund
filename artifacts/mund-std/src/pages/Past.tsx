import ArtboardShell, { BODY } from "@/components/ArtboardShell";
import { Link } from "wouter";
import overlayRef from "@assets/past_1778525400140.png";

const GRID_ITEMS = [
  { label: "001 — lara & thibault",  src: "/images/projects/lara_thibault/4.jpg",    slug: "lara-thibault",  description: "" },
  { label: "002 — colin & juliette", src: "/images/projects/colin_juliette/1.jpg",  slug: "colin-juliette", description: "" },
  { label: "003 — bord de meuse",    src: "/images/projects/bord_de_meuse/2.jpg",   slug: "bord-de-meuse",  description: "" },
  { label: "004 — high contrast",    src: "/images/projects/backfromthedead/3.webp",slug: "high-contrast",  description: "" },
  { label: "005 — composition II",   src: "/images/projects/composition_2/2.jpg",   slug: "composition-2",  description: "" },
  { label: "006 — composition I",    src: "/images/projects/composition_1/1.jpg",   slug: "composition-1",  description: "" },
];

const F = '"Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif';

const CAPTION: React.CSSProperties = {
  ...BODY,
  letterSpacing: "-0.07em",
  lineHeight: 1,
  color: "#151515",
  marginTop: 8,
};

const DESC: React.CSSProperties = {
  fontFamily: F,
  fontSize: 13,
  fontWeight: 300,
  letterSpacing: "-0.04em",
  lineHeight: 1.5,
  color: "rgba(21,21,21,0.6)",
  marginTop: 6,
  maxWidth: 480,
};

type Layout = "full" | "right" | "left";

const LAYOUTS: Layout[] = ["full", "right", "left", "full", "right", "left", "full"];

function imageStyle(layout: Layout): React.CSSProperties {
  if (layout === "full") {
    return { width: "100%", height: 500, objectFit: "cover", display: "block" };
  }
  if (layout === "right") {
    return { width: "65%", height: 560, objectFit: "cover", display: "block", marginLeft: "auto" };
  }
  return { width: "65%", height: 560, objectFit: "cover", display: "block" };
}

function PastMobile() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
      {GRID_ITEMS.map(({ label, src, slug, description }) => (
        <Link
          key={label}
          href={`/projets/${slug}`}
          style={{ display: "block", textDecoration: "none" }}
        >
          <img
            src={src}
            alt={label}
            loading="lazy"
            style={{ width: "100%", aspectRatio: "3/2", objectFit: "cover", display: "block" }}
          />
          <div style={{
            fontFamily: F,
            fontSize: 14,
            fontWeight: 300,
            letterSpacing: "-0.06em",
            lineHeight: 1,
            color: "#151515",
            marginTop: 10,
          }}>
            {label}
          </div>
          {description && (
            <div style={{
              fontFamily: F,
              fontSize: 12,
              fontWeight: 300,
              letterSpacing: "-0.04em",
              lineHeight: 1.5,
              color: "rgba(21,21,21,0.6)",
              marginTop: 6,
            }}>
              {description}
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}

export default function Past() {
  return (
    <ArtboardShell overlayRef={overlayRef} minHeight={4600} mobile={<PastMobile />}>
      <div style={{
        position: "absolute",
        top: 155,
        left: 130,
        right: 130,
        display: "flex",
        flexDirection: "column",
        gap: 96,
        paddingBottom: 120,
      }}>
        {GRID_ITEMS.map(({ label, src, slug, description }, i) => {
          const layout = LAYOUTS[i] ?? "full";
          return (
            <div key={label}>
              <Link href={`/projets/${slug}`} style={{ display: "block", textDecoration: "none" }}>
                <div style={{ overflow: "hidden" }}>
                  <img
                    src={src}
                    alt={label}
                    loading="lazy"
                    style={{
                      ...imageStyle(layout),
                      transition: "transform 0.6s ease",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.025)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
                  />
                </div>
                <div style={CAPTION}>{label}</div>
              </Link>
              {description && (
                <div style={DESC}>{description}</div>
              )}
            </div>
          );
        })}
      </div>
    </ArtboardShell>
  );
}
