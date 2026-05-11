import { Link, useLocation } from "wouter";
import { type ReactNode, useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import logo from "@assets/image001_1778521429706.png";

const navItems = [
  { href: "/", label: "work" },
  { href: "/floral", label: "floral" },
  { href: "/past", label: "past" },
  { href: "/about", label: "about" },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const [location] = useLocation();
  const active = location === href || (href !== "/" && location.startsWith(href));
  return (
    <Link
      href={href}
      className={`block font-mono text-[10px] uppercase tracking-[0.3em] transition-colors hover:text-accent ${
        active ? "text-foreground" : "text-foreground/45"
      }`}
      data-testid={`nav-${label}`}
    >
      {label}
    </Link>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const { lang, toggle } = useLang();

  // Artboard pages render their own nav/logo absolutely — bypass shared chrome
  const artboardRoutes = ["/", "/floral", "/abonnements", "/past", "/about"];
  const isArtboard = artboardRoutes.includes(location);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);

  if (isArtboard) {
    return (
      <div className="relative min-h-screen w-full bg-background text-foreground">
        <main
          key={location}
          style={{ animation: "pageFadeIn 0.25s ease forwards" }}
        >
          {children}
        </main>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-40 bg-background">
        {/* Desktop: 3-zone header */}
        <div className="hidden md:grid grid-cols-3 px-8 xl:px-14 pt-6 pb-4">
          {/* Left: stacked nav */}
          <nav className="flex flex-col gap-[6px] justify-start">
            {navItems.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </nav>

          {/* Center: logo */}
          <div className="flex items-start justify-center">
            <Link href="/" data-testid="nav-brand">
              <img
                src={logo}
                alt="mund studio"
                className="max-h-[52px] w-auto mix-blend-multiply"
              />
            </Link>
          </div>

          {/* Right: language toggle */}
          <div className="flex justify-end items-start">
            <button
              onClick={toggle}
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/45 hover:text-accent transition-colors"
              data-testid="lang-toggle"
            >
              {lang === "fr" ? "en" : "fr"}
            </button>
          </div>
        </div>

        {/* Mobile: logo top + nav below */}
        <div className="md:hidden px-6 pt-5 pb-3 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <Link href="/" data-testid="nav-brand-mobile">
              <img
                src={logo}
                alt="mund studio"
                className="max-h-[36px] w-auto mix-blend-multiply"
              />
            </Link>
            <button
              onClick={toggle}
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/45"
              data-testid="lang-toggle-mobile"
            >
              {lang === "fr" ? "en" : "fr"}
            </button>
          </div>
          <nav className="flex gap-5">
            {navItems.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </nav>
        </div>

        <div className="h-px bg-foreground/10 mx-6 md:mx-8 xl:mx-14" />
      </header>

      <main
        key={location}
        className="flex-1 pt-[100px] md:pt-[110px]"
        style={{ animation: "pageFadeIn 0.25s ease forwards" }}
      >
        {children}
      </main>

      <footer className="px-6 md:px-8 xl:px-14 py-8 border-t border-foreground/10 flex flex-wrap items-baseline justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.25em] text-foreground/35">
        <span>© {new Date().getFullYear()} Mund Studio — Rue Monulphe 7, 4000 Liège</span>
        <a
          href="https://instagram.com/mund.std"
          target="_blank"
          rel="noreferrer"
          className="hover:text-accent transition-colors"
        >
          @mund.std
        </a>
      </footer>
    </div>
  );
}
