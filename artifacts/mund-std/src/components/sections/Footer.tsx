import logoUrl from "@assets/image_1777805879105.png";

export default function Footer() {
  return (
    <footer className="w-full bg-foreground text-background px-6 md:px-12 py-12 border-t border-background/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="w-32 md:w-48">
          <img 
            src={logoUrl} 
            alt="mund." 
            className="w-full h-auto invert mix-blend-screen opacity-90"
            loading="lazy"
          />
        </div>

        <div className="text-center md:text-right text-[10px] md:text-xs font-sans tracking-widest uppercase text-background/50">
          <p>© {new Date().getFullYear()} mund.std — Tous droits réservés.</p>
          <p className="mt-2">Photographies par mund.std</p>
        </div>

      </div>
    </footer>
  );
}
