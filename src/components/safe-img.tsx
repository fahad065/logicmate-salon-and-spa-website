"use client";

import { useState } from "react";

// Hotlinked photo with a branded fallback if the URL fails to load.
export function SafeImg({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <div className={`${className ?? ""} bg-gradient-to-br from-ink via-ink-soft to-gold-dark`} aria-label={alt} />;
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} loading="lazy" onError={() => setFailed(true)} />;
}
