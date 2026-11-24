"use client";

import { useState, type FormEvent } from "react";
import { Check, Gift } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Field } from "@/components/field";
import { Success } from "@/components/success";
import { branches, countries, defaultBranch } from "@/data/branches";
import { money } from "@/data/treatments";
import { giftCardAmounts, giftCardTerms } from "@/data/offers";

export function GiftCardForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ country: defaultBranch.country as string, amount: 100, delivery: "email", to: "", toEmail: "", from: "", fromEmail: "", message: "", date: "" });
  const set = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) => setForm((f) => ({ ...f, [k]: v }));
  const branch = branches.find((b) => b.country === form.country) ?? defaultBranch;

  async function submit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // Demo site — no backend and no payment. Simulates a network round trip only.
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setDone(true);
  }

  if (done) {
    return (
      <Success title="Gift card ordered" onReset={() => setDone(false)} resetLabel="Send another gift card">
        A {money(form.amount, branch)} Aurelia gift card for {form.to || "your recipient"} {form.delivery === "email" ? <>will be emailed {form.date ? `on ${form.date}` : "shortly"}</> : "will be ready to collect in a gift box"}.
        (Demo site — no payment was taken.)
      </Success>
    );
  }

  return (
    <div>
      <PageHero icon={Gift} eyebrow="Gift cards" title="Give the gift of Aurelia" subtitle="For any treatment, package or product. Sent instantly, on a date you choose, or in a gift box." />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[3fr_2fr]">
        <form onSubmit={submit} className="space-y-5 rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-8">
          <Field label="Country" required>
            <select value={form.country} onChange={(e) => set("country", e.target.value)} className="input">
              {countries.map((c) => <option key={c.code} value={c.code}>{c.flag} {c.name} ({c.currency})</option>)}
            </select>
          </Field>
          <Field label="Amount" required>
            <div className="flex flex-wrap gap-2">
              {giftCardAmounts.map((a) => (
                <button type="button" key={a} onClick={() => set("amount", a)} className={`rounded-full border px-4 py-2 text-sm font-semibold ${form.amount === a ? "border-ink bg-ink text-white" : "border-black/10 text-ink hover:border-ink"}`}>{money(a, branch)}</button>
              ))}
            </div>
          </Field>
          <Field label="Delivery" required>
            <select value={form.delivery} onChange={(e) => set("delivery", e.target.value)} className="input">
              <option value="email">E-gift card by email</option>
              <option value="box">Printed card in a gift box (collect from a branch)</option>
            </select>
          </Field>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Recipient's name" required><input required value={form.to} onChange={(e) => set("to", e.target.value)} className="input" /></Field>
            {form.delivery === "email" && <Field label="Recipient's email" required><input required type="email" value={form.toEmail} onChange={(e) => set("toEmail", e.target.value)} className="input" /></Field>}
            <Field label="Your name" required><input required value={form.from} onChange={(e) => set("from", e.target.value)} className="input" /></Field>
            <Field label="Your email" required><input required type="email" value={form.fromEmail} onChange={(e) => set("fromEmail", e.target.value)} className="input" /></Field>
          </div>
          {form.delivery === "email" && <Field label="Send on (optional)"><input type="date" value={form.date} onChange={(e) => set("date", e.target.value)} className="input" /></Field>}
          <Field label="Message"><textarea rows={3} value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="Happy birthday! Enjoy some time for you." className="input" /></Field>
          <button disabled={submitting} className="w-full rounded-full bg-ink py-3 text-sm font-bold text-white hover:bg-ink-soft disabled:opacity-60">{submitting ? "Processing…" : `Buy ${money(form.amount, branch)} gift card`}</button>
        </form>
        <aside className="h-fit rounded-2xl bg-sand p-6">
          <h2 className="font-display text-2xl font-semibold text-ink">Good to know</h2>
          <ul className="mt-4 space-y-3 text-sm text-foreground/75">{giftCardTerms.map((t) => <li key={t} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-gold-dark" /> {t}</li>)}</ul>
        </aside>
      </section>
    </div>
  );
}
