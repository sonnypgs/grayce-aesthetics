import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Pinyon_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Grayce Medical Aesthetics — Dr. Mary Grace Braga, Parañaque",
  description:
    "Boutique medical aesthetics clinic in Parañaque City, led by Dr. Mary Grace Braga. Refined skincare, injectables, and laser treatments in an elegant, unhurried setting.",
  openGraph: {
    title: "Grayce Medical Aesthetics",
    description:
      "Boutique medical aesthetics clinic in Parañaque City, led by Dr. Mary Grace Braga.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${pinyon.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
