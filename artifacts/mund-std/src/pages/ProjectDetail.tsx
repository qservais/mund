import { Link, useRoute } from "wouter";
import { getNeighbours, getPlateBySlug } from "@/data/plates";
import NotFound from "@/pages/not-found";
import ProjectShell from "@/components/ProjectShell";
import type { Plate } from "@/data/plates";

const FF = '"Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif';
const SF = '"Cormorant Garamond", "Times New Roman", Times, serif';

const PAD = "0 130px";

/* ── Meta item ────────────────────────────────────────────────────────────── */
function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <span style={{
        fontFamily: FF, fontWeight: 300, fontSize: 10,
        textTransform: "uppercase", letterSpacing: "0.26em",
        color: "rgba(0,0,0,0.38)", lineHeight: 1,
      }}>
        {label}
      </span>
      <span style={{ fontFamily: FF, fontWeight: 300, fontSize: 16, letterSpacing: "-0.05em", color: "rgba(0,0,0,0.75)" }}>
        {value}
      </span>
    </div>
  );
}

/* ── Desktop content ──────────────────────────────────────────────────────── */
function ProjectContent({ plate, prev, next }: { plate: Plate; prev?: Plate; next?: Plate }) {
  const gallery = plate.gallery ?? [plate.src];
  const galleryRest = gallery.slice(1);

  return (
    <div>
      {/* ── Header: back + title ─────────────────────────────────── */}
      <div style={{ padding: "56px 130px 0" }}>
        <Link
          href="/past"
          data-testid="link-back-projets"
          style={{
            fontFamily: FF, fontWeight: 300, fontSize: 12,
            textTransform: "uppercase", letterSpacing: "0.24em",
            color: "rgba(0,0,0,0.40)", textDecoration: "none",
            display: "inline-block", marginBottom: 28,
          }}
        >
          ← work
        </Link>

        <h1
          data-testid="project-title"
          style={{
            fontFamily: SF, fontWeight: 700, fontSize: "clamp(48px, 6vw, 88px)",
            letterSpacing: "-0.04em", textTransform: "uppercase",
            lineHeight: 0.92, margin: 0, marginBottom: 12,
          }}
        >
          {plate.title}.
        </h1>

        {plate.tagline && (
          <p style={{
            fontFamily: FF, fontWeight: 300, fontSize: 15,
            letterSpacing: "-0.05em",
            color: "rgba(0,0,0,0.50)", margin: 0, marginBottom: 0,
          }}>
            {plate.tagline}
          </p>
        )}
      </div>

      {/* ── HR ───────────────────────────────────────────────────── */}
      <div style={{ height: 1, backgroundColor: "rgba(0,0,0,0.12)", margin: "36px 130px 0" }} />

      {/* ── Meta + Story ─────────────────────────────────────────── */}
      <div style={{
        padding: "40px 130px 60px",
        display: "grid",
        gridTemplateColumns: "220px 1fr",
        gap: "0 80px",
        alignItems: "start",
      }}>
        {/* Meta gauche */}
        <aside style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <MetaItem label="Catégorie" value={plate.category} />
          <MetaItem label="Année" value={plate.year} />
          <MetaItem label="Lieu" value={plate.location} />
          <MetaItem label="Référence" value={`MUND ${plate.n}/15`} />
          {plate.credits && (
            <MetaItem label="Crédits" value={plate.credits} />
          )}
        </aside>

        {/* Story droite */}
        <div>
          <p
            data-testid="project-story"
            style={{
              fontFamily: FF, fontWeight: 300, fontSize: 15,
              letterSpacing: "-0.06em", lineHeight: 1.0,
              color: "rgba(0,0,0,0.80)", margin: 0,
            }}
          >
            {plate.story}
          </p>
        </div>
      </div>

      {/* ── Galerie ──────────────────────────────────────────────── */}
      {galleryRest.length > 0 && (
        <div style={{
          padding: "0 130px 80px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 3,
        }}
        data-testid="project-gallery"
        >
          {galleryRest.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${plate.alt} — ${i + 2}`}
              loading="lazy"
              style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }}
            />
          ))}
        </div>
      )}

      {/* ── Nav précédent / suivant ───────────────────────────────── */}
      <div style={{
        padding: "36px 130px 60px",
        borderTop: "1px solid rgba(0,0,0,0.10)",
        display: "flex",
        justifyContent: "space-between",
      }}>
        {prev ? (
          <Link
            href={`/projets/${prev.slug}`}
            data-testid="link-prev-project"
            style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: 6 }}
          >
            <span style={{ fontFamily: FF, fontWeight: 300, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.22em", color: "rgba(0,0,0,0.38)" }}>
              ← Précédente
            </span>
            <span style={{ fontFamily: SF, fontWeight: 700, fontSize: 16, letterSpacing: "-0.04em", textTransform: "uppercase", color: "#151515" }}>
              {prev.title}
            </span>
          </Link>
        ) : <div />}

        {next && (
          <Link
            href={`/projets/${next.slug}`}
            data-testid="link-next-project"
            style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end" }}
          >
            <span style={{ fontFamily: FF, fontWeight: 300, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.22em", color: "rgba(0,0,0,0.38)" }}>
              Suivante →
            </span>
            <span style={{ fontFamily: SF, fontWeight: 700, fontSize: 16, letterSpacing: "-0.04em", textTransform: "uppercase", color: "#151515" }}>
              {next.title}
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}

/* ── Mobile content ───────────────────────────────────────────────────────── */
function ProjectMobile({ plate, prev, next }: { plate: Plate; prev?: Plate; next?: Plate }) {
  const gallery = plate.gallery ?? [plate.src];

  return (
    <div>
      {/* Hero mobile */}
      <div style={{ margin: "0 -20px 28px", overflow: "hidden" }}>
        <img
          src={plate.src}
          alt={plate.alt}
          style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", display: "block" }}
        />
      </div>

      {/* Back */}
      <Link
        href="/past"
        style={{ fontFamily: FF, fontWeight: 300, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.22em", color: "rgba(0,0,0,0.40)", textDecoration: "none", display: "block", marginBottom: 20 }}
      >
        ← work
      </Link>

      {/* Title */}
      <h1 style={{ fontFamily: SF, fontWeight: 700, fontSize: "clamp(36px, 10vw, 56px)", letterSpacing: "-0.04em", textTransform: "uppercase", lineHeight: 0.92, margin: "0 0 10px" }}
        data-testid="project-title">
        {plate.title}.
      </h1>
      {plate.tagline && (
        <p style={{ fontFamily: FF, fontWeight: 300, fontSize: 15, letterSpacing: "-0.04em", color: "rgba(0,0,0,0.50)", margin: "0 0 28px" }}>
          {plate.tagline}
        </p>
      )}

      <div style={{ height: 1, backgroundColor: "rgba(0,0,0,0.12)", marginBottom: 24 }} />

      {/* Meta */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 24px", marginBottom: 28 }}>
        <MetaItem label="Catégorie" value={plate.category} />
        <MetaItem label="Année" value={plate.year} />
        <MetaItem label="Lieu" value={plate.location} />
        <MetaItem label="Référence" value={`MUND ${plate.n}/15`} />
      </div>
      {plate.credits && <MetaItem label="Crédits" value={plate.credits} />}

      <div style={{ height: 1, backgroundColor: "rgba(0,0,0,0.12)", margin: "24px 0" }} />

      {/* Story */}
      <p data-testid="project-story" style={{ fontFamily: FF, fontWeight: 300, fontSize: 16, letterSpacing: "-0.05em", lineHeight: 1.65, color: "rgba(0,0,0,0.80)", margin: "0 0 32px" }}>
        {plate.story}
      </p>

      {/* Gallery */}
      {gallery.length > 1 && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, marginBottom: 36 }} data-testid="project-gallery">
          {gallery.slice(1).map((src, i) => (
            <img key={i} src={src} alt={`${plate.alt} — ${i + 2}`} loading="lazy"
              style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", display: "block" }} />
          ))}
        </div>
      )}

      {/* Nav */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.10)", paddingTop: 24, display: "flex", justifyContent: "space-between" }}>
        {prev && (
          <Link href={`/projets/${prev.slug}`} style={{ textDecoration: "none" }} data-testid="link-prev-project">
            <span style={{ fontFamily: FF, fontWeight: 300, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.22em", color: "rgba(0,0,0,0.38)", display: "block" }}>← Précédente</span>
            <span style={{ fontFamily: SF, fontWeight: 700, fontSize: 18, letterSpacing: "-0.04em", textTransform: "uppercase", color: "#151515", display: "block" }}>{prev.title}</span>
          </Link>
        )}
        {next && (
          <Link href={`/projets/${next.slug}`} style={{ textDecoration: "none", textAlign: "right" }} data-testid="link-next-project">
            <span style={{ fontFamily: FF, fontWeight: 300, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.22em", color: "rgba(0,0,0,0.38)", display: "block" }}>Suivante →</span>
            <span style={{ fontFamily: SF, fontWeight: 700, fontSize: 18, letterSpacing: "-0.04em", textTransform: "uppercase", color: "#151515", display: "block" }}>{next.title}</span>
          </Link>
        )}
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function ProjectDetail() {
  const [, params] = useRoute("/projets/:slug");
  const slug = params?.slug ?? "";
  const plate = getPlateBySlug(slug);

  if (!plate) return <NotFound />;

  const { prev, next } = getNeighbours(plate.slug);

  return (
    <ProjectShell
      heroSrc={plate.src}
      heroAlt={plate.alt}
      mobile={<ProjectMobile plate={plate} prev={prev} next={next} />}
    >
      <ProjectContent plate={plate} prev={prev} next={next} />
    </ProjectShell>
  );
}
