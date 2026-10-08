import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { reviews } from "@/data/reviews";
import { CTAButton } from "@/components/ui/CTAButton";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {reviews.map((rev) => (
            <ReviewCard key={rev.id} review={rev} />
          ))}
        </div>

        <div className="text-center">
          <CTAButton
            label="विशेषज्ञ से परामर्श लें"
            size="lg"
            variant="outline"
          />
        </div>
      </div>
    </section>
  );
};
