import { useEffect, useState } from "react";

const STORAGE_KEY = "mund_consent";

type Consent = "accepted" | "refused" | null;

function getConsent(): Consent {
  try { return (localStorage.getItem(STORAGE_KEY) as Consent) ?? null; } catch { return null; }
}

function setConsent(v: "accepted" | "refused") {
  try { localStorage.setItem(STORAGE_KEY, v); } catch { /* noop */ }
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function gtag(...args: unknown[]) {
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(args);
}

export function ConsentBanner() {
  const [consent, setConsentState] = useState<Consent>(() => getConsent());

  useEffect(() => {
    if (consent === "accepted") {
      gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
  }, [consent]);

  if (consent !== null) return null;

  const FF = '"Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif';

  const accept = () => { setConsent("accepted"); setConsentState("accepted"); };
  const refuse = () => { setConsent("refused");  setConsentState("refused"); };

  return (
    <div
      role="dialog"
      aria-label="Gestion des cookies"
      style={{
        position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 9999,
        backgroundColor: "#faf9f7",
        borderTop: "1px solid rgba(0,0,0,0.12)",
        padding: "16px 24px",
        display: "flex", flexWrap: "wrap", alignItems: "center",
        gap: "12px 32px",
      }}
    >
      <p style={{
        fontFamily: FF, fontSize: 13, fontWeight: 300, letterSpacing: "-0.03em",
        margin: 0, flex: "1 1 260px", color: "rgba(0,0,0,0.70)",
      }}>
        Ce site utilise Google Analytics pour mesurer l'audience. Aucun cookie n'est déposé sans votre accord.{" "}
        <a
          href="/confidentialite"
          style={{ color: "rgba(0,0,0,0.70)", textDecoration: "underline" }}
        >
          En savoir plus
        </a>
      </p>
      <div style={{ display: "flex", gap: 16, flexShrink: 0 }}>
        <button
          onClick={refuse}
          style={{
            fontFamily: FF, fontSize: 12, fontWeight: 300, letterSpacing: "0.18em",
            textTransform: "uppercase", background: "transparent", border: "none",
            borderBottom: "1px solid rgba(0,0,0,0.30)", paddingBottom: 1,
            cursor: "pointer", color: "rgba(0,0,0,0.45)",
          }}
        >
          Refuser
        </button>
        <button
          onClick={accept}
          style={{
            fontFamily: FF, fontSize: 12, fontWeight: 300, letterSpacing: "0.18em",
            textTransform: "uppercase", background: "transparent", border: "none",
            borderBottom: "1px solid #151515", paddingBottom: 1,
            cursor: "pointer", color: "#151515",
          }}
        >
          Accepter
        </button>
      </div>
    </div>
  );
}
