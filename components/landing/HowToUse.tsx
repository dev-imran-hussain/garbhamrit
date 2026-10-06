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
    <section
      className="
        bg-[#FFF9FB]
        border-b border-[#F3BFD2]/40
        py-7
        sm:py-10
        md:py-14
      "
    >
      <div
        className="
          max-w-[900px]
          mx-auto
          px-4
          sm:px-6
        "
      >

        {/* ================= HEADER ================= */}
        <div className="text-center mb-6 sm:mb-9">

          <SectionHeading
            badge="उपयोग विधि"
            title="गर्भ अमृत का सेवन कैसे करें?"
            subtitle="सरल और स्वाभाविक 3 चरण, जिसे आप अपनी दैनिक दिनचर्या में आसानी से शामिल कर सकती हैं।"
          />

        </div>


        {/* ================= STEPS ================= */}
        <div
          className="
            flex
            flex-col
            gap-3.5
            sm:gap-5
            md:grid
            md:grid-cols-3
            md:gap-5
          "
        >

          {usageSteps.map((step) => (
            <div
              key={step.step}
              className="
                relative

                w-full

                min-h-[158px]
                sm:min-h-[170px]
                md:min-h-[300px]

                bg-white

                border
                border-[#F3BFD2]

                rounded-[20px]
                sm:rounded-[22px]

                px-3.5
                py-4

                sm:px-5
                sm:py-5

                md:px-6
                md:py-7

                flex
                flex-row
                md:flex-col

                items-center
                md:items-center

                gap-3.5
                sm:gap-5
                md:gap-4

                shadow-[0_2px_10px_rgba(232,61,130,0.04)]
              "
            >

              {/* ================= NUMBER ================= */}
              <div
                className="
                  absolute
                  z-10

                  left-[10px]
                  top-[10px]

                  sm:left-3
                  sm:top-3

                  w-[37px]
                  h-[37px]

                  sm:w-[40px]
                  sm:h-[40px]

                  rounded-full

                  bg-[#EC3C7E]
                  text-white

                  flex
                  items-center
                  justify-center

                  text-[16px]
                  sm:text-[17px]

                  font-extrabold

                  shadow-[0_3px_8px_rgba(232,61,130,0.18)]
                "
              >
                {String(step.step).padStart(2, "0")}
              </div>


              {/* ================= ICON ================= */}
              <div
                className="
                  shrink-0

                  w-[101px]
                  h-[101px]

                  sm:w-[112px]
                  sm:h-[112px]

                  md:w-[125px]
                  md:h-[125px]

                  rounded-full

                  bg-[#FFF0F5]

                  border
                  border-[#F5C6D8]

                  flex
                  items-center
                  justify-center

                  text-[#E83D82]

                  [&>svg]:w-[35px]
                  [&>svg]:h-[35px]

                  sm:[&>svg]:w-[39px]
                  sm:[&>svg]:h-[39px]

                  md:[&>svg]:w-[42px]
                  md:[&>svg]:h-[42px]
                "
              >
                {getIcon(step.icon)}
              </div>


              {/* ================= CONTENT ================= */}
              <div
                className="
                  flex-1
                  min-w-0

                  text-left

                  md:text-center
                "
              >

                {/* TITLE */}
                <h3
                  className="
                    text-[#10294A]

                    font-extrabold

                    text-[19px]
                    leading-[1.25]

                    sm:text-[21px]

                    md:text-xl

                    mb-1.5
                  "
                >
                  {step.title}
                </h3>


                {/* DESCRIPTION */}
                <p
                  className="
                    text-[#596579]

                    font-medium

                    text-[14px]
                    leading-[1.45]

                    sm:text-[15px]
                    sm:leading-[1.5]

                    md:text-sm

                    mb-1.5
                  "
                >
                  {step.description}
                </p>


                {/* SUBTITLE */}
                {step.subtitle && (
                  <p
                    className="
                      text-[#E83D82]

                      font-bold

                      text-[13px]
                      leading-[1.35]

                      sm:text-sm
                    "
                  >
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