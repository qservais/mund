import { useEffect, useState, type ReactNode } from "react";
import { Link } from "wouter";
import { useLang } from "@/context/LanguageContext";

// ── Design tokens ────────────────────────────────────────────────────────────
export const SERIF: React.CSSProperties = {
  fontFamily: '"Cormorant Garamond", "Times New Roman", Times, serif',
  fontSize: 22,
  fontWeight: 700,
  letterSpacing: "-0.05em",
  textTransform: "uppercase",
  lineHeight: 1,
};

export const BODY: React.CSSProperties = {
  fontFamily: '"Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: 18,
  fontWeight: 300,
  letterSpacing: "-0.06em",
  lineHeight: 1.0,
};

export const NAV_STYLE: React.CSSProperties = {
  fontFamily: '"Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: 20,
  lineHeight: 0.85,
  fontWeight: 300,
  letterSpacing: "-0.06em",
  color: "#111",
  display: "block",
  textDecoration: "none",
};

export const GULDSCRIPT: React.CSSProperties = {
  fontFamily: '"GuldScript", cursive',
  fontWeight: "normal",
  letterSpacing: "0.01em",
};

// Nav: work→/ (home), floral→/floral, past→/past, about→/about
const NAV_ITEMS = [
  { label: "work",   href: "/",       testId: "nav-work"   },
  { label: "floral", href: "/floral", testId: "nav-floral" },
  { label: "past",   href: "/past",   testId: "nav-past"   },
  { label: "about",  href: "/about",  testId: "nav-about"  },
];

type Props = {
  children: ReactNode;
  overlayRef?: string;
  minHeight?: number;
};

export default function ArtboardShell({ children, overlayRef, minHeight = 2048 }: Props) {
  const { lang, toggle } = useLang();
  const [overlay, setOverlay] = useState(() => {
    if (typeof window === "undefined") return false;
    return new URLSearchParams(window.location.search).get("overlay") === "1";
  });

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

  return (
    <div
      style={{
        width: 1300,
        minHeight,
        margin: "0 auto",
        position: "relative",
        backgroundColor: "#f4f4f2",
        overflow: "hidden",
        color: "#151515",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* Overlay reference image */}
      {overlay && overlayRef && (
        <img
          src={overlayRef}
          alt=""
          style={{
            position: "absolute", top: 0, left: 0,
            width: 1300, height: minHeight,
            opacity: 0.35, pointerEvents: "none", zIndex: 9999,
          }}
        />
      )}

      {/* Nav — top-left, stacked */}
      <nav style={{ position: "absolute", top: 52, left: 130 }}>
        {NAV_ITEMS.map(({ label, href, testId }) => (
          <Link key={href} href={href} style={NAV_STYLE} data-testid={testId}>
            {label}
          </Link>
        ))}
      </nav>

      {/* Logo — GuldScript centré */}
      <Link
        href="/"
        data-testid="nav-brand"
        style={{
          position: "absolute", top: 42,
          left: "50%", transform: "translateX(-50%)",
          display: "block", whiteSpace: "nowrap", zIndex: 10,
          ...GULDSCRIPT,
          fontSize: 60, color: "#111", textDecoration: "none", lineHeight: 1,
        }}
      >
        mund studio
      </Link>

      {/* FR/EN toggle — top-right */}
      <button
        onClick={toggle}
        data-testid="lang-toggle"
        style={{
          position: "absolute", top: 52, right: 130,
          ...BODY, fontSize: 18, color: "#111",
          background: "transparent", border: "none", padding: 0, cursor: "pointer", zIndex: 10,
        }}
      >
        {lang === "fr" ? "en" : "fr"}
      </button>

      {/* Page content */}
      {children}

      {/* Footer — bas de l'artboard */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "22px 130px",
        borderTop: "1px solid rgba(0,0,0,0.1)",
        display: "flex", justifyContent: "space-between", alignItems: "baseline",
        ...BODY, fontSize: 13, color: "rgba(0,0,0,0.4)",
      }}>
        <span>MUND STUDIO — Rue Monulphe 7, 4000 Liège</span>
        <span>vides et pleins / chaos et structure</span>
        <a
          href="https://instagram.com/mund.std"
          target="_blank"
          rel="noreferrer"
          style={{ color: "rgba(0,0,0,0.4)", textDecoration: "none" }}
        >
          @mund.std
        </a>
      </div>

      {/* Dev hint */}
      {overlay && (
        <div style={{
          position: "fixed", bottom: 12, left: 12, zIndex: 10000,
          background: "#111", color: "#fff",
          fontFamily: "monospace", fontSize: 11, padding: "4px 8px", opacity: 0.85,
        }}>
          OVERLAY ON · press "o" to toggle
        </div>
      )}
    </div>
  );
}
