import type { LucideIcon } from "lucide-react";
import { SafeImg } from "./safe-img";

export function PageHero({ icon: Icon, eyebrow, title, subtitle, img }: { icon: LucideIcon; eyebrow: string; title: string; subtitle: string; img?: string }) {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-20">
      {img && <SafeImg src={img} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 to-ink" />
      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
          <Icon className="size-3.5" /> {eyebrow}
        </span>
        <h1 className="font-display text-balance text-4xl font-semibold sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">{subtitle}</p>
      </div>
    </section>
  );
}
