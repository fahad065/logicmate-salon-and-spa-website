import type { CategoryId } from "./branches";

// Aurelia's team — illustrative people for the demo.
export interface TeamMember {
  name: string;
  role: string;
  branch: string;
  specialties: CategoryId[];
  focus: string;
  languages: string[];
  image: string;
}

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=60`;

export const team: TeamMember[] = [
  { name: "Layla Haddad", role: "Creative Director, Hair", branch: "dubai", specialties: ["hair", "bridal"], focus: "Balayage, lived-in blonde and bridal hair", languages: ["English", "Arabic", "French"], image: img("photo-1580489944761-15a19d654956") },
  { name: "Maria Santos", role: "Senior Nail Technician", branch: "dubai", specialties: ["nails"], focus: "Gel extensions and hand-painted nail art", languages: ["English", "Tagalog"], image: img("photo-1544005313-94ddf0286df2") },
  { name: "Omar Khalil", role: "Head Barber", branch: "dubai", specialties: ["mens-grooming"], focus: "Skin fades, beard sculpting, hot-towel shaves", languages: ["English", "Arabic"], image: img("photo-1507003211169-0a1dd7228f2d") },
  { name: "Noura Al Mansoori", role: "Bridal Make-up Artist", branch: "abu-dhabi", specialties: ["bridal", "lashes-brows"], focus: "Soft-glam bridal, henna nights and bridal parties", languages: ["English", "Arabic"], image: img("photo-1531123897727-8f129e1688ce") },
  { name: "Priya Nair", role: "Senior Therapist", branch: "abu-dhabi", specialties: ["massage-body", "skin"], focus: "Hammam rituals, prenatal and deep tissue massage", languages: ["English", "Hindi", "Malayalam"], image: img("photo-1487412720507-e7ab37603c6f") },
  { name: "Chloe Bennett", role: "Lash & Brow Artist", branch: "london", specialties: ["lashes-brows"], focus: "Volume lashes and brow lamination", languages: ["English", "French"], image: img("photo-1438761681033-6461ffad8d80") },
  { name: "Sofia Moreno", role: "Colour Specialist", branch: "new-york", specialties: ["hair"], focus: "Colour correction, glossing, curly cuts", languages: ["English", "Spanish"], image: img("photo-1534528741775-53994a69daeb") },
  { name: "Grace Liu", role: "Skin Therapist", branch: "sydney", specialties: ["skin", "massage-body"], focus: "Hydrafacial, peels and couples' massage", languages: ["English", "Mandarin"], image: img("photo-1517841905240-472988babdf9") },
  { name: "Daniel Tremblay", role: "Registered Massage Therapist", branch: "toronto", specialties: ["massage-body"], focus: "Sports and deep tissue massage (RMT receipts)", languages: ["English", "French"], image: img("photo-1500648767791-00dcc994a43e") },
];
