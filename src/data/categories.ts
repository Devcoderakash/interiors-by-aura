import { CategoryInfo } from '../types';

export const categories: CategoryInfo[] = [
  {
    id: "living-room",
    name: "Living Room",
    headline: "Welcoming & Comfortable Spaces",
    description: "Solid wood sofas, centre tables, wall-mounted TV units and seating designed for everyday warmth and family gatherings.",
    image: "/images/living/living_sectional_sofa.jpg",
    itemCountDescription: "Sofas • Coffee Tables • TV Units",
    features: ["Fabric & Wood Sofas", "Center Tables", "Media Consoles", "Accent Chairs"]
  },
  {
    id: "bedroom",
    name: "Bedroom",
    headline: "Restful & Structured Sanctuaries",
    description: "Solid wooden beds, spacious wardrobes, dressing units and nightstands built for serene rest.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    itemCountDescription: "Beds • Wardrobes • Dressers",
    features: ["King & Queen Beds", "Storage Beds", "Dressing Tables", "Bedside Tables"]
  },
  {
    id: "dining",
    name: "Dining",
    headline: "Bringing Families Together",
    description: "Solid wood dining tables, sturdy cushioned chairs and coordinated dining room essentials.",
    image: "/images/dining/dining_6seater_wood.jpg",
    itemCountDescription: "4 & 6-Seater Sets • Benches",
    features: ["4-Seater Tables", "6-Seater Sets", "Solid Wood Chairs", "Dining Benches"]
  },
  {
    id: "doors",
    name: "Doors",
    headline: "Grand Entrances & Interior Accents",
    description: "Handcrafted teakwood main doors, modern geometric panel doors and custom timber door frames.",
    image: "/images/doors/door_teak_carved.jpg",
    itemCountDescription: "Main Doors • Room Doors • Frames",
    features: ["Main Entrance Doors", "Designer Wooden Doors", "Flush Doors", "Custom Door Frames"]
  },
  {
    id: "storage",
    name: "Storage",
    headline: "Orderly & Elegant Living",
    description: "Modular and wooden wardrobes, crockery display cabinets, shoe units and multi-utility consoles.",
    image: "/images/furniture/crockery_cabinet.jpg",
    itemCountDescription: "Wardrobes • Cabinets • Consoles",
    features: ["Sliding Wardrobes", "Crockery Units", "Shoe Racks", "Book Shelves"]
  },
  {
    id: "custom-furniture",
    name: "Custom Furniture",
    headline: "Tailored to Your Floor Plan",
    description: "Furniture crafted around your exact dimensions, choice of polish, fabric and room layout.",
    image: "/images/furniture/custom_pooja_mandir.jpg",
    itemCountDescription: "Bespoke Sizing • Wood Finishes",
    features: ["Custom Dimensions", "Material Selection", "Made for Indian Homes", "Space-Saving Designs"]
  }
];
