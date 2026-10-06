import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { usageSteps } from "@/data/features";
import { Utensils, GlassWater, Clock } from "lucide-react";

export const HowToUse: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "spoon":
        return <Utensils strokeWidth={1.8} />;
      case "cup":
        return <GlassWater strokeWidth={1.8} />;
      default:
        return <Clock strokeWidth={1.8} />;
    }
  };

  return (
    <section className="bg-[#FFF9FB] border-b border-[#F3BFD2]/40 py-10 sm:py-14 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-8 sm:mb-12">
          <SectionHeading
            badge="उपयोग विधि"
            title="गर्भ अमृत का सेवन कैसे करें?"
            subtitle="सरल और स्वाभाविक 3 चरण, जिसे आप अपनी दैनिक दिनचर्या में आसानी से शामिल कर सकती हैं।"
          />
        </div>

        {/* ================= STEPS ================= */}
        <div className="flex flex-col gap-4 sm:gap-6 md:grid md:grid-cols-3 md:gap-6 lg:gap-8">
          {usageSteps.map((step) => (
            <div
              key={step.step}
              className="
                relative
                w-full
                min-h-[160px]
                sm:min-h-[180px]
                md:min-h-[340px]
                lg:min-h-[380px]
                bg-white
                border-2
                border-[#F3BFD2]
                rounded-3xl
                px-5
                py-5
                md:px-7
                md:py-9
                flex
                flex-row
                md:flex-col
                items-center
                gap-4
                sm:gap-6
                md:gap-5
                shadow-sm
                hover:shadow-xl
                hover:border-[#E83D82]/50
                transition-all
                duration-300
              "
            >
              {/* ================= NUMBER ================= */}
              <div
                className="
                  absolute
                  z-10
                  left-3
                  top-3
                  md:left-4
                  md:top-4
                  w-10
                  h-10
                  md:w-12
                  md:h-12
                  rounded-full
                  bg-[#E83D82]
                  text-white
                  flex
                  items-center
                  justify-center
                  text-base
                  md:text-lg
                  font-black
                  shadow-md
                "
              >
                {String(step.step).padStart(2, "0")}
              </div>

              {/* ================= ICON ================= */}
              <div
                className="
                  shrink-0
                  w-24
                  h-24
                  sm:w-28
                  sm:h-28
                  md:w-32
                  md:h-32
                  lg:w-36
                  lg:h-36
                  rounded-full
                  bg-[#FFF0F5]
                  border-2
                  border-[#F5C6D8]
                  flex
                  items-center
                  justify-center
                  text-[#E83D82]
                  [&>svg]:w-9
                  [&>svg]:h-9
                  sm:[&>svg]:w-11
                  sm:[&>svg]:h-11
                  md:[&>svg]:w-14
                  md:[&>svg]:h-14
                  shadow-inner
                "
              >
                {getIcon(step.icon)}
              </div>

              {/* ================= CONTENT ================= */}
              <div className="flex-1 min-w-0 text-left md:text-center">
                {/* TITLE */}
                <h3 className="text-[#10294A] font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2">
                  {step.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-[#596579] font-medium text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-2">
                  {step.description}
                </p>

                {/* SUBTITLE */}
                {step.subtitle && (
                  <p className="text-[#E83D82] font-bold text-xs sm:text-sm md:text-base">
                    {step.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};