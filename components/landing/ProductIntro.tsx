import React from "react";
import { Leaf, ShieldCheck, HeartPulse } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const ProductIntro: React.FC = () => {
  const cards = [
    {
      icon: Leaf,
      title: "Natural Ingredients",
      desc: "शतावरी, अशोक और लोध्र जैसी 23 प्रामाणिक वनस्पतियों का संपूर्ण संतुलन।",
    },
    {
      icon: ShieldCheck,
      title: "Pure Herbal Formulation",
      desc: "प्राचीन चरक संहिता और सुश्रुत संहिता के दिव्य आयुर्वेदिक सिद्धांतों पर आधारित।",
    },
    {
      icon: HeartPulse,
      title: "Easy to Use & Nutritious",
      desc: "गुनगुने दूध या पानी के साथ सुगमता से पचने वाला और त्वरित ऊर्जा प्रदाता।",
    },
  ];

  return (
    <section className="py-14 md:py-20 lg:py-24 bg-white border-b border-[#F3BFD2]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Introduction"
          title="What is गर्भ अमृत ?"
          subtitle="गर्भ अमृत महिलाओं के संपूर्ण प्रजनन स्वास्थ्य, गर्भाशय को प्राकृतिक मजबूती और मातृत्व की सुखद यात्रा के लिए तैयार किया गया एक अद्वितीय आयुर्वेदिक पूरक है।"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-[#FFF8FA] border border-[#F3BFD2] rounded-3xl p-6 sm:p-8 lg:p-10 text-center hover:bg-[#FFF0F5] hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 lg:w-18 lg:h-18 mx-auto mb-5 rounded-2xl bg-white border border-[#F3BFD2] flex items-center justify-center text-[#E83D82] shadow-sm">
                  <Icon className="w-7 h-7 lg:w-9 lg:h-9" />
                </div>
                <h3 className="font-extrabold text-xl lg:text-2xl text-[#B52C62] mb-3">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-[#795968] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
