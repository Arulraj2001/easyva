import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowUpRight, Star } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
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
      <div className="relative glass rounded-xl overflow-hidden border border-white/8 hover:border-iris/40 transition-all duration-500 hover:shadow-lg hover:shadow-iris/20">
        {/* Shimmer overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10 shimmer overflow-hidden rounded-xl" />

        {/* Image */}
        <div className="relative overflow-hidden h-40 bg-lustre">
          {/* Loading skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-lustre/50 animate-pulse" />
          )}
          <motion.img
            src={image}
            alt={product.title}
            className={`w-full h-full object-cover ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            animate={{ scale: hovered ? 1.07 : 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            onLoad={() => setImageLoaded(true)}
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
        <div className="p-3">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-iris-light mb-0.5">{product.category}</p>
              <h3 className="font-poppins font-semibold text-ethereal text-sm leading-tight group-hover:text-biolume/90 transition-colors duration-300">
                {product.title}
              </h3>
            </div>
          </div>

          <p className="text-ethereal/50 text-xs leading-relaxed mb-2 line-clamp-2">
            {product.short_description}
          </p>

          {/* Price */}
          <div className="flex items-center gap-2 mb-2">
            <span className="font-poppins font-bold text-base text-ethereal">
              ₹{product.price?.toLocaleString('en-IN')}
            </span>
            {product.original_price && (
              <span className="text-ethereal/30 line-through text-xs">
                ₹{product.original_price?.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-1.5">
            <Link
              to={`/products/${product.slug}`}
              className="flex-1 flex items-center justify-center gap-1 py-2 rounded-lg bg-iris/10 border border-iris/20 text-iris-light text-xs font-medium hover:bg-iris/20 hover:border-iris/40 transition-all duration-300"
            >
              View Details
              <ArrowUpRight size={12} />
            </Link>
            <motion.button
              onClick={() => openWhatsApp(product.title)}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-1 px-2.5 py-2 rounded-lg bg-biolume/10 border border-biolume/30 text-biolume text-xs font-medium hover:bg-biolume/20 transition-all duration-300"
            >
              <MessageCircle size={12} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
