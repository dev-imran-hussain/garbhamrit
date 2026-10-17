import { Metadata } from "next";
import { LegalPageLayout } from "@/components/landing/LegalPageLayout";
import { siteConfig } from "@/data/product";

export const metadata: Metadata = {
  title: "Disclaimer | गर्भ अमृत™",
  description: "गर्भ अमृत™ (Garbh Amrit) का वैधानिक अस्वीकरण (Disclaimer)।",
};

export default function DisclaimerPage() {
  return (
    <LegalPageLayout title="वैधानिक अस्वीकरण (Disclaimer)">
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#B52C62]">1. सामान्य स्वास्थ्य एवं शैक्षिक जानकारी (General Information)</h2>
        <p>
          इस वेबसाइट (<a href="https://www.garbhamrit.com" className="text-[#B52C62] underline">www.garbhamrit.com</a>) पर दी गई सभी सामग्रियां, 
          आलेख, विवरण और सुझाव केवल सामान्य स्वास्थ्य जागरूकता और शैक्षिक उद्देश्यों के लिए प्रस्तुत किए गए हैं।
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#B52C62]">2. चिकित्सीय सलाह का विकल्प नहीं (Not a Substitute for Medical Advice)</h2>
        <p>
          गर्भ अमृत™ किसी भी रोग के निदान (Diagnosis), उपचार (Treatment), उपशमन (Cure) या रोकथाम (Prevention) का दावा नहीं करता है। 
          यह एक प्राकृतिक आयुर्वेदिक आहार पूरक (Nutritional Herbal Dietary Supplement) है। 
          यह आपके चिकित्सक या योग्य स्वास्थ्य विशेषज्ञ (Gynecologist/Ayurvedic Doctor) की प्रत्यक्ष चिकित्सीय सलाह का स्थान नहीं ले सकता।
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#B52C62]">3. व्यक्तिगत परिणाम (Individual Results May Vary)</h2>
        <p>
          आयुर्वेद के अनुसार प्रत्येक व्यक्ति की शारीरिक प्रकृति (वात, पित्त, कफ) और जीवनशैली भिन्न होती है। 
          अतः उत्पाद के परिणाम, सुधार की गति और अनुभव प्रत्येक महिला के लिए भिन्न हो सकते हैं।
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#B52C62]">4. गर्भावस्था एवं संवेदनशील स्थितियां (Pregnancy & Special Conditions)</h2>
        <p>
          यदि आप पहले से गर्भवती हैं, स्तनपान करा रही हैं, अथवा किसी गंभीर चिकित्सीय स्थिति या नियमित दवाओं का सेवन कर रही हैं, 
          तो इस पूरक का सेवन शुरू करने से पहले अपने पंजीकृत चिकित्सक से परामर्श अवश्य लें।
        </p>
      </section>
    </LegalPageLayout>
  );
}
