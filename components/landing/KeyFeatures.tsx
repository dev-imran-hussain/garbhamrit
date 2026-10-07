import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { keyFeatures } from "@/data/features";
import { CheckCircle2 } from "lucide-react";

export const KeyFeatures: React.FC = () => {
  return (
    <section className="py-14 md:py-20 lg:py-24 bg-white border-b border-[#F3BFD2]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading
          badge="Features"
          title="Main Features OF गर्भ अमृत"
          subtitle="हर पहलू में गुणवत्ता और पारंपरिक शुद्धता का ध्यान रखा गया है।"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {keyFeatures.map((feat) => (
            <div
              key={feat.id}
              className="bg-[#FFF8FA] border-2 border-[#F3BFD2] rounded-3xl p-6 lg:p-8 hover:bg-[#FFF0F5] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white border-2 border-[#F3BFD2] flex items-center justify-center text-[#10B981] shadow-xs">
                    <CheckCircle2 className="w-6 h-6 lg:w-7 lg:h-7" />
                  </div>
                  <span className="text-xs lg:text-sm font-bold tracking-wide px-3.5 py-1 rounded-full bg-white border border-[#F3BFD2] text-[#B52C62] shadow-xs">
                    {feat.badge}
                  </span>
                </div>
                <h3 className="font-extrabold text-lg lg:text-2xl text-[#4A2635] mb-2.5">
                  {feat.title}
                </h3>
                <p className="text-sm lg:text-base text-[#795968] leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
