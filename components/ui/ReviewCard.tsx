import React from "react";
import Image from "next/image";
import { Star, BadgeCheck, Quote } from "lucide-react";
import { Review } from "@/types/landing";
import { getOptimizedImage } from "@/lib/images";

export const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#F3BFD2]/70 bg-white p-6 shadow-[0_8px_30px_rgba(181,44,98,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E83D82]/30 hover:shadow-[0_18px_45px_rgba(181,44,98,0.12)] lg:p-7">

      {/* Decorative Quote */}
      <div className="pointer-events-none absolute right-5 top-4 text-[#F3BFD2]/50">
        <Quote className="h-10 w-10 fill-[#FFF0F5] stroke-[#F3BFD2]" />
      </div>

      {/* Customer Header */}
      <div className="relative flex items-center gap-4">

        {/* Avatar */}
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-[#F3BFD2] bg-[#FFF0F5] lg:h-16 lg:w-16">
          <Image
            src={getOptimizedImage(review.image, { width: 120 })}
            alt={review.name}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>

        {/* Customer Info */}
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <h4 className="truncate text-base font-extrabold text-[#4A2635] lg:text-lg">
              {review.name}
            </h4>

            {review.verified && (
              <BadgeCheck
                className="h-4 w-4 shrink-0 text-[#10B981]"
                aria-label="Verified customer"
              />
            )}
          </div>

          {review.city && (
            <p className="mt-0.5 truncate text-xs text-[#795968] lg:text-sm">
              {review.city}
            </p>
          )}

          {/* Rating */}
          <div className="mt-1.5 flex items-center gap-1">
            {[...Array(review.rating)].map((_, i) => (
              <Star
                key={i}
                className="h-3.5 w-3.5 fill-[#F59E0B] stroke-none lg:h-4 lg:w-4"
              />
            ))}

            <span className="ml-1 text-xs font-semibold text-[#795968]">
              {review.rating}.0
            </span>
          </div>
        </div>
      </div>

      {/* Review */}
      <div className="relative mt-6 flex-1">
        <p className="text-sm leading-7 text-[#5F4650] lg:text-base lg:leading-7">
          “{review.review}”
        </p>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-[#F3BFD2]/40 pt-4">

        {review.verified ? (
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#10B981]">
            <BadgeCheck className="h-4 w-4" />
            <span>Verified Experience</span>
          </div>
        ) : (
          <span />
        )}

        {review.date && (
          <span className="text-xs font-medium text-[#9A7A87]">
            {review.date}
          </span>
        )}
      </div>
    </div>
  );
};
