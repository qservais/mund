import { motion } from "framer-motion";
import { Link } from "wouter";
import type { Plate as PlateType } from "@/data/plates";

export default function Plate({
  plate,
  className = "",
  imgClass = "aspect-[3/4]",
  align = "left",
  linkable = true,
}: {
  plate: PlateType;
  className?: string;
  imgClass?: string;
  align?: "left" | "right";
  linkable?: boolean;
}) {
  const inner = (
    <>
      <div className={`relative overflow-hidden bg-muted ${imgClass}`}>
        <img
          src={plate.src}
          alt={plate.alt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
        />
      </div>
      <figcaption
        className={`flex items-baseline gap-3 pt-1 font-mono text-[9px] uppercase tracking-[0.25em] text-foreground/65 ${
          align === "right" ? "justify-end text-right" : ""
        }`}
      >
        <span className="text-accent">{plate.n}</span>
        <span className="text-foreground/85 group-hover:text-accent transition-colors">
          {plate.title}
        </span>
        <span className="ml-auto md:ml-3 text-foreground/50">{plate.meta}</span>
      </figcaption>
    </>
  );

  return (
    <motion.figure
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
      className={`group flex flex-col gap-2 hover-trigger ${className}`}
    >
      {linkable ? (
        <Link
          href={`/projets/${plate.slug}`}
          className="contents"
          data-testid={`plate-link-${plate.n}`}
        >
          {inner}
        </Link>
      ) : (
        inner
      )}
    </motion.figure>
  );
}
