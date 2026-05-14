import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Pinyon_Script } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://grayce-aesthetics.com"),
  title: "Grayce Medical Aesthetic Clinic | Parañaque",
  description:
    "Physician-led medical aesthetic clinic in Parañaque City, led by Dr. Mary Grace Braga.",
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
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${pinyon.variable}`}
      data-theme="almond"
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('grayce-theme');if(t==='green'||t==='taupe'||t==='almond'){document.documentElement.dataset.theme=t}}catch(e){}",
          }}
        />
        {children}
      </body>
    </html>
  );
}
