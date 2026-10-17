import { Metadata } from "next";
import { LegalPageLayout } from "@/components/landing/LegalPageLayout";
import { siteConfig } from "@/data/product";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy | गर्भ अमृत™",
  description: "गर्भ अमृत™ (Garbh Amrit) की शिपिंग और डिलीवरी नीति।",
};

export default function ShippingPolicyPage() {
  return (
    <LegalPageLayout title="शिपिंग एवं डिलीवरी नीति (Shipping & Delivery Policy)">
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#B52C62]">1. डिलीवरी कवरेज (Delivery Coverage)</h2>
        <p>
          हम भारत के सभी राज्यों और प्रमुख शहरों/गांवों में विश्वसनीय कूरियर पार्टनर्स (जैसे Delhivery, BlueDart, DTDC, Xpressbees, India Post) 
          के माध्यम से सुरक्षित और तेज़ डिलीवरी सुनिश्चित करते हैं।
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#B52C62]">2. ऑर्डर प्रोसेसिंग का समय (Order Processing Time)</h2>
        <p>
          कॉल या WhatsApp पर ऑर्डर कन्फर्म होने के 24 से 48 कार्य घंटों के भीतर आपका पार्सल वेयरहाउस से डिस्पैच कर दिया जाता है। 
          रविवार एवं राष्ट्रीय अवकाश के दिन प्रोसेसिंग अगले कार्यदिवस पर की जाती है।
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#B52C62]">3. अनुमानित डिलीवरी समय (Estimated Delivery Timeline)</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>मेट्रो व प्रमुख शहर:</strong> डिस्पैच के बाद 3 से 5 कार्य दिवस।</li>
          <li><strong>अन्य जिले व ग्रामीण क्षेत्र:</strong> डिस्पैच के बाद 5 से 7 कार्य दिवस।</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#B52C62]">4. पार्सल ट्रैकिंग (Tracking Your Parcel)</h2>
        <p>
          पार्सल डिस्पैच होते ही आपको WhatsApp / SMS पर ट्रैकिंग लिंक और AWB नंबर भेज दिया जाता है, 
          जिससे आप लाइव देख सकते हैं कि आपका पार्सल कहाँ तक पहुँचा है।
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#B52C62]">5. गोपनीय पैकेजिंग (100% Discreet Packaging)</h2>
        <p>
          मातृत्व और स्वास्थ्य से जुड़े उत्पाद की संवेदनशीलता को ध्यान में रखते हुए, प्रत्येक पार्सल को मजबूत, सादे और सीलबंद बॉक्स में पैक किया जाता है, 
          ताकि आपकी व्यक्तिगत प्राइवेसी पूरी तरह सुरक्षित रहे।
        </p>
      </section>
    </LegalPageLayout>
  );
}
