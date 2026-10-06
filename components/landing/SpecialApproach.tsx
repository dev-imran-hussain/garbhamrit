import React from "react";
import { Quote, Sparkles } from "lucide-react";
import Image from "next/image";

export const SpecialApproach: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-[#FFF0F5] relative overflow-hidden border-b border-[#F3BFD2]/40">
      <div className="absolute top-0 right-0 w-48 h-48 opacity-10 pointer-events-none">
        <Image
          src="/decorative/flower-bg.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 text-xs font-semibold text-[#B52C62] bg-white border border-[#F3BFD2] rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-[#E83D82]" />
          <span>हमारा विशेष दृष्टिकोण</span>
        </div>

        <div className="bg-white/80 backdrop-blur-xs border border-[#F3BFD2] rounded-3xl p-6 sm:p-10 shadow-sm relative mt-2">
          <div className="w-12 h-12 rounded-full bg-[#FFF0F5] border border-[#F3BFD2] mx-auto flex items-center justify-center text-[#E83D82] mb-4">
            <Quote className="w-6 h-6 rotate-180" />
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#B52C62] leading-snug mb-4">
            &ldquo;मातृत्व केवल एक अवस्था नहीं, बल्कि शरीर, मन और आत्मा के
            पूर्ण सामंजस्य का उत्सव है।&rdquo;
          </h3>

          <p className="text-sm sm:text-base text-[#795968] leading-relaxed max-w-2xl mx-auto">
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

