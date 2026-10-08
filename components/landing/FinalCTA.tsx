import React from "react";
import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { siteConfig } from "@/data/product";
import { Sparkles, ShieldCheck } from "lucide-react";
import { getOptimizedImage } from "@/lib/images";

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-b border-[#F3BFD2]/40 bg-gradient-to-b from-[#FFF0F5] to-white py-16 md:py-24 lg:py-32">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 opacity-[0.12] lg:h-[700px] lg:w-[700px]">
        <Image
          src={getOptimizedImage("/decorative/flower-bg.svg")}
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">

        {/* Badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F3BFD2] bg-white px-5 py-2 text-sm font-bold text-[#B52C62] shadow-sm lg:text-base">
          <Sparkles className="h-5 w-5 text-[#E83D82]" />
          <span>माँ बनने के खूबसूरत सफर की ओर</span>
        </div>

        {/* Heading */}
        <h2 className="mb-5 text-3xl font-black leading-[1.2] text-[#B52C62] sm:text-4xl md:text-5xl lg:text-6xl">
          गर्भ अमृत™
          <span className="mt-2 block text-2xl font-bold text-[#4A2635] sm:text-3xl md:text-4xl lg:text-5xl">
             Start Your Daily Routine with Natural Nutrition
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-[#795968] sm:text-lg md:text-xl">
          23+ आयुर्वेदिक जड़ी-बूटियों से तैयार गर्भ अमृत™ को
          अपनी रोज़ाना की wellness routine में आसानी से शामिल करें।
        </p>

        {/* CTA Buttons */}
        <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">

          <CTAButton
            label="Order Now"
            size="lg"
            className="w-full min-w-[260px] shadow-2xl sm:w-auto"
          />

          <CTAButton
            label="Order On WhatsApp"
            variant="whatsapp"
            icon="whatsapp"
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=नमस्ते,%20मुझे%20गर्भ%20अमृत%20का%20ऑर्डर%20देना%20है`}
            size="lg"
            className="w-full min-w-[260px] shadow-2xl sm:w-auto"
          />

        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 pt-3 text-sm font-semibold text-[#795968] lg:text-base">

          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-[#10B981]" />
            <span>गोपनीय Packaging</span>
          </div>

          <span className="hidden text-[#D9A8BA] sm:block">•</span>

          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-[#10B981]" />
            <span>Cash on Delivery</span>
          </div>

          <span className="hidden text-[#D9A8BA] sm:block">•</span>

          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-[#10B981]" />
            <span>Secure Ordering</span>
          </div>

        </div>

      </div>
    </section>
  );
};