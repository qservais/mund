import ArtboardShell, { SERIF, BODY, GULDSCRIPT } from "@/components/ArtboardShell";
import { useLang } from "@/context/LanguageContext";
import overlayRef from "@assets/about_1778527941884.png";
const julieImg = "/images/julie.webp";

const LEFT  = 496;
const W_BIO = 520;

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

const F = '"Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif';
const S = '"Cormorant Garamond", "Times New Roman", Times, serif';

function AboutMobile({ c }: { c: typeof copy.fr }) {
  return (
    <div>
      <img
        src={julieImg}
        alt="Julie Ahn — Mund Studio"
        style={{ width: "60%", maxWidth: 220, height: "auto", display: "block", marginBottom: 24 }}
      />

      <div style={{ marginBottom: 20 }}>
        {c.titleLines.map((line) => (
          <div key={line} style={{ fontFamily: S, fontSize: 16, fontWeight: 700, letterSpacing: "-0.05em", textTransform: "uppercase", lineHeight: 1, marginBottom: 2 }}>
            {line}
          </div>
        ))}
      </div>

      <p style={{ fontFamily: F, fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1.0, margin: "0 0 0", textAlign: "justify" }}>{c.bio1}</p>
      <p style={{ fontFamily: F, fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1.0, margin: "0 0 12px", textAlign: "justify" }}>{c.bio2}</p>
      <p style={{ fontFamily: F, fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1.0, margin: "0 0 28px", textAlign: "justify" }}>{c.bio3}</p>

      <div style={{ height: 1, backgroundColor: "rgba(0,0,0,0.15)", marginBottom: 24 }} />

      <p style={{ fontFamily: F, fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1.0, margin: "0 0 14px", textAlign: "justify" }}>{c.col1}</p>
      <p style={{ fontFamily: F, fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1.0, margin: "0 0 28px", textAlign: "justify" }}>{c.col2}</p>

      <div style={{ height: 1, backgroundColor: "rgba(0,0,0,0.15)", marginBottom: 24 }} />

      <div style={{ marginBottom: 16 }}>
        {c.vides.map((l) => (
          <div key={l} style={{ fontFamily: S, fontSize: 16, fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 1.0 }}>{l}</div>
        ))}
      </div>

      <img
        src="/svg/le%20temps%20est%20beau.svg"
        alt="le temps est beau, une petite averse"
        style={{ width: "clamp(160px, 55vw, 240px)", display: "block", opacity: 0.72 }}
      />
    </div>
  );
}

export default function About() {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <ArtboardShell overlayRef={overlayRef} minHeight={1510} mobile={<AboutMobile c={c} />}>

      {/* ── Title ─────────────────────────────────────────── */}
      <div style={{ position: "absolute", left: LEFT, top: 200 }}>
        {c.titleLines.map((line) => (
          <div key={line} style={{ ...SERIF, marginBottom: 4 }}>{line}</div>
        ))}
      </div>

      {/* ── Bio paragraphs ────────────────────────────────── */}
      {/* bio1 + bio2: single block, no gap between them */}
      <div style={{ position: "absolute", left: LEFT, top: 280, width: W_BIO }}>
        <p style={{ ...BODY, margin: 0, textAlign: "justify" }}>{c.bio1}</p>
        <p style={{ ...BODY, margin: 0, textAlign: "justify" }}>{c.bio2}</p>
      </div>

      {/* bio3: 0.5cm gap below bio1+bio2 (~19px) */}
      <div style={{ position: "absolute", left: LEFT, top: 400, width: W_BIO }}>
        <p style={{ ...BODY, margin: 0, textAlign: "justify" }}>{c.bio3}</p>
      </div>

      {/* ── col1 — 2cm gap below bio3 (~76px) ───────────────── */}
      <div style={{ position: "absolute", left: LEFT, top: 490, width: W_BIO }}>
        <p style={{ ...BODY, margin: 0, textAlign: "justify" }}>{c.col1}</p>
      </div>

      {/* ── col2 — 1cm gap below col1 (~38px) ───────────────── */}
      <div style={{ position: "absolute", left: LEFT, top: 580, width: W_BIO }}>
        <p style={{ ...BODY, margin: 0, textAlign: "justify" }}>{c.col2}</p>
      </div>

      {/* ── vides et pleins / chaos et structure — serif bold ── */}
      <div style={{ position: "absolute", left: LEFT, top: 720 }}>
        {c.vides.map((l) => (
          <div key={l} style={{
            fontFamily: '"Cormorant Garamond", "Times New Roman", Times, serif',
            fontSize: 16, fontWeight: 700, letterSpacing: "-0.05em",
            lineHeight: 1.0, textTransform: "none",
          }}>{l}</div>
        ))}
      </div>

      {/* ── Photo — Julie Ahn ─────────────────────────────── */}
      <div style={{
        position: "absolute", left: LEFT, top: 870,
        width: 258, height: 440,
        overflow: "hidden",
        zIndex: 1,
      }}>
        <img
          src={julieImg}
          alt="Julie Ahn — Mund Studio"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>

      {/* ── Texte manuscrit — 1ère ligne juste au-dessus,
              2ème ligne qui rentre dans l'image ─────────── */}
      <img
        src="/svg/le%20temps%20est%20beau.svg"
        alt="le temps est beau, une petite averse"
        style={{
          position: "absolute", left: 620, top: 845,
          width: 310,
          zIndex: 3, pointerEvents: "none",
          opacity: 0.80,
        }}
      />

    </ArtboardShell>
  );
}
