import React from "react";
import Image from "next/image";
import { Quote, Sparkles } from "lucide-react";
import { getOptimizedImage } from "@/lib/images";

export const SpecialApproach: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-b border-[#F3BFD2]/50 bg-gradient-to-b from-[#FFF7FA] via-[#FFF0F5] to-[#FFEAF2] py-14 sm:py-18 md:py-24 lg:py-28">
      
      {/* Decorative Flower - Top Right */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 opacity-[0.07] sm:h-96 sm:w-96 lg:-right-16 lg:-top-24 lg:h-[480px] lg:w-[480px]">
        <Image
          src={getOptimizedImage("/decorative/flower-bg.svg")}
          alt=""
          fill
          priority={false}
          className="object-contain"
        />
      </div>

      {/* Decorative Flower - Bottom Left */}
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rotate-180 opacity-[0.04] sm:h-80 sm:w-80">
        <Image
          src={getOptimizedImage("/decorative/flower-bg.svg")}
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Soft Decorative Blobs */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-[#E83D82]/5 blur-3xl sm:h-64 sm:w-64" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F3BFD2] bg-white/80 px-4 py-2 text-xs font-bold tracking-wide text-[#B52C62] shadow-sm backdrop-blur-sm sm:text-sm">
            <Sparkles className="h-4 w-4 text-[#E83D82]" />
            <span>Our Mission</span>
          </div>

          <h2 className="mb-4 text-3xl font-extrabold leading-tight text-[#8F244E] sm:text-4xl md:text-5xl lg:text-6xl">
            Motherhood and Nature
              <span className="block text-[#C93468]">
                  Beautifully Together
              </span>
          </h2>

          <div className="mx-auto h-1 w-16 rounded-full bg-[#E83D82] opacity-80" />
        </div>

        {/* Main Quote Card */}
        <div className="relative mx-auto mt-10 max-w-5xl sm:mt-12">

          {/* Quote Mark */}
          <div className="absolute -top-6 left-1/2 z-20 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#FFF0F5] bg-[#E83D82] text-white shadow-lg sm:h-16 sm:w-16">
            <Quote className="h-7 w-7 rotate-180 sm:h-8 sm:w-8" />
          </div>

          <div className="rounded-[2rem] border border-[#F3BFD2]/80 bg-white/90 px-5 pb-8 pt-12 shadow-[0_20px_60px_rgba(181,44,98,0.10)] backdrop-blur-md sm:px-10 sm:pb-12 sm:pt-14 md:px-14 md:pb-14 lg:px-20 lg:pt-16">

            {/* Quote */}
            <blockquote>
              <p className="text-center text-xl font-extrabold leading-[1.55] text-[#A52B59] sm:text-2xl md:text-3xl lg:text-[2.65rem] lg:leading-[1.45]">
                   हर महिला को माँ बनने की खुशी मिले
              </p>
            </blockquote>

            {/* Divider */}
            <div className="mx-auto my-7 flex items-center justify-center gap-3 sm:my-9">
              <span className="h-px w-10 bg-[#F3BFD2]" />
              <Sparkles className="h-4 w-4 text-[#E83D82]" />
              <span className="h-px w-10 bg-[#F3BFD2]" />
            </div>

            {/* Description */}
            <p className="mx-auto max-w-3xl text-center text-sm leading-7 font-medium sm:font-semibold text-[#5A3848] sm:text-base sm:leading-8 md:text-lg lg:text-xl">
           गर्भ अमृत™ 23+ आयुर्वेदिक जड़ी-बूटियों से तैयार हर्बल फॉर्मूला है,
          जो महिलाओं के दैनिक स्वास्थ्य और पोषण को ध्यान में रखकर बनाया गया है।
            </p>

            {/* Bottom Highlight */}
            <div className="mx-auto mt-8 flex max-w-xl items-center justify-center gap-2 rounded-2xl border border-[#F3BFD2]/70 bg-[#FFF0F5]/70 px-4 py-3 text-center sm:mt-10 sm:px-6">
              <Sparkles className="h-4 w-4 shrink-0 text-[#E83D82]" />
              <span className="text-xs font-bold text-[#9B3158] sm:text-sm">
                प्राकृतिक पोषण • आयुर्वेदिक दृष्टिकोण • मातृत्व की देखभाल
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

