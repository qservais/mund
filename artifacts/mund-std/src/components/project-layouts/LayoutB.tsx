import { motion } from "framer-motion";
import type { Plate } from "@/data/plates";

interface Props {
  plate: Plate;
}

export function LayoutB({ plate }: Props) {
  const gallery = plate.gallery ?? [plate.src];

  return (
    <div>
      <div className="px-6 md:px-12 xl:px-24 pt-4 pb-16 md:pb-24">
        <div className="text-center mb-12 md:mb-20">
          <span className="font-mono text-[9px] uppercase tracking-[0.45em] text-foreground/40">
            Planche {plate.n} — {plate.category}
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {gallery.map((src, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.85, delay: i * 0.06 }}
              className="flex flex-col gap-3"
            >
              <div className="overflow-hidden bg-foreground/5">
                <img
                  src={src}
                  alt={`${plate.alt} — ${i + 1}`}
                  loading={i < 3 ? "eager" : "lazy"}
                  className="w-full h-56 md:h-[28rem] object-cover"
                />
              </div>
              <span className="font-mono text-[9px] text-foreground/40 tracking-[0.2em]">
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.figure>
          ))}
        </div>

        <div className="mt-20 md:mt-32 flex flex-col items-center gap-10">
          <p
            className="font-sans text-base md:text-lg leading-[1.75] text-foreground/80 text-justify max-w-[52ch]"
            data-testid="project-story"
          >
            {plate.story}
          </p>

          <div className="w-full max-w-[52ch] grid grid-cols-2 gap-x-8 gap-y-5 border-t border-foreground/10 pt-8">
            <Meta label="Catégorie" value={plate.category} />
            <Meta label="Année" value={plate.year} />
            <Meta label="Lieu" value={plate.location} />
            <Meta label="Référence" value={`MUND·${plate.n}/15`} />
          </div>
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
