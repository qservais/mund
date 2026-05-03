"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, type CSSProperties } from "react";

interface ZoomImage {
  src: string;
  alt?: string;
}

interface ZoomParallaxProps {
  images: ZoomImage[];
}

/**
 * Each motion.div covers the FULL sticky viewport (absolute inset-0).
 * Scale is applied to it → transform-origin defaults to the element's center
 * = the viewport center. All images therefore zoom outward from a single
 * shared focal point.
 *
 * Positions are in viewport units so they remain correct at any screen size.
 */
const SLOTS: CSSProperties[] = [
  // 0 — center (the "hero" of the spread — zooms into camera last)
  { top: "37.5vh", left: "37.5vw", width: "25vw", height: "25vh" },
  // 1 — top-left wide
  { top: "5vh",    left: "5vw",    width: "35vw", height: "30vh" },
  // 2 — left column, tall
  { top: "27.5vh", left: "5vw",    width: "20vw", height: "45vh" },
  // 3 — center-right
  { top: "37.5vh", left: "67.5vw", width: "25vw", height: "25vh" },
  // 4 — bottom-left
  { top: "65vh",   left: "5vw",    width: "20vw", height: "25vh" },
  // 5 — bottom-right
  { top: "65vh",   left: "55vw",   width: "25vw", height: "25vh" },
  // 6 — top-right small accent
  { top: "5vh",    left: "72vw",   width: "20vw", height: "25vh" },
];

export function ZoomParallax({ images }: ZoomParallaxProps) {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

  const capped = images.slice(0, 7);

  return (
    <div ref={container} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {capped.map(({ src, alt }, index) => {
          const scale = scales[index % scales.length];
          const slot = SLOTS[index % SLOTS.length];

          return (
            <motion.div
              key={index}
              style={{ scale }}
              className="absolute inset-0"
            >
              <div
                style={{
                  position: "absolute",
                  ...slot,
                }}
              >
                <img
                  src={src}
                  alt={alt ?? `Planche ${index + 1}`}
                  className="h-full w-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
