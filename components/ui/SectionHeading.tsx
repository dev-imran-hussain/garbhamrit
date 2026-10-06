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
      className={`mb-8 md:mb-14 lg:mb-16 ${
        isCenter ? "text-center mx-auto max-w-3xl lg:max-w-4xl" : "text-left"
      } ${className}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-3.5 text-xs sm:text-sm lg:text-base font-semibold tracking-wider text-[#B52C62] bg-[#FFF0F5] border border-[#F3BFD2] rounded-full uppercase shadow-xs">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#B52C62] leading-[1.2] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#795968] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
