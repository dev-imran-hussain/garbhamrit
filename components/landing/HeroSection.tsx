import React from "react";
import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { siteConfig } from "@/data/product";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFF8FA] border-b border-[#F3BFD2]/40">
      {/* Mobile-first Layout: Exact match with full mobile banner graphic */}
      <div className="block md:hidden">
        {/* Banner Graphic Container */}
        <div className="relative w-full aspect-[695/1024]">
          <Image
            src="/hero/hero-banner.jpg"
            alt="गर्भ अमृत™ - माँ बनने की तैयारी में प्रकृति का साथ"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>

        {/* Primary Call to Action Button right beneath the banner graphic */}
        <div className="px-4 py-4 -mt-2 relative z-10 bg-gradient-to-b from-transparent via-[#FFF8FA] to-[#FFF8FA] text-center">
          <CTAButton
            label="CALL NOW"
            size="lg"
            className="w-full max-w-sm mx-auto shadow-lg text-lg tracking-wider"
          />
        </div>
      </div>

      {/* Desktop Layout: Features the high-res square Jar product photography */}
      <div className="hidden md:block max-w-6xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Text, Bullets, and Call to Actions */}
          <div className="col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 text-xs font-semibold text-[#B52C62] bg-[#FFF0F5] border border-[#F3BFD2] rounded-full">
              <span>🌸 100% प्राकृतिक एवं सुरक्षित आयुर्वेदिक पाउडर</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#B52C62] leading-[1.2] mb-3">
              गर्भ अमृत™
            </h1>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#1E3A5F] mb-4">
              माँ बनने की तैयारी में <span className="text-[#E83D82]">प्रकृति का साथ</span>
            </h2>

            <div className="inline-block bg-[#E83D82] text-white font-medium text-sm lg:text-base px-5 py-2.5 rounded-full mb-6 shadow-sm">
              परंपरागत जड़ी-बूटियों से तैयार प्राकृतिक सपोर्ट पाउडर
            </div>

            {/* Bullets matching product highlights */}
            <div className="space-y-3.5 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FFF0F5] border border-[#F3BFD2] flex items-center justify-center text-[#E83D82] text-lg shrink-0">
                  🍃
                </div>
                <span className="text-base font-semibold text-[#4A2635]">
                  महिलाओं के लिए प्राकृतिक सामग्री
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FFF0F5] border border-[#F3BFD2] flex items-center justify-center text-[#E83D82] text-lg shrink-0">
                  🌸
                </div>
                <span className="text-base font-semibold text-[#4A2635]">
                  23 चयनित हर्ब्स एवं आयुर्वेदिक सामग्री
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FFF0F5] border border-[#F3BFD2] flex items-center justify-center text-[#E83D82] text-lg shrink-0">
                  ✨
                </div>
                <span className="text-base font-semibold text-[#4A2635]">
                  प्रजनन क्षमता में सुधार • गर्भाशय पोषण • हार्मोनल संतुलन
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <CTAButton
                label="CALL NOW"
                sublabel="नि:शुल्क विशेषज्ञ परामर्श"
                size="lg"
                className="min-w-[200px]"
              />
              <CTAButton
                label="व्हाट्सएप पर बात करें"
                variant="whatsapp"
                icon="whatsapp"
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=नमस्ते,%20मुझे%20गर्भ%20अमृत%20के%20बारे%20में%20जानकारी%20चाहिए`}
                size="lg"
              />
            </div>
          </div>

          {/* Right: The High-Res Product Jar Photo requested for Desktop */}
          <div className="col-span-5 flex justify-center">
            <div className="relative w-full max-w-[440px] aspect-square rounded-3xl overflow-hidden shadow-2xl border-2 border-[#F3BFD2] bg-white group hover:scale-[1.01] transition-transform">
              <Image
                src="/hero/desktop-hero-jar.jpg"
                alt="गर्भ अमृत™ - फर्टिलिटी सपोर्ट पाउडर"
                fill
                priority
                sizes="(max-width: 1024px) 400px, 460px"
                className="object-cover"
              />
              {/* Subtle aesthetic soft badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#F3BFD2] flex items-center justify-between text-xs font-semibold text-[#4A2635] shadow-md">
                <span className="text-[#B52C62] font-bold">100% प्राकृतिक | सुरक्षित | प्रभावी</span>
                <span className="text-[#795968]">200 gm पैक</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
