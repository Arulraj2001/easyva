import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowUpRight, Star } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const image = product.images?.[0] || 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80';

  const discount = product.original_price
    ? Math.round(((product.original_price - product.price) / product.original_price) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
      data-cursor="product"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative glass rounded-2xl overflow-hidden border border-white/8 hover:border-iris/40 transition-all duration-500 hover:shadow-2xl hover:shadow-iris/20">
        {/* Shimmer overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10 shimmer overflow-hidden rounded-2xl" />

        {/* Image */}
        <div className="relative overflow-hidden h-60 bg-lustre">
          <motion.img
            src={image}
            alt={product.title}
            className="w-full h-full object-cover"
            animate={{ scale: hovered ? 1.07 : 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {product.badge && (
              <span className="micro-label px-2 py-1 rounded-lg bg-iris text-ethereal">
                {product.badge}
              </span>
            )}
            {discount > 0 && (
              <span className="micro-label px-2 py-1 rounded-lg bg-biolume text-void">
                -{discount}%
              </span>
            )}
          </div>

          {/* Stock indicator */}
          {product.stock_status === 'Limited Stock' && (
            <div className="absolute top-3 right-3">
              <span className="micro-label px-2 py-1 rounded-lg bg-orange-500/80 text-white">
                Low Stock
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <p className="micro-label text-iris-light mb-1">{product.category}</p>
              <h3 className="font-poppins font-semibold text-ethereal text-lg leading-tight group-hover:text-biolume/90 transition-colors duration-300">
                {product.title}
              </h3>
            </div>
          </div>

          <p className="text-ethereal/50 text-sm leading-relaxed mb-4 line-clamp-2">
            {product.short_description}
          </p>

          {/* Price */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-poppins font-bold text-xl text-ethereal">
              ₹{product.price?.toLocaleString('en-IN')}
            </span>
            {product.original_price && (
              <span className="text-ethereal/30 line-through text-sm">
                ₹{product.original_price?.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Link
              to={`/products/${product.slug}`}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-iris/10 border border-iris/20 text-iris-light text-sm font-medium hover:bg-iris/20 hover:border-iris/40 transition-all duration-300"
            >
              View Details
              <ArrowUpRight size={14} />
            </Link>
            <motion.button
              onClick={() => openWhatsApp(product.title)}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-biolume/10 border border-biolume/30 text-biolume text-sm font-medium hover:bg-biolume/20 transition-all duration-300"
            >
              <MessageCircle size={14} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}