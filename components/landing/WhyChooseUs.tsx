import React from "react";
import { treatmentComparison } from "@/data/features";
import { SectionHeading } from "../ui/SectionHeading";

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#FFF9FB] border-b border-[#F3BFD2]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching reference image */}
       
       {/* <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#8B1E3F] tracking-tight">
            इलाज की तुलना: अंग्रेज़ी दवाएं, IVF बनाम गर्भ अमृत
          </h2>
          {/* Subtle Pink Divider Line 
          <div className="w-full h-[2px] bg-[#F7C6D7] mt-3.5 sm:mt-4 mb-4 sm:mb-5" />
          <p className="text-sm sm:text-base md:text-lg text-[#4A2635] font-semibold leading-relaxed">
            संतान प्राप्ति के लिए लोग लाखों रुपये पानी की तरह बहा देते हैं, फिर भी सफलता की गारंटी नहीं मिलती । आइए समझें असली फर्क:
          </p>
        </div> */}

          <div className="text-center mb-8 sm:mb-12">
          <SectionHeading
            badge="Comparison Of Cure"
            title="इलाज की तुलना"
            subtitle="संतान प्राप्ति के लिए लोग लाखों रुपये पानी की तरह बहा देते हैं, फिर भी सफलता की गारंटी नहीं मिलती । आइए समझें असली फर्क:
"
          />
        </div>

        {/* Emotion / Quote Callout Box */}
        <div className="my-6 sm:my-8 p-4 sm:p-6 bg-[#FFF0F5] border-l-[5px] border-[#8B1E3F] rounded-r-2xl shadow-xs">
          <p className="font-bold text-[#601229] text-sm sm:text-base md:text-lg leading-relaxed">
            &ldquo;शादी के सालों बाद भी गोद सूनी रहना किसी भी महिला के लिए सबसे बड़ा दुख होता है । जब अंग्रेज़ी दवाइयां और महंगे ट्रीटमेंट भी जवाब दे देते हैं, तब गर्भ अमृत का प्राकृतिक और असरदार आयुर्वेदिक उपचार आपके शरीर को गर्भधारण के लिए तैयार करता है ।&rdquo;
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-[#F7C6D7] shadow-sm bg-white">
          <table className="w-full min-w-[720px] text-left border-collapse">
            <thead>
              <tr className="bg-[#8B1E3F] text-white text-sm sm:text-base font-bold">
                <th className="py-3.5 sm:py-4 px-4 sm:px-6">उपचार का प्रकार</th>
                <th className="py-3.5 sm:py-4 px-4 sm:px-6">अनुमानित खर्चे (Cost)</th>
                <th className="py-3.5 sm:py-4 px-4 sm:px-6">सफलता की दर व जोखिम</th>
                <th className="py-3.5 sm:py-4 px-4 sm:px-6">शरीर पर दुष्प्रभाव</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F7C6D7] text-xs sm:text-sm md:text-base">
              {treatmentComparison.map((row, idx) => (
                <tr
                  key={idx}
                  className={
                    row.isFeatured
                      ? "bg-[#FFF0F5] font-semibold text-[#8B1E3F]"
                      : "bg-white text-[#3C4A5E] hover:bg-[#FFF9FB] transition-colors"
                  }
                >
                  {/* Col 1: Type */}
                  <td className="py-4 sm:py-5 px-4 sm:px-6 font-bold align-top">
                    <span className={row.isFeatured ? "text-[#8B1E3F] font-extrabold text-sm sm:text-base md:text-lg" : "text-[#1E293B]"}>
                      {row.type}
                    </span>
                  </td>

                  {/* Col 2: Cost */}
                  <td className="py-4 sm:py-5 px-4 sm:px-6 font-bold align-top">
                    <div className={row.isFeatured ? "text-[#8B1E3F] font-extrabold" : "text-[#1E293B]"}>
                      {row.cost}
                    </div>
                    {row.costSub && (
                      <div className="text-xs text-[#64748B] font-normal mt-0.5">
                        {row.costSub}
                      </div>
                    )}
                  </td>

                  {/* Col 3: Success Rate & Risk */}
                  <td className="py-4 sm:py-5 px-4 sm:px-6 align-top leading-relaxed">
                    <div className={row.isFeatured ? "font-bold text-[#8B1E3F]" : ""}>
                      {row.riskRate}
                    </div>
                    {row.riskRateSub && (
                      <div className="text-xs font-bold text-[#8B1E3F] mt-0.5">
                        {row.riskRateSub}
                      </div>
                    )}
                  </td>

                  {/* Col 4: Side Effects */}
                  <td className="py-4 sm:py-5 px-4 sm:px-6 align-top leading-relaxed">
                    <div className={row.isFeatured ? "font-bold text-[#8B1E3F]" : ""}>
                      {row.sideEffects}
                    </div>
                    {row.sideEffectsSub && (
                      <div className="text-xs font-bold text-[#8B1E3F] mt-0.5">
                        {row.sideEffectsSub}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
