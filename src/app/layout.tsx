import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Oswald } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import SeoStructuredData from "@/components/SeoStructuredData";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.driftlessareapestcontrol.com";
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "Driftless Area Pest Control | Commercial & Agricultural Pest Management in Wisconsin",
  description:
    "Root-cause commercial and agricultural pest management in Wisconsin. Built on 27+ years of hands-on dairy and ag experience with 24/7 remote monitoring.",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Driftless Area Pest Control",
    title: "Driftless Area Pest Control | Commercial & Agricultural Pest Management in Wisconsin",
    description:
      "Root-cause commercial and agricultural pest management in Wisconsin.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <head />
      <body className={inter.className}>
        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        ) : null}
        <SmoothScroll>{children}</SmoothScroll>
        <SeoStructuredData />
      </body>
    </html>
  );
}
