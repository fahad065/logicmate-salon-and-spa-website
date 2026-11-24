import { type Branch, type CategoryId, countryOf } from "./branches";

// Aurelia's treatment menu. Base prices are in USD and shown in each branch's
// local currency (see `priceAt`). Illustrative only.

export interface Category {
  id: CategoryId;
  name: string;
  short: string;
  intro: string;
  image: string;
  gallery: string[];
}

export interface Treatment {
  slug: string;
  category: CategoryId;
  name: string;
  minutes: number;
  /** Base price in USD; prefixed "from" when `from` is true. */
  usd: number;
  from?: boolean;
  description: string;
  /** Important things to know before booking (patch tests, pregnancy, prep…). */
  note?: string;
  /** Only at these branches (otherwise every branch offering the category). */
  onlyAt?: string[];
}

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=60`;

export const categories: Category[] = [
  {
    id: "hair",
    name: "Hair",
    short: "Cuts, colour, blow-dries and treatments",
    intro: "Precision cuts, lived-in colour and glossy blow-dries by senior stylists. Every colour service starts with a consultation, and first-time colour clients need a skin patch test at least 48 hours before.",
    image: img("photo-1522337360788-8b13dee7a37e"),
    gallery: [img("photo-1562322140-8baeececf3df"), img("photo-1516975080664-ed2fc6a32937"), img("photo-1595476108010-b4d1f102b1b1")],
  },
  {
    id: "nails",
    name: "Nails",
    short: "Manicures, pedicures, gel and extensions",
    intro: "Long-wear gel, classic polish, extensions and nail art, with single-use files and hospital-grade sterilised tools at every station.",
    image: img("photo-1604654894610-df63bc536371"),
    gallery: [img("photo-1610992015732-2449b76344bc"), img("photo-1519014816548-bf5fe059798b"), img("photo-1607779097040-26e80aa78e66")],
  },
  {
    id: "lashes-brows",
    name: "Lashes & Brows",
    short: "Extensions, lifts, lamination and shaping",
    intro: "Classic and volume lash extensions, lash lifts and brow lamination by certified lash artists. Tinting needs a skin patch test at least 48 hours before your first appointment.",
    image: img("photo-1583001931096-959e9a1a6223"),
    gallery: [img("photo-1512290923902-8a9f81dc236c"), img("photo-1588510883465-4d1af6bfa6b6")],
  },
  {
    id: "skin",
    name: "Skin & Facials",
    short: "Facials, Hydrafacial, peels and LED",
    intro: "Results-led facials tailored after a short skin consultation. We don't treat medical skin conditions — for active acne, eczema, rosacea flare-ups or anything that worries you, please see a doctor first.",
    image: img("photo-1570172619644-dfd03ed5d881"),
    gallery: [img("photo-1616394584738-fc6e612e71b9"), img("photo-1512290923902-8a9f81dc236c")],
  },
  {
    id: "massage-body",
    name: "Massage & Body",
    short: "Massage, scrubs, wraps and hammam",
    intro: "Swedish, deep tissue, hot stone, aromatherapy and prenatal massage, body scrubs and — at our UAE branches — a traditional Moroccan hammam. Tell us about injuries, pregnancy or medical conditions when you book.",
    image: img("photo-1544161515-4ab6ce6db874"),
    gallery: [img("photo-1600334089648-b0d9d3028eb2"), img("photo-1519823551278-64ac92734fb1"), img("photo-1540555700478-4be289fbecef")],
  },
  {
    id: "mens-grooming",
    name: "Men's Grooming",
    short: "Cuts, beards, shaves and facials",
    intro: "Sharp cuts, beard sculpting and hot-towel shaves in our men's lounges (Dubai, London, New York and Toronto).",
    image: img("photo-1503951914875-452162b0f3f1"),
    gallery: [img("photo-1621605815971-fbc98d665033"), img("photo-1599351431202-1e0f0137899a")],
  },
  {
    id: "bridal",
    name: "Bridal & Occasions",
    short: "Bridal hair & make-up, henna, parties",
    intro: "Trials, wedding-day hair and make-up, henna and bridal-party bookings, at the salon or (in Dubai) at your venue. Bridal dates book up early — enquire 2–3 months ahead.",
    image: img("photo-1487412947147-5cebf100ffc2"),
    gallery: [img("photo-1457972729786-0411a3b2b626"), img("photo-1595476108010-b4d1f102b1b1")],
  },
];

export const treatments: Treatment[] = [
  // Hair
  { slug: "womens-cut-blow-dry", category: "hair", name: "Women's cut & blow-dry", minutes: 60, usd: 75, description: "Consultation, wash, precision cut and a finished blow-dry." },
  { slug: "blow-dry", category: "hair", name: "Blow-dry", minutes: 45, usd: 40, description: "Wash and blow-dry — sleek, bouncy or waves. Long or extra-thick hair may take longer." },
  { slug: "full-colour", category: "hair", name: "Full colour", minutes: 120, usd: 140, from: true, description: "Root-to-tip permanent colour with gloss and blow-dry. Final price depends on length and thickness.", note: "Skin patch test required at least 48 hours before if you're new to us or haven't coloured with us in 6 months." },
  { slug: "balayage", category: "hair", name: "Balayage", minutes: 180, usd: 220, from: true, description: "Hand-painted, lived-in highlights with toner, treatment and blow-dry.", note: "Skin patch test required at least 48 hours before. A 50% deposit applies to bookings over 2 hours." },
  { slug: "keratin-smoothing", category: "hair", name: "Keratin smoothing treatment", minutes: 150, usd: 250, from: true, description: "Formaldehyde-free smoothing that cuts frizz for up to 3 months.", note: "Not recommended during pregnancy or breastfeeding." },
  { slug: "scalp-treatment", category: "hair", name: "Scalp ritual", minutes: 30, usd: 45, description: "Exfoliating scalp treatment with massage — add on to any hair service." },

  // Nails
  { slug: "classic-manicure", category: "nails", name: "Classic manicure", minutes: 40, usd: 30, description: "Shape, cuticle care, hand massage and polish." },
  { slug: "gel-manicure", category: "nails", name: "Gel manicure", minutes: 50, usd: 45, description: "Long-wear gel colour that lasts 2–3 weeks. Includes removal of our own gel." },
  { slug: "classic-pedicure", category: "nails", name: "Classic pedicure", minutes: 50, usd: 40, description: "Soak, exfoliation, cuticle and hard-skin care, massage and polish." },
  { slug: "gel-pedicure", category: "nails", name: "Gel pedicure", minutes: 60, usd: 55, description: "Our classic pedicure finished with long-wear gel." },
  { slug: "gel-extensions", category: "nails", name: "Gel extensions — full set", minutes: 90, usd: 85, description: "Sculpted gel or tip extensions in your chosen shape and length." },
  { slug: "nail-art", category: "nails", name: "Nail art", minutes: 15, usd: 10, from: true, description: "French, chrome, ombré or hand-painted designs — priced per design." },

  // Lashes & brows
  { slug: "classic-lashes", category: "lashes-brows", name: "Classic lash extensions — full set", minutes: 120, usd: 120, description: "One extension per natural lash for a natural, mascara look. Infills from 2–3 weeks.", note: "Arrive without eye make-up. Not suitable if you have an active eye infection." },
  { slug: "volume-lashes", category: "lashes-brows", name: "Volume lash extensions — full set", minutes: 150, usd: 160, description: "Hand-made fans for a fuller, fluffier look." },
  { slug: "lash-lift-tint", category: "lashes-brows", name: "Lash lift & tint", minutes: 60, usd: 65, description: "Lifts and darkens your natural lashes for 6–8 weeks.", note: "Skin patch test required at least 48 hours before your first tint." },
  { slug: "brow-lamination", category: "lashes-brows", name: "Brow lamination & shape", minutes: 45, usd: 55, description: "Brushed-up, fuller-looking brows that last around 6 weeks." },
  { slug: "brow-threading", category: "lashes-brows", name: "Brow threading", minutes: 20, usd: 20, description: "Precise shaping by threading. Upper lip and full face also available." },

  // Skin
  { slug: "signature-facial", category: "skin", name: "Aurelia signature hydrating facial", minutes: 60, usd: 110, description: "Double cleanse, exfoliation, extractions if needed, mask and facial massage for glowing, hydrated skin." },
  { slug: "deep-cleansing-facial", category: "skin", name: "Deep cleansing facial", minutes: 75, usd: 120, description: "Purifying facial with steam and thorough extractions for congested skin." },
  { slug: "hydrafacial", category: "skin", name: "Hydrafacial", minutes: 60, usd: 180, description: "Cleanse, exfoliate, extract and infuse serums with the Hydrafacial device." },
  { slug: "chemical-peel", category: "skin", name: "Glow peel", minutes: 45, usd: 150, description: "Gentle AHA/BHA peel for brightness and texture.", note: "Skin consultation and patch test required. Not during pregnancy, or within 2 weeks of sun exposure or retinoid use." },
  { slug: "led-add-on", category: "skin", name: "LED light therapy add-on", minutes: 20, usd: 35, description: "Red or blue LED to calm or clarify — add on to any facial." },

  // Massage & body
  { slug: "swedish-massage", category: "massage-body", name: "Swedish massage", minutes: 60, usd: 95, description: "Relaxing full-body massage with long, flowing strokes. 90 minutes also available." },
  { slug: "deep-tissue-massage", category: "massage-body", name: "Deep tissue massage", minutes: 60, usd: 110, description: "Firm pressure focused on tight muscles in the back, neck and shoulders." },
  { slug: "hot-stone-massage", category: "massage-body", name: "Hot stone massage", minutes: 75, usd: 130, description: "Warm basalt stones melt away tension." },
  { slug: "aromatherapy-massage", category: "massage-body", name: "Aromatherapy massage", minutes: 60, usd: 100, description: "Massage with your choice of calming, balancing or energising essential-oil blend." },
  { slug: "prenatal-massage", category: "massage-body", name: "Mother-to-be massage", minutes: 60, usd: 105, description: "Side-lying massage with pregnancy-safe oils by therapists trained in prenatal massage.", note: "From 14 weeks (after the first trimester). Please tell us how far along you are when you book; if you have a high-risk pregnancy, ask your doctor first." },
  { slug: "body-scrub", category: "massage-body", name: "Salt & oil body scrub", minutes: 45, usd: 80, description: "Full-body exfoliation followed by a nourishing body butter." },
  { slug: "moroccan-hammam", category: "massage-body", name: "Moroccan hammam", minutes: 75, usd: 120, description: "Steam, black-soap cleanse, kessa scrub, rhassoul clay wrap and a hair wash.", onlyAt: ["dubai", "abu-dhabi"] },

  // Men's grooming
  { slug: "mens-haircut", category: "mens-grooming", name: "Men's haircut", minutes: 45, usd: 45, description: "Consultation, wash, cut and style." },
  { slug: "cut-and-beard", category: "mens-grooming", name: "Haircut & beard sculpt", minutes: 60, usd: 65, description: "Haircut plus beard shaping with hot towel and beard oil." },
  { slug: "hot-towel-shave", category: "mens-grooming", name: "Hot-towel shave", minutes: 45, usd: 50, description: "Traditional straight-razor shave with hot towels and cooling balm." },
  { slug: "mens-facial", category: "mens-grooming", name: "Men's express facial", minutes: 45, usd: 85, description: "Deep cleanse, exfoliation and hydration tailored for men's skin." },

  // Bridal
  { slug: "bridal-trial", category: "bridal", name: "Bridal hair & make-up trial", minutes: 120, usd: 250, description: "Plan your wedding look with your stylist and make-up artist. The trial fee comes off your wedding-day booking." },
  { slug: "bridal-day", category: "bridal", name: "Wedding-day hair & make-up", minutes: 180, usd: 650, from: true, description: "Bridal hair and make-up on the day, at the salon or your venue. Bridal-party add-ons from our price list.", note: "A 50% deposit secures your date; balance due 14 days before." },
  { slug: "bridal-henna", category: "bridal", name: "Bridal henna", minutes: 120, usd: 90, from: true, description: "Natural henna, hands and feet — designs priced by detail.", onlyAt: ["dubai", "abu-dhabi"] },
  { slug: "occasion-makeup", category: "bridal", name: "Occasion make-up", minutes: 60, usd: 95, description: "Soft glam or full glam for parties, events and photos — false lashes included." },
];

export const categoryOf = (id: string | undefined) => categories.find((c) => c.id === id);
export const treatmentOf = (slug: string | undefined) => treatments.find((t) => t.slug === slug);

export function availableAt(t: Treatment, b: Branch) {
  return b.services.includes(t.category) && (!t.onlyAt || t.onlyAt.includes(b.id));
}

/** A USD base price shown in the branch's local currency, rounded to a clean amount. */
export function money(usd: number, b: Branch, from = false): string {
  const c = countryOf(b.country);
  const local = Math.max(c.round, Math.round((usd * c.rate) / c.round) * c.round);
  const amount = new Intl.NumberFormat("en", { style: "currency", currency: c.currency, maximumFractionDigits: 0 }).format(local);
  return `${from ? "from " : ""}${amount}`;
}

export const priceAt = (t: Treatment, b: Branch) => money(t.usd, b, t.from);

export const durationLabel = (m: number) => (m >= 60 ? `${Math.floor(m / 60)} hr${m % 60 ? ` ${m % 60} min` : ""}` : `${m} min`);
