"use client";

import { useEffect, useRef, useState } from "react";

// Hotlinked photo with a branded fallback if the URL fails to load.
export function SafeImg({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  // A photo that failed before the page's JavaScript was ready never fires onError.
  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, [src]);
  if (failed) {
    return <div className={`${className ?? ""} bg-gradient-to-br from-ink via-ink-soft to-gold-dark`} aria-label={alt} />;
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img ref={ref} src={src} alt={alt} className={className} loading="lazy" onError={() => setFailed(true)} />;
}
