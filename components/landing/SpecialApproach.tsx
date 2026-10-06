import React from "react";
import { Quote, Sparkles } from "lucide-react";
import Image from "next/image";

export const SpecialApproach: React.FC = () => {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-[#FFF0F5] relative overflow-hidden border-b border-[#F3BFD2]/40">
      <div className="absolute top-0 right-0 w-64 h-64 lg:w-96 lg:h-96 opacity-10 pointer-events-none">
        <Image
          src="/decorative/flower-bg.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 text-sm lg:text-base font-semibold text-[#B52C62] bg-white border border-[#F3BFD2] rounded-full shadow-xs">
          <Sparkles className="w-4 h-4 text-[#E83D82]" />
          <span>हमारा विशेष दृष्टिकोण</span>
        </div>

        <div className="bg-white/90 backdrop-blur-md border-2 border-[#F3BFD2] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl relative mt-4">
          <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#FFF0F5] border border-[#F3BFD2] mx-auto flex items-center justify-center text-[#E83D82] mb-6 shadow-sm">
            <Quote className="w-8 h-8 lg:w-10 lg:h-10 rotate-180" />
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#B52C62] leading-[1.3] mb-6">
            &ldquo;मातृत्व केवल एक अवस्था नहीं, बल्कि शरीर, मन और आत्मा के
            पूर्ण सामंजस्य का उत्सव है।&rdquo;
          </h3>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#795968] leading-relaxed max-w-3xl mx-auto">
            गर्भ अमृत केवल एक पोषण सप्लीमेंट नहीं है; यह आयुर्वेद की गहरी
            समझ है। जब शरीर को प्राकृतिक औषधियों का सही पोषण मिलता है, तब तनाव
            कम होता है और शरीर स्वाभाविक रूप से मातृत्व के लिए तैयार और सक्षम
            बनता है।
          </p>
        </div>
      </div>
    </section>
  );
};
