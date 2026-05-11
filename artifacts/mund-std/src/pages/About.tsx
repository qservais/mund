import ArtboardShell, { SERIF, BODY, GULDSCRIPT } from "@/components/ArtboardShell";
import { Link } from "wouter";
import { useLang } from "@/context/LanguageContext";
import { plates } from "@/data/plates";
import overlayRef from "@assets/about_1778525400141.png";

const copy = {
  fr: {
    titleLines: ["MUND STUDIO", "LES FLEURS", "AUTREMENT"],
    bio1: "après un parcours en art et en architecture où elle aborde le design et la scénographie, Julie Ahn s'oriente finalement vers la création florale et fonde MUND.",
    bio2: "dans son studio les compositions sont sculpturales, les fleurs sont envisagées comme des éléments de composition, au même titre qu'une matière, une lumière ou un objet.",
    bio3: "les interventions du studio sont sur mesure, pensées dans leur ensemble avec une attention portée aux formes autant qu'à la fleur seule.",
    col1: "le nom MUND est emprunté au grand-père de Julie, ébéniste et jardinier, dont l'univers multiple continue d'influencer sa manière de composer et de regarder les choses.",
    col2: "le studio travaille en Belgique et partout ailleurs sur des événements, mariages, set design et scénographies florales.",
    footerLabel: "vides et pleins / chaos et structure",
    quote: "le temps est beau\nune petite averse",
    contactLink: "écrire au studio",
  },
  en: {
    titleLines: ["MUND STUDIO", "FLOWERS", "DIFFERENTLY"],
    bio1: "after a background in art and architecture exploring design and scenography, Julie Ahn turned to floral creation and founded MUND.",
    bio2: "in her studio, compositions are sculptural — flowers are seen as elements of composition, on a par with a material, a light or an object.",
    bio3: "the studio's interventions are bespoke, conceived as a whole with attention paid to forms as much as to the individual flower.",
    col1: "the name MUND is borrowed from Julie's grandfather, a cabinetmaker and gardener, whose multiple universe continues to influence her way of composing and looking at things.",
    col2: "the studio works in Belgium and anywhere else on events, weddings, set design and floral scenography.",
    footerLabel: "voids and solids / chaos and structure",
    quote: "the weather is fine\na light shower",
    contactLink: "write to the studio",
  },
};

export default function About() {
  const { lang } = useLang();
  const c = copy[lang];
  const photo = plates[6].src;

  return (
    <ArtboardShell overlayRef={overlayRef} minHeight={2000}>

      {/* ── Title — left 495, top 200 ────────────────────── */}
      <div style={{ position: "absolute", left: 495, top: 200, width: 560 }}>
        {c.titleLines.map((line) => (
          <div key={line} style={{ ...SERIF, fontSize: 24, marginBottom: 5, letterSpacing: "-0.04em" }}>
            {line}
          </div>
        ))}
      </div>

      {/* ── Bio paragraphs — left 495, top 300, width 520 ── */}
      {/* Each para ~3 lines × (18 × 1.65) ≈ 89px + 22mb    */}
      <div style={{ position: "absolute", left: 495, top: 300, width: 520 }}>
        <p style={{ ...BODY, fontSize: 18, lineHeight: 1.65, margin: "0 0 22px" }}>{c.bio1}</p>
        <p style={{ ...BODY, fontSize: 18, lineHeight: 1.65, margin: "0 0 22px" }}>{c.bio2}</p>
        <p style={{ ...BODY, fontSize: 18, lineHeight: 1.65, margin: 0 }}>{c.bio3}</p>
      </div>

      {/* ── Two columns — left 495/770, top 700, width 260 ── */}
      {/* col1 ~5 lines, col2 ~3 lines → max bottom ≈ 945    */}
      <div style={{ position: "absolute", left: 495, top: 700, width: 260 }}>
        <p style={{ ...BODY, fontSize: 17, lineHeight: 1.65, margin: 0 }}>{c.col1}</p>
      </div>
      <div style={{ position: "absolute", left: 770, top: 700, width: 260 }}>
        <p style={{ ...BODY, fontSize: 17, lineHeight: 1.65, margin: 0 }}>{c.col2}</p>
      </div>

      {/* ── Footer label + contact — top 980 ─────────────── */}
      <div style={{ position: "absolute", left: 495, top: 980 }}>
        <p style={{ ...BODY, fontSize: 14, lineHeight: 1.5, margin: "0 0 18px", color: "rgba(0,0,0,0.40)" }}>
          {c.footerLabel}
        </p>
        <Link
          href="/contact"
          data-testid="about-contact-link"
          style={{ ...BODY, fontSize: 15, color: "#151515", textDecoration: "underline", textUnderlineOffset: 3 }}
        >
          {c.contactLink}
        </Link>
      </div>

      {/* ── GuldScript quote — floats above photo's top edge */}
      {/* Quote top 1110, photo top 1160 — text spans the gap */}
      <div style={{
        position: "absolute", left: 200, top: 1110,
        ...GULDSCRIPT, fontSize: 50, lineHeight: 1.3,
        color: "rgba(0,0,0,0.18)",
        zIndex: 2, pointerEvents: "none",
      }}>
        {c.quote.split("\n").map((l, i) => <span key={i} style={{ display: "block" }}>{l}</span>)}
      </div>

      {/* ── Photo — large portrait ────────────────────────── */}
      <img
        src={photo}
        alt="Julie Ahn — Mund Studio"
        style={{
          position: "absolute", left: 130, top: 1160,
          width: 500, height: 680,
          objectFit: "cover", objectPosition: "center top",
          zIndex: 1,
        }}
      />

    </ArtboardShell>
  );
}
