import React from "react";
import Image from "next/image";
import { Star, CheckCircle2 } from "lucide-react";
import { Review } from "@/types/landing";

export const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className="bg-white border border-[#F3BFD2] rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
      <div>
        {/* Header: Avatar, Name, Stars */}
        <div className="flex items-center gap-3.5 mb-3.5">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#F3BFD2] bg-[#FFF0F5] shrink-0">
            <Image
              src={review.image}
              alt={review.name}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <h4 className="font-semibold text-base text-[#4A2635] truncate">
                {review.name}
              </h4>
              {review.verified && (
                <CheckCircle2
                  className="w-4 h-4 text-[#10B981] shrink-0"
                  aria-label="सत्यापित खरीदार"
                />
              )}
            </div>
            {review.city && (
              <p className="text-xs text-[#795968] truncate">{review.city}</p>
            )}
            <div className="flex items-center gap-0.5 mt-1 text-[#F59E0B]">
              {[...Array(review.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-[#F59E0B] stroke-none"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Review text */}
        <p className="text-sm text-[#4A2635]/90 leading-relaxed italic">
          &ldquo;{review.review}&rdquo;
        </p>
      </div>

      {review.date && (
        <div className="mt-4 pt-3 border-t border-[#FFF0F5] flex justify-between items-center text-[11px] text-[#795968]">
          <span>सत्यापित अनुभव</span>
          <span>{review.date}</span>
        </div>
      )}
    </div>
  );
};

