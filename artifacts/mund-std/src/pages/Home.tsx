import ArtboardShell, { SERIF, BODY } from "@/components/ArtboardShell";
import { Link } from "wouter";
import { useLang } from "@/context/LanguageContext";
import overlayRef from "@assets/1_1778522805215.png";
const heroImg  = "/images/hero-home.webp";
const svc1Img  = "/images/svc1.webp";
const svc2Img  = "/images/svc2.webp";

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
      "vous souhaitez en savoir plus sur notre manière",
      "de travailler ou travailler avec nous ?",
    ],
    devisCta: "écrivez-nous",
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
      "or would you like to work with us?",
    ],
    devisCta: "write to us",
  },
};

const F = '"Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif';
const S = '"Cormorant Garamond", "Times New Roman", Times, serif';

function HomeMobile({ c }: { c: typeof copy.fr }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      <img
        src={heroImg}
        alt=""
        style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", display: "block", marginBottom: 28 }}
        data-testid="home-hero"
      />

      <div style={{ marginBottom: 32 }}>
        <div style={{ fontFamily: S, fontSize: 16, fontWeight: 700, letterSpacing: "-0.05em", textTransform: "uppercase", lineHeight: 1, marginBottom: 14 }}>
          {c.floralTitle}
        </div>
        <p style={{ fontFamily: F, fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1.0, margin: 0, marginBottom: 12 }}>
          {c.floralBody.join(" ")}
        </p>
        <p style={{ fontFamily: F, fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1.0, margin: 0, textAlign: "right" }}>
          {c.caption.join(" ")}
        </p>
      </div>

      <div style={{ marginBottom: 32 }}>
        <div style={{ fontFamily: S, fontSize: 16, fontWeight: 700, letterSpacing: "-0.05em", textTransform: "uppercase", lineHeight: 1, marginBottom: 14 }}>
          {c.servicesTitle}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          <div>
            {c.col1.map((s, i) => (
              <div key={i} style={{ fontFamily: F, fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1.0 }}>{s}</div>
            ))}
          </div>
          <div>
            {c.col2.map((s, i) => (
              <div key={i} style={{ fontFamily: F, fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1.0 }}>{s}</div>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 20 }}>
          <img src={svc1Img} alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />
          <img src={svc2Img} alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />
        </div>
      </div>

      <div data-testid="home-cta">
        <div style={{ fontFamily: S, fontSize: 16, fontWeight: 700, letterSpacing: "-0.05em", textTransform: "uppercase", lineHeight: 1, marginBottom: 14 }}>
          {c.devisTitle}
        </div>
        <p style={{ fontFamily: F, fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1.0, margin: 0, marginBottom: 16 }}>
          {c.devisBody.join(" ")}
        </p>
        <Link
          href="/contact"
          data-testid="link-contact-cta"
          style={{ fontFamily: S, fontSize: 16, fontWeight: 700, letterSpacing: "-0.05em", color: "#151515", textDecoration: "none" }}
        >
          {c.devisCta}
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <ArtboardShell overlayRef={overlayRef} minHeight={2100} mobile={<HomeMobile c={c} />}>

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
        <p style={{ ...BODY, margin: 0 }}>
          {c.floralBody.map((l, i) => <span key={i}>{l}<br /></span>)}
        </p>
      </div>

      {/* ── Caption — right 110, top 860 ─────────────────────── */}
      <div style={{
        position: "absolute", right: 110, top: 860,
        textAlign: "right",
        ...BODY,
      }}>
        {c.caption.map((l, i) => <span key={i}>{l}<br /></span>)}
      </div>

      {/* ── NOS SERVICES ────────────────────────────────────── */}
      <div style={{ position: "absolute", left: 130, top: 1160 }}>
        <div style={{ ...SERIF, marginBottom: 16 }}>{c.servicesTitle}</div>
        <div style={{ ...BODY }}>
          {c.col1.map((s, i) => <div key={i}>{s}</div>)}
        </div>
      </div>

      <div style={{ position: "absolute", left: 380, top: 1192 }}>
        <div style={{ ...BODY }}>
          {c.col2.map((s, i) => <div key={i}>{s}</div>)}
        </div>
      </div>

      <img
        src={svc1Img}
        alt=""
        style={{
          position: "absolute", left: 130, top: 1330,
          width: 230, height: 230, objectFit: "cover",
        }}
      />
      <img
        src={svc2Img}
        alt=""
        style={{
          position: "absolute", left: 380, top: 1330,
          width: 230, height: 230, objectFit: "cover",
        }}
      />

      {/* ── DEVIS & PROJETS — right, top 1680 ───────────────── */}
      <div
        style={{ position: "absolute", right: 130, top: 1680, width: 380, textAlign: "right" }}
        data-testid="home-cta"
      >
        <div style={{ ...SERIF, marginBottom: 18 }}>{c.devisTitle}</div>
        <p style={{ ...BODY, margin: 0, marginBottom: 14 }}>
          {c.devisBody.map((l, i) => <span key={i}>{l}<br /></span>)}
        </p>
        <Link
          href="/contact"
          data-testid="link-contact-cta"
          style={{
            fontFamily: '"Cormorant Garamond", "Times New Roman", Times, serif',
            fontSize: 16, fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 1.0,
            color: "#151515", textDecoration: "none",
          }}
        >
          {c.devisCta}
        </Link>
      </div>

    </ArtboardShell>
  );
}
