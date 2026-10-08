import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/product";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "devanagari"],
  variable: "--font-devanagari",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#E83D82",
};

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "गर्भ अमृत",
    "Garbh Amrit",
    "आयुर्वेदिक मातृत्व पोषण",
    "pregnancy planning ayurveda",
    "shatavari for women",
    "female wellness herbal powder",
    "ayurvedic uterine health",
  ],
  authors: [{ name: "Garbh Amrit Ayurvedic Wellness" }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "hi_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" className={`${poppins.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FFF8FA] text-[#4A2635] selection:bg-[#F3BFD2] selection:text-[#B52C62]">
        {children}
      </body>
    </html>
  );
}
