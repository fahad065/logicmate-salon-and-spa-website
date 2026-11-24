import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertCircle, CalendarCheck, Clock, MapPin } from "lucide-react";
import { BranchPicker } from "@/components/branch-picker";
import { SafeImg } from "@/components/safe-img";
import { branchOf, branches, defaultBranch } from "@/data/branches";
import { availableAt, categories, categoryOf, durationLabel, priceAt, treatments } from "@/data/treatments";
import { team } from "@/data/team";
import { one } from "@/lib";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.id }));
}

export async function generateMetadata({ params }: PageProps<"/treatments/[category]">) {
  const { category } = await params;
  const c = categoryOf(category);
  return { title: c ? `${c.name} — Aurelia Salon & Spa` : "Treatments — Aurelia Salon & Spa" };
}

export default async function CategoryPage({ params, searchParams }: PageProps<"/treatments/[category]">) {
  const { category } = await params;
  const c = categoryOf(category);
  if (!c) notFound();
  const sp = await searchParams;
  const branch = branchOf(one(sp.branch)) ?? defaultBranch;
  const items = treatments.filter((t) => t.category === c.id);
  const offeredAt = branches.filter((b) => b.services.includes(c.id));
  const experts = team.filter((m) => m.specialties.includes(c.id));

  return (
    <div>
      <section className="relative overflow-hidden bg-ink text-white">
        <SafeImg src={c.image} alt={c.name} className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <Link href="/treatments" className="text-sm text-white/60 hover:text-gold">← All treatments</Link>
          <h1 className="font-display mt-3 text-5xl font-semibold">{c.name}</h1>
          <p className="mt-4 max-w-2xl text-white/75">{c.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <BranchPicker current={branch} basePath={`/treatments/${c.id}`} />
        {!branch.services.includes(c.id) && (
          <p className="mx-auto mt-6 max-w-2xl rounded-xl bg-sand px-4 py-3 text-center text-sm text-foreground/70">{c.name} isn&apos;t offered at our {branch.city} branch — available at {offeredAt.map((b) => b.city).join(", ")}.</p>
        )}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {items.map((t) => {
            const ok = availableAt(t, branch);
            return (
              <article key={t.slug} className="flex flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-display text-2xl font-semibold text-ink">{t.name}</h2>
                  {ok && <span className="shrink-0 font-semibold text-ink">{priceAt(t, branch)}</span>}
                </div>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-foreground/55"><Clock className="size-3.5" /> {durationLabel(t.minutes)}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{t.description}</p>
                {t.note && <p className="mt-3 flex gap-2 rounded-lg bg-sand px-3 py-2 text-xs text-foreground/70"><AlertCircle className="mt-0.5 size-3.5 shrink-0 text-gold-dark" /> {t.note}</p>}
                {t.onlyAt && <p className="mt-3 flex items-center gap-1.5 text-xs text-foreground/55"><MapPin className="size-3.5" /> Only at {t.onlyAt.map((id) => branchOf(id)?.city).join(" & ")}</p>}
                <div className="mt-auto pt-5">
                  {ok ? (
                    <Link href={`/book?treatment=${t.slug}&branch=${branch.id}`} className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2 text-sm font-bold text-white hover:bg-ink-soft"><CalendarCheck className="size-4" /> Book at {branch.city}</Link>
                  ) : (
                    <p className="text-sm text-gold-dark">Not available at {branch.city}</p>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {c.gallery.map((g, i) => <SafeImg key={g} src={g} alt={`${c.name} at Aurelia ${i + 1}`} className="h-56 w-full rounded-2xl object-cover" />)}
        </div>

        {experts.length > 0 && (
          <div className="mt-14">
            <h2 className="font-display text-3xl font-semibold text-ink">Who you&apos;ll see</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {experts.map((m) => (
                <div key={m.name} className="flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-4">
                  <SafeImg src={m.image} alt={m.name} className="size-16 shrink-0 rounded-full object-cover" />
                  <div className="min-w-0">
                    <p className="font-semibold text-ink">{m.name}</p>
                    <p className="text-sm text-foreground/60">{m.role} · {branchOf(m.branch)?.city}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
