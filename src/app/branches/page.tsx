import Link from "next/link";
import { Car, Clock, Globe2, MapPin, MessageCircle, Phone, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SafeImg } from "@/components/safe-img";
import { branches, countryOf } from "@/data/branches";
import { categories } from "@/data/treatments";

export const metadata = { title: "Branches — Aurelia Salon & Spa" };

export default function BranchesPage() {
  return (
    <div>
      <PageHero icon={MapPin} eyebrow="Visit us" title="Our branches" subtitle="Six salons and spas in five countries. Opening hours are local time." />
      <section className="mx-auto max-w-6xl space-y-10 px-5 py-14 sm:px-8">
        {branches.map((b) => {
          const c = countryOf(b.country);
          return (
            <article key={b.id} id={b.id} className="scroll-mt-24 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm md:grid md:grid-cols-[2fr_3fr]">
              <SafeImg src={b.image} alt={`Aurelia ${b.city}`} className="h-56 w-full object-cover md:h-full" />
              <div className="p-6 sm:p-8">
                <p className="text-sm text-foreground/55">{c.flag} {c.name} · prices in {c.currency}</p>
                <h2 className="font-display text-3xl font-semibold text-ink">{b.city} <span className="text-foreground/45">· {b.area}</span></h2>
                <div className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
                  <p className="flex gap-2"><MapPin className="mt-0.5 size-4 shrink-0 text-gold-dark" /> <a href={b.mapsUrl} target="_blank" rel="noreferrer" className="hover:underline">{b.address}</a></p>
                  <div className="space-y-1">
                    <p className="flex gap-2"><Phone className="mt-0.5 size-4 shrink-0 text-gold-dark" /> {b.phone}</p>
                    <p className="flex gap-2"><MessageCircle className="mt-0.5 size-4 shrink-0 text-gold-dark" /> WhatsApp {b.whatsapp}</p>
                  </div>
                  <div className="flex gap-2"><Clock className="mt-0.5 size-4 shrink-0 text-gold-dark" />
                    <ul>{b.hours.map((h) => <li key={h.days}><span className="text-foreground/60">{h.days}:</span> {h.time}</li>)}<li className="text-xs text-foreground/45">{b.timezone}</li></ul>
                  </div>
                  <div className="space-y-1">
                    <p className="flex gap-2"><Globe2 className="mt-0.5 size-4 shrink-0 text-gold-dark" /> {b.languages.join(", ")}</p>
                    <p className="flex gap-2"><Car className="mt-0.5 size-4 shrink-0 text-gold-dark" /> {b.parking}</p>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground/50">Services offered</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {categories.filter((cat) => b.services.includes(cat.id)).map((cat) => (
                      <Link key={cat.id} href={`/treatments/${cat.id}?branch=${b.id}`} className="rounded-full bg-sand px-3 py-1 text-xs font-medium text-ink hover:bg-gold/30">{cat.name}</Link>
                    ))}
                  </div>
                </div>
                <ul className="mt-4 space-y-1 text-sm text-foreground/70">
                  {b.highlights.map((h) => <li key={h} className="flex gap-2"><Sparkles className="mt-0.5 size-3.5 shrink-0 text-gold" /> {h}</li>)}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href={`/book?branch=${b.id}`} className="rounded-full bg-ink px-5 py-2 text-sm font-bold text-white hover:bg-ink-soft">Book at {b.city}</Link>
                  <Link href={`/treatments?branch=${b.id}`} className="rounded-full border border-black/15 px-5 py-2 text-sm font-bold text-ink hover:border-ink">{b.city} prices</Link>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
