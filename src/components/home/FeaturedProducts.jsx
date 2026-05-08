import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';

export default function FeaturedProducts({ products }) {
  const featured = products.filter(p => p.featured).slice(0, 4);

  if (!featured.length) return null;

  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-iris/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-1 h-5 bg-biolume rounded-full" />
              <span className="micro-label text-biolume">Curated Collection</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="display-lg font-poppins text-ethereal"
            >
              Featured <span className="gradient-text">Products</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/products"
              className="flex items-center gap-2 text-iris-light hover:text-biolume transition-colors micro-label"
            >
              View All Products
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, i) => (
            <ProductCard key={product.id || product.slug} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}