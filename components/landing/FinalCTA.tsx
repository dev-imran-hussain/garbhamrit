import React from "react";
import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { siteConfig } from "@/data/product";
import { Sparkles, PhoneCall, ShieldCheck } from "lucide-react";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-14 md:py-20 bg-gradient-to-b from-[#FFF0F5] to-white relative overflow-hidden border-b border-[#F3BFD2]/40">
      {/* Decorative BG element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-15 pointer-events-none">
        <Image
          src="/decorative/flower-bg.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 mb-4 text-xs font-bold text-[#B52C62] bg-white border border-[#F3BFD2] rounded-full shadow-xs">
          <Sparkles className="w-4 h-4 text-[#E83D82]" />
          <span>स्वस्थ मातृत्व की ओर पहला कदम</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#B52C62] leading-tight mb-4">
          गर्भ अमृत™ <br />
          <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#4A2635] block mt-1">
            आपके लिए तैयार एक सरल व प्राकृतिक विकल्प
          </span>
        </h2>

        <p className="text-sm sm:text-base text-[#795968] max-w-xl mx-auto mb-8 leading-relaxed">
          आज ही हमारे वरिष्ठ आयुर्वेदिक विशेषज्ञों से नि:शुल्क परामर्श लें और
          गर्भ अमृत के साथ अपने स्वास्थ्य को नई शक्ति दें।
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <CTAButton
            label="CALL NOW"
            sublabel="तुरंत नि:शुल्क परामर्श पाएं"
            size="lg"
            className="w-full sm:w-auto shadow-xl"
          />
          <CTAButton
            label="व्हाट्सएप पर ऑर्डर करें"
            variant="whatsapp"
            icon="whatsapp"
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=नमस्ते,%20मुझे%20गर्भ%20अमृत%20का%20ऑर्डर%20देना%20है`}
            size="lg"
            className="w-full sm:w-auto shadow-xl"
          />
        </div>

        {/* Security / Trust reassurance badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#795968] font-medium pt-2">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span>गोपनीय डिलीवरी</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span>कैश ऑन डिलीवरी (COD)</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span>100% संतुष्टि गारंटी</span>
          </div>
        </div>
      </div>
    </section>
  );
};

