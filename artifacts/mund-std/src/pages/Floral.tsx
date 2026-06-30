import ArtboardShell, { SERIF, BODY, CTA_LINK } from "@/components/ArtboardShell";
import { Link } from "wouter";
import { useLang } from "@/context/LanguageContext";
import overlayRef from "@assets/work_1778525400139.png";
const imgRight = "/images/floral-right.webp";
const imgSet1  = "/images/floral-set1.webp";
const imgSet2  = "/images/floral-set2.webp";

const copy = {
  fr: {
    mariagesTitle: "MARIAGES",
    mariagesBody: "le studio propose un service de conception florale pour votre mariage.\nnous abordons ces moments avec autant de singularité qu'ils en ont pour vous.\nils sont des compositions à construire, en lien avec le lieu, un rythme, une manière\nde se rassembler. nous avançons ensemble pour définir la direction en tenant\ncompte de l'ensemble des éléments présents et ainsi créer un événement à votre\nmesure, rien n'est standardisé.",
    mariagesItalic: "chaque mariage est un projet à part.",
    mariagesLink: "vous souhaitez en savoir plus ? contactez-nous",

    eventsTitle: "EVENEMENTS",
    eventsBody: "nous intervenons sur tous types d'événements pour des marques, des agences\névénementielles et des particuliers.\nnos installations florales et nos interventions se développent à différentes échelles.\nchaque projet se développe en réponse à un contexte précis, une ambiance ou à\nvotre identité.",
    eventsItalic: "un lieu, un moment, une intervention.",
    eventsLink: "envie de discuter de votre projet ? c'est ici",

    setTitle: "SET DESIGN",
    setBody: "le studio vous accompagne dans vos projet de set design et scénographie florale.\nen collaboration avec les marques, photographes, et studios créatifs nous réalisons des compositions et installations sur\nmesure pour des campagnes, shooting, vitrines ou projet éditoriaux.",
    setItalic: "nous composons avec votre image et votre direction artistique.",
    setLink: "une idée ? on lui donne vie, écrivez-nous",

    globalTitle: "UNE VISION GLOBALE",
    globalBody: "pour certains projets, nous pouvons développer une approche plus globale et dépasser le cadre floral.\nmain dans la main avec MAISON VAGABONDE, nous pouvons intervenir sur l'ensemble de la direction visuelle et spatiale :\nscénographie, composition des tables, choix des matières, lumières, graphisme...\nchaque élément est pensé en relation afin de construire un ensemble cohérent.",
    globalItalic: "composer au-delà du floral.",
    globalLink: "contactez-nous",
  },
  en: {
    mariagesTitle: "WEDDINGS",
    mariagesBody: "the studio offers a floral design service for your wedding.\nwe approach these moments with as much singularity as they hold for you.\nthey are compositions to be built, linked to the venue, a rhythm, a way of gathering.\nwe work together to define the direction taking into account all the elements\npresent, creating an event tailored to you.\nnothing is standardised.",
    mariagesItalic: "each wedding is a project in its own right.",
    mariagesLink: "would you like to know more? contact us",

    eventsTitle: "EVENTS",
    eventsBody: "we work on all types of events for brands,\nevent agencies and private clients.\nour floral installations develop at different scales.\neach project develops in response to a precise context,\nan atmosphere or your identity.",
    eventsItalic: "a place, a moment, an intervention.",
    eventsLink: "want to discuss your project? right here",

    setTitle: "SET DESIGN",
    setBody: "the studio supports you in your set design and floral scenography projects.\nin collaboration with brands, photographers and creative studios we create bespoke\ncompositions and installations for campaigns, shoots, window displays or editorial projects.",
    setItalic: "we compose with your image and your art direction.",
    setLink: "an idea? let's bring it to life — write to us",

    globalTitle: "A GLOBAL VISION",
    globalBody: "for certain projects, we can develop a broader approach that goes beyond the floral frame.\nin collaboration with maison vagabonde, we can intervene on the entire\nvisual and spatial direction: scenography, table compositions,\nchoice of materials, lighting, graphic design.\neach element is considered in relation to construct a coherent whole.",
    globalItalic: "composing beyond the floral.",
    globalLink: "contact us",
  },
};

const F = '"Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif';
const S = '"Cormorant Garamond", "Times New Roman", Times, serif';

const mTitle: React.CSSProperties = { fontFamily: S, fontSize: 18, fontWeight: 700, letterSpacing: "-0.05em", textTransform: "uppercase", lineHeight: 1, marginBottom: 14 };
const mBody: React.CSSProperties = { fontFamily: F, fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1.0, margin: 0, marginBottom: 12 };
const mItalic: React.CSSProperties = { fontFamily: F, fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1.0, margin: 0, textAlign: "right" };
const mLink: React.CSSProperties = { fontFamily: F, fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", color: "#151515", textDecoration: "none", borderBottom: "1px solid rgba(0,0,0,0.55)", paddingBottom: 2 };
const mSection: React.CSSProperties = { marginBottom: 40 };
const mDivider: React.CSSProperties = { height: 1, backgroundColor: "rgba(0,0,0,0.15)", margin: "28px 0" };

function FloralMobile({ c }: { c: typeof copy.fr }) {
  const bodyLines = (text: string) => text.split("\n").join(" ");
  return (
    <div>
      <div style={mSection}>
        <div style={mTitle}>{c.mariagesTitle}</div>
        <img src={imgRight} alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block", marginBottom: 16 }} />
        <p style={mBody}>{bodyLines(c.mariagesBody)}</p>
        <p style={mItalic}>{c.mariagesItalic}</p>
        <Link href="/contact" style={{ ...mLink, display: "block", marginTop: 12 }}>{c.mariagesLink}</Link>
      </div>

      <div style={mDivider} />

      <div style={mSection}>
        <div style={mTitle}>{c.eventsTitle}</div>
        <p style={mBody}>{bodyLines(c.eventsBody)}</p>
        <p style={mItalic}>{c.eventsItalic}</p>
        <Link href="/contact" style={{ ...mLink, display: "block", marginTop: 12 }}>{c.eventsLink}</Link>
      </div>

      <div style={mDivider} />

      <div style={mSection}>
        <div style={mTitle}>{c.setTitle}</div>
        <p style={mBody}>{bodyLines(c.setBody)}</p>
        <p style={mItalic}>{c.setItalic}</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, margin: "16px 0" }}>
          <img src={imgSet1} alt="" style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", display: "block" }} />
          <img src={imgSet2} alt="" style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", display: "block" }} />
        </div>
        <Link href="/contact" style={{ ...mLink, display: "block" }}>{c.setLink}</Link>
      </div>

      <div style={mDivider} />

      <div style={{ ...mSection, marginBottom: 0 }}>
        <div style={mTitle}>{c.globalTitle}</div>
        <p style={mBody}>{bodyLines(c.globalBody)}</p>
        <p style={mItalic}>{c.globalItalic}</p>
        <Link href="/contact" style={{ ...mLink, display: "block", marginTop: 12 }}>{c.globalLink}</Link>
      </div>
    </div>
  );
}

export default function Floral() {
  const { lang } = useLang();
  const c = copy[lang];

  const bodyLines = (text: string) =>
    text.split("\n").map((l, i) => <span key={i}>{l}<br /></span>);

  return (
    <ArtboardShell overlayRef={overlayRef} minHeight={1780} mobile={<FloralMobile c={c} />}>

      {/* ── MARIAGES ─────────────────────────────────────── */}
      <div style={{ position: "absolute", left: 130, top: 180, width: 600 }}>
        <div style={{ ...SERIF, marginBottom: 20 }}>{c.mariagesTitle}</div>
        <p style={{ ...BODY, margin: 0, marginBottom: 22 }}>{bodyLines(c.mariagesBody)}</p>
        <Link href="/contact" style={{ ...CTA_LINK }}>
          {c.mariagesLink}
        </Link>
        <p style={{ ...SERIF, fontWeight: 400, textTransform: "none", marginTop: 24 }}>
          {c.mariagesItalic}
        </p>
      </div>

      <img
        src={imgRight}
        alt=""
        style={{ position: "absolute", left: 815, top: 165, width: 360, height: 360, objectFit: "cover" }}
      />

      {/* ── EVENEMENTS ───────────────────────────────────── */}
      <div style={{ position: "absolute", left: 570, top: 545, width: 600, textAlign: "right" }}>
        <div style={{ ...SERIF, marginBottom: 20 }}>{c.eventsTitle}</div>
        <p style={{ ...BODY, margin: 0, marginBottom: 22 }}>{bodyLines(c.eventsBody)}</p>
        <p style={{ ...SERIF, fontWeight: 400, textTransform: "none", marginBottom: 16 }}>
          {c.eventsItalic}
        </p>
        <Link href="/contact" style={{ ...CTA_LINK }}>
          {c.eventsLink}
        </Link>
      </div>

      {/* ── SET DESIGN ───────────────────────────────────── */}
      <div style={{ position: "absolute", left: 140, top: 730, width: 1030 }}>
        <div style={{ ...SERIF, marginBottom: 20 }}>{c.setTitle}</div>
        <p style={{ ...BODY, margin: 0, marginBottom: 22 }}>{bodyLines(c.setBody)}</p>
        <p style={{ ...SERIF, fontWeight: 400, textTransform: "none", marginBottom: 16, textAlign: "center" }}>
          {c.setItalic}
        </p>
        <Link href="/contact" style={{ ...CTA_LINK }}>
          {c.setLink}
        </Link>
      </div>

      <img src={imgSet1} alt="" style={{ position: "absolute", left: 140, top: 925, width: 340, height: 453, objectFit: "cover" }} />
      <img src={imgSet2} alt="" style={{ position: "absolute", left: 500, top: 925, width: 340, height: 453, objectFit: "cover" }} />

      {/* ── UNE VISION GLOBALE ───────────────────────────── */}
      <div style={{ position: "absolute", left: 140, top: 1460, width: 930 }}>
        <div style={{ ...SERIF, marginBottom: 20 }}>{c.globalTitle}</div>
        <p style={{ ...BODY, margin: 0, marginBottom: 22 }}>{bodyLines(c.globalBody)}</p>
        <Link href="/contact" style={{ ...CTA_LINK }}>
          {c.globalLink}
        </Link>
      </div>

      <div style={{
        position: "absolute", left: 0, top: 1555, width: 1300, textAlign: "center",
        ...SERIF, fontWeight: 400, textTransform: "none",
      }}>
        {c.globalItalic}
      </div>

    </ArtboardShell>
  );
}
