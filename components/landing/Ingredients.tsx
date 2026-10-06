import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IngredientCard } from "@/components/ui/IngredientCard";
import { ingredients } from "@/data/ingredients";

export const Ingredients: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-[#F3BFD2]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="प्राकृतिक जड़ी-बूटियां"
          title="मुख्य दिव्य घटक (Main Ingredients)"
          subtitle="आयुर्वेद के प्राचीन ग्रंथों से चुनी गई 23+ प्रभावशाली जड़ी-बूटियों का शक्तिशाली और संतुलित मिश्रण।"
        />

        {/* 2 columns mobile, 3 tablet, 4 desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {ingredients.map((ing) => (
            <IngredientCard key={ing.id} ingredient={ing} />
          ))}
        </div>

        <div className="mt-8 text-center bg-[#FFF8FA] border border-[#F3BFD2] rounded-2xl p-4 max-w-xl mx-auto text-xs text-[#795968]">
          ✨ इनके अलावा अन्य 15+ सूक्ष्म पोषक आयुर्वेदिक घटक भी शामिल हैं।
        </div>
      </div>
    </section>
  );
};

