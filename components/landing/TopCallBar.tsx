import React from "react";
import { Phone, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/product";

export const TopCallBar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#E83D82] text-white py-2 px-4 shadow-sm text-sm">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Left Trust Note */}
        <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium">
          <ShieldCheck className="w-4 h-4 text-pink-200" />
          <span>100% शुद्ध आयुर्वेदिक • नि:शुल्क विशेषज्ञ परामर्श</span>
        </div>

        {/* Right Click-to-Call */}
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex items-center gap-2 font-bold text-xs sm:text-sm bg-[#B52C62] hover:bg-[#971E4E] transition-colors py-1 px-3.5 rounded-full ring-1 ring-white/30"
          aria-label={`Call us at ${siteConfig.phoneDisplay}`}
        >
          <Phone className="w-3.5 h-3.5 animate-bounce" />
          <span>कॉल करें: {siteConfig.phoneDisplay}</span>
        </a>
      </div>
    </header>
  );
};

