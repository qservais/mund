import { Link, useLocation } from "wouter";
import { type ReactNode } from "react";
import { useLang } from "@/context/LanguageContext";

const FONT = '"Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif';

const NAV_ITEMS = [
  { label: "work",   href: "/floral"      },
  { label: "floral", href: "/abonnements" },
  { label: "past",   href: "/past"        },
  { label: "about",  href: "/about"       },
];

export default function MobileShell({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const { lang, toggle } = useLang();

  return (
    <div style={{
      minHeight: "100vh",
      width: "100%",
      maxWidth: "100vw",
      overflowX: "hidden",
      backgroundColor: "#f4f4f2",
      color: "#151515",
      display: "flex",
      flexDirection: "column",
      WebkitFontSmoothing: "antialiased",
    }}>
      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        backgroundColor: "#f4f4f2",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        padding: "14px 20px 10px",
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        alignItems: "start",
        gap: 8,
      }}>
        <nav style={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {NAV_ITEMS.map(({ label, href }) => {
            const isActive = location === href || (href !== "/" && location.startsWith(href));
            return (
              <Link key={href} href={href} style={{
                fontFamily: FONT,
                fontSize: 15,
                fontWeight: isActive ? 700 : 300,
                letterSpacing: "-0.06em",
                lineHeight: 1.2,
                color: "#111",
                textDecoration: "none",
                display: "block",
              }}>
                {label}
              </Link>
            );
          })}
        </nav>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link href="/" style={{ display: "block", textDecoration: "none" }}>
            <img
              src="/svg/mund%20studio.svg"
              alt="mund studio"
              style={{ width: "clamp(110px, 38vw, 220px)", display: "block" }}
            />
          </Link>
        </div>

        <button
          onClick={toggle}
          style={{
            fontFamily: FONT,
            fontSize: 15,
            fontWeight: 300,
            letterSpacing: "-0.06em",
            color: "rgba(0,0,0,0.5)",
            background: "transparent",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          {lang === "fr" ? "en" : "fr"}
        </button>
      </header>

      <main style={{ flex: 1, padding: "28px 20px 52px", maxWidth: "100%", overflowX: "hidden" }}>
        {children}
      </main>

      <footer style={{
        borderTop: "1px solid rgba(0,0,0,0.1)",
        padding: "16px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        fontFamily: FONT,
        fontSize: 12,
        fontWeight: 300,
        letterSpacing: "-0.05em",
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
