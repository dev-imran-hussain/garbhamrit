import { Metadata } from "next";
import { LegalPageLayout } from "@/components/landing/LegalPageLayout";
import { siteConfig } from "@/data/product";

export const metadata: Metadata = {
  title: "Privacy Policy | गर्भ अमृत™",
  description: "गर्भ अमृत™ (Garbh Amrit) की गोपनीयता नीति (Privacy Policy)।",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="गोपनीयता नीति (Privacy Policy)">
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#B52C62]">1.Introduction</h2>
        <p>
          गर्भ अमृत™ ({siteConfig.name}, "हम", "हमारी") आपकी व्यक्तिगत जानकारी की सुरक्षा और गोपनीयता का पूर्ण सम्मान करती है। 
          यह गोपनीयता नीति स्पष्ट करती है कि जब आप हमारी वेबसाइट (<a href="https://www.garbhamrit.com" className="text-[#B52C62] underline">www.garbhamrit.com</a>) 
          पर आते हैं या हमसे उत्पाद ऑर्डर करते हैं, तो हम आपकी जानकारी को किस प्रकार एकत्रित, उपयोग और सुरक्षित रखते हैं।
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#B52C62]">2.Information We Collect</h2>
        <p>जब आप हमारी वेबसाइट पर पूछताछ करते हैं, कॉल करते हैं या WhatsApp के माध्यम से ऑर्डर बुक करते हैं, तो हम निम्नलिखित जानकारी प्राप्त कर सकते हैं:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>संपर्क विवरण:</strong> आपका नाम, फ़ोन नंबर, डिलीवरी का पूरा पता, पिन कोड और ईमेल आईडी।</li>
          <li><strong>ऑर्डर जानकारी:</strong> आपके द्वारा ऑर्डर की गई सामग्री, मात्रा, और Cash on Delivery (COD) या ऑनलाइन भुगतान की प्राथमिकता।</li>
          <li><strong>तकनीकी डेटा:</strong> आईपी पता, ब्राउज़र प्रकार, डिवाइस विवरण और Google Analytics के माध्यम से वेबसाइट उपयोग के आँकड़े।</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#B52C62]">3.How We Use Your Information</h2>
        <p>आपकी व्यक्तिगत जानकारी का उपयोग केवल निम्नलिखित उद्देश्यों के लिए किया जाता है:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>आपके ऑर्डर की पुष्टि करना, पार्सल पैक करना और आपके पते पर सुरक्षित पहुँचाना।</li>
          <li>डिलीवरी स्टेटस या ट्रैकिंग नंबर से संबंधित सूचनाएं WhatsApp या SMS के माध्यम से भेजना।</li>
          <li>ग्राहक सहायता (Customer Support) और आपके सवालों का उत्तर देना।</li>
          <li>वेबसाइट के प्रदर्शन और उपयोगकर्ता अनुभव में निरंतर सुधार करना।</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#B52C62]">4.Data Security & Packaging</h2>
        <p>
          हम आपकी व्यक्तिगत जानकारी को किसी भी तीसरे पक्ष (Third Party) को बेचते, किराए पर या साझा नहीं करते हैं। 
          महिलाओं के स्वास्थ्य और मातृत्व से जुड़े उत्पादों के लिए हम <strong>100% गोपनीय पैकेजिंग (Discreet Packaging)</strong> का पालन करते हैं, 
          ताकि पार्सल के ऊपर उत्पाद के आंतरिक विवरण की किसी को जानकारी न हो।
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#B52C62]">5.Cookies & Analytics</h2>
        <p>
          हमारी वेबसाइट Google Analytics 4 (GA4) का उपयोग करती है जो सामान्य ट्रैफ़िक और उपयोगकर्ता व्यवहार को समझने के लिए कुकीज़ का उपयोग करता है। 
          यह डेटा पूरी तरह से अज्ञात (Anonymous) होता है और किसी की व्यक्तिगत पहचान उजागर नहीं करता।
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#B52C62]">6.Updates to Policy</h2>
        <p>
          हम समय-समय पर इस गोपनीयता नीति को अद्यतन कर सकते हैं। कोई भी बदलाव इसी पृष्ठ पर तुरंत प्रकाशित किया जाएगा।
        </p>
      </section>
    </LegalPageLayout>
  );
}

