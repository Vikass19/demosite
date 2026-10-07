import { LookbookItem, ServiceItem, TestimonialItem, InstagramPost, FaqItem } from '../types';

import heroImg from '../assets/images/hero_bridal_portrait_1791367282645.jpg';
import transformationImg from '../assets/images/transformation_bridal_1791367297800.jpg';
import featuredBrideImg from '../assets/images/featured_bride_spread_1791367310712.jpg';
import closeupImg from '../assets/images/bridal_detail_closeup_1791367329570.jpg';
import artistImg from '../assets/images/shreya_artist_editorial_1791367342731.jpg';

export const ASSETS = {
  hero: heroImg,
  transformation: transformationImg,
  featuredBride: featuredBrideImg,
  closeup: closeupImg,
  artist: artistImg,
};

export const LOOKBOOK_ITEMS: LookbookItem[] = [
  {
    id: 'lb-1',
    title: 'The Royal Maharashtrian Bride',
    category: 'TRADITIONAL BRIDAL',
    categoryLabel: 'Traditional Bridal',
    brideName: 'Radhika Deshmukh',
    location: 'South Mumbai',
    image: heroImg,
    aspect: 'portrait',
    description: 'Dewy velvet skin with soft sculpted warm tones, traditional Chandrakor bindi, and bespoke temple jewellery balance.',
    details: {
      event: 'Morning Muhurat & Lagna',
      skinFinish: 'Luminous HD / Waterproof',
      lipShade: 'Velvet Rose Nude with Terracotta undertone',
      hairDrape: 'Neat Sleek Bun with Fresh Mogra Gajra & Nauvari Saree Draping',
      keyProducts: ['Charlotte Tilbury Hollywood Flawless', 'Dior Backstage Face & Body', 'Pat McGrath Mothership Eyes', 'MAC Prep+Prime Fix+']
    }
  },
  {
    id: 'lb-2',
    title: 'Champagne Reception Radiance',
    category: 'RECEPTION',
    categoryLabel: 'Reception Glam',
    brideName: 'Sanya Singhania',
    location: 'Taj Mahal Palace, Mumbai',
    image: featuredBrideImg,
    aspect: 'landscape',
    description: 'Soft champagne metallic lids with customized feather-light mink lashes, glowing glass skin, and sculpted cheekbones for evening lights.',
    details: {
      event: 'Grand Reception Evening',
      skinFinish: 'Ultra-HD Glass Glow',
      lipShade: 'Glossy Caramel Toffee',
      hairDrape: 'Hollywood Waves with Crystal Pins & Lehenga Dupatta Veil Pinning',
      keyProducts: ['Tom Ford Traceless Foundation', 'Hourglass Ambient Lighting Powder', 'Natasha Denona Glam Palette', 'Huda Beauty Lip Contour']
    }
  },
  {
    id: 'lb-3',
    title: 'Precision Kohl & Dewy Detail',
    category: 'EDITORIAL',
    categoryLabel: 'Editorial Beauty',
    brideName: 'Meera Kapadia',
    location: 'Bandra Studio, Mumbai',
    image: closeupImg,
    aspect: 'portrait',
    description: 'Subtle smoked kohl liner, precision micro-feathered brows, and poreless breathable skin texture tailored for high-res 8K photography.',
    details: {
      event: 'Vogue India Bridal Editorial',
      skinFinish: 'Satin Real-Skin Texture',
      lipShade: 'Bare Nude with Rosewood Tint',
      hairDrape: 'Textured Low Chignon with Jasmine Entwined',
      keyProducts: ['NARS Light Reflecting Complexion', 'Laura Mercier Translucent Honey', 'Rare Beauty Soft Pinch', 'Urban Decay All Nighter']
    }
  },
  {
    id: 'lb-4',
    title: 'Sun-Drenched Alibaug Sangeet',
    category: 'MODERN GLAM',
    categoryLabel: 'Modern Glam',
    brideName: 'Pooja Merchant',
    location: 'Awas Beach Villa, Alibaug',
    image: transformationImg,
    aspect: 'portrait',
    description: 'Golden hour bronzed complexion with rose gold shimmer on the eyes and high-movement water-resistant formulation built for dancing all night.',
    details: {
      event: 'Sangeet & Cocktail Sundowner',
      skinFinish: 'Golden Bronzed Radiant Glow',
      lipShade: 'Warm Mauve Matte',
      hairDrape: 'Soft Beachy Romantic Curls with Floral Vines',
      keyProducts: ['Estée Lauder Double Wear Light', 'Fenty Sun Stalk’r Bronzer', 'Anastasia Beverly Hills Soft Glam', 'Kryolan Fixing Spray']
    }
  },
  {
    id: 'lb-5',
    title: 'Intimate Sunset Engagement',
    category: 'ENGAGEMENT',
    categoryLabel: 'Engagement',
    brideName: 'Tanvi Agarwal',
    location: 'Koregaon Park, Pune',
    image: closeupImg,
    aspect: 'portrait',
    description: 'Fresh monochromatic peach blush, fluffy brushed brows, and effortless modern Indian styling for an open-air garden celebration.',
    details: {
      event: 'Garden Ring Ceremony',
      skinFinish: 'Fresh Dewy Hydration',
      lipShade: 'Spiced Peach Satin',
      hairDrape: 'Half-up Half-down with Babys Breath',
      keyProducts: ['Armani Luminous Silk', 'Patrick Ta Major Glow Blush', 'Benefit Precisely My Brow', 'Bobbi Brown Crushed Lip Color']
    }
  },
  {
    id: 'lb-6',
    title: 'Heritage Royal Palace Nuptials',
    category: 'TRADITIONAL BRIDAL',
    categoryLabel: 'Destination Bridal',
    brideName: 'Rhea Mehta',
    location: 'Umaid Bhawan, Jodhpur',
    image: heroImg,
    aspect: 'landscape',
    description: 'Timeless crimson and antique gold coordination, matte-luminous barrier withstands destination climate, regal double-dupatta anchoring.',
    details: {
      event: 'Destination Royal Wedding',
      skinFinish: 'Climate-Resistant Velvet Matte',
      lipShade: 'Classic Heritage Crimson Red',
      hairDrape: 'Royal Middle-Parted Architectural Chignon with Sheeshpatti Anchoring',
      keyProducts: ['Dior Forever Matte', 'Chanel Les Beiges', 'Pat McGrath Subversive Palette', 'Skindinavia Bridal Setting Mist']
    }
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'signature-bridal',
    number: '01',
    title: 'SIGNATURE BRIDAL',
    subtitle: 'The pinnacle bridal experience designed for your primary wedding ceremony.',
    idealFor: 'Muhurat, Pheras, Church Nuptials, Nikah, Destination Weddings',
    prepTime: '2.5 to 3 Hours on-site',
    inclusions: [
      'Luxury High-Definition (HD) Skin Prep & Air-like Foundation',
      'Advanced Custom Eye Makeup (Cut-crease, Soft Smokey, or Heritage Kohl)',
      'Premium Mink / Featherweight False Lashes & Eye Shaping',
      'Long-Wear Lip Sculpting tailored to your outfit & undertone',
      'Master Bridal Hair Styling with padding, extensions & fresh floral setting',
      'Dupatta Draping & Traditional Saree / Nauvari Draping with needle-point anchoring',
      'Bespoke Jewellery Setting (Mathapatti, Nath, Maang Tikka, Sheeshpatti)',
      'Touch-up Kit Guidance + Direct Venue Travel anywhere in India'
    ],
    actionText: 'ENQUIRE FOR BRIDAL'
  },
  {
    id: 'engagement-reception',
    number: '02',
    title: 'ENGAGEMENT & RECEPTION',
    subtitle: 'High-impact glam tailored for evening chandeliers and flash photography.',
    idealFor: 'Sangeet, Cocktail, Roka, Engagement, and Grand Reception',
    prepTime: '2 to 2.5 Hours on-site',
    inclusions: [
      'Sweat-proof & Flash-tested Complexion balancing',
      'Statement Evening Eye Artistry (Champagne Metallics, Sultry Smokey)',
      'Handcrafted Individual Lash Clusters or Premium Strips',
      'Contemporary Hair Styling (Hollywood Waves, Textured Braids, Sleek Ponytails)',
      'Designer Lehenga Dupatta Pinning & Gown Silhouette Draping',
      'Body Glow Application (Collarbones, Shoulders & Back for open cuts)',
      'Pre-event Virtual Look Consultation & Moodboard alignment'
    ],
    actionText: 'ENQUIRE FOR EVENT'
  },
  {
    id: 'party-family-glam',
    number: '03',
    title: 'PARTY & FAMILY GLAM',
    subtitle: 'Refined elegance for mothers, sisters, and the bridal party.',
    idealFor: 'Mother of the Bride, Sisters, Bridesmaids, Close Family',
    prepTime: '60 to 75 Mins per person',
    inclusions: [
      'Radiant Soft Glam Makeup customized to age and skin type',
      'Flattering Natural Hair Styling (Textured buns, Blowouts, Soft waves)',
      'Natural Accent Lashes for subtle eye definition',
      'Saree, Dupatta, or Anarkali Draping with neat pin placement',
      'Dedicated Assistant Artists available for group bridal squads',
      'Seamless coordination alongside the bride’s timeline'
    ],
    actionText: 'ENQUIRE FOR GROUP'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't-1',
    brideName: 'Ananya Roy-Kapoor',
    weddingEvent: 'Lagna & Wedding Ceremony',
    location: 'Mumbai',
    venue: 'Taj Land’s End, Bandra',
    rating: 5,
    quote: 'Shreya understood exactly how I wanted to look: like the best version of myself, not a masked stranger. My makeup stayed flawless through tears, heavy lights, and 12 hours of ceremonies. In high-res photos, my skin still looked like skin. Truly the calmest presence on my wedding morning.',
    image: heroImg,
    date: 'February 2026'
  },
  {
    id: 't-2',
    brideName: 'Meera Singhal',
    weddingEvent: 'Destination Beach Wedding',
    location: 'Alibaug',
    venue: 'Villa Magnolia Estate',
    rating: 5,
    quote: 'I was terrified of humidity melting my makeup during our open-air Alibaug sunset pheras. Shreya’s prep and waterproofing wizardry was beyond words. From 4 PM till our 3 AM after-party, not a smudge. Every auntie and photographer kept asking who did my makeup!',
    image: featuredBrideImg,
    date: 'January 2026'
  },
  {
    id: 't-3',
    brideName: 'Tanvi Kulkarni',
    weddingEvent: 'Traditional Maharashtrian Nuptials',
    location: 'Pune',
    venue: 'JW Marriott, Senapati Bapat Rd',
    rating: 5,
    quote: 'Her draping of my ancestral Nauvari saree and the precision with which she set my grandmother’s traditional Nath was art in itself. She treated every piece of jewellery with such respect. If you want elegance without excessive cakey layers, book Shreya without second thought.',
    image: closeupImg,
    date: 'November 2025'
  },
  {
    id: 't-4',
    brideName: 'Dr. Rhea Sanghavi',
    weddingEvent: 'Cocktail & Royal Reception',
    location: 'Mumbai & Udaipur',
    venue: 'St. Regis Mumbai',
    rating: 5,
    quote: 'I booked Shreya for both my Mumbai cocktail and Udaipur reception. Her punctuality, quiet luxury aesthetic, and attention to skin health won over my entire family. Her hair team is just as top tier. Worth every single rupee.',
    image: transformationImg,
    date: 'December 2025'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    type: 'reel',
    image: heroImg,
    caption: 'Muhurat morning magic in South Bombay. Dewy skin, micro-bindi & heirloom jewels for Radhika. ✨ #MumbaiBride #ShreyaKamatBride',
    likes: '4.2k',
    category: 'Reel · 340k Views'
  },
  {
    id: 'ig-2',
    type: 'image',
    image: closeupImg,
    caption: 'Close-ups that don’t lie. Zero filter, 100% natural skin texture under flash. Bridal beauty built to last through pheras. 🤍',
    likes: '2.8k',
    category: 'Detail Macro'
  },
  {
    id: 'ig-3',
    type: 'reel',
    image: transformationImg,
    caption: 'Watch the transformation from bare face to wedding-ready radiance. Skin prep is 70% of the glow. 👰🏻‍♀️',
    likes: '8.9k',
    category: 'Reel · 620k Views'
  },
  {
    id: 'ig-4',
    type: 'image',
    image: featuredBrideImg,
    caption: 'Champagne tones & Hollywood wave perfection for Sanya’s grand reception at The Taj. Pure modern royal energy.',
    likes: '3.5k',
    category: 'Reception Look'
  },
  {
    id: 'ig-5',
    type: 'image',
    image: artistImg,
    caption: 'Backstage notes: My kit essentials for the 2026 wedding season. High performance, featherweight luxury formulations only.',
    likes: '1.9k',
    category: 'Behind The Scenes'
  },
  {
    id: 'ig-6',
    type: 'reel',
    image: closeupImg,
    caption: 'The art of the perfect veil drape. Securing double dupattas so our brides can dance weightlessly without slipping.',
    likes: '5.1k',
    category: 'Reel · 410k Views'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How far in advance should I book my bridal date?',
    answer: 'Because Shreya personally attends only one signature bride per major auspicious wedding slot to guarantee unhurried perfection, popular muhurat dates between October and March often book 4 to 8 months in advance. We recommend checking date availability as soon as your wedding venue is locked.'
  },
  {
    id: 'faq-2',
    question: 'Do you travel outside Mumbai?',
    answer: 'Yes, absolutely. While Shreya is based in Bandra, Mumbai, she travels frequently across Pune, Alibaug, Goa, Udaipur, Jaipur, Kerala, and international destination weddings. Travel and stay logistics are coordinated directly with your wedding planning team.'
  },
  {
    id: 'faq-3',
    question: 'Do you offer bridal trials?',
    answer: 'Yes. Bridal consultations and trials can be hosted at Shreya’s private Bandra beauty studio on weekdays (subject to availability). We discuss your skin type, outfit swatch colours, jewellery scale, and do a complete half-face technique preview so you step into your wedding day with 100% peace of mind.'
  },
  {
    id: 'faq-4',
    question: 'What does the bridal package include?',
    answer: 'Our signature bridal package is an all-inclusive luxury experience: thorough bespoke skin preparation, customized HD makeup, premium mink lashes, professional hair styling (including padding & fresh flower setting), dupatta & saree/nauvari draping, and jewellery placement. We also provide a bridal emergency touch-up kit.'
  },
  {
    id: 'faq-5',
    question: 'Is a booking advance required?',
    answer: 'Yes. To officially secure and block your exclusive date in Shreya’s diary, a 50% non-refundable retainer advance is required along with a digital booking agreement. Dates cannot be held tentatively without an advance.'
  },
  {
    id: 'faq-6',
    question: 'Do you provide hair styling and draping?',
    answer: 'Yes, master hair styling and professional draping are fully integral to our philosophy. Shreya works alongside her trusted senior hair artist and draping specialists who accompany her to ensure every pleat, dupatta anchor, and hair contour is runway-level immaculate.'
  },
  {
    id: 'faq-7',
    question: 'Can I book makeup for my bridesmaids and family?',
    answer: 'Yes! We offer coordinated Family & Bridal Squad packages for mothers, sisters, and bridesmaids. For larger groups (3+ guests), Shreya’s senior associate artists work alongside her to maintain high speed and uniform luxury standards without ever compromising the bride’s schedule.'
  }
];
