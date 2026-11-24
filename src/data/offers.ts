// Packages, memberships, gift cards and policies — illustrative only.
// Prices are USD base prices; pages show them in the visitor's chosen branch currency.

export interface Package {
  slug: string;
  name: string;
  minutes: number;
  usd: number;
  includes: string[];
  bestFor: string;
  image: string;
  onlyAt?: string[];
}

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=60`;

export const packages: Package[] = [
  { slug: "aurelia-spa-day", name: "The Aurelia Spa Day", minutes: 240, usd: 290, includes: ["60-min massage of your choice", "Signature hydrating facial", "Classic manicure & pedicure", "Light lunch and herbal tea"], bestFor: "A full day off, birthdays, gifts", image: img("photo-1540555700478-4be289fbecef") },
  { slug: "glow-before-the-big-day", name: "Glow Before the Big Day", minutes: 180, usd: 240, includes: ["Hydrafacial", "Lash lift & tint", "Gel manicure", "Blow-dry"], bestFor: "The week before a wedding, event or holiday", image: img("photo-1570172619644-dfd03ed5d881") },
  { slug: "mother-to-be", name: "Mother-to-Be Ritual", minutes: 120, usd: 190, includes: ["60-min prenatal massage", "Pregnancy-safe hydrating facial", "Classic pedicure"], bestFor: "From 14 weeks — pregnancy-safe products only", image: img("photo-1600334089648-b0d9d3028eb2") },
  { slug: "gentlemans-reset", name: "The Gentleman's Reset", minutes: 120, usd: 170, includes: ["Haircut & beard sculpt", "Men's express facial", "30-min back & shoulder massage"], bestFor: "Grooms, birthdays, a monthly reset", image: img("photo-1621605815971-fbc98d665033"), onlyAt: ["dubai", "london", "new-york", "toronto"] },
  { slug: "hammam-ritual", name: "Royal Hammam Ritual", minutes: 150, usd: 210, includes: ["Moroccan hammam", "60-min aromatherapy massage", "Mint tea and dates"], bestFor: "The full UAE spa experience", image: img("photo-1544161515-4ab6ce6db874"), onlyAt: ["dubai", "abu-dhabi"] },
];

export interface Membership {
  name: string;
  usdPerMonth: number;
  perks: string[];
}

export const memberships: Membership[] = [
  { name: "Blow-dry Club", usdPerMonth: 129, perks: ["4 blow-dries a month", "10% off hair colour", "Priority weekend booking"] },
  { name: "Nail Club", usdPerMonth: 79, perks: ["2 gel manicures a month", "Free nail art on one set a month", "10% off pedicures"] },
  { name: "Wellness Club", usdPerMonth: 149, perks: ["One 60-min massage or facial a month", "15% off all other spa treatments", "Bring a friend at 20% off once a month"] },
];

export const membershipTerms =
  "3-month minimum, then cancel any time with 30 days' notice. Unused visits roll over for one month. Memberships are per branch.";

export const giftCardAmounts = [50, 100, 150, 250, 500];
export const giftCardTerms = [
  "Valid for 12 months from purchase, at any Aurelia branch in the same country.",
  "Use for any treatment, package or retail product; any balance stays on the card.",
  "Sent by email (instantly or on a date you choose) or as a printed card in a gift box from any branch.",
  "Not exchangeable for cash; lost e-gift cards can be re-sent to the original buyer.",
];

export interface Policy {
  title: string;
  body: string;
}

export const policies: Policy[] = [
  { title: "Booking", body: "Book online, by phone or WhatsApp, or ask our chat assistant to send your request. Bookings are confirmed by our front desk by message or call — usually within an hour during opening hours." },
  { title: "Deposits", body: "A 50% deposit applies to appointments over 2 hours, all bridal bookings and group bookings of 4 or more. Deposits come off your final bill." },
  { title: "Cancellations & changes", body: "Free changes or cancellations up to 24 hours before (48 hours for bridal and groups). Later cancellations and no-shows are charged 50% of the treatment, or the deposit is kept." },
  { title: "Late arrival", body: "Please arrive 10 minutes early. If you're more than 15 minutes late we may need to shorten your treatment so the next client isn't delayed — the full price still applies." },
  { title: "Patch tests", body: "Hair colour, lash/brow tints and peels need a quick skin patch test at least 48 hours before your first appointment (or if it's been 6 months since your last). It's free and takes 5 minutes at any branch." },
  { title: "Pregnancy, allergies & health", body: "Tell us when you book if you're pregnant, have allergies, skin conditions, injuries or medical conditions. Some treatments aren't suitable; our therapists will advise in person. We don't give medical advice — please check with your doctor if unsure." },
  { title: "Children", body: "Children's haircuts (under 12) are available at our hair stations. Under-16s need a parent or guardian present, and spa treatments are for 16+." },
  { title: "Hygiene", body: "Tools are sterilised in a hospital-grade autoclave; files, buffers and pedicure liners are single-use." },
];

export const faqs: Policy[] = [
  { title: "Can I book a specific stylist or therapist?", body: "Yes — mention who you'd like when you book. If they're not free at your time, our front desk will suggest the next available slot or another senior team member." },
  { title: "Do you have female-only areas?", body: "Our Abu Dhabi branch is ladies-only. In Dubai the whole first floor is ladies-only with private rooms; men's grooming has its own entrance." },
  { title: "Do you offer home visits?", body: "In Dubai only: nails, blow-dries and bridal hair & make-up at your home, hotel or venue. Minimum spend and a travel fee apply." },
  { title: "Which products do you use?", body: "Professional, salon-only brands chosen per branch; Sydney uses a fully vegan, cruelty-free menu. Ask us if you need fragrance-free or nut-free products." },
  { title: "How long do gel nails last?", body: "Usually 2–3 weeks. Removal of our own gel is included in your next gel set." },
  { title: "Can I pay by card?", body: "Yes — card, Apple Pay and Google Pay at all branches; cash in the UAE. Deposits can be paid by payment link." },
];
