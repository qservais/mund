export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-foreground/20 px-6 md:px-12 xl:px-24 py-12">
      <div className="mx-auto max-w-6xl grid grid-cols-12 gap-x-6 gap-y-10">
        {/* Brand block */}
        <div className="col-span-12 md:col-span-4 flex flex-col gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground">
            MUND STUDIO
          </span>
          <p className="font-sans font-light text-sm text-foreground/60 leading-snug">
            Studio floral &amp; scénographies végétales
          </p>
          {/* Director name "Julie Ahn" provided in the project brief
              by the user (architecte running mund.std). */}
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/55">
            Direction — Julie Ahn
          </p>
        </div>

        {/* Atelier */}
        <div className="col-span-6 md:col-span-3 flex flex-col gap-3">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent">
            Atelier
          </span>
          {/* Address sourced from MUND STUDIO Instagram bio (@mund.std):
              "Rue Monulphe 7, Liège, Belgium 4000" */}
          <p className="font-sans text-sm leading-[1.6]">
            Rue Monulphe 7<br />
            4000 Liège, BE
          </p>
        </div>

        {/* Services */}
        <div className="col-span-6 md:col-span-3 flex flex-col gap-3">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent">
            Services
          </span>
          <ul className="font-sans text-sm leading-[1.7] text-foreground/85">
            <li>Design floral</li>
            <li>Événements</li>
            <li>Mariages</li>
            <li>Abonnements sur mesure</li>
          </ul>
        </div>

        {/* Réseaux */}
        <div className="col-span-12 md:col-span-2 flex flex-col gap-3">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent">
            Réseaux
          </span>
          <a
            href="https://instagram.com/mund.std"
            target="_blank"
            rel="noreferrer"
            className="font-sans text-sm hover:text-accent transition-colors w-fit"
          >
            @mund.std
          </a>
          <a
            href="https://www.facebook.com/p/Mund-Std-61561226727135/"
            target="_blank"
            rel="noreferrer"
            className="font-sans text-sm hover:text-accent transition-colors w-fit"
          >
            Facebook
          </a>
        </div>

        {/* Bottom strip */}
        <div className="col-span-12 mt-4 pt-6 border-t border-foreground/15 flex flex-col md:flex-row items-baseline justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/55">
          <span>Agenda 2026 &amp; 2027 — ouverts</span>
          <span className="hidden md:inline text-foreground/35">
            — Imprimé sur écran —
          </span>
          <span>© {year} MUND STUDIO</span>
        </div>
      </div>
    </footer>
  );
}
