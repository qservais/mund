import { useEffect, useState } from "react";
import { Link } from "wouter";
import { useLang } from "@/context/LanguageContext";
import { plates } from "@/data/plates";
import logo from "@assets/image001_1778521429706.png";
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
    caption: ["le végétal devient sculpture", "moment, intention."],
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
    caption: ["the plant becomes sculpture", "moment, intention."],
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

// ── Type tokens (after user corrections: -2px, -0.07em, lh 0.9) ────────────
const SERIF: React.CSSProperties = {
  fontFamily: '"Times New Roman", Times, serif',
  fontSize: 18,
  fontWeight: 400,
  letterSpacing: "-0.02em",
  textTransform: "uppercase",
  lineHeight: 1,
};
const BODY: React.CSSProperties = {
  fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
  fontSize: 16, // was 18, -2px per user
  fontWeight: 300,
  letterSpacing: "-0.07em", // per user
  lineHeight: 0.9, // per user
};
const NAV: React.CSSProperties = {
  fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
  fontSize: 18,
  lineHeight: 0.85,
  fontWeight: 300,
  letterSpacing: "-0.06em",
  color: "#111",
  display: "block",
  textDecoration: "none",
};

export default function Home() {
  const { lang, toggle } = useLang();
  // Overlay default state from ?overlay=1 query param (for QA)
  const [overlay, setOverlay] = useState(() => {
    if (typeof window === "undefined") return false;
    return new URLSearchParams(window.location.search).get("overlay") === "1";
  });
  const c = copy[lang];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === "o" || e.key === "O") && !e.metaKey && !e.ctrlKey) {
        const tag = (e.target as HTMLElement)?.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA") return;
        setOverlay((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Hero + service photos sourced from existing plates
  const heroImg = plates[1].src;
  const svc1 = plates[4].src;
  const svc2 = plates[7].src;

  return (
    <div
      style={{
        width: 1300,
        minHeight: 2048,
        margin: "0 auto",
        position: "relative",
        backgroundColor: "#f4f4f2",
        overflow: "hidden",
        color: "#151515",
        WebkitFontSmoothing: "antialiased",
      }}
      data-testid="home-artboard"
    >
      {/* ── PIXEL-PERFECT OVERLAY (toggle with "o") ─────────────── */}
      {overlay && (
        <img
          src={overlayRef}
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1300,
            height: 2048,
            opacity: 0.35,
            pointerEvents: "none",
            zIndex: 9999,
          }}
        />
      )}

      {/* Side nav — top: 55, left: 130 */}
      <nav
        style={{
          position: "absolute",
          top: 55,
          left: 130,
        }}
      >
        <Link href="/" style={NAV} data-testid="nav-work">work</Link>
        <Link href="/floral" style={NAV} data-testid="nav-floral">floral</Link>
        <Link href="/past" style={NAV} data-testid="nav-past">past</Link>
        <Link href="/about" style={NAV} data-testid="nav-about">about</Link>
      </nav>

      {/* Logo — centered, +12% (300 → 336px) */}
      <Link
        href="/"
        data-testid="nav-brand"
        style={{
          position: "absolute",
          top: 55,
          left: "50%",
          transform: "translateX(-50%)",
          width: 336,
          display: "block",
        }}
      >
        <img
          src={logo}
          alt="mund studio"
          style={{
            width: "100%",
            display: "block",
            mixBlendMode: "multiply",
          }}
        />
      </Link>

      {/* FR/EN toggle — top right */}
      <button
        onClick={toggle}
        data-testid="lang-toggle"
        style={{
          position: "absolute",
          top: 55,
          right: 130,
          fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
          fontSize: 16,
          fontWeight: 300,
          letterSpacing: "-0.07em",
          color: "#111",
          background: "transparent",
          border: "none",
          padding: 0,
          cursor: "pointer",
        }}
      >
        {lang === "fr" ? "en" : "fr"}
      </button>

      {/* Hero image — left 665, top 26 (was 50, -24px per user) */}
      <img
        src={heroImg}
        alt=""
        style={{
          position: "absolute",
          left: 665,
          top: 26,
          width: 570,
          height: 800,
          objectFit: "cover",
        }}
        data-testid="home-hero"
      />

      {/* FLORAL DESIGN block — left 112 (was 130, -18px per user), top 720 */}
      <div
        style={{
          position: "absolute",
          left: 112,
          top: 720,
          width: 330,
        }}
      >
        <div style={{ ...SERIF, marginBottom: 18 }}>{c.floralTitle}</div>
        <p style={{ ...BODY, margin: 0 }}>
          {c.floralBody.map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
        </p>
      </div>

      {/* Caption right of image — left 1030, top 860 */}
      <div
        style={{
          position: "absolute",
          left: 1030,
          top: 860,
          textAlign: "right",
          ...BODY,
          fontStyle: "italic",
          fontSize: 14,
        }}
      >
        {c.caption.map((line, i) => (
          <span key={i}>{line}<br /></span>
        ))}
      </div>

      {/* Horizontal divider — left 180, top 990, w 940, h 1 */}
      <div
        style={{
          position: "absolute",
          left: 180,
          top: 990,
          width: 940,
          height: 1,
          backgroundColor: "rgba(0,0,0,0.18)",
        }}
      />

      {/* NOS SERVICES — left 130, top 1225 */}
      <div
        style={{ position: "absolute", left: 130, top: 1225 }}
        data-testid="home-services"
      >
        <div style={{ ...SERIF, marginBottom: 18 }}>{c.servicesTitle}</div>
        <div style={{ display: "flex", gap: 80 }}>
          <div style={BODY}>
            {c.col1.map((s, i) => <div key={i}>{s}</div>)}
          </div>
          <div style={BODY}>
            {c.col2.map((s, i) => <div key={i}>{s}</div>)}
          </div>
        </div>
      </div>

      {/* Service photo 1 — left 130, top 1340, 240×240 */}
      <img
        src={svc1}
        alt=""
        style={{
          position: "absolute",
          left: 130,
          top: 1340,
          width: 240,
          height: 240,
          objectFit: "cover",
        }}
      />
      {/* Service photo 2 — left 410, top 1340, 240×240 */}
      <img
        src={svc2}
        alt=""
        style={{
          position: "absolute",
          left: 410,
          top: 1340,
          width: 240,
          height: 240,
          objectFit: "cover",
        }}
      />

      {/* DEVIS & PROJETS — left 815, top 1580, right-aligned */}
      <div
        style={{
          position: "absolute",
          left: 815,
          top: 1580,
          width: 360,
          textAlign: "right",
        }}
        data-testid="home-cta"
      >
        <div style={{ ...SERIF, marginBottom: 18 }}>{c.devisTitle}</div>
        <p style={{ ...BODY, margin: 0, marginBottom: 14 }}>
          {c.devisBody.map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
        </p>
        <Link
          href="/contact"
          data-testid="link-contact-cta"
          style={{
            ...BODY,
            color: "#151515",
            textDecoration: "underline",
            textUnderlineOffset: 3,
          }}
        >
          {c.devisCta}
        </Link>
      </div>

      {/* Tiny dev hint for overlay (only when overlay is on) */}
      {overlay && (
        <div
          style={{
            position: "fixed",
            bottom: 12,
            left: 12,
            zIndex: 10000,
            background: "#111",
            color: "#fff",
            fontFamily: "monospace",
            fontSize: 11,
            padding: "4px 8px",
            opacity: 0.85,
          }}
        >
          OVERLAY ON · press "o" to toggle
        </div>
      )}
    </div>
  );
}
