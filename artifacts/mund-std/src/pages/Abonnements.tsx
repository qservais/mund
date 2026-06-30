import { Link } from "wouter";
import ArtboardShell, { SERIF, BODY, CTA_LINK } from "@/components/ArtboardShell";
import { useLang } from "@/context/LanguageContext";
import overlayRef from "@assets/floral_1778527882896.png";
const imgMain = "/images/svc1.webp";

const F = '"Helvetica Now Display","Helvetica Neue",Helvetica,Arial,sans-serif';
const S = '"Cormorant Garamond","Times New Roman",serif';

const copy = {
  fr: {
    aboTitle: "NOS ABONNEMENTS",
    aboSub:   "retrouver notre travail floral pour vos espaces\nou votre habitation.",

    proTitle:  "ESPACES & PROFESSIONNELS",
    proBody:   "nous proposons un travail floral récurent pour vos espaces professionnels,\nhôtels, boutiques, bureaux, cabinets...\nchaque intervention est développée sur mesure,\npensée en lien avec l'identité de l'espace.",
    proItalic: "nous composons avec votre image et votre espace.",
    proCta:    "s'inscrire ou en savoir plus →",

    partTitle:  "PARTICULIERS",
    partBody:   "chaque deuxième jeudi du mois, nous vous proposons un bouquet surprise\ncomposé selon les arrivages du moment.\nune manière d'inviter notre travail chez vous en le voyant évoluer\nau fil des saisons ou de manière occasionnelle.",
    partItalic: "un rendez-vous mensuel autour des fleurs de saison.",
    partCta:    "s'inscrire ou en savoir plus →",
  },
  en: {
    aboTitle: "OUR SUBSCRIPTIONS",
    aboSub:   "find our floral work for your spaces\nor your home.",

    proTitle:  "SPACES & PROFESSIONALS",
    proBody:   "we offer recurring floral work for your professional spaces,\nhotels, boutiques, offices, practices...\neach intervention is developed to measure,\nconceived in relation to the identity of the space.",
    proItalic: "we compose with your image and your space.",
    proCta:    "sign up or learn more →",

    partTitle:  "PRIVATE CLIENTS",
    partBody:   "every second thursday of the month, we offer you a surprise bouquet\ncomposed according to current arrivals.\na way to invite our work into your home,\nwatching it evolve with the seasons or on an occasional basis.",
    partItalic: "a monthly appointment around seasonal flowers.",
    partCta:    "sign up or learn more →",
  },
};

function AbonnementsMobile({ c }: { c: typeof copy.fr }) {
  const t = (s: string) => s.split("\n").join(" ");
  return (
    <div>
      <div style={{ fontFamily: S, fontSize: 18, fontWeight: 700, letterSpacing: "-0.05em", textTransform: "uppercase", lineHeight: 1, marginBottom: 8 }}>{c.aboTitle}</div>
      <p style={{ fontFamily: F, fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1.0, margin: "0 0 28px" }}>{t(c.aboSub)}</p>
      <img src={imgMain} alt="" style={{ width: "100%", aspectRatio: "7/10", objectFit: "cover", display: "block", marginBottom: 36 }} />

      <div style={{ marginBottom: 36 }}>
        <div style={{ fontFamily: S, fontSize: 18, fontWeight: 700, letterSpacing: "-0.05em", textTransform: "uppercase", lineHeight: 1, marginBottom: 14 }}>{c.proTitle}</div>
        <p style={{ fontFamily: F, fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1.0, margin: "0 0 10px" }}>{t(c.proBody)}</p>
        <p style={{ fontFamily: F, fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1.0, margin: "0 0 20px", textAlign: "right" }}>{c.proItalic}</p>
        <Link href="/floral/pro" style={{ fontFamily: F, fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", color: "#151515", textDecoration: "none", borderBottom: "1px solid rgba(0,0,0,0.55)", paddingBottom: 2 }}>{c.proCta}</Link>
      </div>

      <div style={{ height: 1, backgroundColor: "rgba(0,0,0,0.15)", margin: "8px 0 36px" }} />

      <div>
        <div style={{ fontFamily: S, fontSize: 18, fontWeight: 700, letterSpacing: "-0.05em", textTransform: "uppercase", lineHeight: 1, marginBottom: 14 }}>{c.partTitle}</div>
        <p style={{ fontFamily: F, fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1.0, margin: "0 0 10px" }}>{t(c.partBody)}</p>
        <p style={{ fontFamily: F, fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1.0, margin: "0 0 20px", textAlign: "right" }}>{c.partItalic}</p>
        <Link href="/floral/particulier" style={{ fontFamily: F, fontSize: 15, fontWeight: 300, letterSpacing: "-0.05em", color: "#151515", textDecoration: "none", borderBottom: "1px solid rgba(0,0,0,0.55)", paddingBottom: 2 }}>{c.partCta}</Link>
      </div>
    </div>
  );
}

export default function Abonnements() {
  const { lang } = useLang();
  const c = copy[lang];
  const bl = (t: string) => t.split("\n").map((l, i) => <span key={i}>{l}<br /></span>);

  return (
    <ArtboardShell overlayRef={overlayRef} minHeight={1200} mobile={<AbonnementsMobile c={c} />}>

      {/* ── NOS ABONNEMENTS — top right ── */}
      <div style={{ position: "absolute", left: 840, top: 130, width: 330, textAlign: "right" }}>
        <div style={{ ...SERIF }}>{c.aboTitle}</div>
        <p style={{ ...BODY, margin: 0 }}>{bl(c.aboSub)}</p>
      </div>

      {/* ── Image right ── */}
      <img src={imgMain} alt="" style={{ position: "absolute", left: 840, top: 220, width: 335, height: 534, objectFit: "cover" }} />

      {/* ── ESPACES & PROFESSIONNELS ── */}
      <div id="pro" style={{ position: "absolute", left: 130, top: 200, width: 620 }}>
        <div style={{ ...SERIF, marginBottom: 18 }}>{c.proTitle}</div>
        <p style={{ ...BODY, margin: 0, marginBottom: 10 }}>{bl(c.proBody)}</p>
        <p style={{ ...SERIF, fontWeight: 400, textTransform: "none", textAlign: "right", marginBottom: 24 }}>{c.proItalic}</p>
        <Link href="/floral/pro" style={{ ...CTA_LINK }}>{c.proCta}</Link>
      </div>

      {/* ── Separator ── */}
      <div style={{ position: "absolute", left: 130, top: 560, width: 1040, height: 1, backgroundColor: "rgba(0,0,0,0.13)" }} />

      {/* ── PARTICULIERS ── */}
      <div id="particulier" style={{ position: "absolute", left: 130, top: 610, width: 620 }}>
        <div style={{ ...SERIF, marginBottom: 18 }}>{c.partTitle}</div>
        <p style={{ ...BODY, margin: 0, marginBottom: 10 }}>{bl(c.partBody)}</p>
        <p style={{ ...SERIF, fontWeight: 400, textTransform: "none", textAlign: "right", marginBottom: 24 }}>{c.partItalic}</p>
        <Link href="/floral/particulier" style={{ ...CTA_LINK }}>{c.partCta}</Link>
      </div>

    </ArtboardShell>
  );
}
