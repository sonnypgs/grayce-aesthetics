import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Pinyon_Script } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { isMaintenanceMode } from "@/lib/maintenance";
import { isPreviewNoindex } from "@/lib/preview-gate";
import { brand, clinic } from "@/lib/site";
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

const shouldNoindex = isMaintenanceMode || isPreviewNoindex;

export const metadata: Metadata = {
  metadataBase: new URL("https://grayce-aesthetics.com"),
  title: isMaintenanceMode
    ? "Grayce Medical Aesthetic Clinic | Maintenance"
    : isPreviewNoindex
      ? "Grayce Medical Aesthetic Clinic | Preview"
    : "Grayce Medical Aesthetic Clinic | Parañaque",
  description:
    isMaintenanceMode
      ? "Grayce Medical Aesthetic Clinic is currently refreshing its website."
      : "Physician-led medical aesthetic clinic in Parañaque City, led by Dr. Mary Grace Braga.",
  robots: shouldNoindex
    ? {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
        },
      }
    : undefined,
  icons: {
    icon: "/assets/grayce/brand/monogram-transparent.png",
    apple: "/assets/grayce/brand/social-profile.png",
  },
  openGraph: {
    title: brand.name,
    description:
      `Physician-led medical aesthetic clinic in Parañaque City, led by ${clinic.doctor.displayName}.`,
    type: "website",
    images: ["/assets/grayce/brand/social-cover.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID?.trim();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${pinyon.variable}`}
    >
      <body>
        {children}
        {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
      </body>
    </html>
  );
}
