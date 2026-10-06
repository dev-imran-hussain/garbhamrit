import React from "react";
import Image from "next/image";
import { Ingredient } from "@/types/landing";

export const IngredientCard: React.FC<{ ingredient: Ingredient }> = ({
  ingredient,
}) => {
  return (
    <div className="bg-white border border-[#F3BFD2] rounded-2xl p-4 md:p-5 flex flex-col items-center text-center shadow-xs hover:shadow-md hover:border-[#E83D82]/50 transition-all group">
      <div className="relative w-20 h-20 mb-3 rounded-full overflow-hidden bg-[#FFF0F5] border border-[#F3BFD2] flex items-center justify-center p-1 group-hover:scale-105 transition-transform">
        <Image
          src={ingredient.image}
          alt={ingredient.name}
          width={80}
          height={80}
          className="object-contain"
        />
      </div>
      <h3 className="font-bold text-base md:text-lg text-[#B52C62] leading-snug">
        {ingredient.hindiName}
      </h3>
      <span className="text-xs font-medium text-[#795968] mb-2 uppercase tracking-wide">
        {ingredient.name}
      </span>
      <p className="text-xs text-[#4A2635]/85 leading-relaxed">
        {ingredient.benefit}
      </p>
    </div>
  );
};

