import React from "react";
import { Phone } from "lucide-react";
import { siteConfig } from "@/data/product";

export const TopCallBar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#E83D82] text-white shadow-md">
      <a
        href={`tel:${siteConfig.phone}`}
        className="
          flex items-center justify-center
          gap-2.5 sm:gap-3
          h-11 sm:h-12 lg:h-14
          px-4
          font-semibold
          text-base sm:text-lg lg:text-xl
          whitespace-nowrap
          transition-all
          hover:bg-[#C92F6C]
        "
        aria-label={`Call Now ${siteConfig.phoneDisplay}`}
      >
        <Phone
          className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 animate-pulse"
          strokeWidth={2.5}
        />

        <span className="font-medium">Call Now</span>

        <span className="font-extrabold tracking-wider">
          {siteConfig.phoneDisplay}
        </span>
      </a>
    </header>
  );
};