import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://rvtowingcalc.com"),
  title: {
    default: "RV Towing Calculator | Tow Safe. Tow Smart.",
    template: "%s | RV TowCalc",
  },
  description:
    "The only RV towing calculator that combines real vehicle data with deep safety analysis. Check towing capacity, payload, GVWR, GCWR, and tongue weight in one place. SAE J2807 compliant.",
  keywords: [
    "RV towing calculator",
    "towing capacity calculator",
    "tow capacity calculator",
    "payload calculator",
    "GVWR calculator",
    "GCWR calculator",
    "tongue weight calculator",
    "fifth wheel towing calculator",
    "can my truck tow this",
    "trailer towing capacity",
  ],
  authors: [{ name: "RV TowCalc" }],
  creator: "RV TowCalc",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rvtowingcalc.com",
    siteName: "RV TowCalc",
    title: "RV Towing Calculator | Tow Safe. Tow Smart.",
    description:
      "The only RV towing calculator that combines real vehicle data with deep safety analysis. Independent. Accurate. Built for safety.",
    images: [
      {
        url: "https://rvtowingcalc.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "RV Towing Calculator - Tow Safe. Tow Smart.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RV Towing Calculator | Tow Safe. Tow Smart.",
    description:
      "Check towing capacity, payload, GVWR, GCWR, and tongue weight. SAE J2807 compliant. Built for safety.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1RG0YYSNZP"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1RG0YYSNZP');
          `}
        </Script>
      </head>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
