import Link from "next/link";
import { Flower2, Leaf, ShieldCheck, Users } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SafeImg } from "@/components/safe-img";
import { branches } from "@/data/branches";

export const metadata = { title: "About — Aurelia Salon & Spa" };

const timeline = [
  { year: "2012", text: "Aurelia opens a four-chair salon in a Jumeirah villa, Dubai." },
  { year: "2016", text: "Abu Dhabi opens on Al Maryah Island with our first hammam and bridal suite." },
  { year: "2019", text: "London, Marylebone — our first branch outside the UAE." },
  { year: "2022", text: "New York (SoHo) and Toronto (Yorkville) join the family." },
  { year: "2024", text: "Sydney's Paddington day spa opens with a fully vegan menu." },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero icon={Flower2} eyebrow="Our story" title="About Aurelia" subtitle="A family of salons and spas built on one idea: unhurried, beautifully done treatments in a space that feels like yours." />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="font-display text-3xl font-semibold text-ink">Small salon thinking, {branches.length} branches</h2>
          <p className="mt-4 leading-relaxed text-foreground/70">We started with four chairs and a promise that nobody would feel rushed. Today we have teams in five countries, but every appointment still starts with a proper consultation, and every therapist has time to listen.</p>
          <p className="mt-3 leading-relaxed text-foreground/70">Our stylists and therapists train together every year, so a blow-dry in London feels like a blow-dry in Dubai.</p>
        </div>
        <SafeImg src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=60" alt="Aurelia salon" className="h-80 w-full rounded-2xl object-cover" />
      </section>
      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:px-8 md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Clean, always", text: "Hospital-grade sterilisation and single-use files, liners and buffers." },
            { icon: Leaf, title: "Kind products", text: "Professional brands chosen for results and skin safety; vegan options at every branch." },
            { icon: Users, title: "People first", text: "Fair pay, real training and senior team members who stay for years." },
          ].map((v) => (
            <div key={v.title} className="rounded-2xl border border-black/5 p-6">
              <v.icon className="size-7 text-gold-dark" />
              <h3 className="font-display mt-3 text-2xl font-semibold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm text-foreground/65">{v.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-3xl font-semibold text-ink">Our journey</h2>
        <ol className="mt-6 space-y-4 border-l-2 border-gold/40 pl-6">
          {timeline.map((t) => <li key={t.year}><p className="font-display text-xl font-semibold text-gold-dark">{t.year}</p><p className="text-foreground/70">{t.text}</p></li>)}
        </ol>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/team" className="rounded-full bg-ink px-6 py-2.5 text-sm font-bold text-white hover:bg-ink-soft">Meet the team</Link>
          <Link href="/branches" className="rounded-full border border-black/15 px-6 py-2.5 text-sm font-bold text-ink hover:border-ink">Find a branch</Link>
        </div>
      </section>
    </div>
  );
}
