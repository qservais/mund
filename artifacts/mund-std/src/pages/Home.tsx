import { Link } from "wouter";
import { useLang } from "@/context/LanguageContext";
import { plates } from "@/data/plates";

const copy = {
  fr: {
    label: "FLORAL DESIGN",
    desc: "mund est un studio de composition alliant les\nfleurs et les matériaux vivants.\nNous jouons avec les rythmes, le vide, équilibre et\ndéséquilibre.",
    caption: "le végétal devient sculpture,\nmoment, intention.",
    servicesLabel: "NOS SERVICES",
    col1: ["abonnement professionnel", "abonnement mensuel", "bouquets"],
    col2: ["mariages", "evenements", "set design", "scénographie"],
    devisLabel: "DEVIS & PROJETS",
    devisText: "nous accompagnons chaque projet de manière unique.\nvous souhaitez en savoir plus sur notre manière de travailler\nou vous souhaitez travailler avec nous ?",
    devisLink: "écrivez nous",
  },
  en: {
    label: "FLORAL DESIGN",
    desc: "mund is a composition studio combining flowers\nand living materials.\nWe play with rhythms, void, balance and\nimbalance.",
    caption: "the plant becomes sculpture,\nmoment, intention.",
    servicesLabel: "OUR SERVICES",
    col1: ["professional subscription", "monthly subscription", "bouquets"],
    col2: ["weddings", "events", "set design", "scenography"],
    devisLabel: "QUOTES & PROJECTS",
    devisText: "we support each project in a unique way.\nwould you like to know more about how we work\nor work with us?",
    devisLink: "write to us",
  },
};

export default function Home() {
  const { lang } = useLang();
  const c = copy[lang];

  // Hero image — most atmospheric studio composition
  const heroImg = plates[1].src;
  const heroAlt = plates[1].alt;

  // Service section images
  const svcImg1 = plates[4].src;
  const svcImg2 = plates[7].src;

  return (
    <div style={{ paddingTop: 0 }}>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "38% 62%",
          height: "calc(100vh - 110px)",
        }}
      >
        {/* Left — FLORAL DESIGN pushed to bottom */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "0 56px 52px 56px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--app-font-display)",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "hsl(var(--foreground))",
              marginBottom: "12px",
            }}
          >
            {c.label}
          </span>
          <p
            style={{
              fontFamily: "var(--app-font-sans)",
              fontSize: "11px",
              lineHeight: "1.85",
              color: "hsl(var(--foreground) / 0.72)",
              whiteSpace: "pre-line",
              maxWidth: "36ch",
            }}
          >
            {c.desc}
          </p>
        </div>

        {/* Right — hero photo constrained to hero height */}
        <div style={{ overflow: "hidden" }}>
          <img
            src={heroImg}
            alt={heroAlt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />
        </div>
      </section>

      {/* Caption — right-aligned, below photo */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "45% 55%",
        }}
      >
        <div />
        <p
          style={{
            fontFamily: "var(--app-font-sans)",
            fontSize: "10px",
            fontStyle: "italic",
            lineHeight: "1.7",
            color: "hsl(var(--foreground) / 0.55)",
            textAlign: "right",
            whiteSpace: "pre-line",
            padding: "12px 56px 0 0",
          }}
        >
          {c.caption}
        </p>
      </div>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          backgroundColor: "hsl(var(--foreground) / 0.12)",
          margin: "48px 56px 0",
        }}
      />

      {/* ── NOS SERVICES ───────────────────────────────────────── */}
      <section
        style={{
          padding: "96px 56px 0",
        }}
        data-testid="home-services"
      >
        {/* Label + two columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "160px 1fr 1fr",
            gap: "0 24px",
            marginBottom: "40px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--app-font-display)",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "hsl(var(--foreground))",
              paddingTop: "2px",
            }}
          >
            {c.servicesLabel}
          </span>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {c.col1.map((s) => (
              <li
                key={s}
                style={{
                  fontFamily: "var(--app-font-sans)",
                  fontSize: "11px",
                  lineHeight: "1.85",
                  color: "hsl(var(--foreground) / 0.68)",
                }}
              >
                {s}
              </li>
            ))}
          </ul>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {c.col2.map((s) => (
              <li
                key={s}
                style={{
                  fontFamily: "var(--app-font-sans)",
                  fontSize: "11px",
                  lineHeight: "1.85",
                  color: "hsl(var(--foreground) / 0.68)",
                }}
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Two square photos */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 220px))",
            gap: "16px",
            marginBottom: "0",
          }}
        >
          <div style={{ aspectRatio: "1/1", overflow: "hidden" }}>
            <img
              src={svcImg1}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
          <div style={{ aspectRatio: "1/1", overflow: "hidden" }}>
            <img
              src={svcImg2}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* ── DEVIS & PROJETS ────────────────────────────────────── */}
      <section
        style={{
          padding: "64px 56px 80px",
          display: "flex",
          justifyContent: "flex-end",
        }}
        data-testid="home-cta"
      >
        <div
          style={{
            textAlign: "right",
            maxWidth: "380px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--app-font-display)",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "hsl(var(--foreground))",
              display: "block",
              marginBottom: "14px",
            }}
          >
            {c.devisLabel}
          </span>
          <p
            style={{
              fontFamily: "var(--app-font-sans)",
              fontSize: "11px",
              lineHeight: "1.9",
              color: "hsl(var(--foreground) / 0.65)",
              whiteSpace: "pre-line",
              marginBottom: "18px",
            }}
          >
            {c.devisText}
          </p>
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--app-font-sans)",
              fontSize: "11px",
              fontStyle: "italic",
              color: "hsl(var(--foreground) / 0.75)",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
            data-testid="link-contact-cta"
          >
            {c.devisLink}
          </Link>
        </div>
      </section>
    </div>
  );
}
