// Aurelia Salon & Spa — demo branches. Illustrative only: addresses, phone
// numbers and hours are made up to look like a real, live salon group.

export type CountryCode = "AE" | "GB" | "US" | "AU" | "CA";

export interface Country {
  code: CountryCode;
  name: string;
  flag: string;
  currency: string;
  /** Local price = USD base × rate, rounded to `round`. */
  rate: number;
  round: number;
}

export const countries: Country[] = [
  { code: "AE", name: "United Arab Emirates", flag: "🇦🇪", currency: "AED", rate: 3.67, round: 5 },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", currency: "GBP", rate: 0.79, round: 1 },
  { code: "US", name: "United States", flag: "🇺🇸", currency: "USD", rate: 1, round: 1 },
  { code: "AU", name: "Australia", flag: "🇦🇺", currency: "AUD", rate: 1.53, round: 5 },
  { code: "CA", name: "Canada", flag: "🇨🇦", currency: "CAD", rate: 1.37, round: 5 },
];

export const countryOf = (code: CountryCode) => countries.find((c) => c.code === code)!;

export type CategoryId = "hair" | "nails" | "lashes-brows" | "skin" | "massage-body" | "mens-grooming" | "bridal";

export interface Branch {
  id: string;
  city: string;
  area: string;
  country: CountryCode;
  address: string;
  phone: string;
  whatsapp: string;
  timezone: string;
  hours: { days: string; time: string }[];
  languages: string[];
  /** Treatment categories this branch offers. */
  services: CategoryId[];
  /** Branch-only extras (hammam, ladies-only floor, home visits…). */
  highlights: string[];
  parking: string;
  mapsUrl: string;
  image: string;
}

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=60`;

export const branches: Branch[] = [
  {
    id: "dubai",
    city: "Dubai",
    area: "Jumeirah",
    country: "AE",
    address: "Villa 42, Jumeirah Beach Road, Jumeirah 1, Dubai",
    phone: "+971 4 555 0142",
    whatsapp: "+971 50 555 0142",
    timezone: "GST (UTC+4)",
    hours: [
      { days: "Saturday – Thursday", time: "9:00 am – 10:00 pm" },
      { days: "Friday", time: "1:00 pm – 10:00 pm" },
    ],
    languages: ["English", "Arabic", "Russian", "Tagalog"],
    services: ["hair", "nails", "lashes-brows", "skin", "massage-body", "mens-grooming", "bridal"],
    highlights: [
      "Ladies-only first floor with private treatment rooms",
      "Moroccan hammam",
      "Home visits across Dubai for nails, blow-dry and bridal (minimum spend applies)",
      "Separate men's grooming lounge with its own entrance",
    ],
    parking: "Free valet parking at the villa",
    mapsUrl: "https://maps.google.com/?q=Jumeirah+Beach+Road+Jumeirah+1+Dubai",
    image: img("photo-1560066984-138dadb4c035"),
  },
  {
    id: "abu-dhabi",
    city: "Abu Dhabi",
    area: "Al Maryah Island",
    country: "AE",
    address: "Level 2, The Galleria Al Maryah Island, Abu Dhabi",
    phone: "+971 2 555 0188",
    whatsapp: "+971 50 555 0188",
    timezone: "GST (UTC+4)",
    hours: [
      { days: "Saturday – Thursday", time: "10:00 am – 10:00 pm" },
      { days: "Friday", time: "2:00 pm – 10:00 pm" },
    ],
    languages: ["English", "Arabic", "Hindi"],
    services: ["hair", "nails", "lashes-brows", "skin", "massage-body", "bridal"],
    highlights: [
      "Ladies-only salon (no men's grooming at this branch)",
      "Moroccan hammam",
      "Private bridal suite for up to 8 guests",
    ],
    parking: "Free mall parking for 4 hours",
    mapsUrl: "https://maps.google.com/?q=The+Galleria+Al+Maryah+Island+Abu+Dhabi",
    image: img("photo-1600948836101-f9ffda59d250"),
  },
  {
    id: "london",
    city: "London",
    area: "Marylebone",
    country: "GB",
    address: "18 Marylebone High Street, London W1U 4NY",
    phone: "+44 20 7946 0318",
    whatsapp: "+44 7700 900318",
    timezone: "GMT/BST (UTC+0/+1)",
    hours: [
      { days: "Monday – Friday", time: "9:00 am – 8:00 pm" },
      { days: "Saturday", time: "9:00 am – 6:00 pm" },
      { days: "Sunday", time: "10:00 am – 5:00 pm" },
    ],
    languages: ["English", "French", "Arabic", "Polish"],
    services: ["hair", "nails", "lashes-brows", "skin", "massage-body", "mens-grooming", "bridal"],
    highlights: ["Barber chairs in the men's corner", "Step-free access and an accessible treatment room"],
    parking: "Pay-and-display on Marylebone High Street; nearest Tube: Baker Street or Bond Street",
    mapsUrl: "https://maps.google.com/?q=18+Marylebone+High+Street+London",
    image: img("photo-1522337360788-8b13dee7a37e"),
  },
  {
    id: "new-york",
    city: "New York",
    area: "SoHo",
    country: "US",
    address: "212 Spring Street, New York, NY 10012",
    phone: "+1 (212) 555-0174",
    whatsapp: "+1 (917) 555-0174",
    timezone: "ET (UTC−5/−4)",
    hours: [
      { days: "Monday – Saturday", time: "9:00 am – 9:00 pm" },
      { days: "Sunday", time: "10:00 am – 6:00 pm" },
    ],
    languages: ["English", "Spanish", "Korean"],
    services: ["hair", "nails", "lashes-brows", "skin", "massage-body", "mens-grooming"],
    highlights: ["Express nail bar — walk-ins welcome when chairs are free", "Late appointments until 9 pm"],
    parking: "Street parking is limited; subway: Spring St (C/E) or Prince St (R/W)",
    mapsUrl: "https://maps.google.com/?q=212+Spring+Street+New+York",
    image: img("photo-1521590832167-7bcbfaa6381f"),
  },
  {
    id: "sydney",
    city: "Sydney",
    area: "Paddington",
    country: "AU",
    address: "301 Oxford Street, Paddington NSW 2021",
    phone: "+61 2 5550 1203",
    whatsapp: "+61 412 555 203",
    timezone: "AEST/AEDT (UTC+10/+11)",
    hours: [
      { days: "Tuesday – Friday", time: "9:00 am – 7:00 pm" },
      { days: "Saturday", time: "8:00 am – 5:00 pm" },
      { days: "Sunday", time: "10:00 am – 4:00 pm" },
      { days: "Monday", time: "Closed" },
    ],
    languages: ["English", "Mandarin", "Italian"],
    services: ["hair", "nails", "lashes-brows", "skin", "massage-body", "bridal"],
    highlights: ["Day-spa suite with couples' massage room", "Vegan and cruelty-free product menu"],
    parking: "Two-hour street parking on Oxford Street side streets",
    mapsUrl: "https://maps.google.com/?q=301+Oxford+Street+Paddington+NSW",
    image: img("photo-1540555700478-4be289fbecef"),
  },
  {
    id: "toronto",
    city: "Toronto",
    area: "Yorkville",
    country: "CA",
    address: "88 Yorkville Avenue, Toronto, ON M5R 1B9",
    phone: "+1 (416) 555-0129",
    whatsapp: "+1 (647) 555-0129",
    timezone: "ET (UTC−5/−4)",
    hours: [
      { days: "Monday – Friday", time: "10:00 am – 8:00 pm" },
      { days: "Saturday", time: "9:00 am – 6:00 pm" },
      { days: "Sunday", time: "11:00 am – 5:00 pm" },
    ],
    languages: ["English", "French", "Portuguese"],
    services: ["hair", "nails", "lashes-brows", "skin", "massage-body", "mens-grooming"],
    highlights: ["Heated pedicure thrones", "Registered massage therapists (RMT receipts available)"],
    parking: "Underground parking at Yorkville Village; nearest subway: Bay",
    mapsUrl: "https://maps.google.com/?q=88+Yorkville+Avenue+Toronto",
    image: img("photo-1633681926022-84c23e8cb2d6"),
  },
];

export const branchOf = (id: string | undefined) => branches.find((b) => b.id === id);
export const defaultBranch = branches[0];
