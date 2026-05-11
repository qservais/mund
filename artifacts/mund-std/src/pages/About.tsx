import ArtboardShell, { SERIF, BODY, GULDSCRIPT } from "@/components/ArtboardShell";
import { useLang } from "@/context/LanguageContext";
import overlayRef from "@assets/about_1778527941884.png";
import julieImg from "@assets/IMG_3296_1778527976668.jpeg";

// ── Shared horizontal anchor ─────────────────────────────
const LEFT  = 496;
const W_BIO = 520;
const W_COL = 220;
const COL2  = 730;

const copy = {
  fr: {
    titleLines: ["MUND STUDIO", "LES FLEURS", "AUTREMENT"],
    bio1: "après un parcours en art et en architecture où elle aborde le design et la scénographie, Julie Ahn s'oriente finalement vers la création florale et fonde MUND.",
    bio2: "dans son studio les compositions sont sculpturales, les fleurs sont envisagées comme des éléments de composition, au même titre qu'une matière, une lumière ou un objet.",
    bio3: "les interventions du studio sont sur mesure, pensées dans leur ensemble avec une attention portée aux formes autant qu'à la fleur seule.",
    col1: "le nom MUND est emprunté au grand-père de Julie, artiste, ébéniste et jardinier, dont l'univers multiple continue d'influencer sa manière de composer et de regarder les choses.",
    col2: "le studio travaille en Belgique et partout ailleurs sur des événements, mariages, set design et scénographies florales.",
    vides: ["vides et pleins", "chaos et structure"],
    quote: ["le temps est beau", "une petite averse"],
  },
  en: {
    titleLines: ["MUND STUDIO", "FLOWERS", "DIFFERENTLY"],
    bio1: "after a background in art and architecture exploring design and scenography, Julie Ahn turned to floral creation and founded MUND.",
    bio2: "in her studio, compositions are sculptural — flowers are seen as elements of composition, on a par with a material, a light or an object.",
    bio3: "the studio's interventions are bespoke, conceived as a whole with attention paid to forms as much as to the individual flower.",
    col1: "the name MUND is borrowed from Julie's grandfather, an artist, cabinetmaker and gardener, whose multiple universe continues to influence her way of composing and looking at things.",
    col2: "the studio works in Belgium and anywhere else on events, weddings, set design and floral scenography.",
    vides: ["voids and solids", "chaos and structure"],
    quote: ["the weather is fine", "a light shower"],
  },
};

export default function About() {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <ArtboardShell overlayRef={overlayRef} minHeight={1350}>

      {/* ── Title ─────────────────────────────────────────── */}
      <div style={{ position: "absolute", left: LEFT, top: 200 }}>
        {c.titleLines.map((line) => (
          <div key={line} style={{ ...SERIF, marginBottom: 4 }}>{line}</div>
        ))}
      </div>

      {/* ── Bio paragraphs ────────────────────────────────── */}
      <div style={{ position: "absolute", left: LEFT, top: 270, width: W_BIO }}>
        <p style={{ ...BODY, lineHeight: 1.6, margin: "0 0 14px" }}>{c.bio1}</p>
        <p style={{ ...BODY, lineHeight: 1.6, margin: "0 0 14px" }}>{c.bio2}</p>
        <p style={{ ...BODY, lineHeight: 1.6, margin: 0 }}>{c.bio3}</p>
      </div>

      {/* ── Two narrow columns ────────────────────────────── */}
      <div style={{ position: "absolute", left: LEFT, top: 590, width: W_COL }}>
        <p style={{ ...BODY, fontSize: 16, lineHeight: 1.6, margin: 0 }}>{c.col1}</p>
      </div>
      <div style={{ position: "absolute", left: COL2, top: 590, width: W_COL }}>
        <p style={{ ...BODY, fontSize: 16, lineHeight: 1.6, margin: 0 }}>{c.col2}</p>
      </div>

      {/* ── vides et pleins / chaos et structure ─────────── */}
      <div style={{ position: "absolute", left: LEFT, top: 800 }}>
        {c.vides.map((l) => (
          <div key={l} style={{ ...BODY, fontSize: 16, lineHeight: 1.45 }}>{l}</div>
        ))}
      </div>

      {/* ── Handwritten quote SVG — above photo ──────────── */}
      <img
        src="/svg/le%20temps%20est%20beau.svg"
        alt="le temps est beau, une petite averse"
        style={{
          position: "absolute", left: LEFT, top: 848,
          width: 274,
          zIndex: 2, pointerEvents: "none",
          opacity: 0.72,
        }}
      />

      {/* ── Photo — Julie Ahn ─────────────────────────────── */}
      <img
        src={julieImg}
        alt="Julie Ahn — Mund Studio"
        style={{
          position: "absolute", left: LEFT, top: 910,
          width: 258, height: 328,
          objectFit: "cover",
          objectPosition: "center top",
          zIndex: 1,
        }}
      />

    </ArtboardShell>
  );
}
