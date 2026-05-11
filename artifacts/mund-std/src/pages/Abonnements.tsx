import ArtboardShell, { SERIF, BODY } from "@/components/ArtboardShell";
import { Link } from "wouter";
import { useLang } from "@/context/LanguageContext";
import overlayRef from "@assets/floral_1778527882896.png";
const imgMain = "/images/svc1.webp";

const copy = {
  fr: {
    aboTitle: "NOS ABONNEMENTS",
    aboSub: "retrouver notre travail floral pour vos espaces\nou votre habitation.",

    proTitle: "ESPACES & PROFESSIONNELS",
    proBody: "nous proposons un travail floral récurent  pour  vos espaces professionnels,\nhôtels, boutiques, bureaux, cabinets...\nchaque intervention est développée sur mesure, pensée en lien avec l'idéntité\nde l'espace.\nnous définissons ensemble le format et la fréquence selon vos besoins.\npour toute demande ou mise en place d'un abonnement, contactez-nous.",
    proItalic: "nous composons avec votre image et votre espace.",

    partTitle: "PARTICULIERS",
    partBody: "chaque deuxième jeudi du mois, nous vous proposons un bouquet surprise\ncomposé selon les arrivages du moment.\nUne manière d'inviter notre travail chez vous en le voyant évoluer au fil des\nsaisons ou de manière occasionnelle.",
    partItalic: "un rendez-vous mensuel autour des fleurs de saison.",
    partLink: "envie d'en savoir plus ? c'est par ici.",
  },
  en: {
    aboTitle: "OUR SUBSCRIPTIONS",
    aboSub: "find our floral work for your spaces\nor your home.",

    proTitle: "SPACES & PROFESSIONALS",
    proBody: "we offer recurring floral work for your professional spaces,\nhotels, boutiques, offices, practices...\neach intervention is developed to measure, conceived in relation\nto the identity of the space.\nwe define together the format and frequency according to your needs.\nfor any enquiry or to set up a subscription, contact us.",
    proItalic: "we compose with your image and your space.",

    partTitle: "PRIVATE CLIENTS",
    partBody: "every second thursday of the month, we offer you a surprise bouquet\ncomposed according to current arrivals.\na way to invite our work into your home,\nwatching it evolve with the seasons or on an occasional basis.",
    partItalic: "a monthly appointment around seasonal flowers.",
    partLink: "want to know more? right here.",
  },
};

export default function Abonnements() {
  const { lang } = useLang();
  const c = copy[lang];
  const bodyLines = (text: string) =>
    text.split("\n").map((l, i) => <span key={i}>{l}<br /></span>);

  return (
    <ArtboardShell overlayRef={overlayRef} minHeight={2048}>

      {/* ── NOS ABONNEMENTS — top right, left 840, top 130 */}
      <div style={{ position: "absolute", left: 840, top: 130, width: 330, textAlign: "right" }}>
        <div style={{ ...SERIF, marginBottom: 14 }}>{c.aboTitle}</div>
        <p style={{ ...BODY, margin: 0 }}>{bodyLines(c.aboSub)}</p>
      </div>

      {/* Image right — left 840, top 220, 335×610 */}
      <img
        src={imgMain}
        alt=""
        style={{ position: "absolute", left: 840, top: 220, width: 335, height: 610, objectFit: "cover" }}
      />

      {/* ── ESPACES & PROFESSIONNELS — left 120, top 300 */}
      <div style={{ position: "absolute", left: 120, top: 300, width: 600 }}>
        <div style={{ ...SERIF, marginBottom: 20 }}>{c.proTitle}</div>
        <p style={{ ...BODY, margin: 0, marginBottom: 22 }}>{bodyLines(c.proBody)}</p>
        <p style={{
          ...SERIF, fontWeight: 400, textTransform: "none",
          fontStyle: "italic", fontSize: 16, marginTop: 8, textAlign: "right",
        }}>
          {c.proItalic}
        </p>
      </div>

      {/* ── PARTICULIERS — left 120, top 555 */}
      <div style={{ position: "absolute", left: 120, top: 620, width: 600 }}>
        <div style={{ ...SERIF, marginBottom: 20 }}>{c.partTitle}</div>
        <p style={{ ...BODY, margin: 0, marginBottom: 22 }}>{bodyLines(c.partBody)}</p>
        <p style={{
          ...SERIF, fontWeight: 400, textTransform: "none",
          fontStyle: "italic", fontSize: 16, marginBottom: 18, textAlign: "right",
        }}>
          {c.partItalic}
        </p>
        <Link href="/contact" style={{ ...BODY, color: "#151515", textDecoration: "none" }}>
          {c.partLink}
        </Link>
      </div>

    </ArtboardShell>
  );
}
