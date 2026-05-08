// Sample products - these get loaded if no products exist in the database
export const SAMPLE_PRODUCTS = [
  {
    title: "Premium Glass Soap Dispenser",
    slug: "premium-glass-soap-dispenser",
    price: 1299,
    original_price: 1899,
    category: "Premium Dispensers",
    badge: "Bestseller",
    short_description: "Handcrafted borosilicate glass dispenser with matte-black stainless pump. The apex of bathroom elegance.",
    full_description: "The Easyva Premium Glass Soap Dispenser redefines the concept of a functional object. Forged from hand-blown borosilicate glass — the same material used in scientific laboratories — it possesses an extraordinary thermal and mechanical resilience. The weighted base prevents tipping while the precision-engineered pump delivers exactly 1.5ml per press, eliminating waste. This is not a soap dispenser; it is a statement.",
    features: [
      "Borosilicate glass body — thermal & shatter resistant",
      "304 stainless steel matte-black pump mechanism",
      "Precision 1.5ml dosing per pump",
      "Wide-mouth opening for easy refilling",
      "Anti-clog silicone valve",
      "Weighted anti-slip base",
      "Compatible with all liquid soaps & lotions"
    ],
    specifications: [
      { label: "Capacity", value: "500ml" },
      { label: "Material", value: "Borosilicate Glass + 304 SS" },
      { label: "Height", value: "22cm" },
      { label: "Base Diameter", value: "8cm" },
      { label: "Pump Material", value: "Stainless Steel" },
      { label: "Finish", value: "Matte Black" }
    ],
    material: "Borosilicate Glass, 304 Stainless Steel",
    dimensions: "22cm H × 8cm Ø",
    package_contents: "1× Glass Dispenser, 1× Pump Assembly, 1× Cleaning Brush, Instruction Card",
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=90",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=90",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=90"
    ],
    featured: true,
    stock_status: "In Stock",
    sort_order: 1
  },
  {
    title: "Luxury Bathroom Gift Set",
    slug: "luxury-bathroom-gift-set",
    price: 2499,
    original_price: 3499,
    category: "Bathroom Essentials",
    badge: "Premium",
    short_description: "A curated ensemble of six precision-crafted bathroom accessories. The complete Easyva bathroom experience.",
    full_description: "The Easyva Luxury Bathroom Gift Set is an orchestrated collection designed to transform any bathroom into a personal sanctuary. Each piece is individually crafted and quality-tested before being nested in our signature matte-black packaging. The set comprises our signature dispenser, a coordinating tumbler, a soap dish, a toothbrush holder, a cotton dispenser jar, and a tray — all unified by our signature Matte Onyx finish.",
    features: [
      "6-piece coordinated bathroom ensemble",
      "Unified Matte Onyx aesthetic finish",
      "Premium gift-ready packaging",
      "Dishwasher-safe components",
      "Rust-proof stainless steel elements",
      "Non-slip base on all pieces",
      "BPA-free materials throughout"
    ],
    specifications: [
      { label: "Pieces", value: "6 items" },
      { label: "Material", value: "Ceramic + 304 SS" },
      { label: "Finish", value: "Matte Onyx" },
      { label: "Dishwasher Safe", value: "Yes" },
      { label: "Weight", value: "1.8kg (set)" }
    ],
    material: "Premium Ceramic, 304 Stainless Steel",
    dimensions: "Varies per piece — see individual specs",
    package_contents: "Soap Dispenser, Tumbler, Soap Dish, Toothbrush Holder, Cotton Jar, Vanity Tray",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=90",
      "https://images.unsplash.com/photo-1552585130-13df05b5b8f3?w=800&q=90",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=90"
    ],
    featured: true,
    stock_status: "In Stock",
    sort_order: 2
  },
  {
    title: "Smart Magnetic Organizer Rack",
    slug: "smart-magnetic-organizer-rack",
    price: 899,
    original_price: 1299,
    category: "Magnetic Storage Systems",
    badge: "New",
    short_description: "Wall-mounted magnetic storage that adheres without drilling. Industrial-grade neodymium magnets for permanent hold.",
    full_description: "The Easyva Smart Magnetic Organizer Rack leverages N52 neodymium magnets — the strongest permanent magnets available — to create a storage solution that requires zero drilling, zero screws, and zero compromise. The aeronautical-grade aluminum rail accommodates up to 15kg of load. The magnetic attachment system means components can be repositioned infinitely without leaving marks.",
    features: [
      "N52 Neodymium magnets — zero drilling required",
      "Aerospace-grade 6061 aluminum rail",
      "15kg maximum load capacity",
      "Infinite repositioning — no permanent marks",
      "Modular: add components as needed",
      "Compatible with all metal surfaces",
      "Corrosion-resistant coating"
    ],
    specifications: [
      { label: "Rail Length", value: "40cm / 60cm / 80cm" },
      { label: "Material", value: "6061 Aluminum + N52 Magnets" },
      { label: "Load Capacity", value: "15kg" },
      { label: "Surface", value: "Brushed Silver / Matte Black" },
      { label: "Installation", value: "No-Drill Magnetic" }
    ],
    material: "6061 Aluminium Alloy, N52 Neodymium",
    dimensions: "60cm L × 5cm H × 3cm D",
    package_contents: "1× Rail, 4× Hook Modules, 2× Basket Modules, Mounting Guide",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=90",
      "https://images.unsplash.com/photo-1600494603989-9650cf6dad51?w=800&q=90",
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=90"
    ],
    featured: true,
    stock_status: "In Stock",
    sort_order: 3
  },
  {
    title: "Modular Kitchen Organizer System",
    slug: "modular-kitchen-organizer-system",
    price: 1599,
    original_price: 2199,
    category: "Kitchen Organizers",
    badge: "Popular",
    short_description: "Stackable spice and utensil organizer with anti-slip bamboo base. Transforms chaotic countertops into curated displays.",
    full_description: "The Easyva Modular Kitchen Organizer System transforms the most chaotic zone of any home — the kitchen counter — into a gallery of intentional organization. The system uses a proprietary snap-lock mechanism enabling infinite vertical and horizontal expansion. The base is crafted from sustainably harvested Moso bamboo, providing both aesthetic warmth and structural integrity.",
    features: [
      "Proprietary snap-lock modular expansion",
      "Sustainably harvested Moso bamboo base",
      "Food-safe BPA-free compartments",
      "360° rotating base option",
      "Dishwasher-safe removable inserts",
      "Anti-slip silicone feet",
      "12 configuration possibilities"
    ],
    specifications: [
      { label: "Modules", value: "3 base + expandable" },
      { label: "Material", value: "Bamboo + Food-Safe ABS" },
      { label: "Base Dimensions", value: "25cm × 25cm" },
      { label: "Height (3-stack)", value: "35cm" },
      { label: "Max Load per shelf", value: "3kg" }
    ],
    material: "Moso Bamboo, Food-Safe ABS Polymer",
    dimensions: "25cm × 25cm × 35cm (3-module stack)",
    package_contents: "3× Organizer Modules, 1× Bamboo Base, Snap-Lock Connectors, Care Guide",
    images: [
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=90",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=90",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=90"
    ],
    featured: true,
    stock_status: "Limited Stock",
    sort_order: 4
  },
  {
    title: "Ceramic Toothbrush Holder Duo",
    slug: "ceramic-toothbrush-holder-duo",
    price: 649,
    original_price: 899,
    category: "Bathroom Essentials",
    badge: "Elegant",
    short_description: "Hand-thrown ceramic toothbrush holder with drainage base. Holds 4 brushes with elegant precision.",
    full_description: "Each Easyva Ceramic Toothbrush Holder is individually thrown on a potter's wheel and fired at 1280°C for maximum density and longevity. The drainage architecture — an elevated inner platform over a sealed reservoir — ensures bristles never stand in water, extending brush life and maintaining hygiene. The matte glaze is food-safe and resists staining.",
    features: [
      "Hand-thrown, individually crafted",
      "1280°C high-fire ceramic — chip resistant",
      "Drainage-architecture inner platform",
      "4-brush capacity",
      "Food-safe matte glaze",
      "Weighted base prevents tipping",
      "No metallic elements — dishwasher safe"
    ],
    specifications: [
      { label: "Capacity", value: "4 toothbrushes" },
      { label: "Material", value: "High-fire Stoneware Ceramic" },
      { label: "Height", value: "11cm" },
      { label: "Diameter", value: "9cm" },
      { label: "Finish", value: "Matte White / Charcoal" }
    ],
    material: "High-fire Stoneware Ceramic",
    dimensions: "11cm H × 9cm Ø",
    package_contents: "2× Toothbrush Holders (set of two), Protective packaging",
    images: [
      "https://images.unsplash.com/photo-1552585130-13df05b5b8f3?w=800&q=90",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=90"
    ],
    featured: false,
    stock_status: "In Stock",
    sort_order: 5
  },
  {
    title: "Wall-Mount Spice Rack System",
    slug: "wall-mount-spice-rack-system",
    price: 1199,
    original_price: 1699,
    category: "Kitchen Organizers",
    badge: "Functional",
    short_description: "Floating wall-mount spice rack with magnetic-close doors and custom jar set. The kitchen's centrepiece.",
    full_description: "The Easyva Wall-Mount Spice Rack System transforms the act of seasoning from rummaging through cluttered shelves to a curated, effortless gesture. The system floats 3cm from the wall via precision-drilled hidden brackets, creating the illusion of a suspended installation. Twelve uniform glass jars with silver magnetic-close lids complete the ensemble.",
    features: [
      "Hidden bracket floating installation",
      "12× matching glass spice jars included",
      "Magnetic-close jar lids — airtight seal",
      "Laser-etched spice label system",
      "Adjustable shelf heights",
      "Food-safe lacquer interior",
      "Compatible with standard wall anchors"
    ],
    specifications: [
      { label: "Capacity", value: "12+ jars" },
      { label: "Material", value: "Walnut Veneer + Tempered Glass" },
      { label: "Dimensions", value: "60cm × 40cm × 8cm" },
      { label: "Installation", value: "Wall-mount (hardware included)" },
      { label: "Max Load", value: "8kg" }
    ],
    material: "Walnut Veneer, Tempered Glass",
    dimensions: "60cm W × 40cm H × 8cm D",
    package_contents: "1× Rack, 12× Glass Jars, Mounting Hardware, Level Guide, Spice Labels",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=90",
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=90"
    ],
    featured: false,
    stock_status: "In Stock",
    sort_order: 6
  }
];