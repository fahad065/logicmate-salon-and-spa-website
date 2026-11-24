import Link from "next/link";
import { Flower2, MapPin, Mail } from "lucide-react";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { branches, countries, countryOf } from "@/data/branches";

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-full bg-gold text-ink"><Flower2 className="size-4" /></span>
            <span className="font-display text-xl font-semibold text-white">Aurelia Salon &amp; Spa</span>
          </div>
          <p className="text-sm leading-relaxed text-white/55">
            {branches.length} branches in {countries.length} countries. Hair, nails, lashes, skin, massage, men&apos;s grooming and
            bridal — by people who love what they do.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Instagram" className="text-white/55 hover:text-gold"><FaInstagram className="size-5" /></a>
            <a href="#" aria-label="TikTok" className="text-white/55 hover:text-gold"><FaTiktok className="size-5" /></a>
            <a href="#" aria-label="WhatsApp" className="text-white/55 hover:text-gold"><FaWhatsapp className="size-5" /></a>
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/treatments" className="hover:text-gold">Treatment menu &amp; prices</Link></li>
            <li><Link href="/packages" className="hover:text-gold">Spa packages &amp; memberships</Link></li>
            <li><Link href="/treatments/bridal" className="hover:text-gold">Bridal</Link></li>
            <li><Link href="/gift-cards" className="hover:text-gold">Gift cards</Link></li>
            <li><Link href="/book" className="hover:text-gold">Book an appointment</Link></li>
            <li><Link href="/about" className="hover:text-gold">About us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">Our branches</h4>
          <ul className="space-y-2 text-sm">
            {branches.map((b) => (
              <li key={b.id} className="flex items-center gap-2"><MapPin className="size-4 shrink-0 text-gold" />{b.city} · {b.area}, {countryOf(b.country).name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">Contact</h4>
          <p className="flex items-center gap-2 text-sm"><Mail className="size-4 text-gold" /> hello@aurelia-spa.example</p>
          <p className="mt-3 text-xs leading-relaxed text-white/45">
            Prices are a guide and may change. Our team doesn&apos;t give medical advice — tell us about pregnancy,
            allergies or skin conditions when you book, and check with your doctor if unsure.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/35">
        © {new Date().getFullYear()} Aurelia Salon &amp; Spa. Demo site for illustrative purposes — not a real business.
      </div>
    </footer>
  );
}
