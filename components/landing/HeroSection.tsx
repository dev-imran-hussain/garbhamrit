import React from "react";
import Image from "next/image";
import { Sparkles, HeartHandshake, Award, CheckCircle } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { product, siteConfig } from "@/data/product";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 md:py-16 bg-gradient-to-b from-[#FFF0F5]/80 via-[#FFF8FA] to-[#FFF0F5]/50 border-b border-[#F3BFD2]/40">
      {/* Decorative floral watermark in background */}
      <div className="absolute -top-12 -right-12 w-64 h-64 opacity-20 pointer-events-none">
        <Image
          src="/decorative/flower-bg.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute -bottom-16 -left-12 w-64 h-64 opacity-15 pointer-events-none rotate-180">
        <Image
          src="/decorative/flower-bg.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Subtitle, Highlights, CTA */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 mb-4 text-xs sm:text-sm font-semibold text-[#B52C62] bg-white border border-[#F3BFD2] rounded-full shadow-xs">
              <Sparkles className="w-4 h-4 text-[#E83D82]" />
              <span>मातृत्व योजना एवं गर्भाशय पोषण के लिए</span>
            </div>

            {/* Brand Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#B52C62] leading-[1.2] mb-4">
              गर्भ अमृत™ <br className="hidden sm:inline" />
              <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#4A2635] block sm:inline mt-1 sm:mt-0">
                प्राकृतिक मातृत्व सुरक्षा और शक्ति
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base md:text-lg text-[#795968] leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
              आयुर्वेद की 23+ दुर्लभ जड़ी-बूटियों (शतावरी, अशोक, लोध्र) से तैयार
              एक प्रामाणिक हर्बल फॉर्मूलेशन, जो महिलाओं में आंतरिक शक्ति,
              हार्मोनल संतुलन और गर्भाशय स्वास्थ्य को सुदृढ़ करता है।
            </p>

            {/* Trust bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#4A2635] font-medium bg-white/70 backdrop-blur-xs p-2 rounded-lg border border-[#F3BFD2]/60">
                <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>100% शुद्ध आयुर्वेदिक तत्व</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#4A2635] font-medium bg-white/70 backdrop-blur-xs p-2 rounded-lg border border-[#F3BFD2]/60">
                <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>कोई केमिकल या साइड-इफेक्ट नहीं</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#4A2635] font-medium bg-white/70 backdrop-blur-xs p-2 rounded-lg border border-[#F3BFD2]/60">
                <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>GMP व आयुष मानकों पर निर्मित</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#4A2635] font-medium bg-white/70 backdrop-blur-xs p-2 rounded-lg border border-[#F3BFD2]/60">
                <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>हजारों महिलाओं का विश्वसनीय साथी</span>
              </div>
            </div>

            {/* CTA Buttons Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <CTAButton
                label="अभी कॉल करें (Call Now)"
                sublabel="नि:शुल्क आयुर्वेदिक परामर्श के लिए"
                size="lg"
                className="w-full sm:w-auto"
              />
              <CTAButton
                label="व्हाट्सएप पर बात करें"
                variant="whatsapp"
                icon="whatsapp"
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=नमस्ते,%20मुझे%20गर्भ%20अमृत%20के%20बारे%20में%20जानकारी%20चाहिए`}
                size="lg"
                className="w-full sm:w-auto"
              />
            </div>
          </div>

          {/* Right Column: Hero Product Image with Badges */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Product Jar Vector */}
              <Image
                src="/product/product-jar.svg"
                alt="गर्भ अमृत आयुर्वेदिक जार"
                fill
                priority
                className="object-contain drop-shadow-xl"
              />

              {/* Floating Badge 1: 100% Ayurvedic */}
              <div className="absolute top-2 left-0 bg-white/95 border border-[#F3BFD2] shadow-md rounded-2xl p-2.5 flex items-center gap-2 backdrop-blur-xs">
                <Award className="w-6 h-6 text-[#E83D82]" />
                <div className="text-left">
                  <p className="text-[10px] text-[#795968] uppercase font-semibold">
                    प्रमाणित
                  </p>
                  <p className="text-xs font-bold text-[#B52C62]">
                    100% हर्बल शुद्धि
                  </p>
                </div>
              </div>

              {/* Floating Badge 2: Net Wt & Trust */}
              <div className="absolute bottom-4 right-0 bg-white/95 border border-[#F3BFD2] shadow-md rounded-2xl p-2.5 flex items-center gap-2 backdrop-blur-xs">
                <HeartHandshake className="w-6 h-6 text-[#10B981]" />
                <div className="text-left">
                  <p className="text-[10px] text-[#795968] uppercase font-semibold">
                    नेट वजन
                  </p>
                  <p className="text-xs font-bold text-[#4A2635]">
                    {product.netQuantity}
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-3 text-xs text-[#795968] text-center">
              सुरक्षित पैकेजिंग • कैश ऑन डिलीवरी उपलब्ध
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

