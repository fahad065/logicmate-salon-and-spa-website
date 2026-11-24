import Link from "next/link";
import { branches, countryOf, type Branch } from "@/data/branches";

// Branch chips: switch which branch's prices (and currency) a page shows.
export function BranchPicker({ current, basePath, extra = "" }: { current: Branch; basePath: string; extra?: string }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-foreground/50">Prices for</span>
      {branches.map((b) => (
        <Link
          key={b.id}
          href={`${basePath}?branch=${b.id}${extra}`}
          scroll={false}
          className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${b.id === current.id ? "border-ink bg-ink text-white" : "border-black/10 bg-white text-ink hover:border-ink"}`}
        >
          {countryOf(b.country).flag} {b.city} <span className="opacity-60">· {countryOf(b.country).currency}</span>
        </Link>
      ))}
    </div>
  );
}
