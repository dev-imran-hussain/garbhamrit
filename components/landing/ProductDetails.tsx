import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { product } from "@/data/product";
import { ShieldAlert, Package, Calendar, Tag, CheckCircle } from "lucide-react";

export const ProductDetails: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-[#FFF8FA] border-b border-[#F3BFD2]/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="उत्पाद विवरण"
          title="उत्पाद की सम्पूर्ण जानकारी (Product Specifications)"
          subtitle="पारदर्शिता ही हमारा भरोसा है। उत्पाद के सभी विनिर्देश नीचे दिए गए हैं।"
        />

        <div className="bg-white border border-[#F3BFD2] rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Product Pack Image & Price */}
            <div className="lg:col-span-5 flex flex-col items-center text-center border-b lg:border-b-0 lg:border-r border-[#FFF0F5] pb-6 lg:pb-0 lg:pr-6">
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 mb-4">
                <Image
                  src="/product/product-jar.svg"
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="font-bold text-xl text-[#B52C62] mb-1">
                {product.name}
              </h3>
              <p className="text-xs text-[#795968] mb-3">{product.category}</p>

              {/* Price Tag */}
              <div className="flex items-baseline gap-2.5 bg-[#FFF0F5] border border-[#F3BFD2] px-4 py-2 rounded-2xl">
                <span className="text-2xl font-black text-[#B52C62]">
                  {product.discountedPrice}
                </span>
                <span className="text-sm line-through text-[#795968]">
                  {product.mrp}
                </span>
                <span className="text-xs font-bold text-[#10B981] bg-white px-2 py-0.5 rounded-full border border-[#10B981]/20">
                  बचत ऑफर
                </span>
              </div>
            </div>

            {/* Right: Technical Specs Grid */}
            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                <div className="bg-[#FFF8FA] p-3.5 rounded-xl border border-[#F3BFD2]/50">
                  <span className="text-[#795968] block text-[11px] font-medium">
                    कुल वजन (Net Quantity)
                  </span>
                  <span className="font-bold text-[#4A2635]">
                    {product.netQuantity}
                  </span>
                </div>

                <div className="bg-[#FFF8FA] p-3.5 rounded-xl border border-[#F3BFD2]/50">
                  <span className="text-[#795968] block text-[11px] font-medium">
                    बैच संख्या (Batch No.)
                  </span>
                  <span className="font-bold text-[#4A2635]">
                    {product.batchNo}
                  </span>
                </div>

                <div className="bg-[#FFF8FA] p-3.5 rounded-xl border border-[#F3BFD2]/50">
                  <span className="text-[#795968] block text-[11px] font-medium">
                    निर्माण तिथि (Mfg. Date)
                  </span>
                  <span className="font-bold text-[#4A2635]">
                    {product.manufacturingDate}
                  </span>
                </div>

                <div className="bg-[#FFF8FA] p-3.5 rounded-xl border border-[#F3BFD2]/50">
                  <span className="text-[#795968] block text-[11px] font-medium">
                    समाप्ति अवधि (Expiry)
                  </span>
                  <span className="font-bold text-[#4A2635]">
                    {product.expiryDate}
                  </span>
                </div>
              </div>

              {/* Usage & Storage Notes */}
              <div className="bg-[#FFF0F5]/60 p-4 rounded-xl border border-[#F3BFD2] text-xs sm:text-sm space-y-2">
                <p>
                  <strong className="text-[#B52C62]">उपयोग विधि: </strong>
                  <span className="text-[#4A2635]">
                    {product.suggestedUsage}
                  </span>
                </p>
                <p>
                  <strong className="text-[#B52C62]">भंडारण निर्देश: </strong>
                  <span className="text-[#4A2635]">{product.storage}</span>
                </p>
              </div>

              {/* Highlights List */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-[#795968] uppercase tracking-wider mb-2">
                  प्रमुख प्रमाणन व गुणवत्ता बिंदु:
                </h4>
                <ul className="space-y-1.5 text-xs text-[#4A2635]">
                  {product.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

