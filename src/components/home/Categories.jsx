import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  {
    name: 'Home and kitchen',
    desc: 'Kitchen organizers, storage racks, oil dispensers and practical essentials for cleaner counters.',
    image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1200&q=80',
    span: 'col-span-2',
  },
  {
    name: 'Home decor',
    desc: 'Ceramic vases, wall hangings, trays and decorative accents for warm, styled rooms.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1200&q=80',
    span: 'col-span-1',
  },
  {
    name: 'Art and craft',
    desc: 'Acrylic paints, resin kits, brush pens and DIY craft supplies for creative projects.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&q=80',
    span: 'col-span-1',
  },
  {
    name: 'Embroidery kit',
    desc: 'Complete embroidery kits with hoops, printed fabric, threads, needles and guides.',
    image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1200&q=80',
    span: 'col-span-2',
  },
];

export default function Categories() {
  return (
    <section className="section-pad">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-1 h-5 bg-biolume rounded-full" />
            <span className="micro-label text-biolume">Shop By Category</span>
            <div className="w-1 h-5 bg-biolume rounded-full" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="display-lg font-poppins text-ethereal"
          >
            Find the Right <span className="gradient-text">Easyva Product</span>
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
                <div className="relative h-44 md:h-56 overflow-hidden">
                  <motion.img
                    src={cat.image}
                    alt={`${cat.name} products at Easyva`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-void/20 to-transparent" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-iris/10" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-biolume mb-0.5">{cat.desc}</p>
                      <h3 className="font-poppins font-bold text-base text-ethereal">{cat.name}</h3>
                    </div>
                    <motion.div
                      whileHover={{ x: 3, y: -3 }}
                      className="w-8 h-8 rounded-full glass border border-white/20 flex items-center justify-center"
                    >
                      <ArrowUpRight size={14} className="text-biolume" />
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
