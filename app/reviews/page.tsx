import { Metadata } from "next";
import { ReviewsDirectory } from "@/components/landing/ReviewsDirectory";

export const metadata: Metadata = {
  title: "माताओं और परिवारों के 52+ सच्चे अनुभव | गर्भ अमृत™",
  description:
    "IVF, PCOD, अनियमित माहवारी और लंबे इंतजार के बाद माताओं और परिवारों के 52+ वास्तविक अनुभव व व्यक्तिगत प्रतिक्रियाएं।",
  alternates: {
    canonical: "https://www.garbhamrit.com/reviews/",
  },
};

export default function ReviewsPage() {
  return <ReviewsDirectory />;
}

