import { TopCallBar } from "@/components/landing/TopCallBar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProductIntro } from "@/components/landing/ProductIntro";
import { SpecialApproach } from "@/components/landing/SpecialApproach";
import { CustomerReviews } from "@/components/landing/CustomerReviews";
import { HowToUse } from "@/components/landing/HowToUse";
import { KeyFeatures } from "@/components/landing/KeyFeatures";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { Ingredients } from "@/components/landing/Ingredients";
import { ProductDetails } from "@/components/landing/ProductDetails";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { siteConfig, product } from "@/data/product";

export default function Home() {
  // Structured Data (JSON-LD) for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: "/product/product-jar.svg",
    description: siteConfig.description,
    brand: {
      "@type": "Brand",
      name: "गर्भ अमृत",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: "999",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "480",
    },
  };

  return (
    <>
      {/* Schema.org Product JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Top Call Bar */}
      <TopCallBar />

      <main className="flex-1 pb-16 sm:pb-0">
        {/* 2. Hero Section */}
        <div id="hero">
          <HeroSection />
        </div>

        {/* 3. What Is The Product? */}
        <ProductIntro />

        {/* 4. Special Approach / Perspective */}
        <SpecialApproach />

        {/* 5. Customer Experience & Reviews */}
        <div id="reviews">
          <CustomerReviews />
        </div>

        {/* 6. How To Use */}
        <div id="how-to-use">
          <HowToUse />
        </div>

        {/* 7. Key Product Features */}
        <KeyFeatures />

        {/* 8. Why Choose This Product? */}
        <WhyChooseUs />

        {/* 9. Main Ingredients */}
        <div id="ingredients">
          <Ingredients />
        </div>

        {/* 10. Product Information */}
        <div id="details">
          <ProductDetails />
        </div>

        {/* 11. Final CTA */}
        <FinalCTA />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Mobile Sticky Call / WhatsApp CTA Bar */}
      <StickyMobileCTA />
    </>
  );
}
