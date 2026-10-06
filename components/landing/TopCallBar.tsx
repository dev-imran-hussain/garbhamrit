import React from "react";
import { Phone } from "lucide-react";
import { siteConfig } from "@/data/product";

export const TopCallBar: React.FC = () => {
  return (
    <header className="sticky top-0 z-75 w-full bg-[#E83D82] text-white shadow-sm">
      <a
        href={`tel:${siteConfig.phone}`}
        className="
          flex items-center justify-center
          gap-2
          h-10 sm:h-11
          px-3
          font-semibold
          text-[15px] sm:text-base
          whitespace-nowrap
          transition-opacity
          hover:opacity-90
        "
        aria-label={`Call Now ${siteConfig.phoneDisplay}`}
      >
        <Phone
          className="w-[19px] h-[19px] sm:w-5 sm:h-5"
          strokeWidth={2.5}
        />

        <span>Call Now</span>

        <span className="font-bold tracking-wide">
          {siteConfig.phoneDisplay}
        </span>
      </a>
    </header>
  );
};