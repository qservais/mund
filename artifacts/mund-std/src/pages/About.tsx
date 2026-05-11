import ArtboardShell, { SERIF, BODY } from "@/components/ArtboardShell";
import { Link } from "wouter";
import { useLang } from "@/context/LanguageContext";
import { plates } from "@/data/plates";
import overlayRef from "@assets/about_1778525400141.png";

const copy = {
  fr: {
    titleLines: ["MUND STUDIO", "LES FLEURS", "AUTREMENT"],
    bio1: "après un parcours en art et en architecture où elle aborde le design et la\nscénographie, Julie Ahn s'oriente finalement vers la création florale et fonde\nMUND.",
    bio2: "dans son studio les compositions sont sculpturales, les fleurs sont\nenvisagées comme des éléments de composition, au même titre qu'une\nmatière, une lumière ou un objet.",
    bio3: "les interventions du studio sont sur mesure, pensées dans leur ensemble\navec une attention portée aux formes autant qu'à la fleur seule.",
    col1: "le nom MUND  est emprunté au\ngrand-père de Julie, ébéniste\net jardinier, dont l'univers multiple\ncontinue d'influencer sa manière de\ncomposer et de regarder les\nchoses.",
    col2: "le studio travaille en Belgique et\npartout ailleurs sur des événements,\nmariages,  set design  et\nscénographies florales.",
    footerLabel: "vides et pleins\nchaos et structure",
    quote: "le temps est beau\nune petite averse",
    contactLink: "écrire au studio",
  },
  en: {
    titleLines: ["MUND STUDIO", "FLOWERS", "DIFFERENTLY"],
    bio1: "after a background in art and architecture exploring design\nand scenography, Julie Ahn turned to floral creation and founded\nMUND.",
    bio2: "in her studio, compositions are sculptural — flowers are seen\nas elements of composition, on a par with a material,\na light or an object.",
    bio3: "the studio's interventions are bespoke, conceived as a whole\nwith attention paid to forms as much as to the individual flower.",
    col1: "the name MUND is borrowed from\nJulie's grandfather, a cabinetmaker\nand gardener, whose multiple universe\ncontinues to influence her way of\ncomposing and looking at things.",
    col2: "the studio works in Belgium and\nanywhere else on events,\nweddings, set design and\nfloral scenography.",
    footerLabel: "voids and solids\nchaos and structure",
    quote: "the weather is fine\na light shower",
    contactLink: "write to the studio",
  },
};

export default function About() {
  const { lang } = useLang();
  const c = copy[lang];
  const photo = plates[12].src;

  const bodyLines = (text: string) =>
    text.split("\n").map((l, i) => <span key={i}>{l}<br /></span>);

  return (
    <ArtboardShell overlayRef={overlayRef} minHeight={2048}>

      {/* ── Title block — left 495, top 355 */}
      <div style={{ position: "absolute", left: 495, top: 355, width: 500 }}>
        {c.titleLines.map((line) => (
          <div key={line} style={{ ...SERIF, fontSize: 20, marginBottom: 2 }}>{line}</div>
        ))}
      </div>

      {/* ── Bio paragraphs — left 495, top 445 */}
      <div style={{ position: "absolute", left: 495, top: 445, width: 500 }}>
        <p style={{ ...BODY, margin: 0, marginBottom: 20 }}>{bodyLines(c.bio1)}</p>
        <p style={{ ...BODY, margin: 0, marginBottom: 20 }}>{bodyLines(c.bio2)}</p>
        <p style={{ ...BODY, margin: 0 }}>{bodyLines(c.bio3)}</p>
      </div>

      {/* ── Two text columns — left 495/700, top 670 */}
      <div style={{ position: "absolute", left: 495, top: 680, width: 190 }}>
        <p style={{ ...BODY, margin: 0 }}>{bodyLines(c.col1)}</p>
      </div>
      <div style={{ position: "absolute", left: 700, top: 680, width: 190 }}>
        <p style={{ ...BODY, margin: 0 }}>{bodyLines(c.col2)}</p>
      </div>

      {/* ── Footer label — left 495, top 870 */}
      <div style={{ position: "absolute", left: 495, top: 870 }}>
        <p style={{ ...BODY, margin: 0, fontSize: 14 }}>{bodyLines(c.footerLabel)}</p>
      </div>

      {/* ── GuldScript quote — right side, top 920 */}
      <div style={{
        position: "absolute", left: 250, top: 920,
        fontFamily: '"GuldScript", cursive',
        fontSize: 34, fontWeight: "normal",
        letterSpacing: "0.01em", color: "#111",
        lineHeight: 1.2, textAlign: "right", width: 400,
      }}>
        {bodyLines(c.quote)}
      </div>

      {/* ── Photo — left 250, top 980, 240×340 */}
      <img
        src={photo}
        alt="Julie Ahn — Mund Studio"
        style={{ position: "absolute", left: 250, top: 980, width: 240, height: 340, objectFit: "cover", objectPosition: "top" }}
      />

      {/* ── Contact link — left 495, top 980 */}
      <Link
        href="/contact"
        data-testid="about-contact-link"
        style={{
          position: "absolute", left: 495, top: 980,
          ...BODY, color: "#151515",
          textDecoration: "underline", textUnderlineOffset: 3,
        }}
      >
        {c.contactLink}
      </Link>

    </ArtboardShell>
  );
}
