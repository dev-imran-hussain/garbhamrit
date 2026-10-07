"use client";

import React, { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig } from "@/data/product";

export const StickyMobileCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past initial hero area (300px)
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2.5 bg-white/95 backdrop-blur-md border-t border-[#F3BFD2] shadow-2xl sm:hidden flex items-center gap-2">
      <a
        href={`tel:${siteConfig.phone}`}
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#E83D82] text-white font-bold text-sm shadow-md active:scale-95 transition-transform"
      >
        <Phone className="w-4 h-4 animate-pulse" />
        <span>Call Now</span>
      </a>

      <a
        href={`https://wa.me/${siteConfig.whatsappNumber}?text=नमस्ते,%20मुझे%20गर्भ%20अमृत%20के%20बारे%20में%20जानकारी%20चाहिए`}
        aria-label="WhatsApp"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md active:scale-95 transition-transform shrink-0"
      >
        <WhatsAppIcon className="w-6 h-6" />
      </a>
    </div>
  );
};

