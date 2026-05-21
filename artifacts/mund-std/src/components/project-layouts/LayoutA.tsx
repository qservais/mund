import type { Plate } from "@/data/plates";

interface Props {
  plate: Plate;
}

export function LayoutA({ plate }: Props) {
  const gallery = plate.gallery ?? [plate.src];
  const [hero, ...rest] = gallery;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
        <div className="flex flex-col justify-between px-6 md:px-12 xl:px-20 py-16 md:py-24 gap-16">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[15px] uppercase tracking-[0.35em] text-accent">
                Note du studio
              </span>
              <p
                className="font-sans text-[15px] leading-none text-foreground/85 text-justify max-w-[42ch]"
                data-testid="project-story"
              >
                {plate.story}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-foreground/10 pt-8">
              <Meta label="Catégorie" value={plate.category} />
              <Meta label="Année" value={plate.year} />
              <Meta label="Lieu" value={plate.location} />
              <Meta label="Référence" value={`MUND·${plate.n}/15`} />
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden bg-foreground/5" style={{ minHeight: "60vh" }}>
          <img
            src={hero}
            alt={plate.alt}
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {rest.length > 0 && (
        <div className="px-6 md:px-12 xl:px-24 pt-4 grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2">
          {rest.map((src, i) => (
            <figure key={i}>
              <img
                src={src}
                alt={`${plate.alt} — ${i + 2}`}
                loading="lazy"
                className="w-full h-56 md:h-80 object-cover"
              />
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-mono text-[15px] uppercase tracking-[0.3em] text-foreground/45">
        {label}
      </span>
      <span className="font-sans text-[15px] text-foreground/85">{value}</span>
    </div>
  );
}
