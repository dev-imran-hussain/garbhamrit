import React from "react";
import { siteConfig } from "@/data/product";
import { Phone, Mail, Clock, MapPin, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4A2635] text-[#FFE4ED] pt-12 pb-8 border-t-2 border-[#E83D82]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-[#795968]/40 text-xs sm:text-sm">
          {/* Col 1: Brand & Bio */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
              गर्भ अमृत™
            </h3>
            <p className="text-[#FFE4ED]/80 leading-relaxed mb-4 text-xs">
              प्राचीन भारतीय आयुर्वेद और आधुनिक गुणवत्ता मानकों के साथ तैयार
              किया गया प्राकृतिक मातृत्व स्वास्थ्य पूरक।
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#B52C62]/40 rounded-full text-[11px] text-[#F3BFD2] border border-[#F3BFD2]/20">
              <Heart className="w-3.5 h-3.5 text-[#E83D82]" />
              <span>हजारों महिलाओं द्वारा प्रमाणित</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm tracking-wider uppercase">
              त्वरित लिंक (Quick Links)
            </h4>
            <ul className="space-y-2 text-[#FFE4ED]/80">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  मुख्य पृष्ठ (Home)
                </a>
              </li>
              <li>
                <a href="#ingredients" className="hover:text-white transition-colors">
                  मुख्य घटक (Ingredients)
                </a>
              </li>
              <li>
                <a href="#how-to-use" className="hover:text-white transition-colors">
                  उपयोग विधि (How to Use)
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  ग्राहक अनुभव (Reviews)
                </a>
              </li>
              <li>
                <a href="#details" className="hover:text-white transition-colors">
                  उत्पाद विवरण (Details)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Trust */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm tracking-wider uppercase">
              नीति एवं नियम (Legal)
            </h4>
            <ul className="space-y-2 text-[#FFE4ED]/80">
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">
                  गोपनीयता नीति (Privacy Policy)
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">
                  नियम व शर्तें (Terms & Conditions)
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">
                  अस्वीकरण (Disclaimer)
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">
                  डिलीवरी नीति (Shipping Policy)
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">
                  वापसी नीति (Return Policy)
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Customer Care */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm tracking-wider uppercase">
              कस्टमर केयर (Contact Us)
            </h4>
            <ul className="space-y-2.5 text-[#FFE4ED]/80">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#E83D82] shrink-0 mt-0.5" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-white font-medium"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#E83D82] shrink-0 mt-0.5" />
                <span>{siteConfig.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#E83D82] shrink-0 mt-0.5" />
                <span>{siteConfig.supportTiming}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E83D82] shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Notice */}
        <div className="py-5 text-[11px] text-[#FFE4ED]/60 leading-relaxed border-b border-[#795968]/30">
          <p>
            <strong>वैधानिक अस्वीकरण (Disclaimer):</strong> यह उत्पाद किसी भी
            रोग के निदान, उपचार या रोकथाम का दावा नहीं करता है। यह एक शास्त्रीय
            आयुर्वेदिक स्वास्थ्य पूरक है। व्यक्तिगत परिणाम भिन्न हो सकते हैं।
            गर्भावस्था या किसी गंभीर चिकित्सकीय स्थिति के दौरान अपने चिकित्सक की
            सलाह अवश्य लें।
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FFE4ED]/70 gap-2">
          <p>© {new Date().getFullYear()} गर्भ अमृत™. सर्वाधिकार सुरक्षित।</p>
          <p>आयुर्वेदिक परंपरा • आधुनिक मानक</p>
        </div>
      </div>
    </footer>
  );
};

