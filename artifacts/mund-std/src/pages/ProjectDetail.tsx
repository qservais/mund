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

  // Parallax images: prefer the project's own gallery (real shoot),
  // otherwise fall back to current plate + 6 sibling plates.
  const others = plates.filter((p) => p.slug !== plate.slug);
  const ownGallery = (plate.gallery ?? []).map((src, i) => ({
    src,
    alt: `${plate.alt} — ${i + 1}`,
  }));
  const parallaxImages = (
    ownGallery.length >= 7
      ? ownGallery.slice(0, 7)
      : [
          ...ownGallery,
          { src: plate.src, alt: plate.alt },
          ...others.slice(0, 7 - ownGallery.length - 1).map((p) => ({
            src: p.src,
            alt: p.alt,
          })),
        ]
  ).slice(0, 7);

  const gallery = plate.gallery ?? [plate.src];

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
      <header className="px-6 md:px-12 xl:px-24 mb-8 md:mb-12 flex flex-col gap-3">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic text-3xl md:text-5xl text-foreground/70"
        >
          {plate.tagline ?? "une planche —"}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans uppercase text-[12vw] md:text-[7vw] leading-[0.92] tracking-[-0.02em] font-semibold max-w-[14ch]"
          data-testid="project-title"
        >
          {plate.title}.
        </motion.h1>
        {plate.credits && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/55 mt-2"
            data-testid="project-credits"
          >
            {plate.credits}
          </motion.p>
        )}
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
              src={gallery[0]}
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

        {/* Additional gallery — only when the project has its own shoot */}
        {gallery.length > 1 && (
          <div
            className="col-span-12 mt-12 grid grid-cols-12 gap-x-6 gap-y-10"
            data-testid="project-gallery"
          >
            {gallery.slice(1).map((src, i) => {
              // Editorial alternating layout: alt sizes & offsets
              const layouts = [
                "col-span-12 md:col-span-7 md:col-start-1",
                "col-span-12 md:col-span-5 md:col-start-8",
                "col-span-12 md:col-span-8 md:col-start-3",
                "col-span-12 md:col-span-5 md:col-start-1",
                "col-span-12 md:col-span-6 md:col-start-7",
                "col-span-12 md:col-span-9 md:col-start-2",
              ];
              const aspects = [
                "aspect-[4/5]",
                "aspect-[3/4]",
                "aspect-[16/10]",
                "aspect-[3/4]",
                "aspect-[4/5]",
                "aspect-[16/9]",
              ];
              return (
                <motion.figure
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.95, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className={layouts[i % layouts.length]}
                >
                  <div className={`${aspects[i % aspects.length]} overflow-hidden bg-muted`}>
                    <img
                      src={src}
                      alt={`${plate.alt} — fig. ${i + 2}`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <figcaption className="flex items-baseline justify-between pt-2 font-mono text-[9px] uppercase tracking-[0.25em] text-foreground/55">
                    <span>fig. {String(i + 2).padStart(2, "0")}</span>
                    <span>{plate.location}</span>
                  </figcaption>
                </motion.figure>
              );
            })}
          </div>
        )}
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
