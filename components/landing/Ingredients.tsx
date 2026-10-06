import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IngredientCard } from "@/components/ui/IngredientCard";
import { ingredients } from "@/data/ingredients";

export const Ingredients: React.FC = () => {
  return (
    <section className="py-14 md:py-20 lg:py-24 bg-white border-b border-[#F3BFD2]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading
          badge="प्राकृतिक जड़ी-बूटियां"
          title="मुख्य दिव्य घटक (Main Ingredients)"
          subtitle="आयुर्वेद के प्राचीन ग्रंथों से चुनी गई 23+ प्रभावशाली जड़ी-बूटियों का शक्तिशाली और संतुलित मिश्रण।"
        />

        {/* 2 columns mobile, 3 tablet, 4 desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-7 lg:gap-8">
          {ingredients.map((ing) => (
            <IngredientCard key={ing.id} ingredient={ing} />
          ))}
        </div>

        <div className="mt-10 text-center bg-[#FFF8FA] border-2 border-[#F3BFD2] rounded-3xl p-5 sm:p-6 max-w-2xl mx-auto text-sm lg:text-base font-semibold text-[#795968] shadow-sm">
          ✨ इनके अलावा अन्य 15+ सूक्ष्म पोषक आयुर्वेदिक घटक भी शामिल हैं।
        </div>
      </div>
    </section>
  );
};
