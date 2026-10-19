import React from "react";
import { keyBenefits } from "@/data/features";
import { SectionHeading } from "../ui/SectionHeading";

export const KeyBenefits: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#FFF9FB] border-b border-[#F3BFD2]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching reference image */}

        <div className="text-center mb-8 sm:mb-12">
              <SectionHeading
                  badge="Key Benefits"
                  title=" गर्भ अमृत के प्रमुख फायदे"
                />
        </div> 

        {/* 2-Column Responsive Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {keyBenefits.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#F7C6D7] hover:border-[#E83D82]/60 rounded-2xl p-5 sm:p-6 lg:p-7 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header with Emoji and Title */}
                <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
                  <span className="text-xl sm:text-2xl shrink-0 select-none" aria-hidden="true">
                    {item.icon}
                  </span>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#8B1E3F] leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Description Text */}
                <p className="text-xs sm:text-sm md:text-base text-[#3C4A5E] font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

