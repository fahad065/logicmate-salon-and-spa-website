import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const body = Inter({ variable: "--font-body", subsets: ["latin"] });
const display = Cormorant_Garamond({ variable: "--font-display", subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: "Aurelia Salon & Spa — Dubai, Abu Dhabi, London, New York, Sydney & Toronto",
  description:
    "Aurelia Salon & Spa — hair, nails, lashes & brows, facials, massage, men's grooming and bridal in Dubai, Abu Dhabi, London, New York, Sydney and Toronto.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} h-full`}>
      <head>
        {/* ============================================================
            LogicMate chatbot widget — paste the <script> snippet from
            your chatbot's Channels → Website tab here, right before
            </head>. It self-injects a floating chat bubble, nothing
            else on this page needs to change.

            <script
              src="https://YOUR-FRONTEND-DOMAIN/chatbot-widget.js"
              data-embed-key="YOUR_EMBED_KEY"
              data-api-url="https://YOUR-API-DOMAIN/api/v1"
              async
            ></script>
           ============================================================ */}
      </head>
      <body className="flex min-h-full flex-col bg-background font-sans text-[15px] text-foreground antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
