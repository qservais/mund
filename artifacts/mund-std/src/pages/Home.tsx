import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Cursor from "@/components/Cursor";
import { useEffect } from "react";

export default function Home() {
  // Ensure we start at top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
      <Cursor />
      
      {/* Navigation / Header simple */}
      <header className="fixed top-0 left-0 w-full z-40 p-6 md:p-10 flex justify-between items-start mix-blend-difference text-white">
        <a href="#hero" className="text-sm font-sans tracking-widest uppercase">
          Bruxelles
        </a>
        <div className="flex flex-col items-end gap-1">
          <a href="#travaux" className="text-sm font-sans tracking-widest uppercase hover:italic">Travaux</a>
          <a href="#contact" className="text-sm font-sans tracking-widest uppercase hover:italic">Contact</a>
        </div>
      </header>

      <Hero />
      <Manifesto />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
