import Link from "next/link";
import { Check, Clock, Crown, Gift, Heart } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { BranchPicker } from "@/components/branch-picker";
import { SafeImg } from "@/components/safe-img";
import { branchOf, defaultBranch } from "@/data/branches";
import { durationLabel, money } from "@/data/treatments";
import { memberships, membershipTerms, packages } from "@/data/offers";
import { one } from "@/lib";

export const metadata = { title: "Packages & memberships — Aurelia Salon & Spa" };

export default async function PackagesPage({ searchParams }: PageProps<"/packages">) {
  const sp = await searchParams;
  const branch = branchOf(one(sp.branch)) ?? defaultBranch;
  return (
    <div>
      <PageHero icon={Heart} eyebrow="Treat yourself" title="Spa days, packages & memberships" subtitle="Bundles that save you time and money, and monthly memberships for your regular visits." />
      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <BranchPicker current={branch} basePath="/packages" />
        <h2 className="font-display mt-12 text-3xl font-semibold text-ink">Packages</h2>
        <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => {
            const ok = !p.onlyAt || p.onlyAt.includes(branch.id);
            return (
              <article key={p.slug} className="flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <SafeImg src={p.image} alt={p.name} className="h-44 w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-2xl font-semibold text-ink">{p.name}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-foreground/55"><Clock className="size-3.5" /> {durationLabel(p.minutes)}</p>
                  <ul className="mt-3 space-y-1.5 text-sm text-foreground/75">{p.includes.map((i) => <li key={i} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-gold-dark" /> {i}</li>)}</ul>
                  <p className="mt-3 text-xs text-foreground/55">Best for: {p.bestFor}</p>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                    {ok ? (
                      <>
                        <span className="text-lg font-semibold text-ink">{money(p.usd, branch)}</span>
                        <Link href={`/book?package=${p.slug}&branch=${branch.id}`} className="rounded-full bg-ink px-4 py-1.5 text-sm font-bold text-white hover:bg-ink-soft">Book</Link>
                      </>
                    ) : (
                      <span className="text-sm text-gold-dark">Only at {p.onlyAt!.map((id) => branchOf(id)?.city).join(", ")}</span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <h2 className="font-display mt-16 text-3xl font-semibold text-ink">Memberships</h2>
        <div className="mt-5 grid gap-6 md:grid-cols-3">
          {memberships.map((m) => (
            <article key={m.name} className="rounded-2xl bg-ink p-6 text-white">
              <Crown className="size-6 text-gold" />
              <h3 className="font-display mt-3 text-2xl font-semibold">{m.name}</h3>
              <p className="mt-1 text-2xl font-semibold text-gold">{money(m.usdPerMonth, branch)}<span className="text-sm font-normal text-white/60"> / month</span></p>
              <ul className="mt-4 space-y-1.5 text-sm text-white/80">{m.perks.map((p) => <li key={p} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-gold" /> {p}</li>)}</ul>
            </article>
          ))}
        </div>
        <p className="mt-4 text-sm text-foreground/60">{membershipTerms} Join at the front desk or ask our chat assistant to send a request.</p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Link href={`/treatments/bridal?branch=${branch.id}`} className="rounded-2xl bg-sand p-6 hover:bg-gold/30">
            <Heart className="size-6 text-gold-dark" />
            <h3 className="font-display mt-2 text-2xl font-semibold text-ink">Bridal &amp; events</h3>
            <p className="mt-1 text-sm text-foreground/65">Trials, wedding-day hair &amp; make-up, henna nights and bridal parties.</p>
          </Link>
          <Link href="/gift-cards" className="rounded-2xl bg-sand p-6 hover:bg-gold/30">
            <Gift className="size-6 text-gold-dark" />
            <h3 className="font-display mt-2 text-2xl font-semibold text-ink">Gift cards</h3>
            <p className="mt-1 text-sm text-foreground/65">Any amount from {money(50, branch)}, sent by email or in a gift box.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
