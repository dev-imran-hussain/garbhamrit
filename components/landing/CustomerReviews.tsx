import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { reviews } from "@/data/reviews";

export const CustomerReviews: React.FC = () => {
  return (
    <section className="py-14 md:py-20 lg:py-24 bg-white border-b border-[#F3BFD2]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading
          badge="Trust"
          title="माताओं और परिवारों का भरोसा"
          subtitle="जानिए उन बहनों के विचार जिन्होंने गर्भ अमृत को अपनी मातृत्व योजना की जीवनशैली का हिस्सा बनाया।"
        />

        {/* 2-column on mobile/tablet, 4 on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
          {reviews.map((rev) => (
            <ReviewCard key={rev.id} review={rev} />
          ))}
        </div>

        {/* Link to Full 52+ Reviews Internal Page */}
        <div className="text-center pt-4">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#FFF0F5] hover:bg-[#FFE4ED] text-[#8B1E3F] border-2 border-[#F3BFD2] font-extrabold text-sm sm:text-base shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <span>🌸 सभी 52+ माताओं के अनुभव पढ़ें (Read All 52+ Reviews)</span>
            <span className="text-lg leading-none">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
