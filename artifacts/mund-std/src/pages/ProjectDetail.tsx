import { Link, useRoute } from "wouter";
import { getNeighbours, getPlateBySlug } from "@/data/plates";
import NotFound from "@/pages/not-found";
import ProjectShell from "@/components/ProjectShell";
import type { Plate } from "@/data/plates";
import { BODY } from "@/components/ArtboardShell";

const FF = '"Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif';
const SF = '"Cormorant Garamond", "Times New Roman", Times, serif';

const NAV_LINK: React.CSSProperties = {
  fontFamily: FF,
  fontSize: 15,
  fontWeight: 300,
  letterSpacing: "-0.05em",
  lineHeight: 1.0,
  color: "#151515",
  textDecoration: "none",
};

/* ── Desktop content ──────────────────────────────────────────────────────── */
function ProjectContent({ plate, prev, next }: { plate: Plate; prev?: Plate; next?: Plate }) {
  const gallery = plate.gallery ?? [plate.src];

  return (
    <div style={{ maxWidth: 1300, margin: "0 auto" }}>

      {/* ── 2-column info section ─────────────────────────────────── */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        padding: "68px 130px 52px",
        gap: "0 120px",
        alignItems: "start",
      }}>
        {/* Left: number + title */}
        <div>
          <div
            data-testid="project-title"
            style={{ ...BODY }}
          >
            {plate.n} — {plate.title}
          </div>
        </div>

        {/* Right: location + year, then description */}
        <div>
          <div style={{ ...BODY, marginBottom: 20 }}>
            {plate.location}, {plate.year}
          </div>
          <p
            data-testid="project-story"
            style={{ ...BODY, margin: 0 }}
          >
            {plate.story}
          </p>
          {plate.credits && (
            <p style={{ ...BODY, margin: "14px 0 0", opacity: 0.45 }}>
              {plate.credits}
            </p>
          )}
        </div>
      </div>

      {/* ── Separator ────────────────────────────────────────────── */}
      <div style={{ height: 1, backgroundColor: "rgba(0,0,0,0.12)", margin: "0 130px" }} />

      {/* ── Prev / Next navigation ───────────────────────────────── */}
      <div style={{
        padding: "22px 130px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
      }}>
        {prev ? (
          <Link
            href={`/projets/${prev.slug}`}
            data-testid="link-prev-project"
            style={NAV_LINK}
          >
            ← projet précédent
          </Link>
        ) : <div />}

        {next ? (
          <Link
            href={`/projets/${next.slug}`}
            data-testid="link-next-project"
            style={NAV_LINK}
          >
            projet suivant →
          </Link>
        ) : <div />}
      </div>

      {/* ── Horizontal image strip — full width ──────────────────── */}
      <div
        data-testid="project-gallery"
        style={{
          display: "flex",
          gap: 3,
          width: "100%",
        }}
      >
        {gallery.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${plate.alt} — ${i + 1}`}
            loading={i === 0 ? undefined : "lazy"}
            style={{
              flex: 1,
              minWidth: 0,
              height: 520,
              objectFit: "cover",
              display: "block",
            }}
          />
        ))}
      </div>

    </div>
  );
}

/* ── Mobile content ───────────────────────────────────────────────────────── */
function ProjectMobile({ plate, prev, next }: { plate: Plate; prev?: Plate; next?: Plate }) {
  const gallery = plate.gallery ?? [plate.src];

  return (
    <div>
      {/* Back */}
      <Link
        href="/past"
        style={{
          fontFamily: FF, fontWeight: 300, fontSize: 15,
          letterSpacing: "-0.05em", color: "rgba(0,0,0,0.45)",
          textDecoration: "none", display: "block", marginBottom: 24,
        }}
      >
        ← past
      </Link>

      {/* Number + title */}
      <div
        data-testid="project-title"
        style={{
          fontFamily: FF, fontWeight: 300, fontSize: 15,
          letterSpacing: "-0.05em", lineHeight: 1.0,
          marginBottom: 4,
        }}
      >
        {plate.n} — {plate.title}
      </div>

      {/* Location + year */}
      <div style={{
        fontFamily: FF, fontWeight: 300, fontSize: 15,
        letterSpacing: "-0.05em", lineHeight: 1.0,
        color: "rgba(0,0,0,0.50)", marginBottom: 20,
      }}>
        {plate.location}, {plate.year}
      </div>

      {/* Description */}
      <p
        data-testid="project-story"
        style={{
          fontFamily: FF, fontWeight: 300, fontSize: 15,
          letterSpacing: "-0.05em", lineHeight: 1.0,
          color: "rgba(0,0,0,0.80)", margin: "0 0 8px",
        }}
      >
        {plate.story}
      </p>
      {plate.credits && (
        <p style={{
          fontFamily: FF, fontWeight: 300, fontSize: 15,
          letterSpacing: "-0.05em", lineHeight: 1.0,
          color: "rgba(0,0,0,0.40)", margin: "0 0 28px",
        }}>
          {plate.credits}
        </p>
      )}

      <div style={{ height: 1, backgroundColor: "rgba(0,0,0,0.12)", margin: "24px 0" }} />

      {/* Prev / Next */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 28 }}>
        {prev ? (
          <Link
            href={`/projets/${prev.slug}`}
            data-testid="link-prev-project"
            style={{
              fontFamily: FF, fontWeight: 300, fontSize: 15,
              letterSpacing: "-0.05em", color: "#151515",
              textDecoration: "none",
            }}
          >
            ← précédent
          </Link>
        ) : <div />}
        {next ? (
          <Link
            href={`/projets/${next.slug}`}
            data-testid="link-next-project"
            style={{
              fontFamily: FF, fontWeight: 300, fontSize: 15,
              letterSpacing: "-0.05em", color: "#151515",
              textDecoration: "none",
            }}
          >
            suivant →
          </Link>
        ) : <div />}
      </div>

      {/* Images stacked */}
      <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {gallery.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${plate.alt} — ${i + 1}`}
            loading={i === 0 ? undefined : "lazy"}
            style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }}
          />
        ))}
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
    <ProjectShell mobile={<ProjectMobile plate={plate} prev={prev} next={next} />}>
      <ProjectContent plate={plate} prev={prev} next={next} />
    </ProjectShell>
  );
}
