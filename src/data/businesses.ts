
export interface Business {
  id: string;
  name: string;
  category: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  website?: string;
  email?: string;
  description: string;
  hours: {
    [key: string]: string;
  };
  rating: number;
  reviewCount: number;
  features: string[];
  images: {
    thumbnail: string;
    gallery: string[];
  };
  isFeatured?: boolean;
}

export const categories = [
  "Restaurants",
  "Retail",
  "Professional Services",
  "Healthcare",
  "Beauty & Wellness",
  "Automotive",
  "Home Services",
  "Entertainment",
  "Financial Services",
  "Other"
];

export const businesses: Business[] = [
  {
    id: "1",
    name: "Green Leaf Cafe",
    category: "Restaurants",
    address: "123 Main St",
    city: "Springfield",
    state: "IL",
    zipCode: "62701",
    phone: "(555) 123-4567",
    website: "https://greenleafcafe.com",
    email: "info@greenleafcafe.com",
    description: "A cozy cafe offering organic coffee, fresh pastries, and healthy lunch options made with locally-sourced ingredients.",
    hours: {
      Monday: "7:00 AM - 6:00 PM",
      Tuesday: "7:00 AM - 6:00 PM",
      Wednesday: "7:00 AM - 6:00 PM",
      Thursday: "7:00 AM - 6:00 PM",
      Friday: "7:00 AM - 8:00 PM",
      Saturday: "8:00 AM - 8:00 PM",
      Sunday: "8:00 AM - 4:00 PM"
    },
    rating: 4.7,
    reviewCount: 128,
    features: ["Outdoor Seating", "Free Wi-Fi", "Organic", "Vegetarian Options", "Gluten-Free Options"],
    images: {
      thumbnail: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1470&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=1471&auto=format&fit=crop"
      ]
    },
    isFeatured: true
  },
  {
    id: "2",
    name: "Tech Solutions Inc.",
    category: "Professional Services",
    address: "456 Business Ave",
    city: "Springfield",
    state: "IL",
    zipCode: "62702",
    phone: "(555) 987-6543",
    website: "https://techsolutionsinc.com",
    email: "support@techsolutionsinc.com",
    description: "Local IT consulting firm providing technology solutions, computer repair, and network setup for small businesses.",
    hours: {
      Monday: "9:00 AM - 5:00 PM",
      Tuesday: "9:00 AM - 5:00 PM",
      Wednesday: "9:00 AM - 5:00 PM",
      Thursday: "9:00 AM - 5:00 PM",
      Friday: "9:00 AM - 5:00 PM",
      Saturday: "10:00 AM - 2:00 PM",
      Sunday: "Closed"
    },
    rating: 4.5,
    reviewCount: 74,
    features: ["On-site Service", "Same-Day Repair", "Business Contracts", "Security Solutions"],
    images: {
      thumbnail: "https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?q=80&w=1528&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1470&auto=format&fit=crop"
      ]
    }
  },
  {
    id: "3",
    name: "Sunshine Dental Care",
    category: "Healthcare",
    address: "789 Health Blvd",
    city: "Springfield",
    state: "IL",
    zipCode: "62703",
    phone: "(555) 234-5678",
    website: "https://sunshinedental.com",
    email: "appointments@sunshinedental.com",
    description: "Family dentistry practice offering comprehensive dental care including preventive, restorative, and cosmetic services.",
    hours: {
      Monday: "8:00 AM - 4:00 PM",
      Tuesday: "8:00 AM - 4:00 PM",
      Wednesday: "10:00 AM - 7:00 PM",
      Thursday: "8:00 AM - 4:00 PM",
      Friday: "8:00 AM - 2:00 PM",
      Saturday: "Closed",
      Sunday: "Closed"
    },
    rating: 4.8,
    reviewCount: 205,
    features: ["Emergency Services", "Insurance Accepted", "Cosmetic Dentistry", "Children Friendly"],
    images: {
      thumbnail: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1468&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1606811842243-4e8d23311d9c?q=80&w=1528&auto=format&fit=crop"
      ]
    },
    isFeatured: true
  },
  {
    id: "4",
    name: "The Fashion Boutique",
    category: "Retail",
    address: "101 Shopping Lane",
    city: "Springfield",
    state: "IL",
    zipCode: "62704",
    phone: "(555) 345-6789",
    website: "https://thefashionboutique.com",
    email: "style@thefashionboutique.com",
    description: "Stylish clothing boutique offering curated selections of women's fashion, accessories, and unique gift items.",
    hours: {
      Monday: "10:00 AM - 7:00 PM",
      Tuesday: "10:00 AM - 7:00 PM",
      Wednesday: "10:00 AM - 7:00 PM",
      Thursday: "10:00 AM - 7:00 PM",
      Friday: "10:00 AM - 8:00 PM",
      Saturday: "10:00 AM - 8:00 PM",
      Sunday: "12:00 PM - 5:00 PM"
    },
    rating: 4.6,
    reviewCount: 92,
    features: ["Personal Shopping", "Gift Wrapping", "Local Designers", "Sustainable Fashion"],
    images: {
      thumbnail: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1470&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1470&auto=format&fit=crop"
      ]
    }
  },
  {
    id: "5",
    name: "Auto Care Center",
    category: "Automotive",
    address: "555 Motor Drive",
    city: "Springfield",
    state: "IL",
    zipCode: "62705",
    phone: "(555) 456-7890",
    website: "https://autocarecenter.com",
    email: "service@autocarecenter.com",
    description: "Full-service auto repair shop specializing in preventative maintenance, diagnostics, and complete vehicle repair.",
    hours: {
      Monday: "8:00 AM - 6:00 PM",
      Tuesday: "8:00 AM - 6:00 PM",
      Wednesday: "8:00 AM - 6:00 PM",
      Thursday: "8:00 AM - 6:00 PM",
      Friday: "8:00 AM - 6:00 PM",
      Saturday: "8:00 AM - 3:00 PM",
      Sunday: "Closed"
    },
    rating: 4.4,
    reviewCount: 147,
    features: ["Free Estimates", "Certified Mechanics", "Warranty Service", "Shuttle Service", "Loaner Cars"],
    images: {
      thumbnail: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1528&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1596519502963-5871d34c4e68?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1634626372180-efcd414d1e01?q=80&w=1470&auto=format&fit=crop"
      ]
    },
    isFeatured: true
  },
  {
    id: "6",
    name: "Harmony Wellness Spa",
    category: "Beauty & Wellness",
    address: "222 Relaxation Road",
    city: "Springfield",
    state: "IL",
    zipCode: "62706",
    phone: "(555) 567-8901",
    website: "https://harmonyspawellness.com",
    email: "relax@harmonyspawellness.com",
    description: "Luxury day spa offering massages, facials, body treatments, and nail services in a tranquil setting.",
    hours: {
      Monday: "10:00 AM - 7:00 PM",
      Tuesday: "10:00 AM - 7:00 PM",
      Wednesday: "10:00 AM - 7:00 PM",
      Thursday: "10:00 AM - 8:00 PM",
      Friday: "10:00 AM - 8:00 PM",
      Saturday: "9:00 AM - 6:00 PM",
      Sunday: "11:00 AM - 5:00 PM"
    },
    rating: 4.9,
    reviewCount: 183,
    features: ["Couples Massage", "Organic Products", "Steam Room", "Gift Certificates", "Bridal Services"],
    images: {
      thumbnail: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1470&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=1471&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1534&auto=format&fit=crop"
      ]
    }
  },
  {
    id: "7",
    name: "Community Bank & Trust",
    category: "Financial Services",
    address: "333 Finance Street",
    city: "Springfield",
    state: "IL",
    zipCode: "62707",
    phone: "(555) 678-9012",
    website: "https://communitybanktrust.com",
    email: "info@communitybanktrust.com",
    description: "Local community bank offering personal and business banking services including checking accounts, loans, and investment options.",
    hours: {
      Monday: "9:00 AM - 5:00 PM",
      Tuesday: "9:00 AM - 5:00 PM",
      Wednesday: "9:00 AM - 5:00 PM",
      Thursday: "9:00 AM - 5:00 PM",
      Friday: "9:00 AM - 6:00 PM",
      Saturday: "9:00 AM - 12:00 PM",
      Sunday: "Closed"
    },
    rating: 4.3,
    reviewCount: 79,
    features: ["Free Checking", "Mobile Banking", "Small Business Loans", "Financial Planning", "Drive-Through"],
    images: {
      thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1470&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=1470&auto=format&fit=crop"
      ]
    }
  },
  {
    id: "8",
    name: "Home Improvement Experts",
    category: "Home Services",
    address: "444 Builder Avenue",
    city: "Springfield",
    state: "IL",
    zipCode: "62708",
    phone: "(555) 789-0123",
    website: "https://homeimprovementexperts.com",
    email: "projects@homeimprovementexperts.com",
    description: "Full-service home remodeling company specializing in kitchens, bathrooms, basements, and whole-home renovations.",
    hours: {
      Monday: "8:00 AM - 5:00 PM",
      Tuesday: "8:00 AM - 5:00 PM",
      Wednesday: "8:00 AM - 5:00 PM",
      Thursday: "8:00 AM - 5:00 PM",
      Friday: "8:00 AM - 5:00 PM",
      Saturday: "By appointment",
      Sunday: "Closed"
    },
    rating: 4.6,
    reviewCount: 112,
    features: ["Free Estimates", "Licensed & Insured", "Warranty", "Financing Available", "Design Services"],
    images: {
      thumbnail: "https://images.unsplash.com/photo-1503594384566-461fe158fa3f?q=80&w=1374&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1469&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1556909114-44e3e9699e8a?q=80&w=1470&auto=format&fit=crop"
      ]
    }
  }
];
