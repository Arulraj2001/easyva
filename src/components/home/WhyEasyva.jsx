import { motion } from 'framer-motion';
import { Shield, Palette, Brush, Grid3x3, Leaf, MessageCircle } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Practical Home and Kitchen Picks',
    desc: 'Useful organizers, trays and dispensers selected for daily Indian kitchens and compact home storage.',
    color: 'iris',
  },
  {
    icon: Palette,
    title: 'Decor That Feels Personal',
    desc: 'Vases, wall hangings and trays chosen to add warmth, texture and easy styling to everyday rooms.',
    color: 'biolume',
  },
  {
    icon: Brush,
    title: 'Creative Craft Supplies',
    desc: 'Art and craft products for school projects, handmade gifts, DIY decor and weekend creative time.',
    color: 'iris',
  },
  {
    icon: Grid3x3,
    title: 'Complete Embroidery Kits',
    desc: 'Beginner-friendly kits with hoops, printed fabric, threads, needles and clear stitching guides.',
    color: 'biolume',
  },
  {
    icon: Leaf,
    title: 'Easy-Care Materials',
    desc: 'Products are selected for durability, simple maintenance and long-term usefulness at home.',
    color: 'iris',
  },
  {
    icon: MessageCircle,
    title: 'Fast WhatsApp Support',
    desc: 'Get help with product details, order questions, gifting ideas and bulk inquiries before you buy.',
    color: 'biolume',
  },
];

export default function WhyEasyva() {
  return (
    <section className="section-pad relative bg-lustre/30">
      <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-1 h-5 bg-iris rounded-full" />
            <span className="micro-label text-iris-light">The Easyva Standard</span>
            <div className="w-1 h-5 bg-iris rounded-full" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="display-lg font-poppins text-ethereal"
          >
            Why Shop <span className="gradient-text">With Easyva</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, i) => {
            const Icon = item.icon;
            const isLime = item.color === 'biolume';
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="gradient-border glass rounded-xl p-4 group cursor-default"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${
                  isLime
                    ? 'bg-biolume/10 group-hover:bg-biolume/20 group-hover:shadow-[0_0_20px_rgba(163,230,53,0.3)]'
                    : 'bg-iris/10 group-hover:bg-iris/20 group-hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]'
                }`}>
                  <Icon size={18} className={isLime ? 'text-biolume' : 'text-iris-light'} />
                </div>
                <h3 className="font-poppins font-semibold text-ethereal text-sm mb-1.5 group-hover:text-biolume transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-ethereal/50 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
