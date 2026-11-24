"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { CalendarCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Field } from "@/components/field";
import { Success } from "@/components/success";
import { branchOf, branches, defaultBranch } from "@/data/branches";
import { availableAt, categories, priceAt, treatments } from "@/data/treatments";
import { packages } from "@/data/offers";
import { team } from "@/data/team";

export function BookingForm() {
  const params = useSearchParams();
  const pkg = packages.find((p) => p.slug === params.get("package"));
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    branch: branchOf(params.get("branch") ?? undefined)?.id ?? defaultBranch.id,
    treatment: pkg ? `package:${pkg.slug}` : params.get("treatment") ?? "",
    stylist: params.get("stylist") ?? "",
    date: "", time: "Morning", firstVisit: "no", notes: "",
  });
  const set = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) => setForm((f) => ({ ...f, [k]: v }));
  const branch = branchOf(form.branch) ?? defaultBranch;
  const chosenPkg = form.treatment.startsWith("package:") ? packages.find((p) => `package:${p.slug}` === form.treatment) : undefined;
  const chosen = treatments.find((t) => t.slug === form.treatment);
  const label = chosenPkg?.name ?? chosen?.name;
  const staff = team.filter((m) => m.branch === branch.id);

  function changeBranch(id: string) {
    const b = branchOf(id) ?? defaultBranch;
    setForm((f) => {
      const t = treatments.find((x) => x.slug === f.treatment);
      const p = packages.find((x) => `package:${x.slug}` === f.treatment);
      const keep = (t && availableAt(t, b)) || (p && (!p.onlyAt || p.onlyAt.includes(b.id)));
      return { ...f, branch: b.id, treatment: keep ? f.treatment : "", stylist: team.some((m) => m.name === f.stylist && m.branch === b.id) ? f.stylist : "" };
    });
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // Demo site — no backend. Simulates a network round trip only.
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setDone(true);
  }

  if (done) {
    return (
      <Success title="Booking requested" onReset={() => setDone(false)} resetLabel="Book something else">
        Thanks, {form.name.split(" ")[0] || "there"} — your request{label ? <> for <strong>{label}</strong></> : ""} at Aurelia {branch.city} is with our front desk.
        We&apos;ll message {form.phone || "you"} to confirm the time{chosen?.note ? ", and remind you about anything to do beforehand" : ""}.
      </Success>
    );
  }

  return (
    <div>
      <PageHero icon={CalendarCheck} eyebrow="Appointments" title="Book an appointment" subtitle="Tell us what you'd like and when. Our front desk confirms by message or call — usually within an hour while we're open." />
      <section className="mx-auto max-w-2xl px-5 py-14 sm:px-8">
        <form onSubmit={submit} className="space-y-5 rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" required><input required value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Your name" className="input" /></Field>
            <Field label="Phone / WhatsApp" required><input required type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="Include your country code" className="input" /></Field>
          </div>
          <Field label="Email (optional)"><input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@example.com" className="input" /></Field>
          <Field label="Branch" required>
            <select required value={form.branch} onChange={(e) => changeBranch(e.target.value)} className="input">
              {branches.map((b) => <option key={b.id} value={b.id}>{b.city} — {b.area}</option>)}
            </select>
          </Field>
          <Field label="Treatment or package" required>
            <select required value={form.treatment} onChange={(e) => set("treatment", e.target.value)} className="input">
              <option value="">Choose a treatment</option>
              {categories.filter((c) => branch.services.includes(c.id)).map((c) => (
                <optgroup key={c.id} label={c.name}>
                  {treatments.filter((t) => t.category === c.id && availableAt(t, branch)).map((t) => <option key={t.slug} value={t.slug}>{t.name} — {priceAt(t, branch)}</option>)}
                </optgroup>
              ))}
              <optgroup label="Packages">
                {packages.filter((p) => !p.onlyAt || p.onlyAt.includes(branch.id)).map((p) => <option key={p.slug} value={`package:${p.slug}`}>{p.name}</option>)}
              </optgroup>
            </select>
          </Field>
          {chosen?.note && <p className="rounded-lg bg-sand px-3 py-2 text-sm text-foreground/70">{chosen.note}</p>}
          <Field label="Stylist / therapist">
            <select value={form.stylist} onChange={(e) => set("stylist", e.target.value)} className="input">
              <option value="">No preference</option>
              {staff.map((m) => <option key={m.name} value={m.name}>{m.name} — {m.role}</option>)}
            </select>
          </Field>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Preferred date" required><input required type="date" value={form.date} onChange={(e) => set("date", e.target.value)} className="input" /></Field>
            <Field label="Preferred time">
              <select value={form.time} onChange={(e) => set("time", e.target.value)} className="input">
                {["Morning", "Afternoon", "Evening", "Any time"].map((t) => <option key={t}>{t}</option>)}
              </select>
            </Field>
          </div>
          <Field label="First visit to Aurelia?">
            <select value={form.firstVisit} onChange={(e) => set("firstVisit", e.target.value)} className="input">
              <option value="no">No, I&apos;ve been before</option>
              <option value="yes">Yes, first visit</option>
            </select>
          </Field>
          <Field label="Anything we should know?"><textarea rows={3} value={form.notes} onChange={(e) => set("notes", e.target.value)} placeholder="Allergies, pregnancy, hair length, inspiration photos to bring…" className="input" /></Field>
          <button disabled={submitting} className="w-full rounded-full bg-ink py-3 text-sm font-bold text-white hover:bg-ink-soft disabled:opacity-60">{submitting ? "Sending…" : "Request booking"}</button>
          <p className="text-center text-xs text-foreground/50">A 50% deposit applies to appointments over 2 hours, bridal and groups of 4+. Free changes up to 24 hours before.</p>
        </form>
      </section>
    </div>
  );
}
