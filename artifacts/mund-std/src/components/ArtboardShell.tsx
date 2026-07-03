import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { useLang } from "@/context/LanguageContext";
import MobileShell from "./MobileShell";

// ── Design tokens ────────────────────────────────────────────────────────────
export const SERIF: React.CSSProperties = {
  fontFamily: '"Cormorant Garamond", "Times New Roman", Times, serif',
  fontSize: 18,
  fontWeight: 700,
  letterSpacing: "-0.05em",
  textTransform: "uppercase",
  lineHeight: 1,
};

export const CTA_LINK: React.CSSProperties = {
  fontFamily: '"Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: 15,
  fontWeight: 300,
  letterSpacing: "-0.06em",
  lineHeight: 1.0,
  color: "#151515",
  textDecoration: "none",
  borderBottom: "1px solid rgba(0,0,0,0.55)",
  paddingBottom: 2,
};

export const BODY: React.CSSProperties = {
  fontFamily: '"Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: 15,
  fontWeight: 300,
  letterSpacing: "-0.06em",
  lineHeight: 1.0,
};

export const NAV_STYLE: React.CSSProperties = {
  fontFamily: '"Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: 15,
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

const NAV_ITEMS = [
  { label: "créations", href: "/floral",      testId: "nav-work"    },
  { label: "fleurs",    href: "/abonnements", testId: "nav-floral"  },
  { label: "archive",   href: "/past",        testId: "nav-past"    },
  { label: "à propos",  href: "/about",       testId: "nav-about"   },
  { label: "contact",   href: "/contact",     testId: "nav-contact" },
];

export const ARTBOARD_W = 1300;

export function useViewportWidth() {
  const [w, setW] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : ARTBOARD_W
  );
  useEffect(() => {
    const update = () => setW(window.innerWidth);
    window.addEventListener("resize", update);
    update();
    return () => window.removeEventListener("resize", update);
  }, []);
  return w;
}

type Props = {
  children: ReactNode;
  overlayRef?: string;
  minHeight?: number;
  mobile?: ReactNode;
};

export default function ArtboardShell({ children, overlayRef, minHeight = 2048, mobile }: Props) {
  const [location] = useLocation();
  const { lang, toggle } = useLang();
  const viewportW = useViewportWidth();
  const [overlay, setOverlay] = useState(() => {
    if (typeof window === "undefined") return false;
    return new URLSearchParams(window.location.search).get("overlay") === "1";
  });

  useEffect(() => {
    if (viewportW < ARTBOARD_W) return;
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === "o" || e.key === "O") && !e.metaKey && !e.ctrlKey) {
        const tag = (e.target as HTMLElement)?.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA") return;
        setOverlay((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [viewportW]);

  // ── Mobile path: flow layout, no scaling ──────────────────────────────────
  if (viewportW < ARTBOARD_W && mobile !== undefined) {
    return <MobileShell>{mobile}</MobileShell>;
  }

  // ── Desktop path: pixel-perfect 1300px artboard, unchanged ───────────────
  const scale = Math.min(1, viewportW / ARTBOARD_W);
  const scaledHeight = Math.round(minHeight * scale);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        height: scaledHeight,
        width: "100%",
        backgroundColor: "#f4f4f2",
      }}
    >
      <div
        style={{
          width: ARTBOARD_W,
          minHeight,
          flexShrink: 0,
          position: "relative",
          backgroundColor: "#f4f4f2",
          overflow: "hidden",
          color: "#151515",
          WebkitFontSmoothing: "antialiased",
          transform: `scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        {overlay && overlayRef && (
          <img
            src={overlayRef}
            alt=""
            style={{
              position: "absolute", top: 0, left: 0,
              width: ARTBOARD_W, height: minHeight,
              opacity: 0.35, pointerEvents: "none", zIndex: 9999,
            }}
          />
        )}

        <nav style={{ position: "absolute", top: 52, left: 130 }}>
          {NAV_ITEMS.map(({ label, href, testId }) => {
            const isActive = href === "/" ? location === "/" : location.startsWith(href);
            return (
              <Link
                key={label}
                href={href}
                data-testid={testId}
                style={{ ...NAV_STYLE, fontWeight: isActive ? 700 : 300 }}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/"
          data-testid="nav-brand"
          style={{
            position: "absolute", top: 46,
            left: "50%", transform: "translateX(-50%)",
            display: "block", zIndex: 10, textDecoration: "none",
          }}
        >
          <img
            src="/images/logo.png"
            alt="mund studio"
            style={{ width: 300, display: "block" }}
          />
        </Link>

        <button
          onClick={toggle}
          data-testid="lang-toggle"
          style={{
            position: "absolute", top: 52, right: 130,
            ...BODY, color: "#111",
            background: "transparent", border: "none", padding: 0, cursor: "pointer", zIndex: 10,
            display: "flex", gap: 2, alignItems: "baseline",
          }}
        >
          <span style={{ fontWeight: lang === "fr" ? 700 : 300, opacity: lang === "fr" ? 1 : 0.45 }}>fr</span>
          <span style={{ fontWeight: 300, opacity: 0.45 }}>{" | "}</span>
          <span style={{ fontWeight: lang === "en" ? 700 : 300, opacity: lang === "en" ? 1 : 0.45 }}>en</span>
        </button>

        {children}

        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          padding: "28px 130px",
          borderTop: "1px solid rgba(0,0,0,0.1)",
          display: "flex", justifyContent: "space-between", alignItems: "baseline",
          ...BODY, color: "rgba(0,0,0,0.4)",
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
    </div>
  );
}
