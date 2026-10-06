export interface Review {
  id: string;
  name: string;
  city?: string;
  image: string;
  rating: number;
  date?: string;
  review: string;
  verified?: boolean;
}

export interface Ingredient {
  id: string;
  name: string;
  hindiName: string;
  benefit: string;
  image: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProductDetails {
  name: string;
  subtitle: string;
  tagline: string;
  category: string;
  netQuantity: string;
  mrp: string;
  discountedPrice?: string;
  suggestedUsage: string;
  storage: string;
  batchNo: string;
  manufacturingDate: string;
  expiryDate: string;
  highlights: string[];
  helplineNumber: string;
  helplineDisplay: string;
  whatsappNumber: string;
}

