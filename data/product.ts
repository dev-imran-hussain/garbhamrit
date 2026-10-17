import { ProductDetails } from "@/types/landing";

export const siteConfig = {
  name: "गर्भ अमृत™ (Garbh Amrit)",

  title:
    "गर्भ अमृत™ | 23+ Ayurvedic Herbs for Women's Daily Wellness",

  description:
    "गर्भ अमृत™ 23+ आयुर्वेदिक जड़ी-बूटियों से तैयार हर्बल फॉर्मूला है, जिसे महिलाओं के दैनिक स्वास्थ्य और पोषण को ध्यान में रखकर बनाया गया है।",

  phone: "+919111077798",
  phoneDisplay: "+91 91110 77798",

  whatsappNumber: "919111077798",

  email: "support@garbhamrit.com",

  supportTiming: "Monday - Saturday: 9:00 AM - 7:00 PM",

  address: "Barkheda Purvaiya, Bagli, Dewas, Madhya Pradesh – 455223",
};

export function getWhatsAppLink(message?: string): string {
  const defaultMsg =
    "नमस्ते! मुझे गर्भ अमृत™ (Garbh Amrit) के बारे में जानकारी चाहिए और ऑर्डर करना है। कृपया आज का डिस्काउंट ऑफर और डिलीवरी डिटेल्स बताएं।";
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message || defaultMsg
  )}`;
}

export const product: ProductDetails = {
  name: "गर्भ अमृत™ Garbh Amrit",

  subtitle:
    "महिलाओं के दैनिक स्वास्थ्य और पोषण के लिए Ayurvedic Herbal Formula",

  tagline:
    "Every woman deserves the beautiful joy of motherhood.",

  category:
    "Ayurvedic Herbal Formulation",

  netQuantity:
    "200 Gram",

  mrp:
    "₹x,xxx",

  discountedPrice:
    "₹xxx",

  suggestedUsage:
    "1 छोटा चम्मच (लगभग 5 ग्राम) गुनगुने दूध या पानी के साथ, दिन में दो बार या चिकित्सक की सलाह के अनुसार।",

  storage:
    "ठंडी और सूखी जगह पर रखें। सीधी धूप और नमी से बचाएं। बच्चों की पहुंच से दूर रखें।",

  batchNo:
    "GA-2026/04",

  manufacturingDate:
    "March 2026",

  expiryDate:
    "2 Years",

  highlights: [
    "23+ Ayurvedic Herbs का balanced blend",
    "Natural & Vegetarian Formula",
    "No Artificial Colors",
    "GMP & AYUSH Standards के अनुसार निर्मित",
    "Daily Women's Wellness & Nutrition के लिए",
  ],

  helplineNumber: "+919111077798",

  helplineDisplay: "+91 91110 77798",

  whatsappNumber: "919111077798",
};