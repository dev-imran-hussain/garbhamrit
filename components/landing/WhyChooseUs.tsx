import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { comparisonPoints } from "@/data/features";
import { Check, X } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-14 md:py-20 lg:py-24 bg-[#FFF0F5]/50 border-b border-[#F3BFD2]/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="तुलना एवं श्रेष्ठता"
          title="अन्य विकल्पों की तुलना में गर्भ अमृत क्यों?"
          subtitle="समझिए कि क्यों आयुर्वेदिक गर्भ अमृत आपके मातृत्व के सफर का सबसे भरोसेमंद साथी है।"
        />

        <div className="bg-white border-2 border-[#F3BFD2] rounded-3xl overflow-hidden shadow-lg">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-[#FFF0F5] border-b-2 border-[#F3BFD2] p-4 sm:p-6 text-sm sm:text-base lg:text-lg font-bold text-[#4A2635]">
            <div className="col-span-5 sm:col-span-4">विशेषता / मानक</div>
            <div className="col-span-4 sm:col-span-4 text-[#B52C62] flex items-center gap-1.5 font-extrabold">
              गर्भ अमृत™
            </div>
            <div className="col-span-3 sm:col-span-4 text-[#795968]">
              अन्य सामान्य उत्पाद
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#FFF0F5]">
            {comparisonPoints.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-6 text-xs sm:text-base lg:text-lg items-center hover:bg-[#FFF8FA] transition-colors"
              >
                <div className="col-span-5 sm:col-span-4 font-bold text-[#4A2635] pr-3">
                  {item.title}
                </div>
                <div className="col-span-4 sm:col-span-4 text-[#B52C62] font-semibold flex items-start gap-2 pr-3">
                  <Check className="w-5 h-5 lg:w-6 lg:h-6 text-[#10B981] shrink-0 mt-0.5" />
                  <span>{item.us}</span>
                </div>
                <div className="col-span-3 sm:col-span-4 text-[#795968] flex items-start gap-2">
                  <X className="w-5 h-5 lg:w-6 lg:h-6 text-[#EF4444] shrink-0 mt-0.5" />
                  <span>{item.others}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
