import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { keyFeatures } from "@/data/features";
import { CheckCircle2 } from "lucide-react";

export const KeyFeatures: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-[#F3BFD2]/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="विशेषताएं"
          title="गर्भ अमृत की मुख्य विशेषताएं"
          subtitle="हर पहलू में गुणवत्ता और पारंपरिक शुद्धता का ध्यान रखा गया है।"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {keyFeatures.map((feat) => (
            <div
              key={feat.id}
              className="bg-[#FFF8FA] border border-[#F3BFD2] rounded-2xl p-5 hover:bg-[#FFF0F5] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-full bg-white border border-[#F3BFD2] flex items-center justify-center text-[#10B981]">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold tracking-wide px-2.5 py-0.5 rounded-full bg-white border border-[#F3BFD2] text-[#B52C62]">
                    {feat.badge}
                  </span>
                </div>
                <h3 className="font-bold text-base text-[#4A2635] mb-1.5">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#795968] leading-relaxed">
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

