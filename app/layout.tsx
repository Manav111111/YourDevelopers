/*
  Free website template by 8B: https://8b.com/templates/onda/
  Source: https://github.com/8bsite/design-studio-website-template
  MIT License (code) https://8b.com/ · Photos: Unsplash License, see CREDITS.md · Fonts: Google Fonts (OFL)
  Ported to Next.js (App Router + Tailwind). Notes for people and AI agents: AGENTS.md.
*/
import type { Metadata } from "next";
import { Gabarito, Onest } from "next/font/google";
import "./globals.css";

// Both are variable fonts: Gabarito is animated from 400 to 800 in the contact title.
const gabarito = Gabarito({ subsets: ["latin"], variable: "--font-gabarito", display: "swap" });
const onest = Onest({ subsets: ["latin"], variable: "--font-onest", display: "swap" });

const title = "Onda — brand, product and AI studio";
const description =
  "Onda is an independent brand, product and AI studio in Lisbon and Brooklyn. We make the things people come back to.";

export const metadata: Metadata = {
  title,
  description,
  generator: "8B Templates",
  // No og:image yet (the template's was a placeholder URL), so the card is the small "summary" one.
  openGraph: { type: "website", title, description },
  twitter: { card: "summary" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${gabarito.variable} ${onest.variable}`}>
      <body className="m-text">{children}</body>
    </html>
  );
}
