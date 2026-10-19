"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, Phone, Heart, Star, Sparkles, MessageCircle, Filter, CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig, getWhatsAppLink } from "@/data/product";
import { allCustomerReviews, reviewCategories } from "@/data/allReviews";
import { trackCallClick, trackWhatsAppClick } from "@/lib/analytics";

export const ReviewsDirectory: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredReviews = useMemo(() => {
    return allCustomerReviews.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.experience.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FFF8FA] text-[#4A2635] flex flex-col selection:bg-[#F3BFD2] selection:text-[#B52C62]">
      {/* 1. Sticky Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#E83D82] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-white hover:text-white/90 font-bold text-sm sm:text-base transition-transform active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Home</span>
          </Link>

          <span className="font-extrabold text-base sm:text-xl tracking-wide">
            गर्भ अमृत™
          </span>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${siteConfig.phone}`}
              onClick={() => trackCallClick("reviews_header")}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white text-[#E83D82] hover:bg-[#FFF0F5] rounded-full text-xs font-bold shadow-sm transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
            <a
              href={getWhatsAppLink("नमस्ते! मैंने गर्भ अमृत के बारे में रिव्यूज़ पढ़े। मुझे और जानकारी चाहिए।")}
              onClick={() => trackWhatsAppClick("reviews_header")}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#25D366] text-white hover:bg-[#20BD5A] rounded-full text-xs sm:text-sm font-bold shadow-sm transition-all"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. Page Hero Banner */}
      <section className="bg-gradient-to-b from-[#FFF0F5] to-[#FFF8FA] border-b border-[#F3BFD2]/40 py-10 sm:py-14 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 bg-white border border-[#F3BFD2] rounded-full text-xs sm:text-sm font-bold text-[#B52C62] shadow-xs">
            <Sparkles className="w-4 h-4 text-[#E83D82]" />
            <span>52+ सत्यापित व्यक्तिगत अनुभव (Real Feedback)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#8B1E3F] tracking-tight leading-[1.2] mb-4">
            माताओं और परिवारों के सच्चे अनुभव
          </h1>

          <p className="max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-[#5A3848] font-medium sm:font-semibold leading-relaxed">
            संतान प्राप्ति के सफर में धैर्य, सही मार्गदर्शन और पारंपरिक आयुर्वेद पर भरोसा जताने वाली भारत के विभिन्न शहरों की महिलाओं के विचार।
          </p>

          {/* Quick Stats Pill */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-bold text-[#4A2635]">
            <span className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-[#F3BFD2] shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> 52 वास्तविक अनुभव
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-[#F3BFD2] shadow-xs">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" /> 4.9/5 रेटिंग
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-[#F3BFD2] shadow-xs">
              <Heart className="w-4 h-4 text-[#E83D82]" /> 4 मुख्य श्रेणियां
            </span>
          </div>
        </div>
      </section>

      {/* 3. Main Directory & Filters */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {reviewCategories.map((cat) => {
            const count =
              cat.key === "all"
                ? allCustomerReviews.length
                : allCustomerReviews.filter((r) => r.category === cat.key).length;
            const isActive = activeCategory === cat.key;

            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer ${
                  isActive
                    ? "bg-[#8B1E3F] text-white shadow-md scale-105"
                    : "bg-white text-[#5A3848] border border-[#F3BFD2] hover:bg-[#FFF0F5]"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-extrabold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-[#FFF0F5] text-[#8B1E3F]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Category Description Banner (if specific category selected) */}
        {activeCategory !== "all" && (
          <div className="mb-8 p-4 sm:p-5 bg-[#FFF0F5] border-l-4 border-[#8B1E3F] rounded-r-2xl max-w-4xl mx-auto">
            <h2 className="text-base sm:text-lg font-bold text-[#8B1E3F] mb-1">
              {reviewCategories.find((c) => c.key === activeCategory)?.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#5A3848] font-medium">
              {reviewCategories.find((c) => c.key === activeCategory)?.description}
            </p>
          </div>
        )}

        {/* 4. Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredReviews.map((story) => (
            <div
              key={story.id}
              className="bg-white border-2 border-[#F3BFD2] hover:border-[#E83D82]/60 rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Top: Avatar, Name, Location & Category Tag */}
                <div className="flex items-start justify-between gap-3 mb-4 border-b border-[#FFF0F5] pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E83D82] to-[#8B1E3F] text-white font-bold flex items-center justify-center text-sm shadow-xs shrink-0">
                      {story.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base sm:text-lg text-[#1E293B] group-hover:text-[#8B1E3F] transition-colors leading-tight">
                        {story.name}
                      </h3>
                      <span className="text-xs font-semibold text-[#8B1E3F]">
                        📍 {story.location}
                      </span>
                    </div>
                  </div>

                  <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-[#FFF0F5] text-[#8B1E3F] border border-[#F3BFD2] shrink-0">
                    #{story.id < 10 ? `0${story.id}` : story.id}
                  </span>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-500 fill-amber-500"
                    />
                  ))}
                  <span className="text-[11px] font-bold text-gray-500 ml-1.5">
                    5.0 • {story.categoryLabel}
                  </span>
                </div>

                {/* Review Paragraph */}
                <p className="text-xs sm:text-sm text-[#3C4A5E] font-medium leading-relaxed italic">
                  &ldquo;{story.experience}&rdquo;
                </p>
              </div>

              {/* Verified Trust Badge at Bottom */}
              <div className="mt-5 pt-3 border-t border-[#FFF0F5] flex items-center justify-between text-[11px] text-[#64748B] font-semibold">
                <span className="inline-flex items-center gap-1 text-[#10B981]">
                  <CheckCircle2 className="w-3.5 h-3.5" /> सत्यापित अनुभव
                </span>
                <span className="text-[#8B1E3F] font-bold">गर्भ अमृत™</span>
              </div>
            </div>
          ))}
        </div>

        {/* 5. Bottom Callout & Consultation Action */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-[#FFF0F5] via-white to-[#FFF0F5] border-2 border-[#F3BFD2] rounded-3xl p-6 sm:p-10 text-center max-w-4xl mx-auto shadow-md">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#E83D82]/10 text-[#B52C62] font-bold text-xs sm:text-sm mb-3">
            <Heart className="w-4 h-4 text-[#E83D82]" />
            <span>व्यक्तिगत सहायता एवं परामर्श</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-[#8B1E3F] mb-3">
            क्या आप भी अपने मातृत्व के सफर में सही मार्गदर्शन चाहती हैं?
          </h3>

          <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-[#5A3848] font-medium leading-relaxed mb-6">
            हमारी आयुर्वेदिक टीम से अपने स्वास्थ्य, मासिक चक्र या गर्भधारण की योजना पर निःसंकोच बात करें।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              onClick={() => trackCallClick("reviews_bottom_cta")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#E83D82] hover:bg-[#C92F6C] text-white font-bold text-sm sm:text-base shadow-lg transition-all active:scale-95"
            >
              <Phone className="w-5 h-5 animate-pulse" />
              <span>कॉल करें ({siteConfig.phoneDisplay})</span>
            </a>

            <a
              href={getWhatsAppLink("नमस्ते! मुझे गर्भ अमृत™ के बारे में जानकारी चाहिए और अपनी स्थिति पर सलाह लेनी है।")}
              onClick={() => trackWhatsAppClick("reviews_bottom_cta")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm sm:text-base shadow-lg transition-all active:scale-95"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>WhatsApp पर बात करें</span>
            </a>
          </div>
        </div>
      </main>

      {/* 6. Page Footer */}
      <footer className="bg-[#4A2635] text-[#FFE4ED] py-8 text-center text-xs sm:text-sm border-t-4 border-[#E83D82]">
        <div className="max-w-5xl mx-auto px-4 space-y-3">
          <p>© {new Date().getFullYear()} गर्भ अमृत™. सर्वाधिकार सुरक्षित।</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#FFE4ED]/75">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

