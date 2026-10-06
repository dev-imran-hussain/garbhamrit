import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { usageSteps } from "@/data/features";
import { Utensils, GlassWater, Clock } from "lucide-react";

export const HowToUse: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "spoon":
        return <Utensils className="w-6 h-6" />;
      case "cup":
        return <GlassWater className="w-6 h-6" />;
      default:
        return <Clock className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-12 md:py-16 bg-[#FFF8FA] border-b border-[#F3BFD2]/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="उपयोग विधि"
          title="गर्भ अमृत का सेवन कैसे करें?"
          subtitle="सरल और स्वाभाविक 3 चरण, जिसे आप अपनी दैनिक दिनचर्या में आसानी से शामिल कर सकती हैं।"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {usageSteps.map((step, idx) => (
            <div
              key={step.step}
              className="bg-white border border-[#F3BFD2] rounded-2xl p-6 relative flex flex-col items-center text-center shadow-xs"
            >
              {/* Step number badge */}
              <div className="absolute -top-3.5 bg-[#E83D82] text-white font-extrabold text-xs px-3 py-1 rounded-full shadow-xs">
                चरण {step.step}
              </div>

              {/* Icon Container */}
              <div className="w-14 h-14 mt-2 mb-4 rounded-2xl bg-[#FFF0F5] border border-[#F3BFD2] flex items-center justify-center text-[#B52C62]">
                {getIcon(step.icon)}
              </div>

              <h3 className="font-bold text-lg text-[#4A2635] mb-1">
                {step.title}
              </h3>
              <p className="text-xs font-semibold text-[#E83D82] mb-3">
                {step.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-[#795968] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

