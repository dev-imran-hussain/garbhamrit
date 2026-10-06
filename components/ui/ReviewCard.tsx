import React from "react";
import Image from "next/image";
import { Star, CheckCircle2 } from "lucide-react";
import { Review } from "@/types/landing";

export const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className="bg-white border-2 border-[#F3BFD2] rounded-3xl p-6 lg:p-7 shadow-sm hover:shadow-xl hover:border-[#E83D82]/50 transition-all duration-300 relative flex flex-col justify-between">
      <div>
        {/* Header: Avatar, Name, Stars */}
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-14 h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden border-2 border-[#F3BFD2] bg-[#FFF0F5] shrink-0">
            <Image
              src={review.image}
              alt={review.name}
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-base lg:text-lg text-[#4A2635] truncate">
                {review.name}
              </h4>
              {review.verified && (
                <CheckCircle2
                  className="w-4 h-4 lg:w-5 lg:h-5 text-[#10B981] shrink-0"
                  aria-label="सत्यापित खरीदार"
                />
              )}
            </div>
            {review.city && (
              <p className="text-xs lg:text-sm text-[#795968] truncate mt-0.5">{review.city}</p>
            )}
            <div className="flex items-center gap-1 mt-1 text-[#F59E0B]">
              {[...Array(review.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#F59E0B] stroke-none"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Review text */}
        <p className="text-sm lg:text-base text-[#4A2635]/90 leading-relaxed italic">
          &ldquo;{review.review}&rdquo;
        </p>
      </div>

      {review.date && (
        <div className="mt-5 pt-3.5 border-t border-[#FFF0F5] flex justify-between items-center text-xs lg:text-sm text-[#795968] font-medium">
          <span className="text-[#10B981] font-semibold">✓ सत्यापित अनुभव</span>
          <span>{review.date}</span>
        </div>
      )}
    </div>
  );
};
