import { motion } from "framer-motion";

interface StickyScrollGalleryProps {
  images: string[];
  alt: string;
}

export function StickyScrollGallery({ images, alt }: StickyScrollGalleryProps) {
  if (images.length === 0) return null;

  const n = images.length;

  const centerCount = n <= 3 ? 1 : n <= 6 ? 2 : 3;
  const sideCount = n - centerCount;
  const leftCount = Math.ceil(sideCount / 2);

  const leftImages = images.slice(0, leftCount);
  const centerImages = images.slice(leftCount, leftCount + centerCount);
  const rightImages = images.slice(leftCount + centerCount);

  return (
    <section className="w-full overflow-hidden">
      <div className="grid grid-cols-3 gap-1 md:gap-2">
        <div className="grid gap-1 md:gap-2">
          {leftImages.map((src, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.08 }}
              className="w-full"
            >
              <img
                src={src}
                alt={`${alt} — ${i + 1}`}
                loading="lazy"
                className="w-full h-64 md:h-[28rem] object-cover"
              />
            </motion.figure>
          ))}
        </div>

        <div
          className="sticky top-0 h-screen grid gap-1 md:gap-2 overflow-hidden"
          style={{ gridTemplateRows: `repeat(${centerImages.length}, 1fr)` }}
        >
          {centerImages.map((src, i) => (
            <figure key={i} className="w-full h-full overflow-hidden">
              <img
                src={src}
                alt={`${alt} — ${leftCount + i + 1}`}
                loading={i === 0 ? "eager" : "lazy"}
                className="w-full h-full object-cover"
              />
            </figure>
          ))}
        </div>

        <div className="grid gap-1 md:gap-2">
          {rightImages.map((src, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.08 }}
              className="w-full"
            >
              <img
                src={src}
                alt={`${alt} — ${leftCount + centerCount + i + 1}`}
                loading="lazy"
                className="w-full h-64 md:h-[28rem] object-cover"
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
