import React from "react";
import Image from "next/image";
import { Ingredient } from "@/types/landing";

export const IngredientCard: React.FC<{ ingredient: Ingredient }> = ({
  ingredient,
}) => {
  return (
    <div className="bg-white border-2 border-[#F3BFD2] rounded-3xl p-5 lg:p-7 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:border-[#E83D82]/60 transition-all duration-300 group">
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 mb-4 rounded-full overflow-hidden bg-[#FFF0F5] border-2 border-[#F3BFD2] flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300 shadow-inner">
        <Image
          src={ingredient.image}
          alt={ingredient.name}
          fill
          sizes="(max-width: 640px) 112px, (max-width: 1024px) 128px, 144px"
          className="object-contain p-1.5"
        />
      </div>
      <h3 className="font-extrabold text-lg sm:text-xl lg:text-2xl text-[#B52C62] leading-snug mb-1">
        {ingredient.name}
      </h3>
      <span className="text-xs sm:text-sm font-bold text-[#795968] mb-3 uppercase tracking-wider">
        {ingredient.hindiName}
      </span>
      <p className="text-xs sm:text-sm lg:text-base text-[#4A2635]/90 leading-relaxed">
        {ingredient.benefit}
      </p>
    </div>
  );
};
