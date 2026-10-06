import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-8 md:mb-12 ${isCenter ? "text-center mx-auto max-w-2xl" : "text-left"} ${className}`}
    >
      {badge && (
        <span className="inline-block px-3.5 py-1 mb-3 text-xs md:text-sm font-semibold tracking-wider text-[#B52C62] bg-[#FFF0F5] border border-[#F3BFD2] rounded-full uppercase">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#B52C62] leading-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-[#795968] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

