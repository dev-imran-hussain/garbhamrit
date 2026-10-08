import React from "react";
import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { siteConfig } from "@/data/product";
import { getOptimizedImage } from "@/lib/images";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFF8FA] border-b border-[#F3BFD2]/40">
      {/* Mobile-first Layout: Balanced vertical spacing with equal gap above & below hero image */}
      <div className="block md:hidden">
        <div className="flex flex-col items-center min-h-[calc(100svh-56px)] bg-[#FFF8FA]">
          {/* Top spacer (equal gap between TopCallBar and Image) */}
          <div className="flex-1 min-h-2" />

          {/* Banner Graphic Container - scaled up and centered vertically */}
          <div className="relative w-full aspect-[695/1024] max-h-[72vh] shrink-0">
            <Image
              src={getOptimizedImage("/hero/hero-banner.webp", { width: 750 })}
              alt="गर्भ अमृत™ - माँ बनने की तैयारी में प्रकृति का साथ"
              fill
              priority
              sizes="100vw"
              className="object-contain object-center scale-[1.04]"
            />
          </div>

          {/* Bottom spacer (equal gap between Image and CTA button) */}
          <div className="flex-1 min-h-2" />

          {/* Primary Call to Action Button placed cleanly at bottom */}
          <div className="w-full px-5 pb-5 shrink-0 flex items-center justify-center">
            <CTAButton
              label="CALL NOW"
              size="lg"
              className="w-full max-w-[340px] shadow-xl text-lg font-bold tracking-wider"
            />
          </div>
        </div>
      </div>

      {/* Desktop Layout: Larger fonts, larger image, larger containers */}
      <div className="hidden md:block max-w-7xl mx-auto px-6 lg:px-12 py-14 lg:py-24">
        <div className="grid grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Text, Bullets, and Call to Actions */}
          <div className="col-span-7">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 mb-5 text-sm lg:text-base font-bold text-[#B52C62] bg-[#FFF0F5] border border-[#F3BFD2] rounded-full shadow-xs">
              <span>🌸 100% प्राकृतिक एवं सुरक्षित आयुर्वेदिक पाउडर</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#B52C62] leading-[1.15] mb-4">
              गर्भ अमृत™
            </h1>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1E3A5F] mb-6 leading-tight">
              माँ बनने की तैयारी में <span className="text-[#E83D82]">प्रकृति का साथ</span>
            </h2>

            <div className="inline-block bg-[#E83D82] text-white font-bold text-base md:text-lg lg:text-xl px-6 py-3 lg:px-8 lg:py-3.5 rounded-full mb-8 shadow-md">
              परंपरागत जड़ी-बूटियों से तैयार प्राकृतिक सपोर्ट पाउडर
            </div>

            {/* Bullets matching product highlights with larger icons & text */}
            <div className="space-y-4 lg:space-y-5 mb-10">
              <div className="flex items-center gap-4 bg-white/70 p-3.5 rounded-2xl border border-[#F3BFD2]/60">
                <div className="w-11 h-11 lg:w-13 lg:h-13 rounded-full bg-[#FFF0F5] border border-[#F3BFD2] flex items-center justify-center text-xl lg:text-2xl shrink-0">
                  🍃
                </div>
                <span className="text-base lg:text-xl font-extrabold text-[#4A2635]">
                  महिलाओं के लिए प्राकृतिक सामग्री
                </span>
              </div>

              <div className="flex items-center gap-4 bg-white/70 p-3.5 rounded-2xl border border-[#F3BFD2]/60">
                <div className="w-11 h-11 lg:w-13 lg:h-13 rounded-full bg-[#FFF0F5] border border-[#F3BFD2] flex items-center justify-center text-xl lg:text-2xl shrink-0">
                  🌸
                </div>
                <span className="text-base lg:text-xl font-extrabold text-[#4A2635]">
                  23 चयनित हर्ब्स एवं आयुर्वेदिक सामग्री
                </span>
              </div>

              <div className="flex items-center gap-4 bg-white/70 p-3.5 rounded-2xl border border-[#F3BFD2]/60">
                <div className="w-11 h-11 lg:w-13 lg:h-13 rounded-full bg-[#FFF0F5] border border-[#F3BFD2] flex items-center justify-center text-xl lg:text-2xl shrink-0">
                  ✨
                </div>
                <span className="text-base lg:text-xl font-extrabold text-[#4A2635]">
                  प्रजनन क्षमता में सुधार • गर्भाशय पोषण • हार्मोनल संतुलन
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-5">
              <CTAButton
                label="CALL NOW"
                size="lg"
                className="min-w-[240px] shadow-xl"
              />
              <CTAButton
                label="WHATSAPP"
                variant="whatsapp"
                icon="whatsapp"
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=नमस्ते,%20मुझे%20गर्भ%20अमृत%20के%20बारे%20में%20जानकारी%20चाहिए`}
                size="lg"
                className="shadow-xl"
              />
            </div>
          </div>

          {/* Right: The High-Res Product Jar Photo on Desktop - Much Larger & Prominent */}
          <div className="col-span-5 flex justify-center">
            <div className="relative w-full max-w-[540px] aspect-square rounded-3xl overflow-hidden shadow-2xl border-2 border-[#F3BFD2] bg-white group hover:scale-[1.02] transition-transform duration-300">
              <Image
                src={getOptimizedImage("/hero/desktop-hero-jar.webp", { width: 1080 })}
                alt="गर्भ अमृत™ - फर्टिलिटी सपोर्ट पाउडर"
                fill
                priority
                sizes="(max-width: 1280px) 480px, 560px"
                className="object-cover"
              />
              {/* Subtle aesthetic soft badge */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-[#F3BFD2] flex items-center justify-between text-sm lg:text-base font-extrabold text-[#4A2635] shadow-lg">
                <span className="text-[#B52C62]">100% प्राकृतिक | सुरक्षित | प्रभावी</span>
                <span className="text-[#5A3848] font-bold bg-[#FFF0F5] px-3 py-1 rounded-full border border-[#F3BFD2]">200 gm पैक</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
