import { Link } from "wouter";
import { type ReactNode } from "react";
import { useLang } from "@/context/LanguageContext";
import MobileShell from "./MobileShell";
import { useViewportWidth, ARTBOARD_W } from "./ArtboardShell";

const FF = '"Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif';

const NAV_ITEMS = [
  { label: "work",   href: "/floral"      },
  { label: "floral", href: "/abonnements" },
  { label: "past",   href: "/past"        },
  { label: "about",  href: "/about"       },
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

      {/* ── Hero plein écran avec nav en surimpression ─────────────── */}
      <div style={{ position: "relative", width: "100%", height: "88vh", overflow: "hidden" }}>
        <img
          src={heroSrc}
          alt={heroAlt}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        {/* Gradient top pour lisibilité de la nav */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0) 42%)",
          pointerEvents: "none",
        }} />

        {/* Nav — gauche, blanc */}
        <nav style={{ position: "absolute", top: 52, left: 130 }}>
          {NAV_ITEMS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              style={{
                display: "block",
                fontFamily: FF,
                fontSize: 20,
                fontWeight: 300,
                letterSpacing: "-0.06em",
                lineHeight: 0.85,
                color: "rgba(255,255,255,0.82)",
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Logo centré — blanc (invert) */}
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
            style={{
              width: 370, display: "block",
              filter: "brightness(0) invert(1)",
            }}
          />
        </Link>

        {/* Lang toggle — droite, blanc */}
        <button
          onClick={toggle}
          data-testid="lang-toggle"
          style={{
            position: "absolute", top: 52, right: 130,
            fontFamily: FF, fontSize: 18, fontWeight: 300, letterSpacing: "-0.06em",
            color: "rgba(255,255,255,0.75)",
            background: "transparent", border: "none", padding: 0, cursor: "pointer",
          }}
        >
          {lang === "fr" ? "en" : "fr"}
        </button>
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
        fontFamily: FF,
        fontSize: 13,
        fontWeight: 300,
        letterSpacing: "-0.06em",
        color: "rgba(0,0,0,0.4)",
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
