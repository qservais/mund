import ArtboardShell, { SERIF, BODY } from "@/components/ArtboardShell";
import { Link } from "wouter";
import { useLang } from "@/context/LanguageContext";
import { plates } from "@/data/plates";
import overlayRef from "@assets/1_1778522805215.png";

const copy = {
  fr: {
    floralTitle: "FLORAL DESIGN",
    floralBody: [
      "mund est un studio de composition alliant les",
      "fleurs et les matériaux vivants.",
      "Nous jouons avec les rythmes, le vide, équilibre et",
      "déséquilibre.",
    ],
    caption: ["le végétal devient sculpture,", "moment, intention."],
    servicesTitle: "NOS SERVICES",
    col1: ["abonnement professionnel", "abonnement mensuel", "bouquets"],
    col2: ["mariages", "evenements", "set design", "scénographie"],
    devisTitle: "DEVIS & PROJETS",
    devisBody: [
      "nous accompagnons chaque projet de manière unique.",
      "vous souhaitez en savoir plus sur notre manière de travailler",
      "ou vous souhaitez travailler avec nous ?",
    ],
    devisCta: "écrivez nous",
  },
  en: {
    floralTitle: "FLORAL DESIGN",
    floralBody: [
      "mund is a composition studio combining flowers",
      "and living materials.",
      "We play with rhythms, void, balance and",
      "imbalance.",
    ],
    caption: ["the plant becomes sculpture,", "moment, intention."],
    servicesTitle: "OUR SERVICES",
    col1: ["professional subscription", "monthly subscription", "bouquets"],
    col2: ["weddings", "events", "set design", "scenography"],
    devisTitle: "QUOTES & PROJECTS",
    devisBody: [
      "we support each project in a unique way.",
      "would you like to know more about how we work",
      "or work with us?",
    ],
    devisCta: "write to us",
  },
};

export default function Home() {
  const { lang } = useLang();
  const c = copy[lang];

  // Hero: plates[1] = img05 (amaranthe/studio)
  // Service photos: plates[4] (lignes minimales) + plates[7] (camaïeu)
  const heroImg = plates[1].src;
  const svc1    = plates[4].src;
  const svc2    = plates[7].src;

  return (
    <ArtboardShell overlayRef={overlayRef} minHeight={2100}>

      {/* ── Hero image — right side ──────────────────────────── */}
      <img
        src={heroImg}
        alt=""
        style={{
          position: "absolute", left: 620, top: 20,
          width: 570, height: 800, objectFit: "cover",
        }}
        data-testid="home-hero"
      />

      {/* ── FLORAL DESIGN — left 112, top 720 ───────────────── */}
      <div style={{ position: "absolute", left: 112, top: 720, width: 340 }}>
        <div style={{ ...SERIF, marginBottom: 18 }}>{c.floralTitle}</div>
        <p style={{ ...BODY, lineHeight: 1.55, margin: 0 }}>
          {c.floralBody.map((l, i) => <span key={i}>{l}<br /></span>)}
        </p>
      </div>

      {/* ── Caption italic — right 130, top 860 ─────────────── */}
      <div style={{
        position: "absolute", right: 130, top: 860,
        textAlign: "right",
        ...BODY, fontStyle: "italic", fontSize: 15, lineHeight: 1.5,
        color: "rgba(0,0,0,0.5)",
      }}>
        {c.caption.map((l, i) => <span key={i}>{l}<br /></span>)}
      </div>

      {/* ── HR ──────────────────────────────────────────────── */}
      <div style={{
        position: "absolute", left: 180, top: 990,
        width: 940, height: 1, backgroundColor: "rgba(0,0,0,0.18)",
      }} />

      {/* ── NOS SERVICES ────────────────────────────────────── */}
      {/* Title */}
      <div style={{ position: "absolute", left: 130, top: 1040 }}>
        <div style={{ ...SERIF, marginBottom: 16 }}>{c.servicesTitle}</div>

        {/* Col 1: abonnements */}
        <div style={{ ...BODY, lineHeight: 1.55 }}>
          {c.col1.map((s, i) => <div key={i}>{s}</div>)}
        </div>
      </div>

      {/* Col 2: mariages / evenements / set design / scénographie */}
      <div style={{ position: "absolute", left: 380, top: 1065 }}>
        <div style={{ ...BODY, lineHeight: 1.55 }}>
          {c.col2.map((s, i) => <div key={i}>{s}</div>)}
        </div>
      </div>

      {/* ── Service photos — below the two columns ───────────── */}
      {/* Photo 1 — below col1 */}
      <img
        src={svc1}
        alt=""
        style={{
          position: "absolute", left: 130, top: 1220,
          width: 230, height: 230, objectFit: "cover",
        }}
      />
      {/* Photo 2 — below col2 */}
      <img
        src={svc2}
        alt=""
        style={{
          position: "absolute", left: 380, top: 1220,
          width: 230, height: 230, objectFit: "cover",
        }}
      />

      {/* ── DEVIS & PROJETS — right, top 1580 ───────────────── */}
      <div
        style={{ position: "absolute", right: 130, top: 1580, width: 380, textAlign: "right" }}
        data-testid="home-cta"
      >
        <div style={{ ...SERIF, marginBottom: 18 }}>{c.devisTitle}</div>
        <p style={{ ...BODY, lineHeight: 1.6, margin: 0, marginBottom: 14 }}>
          {c.devisBody.map((l, i) => <span key={i}>{l}<br /></span>)}
        </p>
        <Link
          href="/contact"
          data-testid="link-contact-cta"
          style={{ ...BODY, color: "#151515", textDecoration: "underline", textUnderlineOffset: 3 }}
        >
          {c.devisCta}
        </Link>
      </div>

    </ArtboardShell>
  );
}
