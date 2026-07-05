import { useState } from "react";

/**
 * Drop-in replacement for <img> with a skeleton shimmer while loading.
 *
 * style     → applied to the wrapper div (position, width, height, aspectRatio, etc.)
 * imgStyle  → passed to the <img> (objectFit, objectPosition overrides)
 */
export function LazyImage({
  src,
  alt = "",
  style,
  imgStyle,
}: {
  src: string;
  alt?: string;
  style?: React.CSSProperties;
  imgStyle?: React.CSSProperties;
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
