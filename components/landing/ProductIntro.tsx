import React from "react";
import { Leaf, ShieldCheck, HeartPulse } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const ProductIntro: React.FC = () => {
  const cards = [
    {
      icon: Leaf,
      title: "प्राकृतिक सामग्री",
      desc: "शतावरी, अशोक और लोध्र जैसी 23 प्रामाणिक वनस्पतियों का संतुलन।",
    },
    {
      icon: ShieldCheck,
      title: "हर्बल फॉर्मूलेशन",
      desc: "प्राचीन चरक संहिता और सुश्रुत संहिता के सिद्धांतों पर आधारित।",
    },
    {
      icon: HeartPulse,
      title: "आसान सेवन एवं पोषण",
      desc: "गुनगुने दूध या पानी के साथ सुगमता से पचने वाला और ऊर्जा प्रदाता।",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white border-b border-[#F3BFD2]/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="परिचय"
          title="गर्भ अमृत क्या है?"
          subtitle="गर्भ अमृत महिलाओं के संपूर्ण प्रजनन स्वास्थ्य, गर्भाशय को प्राकृतिक मजबूती और मातृत्व की सुखद यात्रा के लिए तैयार किया गया एक अद्वितीय आयुर्वेदिक पूरक है।"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-[#FFF8FA] border border-[#F3BFD2] rounded-2xl p-6 text-center hover:bg-[#FFF0F5] transition-colors"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-white border border-[#F3BFD2] flex items-center justify-center text-[#E83D82] shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-[#B52C62] mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#795968] leading-relaxed">
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

