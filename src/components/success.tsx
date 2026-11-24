import { CheckCircle2 } from "lucide-react";

export function Success({ title, children, onReset, resetLabel }: { title: string; children: React.ReactNode; onReset: () => void; resetLabel: string }) {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-5 py-28 text-center sm:px-8">
      <span className="mb-5 flex size-16 items-center justify-center rounded-full bg-sand text-gold-dark"><CheckCircle2 className="size-8" /></span>
      <h1 className="font-display text-3xl font-semibold text-ink">{title}</h1>
      <div className="mt-3 text-foreground/65">{children}</div>
      <button onClick={onReset} className="mt-8 rounded-full border border-black/10 px-6 py-2.5 text-sm font-bold text-ink hover:border-ink">{resetLabel}</button>
    </div>
  );
}
