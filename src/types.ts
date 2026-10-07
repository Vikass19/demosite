export type LookCategory = 
  | 'ALL' 
  | 'TRADITIONAL BRIDAL' 
  | 'MODERN GLAM' 
  | 'ENGAGEMENT' 
  | 'RECEPTION' 
  | 'EDITORIAL';

export interface LookbookItem {
  id: string;
  title: string;
  category: LookCategory;
  categoryLabel: string;
  brideName: string;
  location: string;
  image: string;
  aspect: 'portrait' | 'landscape' | 'square';
  description: string;
  details: {
    event: string;
    skinFinish: string;
    lipShade: string;
    hairDrape: string;
    keyProducts: string[];
  };
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  idealFor: string;
  inclusions: string[];
  prepTime: string;
  actionText: string;
}

export interface TestimonialItem {
  id: string;
  brideName: string;
  weddingEvent: string;
  location: string;
  venue: string;
  rating: number;
  quote: string;
  image: string;
  date: string;
}

export interface InstagramPost {
  id: string;
  type: 'image' | 'reel';
  image: string;
  caption: string;
  likes: string;
  category: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BookingFormState {
  fullName: string;
  whatsappNumber: string;
  eventDate: string;
  city: string;
  venue: string;
  serviceType: string;
  guestCount: string;
  notes: string;
}
