# Aurelia Salon & Spa — Demo Salon & Spa Website

A standalone, frontend-only Next.js demo site built to showcase the LogicMate
spa & salon chatbot widget on a realistic international salon group — two
branches in the UAE (Dubai, Abu Dhabi) and four abroad (London, New York,
Sydney, Toronto), with a full treatment menu priced in each branch's own
currency. **This is not a real business** — treatments, prices, team members,
branches, phone numbers and reviews are illustrative, built to look like a
real, live salon site for demo purposes only.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- `lucide-react` + `react-icons/fa` for icons
- `Cormorant Garamond` (headings) + `Inter` (body) via `next/font/google`
- No backend, no database, no API calls — all content lives in `src/data/*.ts`.
  Forms (Book, Gift cards, Contact) simulate a network request and show a
  success state, but submit nowhere. No payment is taken.

## Running locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Pages

- `/` — Home: treatment categories, branches, reviews, gift-card CTA
- `/treatments` — Full menu with durations and prices; `?branch=<id>` switches branch and currency
- `/treatments/<category>` — One page per category (hair, nails, lashes-brows, skin, massage-body, mens-grooming, bridal): treatments, notes (patch tests, pregnancy…), who you'll see
- `/packages` — Spa days and packages, memberships, bridal and gift-card links
- `/gift-cards` — Gift card order form (mock submit)
- `/branches` — 6 branches: address, phone/WhatsApp, hours + time zone, languages, parking, services offered, branch extras
- `/team` — 9 stylists and therapists with specialties and languages
- `/policies` — Booking, deposits, cancellations, late arrival, patch tests, health, children, hygiene + FAQ
- `/book` — Booking request (mock submit); `?treatment=<slug>`, `?package=<slug>`, `?branch=<id>`, `?stylist=<name>` preselect
- `/about`, `/contact`

## Setting up the matching chatbot

To demo the bot answering about *this* salon, copy the content from
`src/data/` into the chatbot dashboard:

- **Knowledge Base tab** — one **Text + link** entry per treatment category in
  `treatments.ts`: question like "How much is a balayage?", answer with each
  treatment's duration, price per country and any note (patch test, pregnancy),
  link = `https://<this-site>/treatments/<category>`. Add entries for the
  packages, memberships and gift cards (`offers.ts`, link `/packages` or
  `/gift-cards`) and one per policy / FAQ (link `/policies`).
- **Locations tab** — one location per branch in `branches.ts` (address,
  phone, hours, languages, and the categories under "Services offered" plus
  the branch extras such as the hammam, ladies-only floor or home visits).
- **Overview → Appointment booking link** — `https://<this-site>/book`.

Useful demo questions: "Do you do hammam in London?" (no — UAE only),
"Is there a ladies-only area in Abu Dhabi?", "Can I get a lash lift while
pregnant?", "What's your cancellation policy?", "How much is a gel manicure in
Sydney?".

## Adding the LogicMate chatbot widget

Open `src/app/layout.tsx` and find the commented placeholder inside `<head>`.
Paste the `<script>` snippet from your chatbot's **Channels → Website** tab
right there — it self-injects a floating chat bubble, nothing else on the
page needs to change.

## Notes

- Images are hotlinked from Unsplash and fall back to a branded gradient
  (`src/components/safe-img.tsx`) if a URL fails to load — check them on the
  machine you're demoing from.
- Prices are USD base prices converted with fixed illustrative rates
  (`src/data/branches.ts`), rounded to clean amounts.
