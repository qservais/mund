import { Helmet } from "react-helmet-async";
import ArtboardShell from "@/components/ArtboardShell";

const FF = '"Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif';
const S  = '"Cormorant Garamond", "Times New Roman", Times, serif';

const B: React.CSSProperties = { fontFamily: FF, fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1.5 };
const H: React.CSSProperties = { fontFamily: S, fontSize: 18, fontWeight: 700, letterSpacing: "-0.05em", textTransform: "uppercase" as const, lineHeight: 1, marginBottom: 10 };

function Content() {
  return (
    <div style={{ maxWidth: 680, padding: "0 0 60px" }}>
      <h1 style={{ ...H, fontSize: 22, marginBottom: 32 }}>Mentions légales</h1>

      <section style={{ marginBottom: 32 }}>
        <h2 style={H}>Éditeur du site</h2>
        <p style={B}>
          MUND STUDIO<br />
          Rue Monulphe 7 — 4000 Liège, Belgique<br />
          Directrice de publication : Julie Ahn<br />
          Contact : <a href="/contact" style={{ color: "inherit" }}>via le formulaire de contact</a>
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={H}>Hébergement</h2>
        <p style={B}>
          Replit Inc.<br />
          767 Bryant St., Suite 201 — San Francisco, CA 94107, USA<br />
          <a href="https://replit.com" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>replit.com</a>
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={H}>Propriété intellectuelle</h2>
        <p style={B}>
          L'ensemble du contenu de ce site (textes, photographies, compositions visuelles) est protégé par le droit d'auteur.
          Toute reproduction, même partielle, sans autorisation préalable est interdite.
        </p>
        <p style={B}>
          Photographies : © MUND STUDIO — Julie Ahn, tous droits réservés.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={H}>Liens externes</h2>
        <p style={B}>
          Ce site peut contenir des liens vers des sites tiers. MUND STUDIO n'est pas responsable du contenu de ces sites.
        </p>
      </section>

      <p style={{ ...B, color: "rgba(0,0,0,0.45)", marginTop: 48 }}>
        Dernière mise à jour : juillet 2026
      </p>
    </div>
  );
}

export default function MentionsLegales() {
  return (
    <>
      <Helmet>
        <title>Mentions légales — MUND STUDIO</title>
        <meta name="description" content="Mentions légales du site MUND STUDIO — éditeur, hébergement, propriété intellectuelle." />
        <link rel="canonical" href="https://mund.be/mentions-legales" />
        <meta name="robots" content="noindex" />
      </Helmet>
      <ArtboardShell minHeight={700} mobile={<Content />}>
        <div style={{ position: "absolute", left: 130, top: 160, width: 800 }}>
          <Content />
        </div>
      </ArtboardShell>
    </>
  );
}
