import React from "react";
import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { siteConfig } from "@/data/product";
import { Sparkles, ShieldCheck } from "lucide-react";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#FFF0F5] to-white relative overflow-hidden border-b border-[#F3BFD2]/40">
      {/* Decorative BG element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] opacity-15 pointer-events-none">
        <Image
          src="/decorative/flower-bg.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-5 text-sm lg:text-base font-bold text-[#B52C62] bg-white border border-[#F3BFD2] rounded-full shadow-xs">
          <Sparkles className="w-5 h-5 text-[#E83D82]" />
          <span>स्वस्थ मातृत्व की ओर पहला कदम</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#B52C62] leading-[1.2] mb-5">
          गर्भ अमृत™ <br />
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#4A2635] block mt-2">
            आपके लिए तैयार एक सरल व प्राकृतिक विकल्प
          </span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#795968] max-w-2xl mx-auto mb-10 leading-relaxed">
          आज ही हमारे वरिष्ठ आयुर्वेदिक विशेषज्ञों से नि:शुल्क परामर्श लें और
          गर्भ अमृत के साथ अपने स्वास्थ्य को नई शक्ति दें।
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8">
          <CTAButton
            label="CALL NOW"
            sublabel="तुरंत नि:शुल्क परामर्श पाएं"
            size="lg"
            className="w-full sm:w-auto min-w-[260px] shadow-2xl"
          />
          <CTAButton
            label="व्हाट्सएप पर ऑर्डर करें"
            variant="whatsapp"
            icon="whatsapp"
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=नमस्ते,%20मुझे%20गर्भ%20अमृत%20का%20ऑर्डर%20देना%20है`}
            size="lg"
            className="w-full sm:w-auto min-w-[260px] shadow-2xl"
          />
        </div>

        {/* Security / Trust reassurance badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm lg:text-base text-[#795968] font-bold pt-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#10B981]" />
            <span>गोपनीय डिलीवरी</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#10B981]" />
            <span>कैश ऑन डिलीवरी (COD)</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#10B981]" />
            <span>100% संतुष्टि गारंटी</span>
          </div>
        </div>
      </div>
    </section>
  );
};
