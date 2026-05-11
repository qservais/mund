import { Link } from "wouter";
import { useLang } from "@/context/LanguageContext";
import { plates } from "@/data/plates";

const copy = {
  fr: { label: "travaux", sub: "planches du studio" },
  en: { label: "work", sub: "studio plates" },
};

type Pos = {
  colStart: string;
  colSpan: string;
  mt: string;
  aspect: string;
};

const positions: Pos[] = [
  { colStart: "md:col-start-1", colSpan: "md:col-span-4", mt: "", aspect: "aspect-[3/4]" },
  { colStart: "md:col-start-6", colSpan: "md:col-span-4", mt: "md:mt-20", aspect: "aspect-[3/4]" },
  { colStart: "md:col-start-10", colSpan: "md:col-span-3", mt: "md:mt-6", aspect: "aspect-square" },
  { colStart: "md:col-start-2", colSpan: "md:col-span-3", mt: "md:mt-6", aspect: "aspect-[3/4]" },
  { colStart: "md:col-start-6", colSpan: "md:col-span-4", mt: "", aspect: "aspect-[4/5]" },
  { colStart: "md:col-start-8", colSpan: "md:col-span-5", mt: "md:mt-14", aspect: "aspect-[16/9]" },
  { colStart: "md:col-start-1", colSpan: "md:col-span-3", mt: "", aspect: "aspect-[3/4]" },
  { colStart: "md:col-start-5", colSpan: "md:col-span-3", mt: "md:mt-16", aspect: "aspect-square" },
  { colStart: "md:col-start-8", colSpan: "md:col-span-4", mt: "md:mt-4", aspect: "aspect-[4/5]" },
  { colStart: "md:col-start-1", colSpan: "md:col-span-4", mt: "md:mt-4", aspect: "aspect-[4/5]" },
  { colStart: "md:col-start-4", colSpan: "md:col-span-3", mt: "md:mt-10", aspect: "aspect-[3/4]" },
  { colStart: "md:col-start-7", colSpan: "md:col-span-3", mt: "md:mt-2", aspect: "aspect-square" },
  { colStart: "md:col-start-10", colSpan: "md:col-span-3", mt: "md:mt-14", aspect: "aspect-[4/5]" },
  { colStart: "md:col-start-2", colSpan: "md:col-span-3", mt: "", aspect: "aspect-[3/4]" },
  { colStart: "md:col-start-6", colSpan: "md:col-span-4", mt: "md:mt-6", aspect: "aspect-[4/5]" },
];

export default function Past() {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <div className="px-6 md:px-8 xl:px-14">
      {/* Header */}
      <div className="flex items-baseline justify-between py-8 border-b border-foreground/10 mb-10 md:mb-16">
        <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-foreground/40">
          {c.label}
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-foreground/30">
          {plates.length} {c.sub}
        </span>
      </div>

      {/* Scattered grid (desktop) / simple 2-col (mobile) */}
      <div className="grid grid-cols-2 md:grid-cols-12 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-0 pb-16 md:pb-24" data-testid="past-grid">
        {plates.map((plate, i) => {
          const pos = positions[i] ?? positions[i % positions.length];
          return (
            <Link
              key={plate.slug}
              href={`/projets/${plate.slug}`}
              className={`col-span-1 flex flex-col gap-2 group ${pos.colStart} ${pos.colSpan} ${pos.mt}`}
              data-testid={`plate-link-${plate.slug}`}
            >
              <div className="overflow-hidden">
                <img
                  src={plate.src}
                  alt={plate.alt}
                  loading="lazy"
                  className={`w-full ${pos.aspect} object-cover`}
                />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-[9px] text-accent tracking-[0.2em]">
                  {String(i + 1).padStart(3, "0")}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/50">
                  {plate.title}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
