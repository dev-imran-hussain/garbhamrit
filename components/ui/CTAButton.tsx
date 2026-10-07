import React from "react";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig } from "@/data/product";

interface CTAButtonProps {
  label?: string;
  sublabel?: string;
  variant?: "primary" | "whatsapp" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: "phone" | "whatsapp" | "none";
  href?: string;
  className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  label = "कॉल करें (Call Now)",
  sublabel,
  variant = "primary",
  size = "lg",
  icon = "phone",
  href = `tel:${siteConfig.phone}`,
  className = "",
}) => {
  const baseStyles =
    "inline-flex flex-col items-center justify-center font-medium transition-all duration-200 active:scale-95 text-center rounded-full shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizeStyles = {
    sm: "px-5 py-2 text-sm min-h-[40px]",
    md: "px-7 py-3 text-base lg:text-lg min-h-[48px] lg:min-h-[52px]",
    lg: "px-9 py-3.5 sm:py-4 lg:px-12 lg:py-5 text-base sm:text-lg lg:text-xl min-h-[54px] lg:min-h-[66px]",
  };

  const variantStyles = {
    primary:
      "bg-[#E83D82] hover:bg-[#C92F6C] text-white focus:ring-[#E83D82] shadow-[#E83D82]/30",
    whatsapp:
      "bg-[#25D366] hover:bg-[#20BD5A] text-white focus:ring-[#25D366] shadow-[#25D366]/30",
    outline:
      "border-2 border-[#E83D82] text-[#B52C62] bg-white hover:bg-[#FFF0F5] focus:ring-[#E83D82]",
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      <div className="flex items-center gap-2.5 sm:gap-3 font-bold tracking-wide">
        {icon === "phone" && (
          <Phone className="w-5 h-5 lg:w-6 lg:h-6 animate-pulse" />
        )}
        {icon === "whatsapp" && (
          <WhatsAppIcon className="w-5 h-5 lg:w-6 lg:h-6 shrink-0" />
        )}
        <span>{label}</span>
      </div>
      {sublabel && (
        <span className="text-xs sm:text-sm lg:text-base opacity-90 font-normal mt-0.5">
          {sublabel}
        </span>
      )}
    </a>
  );
};
