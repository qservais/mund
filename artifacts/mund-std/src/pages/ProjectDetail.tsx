import { useEffect } from "react";
import { Link, useRoute } from "wouter";
import { motion } from "framer-motion";
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import { getNeighbours, getPlateBySlug, plates } from "@/data/plates";
import NotFound from "@/pages/not-found";

export default function ProjectDetail() {
  const [, params] = useRoute("/projets/:slug");
  const slug = params?.slug ?? "";
  const plate = getPlateBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  if (!plate) return <NotFound />;

  const { prev, next } = getNeighbours(plate.slug);

  // Build 7 images for the parallax: current plate first, then 6 others
  const others = plates.filter((p) => p.slug !== plate.slug);
  const parallaxImages = [
    { src: plate.src, alt: plate.alt },
    ...others.slice(0, 6).map((p) => ({ src: p.src, alt: p.alt })),
  ];

  return (
    <article className="relative w-full pb-24 md:pb-40">
      {/* Eyebrow / breadcrumb */}
      <div className="px-6 md:px-12 xl:px-24 pt-32 md:pt-40 pb-10 md:pb-16 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3 flex flex-col gap-2">
          <Link
            href="/projets"
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/55 hover:text-accent transition-colors w-fit"
            data-testid="link-back-projets"
          >
            ← Retour aux planches
          </Link>
        </div>
        <div className="col-span-12 md:col-span-9 flex flex-wrap items-baseline gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/60">
          <span className="text-accent">Planche {plate.n}&nbsp;/&nbsp;15</span>
          <span>{plate.category}</span>
          <span>{plate.year}</span>
          <span>{plate.location}</span>
        </div>
      </div>

      {/* Big title */}
      <header className="px-6 md:px-12 xl:px-24 mb-8 md:mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans uppercase text-[12vw] md:text-[7vw] leading-[0.92] tracking-[-0.02em] font-semibold max-w-[14ch]"
          data-testid="project-title"
        >
          {plate.title}.
        </motion.h1>
      </header>

      {/* Scroll cue */}
      <div className="px-6 md:px-12 xl:px-24 mb-2 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/45">
        <span>↓ &nbsp; faites défiler — la planche s'ouvre</span>
        <span className="hidden md:inline">Zoom parallax</span>
      </div>

      {/* Zoom parallax intro */}
      <ZoomParallax images={parallaxImages} />

      {/* Body / story */}
      <section className="px-6 md:px-12 xl:px-24 pt-28 md:pt-40 grid grid-cols-12 gap-6 gap-y-16">
        <div className="col-span-12 md:col-span-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            Note du studio
          </span>
        </div>
        <div className="col-span-12 md:col-span-7 md:col-start-5">
          <p
            className="font-sans text-base md:text-lg leading-[1.7] text-foreground/85 text-justify"
            data-testid="project-story"
          >
            {plate.story}
          </p>
        </div>

        {/* Meta strip */}
        <div className="col-span-12 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 border-t border-foreground/15 pt-10">
          <Meta label="Catégorie" value={plate.category} />
          <Meta label="Année" value={plate.year} />
          <Meta label="Lieu" value={plate.location} />
          <Meta label="Référence" value={`MUND·${plate.n}/15`} />
        </div>

        {/* Hero image after scroll */}
        <motion.figure
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 mt-6"
        >
          <div className="aspect-[16/10] md:aspect-[21/9] overflow-hidden bg-muted">
            <img
              src={plate.src}
              alt={plate.alt}
              className="w-full h-full object-cover"
            />
          </div>
          <figcaption className="flex flex-wrap items-baseline gap-3 pt-3 font-mono text-[9px] uppercase tracking-[0.25em] text-foreground/65">
            <span className="text-accent">{plate.n}</span>
            <span>{plate.title}</span>
            <span className="ml-auto text-foreground/50">{plate.meta}</span>
          </figcaption>
        </motion.figure>
      </section>

      {/* Prev / Next */}
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
            <span className="font-sans uppercase text-xl md:text-3xl tracking-[-0.005em] font-semibold group-hover:text-accent transition-colors">
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
            <span className="font-sans uppercase text-xl md:text-3xl tracking-[-0.005em] font-semibold group-hover:text-accent transition-colors">
              {next.title}
            </span>
          </Link>
        )}
      </nav>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/50">
        {label}
      </span>
      <span className="font-sans text-sm md:text-base text-foreground/90">
        {value}
      </span>
    </div>
  );
}
