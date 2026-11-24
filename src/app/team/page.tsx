import Link from "next/link";
import { Globe2, Users } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SafeImg } from "@/components/safe-img";
import { branchOf } from "@/data/branches";
import { categoryOf } from "@/data/treatments";
import { team } from "@/data/team";

export const metadata = { title: "Our team — Aurelia Salon & Spa" };

export default function TeamPage() {
  return (
    <div>
      <PageHero icon={Users} eyebrow="Our people" title="Meet the team" subtitle="Some of our senior stylists, artists and therapists. You can ask for anyone by name when you book." />
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <article key={m.name} className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
              <SafeImg src={m.image} alt={m.name} className="h-72 w-full object-cover" />
              <div className="p-5">
                <h2 className="font-display text-2xl font-semibold text-ink">{m.name}</h2>
                <p className="text-sm font-semibold text-gold-dark">{m.role} · {branchOf(m.branch)?.city}</p>
                <p className="mt-2 text-sm text-foreground/70">{m.focus}</p>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-foreground/55"><Globe2 className="size-3.5" /> {m.languages.join(", ")}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {m.specialties.map((s) => <span key={s} className="rounded-full bg-sand px-2.5 py-0.5 text-xs text-ink">{categoryOf(s)?.name}</span>)}
                </div>
                <Link href={`/book?branch=${m.branch}&stylist=${encodeURIComponent(m.name)}`} className="mt-4 inline-block text-sm font-bold text-ink hover:text-gold-dark">Book with {m.name.split(" ")[0]} →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
