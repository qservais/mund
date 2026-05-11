import type { Plate } from "@/data/plates";

interface Props {
  plate: Plate;
}

export function LayoutD({ plate }: Props) {
  const gallery = plate.gallery ?? [plate.src];
  const [hero, ...rest] = gallery;

  return (
    <div>
      <div className="relative px-6 md:px-12 xl:px-24 pt-4 pb-0">
        <div className="relative flex gap-0">
          <div className="w-full md:w-[58%] pr-0 md:pr-16 pt-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.45em] text-accent block mb-8">
              Note du studio
            </span>
            <p
              className="font-mono text-[11px] md:text-[13px] uppercase tracking-[0.18em] leading-[2.2] text-foreground/75 text-justify"
              data-testid="project-story"
            >
              {plate.story}
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-5 border-t border-foreground/10 pt-8 mt-12">
              <Meta label="Catégorie" value={plate.category} />
              <Meta label="Année" value={plate.year} />
              <Meta label="Lieu" value={plate.location} />
              <Meta label="Référence" value={`MUND·${plate.n}/15`} />
            </div>
          </div>

          <figure className="hidden md:block absolute right-0 top-0 w-[42%]" style={{ marginLeft: "auto" }}>
            <img
              src={hero}
              alt={plate.alt}
              loading="eager"
              className="w-full h-[75vh] object-cover"
            />
          </figure>

          <figure className="md:hidden w-full mt-8">
            <img
              src={hero}
              alt={plate.alt}
              loading="eager"
              className="w-full h-72 object-cover"
            />
          </figure>
        </div>
      </div>

      {rest.length > 0 && (
        <div className="mt-2 flex flex-col gap-1">
          {rest.map((src, i) => (
            <figure key={i} className="w-full">
              <img
                src={src}
                alt={`${plate.alt} — ${i + 2}`}
                loading="lazy"
                className="w-full h-56 md:h-[40vh] object-cover"
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
      <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/45">
        {label}
      </span>
      <span className="font-sans text-sm text-foreground/85">{value}</span>
    </div>
  );
}
