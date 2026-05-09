import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  {
    name: 'Bathroom Essentials',
    desc: 'Elevate your daily ritual',
    image: 'https://console.cloudinary.com/app/c-d6bb1782566ab045945214df8e763b/image/home',
    span: 'col-span-2'
  },
  {
    name: 'Kitchen Organizers',
    desc: 'Curated counter culture',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
    span: 'col-span-1'
  },
  {
    name: 'Premium Dispensers',
    desc: 'Form meets function',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    span: 'col-span-1'
  },
  {
    name: 'Magnetic Storage',
    desc: 'Zero-drill organization',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    span: 'col-span-2'
  },
];

export default function Categories() {
  return (
    <section className="section-pad">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-1 h-5 bg-biolume rounded-full" />
            <span className="micro-label text-biolume">By Category</span>
            <div className="w-1 h-5 bg-biolume rounded-full" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="display-lg font-poppins text-ethereal"
          >
            Browse the <span className="gradient-text">Collections</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`${cat.span} group relative rounded-3xl overflow-hidden cursor-pointer`}
              data-cursor="product"
            >
              <Link to={`/products?category=${encodeURIComponent(cat.name)}`}>
                <div className="relative h-56 md:h-72 overflow-hidden">
                  <motion.img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-void/20 to-transparent" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-iris/10" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                    <div>
                      <p className="micro-label text-biolume mb-1">{cat.desc}</p>
                      <h3 className="font-poppins font-bold text-xl text-ethereal">{cat.name}</h3>
                    </div>
                    <motion.div
                      whileHover={{ x: 3, y: -3 }}
                      className="w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center"
                    >
                      <ArrowUpRight size={16} className="text-biolume" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
