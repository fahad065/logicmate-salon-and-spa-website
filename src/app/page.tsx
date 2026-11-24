import Link from "next/link";
import { ArrowRight, CalendarCheck, Gift, Globe2, MessageCircle, ShieldCheck, Sparkles, Star } from "lucide-react";
import { SafeImg } from "@/components/safe-img";
import { branches, countryOf } from "@/data/branches";
import { categories, treatments, money } from "@/data/treatments";
import { packages } from "@/data/offers";
import { team } from "@/data/team";

const reviews = [
  { name: "Hessa A.", city: "Dubai", text: "Best balayage I've ever had — Layla listened to everything I wanted. The ladies-only floor is so relaxing." },
  { name: "Emma R.", city: "London", text: "Booked a lash lift at 11pm through the chat and was in the chair the next morning. Lovely team." },
  { name: "Jordan K.", city: "Toronto", text: "Daniel's deep tissue massage fixed my shoulders after a week at a desk. Receipts for my insurance too." },
];

export default function HomePage() {
  const dubai = branches[0];
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        <SafeImg src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1800&q=60" alt="Aurelia spa treatment room" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            <Sparkles className="size-3.5" /> {branches.length} branches · 5 countries
          </span>
          <h1 className="font-display max-w-2xl text-balance text-5xl font-semibold leading-[1.05] sm:text-6xl">Hair, nails, skin &amp; spa — beautifully done.</h1>
          <p className="mt-5 max-w-xl text-lg text-white/75">
            From a quick gel manicure to a full spa day, our stylists and therapists in Dubai, Abu Dhabi, London, New York,
            Sydney and Toronto take care of you from the moment you walk in.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/book" className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-bold text-ink hover:bg-gold-dark">
              <CalendarCheck className="size-4" /> Book an appointment
            </Link>
            <Link href="/treatments" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3 text-sm font-bold text-white hover:border-gold hover:text-gold">
              See the menu &amp; prices <ArrowRight className="size-4" />
            </Link>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-white/60"><MessageCircle className="size-4 text-gold" /> Questions at midnight? Ask our chat assistant — bottom right.</p>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">The menu</p>
          <h2 className="font-display mt-2 text-4xl font-semibold text-ink">What would you like today?</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => {
            const items = treatments.filter((t) => t.category === c.id);
            const from = Math.min(...items.map((t) => t.usd));
            return (
              <Link key={c.id} href={`/treatments/${c.id}`} className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className="h-44 overflow-hidden"><SafeImg src={c.image} alt={c.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                <div className="p-5">
                  <h3 className="font-display text-2xl font-semibold text-ink">{c.name}</h3>
                  <p className="mt-1 text-sm text-foreground/60">{c.short}</p>
                  <p className="mt-3 text-sm font-semibold text-gold-dark">{items.length} treatments · from {money(from, dubai)} in Dubai</p>
                </div>
              </Link>
            );
          })}
          <Link href="/packages" className="flex flex-col justify-center rounded-2xl bg-sand p-6 text-ink transition-colors hover:bg-gold/30">
            <Gift className="mb-3 size-7 text-gold-dark" />
            <h3 className="font-display text-2xl font-semibold">Spa days &amp; packages</h3>
            <p className="mt-1 text-sm text-foreground/65">{packages.length} packages, memberships and gift cards.</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold">See packages <ArrowRight className="size-4" /></span>
          </Link>
        </div>
      </section>

      {/* Why */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Spotless & safe", text: "Hospital-grade sterilisation, single-use files and liners, and free patch tests before colour and tints." },
            { icon: Globe2, title: "We speak your language", text: "Our teams speak English, Arabic, French, Spanish, Mandarin, Hindi and more — ask for a team member who speaks yours." },
            { icon: CalendarCheck, title: "Book any time", text: "Book online, on WhatsApp or through our chat assistant, day or night. Our front desk confirms within the hour while we're open." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-black/5 p-6">
              <f.icon className="mb-3 size-7 text-gold-dark" />
              <h3 className="font-display text-2xl font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Branches */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">Visit us</p>
            <h2 className="font-display mt-2 text-4xl font-semibold text-ink">Our branches</h2>
          </div>
          <Link href="/branches" className="inline-flex items-center gap-1 text-sm font-bold text-ink hover:text-gold-dark">Addresses &amp; hours <ArrowRight className="size-4" /></Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((b) => (
            <Link key={b.id} href={`/branches#${b.id}`} className="group relative h-56 overflow-hidden rounded-2xl">
              <SafeImg src={b.image} alt={`Aurelia ${b.city}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
              <div className="absolute bottom-0 p-5 text-white">
                <p className="text-sm text-white/70">{countryOf(b.country).flag} {countryOf(b.country).name}</p>
                <h3 className="font-display text-3xl font-semibold">{b.city}</h3>
                <p className="text-sm text-white/75">{b.area}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Team + reviews */}
      <section className="bg-sand py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">Kind words</p>
            <h2 className="font-display mt-2 text-4xl font-semibold text-ink">Loved by our clients</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-3 flex gap-0.5 text-gold">{Array.from({ length: 5 }, (_, i) => <Star key={i} className="size-4 fill-current" />)}</div>
                <blockquote className="text-sm leading-relaxed text-foreground/75">&ldquo;{r.text}&rdquo;</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-ink">{r.name} · {r.city}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-10 text-center">
            <Link href="/team" className="inline-flex items-center gap-1 text-sm font-bold text-ink hover:text-gold-dark">Meet our {team.length} senior stylists &amp; therapists <ArrowRight className="size-4" /></Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8">
        <h2 className="font-display text-4xl font-semibold text-ink">Treat someone you love</h2>
        <p className="mx-auto mt-3 max-w-xl text-foreground/65">Aurelia gift cards work for any treatment or package, at any branch in the same country, for 12 months.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link href="/gift-cards" className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-sm font-bold text-white hover:bg-ink-soft"><Gift className="size-4" /> Buy a gift card</Link>
          <Link href="/book" className="inline-flex items-center gap-2 rounded-full border border-black/15 px-7 py-3 text-sm font-bold text-ink hover:border-ink">Book an appointment</Link>
        </div>
      </section>
    </div>
  );
}
