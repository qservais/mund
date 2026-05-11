import { useEffect } from "react";
import { Link, useRoute } from "wouter";
import { getNeighbours, getPlateBySlug, resolveLayout } from "@/data/plates";
import { LayoutA } from "@/components/project-layouts/LayoutA";
import { LayoutB } from "@/components/project-layouts/LayoutB";
import { LayoutC } from "@/components/project-layouts/LayoutC";
import { LayoutD } from "@/components/project-layouts/LayoutD";
import { LayoutE } from "@/components/project-layouts/LayoutE";
import NotFound from "@/pages/not-found";
import type { Plate } from "@/data/plates";

function PlateBody({ plate }: { plate: Plate }) {
  const layout = resolveLayout(plate);
  if (layout === "A") return <LayoutA plate={plate} />;
  if (layout === "B") return <LayoutB plate={plate} />;
  if (layout === "C") return <LayoutC plate={plate} />;
  if (layout === "D") return <LayoutD plate={plate} />;
  return <LayoutE plate={plate} />;
}

export default function ProjectDetail() {
  const [, params] = useRoute("/projets/:slug");
  const slug = params?.slug ?? "";
  const plate = getPlateBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  if (!plate) return <NotFound />;

  const { prev, next } = getNeighbours(plate.slug);

  return (
    <article className="relative w-full pb-24 md:pb-40">
      <div className="px-6 md:px-12 xl:px-24 pt-32 md:pt-40 pb-10 md:pb-16 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3 flex flex-col gap-2">
          <Link
            href="/past"
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/55 hover:text-accent transition-colors w-fit"
            data-testid="link-back-projets"
          >
            ← work
          </Link>
        </div>
        <div className="col-span-12 md:col-span-9 flex flex-wrap items-baseline gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/60">
          <span className="text-accent">Planche {plate.n}&nbsp;/&nbsp;15</span>
          <span>{plate.category}</span>
          <span>{plate.year}</span>
          <span>{plate.location}</span>
        </div>
      </div>

      <header className="px-6 md:px-12 xl:px-24 mb-8 md:mb-12 flex flex-col gap-3">
        <p className="font-mono uppercase tracking-[0.3em] text-xs text-foreground/55">
          {plate.tagline ?? "une planche —"}
        </p>
        <h1
          className="font-display uppercase text-[12vw] md:text-[7vw] leading-[0.92] tracking-[-0.02em] font-semibold max-w-[14ch]"
          data-testid="project-title"
        >
          {plate.title}.
        </h1>
        {plate.credits && (
          <p
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/55 mt-2"
            data-testid="project-credits"
          >
            {plate.credits}
          </p>
        )}
      </header>

      <div data-testid="project-gallery">
        <PlateBody plate={plate} />
      </div>

      <nav className="px-6 md:px-12 xl:px-24 mt-32 md:mt-48 grid grid-cols-12 gap-6 border-t border-foreground/15 pt-10">
        {prev && (
          <Link
            href={`/projets/${prev.slug}`}
            className="col-span-6 group flex flex-col gap-3"
            data-testid="link-prev-project"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/55 group-hover:text-accent transition-colors">
              ← Précédente — Planche {prev.n}
            </span>
            <span className="font-display uppercase text-xl md:text-3xl tracking-[-0.005em] font-semibold group-hover:text-accent transition-colors">
              {prev.title}
            </span>
          </Link>
        )}
        {next && (
          <Link
            href={`/projets/${next.slug}`}
            className="col-span-6 group flex flex-col gap-3 text-right items-end"
            data-testid="link-next-project"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/55 group-hover:text-accent transition-colors">
              Suivante — Planche {next.n} →
            </span>
            <span className="font-display uppercase text-xl md:text-3xl tracking-[-0.005em] font-semibold group-hover:text-accent transition-colors">
              {next.title}
            </span>
          </Link>
        )}
      </nav>
    </article>
  );
}
