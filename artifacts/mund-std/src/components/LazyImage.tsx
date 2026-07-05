import { useState } from "react";

/**
 * Drop-in replacement for <img> with a skeleton shimmer while loading.
 *
 * style     → applied to the wrapper div (position, width, height, aspectRatio, etc.)
 * imgStyle  → passed to the <img> (objectFit, objectPosition overrides)
 * priority  → true on the LCP/hero — skips lazy loading, sets fetchpriority=high
 */
export function LazyImage({
  src,
  alt = "",
  style,
  imgStyle,
  priority = false,
}: {
  src: string;
  alt?: string;
  style?: React.CSSProperties;
  imgStyle?: React.CSSProperties;
  priority?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const isAbsolute = style?.position === "absolute";

  return (
    <div
      style={{
        position: isAbsolute ? "absolute" : "relative",
        overflow: "hidden",
        backgroundColor: "#e8e5df",
        ...style,
      }}
    >
      {!loaded && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(90deg, #e8e5df 25%, #f0ede9 50%, #e8e5df 75%)",
            backgroundSize: "200% 100%",
            animation: "sk-shimmer 1.6s infinite linear",
          }}
        />
      )}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        {...(priority ? { fetchPriority: "high" } as Record<string, string> : {})}
        onLoad={() => setLoaded(true)}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          objectFit: "cover",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.45s ease",
          ...imgStyle,
        }}
      />
    </div>
  );
}
