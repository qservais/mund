import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Cursor from "@/components/Cursor";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <Cursor />

      {/* Editorial fixed nav — paper-style, no mix-blend */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 xl:px-24 py-5 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/80">
        <a href="#hero" className="hover:text-accent transition-colors">
          mund.std
        </a>
        <span className="hidden md:inline text-foreground/40">
          Studio floral, Belgique
        </span>
        <nav className="flex items-baseline gap-6">
          <a href="#manifeste" className="hover:text-accent transition-colors">
            Édito
          </a>
          <a href="#travaux" className="hover:text-accent transition-colors">
            Travaux
          </a>
          <a href="#contact" className="hover:text-accent transition-colors">
            Contact
          </a>
        </nav>
      </header>

      <Hero />
      <Manifesto />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
