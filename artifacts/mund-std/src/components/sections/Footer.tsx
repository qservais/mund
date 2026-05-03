export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-foreground/20 px-6 md:px-12 xl:px-24 py-10">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-baseline justify-between gap-6 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/65">
        <span>
          <span className="text-foreground">mund.std</span>
          &nbsp;— Julie Ahn, Liège (BE)
        </span>
        <span className="hidden md:inline text-foreground/40">
          — Imprimé sur écran —
        </span>
        <span>© {year} — Tous droits réservés</span>
      </div>
    </footer>
  );
}
