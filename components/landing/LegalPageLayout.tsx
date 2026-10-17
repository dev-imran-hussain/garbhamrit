import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/product";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({
  title,
  lastUpdated = "October 2026",
  children,
}) => {
  return (
    <div className="min-h-screen bg-[#FFF8FA] text-[#4A2635] flex flex-col">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-[#E83D82] text-white shadow-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-white hover:text-white/90 font-bold transition-transform active:scale-95"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>मुख्य पृष्ठ (Home)</span>
          </Link>
          <span className="font-extrabold text-lg sm:text-xl tracking-wide">
            गर्भ अमृत™
          </span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-[#F3BFD2]">
          <div className="border-b border-[#F3BFD2] pb-6 mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#B52C62] mb-2">
              {title}
            </h1>
            <p className="text-sm font-semibold text-[#5A3848]">
              अंतिम अद्यतन (Last Updated): {lastUpdated}
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base leading-relaxed text-[#4A2635]">
            {children}
          </div>

          {/* Contact Box */}
          <div className="mt-10 p-6 rounded-2xl bg-[#FFF0F5] border border-[#F3BFD2] text-sm">
            <h4 className="font-bold text-base text-[#B52C62] mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#E83D82]" />
              <span>संपर्क एवं सहायता (Contact & Support)</span>
            </h4>
            <p className="mb-2">
              यदि आपके पास इस नीति के संबंध में कोई प्रश्न या स्पष्टीकरण है, तो आप हमसे सीधे संपर्क कर सकते हैं:
            </p>
            <ul className="space-y-1 font-semibold text-[#4A2635]">
              <li>ईमेल: <a href={`mailto:${siteConfig.email}`} className="text-[#B52C62] underline">{siteConfig.email}</a></li>
              <li>फ़ोन / WhatsApp: <a href={`tel:${siteConfig.phone}`} className="text-[#B52C62] underline">{siteConfig.phoneDisplay}</a></li>
              <li>पता: {siteConfig.address}</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#4A2635] text-[#FFE4ED]/80 py-6 text-center text-xs sm:text-sm">
        <p>© {new Date().getFullYear()} गर्भ अमृत™. सर्वाधिकार सुरक्षित। | <Link href="/" className="underline hover:text-white">Home</Link></p>
      </footer>
    </div>
  );
};

