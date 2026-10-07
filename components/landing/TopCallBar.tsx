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
          h-14 sm:h-14 lg:h-16
          px-4
          font-semibold
          text-lg sm:text-xl
          whitespace-nowrap
          transition-all
          hover:bg-[#C92F6C]
        "
        aria-label={`Call Now ${siteConfig.phoneDisplay}`}
      >
        <Phone
          className="w-5.5 h-5.5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 animate-pulse"
          strokeWidth={2.5}
        />

        <span className="font-semibold">Call Now</span>

        <span className="font-extrabold tracking-wider">
          {siteConfig.phoneDisplay}
        </span>
      </a>
    </header>
  );
};