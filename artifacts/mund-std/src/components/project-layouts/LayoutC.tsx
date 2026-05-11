import type { Plate } from "@/data/plates";

interface Props {
  plate: Plate;
}

const offsets = [
  { x: "0%", scale: 1 },
  { x: "-8%", scale: 0.82 },
  { x: "10%", scale: 0.9 },
  { x: "-4%", scale: 0.75 },
  { x: "6%", scale: 0.85 },
  { x: "-10%", scale: 0.78 },
  { x: "4%", scale: 0.88 },
];

export function LayoutC({ plate }: Props) {
  const gallery = plate.gallery ?? [plate.src];
  const [hero, ...rest] = gallery;

  return (
    <div>
      <div className="flex flex-col items-center px-6 md:px-12 xl:px-24 pt-4 pb-8 gap-0">
        <figure className="w-full md:w-[55vw] max-w-3xl">
          <img
            src={hero}
            alt={plate.alt}
            loading="eager"
            className="w-full h-[55vh] md:h-[70vh] object-cover"
          />
        </figure>

        {rest.length > 0 && (
          <div className="w-full flex flex-col items-center gap-1 mt-1">
            {rest.map((src, i) => {
              const o = offsets[(i + 1) % offsets.length];
              return (
                <figure
                  key={i}
                  style={{
                    width: `calc(${o.scale * 55}vw)`,
                    transform: `translateX(${o.x})`,
                    maxWidth: "52rem",
                  }}
                >
                  <img
                    src={src}
                    alt={`${plate.alt} — ${i + 2}`}
                    loading="lazy"
                    className="w-full h-48 md:h-72 object-cover"
                  />
                </figure>
              );
            })}
          </div>
        )}
      </div>

      <div className="flex flex-col items-center px-6 md:px-12 xl:px-24 pt-16 md:pt-24 gap-10 pb-4">
        <p
          className="font-sans text-base md:text-lg leading-[1.75] text-foreground/80 text-justify max-w-[48ch]"
          data-testid="project-story"
        >
          {plate.story}
        </p>

        <div className="w-full max-w-[48ch] grid grid-cols-2 gap-x-8 gap-y-5 border-t border-foreground/10 pt-8">
          <Meta label="Catégorie" value={plate.category} />
          <Meta label="Année" value={plate.year} />
          <Meta label="Lieu" value={plate.location} />
          <Meta label="Référence" value={`MUND·${plate.n}/15`} />
        </div>
      </div>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/45">
        {label}
      </span>
      <span className="font-sans text-sm text-foreground/85">{value}</span>
    </div>
  );
}
