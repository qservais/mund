import { Helmet } from "react-helmet-async";
import MobileShell from "@/components/MobileShell";
import ArtboardShell from "@/components/ArtboardShell";

const FF = '"Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif';
const S  = '"Cormorant Garamond", "Times New Roman", Times, serif';

const B: React.CSSProperties = { fontFamily: FF, fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1.5 };
const H: React.CSSProperties = { fontFamily: S, fontSize: 18, fontWeight: 700, letterSpacing: "-0.05em", textTransform: "uppercase" as const, lineHeight: 1, marginBottom: 10 };

function Content() {
  return (
    <div style={{ maxWidth: 680, padding: "0 0 60px" }}>
      <h1 style={{ ...H, fontSize: 22, marginBottom: 32 }}>Politique de confidentialité</h1>

      <section style={{ marginBottom: 32 }}>
        <h2 style={H}>Responsable du traitement</h2>
        <p style={B}>
          MUND STUDIO — Julie Ahn<br />
          Rue Monulphe 7, 4000 Liège, Belgique<br />
          Contact : <a href="/contact" style={{ color: "inherit" }}>via le formulaire de contact</a>
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={H}>Données collectées</h2>
        <p style={B}>
          Lorsque vous utilisez les formulaires de contact ou d'abonnement, nous collectons :
        </p>
        <ul style={{ ...B, paddingLeft: 20 }}>
          <li>Nom et prénom</li>
          <li>Adresse email</li>
          <li>Numéro de téléphone (formulaires d'abonnement)</li>
          <li>Informations relatives à votre projet ou demande</li>
        </ul>
        <p style={B}>
          Ces données sont transmises directement à MUND STUDIO par email et ne sont pas stockées dans une base de données.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={H}>Finalité du traitement</h2>
        <p style={B}>
          Les données collectées sont utilisées exclusivement pour répondre à vos demandes de contact, devis ou abonnement.
          Elles ne sont ni vendues, ni cédées à des tiers.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={H}>Durée de conservation</h2>
        <p style={B}>
          Vos données sont conservées le temps nécessaire au traitement de votre demande,
          et au maximum 3 ans à compter de notre dernier échange.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={H}>Mesure d'audience (Google Analytics)</h2>
        <p style={B}>
          Ce site utilise Google Analytics via Google Tag Manager pour mesurer l'audience
          (pages visitées, durée, provenance). Ces outils ne sont activés qu'avec votre consentement
          explicite, via la bannière affichée lors de votre première visite.
        </p>
        <p style={B}>
          Si vous acceptez, Google Analytics dépose des cookies (<code>_ga</code>, <code>_gid</code>)
          valables 2 ans. Vous pouvez retirer votre consentement à tout moment en effaçant les cookies
          de votre navigateur.
        </p>
        <p style={B}>
          En savoir plus : <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>Politique de confidentialité Google</a>
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={H}>Vos droits (RGPD)</h2>
        <p style={B}>
          Conformément au Règlement (UE) 2016/679, vous disposez des droits suivants :
        </p>
        <ul style={{ ...B, paddingLeft: 20 }}>
          <li>Droit d'accès à vos données (art. 15)</li>
          <li>Droit de rectification (art. 16)</li>
          <li>Droit à l'effacement (art. 17)</li>
          <li>Droit à la limitation du traitement (art. 18)</li>
          <li>Droit d'opposition (art. 21)</li>
        </ul>
        <p style={B}>
          Pour exercer ces droits, contactez-nous via le formulaire de contact.
          En cas de litige, vous pouvez introduire une réclamation auprès de l'
          <a href="https://www.autoriteprotectiondonnees.be" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>Autorité de protection des données (APD)</a> belge.
        </p>
      </section>

      <p style={{ ...B, color: "rgba(0,0,0,0.45)", marginTop: 48 }}>
        Dernière mise à jour : juillet 2026
      </p>
    </div>
  );
}

function MobileContent() {
  return (
    <MobileShell>
      <Content />
    </MobileShell>
  );
}

export default function Confidentialite() {
  return (
    <>
      <Helmet>
        <title>Politique de confidentialité — MUND STUDIO</title>
        <meta name="description" content="Politique de confidentialité de MUND STUDIO — données collectées, droits RGPD, cookies." />
        <link rel="canonical" href="https://mund.be/confidentialite" />
        <meta name="robots" content="noindex" />
      </Helmet>
      <ArtboardShell minHeight={900} mobile={<MobileContent />}>
        <div style={{ position: "absolute", left: 130, top: 160, width: 800 }}>
          <Content />
        </div>
      </ArtboardShell>
    </>
  );
}
