import { useEffect, useState, useMemo } from 'react';
import { productsService } from '@/lib/products-service';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import ProductCard from '@/components/ui/ProductCard';
import { SAMPLE_PRODUCTS, CATEGORIES } from '@/lib/products-data';

const categorySeo = {
  All: {
    title: 'Shop Home and Kitchen, Home Decor, Art and Craft Products | Easyva',
    description:
      'Shop Easyva products for Indian homes and creative makers: home and kitchen organizers, home decor accents, art and craft supplies, and embroidery kits.',
    keywords: 'home and kitchen products, home decor, art and craft supplies, embroidery kit, Easyva India',
  },
  'Home and kitchen': {
    title: 'Home and Kitchen Products | Kitchen Organizers and Essentials | Easyva',
    description:
      'Discover practical home and kitchen products from Easyva, including kitchen organizers, storage racks, cutlery trays, oil dispensers and everyday essentials.',
    keywords: 'home and kitchen products, kitchen organizer, kitchen storage rack, cutlery tray, oil dispenser, Easyva India',
  },
  'Home decor': {
    title: 'Home Decor Online | Vases, Wall Hangings and Decorative Trays | Easyva',
    description:
      'Explore Easyva home decor for living rooms, bedrooms and cozy corners: ceramic vases, macrame wall hangings, decorative trays and stylish accents.',
    keywords: 'home decor, ceramic vase, wall hanging decor, decorative tray, living room decor, Easyva',
  },
  'Art and craft': {
    title: 'Art and Craft Supplies | DIY Craft Kits and Paint Sets | Easyva',
    description:
      'Shop art and craft supplies for beginners, students and hobby makers, including acrylic paints, resin art kits, brush pens and DIY craft essentials.',
    keywords: 'art and craft supplies, DIY craft kit, acrylic paint set, resin art kit, brush pens, Easyva',
  },
  'Embroidery kit': {
    title: 'Embroidery Kit Online | Beginner Embroidery Starter Kits | Easyva',
    description:
      'Buy complete embroidery kits with hoops, printed fabric, threads, needles and guides. Easyva embroidery kits are ideal for beginners, gifting and mindful craft time.',
    keywords: 'embroidery kit, beginner embroidery kit, embroidery starter kit, hoop embroidery kit, craft kit, Easyva',
  },
};

const heroTextMap = {
  All: {
    title: 'All Products',
    subtitle: 'Shop home and kitchen essentials, home decor, art and craft supplies, and complete embroidery kits.',
    intro:
      "Browse Easyva's complete collection for home improvement and creative living. Find space-saving home and kitchen products, decorative accents, beginner-friendly art and craft supplies, and embroidery kits that make handmade projects easy to start.",
  },
  'Home and kitchen': {
    title: 'Home and Kitchen',
    subtitle: 'Useful kitchen organizers, storage solutions and everyday home essentials for cleaner daily routines.',
    intro:
      'Our home and kitchen collection focuses on practical products that reduce clutter and improve everyday routines. Shop kitchen racks, drawer organizers, oil dispensers and useful home essentials made for compact Indian kitchens and busy family homes.',
  },
  'Home decor': {
    title: 'Home Decor',
    subtitle: 'Decorative vases, wall accents and trays that make rooms feel warm, styled and lived in.',
    intro:
      'Easyva home decor is selected to add warmth, texture and personality without overwhelming your space. Explore ceramic vases, wall hangings, decorative trays and accents for living rooms, bedrooms, entryways and gifting.',
  },
  'Art and craft': {
    title: 'Art and Craft',
    subtitle: 'Paints, craft kits, brush pens and creative supplies for beginners, students and hobby makers.',
    intro:
      'Find art and craft supplies for school work, DIY decor, handmade gifts and weekend projects. From acrylic paints to resin art kits and brush pens, these creative tools are simple to use and easy to gift.',
  },
  'Embroidery kit': {
    title: 'Embroidery Kits',
    subtitle: 'Complete embroidery starter kits with fabric, hoops, threads, needles and easy instructions.',
    intro:
      'Explore complete embroidery kits designed for beginners and hobby stitchers. Each kit includes core materials such as fabric, hoop, threads, needles and instructions so you can start a mindful craft project with confidence.',
  },
};

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('category');
    if (cat && CATEGORIES.includes(cat)) setActiveCategory(cat);
  }, []);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await productsService.getAll(100);
        setProducts(data && data.length > 0 ? data : SAMPLE_PRODUCTS);
      } catch (error) {
        console.error('Failed to load products:', error);
        setProducts(SAMPLE_PRODUCTS);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const query = search.toLowerCase();
      const matchesCat = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch =
        !query ||
        product.title.toLowerCase().includes(query) ||
        product.short_description?.toLowerCase().includes(query) ||
        product.category?.toLowerCase().includes(query);

      return matchesCat && matchesSearch;
    });
  }, [products, activeCategory, search]);

  const seoForPage = categorySeo[activeCategory] || categorySeo.All;
  const heroContent = heroTextMap[activeCategory] || heroTextMap.All;

  return (
    <PageLayout
      seo={{
        title: seoForPage.title,
        description: seoForPage.description,
        keywords: seoForPage.keywords,
        canonicalPath: '/products',
      }}
    >
      <div className="relative min-h-[40vh] flex items-end pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-iris/10 via-void to-void" />
        <div className="absolute top-20 left-10 w-80 h-80 bg-iris/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-60 h-60 bg-biolume/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="micro-label text-biolume">Easyva Collection</span>
            <h1 className="display-xl font-poppins text-ethereal mt-2">
              {heroContent.title} {heroContent.title !== 'All Products' && <span className="gradient-text">Collection</span>}
            </h1>
            <p className="text-ethereal/60 mt-3 max-w-2xl">{heroContent.subtitle}</p>
          </motion.div>
          <p className="text-ethereal/60 max-w-4xl mt-6">{heroContent.intro}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ethereal/30" />
            <input
              type="text"
              placeholder="Search home, decor, craft and embroidery products..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full pl-11 pr-4 py-3.5 glass rounded-xl border border-white/10 text-ethereal placeholder:text-ethereal/30 focus:outline-none focus:border-iris/50 transition-colors bg-transparent text-sm"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-ethereal/30 hover:text-ethereal">
                <X size={14} />
              </button>
            )}
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <SlidersHorizontal size={14} className="text-ethereal/30 flex-shrink-0" />
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileTap={{ scale: 0.95 }}
                className={`flex-shrink-0 px-4 py-2.5 rounded-xl micro-label transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-iris text-ethereal glow-purple'
                    : 'glass border border-white/10 text-ethereal/50 hover:border-iris/30 hover:text-ethereal'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="micro-label text-ethereal/30 mb-8">
          {loading ? 'Loading...' : `${filtered.length} Product${filtered.length !== 1 ? 's' : ''}`}
        </motion.p>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="glass rounded-2xl h-80 animate-pulse" />
            ))}
          </div>
        ) : (
          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id || product.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <ProductCard product={product} index={i} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {!loading && filtered.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24">
            <p className="font-poppins text-xl text-ethereal/50">No products found</p>
            <button onClick={() => { setSearch(''); setActiveCategory('All'); }} className="mt-4 text-iris-light micro-label hover:text-biolume transition-colors">
              Clear filters
            </button>
          </motion.div>
        )}
      </div>
    </PageLayout>
  );
}
