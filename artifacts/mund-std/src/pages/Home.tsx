import ArtboardShell, { SERIF, BODY } from "@/components/ArtboardShell";
import { Link } from "wouter";
import { useLang } from "@/context/LanguageContext";
import { plates } from "@/data/plates";
import overlayRef from "@assets/1_1778522805215.png";

const copy = {
  fr: {
    floralTitle: "FLORAL DESIGN",
    floralBody: [
      "mund est un studio de composition alliant les",
      "fleurs et les matériaux vivants.",
      "Nous jouons avec les rythmes, le vide, équilibre et",
      "déséquilibre.",
    ],
    caption: ["le végétal devient sculpture", "moment, intention."],
    servicesTitle: "NOS SERVICES",
    col1: ["abonnement professionnel", "abonnement mensuel", "bouquets"],
    col2: ["mariages", "evenements", "set design", "scénographie"],
    devisTitle: "DEVIS & PROJETS",
    devisBody: [
      "nous accompagnons chaque projet de manière unique.",
      "vous souhaitez en savoir plus sur notre manière de travailler",
      "ou vous souhaitez travailler avec nous ?",
    ],
    devisCta: "écrivez nous",
  },
  en: {
    floralTitle: "FLORAL DESIGN",
    floralBody: [
      "mund is a composition studio combining flowers",
      "and living materials.",
      "We play with rhythms, void, balance and",
      "imbalance.",
    ],
    caption: ["the plant becomes sculpture", "moment, intention."],
    servicesTitle: "OUR SERVICES",
    col1: ["professional subscription", "monthly subscription", "bouquets"],
    col2: ["weddings", "events", "set design", "scenography"],
    devisTitle: "QUOTES & PROJECTS",
    devisBody: [
      "we support each project in a unique way.",
      "would you like to know more about how we work",
      "or work with us?",
    ],
    devisCta: "write to us",
  },
};

export default function Home() {
  const { lang } = useLang();
  const c = copy[lang];
  const heroImg = plates[1].src;
  const svc1 = plates[4].src;
  const svc2 = plates[7].src;

  return (
    <ArtboardShell overlayRef={overlayRef}>
      {/* Hero image — left 665, top 26 */}
      <img
        src={heroImg}
        alt=""
        style={{ position: "absolute", left: 665, top: 26, width: 570, height: 800, objectFit: "cover" }}
        data-testid="home-hero"
      />

      {/* FLORAL DESIGN — left 112, top 720 */}
      <div style={{ position: "absolute", left: 112, top: 720, width: 330 }}>
        <div style={{ ...SERIF, marginBottom: 18 }}>{c.floralTitle}</div>
        <p style={{ ...BODY, margin: 0 }}>
          {c.floralBody.map((l, i) => <span key={i}>{l}<br /></span>)}
        </p>
      </div>

      {/* Caption — left 1030, top 860 */}
      <div style={{
        position: "absolute", left: 1030, top: 860,
        textAlign: "right", ...BODY, fontStyle: "italic", fontSize: 14,
      }}>
        {c.caption.map((l, i) => <span key={i}>{l}<br /></span>)}
      </div>

      {/* HR — left 180, top 990 */}
      <div style={{
        position: "absolute", left: 180, top: 990,
        width: 940, height: 1, backgroundColor: "rgba(0,0,0,0.18)",
      }} />

      {/* NOS SERVICES — left 130, top 1225 */}
      <div style={{ position: "absolute", left: 130, top: 1225 }} data-testid="home-services">
        <div style={{ ...SERIF, marginBottom: 18 }}>{c.servicesTitle}</div>
        <div style={{ display: "flex", gap: 80 }}>
          <div style={BODY}>{c.col1.map((s, i) => <div key={i}>{s}</div>)}</div>
          <div style={BODY}>{c.col2.map((s, i) => <div key={i}>{s}</div>)}</div>
        </div>
      </div>

      {/* Service photos */}
      <img src={svc1} alt="" style={{ position: "absolute", left: 130, top: 1340, width: 240, height: 240, objectFit: "cover" }} />
      <img src={svc2} alt="" style={{ position: "absolute", left: 410, top: 1340, width: 240, height: 240, objectFit: "cover" }} />

      {/* DEVIS & PROJETS — left 815, top 1580 */}
      <div style={{ position: "absolute", left: 815, top: 1580, width: 360, textAlign: "right" }} data-testid="home-cta">
        <div style={{ ...SERIF, marginBottom: 18 }}>{c.devisTitle}</div>
        <p style={{ ...BODY, margin: 0, marginBottom: 14 }}>
          {c.devisBody.map((l, i) => <span key={i}>{l}<br /></span>)}
        </p>
        <Link href="/contact" data-testid="link-contact-cta" style={{ ...BODY, color: "#151515", textDecoration: "underline", textUnderlineOffset: 3 }}>
          {c.devisCta}
        </Link>
      </div>
    </ArtboardShell>
  );
}
