import { Product } from '../types';

export const products: Product[] = [
  // --- LIVING ROOM ---
  {
    id: "sofa-modern-comfort",
    name: "Contemporary 3-Seater Fabric Sofa",
    category: "Living Room",
    subCategory: "Sofas",
    shortDescription: "Clean-lined silhouette with high-density resilient foam, solid wooden inner frame, and breathable warm upholstery.",
    detailedDescription: "Designed for everyday family comfort and spacious Bhopal apartments, featuring reinforced joints, sturdy timber legs, and stain-resistant woven fabric.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    materials: ["Solid Wood Frame", "High Resilient Foam", "Premium Woven Fabric"],
    dimensions: "84\" W x 36\" D x 32\" H",
    featured: true,
    style: "Contemporary"
  },
  {
    id: "sofa-luxury-sectional",
    name: "Luxury L-Shaped Solid Wood Sectional Sofa",
    category: "Living Room",
    subCategory: "Sofas",
    shortDescription: "Spacious corner sectional sofa with handcrafted solid timber frame, plush cushioned seating, and integrated side armrests.",
    detailedDescription: "The ultimate centerpiece for large family living rooms. Built with seasoned hardwood for lifelong durability, high-resilience comfort padding, and premium linen-texture fabric.",
    image: "/images/living/living_sectional_sofa.jpg",
    materials: ["Seasoned Hardwood Frame", "Linen Upholstery", "High Density Foam"],
    dimensions: "108\" W x 72\" D x 33\" H",
    featured: true,
    style: "Luxury Contemporary"
  },
  {
    id: "tv-unit-minimalist-fluted",
    name: "Low-Profile Wall-Mount TV Console",
    category: "Living Room",
    subCategory: "TV Units",
    shortDescription: "Sleek entertainment unit with fluted wooden drawer fronts, wire management grommets, and open shelf for consoles.",
    detailedDescription: "Provides a clean, decluttered focal point in your drawing room with concealed soft-close runners, warm natural wood finish, and ambient backlighting provision.",
    image: "/images/living/living_tv_console.jpg",
    materials: ["Solid Teak Wood Accents", "Fluted Facia", "Concealed Soft-Close Hardware"],
    dimensions: "72\" W x 16\" D x 18\" H",
    featured: true,
    style: "Modern Architectural"
  },
  {
    id: "table-nesting-coffee",
    name: "Solid Teakwood Round Nesting Coffee Table",
    category: "Living Room",
    subCategory: "Center Tables",
    shortDescription: "Dual-tier round solid teakwood nesting tables with smooth beveled edges and sculptural tripod legs.",
    detailedDescription: "Versatile center table set allowing adaptable layouts in living rooms. Made from seasoned solid teak with moisture-resistant natural wax polish.",
    image: "/images/living/living_center_table.jpg",
    materials: ["Solid Teakwood", "Natural Matte Polish", "Precision Joinery"],
    dimensions: "Large: 34\" Dia x 18\" H | Small: 24\" Dia x 15\" H",
    featured: false,
    style: "Modern Minimal"
  },

  // --- BEDROOM ---
  {
    id: "bed-teak-cushioned",
    name: "Solid Wood King Bed with Headboard",
    category: "Bedroom",
    subCategory: "Beds",
    shortDescription: "Sturdy wooden frame with a gently upholstered headboard and integrated under-bed hydraulic storage option.",
    detailedDescription: "Crafted with durable seasoned wood structure and finished with smooth natural polish to resist Bhopal climate fluctuations while providing lasting stability.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    materials: ["Seasoned Hardwood", "Natural Matte Polish", "Plywood Sub-base"],
    dimensions: "76\" W x 82\" L x 44\" H",
    featured: true,
    style: "Warm Minimalist"
  },
  {
    id: "dresser-compact-vanity",
    name: "Contemporary Dressing Table with LED Mirror",
    category: "Bedroom",
    subCategory: "Dressers",
    shortDescription: "Space-conscious vanity table with full-view backlit mirror, cosmetics organizer drawers, and matching stool.",
    detailedDescription: "Designed to tuck into bedroom corners without crowding walkways, featuring dual storage tiers and smooth melamine finish.",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
    materials: ["Engineered Wood", "Silvered Mirror", "Soft-Close Slides"],
    dimensions: "36\" W x 16\" D x 72\" H",
    featured: false,
    style: "Modern"
  },

  // --- DINING ---
  {
    id: "dining-solid-wood-6seater",
    name: "6-Seater Solid Wood Dining Set",
    category: "Dining",
    subCategory: "Dining Sets",
    shortDescription: "Robust solid wood tabletop paired with 6 ergonomically curved wooden chairs with cushioned seating.",
    detailedDescription: "Hand-finished edges with moisture-resistant protective coat, made to withstand daily dinner routines and festive hosting.",
    image: "/images/dining/dining_6seater_wood.jpg",
    materials: ["Solid Hardwood", "Cushioned Fabric Seats", "Scratch-Resistant Polish"],
    dimensions: "72\" L x 38\" W x 30\" H",
    featured: true,
    style: "Classic Indian Contemporary"
  },
  {
    id: "dining-round-teak-4seater",
    name: "4-Seater Round Teakwood Dining Table",
    category: "Dining",
    subCategory: "Dining Sets",
    shortDescription: "Circular solid wood dining table with tapered pedestal base and 4 curved backrest cushioned dining chairs.",
    detailedDescription: "Ideal for cozy breakfast nooks and modern dining spaces. The pedestal base provides generous legroom with zero corner bumps.",
    image: "/images/dining/dining_4seater_round.jpg",
    materials: ["Solid Teak Timber", "High Resilience Foam Seats", "Natural Polyurethane Finish"],
    dimensions: "48\" Diameter x 30\" H",
    featured: true,
    style: "Scandinavian Modern"
  },
  {
    id: "dining-bench-family-set",
    name: "Family Dining Set with Long Wooden Bench",
    category: "Dining",
    subCategory: "Dining Sets",
    shortDescription: "Solid timber dining table featuring 3 cushioned single chairs and a matching long solid wood dining bench.",
    detailedDescription: "Perfect for energetic family homes and festive gatherings, offering flexible seating capacity with clean architectural lines.",
    image: "/images/dining/dining_bench_set.jpg",
    materials: ["Seasoned Teakwood", "Linen Upholstery", "Commercial Grade Topcoat"],
    dimensions: "Table: 70\" L x 36\" W x 30\" H | Bench: 58\" L x 16\" W x 18\" H",
    featured: false,
    style: "Modern Farmhouse"
  },
  {
    id: "dining-crockery-cabinet",
    name: "Glass-Front Teakwood Crockery Cabinet",
    category: "Dining",
    subCategory: "Display Units",
    shortDescription: "Multi-tier display cabinet with tempered glass doors, warm interior illumination, and solid wood base drawers.",
    detailedDescription: "Showcase fine dinnerware, porcelain, and crystal glasses securely with integrated ambient illumination and dust-sealed magnetic doors.",
    image: "/images/furniture/crockery_cabinet.jpg",
    materials: ["Solid Teak Carcass", "Tempered Safety Glass", "Brass Handle Pulls"],
    dimensions: "44\" W x 18\" D x 76\" H",
    featured: true,
    style: "Heritage Contemporary"
  },

  // --- DOORS ---
  {
    id: "door-grand-teak-entrance",
    name: "Carved Teakwood Main Entrance Door",
    category: "Doors",
    subCategory: "Main Doors",
    shortDescription: "Substantial solid wood main door with grooved architectural accents and provisions for multi-point security locks.",
    detailedDescription: "A statement entrance door crafted from seasoned wood to maintain dimensional stability against heat and monsoon moisture. Available in custom dimensions to suit your doorway frame.",
    image: "/images/doors/door_teak_carved.jpg",
    materials: ["Seasoned Teak / Solid Timber", "PU Weather-Coat Finish", "Brass Hardware Accents"],
    dimensions: "38\" W x 84\" H x 1.75\" T (Custom sizes available)",
    featured: true,
    isDoor: true,
    style: "Architectural Statement"
  },
  {
    id: "door-geometric-modern",
    name: "Modern Horizontal Slotted Door",
    category: "Doors",
    subCategory: "Main Doors",
    shortDescription: "Contemporary entrance door with recessed horizontal inlay strips and satin black metal handle.",
    detailedDescription: "Sleek, minimalist design tailored for modern Indian residences looking for clean architectural aesthetics.",
    image: "/images/doors/door_modern_slotted.jpg",
    materials: ["Flush Core", "Natural Wood Veneer", "Matte PU Clear Coat"],
    dimensions: "36\" W x 81\" H x 1.5\" T",
    featured: true,
    isDoor: true,
    style: "Modern Minimal"
  },
  {
    id: "door-classic-paneled-interior",
    name: "Classic 4-Panel Interior Room Door",
    category: "Doors",
    subCategory: "Interior Doors",
    shortDescription: "Timeless raised panel design suitable for bedrooms, study rooms, and prayer areas.",
    detailedDescription: "Provides acoustic damping and thermal insulation between rooms with traditional mouldings and stain options.",
    image: "/images/doors/door_classic_4panel.jpg",
    materials: ["Moulded Timber Skin", "Solid Filler Core", "Durable Lacquer"],
    dimensions: "32\" W x 81\" H x 1.25\" T",
    featured: false,
    isDoor: true,
    style: "Timeless Classic"
  },
  {
    id: "door-fluted-walnut-finish",
    name: "Fluted Texture Luxury Wooden Door",
    category: "Doors",
    subCategory: "Designer Doors",
    shortDescription: "Architectural door featuring vertical fluting that catches ambient light and creates rich texture.",
    detailedDescription: "Ideal for upscale apartments and bungalows seeking a bespoke boutique hotel feel.",
    image: "/images/doors/door_fluted_luxury.jpg",
    materials: ["Solid Core", "Walnut Veneer", "Fluted Profiles"],
    dimensions: "38\" W x 84\" H x 1.75\" T",
    featured: true,
    isDoor: true,
    style: "Luxury Contemporary"
  },
  {
    id: "door-double-entrance-grand",
    name: "Double Leaf Grand Villa Door",
    category: "Doors",
    subCategory: "Main Doors",
    shortDescription: "Symmetrical double-door configuration offering a wide ceremonial entry with brass push plates.",
    detailedDescription: "Created for spacious bungalow and duplex entrances with heavy-duty pivots and weatherproof perimeter seals.",
    image: "/images/doors/door_double_villa.jpg",
    materials: ["Solid Seasoned Hardwood", "Brass Fixtures", "Weather Stripping"],
    dimensions: "60\" W (Total) x 84\" H x 1.75\" T",
    featured: false,
    isDoor: true,
    style: "Traditional Elegance"
  },

  // --- STORAGE ---
  {
    id: "wardrobe-four-door-walnut",
    name: "4-Door Master Wardrobe with Mirror",
    category: "Storage",
    subCategory: "Wardrobes",
    shortDescription: "Spacious multi-compartment wardrobe with dedicated hanging rails, internal drawers, and locker section.",
    detailedDescription: "Engineered for optimal organization with deep shelving, silent-close hinges, and elegant wood grain texture that matches modern bedroom decor.",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
    materials: ["Marine Grade Engineered Board", "Laminate Finish", "Stainless Steel Fittings"],
    dimensions: "72\" W x 24\" D x 84\" H",
    featured: true,
    style: "Modern Functional"
  },
  {
    id: "storage-crockery-cabinet",
    name: "Glass-Front Crockery & Display Cabinet",
    category: "Storage",
    subCategory: "Display Units",
    shortDescription: "Multi-tier display cabinet with tempered glass doors, interior shelf illumination, and closed base storage.",
    detailedDescription: "Perfect for formal dining or living spaces to showcase fine crockery, curios, and treasured keepsakes securely.",
    image: "/images/furniture/crockery_cabinet.jpg",
    materials: ["Tempered Glass", "Hardwood Frame", "Lacquered Finish"],
    dimensions: "44\" W x 18\" D x 76\" H",
    featured: false,
    style: "Classic Contemporary"
  },

  // --- CUSTOM FURNITURE ---
  {
    id: "custom-wardrobe-loft",
    name: "Custom Floor-to-Ceiling Wardrobe with Loft",
    category: "Custom Furniture",
    subCategory: "Custom Storage",
    shortDescription: "Made-to-order bedroom storage spanning the entire wall height to eliminate dust traps and maximize capacity.",
    detailedDescription: "Tailored to your room's exact wall dimensions, beam cutouts, and finish preferences during a showroom consultation.",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
    materials: ["Custom Selected Plywood / Laminates", "Hettich/Hafele Hardware", "Profile Lighting Ready"],
    dimensions: "Customized to Your Room",
    featured: false,
    style: "Bespoke"
  },
  {
    id: "custom-mandir-unit",
    name: "Handcrafted Wooden Pooja Mandir",
    category: "Custom Furniture",
    subCategory: "Pooja Units",
    shortDescription: "Sacred space furniture with intricate carved dome, hanging brass bells, storage drawers, and warm ambient illumination.",
    detailedDescription: "Built with reverence and precision carpentry from solid teakwood, fitting harmoniously into dedicated prayer corners or living spaces.",
    image: "/images/furniture/custom_pooja_mandir.jpg",
    materials: ["Solid Teakwood", "Traditional Carvings", "Brass Bell Fittings"],
    dimensions: "42\" W x 20\" D x 68\" H",
    featured: true,
    style: "Heritage Inspired"
  }
];

export const featuredProducts = products.filter(p => p.featured);
export const doorProducts = products.filter(p => p.category === "Doors");
