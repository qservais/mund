import { Link, useLocation } from "wouter";
import { useState, useEffect, type ReactNode } from "react";
import { useLang } from "@/context/LanguageContext";

const FONT  = '"Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif';
const SERIF = '"Cormorant Garamond", "Times New Roman", Times, serif';

const NAV_ITEMS = [
  { label: "work",    href: "/floral"      },
  { label: "floral",  href: "/abonnements" },
  { label: "past",    href: "/past"        },
  { label: "about",   href: "/about"       },
  { label: "contact", href: "/contact"     },
];

/* ── Hamburger icon — two lines ──────────────────────────────────────────── */
function Hamburger({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
      style={{
        background: "transparent",
        border: "none",
        padding: 0,
        cursor: "pointer",
        width: 28,
        height: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexShrink: 0,
      }}
    >
      <span style={{
        display: "block",
        width: open ? 28 : 28,
        height: 1,
        backgroundColor: "#111",
        transformOrigin: "center",
        transform: open ? "translateY(9.5px) rotate(45deg)" : "none",
        transition: "transform 0.25s ease",
      }} />
      <span style={{
        display: "block",
        width: 20,
        height: 1,
        backgroundColor: "#111",
        opacity: open ? 0 : 1,
        transition: "opacity 0.15s ease",
      }} />
      <span style={{
        display: "block",
        width: open ? 28 : 28,
        height: 1,
        backgroundColor: "#111",
        transformOrigin: "center",
        transform: open ? "translateY(-9.5px) rotate(-45deg)" : "none",
        transition: "transform 0.25s ease",
      }} />
    </button>
  );
}

/* ── Full-screen overlay menu ────────────────────────────────────────────── */
function FullScreenMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [location] = useLocation();
  const { lang, toggle } = useLang();

  /* lock body scroll while open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* close on route change */
  useEffect(() => { onClose(); }, [location]);

  return (
    <div
      aria-hidden={!open}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 90,
        backgroundColor: "#f4f4f2",
        display: "flex",
        flexDirection: "column",
        padding: "0 36px",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transition: "opacity 0.3s ease",
        overflowY: "auto",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* spacer for sticky header height */}
      <div style={{ height: 62, flexShrink: 0 }} />

      {/* Nav links — large serif, full height centred */}
      <nav
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 0,
          paddingBottom: 48,
        }}
      >
        {NAV_ITEMS.map(({ label, href }) => {
          const isActive = location === href || (href !== "/" && location.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(52px, 14vw, 88px)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                color: isActive ? "#111" : "rgba(0,0,0,0.22)",
                textDecoration: "none",
                display: "block",
                textTransform: "uppercase",
              }}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom bar */}
      <div style={{
        paddingBottom: 36,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}>
        <div style={{
          fontFamily: FONT,
          fontSize: 12,
          fontWeight: 300,
          letterSpacing: "-0.04em",
          color: "rgba(0,0,0,0.4)",
          lineHeight: 1.6,
        }}>
          <div>MUND STUDIO</div>
          <div>Rue Monulphe 7, 4000 Liège</div>
          <a
            href="https://instagram.com/mund.std"
            target="_blank"
            rel="noreferrer"
            style={{ color: "rgba(0,0,0,0.4)", textDecoration: "none" }}
          >
            @mund.std
          </a>
        </div>

        <button
          onClick={toggle}
          style={{
            fontFamily: FONT,
            fontSize: 15,
            fontWeight: 300,
            letterSpacing: "-0.06em",
            color: "#151515",
            background: "transparent",
            border: "none",
            padding: 0,
            cursor: "pointer",
            display: "flex",
            gap: 2,
            alignItems: "baseline",
          }}
        >
          <span style={{ fontWeight: lang === "fr" ? 700 : 300, opacity: lang === "fr" ? 1 : 0.45 }}>fr</span>
          <span style={{ fontWeight: 300, opacity: 0.45 }}>{" | "}</span>
          <span style={{ fontWeight: lang === "en" ? 700 : 300, opacity: lang === "en" ? 1 : 0.45 }}>en</span>
        </button>
      </div>
    </div>
  );
}

/* ── Shell ───────────────────────────────────────────────────────────────── */
export default function MobileShell({ children }: { children: ReactNode }) {
  const { lang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

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
      {/* ── Sticky header ────────────────────────────────────────── */}
      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "#f4f4f2",
        borderBottom: menuOpen ? "1px solid transparent" : "1px solid rgba(0,0,0,0.1)",
        padding: "20px 20px 16px",
        display: "grid",
        gridTemplateColumns: "28px 1fr 28px",
        alignItems: "center",
        gap: 8,
      }}>
        <Hamburger open={menuOpen} onClick={() => setMenuOpen((v) => !v)} />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link href="/" style={{ display: "block", textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
            <img
              src="/svg/mund%20studio.svg"
              alt="mund studio"
              style={{ width: "clamp(100px, 35vw, 200px)", display: "block" }}
            />
          </Link>
        </div>

        {/* right slot — empty (lang toggle moved into fullscreen menu) */}
        <div />
      </header>

      {/* ── Full-screen menu overlay ──────────────────────────────── */}
      <FullScreenMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* ── Page content ─────────────────────────────────────────── */}
      <main style={{
        flex: 1,
        padding: "28px 20px 52px",
        maxWidth: "100%",
        overflowX: "hidden",
      }}>
        {children}
      </main>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer style={{
        borderTop: "1px solid rgba(0,0,0,0.1)",
        padding: "16px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        fontFamily: FONT,
        fontSize: 15,
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
