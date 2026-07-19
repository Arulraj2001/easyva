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
  },
  {
    title: "Matte Black Soap Dish",
    slug: "matte-black-soap-dish",
    price: 449,
    original_price: 649,
    category: "Bathroom Essentials",
    badge: "Essential",
    short_description: "Sculpted ceramic soap dish with self-draining ridges. Keeps soap dry and counter clean.",
    full_description: "The Easyva Matte Black Soap Dish is a study in purposeful minimalism. Each dish is cast from high-density ceramic and finished with a matte glaze that resists water spots and soap scum. The self-draining ridge system elevates your soap above standing water, extending its life while keeping your counter pristine. The weighted base and non-slip silicone ring ensure it stays exactly where you place it.",
    features: [
      "High-density ceramic with matte glaze finish",
      "Self-draining ridge architecture",
      "Non-slip silicone base ring",
      "Water-spot resistant surface",
      "Weighs 340g — substantial, stable",
      "Easy to clean — rinse and wipe"
    ],
    specifications: [
      { label: "Material", value: "High-Density Ceramic" },
      { label: "Dimensions", value: "12cm × 8cm × 2.5cm" },
      { label: "Weight", value: "340g" },
      { label: "Finish", value: "Matte Black" },
      { label: "Dishwasher Safe", value: "Yes" }
    ],
    material: "High-Density Ceramic, Silicone",
    dimensions: "12cm L × 8cm W × 2.5cm H",
    package_contents: "1× Soap Dish, 1× Silicone Base Ring",
    images: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=90",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=90"
    ],
    featured: true,
    stock_status: "In Stock",
    sort_order: 7
  },
  {
    title: "Bamboo Vanity Organizer Tray",
    slug: "bamboo-vanity-organizer-tray",
    price: 799,
    original_price: 1099,
    category: "Bathroom Essentials",
    badge: "Eco",
    short_description: "Hand-finished bamboo tray with divided compartments. Organizes daily essentials with natural elegance.",
    full_description: "The Easyva Bamboo Vanity Organizer Tray brings the warmth of nature to your daily routine. Crafted from sustainably harvested Moso bamboo — one of the fastest-growing renewable resources on Earth — each tray is hand-sanded and finished with food-safe natural oil. The divided compartments keep your watch, rings, cologne, and daily essentials organized without clutter. The raised edges prevent items from rolling off.",
    features: [
      "Sustainably harvested Moso bamboo",
      "Hand-sanded and natural oil finish",
      "Three divided compartments",
      "Raised edge design — prevents rolling",
      "Water-resistant surface",
      "Anti-scratch felt feet",
      "Zero plastic packaging"
    ],
    specifications: [
      { label: "Material", value: "Moso Bamboo" },
      { label: "Dimensions", value: "30cm × 15cm × 4cm" },
      { label: "Weight", value: "420g" },
      { label: "Finish", value: "Natural Bamboo" },
      { label: "Compartments", value: "3" }
    ],
    material: "Moso Bamboo, Felt",
    dimensions: "30cm L × 15cm W × 4cm H",
    package_contents: "1× Vanity Tray, Care Card",
    images: [
      "https://images.unsplash.com/photo-1600494603989-9650cf6dad51?w=800&q=90",
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=90"
    ],
    featured: true,
    stock_status: "In Stock",
    sort_order: 8
  },
  {
    title: "Premium Lotion Pump Bottle",
    slug: "premium-lotion-pump-bottle",
    price: 999,
    original_price: 1399,
    category: "Premium Dispensers",
    badge: "New",
    short_description: "UV-protected amber glass bottle with precision lotion pump. Preserves and dispenses with elegance.",
    full_description: "The Easyva Premium Lotion Pump Bottle is engineered for those who demand both form and function from every object in their home. The amber glass body filters UV light to preserve the integrity of your lotions and serums. The pump mechanism delivers a precise 2ml dose with each press — no more, no less. The wide 4cm opening makes refilling effortless, while the matte-black collar adds a touch of understated luxury.",
    features: [
      "UV-protected amber borosilicate glass",
      "Precision 2ml metered pump",
      "Wide 4cm opening for easy refill",
      "Matte-black anodized aluminum collar",
      "Anti-drip silicone valve",
      "Compatible with lotions, serums, hand soap"
    ],
    specifications: [
      { label: "Capacity", value: "350ml" },
      { label: "Material", value: "Amber Borosilicate Glass + Aluminum" },
      { label: "Height", value: "18cm" },
      { label: "Base Diameter", value: "7cm" },
      { label: "Pump Material", value: "Anodized Aluminum" }
    ],
    material: "Amber Borosilicate Glass, Anodized Aluminum",
    dimensions: "18cm H × 7cm Ø",
    package_contents: "1× Lotion Bottle, 1× Pump Assembly, Instruction Card",
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=90",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=90"
    ],
    featured: true,
    stock_status: "In Stock",
    sort_order: 9
  },
  {
    title: "Adhesive Corner Shelf Set",
    slug: "adhesive-corner-shelf-set",
    price: 699,
    original_price: 999,
    category: "Magnetic Storage Systems",
    badge: "Smart",
    short_description: "No-drill corner shelves with industrial adhesive. Holds up to 5kg each — installs in 30 seconds.",
    full_description: "The Easyva Adhesive Corner Shelf Set solves the eternal problem of unused corner space. Each shelf uses 3M VHB industrial-grade adhesive — the same technology used to bond glass panels on skyscrapers. No drilling, no screws, no damage. The tempered glass shelves are edge-polished for safety and the aluminum brackets feature a brushed finish that resists fingerprints. Each shelf holds up to 5kg when properly installed.",
    features: [
      "3M VHB industrial adhesive — zero drilling",
      "Tempered glass with polished edges",
      "Brushed aluminum brackets",
      "5kg load capacity per shelf",
      "Fingerprint-resistant coating",
      "Removable with heat gun — no residue",
      "Set of 2 shelves"
    ],
    specifications: [
      { label: "Material", value: "Tempered Glass + Aluminum" },
      { label: "Shelf Size", value: "25cm × 25cm" },
      { label: "Load Capacity", value: "5kg per shelf" },
      { label: "Installation", value: "Adhesive — No Drill" },
      { label: "Includes", value: "2 Shelves + Adhesive Pads" }
    ],
    material: "Tempered Glass, 6061 Aluminum, 3M VHB Adhesive",
    dimensions: "25cm × 25cm × 0.5cm (each shelf)",
    package_contents: "2× Glass Shelves, 2× Aluminum Brackets, 4× 3M Adhesive Pads, Alcohol Wipes, Installation Guide",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=90",
      "https://images.unsplash.com/photo-1600494603989-9650cf6dad51?w=800&q=90"
    ],
    featured: false,
    stock_status: "In Stock",
    sort_order: 10
  },
  {
    title: "Stainless Steel Kitchen Caddy",
    slug: "stainless-steel-kitchen-caddy",
    price: 1299,
    original_price: 1799,
    category: "Kitchen Organizers",
    badge: "Premium",
    short_description: "304 stainless steel countertop caddy with removable liners. The ultimate utensil and tool organizer.",
    full_description: "The Easyva Stainless Steel Kitchen Caddy is built from 304-grade stainless steel — the same alloy used in professional kitchens. The brushed finish hides fingerprints and water spots, while the removable bamboo liners make cleaning effortless. Five compartments of varying sizes accommodate everything from spatulas to chopsticks. The weighted base and non-slip silicone feet ensure it stays planted during use.",
    features: [
      "304 stainless steel — commercial grade",
      "Brushed finish — hides smudges",
      "5 compartments for varied tools",
      "Removable bamboo liners for easy cleaning",
      "Weighted anti-slip base",
      "Dishwasher-safe steel body",
      "Holds up to 15 utensils"
    ],
    specifications: [
      { label: "Material", value: "304 Stainless Steel + Bamboo" },
      { label: "Dimensions", value: "20cm × 12cm × 15cm" },
      { label: "Weight", value: "680g" },
      { label: "Compartments", value: "5" },
      { label: "Finish", value: "Brushed Steel" }
    ],
    material: "304 Stainless Steel, Moso Bamboo",
    dimensions: "20cm L × 12cm W × 15cm H",
    package_contents: "1× Steel Caddy, 5× Bamboo Liners, Care Guide",
    images: [
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=90",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=90"
    ],
    featured: true,
    stock_status: "Limited Stock",
    sort_order: 11
  },
  {
    title: "Ceramic Diffuser Set",
    slug: "ceramic-diffuser-set",
    price: 849,
    original_price: 1199,
    category: "Bathroom Essentials",
    badge: "Elegant",
    short_description: "Hand-thrown ceramic reed diffuser with premium fragrance oil. Continuous scent for 8+ weeks.",
    full_description: "The Easyva Ceramic Diffuser Set combines artisanal craftsmanship with premium aromatherapy. The vessel is hand-thrown on a potter's wheel and fired at 1280°C, resulting in a unique piece with subtle variations in glaze that make each one one-of-a-kind. The included premium fragrance oil — a blend of white tea, bamboo, and cedar — diffuses continuously for 8-10 weeks through natural rattan reeds. No flame, no electricity, just pure ambient elegance.",
    features: [
      "Hand-thrown ceramic — each piece unique",
      "1280°C high-fire stoneware",
      "Premium fragrance oil (50ml included)",
      "Natural rattan reed diffusion system",
      "8-10 weeks continuous fragrance",
      "Refillable — buy oil separately",
      "Gift-ready packaging"
    ],
    specifications: [
      { label: "Material", value: "High-fire Stoneware Ceramic" },
      { label: "Oil Capacity", value: "50ml" },
      { label: "Duration", value: "8-10 weeks" },
      { label: "Height", value: "14cm" },
      { label: "Diameter", value: "8cm" },
      { label: "Fragrance Notes", value: "White Tea, Bamboo, Cedar" }
    ],
    material: "High-fire Stoneware Ceramic, Rattan Reeds",
    dimensions: "14cm H × 8cm Ø",
    package_contents: "1× Ceramic Vessel, 1× 50ml Fragrance Oil, 6× Rattan Reeds, Care Card",
    images: [
      "https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?w=800&q=90",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=90"
    ],
    featured: false,
    stock_status: "In Stock",
    sort_order: 12
  }
];
export const CATEGORIES = ['All', 'Bathroom Essentials', 'Kitchen Organizers', 'Premium Dispensers', 'Magnetic Storage Systems'];
