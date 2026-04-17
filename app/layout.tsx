import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Noto_Serif_Armenian, Noto_Sans_Armenian } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const serif = Noto_Serif_Armenian({
  subsets: ["armenian"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Noto_Sans_Armenian({
  subsets: ["armenian"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Հովհաննես և Մարիյա · Հարսանիք",
  description: "Հրավեր մեր հարսանիքին · 18 ապրիլի 2026",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hy" className={`${display.variable} ${serif.variable} ${sans.variable}`}>
      <body className="font-sans bg-ivory text-charcoal">{children}</body>
    </html>
  );
}
