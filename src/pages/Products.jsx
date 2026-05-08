import { useEffect, useState, useMemo } from 'react';
import { productsService } from '@/lib/products-service';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import ProductCard from '@/components/ui/ProductCard';
import { SAMPLE_PRODUCTS } from '@/lib/products-data';

const CATEGORIES = ['All', 'Bathroom Essentials', 'Kitchen Organizers', 'Premium Dispensers', 'Magnetic Storage Systems'];

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Read category from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('category');
    if (cat) setActiveCategory(cat);
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
    return products.filter(p => {
      const matchesCat = activeCategory === 'All' || p.category === activeCategory;
      const matchesSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.short_description?.toLowerCase().includes(search.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [products, activeCategory, search]);

  return (
    <PageLayout>
      {/* Hero Banner */}
      <div className="relative min-h-[40vh] flex items-end pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-iris/10 via-void to-void" />
        <div className="absolute top-20 left-10 w-80 h-80 bg-iris/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-60 h-60 bg-biolume/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="micro-label text-biolume">The Collection</span>
            <h1 className="display-xl font-poppins text-ethereal mt-2">
              All <span className="gradient-text">Products</span>
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ethereal/30" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={e => setSearch(e.target.value)}
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
            {CATEGORIES.map(cat => (
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

        {/* Results count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="micro-label text-ethereal/30 mb-8"
        >
          {loading ? 'Loading...' : `${filtered.length} Product${filtered.length !== 1 ? 's' : ''}`}
        </motion.p>

        {/* Grid */}
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <p className="text-6xl mb-4">🔍</p>
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