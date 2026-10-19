import React from "react";
import { fourReasons } from "@/data/features";

export const FourReasons: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white border-b border-[#F3BFD2]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching reference image */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#8B1E3F] tracking-tight">
            गर्भ अमृत चुनने के 4 मुख्य कारण
          </h2>
          {/* Subtle Pink Divider Line */}
          <div className="w-full h-[2px] bg-[#F7C6D7] mt-3.5 sm:mt-4" />
        </div>

        {/* 2-Column Responsive Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {fourReasons.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#F7C6D7] hover:border-[#E83D82]/60 rounded-2xl p-5 sm:p-6 lg:p-7 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Title */}
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#8B1E3F] leading-snug mb-2 sm:mb-2.5">
                  {item.title}
                </h3>

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
