import type { Plate } from "@/data/plates";

interface Props {
  plate: Plate;
}

export function LayoutE({ plate }: Props) {
  const gallery = plate.gallery ?? [plate.src];

  return (
    <div>
      <div className="px-6 md:px-12 xl:px-24 pt-4 pb-4">
        <div className="h-[12vh] md:h-[18vh]" />

        <div className="flex flex-col gap-1 md:gap-2">
          {gallery.map((src, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={i}
                className="flex flex-col gap-4"
                style={{ alignItems: isEven ? "flex-start" : "flex-end" }}
              >
                <figure style={{ width: "clamp(260px, 45vw, 700px)" }}>
                  <img
                    src={src}
                    alt={`${plate.alt} — ${i + 1}`}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="w-full h-52 md:h-80 object-cover"
                  />
                </figure>

                {i === 0 && (
                  <div className="mt-4 mb-8" style={{ width: "clamp(260px, 45vw, 700px)" }}>
                    <span className="font-mono text-[9px] uppercase tracking-[0.45em] text-accent block mb-5">
                      Note du studio
                    </span>
                    <p
                      className="font-sans text-sm md:text-base leading-[1.8] text-foreground/80 text-justify"
                      data-testid="project-story"
                    >
                      {plate.story}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 border-t border-foreground/10 pt-10">
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
