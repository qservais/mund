import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground px-6">
      <div className="max-w-md text-center flex flex-col gap-6">
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-foreground/60">
          Erreur 404
        </span>
        <h1 className="font-display font-light uppercase text-5xl md:text-6xl leading-none">
          Page introuvable.
        </h1>
        <p className="font-sans text-sm md:text-base text-foreground/70 leading-relaxed">
          La page que vous cherchez s'est égarée parmi les fleurs.
        </p>
        <Link
          href="/"
          className="font-sans text-[11px] tracking-[0.25em] uppercase border-b border-foreground/40 pb-1 self-center hover:opacity-60 transition-all"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
