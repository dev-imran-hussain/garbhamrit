import { Metadata } from "next";
import { LegalPageLayout } from "@/components/landing/LegalPageLayout";
import { siteConfig } from "@/data/product";

export const metadata: Metadata = {
  title: "Terms & Conditions | गर्भ अमृत™",
  description: "गर्भ अमृत™ (Garbh Amrit) के नियम एवं शर्तें (Terms and Conditions)।",
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout title="Terms & Conditions">
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#B52C62]">1.General Terms</h2>
        <p>
          इस वेबसाइट (<a href="https://www.garbhamrit.com" className="text-[#B52C62] underline">www.garbhamrit.com</a>) का उपयोग करके आप इन नियमों और शर्तों से बंधे रहने की सहमति देते हैं। 
          यदि आप इन शर्तों से असहमत हैं, तो कृपया वेबसाइट या सेवाओं का उपयोग न करें।
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#B52C62]">2.Product Nature & Intended Use</h2>
        <p>
          गर्भ अमृत™ पारंपरिक आयुर्वेदिक सिद्धांतों एवं 23+ प्राकृतिक जड़ी-बूटियों पर आधारित एक स्वास्थ्य पूरक (Herbal Dietary Supplement) है। 
          यह कोई एलोपैथिक दवा नहीं है और न ही किसी गंभीर बीमारी के त्वरित चमत्कारी इलाज का दावा करता है। 
          सर्वोत्तम परिणामों के लिए अनुशंसित मात्रा और स्वस्थ दिनचर्या का पालन करें।
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#B52C62]">3.Orders & Payments</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>वेबसाइट, फ़ोन कॉल या WhatsApp पर दिया गया ऑर्डर हमारे द्वारा पुष्टिकरण (Confirmation Call/Message) के बाद ही मान्य माना जाता है।</li>
          <li>हम भारत के अधिकांश पिन कोड्स पर Cash on Delivery (COD) तथा सुरक्षित ऑनलाइन भुगतान (UPI/Cards) की सुविधा प्रदान करते हैं।</li>
          <li>हम गलत पते या अपूर्ण फ़ोन नंबर वाले ऑर्डर को रद्द करने का अधिकार सुरक्षित रखते हैं।</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#B52C62]">4.Intellectual Property</h2>
        <p>
          गर्भ अमृत™ ब्रांड नाम, लोगो, ग्राफ़िक्स, टेक्स्ट, उत्पाद विवरण एवं वेबसाइट की सभी सामग्रियां हमारी बौद्धिक संपदा हैं। 
          बिना पूर्व लिखित अनुमति के इनका किसी भी व्यावसायिक उद्देश्य के लिए कॉपी या पुनः उपयोग करना कानूनी रूप से प्रतिबंधित है।
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#B52C62]">5.Jurisdiction</h2>
        <p>
          इन नियमों और शर्तों से संबंधित किसी भी विवाद का निपटारा मध्य प्रदेश (देवास / इंदौर क्षेत्राधिकार) के न्यायालयों के अंतर्गत किया जाएगा।
        </p>
      </section>
    </LegalPageLayout>
  );
}

