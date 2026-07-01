import { useEffect, useState } from "react";

function isStagingHost(): boolean {
  if (typeof window === "undefined") return false;
  const overrides = import.meta.env.VITE_REVIEW_HOSTS;
  const allowed: string[] = overrides
    ? overrides.split(",").map((h: string) => h.trim()).filter(Boolean)
    : [];

  const hostname = window.location.hostname;

  if (allowed.length > 0) {
    return allowed.some((h) => hostname === h || hostname.endsWith(`.${h}`));
  }

  return (
    hostname === "madebydone.be" ||
    hostname.endsWith(".madebydone.be") ||
    hostname.startsWith("dev.") ||
    hostname.endsWith(".replit.dev") ||
    hostname.endsWith(".replit.app")
  );
}

export default function ReviewTool() {
  const [Agentation, setAgentation] = useState<React.ComponentType<{ webhookUrl: string }> | null>(null);

  useEffect(() => {
    if (!isStagingHost()) return;
    import("agentation").then((mod) => {
      setAgentation(() => mod.default ?? mod.Agentation ?? null);
    }).catch(() => {});
  }, []);

  if (!Agentation) return null;

  const webhookUrl = `${window.location.origin}/api/agentation-webhook`;
  return <Agentation webhookUrl={webhookUrl} />;
}
