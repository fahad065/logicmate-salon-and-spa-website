import { ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { faqs, policies } from "@/data/offers";

export const metadata = { title: "Policies & FAQ — Aurelia Salon & Spa" };

export default function PoliciesPage() {
  return (
    <div>
      <PageHero icon={ShieldCheck} eyebrow="Before you visit" title="Policies & FAQ" subtitle="Bookings, deposits, cancellations, patch tests — everything to know before your appointment." />
      <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-3xl font-semibold text-ink">Our policies</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {policies.map((p) => (
            <div key={p.title} className="rounded-2xl border border-black/5 bg-white p-5">
              <h3 className="font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">{p.body}</p>
            </div>
          ))}
        </div>
        <h2 className="font-display mt-14 text-3xl font-semibold text-ink">Frequently asked</h2>
        <div className="mt-5 divide-y divide-black/10 rounded-2xl border border-black/5 bg-white">
          {faqs.map((f) => (
            <details key={f.title} className="group p-5">
              <summary className="cursor-pointer list-none font-semibold text-ink marker:hidden">{f.title}<span className="float-right text-gold-dark group-open:rotate-45 transition-transform">+</span></summary>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{f.body}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
