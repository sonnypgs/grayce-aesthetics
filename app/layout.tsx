import type { Metadata } from "next";
import { Cormorant_Garamond, Pinyon_Script } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import { isMaintenanceMode } from "@/lib/maintenance";
import { isPreviewNoindex } from "@/lib/preview-gate";
import { brand, clinic } from "@/lib/site";
import "./globals.css";

const frutiger = localFont({
  src: [
    {
      path: "../public/assets/grayce/fonts/frutiger/Frutiger.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/grayce/fonts/frutiger/Frutiger_bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
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
const metaPixelId = "1503949454602204";

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
      : `Physician-led medical aesthetic clinic in Parañaque City, led by ${clinic.doctor.displayName}.`,
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
      className={`${frutiger.variable} ${cormorant.variable} ${pinyon.variable}`}
    >
      <body>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
          />
        </noscript>
        {children}
        {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
      </body>
    </html>
  );
}
