import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { product } from "@/data/product";
import { CheckCircle } from "lucide-react";

export const ProductDetails: React.FC = () => {
  return (
    <section className="py-14 md:py-20 lg:py-24 bg-[#FFF8FA] border-b border-[#F3BFD2]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="उत्पाद विवरण"
          title="उत्पाद की सम्पूर्ण जानकारी (Product Specifications)"
          subtitle="पारदर्शिता ही हमारा भरोसा है। उत्पाद के सभी विनिर्देश नीचे दिए गए हैं।"
        />

        <div className="bg-white border-2 border-[#F3BFD2] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Product Pack Image & Price - Larger on Desktop */}
            <div className="lg:col-span-5 flex flex-col items-center text-center border-b lg:border-b-0 lg:border-r-2 border-[#FFF0F5] pb-8 lg:pb-0 lg:pr-8">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mb-5 rounded-3xl overflow-hidden shadow-xl border-2 border-[#F3BFD2]">
                <Image
                  src="/hero/desktop-hero-jar.jpg"
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="font-extrabold text-2xl lg:text-3xl text-[#B52C62] mb-1.5">
                {product.name}
              </h3>
              <p className="text-sm lg:text-base text-[#795968] mb-4 font-medium">{product.category}</p>

              {/* Price Tag */}
              <div className="flex items-baseline gap-3 bg-[#FFF0F5] border-2 border-[#F3BFD2] px-6 py-3 rounded-2xl shadow-sm">
                <span className="text-3xl lg:text-4xl font-black text-[#B52C62]">
                  {product.discountedPrice}
                </span>
                <span className="text-base lg:text-lg line-through text-[#795968]">
                  {product.mrp}
                </span>
                <span className="text-xs lg:text-sm font-bold text-[#10B981] bg-white px-2.5 py-1 rounded-full border border-[#10B981]/20">
                  बचत ऑफर
                </span>
              </div>
            </div>

            {/* Right: Technical Specs Grid */}
            <div className="lg:col-span-7 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
                <div className="bg-[#FFF8FA] p-4 lg:p-5 rounded-2xl border border-[#F3BFD2]">
                  <span className="text-[#795968] block text-xs lg:text-sm font-semibold mb-1">
                    कुल वजन (Net Quantity)
                  </span>
                  <span className="font-black text-lg lg:text-xl text-[#4A2635]">
                    {product.netQuantity}
                  </span>
                </div>

                <div className="bg-[#FFF8FA] p-4 lg:p-5 rounded-2xl border border-[#F3BFD2]">
                  <span className="text-[#795968] block text-xs lg:text-sm font-semibold mb-1">
                    बैच संख्या (Batch No.)
                  </span>
                  <span className="font-black text-lg lg:text-xl text-[#4A2635]">
                    {product.batchNo}
                  </span>
                </div>

                <div className="bg-[#FFF8FA] p-4 lg:p-5 rounded-2xl border border-[#F3BFD2]">
                  <span className="text-[#795968] block text-xs lg:text-sm font-semibold mb-1">
                    निर्माण तिथि (Mfg. Date)
                  </span>
                  <span className="font-black text-lg lg:text-xl text-[#4A2635]">
                    {product.manufacturingDate}
                  </span>
                </div>

                <div className="bg-[#FFF8FA] p-4 lg:p-5 rounded-2xl border border-[#F3BFD2]">
                  <span className="text-[#795968] block text-xs lg:text-sm font-semibold mb-1">
                    समाप्ति अवधि (Expiry)
                  </span>
                  <span className="font-black text-lg lg:text-xl text-[#4A2635]">
                    {product.expiryDate}
                  </span>
                </div>
              </div>

              {/* Usage & Storage Notes */}
              <div className="bg-[#FFF0F5]/70 p-5 lg:p-6 rounded-2xl border-2 border-[#F3BFD2] text-sm sm:text-base lg:text-lg space-y-3">
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
                <h4 className="text-xs lg:text-sm font-extrabold text-[#795968] uppercase tracking-wider mb-3">
                  प्रमुख प्रमाणन व गुणवत्ता बिंदु:
                </h4>
                <ul className="space-y-2 text-sm lg:text-base font-medium text-[#4A2635]">
                  {product.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#10B981] shrink-0" />
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
