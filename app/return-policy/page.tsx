import { Metadata } from "next";
import { LegalPageLayout } from "@/components/landing/LegalPageLayout";
import { siteConfig } from "@/data/product";

export const metadata: Metadata = {
  title: "Return & Refund Policy | गर्भ अमृत™",
  description: "गर्भ अमृत™ (Garbh Amrit) की वापसी एवं धनवापसी नीति (Return and Refund Policy)।",
};

export default function ReturnPolicyPage() {
  return (
    <LegalPageLayout title="वापसी एवं रिफंड नीति (Return & Refund Policy)">
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#B52C62]">1. वापसी की शर्तें (Eligibility for Return / Replacement)</h2>
        <p>
          गर्भ अमृत™ एक प्राकृतिक खाद्य/स्वास्थ्य पूरक (Dietary Health Supplement) है। स्वच्छता और सुरक्षा नियमों (Health & Hygiene Guidelines) 
          के तहत, एक बार खुला हुआ (Open Seal) जार वापस स्वीकार नहीं किया जा सकता।
        </p>
        <p>हालाँकि, निम्नलिखित परिस्थितियों में हम <strong>7 दिनों के भीतर निःशुल्क प्रतिस्थापन (Free Replacement)</strong> प्रदान करते हैं:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>यदि डिलीवरी के समय पार्सल क्षतिग्रस्त (Damaged) या जार टूटा हुआ मिला हो।</li>
          <li>यदि उत्पाद की बाहरी सुरक्षा सील (Tamper-evident Seal) टूटी हुई हो।</li>
          <li>यदि आपको गलत उत्पाद या एक्सपायर्ड उत्पाद डिलीवर हुआ हो।</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#B52C62]">2. क्लेम दर्ज करने की प्रक्रिया (How to Raise a Claim)</h2>
        <p>
          पार्सल प्राप्त होने के 48 घंटों के भीतर हमारे कस्टमर केयर नंबर (<a href={`tel:${siteConfig.phone}`} className="text-[#B52C62] underline">{siteConfig.phoneDisplay}</a>) 
          या WhatsApp पर पार्सल और जार की स्पष्ट फोटो/वीडियो के साथ संपर्क करें। 
          हमारी टीम तुरंत जांच कर 24-48 घंटों में नया पार्सल डिस्पैच कर देगी।
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#B52C62]">3. ऑर्डर रद्दीकरण (Order Cancellation)</h2>
        <p>
          यदि आप अपना ऑर्डर रद्द करना चाहते हैं, तो कृपया पार्सल डिस्पैच होने से पहले (ऑर्डर देने के 4 से 6 घंटे के भीतर) 
          हमें कॉल या WhatsApp द्वारा सूचित करें। एक बार कूरियर डिस्पैच होने के बाद ऑर्डर रद्द नहीं किया जा सकता।
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#B52C62]">4. रिफंड प्रक्रिया (Refund Process)</h2>
        <p>
          यदि किसी असाधारण स्थिति में रिफंड स्वीकृत होता है, तो ऑनलाइन भुगतान की राशि 5 से 7 कार्य दिवसों के भीतर उसी मूल स्रोत (Original Payment Method/Bank) 
          में वापस क्रेडिट कर दी जाएगी।
        </p>
      </section>
    </LegalPageLayout>
  );
}
