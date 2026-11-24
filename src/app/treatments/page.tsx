import Link from "next/link";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { BranchPicker } from "@/components/branch-picker";
import { branchOf, defaultBranch } from "@/data/branches";
import { availableAt, categories, durationLabel, priceAt, treatments } from "@/data/treatments";
import { one } from "@/lib";

export const metadata = { title: "Treatments & prices — Aurelia Salon & Spa" };

export default async function TreatmentsPage({ searchParams }: PageProps<"/treatments">) {
  const sp = await searchParams;
  const branch = branchOf(one(sp.branch)) ?? defaultBranch;
  return (
    <div>
      <PageHero icon={Sparkles} eyebrow="The menu" title="Treatments & prices" subtitle="Every treatment, how long it takes and what it costs. Pick a branch to see its prices in local currency." />
      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <BranchPicker current={branch} basePath="/treatments" />
        <div className="mt-10 space-y-12">
          {categories.map((c) => {
            const items = treatments.filter((t) => t.category === c.id);
            const offered = branch.services.includes(c.id);
            return (
              <div key={c.id} id={c.id}>
                <div className="mb-4 flex flex-wrap items-end justify-between gap-3 border-b border-black/10 pb-3">
                  <div>
                    <h2 className="font-display text-3xl font-semibold text-ink">{c.name}</h2>
                    <p className="text-sm text-foreground/60">{c.short}</p>
                  </div>
                  <Link href={`/treatments/${c.id}?branch=${branch.id}`} className="inline-flex items-center gap-1 text-sm font-bold text-ink hover:text-gold-dark">Details <ArrowRight className="size-4" /></Link>
                </div>
                {!offered ? (
                  <p className="rounded-xl bg-sand px-4 py-3 text-sm text-foreground/70">{c.name} isn&apos;t offered at our {branch.city} branch. <Link href="/branches" className="font-semibold underline">See which branches offer it</Link>.</p>
                ) : (
                  <ul className="divide-y divide-black/5">
                    {items.map((t) => {
                      const ok = availableAt(t, branch);
                      return (
                        <li key={t.slug} className="flex flex-col gap-2 py-3.5 sm:flex-row sm:items-center sm:justify-between">
                          <div className="min-w-0">
                            <p className="font-semibold text-ink">{t.name}</p>
                            <p className="flex items-center gap-1.5 text-sm text-foreground/55"><Clock className="size-3.5" /> {durationLabel(t.minutes)}{!ok && <span className="ml-1 text-gold-dark">· not at {branch.city}</span>}</p>
                          </div>
                          {ok && (
                            <div className="flex shrink-0 items-center gap-4">
                              <span className="font-semibold text-ink">{priceAt(t, branch)}</span>
                              <Link href={`/book?treatment=${t.slug}&branch=${branch.id}`} className="rounded-full bg-ink px-4 py-1.5 text-xs font-bold text-white hover:bg-ink-soft">Book</Link>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
        <p className="mt-12 text-center text-sm text-foreground/55">Prices are per person and include local taxes where applicable. Long hair, extra product or add-ons may change the final price — your stylist will confirm before starting.</p>
      </section>
    </div>
  );
}
