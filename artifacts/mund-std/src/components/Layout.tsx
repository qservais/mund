import { Link, useLocation } from "wouter";
import { type ReactNode, useEffect } from "react";
import { useLang } from "@/context/LanguageContext";

const FONT_BODY = '"Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif';
const FONT_GULDSCRIPT = '"GuldScript", cursive';

const navItems = [
  { href: "/floral",      label: "work"   },
  { href: "/abonnements", label: "floral" },
  { href: "/past",        label: "past"   },
  { href: "/about",       label: "about"  },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const [location] = useLocation();
  const active = location === href || (href !== "/" && location.startsWith(href));
  return (
    <Link
      href={href}
      style={{
        display: "block",
        fontFamily: FONT_BODY,
        fontSize: 18,
        fontWeight: 300,
        letterSpacing: "-0.06em",
        lineHeight: 0.9,
        color: active ? "#111" : "rgba(0,0,0,0.38)",
        textDecoration: "none",
        transition: "color 0.2s",
      }}
      data-testid={`nav-${label}`}
    >
      {label}
    </Link>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const { lang, toggle } = useLang();

  const artboardRoutes = ["/", "/floral", "/abonnements", "/past", "/about"];
  const isArtboard = artboardRoutes.includes(location);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);

  if (isArtboard) {
    return (
      <div className="relative min-h-screen w-full bg-background text-foreground">
        <main key={location} style={{ animation: "pageFadeIn 0.25s ease forwards" }}>
          {children}
        </main>
      </div>
    );
  }

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
        backgroundColor: "#f4f4f2",
        color: "#151515",
        display: "flex",
        flexDirection: "column",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 40,
        backgroundColor: "#f4f4f2",
      }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr auto 1fr",
          alignItems: "start",
          padding: "24px 130px 16px",
        }}>
          {/* Left: nav */}
          <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {navItems.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </nav>

          {/* Center: GuldScript logo */}
          <Link
            href="/"
            data-testid="nav-brand"
            style={{
              fontFamily: FONT_GULDSCRIPT,
              fontSize: 56,
              fontWeight: "normal",
              letterSpacing: "0.01em",
              color: "#111",
              textDecoration: "none",
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            mund studio
          </Link>

          {/* Right: lang toggle */}
          <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-start" }}>
            <button
              onClick={toggle}
              data-testid="lang-toggle"
              style={{
                fontFamily: FONT_BODY,
                fontSize: 18,
                fontWeight: 300,
                letterSpacing: "-0.06em",
                color: "rgba(0,0,0,0.45)",
                background: "transparent",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              {lang === "fr" ? "en" : "fr"}
            </button>
          </div>
        </div>
        <div style={{ height: 1, backgroundColor: "rgba(0,0,0,0.1)", margin: "0 130px" }} />
      </header>

      <main
        key={location}
        style={{ flex: 1, paddingTop: 130, animation: "pageFadeIn 0.25s ease forwards" }}
      >
        {children}
      </main>

      <footer style={{
        padding: "22px 130px",
        borderTop: "1px solid rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        fontFamily: FONT_BODY,
        fontSize: 13,
        fontWeight: 300,
        letterSpacing: "-0.06em",
        color: "rgba(0,0,0,0.4)",
      }}>
        <span>MUND STUDIO — Rue Monulphe 7, 4000 Liège, Belgique</span>
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
