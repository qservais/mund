import { Link, useLocation } from "wouter";
import { type ReactNode } from "react";
import { useLang } from "@/context/LanguageContext";
import MobileShell from "./MobileShell";
import { useViewportWidth, ARTBOARD_W, NAV_STYLE, BODY, GULDSCRIPT } from "./ArtboardShell";

const NAV_ITEMS = [
  { label: "work",    href: "/floral",      testId: "nav-work"    },
  { label: "floral",  href: "/abonnements", testId: "nav-floral"  },
  { label: "past",    href: "/past",        testId: "nav-past"    },
  { label: "about",   href: "/about",       testId: "nav-about"   },
  { label: "contact", href: "/contact",     testId: "nav-contact" },
];

type Props = {
  heroSrc: string;
  heroAlt: string;
  children: ReactNode;
  mobile: ReactNode;
};

export default function ProjectShell({ heroSrc, heroAlt, children, mobile }: Props) {
  const viewportW = useViewportWidth();
  const { lang, toggle } = useLang();
  const [location] = useLocation();

  /* ── Mobile ─────────────────────────────────────────────────────────── */
  if (viewportW < ARTBOARD_W) {
    return <MobileShell>{mobile}</MobileShell>;
  }

  /* ── Desktop ────────────────────────────────────────────────────────── */
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#f4f4f2",
      color: "#151515",
      WebkitFontSmoothing: "antialiased",
    }}>

      {/* ── Header — bloc 1300px centré, identique à ArtboardShell ─── */}
      <header style={{ backgroundColor: "#f4f4f2", height: 160, overflow: "hidden" }}>
        <div style={{
          position: "relative",
          width: ARTBOARD_W,
          height: 160,
          margin: "0 auto",
        }}>
          {/* Nav gauche */}
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

          {/* Logo centré dans le bloc 1300px */}
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
              src="/svg/mund%20studio.svg"
              alt="mund studio"
              style={{ width: 300, display: "block" }}
            />
          </Link>

          {/* Lang toggle droite */}
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
        </div>
      </header>

      {/* ── Hero plein écran sous le header ─────────────────────────── */}
      <div style={{ width: "100%", height: "80vh", overflow: "hidden" }}>
        <img
          src={heroSrc}
          alt={heroAlt}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      {/* ── Contenu ──────────────────────────────────────────────────── */}
      <main>
        {children}
      </main>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <footer style={{
        padding: "22px 130px",
        borderTop: "1px solid rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
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
      </footer>
    </div>
  );
}
