import React from "react";
import { Phone, MessageCircle } from "lucide-react";
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
    "inline-flex flex-col items-center justify-center font-medium transition-all duration-200 active:scale-95 text-center rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizeStyles = {
    sm: "px-5 py-2 text-sm min-h-[40px]",
    md: "px-7 py-3 text-base min-h-[46px]",
    lg: "px-9 py-3.5 text-base md:text-lg min-h-[52px]",
  };

  const variantStyles = {
    primary:
      "bg-[#E83D82] hover:bg-[#C92F6C] text-white focus:ring-[#E83D82] shadow-[#E83D82]/25",
    whatsapp:
      "bg-[#25D366] hover:bg-[#20BD5A] text-white focus:ring-[#25D366] shadow-[#25D366]/25",
    outline:
      "border-2 border-[#E83D82] text-[#B52C62] bg-white hover:bg-[#FFF0F5] focus:ring-[#E83D82]",
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      <div className="flex items-center gap-2 font-semibold tracking-wide">
        {icon === "phone" && <Phone className="w-5 h-5 animate-pulse" />}
        {icon === "whatsapp" && <MessageCircle className="w-5 h-5" />}
        <span>{label}</span>
      </div>
      {sublabel && (
        <span className="text-xs opacity-90 font-normal mt-0.5">
          {sublabel}
        </span>
      )}
    </a>
  );
};

