import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  Noto_Serif_Armenian,
  Noto_Sans_Armenian,
  Great_Vibes,
} from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const serif = Noto_Serif_Armenian({
  subsets: ["armenian"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Noto_Sans_Armenian({
  subsets: ["armenian"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wedding-h-m.vercel.app"),
  title: "Հովհաննես և Մարիա · Հարսանիք",
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
    <html
      lang="hy"
      className={`${display.variable} ${serif.variable} ${sans.variable} ${script.variable}`}
    >
      <body className="watercolor-bg font-sans text-charcoal">{children}</body>
    </html>
  );
}
