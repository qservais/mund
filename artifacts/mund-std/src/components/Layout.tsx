import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, type ReactNode } from "react";
import Footer from "@/components/sections/Footer";

const navItems: { href: string; label: string }[] = [
  { href: "/", label: "Studio" },
  { href: "/projets", label: "Projets" },
  { href: "/contact", label: "Contact" },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const [location] = useLocation();
  const active = location === href;
  return (
    <Link
      href={href}
      className={`relative inline-flex items-baseline transition-colors hover:text-accent ${
        active ? "text-foreground" : "text-foreground/60"
      }`}
      data-testid={`nav-${label.toLowerCase()}`}
    >
      <span>{label}</span>
      {active && (
        <motion.span
          layoutId="nav-underline"
          className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 xl:px-24 py-5 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/80 bg-background/70 backdrop-blur-sm">
        <Link
          href="/"
          className="hover:text-accent transition-colors"
          data-testid="nav-brand"
        >
          MUND STUDIO
        </Link>
        {/* Address sourced from MUND STUDIO Instagram bio (@mund.std):
            "Rue Monulphe 7, Liège, Belgium 4000" */}
        <span className="hidden md:inline text-foreground/40">
          Rue Monulphe 7 · 4000 Liège
        </span>
        <nav className="flex items-baseline gap-6">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>
      </header>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1"
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <Footer />
    </main>
  );
}
