import ArtboardShell, { SERIF, BODY, GULDSCRIPT } from "@/components/ArtboardShell";
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
      "nous jouons avec les rythmes, le vide,",
      "équilibre et déséquilibre.",
    ],
    caption: ["le végétal devient sculpture", "moment, intention."],
    services: ["mariages", "evenements", "set design", "scénographie"],
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
      "mund is a composition studio combining",
      "flowers and living materials.",
      "we play with rhythms, void,",
      "balance and imbalance.",
    ],
    caption: ["the plant becomes sculpture", "moment, intention."],
    services: ["weddings", "events", "set design", "scenography"],
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
  const heroImg  = plates[1].src;
  const svcImg1  = plates[9].src;  // bord de meuse — installation
  const svcImg2  = plates[4].src;  // lignes minimales

  return (
    <ArtboardShell overlayRef={overlayRef} minHeight={2100}>

      {/* ── Hero image — right side ──────────────────────── */}
      <img
        src={heroImg}
        alt=""
        style={{ position: "absolute", left: 620, top: 20, width: 600, height: 830, objectFit: "cover" }}
        data-testid="home-hero"
      />

      {/* ── FLORAL DESIGN — left 130, top 730 ────────────── */}
      <div style={{ position: "absolute", left: 130, top: 730, width: 360 }}>
        <div style={{ ...SERIF, marginBottom: 22 }}>{c.floralTitle}</div>
        <p style={{ ...BODY, lineHeight: 1.55, margin: 0 }}>
          {c.floralBody.map((l, i) => <span key={i}>{l}<br /></span>)}
        </p>
      </div>

      {/* ── Caption italic — right 130, top 875 ─────────── */}
      <div style={{
        position: "absolute", right: 130, top: 875,
        textAlign: "right",
        ...BODY, fontStyle: "italic", fontSize: 15, lineHeight: 1.6, color: "rgba(0,0,0,0.5)",
      }}>
        {c.caption.map((l, i) => <span key={i}>{l}<br /></span>)}
      </div>

      {/* ── HR ────────────────────────────────────────────── */}
      <div style={{
        position: "absolute", left: 130, top: 1010,
        width: 1040, height: 1, backgroundColor: "rgba(0,0,0,0.15)",
      }} />

      {/* ── SERVICES — stacked list + image ─────────────── */}
      {/* Service list: left 130, top 1055 */}
      <div
        style={{ position: "absolute", left: 130, top: 1055 }}
        data-testid="home-services"
      >
        {c.services.map((s, i) => (
          <div
            key={i}
            style={{
              ...BODY,
              fontSize: 30,
              fontWeight: 300,
              lineHeight: 1.35,
              letterSpacing: "-0.07em",
            }}
          >
            {s}
          </div>
        ))}
      </div>

      {/* Main service image — right */}
      <img
        src={svcImg1}
        alt=""
        style={{ position: "absolute", left: 520, top: 1030, width: 650, height: 680, objectFit: "cover" }}
      />

      {/* Secondary image — left bottom */}
      <img
        src={svcImg2}
        alt=""
        style={{ position: "absolute", left: 130, top: 1350, width: 340, height: 330, objectFit: "cover" }}
      />

      {/* ── DEVIS & PROJETS ─────────────────────────────── */}
      <div style={{ position: "absolute", left: 800, top: 1600, width: 380, textAlign: "right" }} data-testid="home-cta">
        <div style={{ ...SERIF, marginBottom: 20 }}>{c.devisTitle}</div>
        <p style={{ ...BODY, lineHeight: 1.6, margin: 0, marginBottom: 18 }}>
          {c.devisBody.map((l, i) => <span key={i}>{l}<br /></span>)}
        </p>
        <Link
          href="/contact"
          data-testid="link-contact-cta"
          style={{ ...BODY, color: "#151515", textDecoration: "underline", textUnderlineOffset: 4 }}
        >
          {c.devisCta}
        </Link>
      </div>

    </ArtboardShell>
  );
}
