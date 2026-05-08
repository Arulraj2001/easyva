import { motion } from 'framer-motion';
import { Shield, Palette, Zap, Grid3x3, Droplets, Wrench } from 'lucide-react';

const reasons = [
  { icon: Shield, title: 'Premium Quality', desc: 'Laboratory-grade materials tested to ISO standards. Built to outlast years of daily use.', color: 'iris' },
  { icon: Palette, title: 'Elegant Design', desc: 'Each product designed with architectural precision — function expressed as art.', color: 'biolume' },
  { icon: Zap, title: 'Durable Materials', desc: 'Borosilicate glass, aerospace aluminium, and 304 stainless steel. Zero compromise.', color: 'iris' },
  { icon: Grid3x3, title: 'Modern Organization', desc: 'Modular systems that adapt to your space. Infinitely configurable, permanently elegant.', color: 'biolume' },
  { icon: Droplets, title: 'Leak Proof', desc: 'Anti-clog silicone valves and precision-engineered seals. Zero mess, every time.', color: 'iris' },
  { icon: Wrench, title: 'Easy Installation', desc: 'No drilling, no tools, no fuss. Magnetic and adhesive systems install in under 2 minutes.', color: 'biolume' },
];

export default function WhyEasyva() {
  return (
    <section className="section-pad relative bg-lustre/30">
      <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
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
            Why Choose <span className="gradient-text">Easyva</span>
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
                whileHover={{ y: -6, scale: 1.02 }}
                className="gradient-border glass rounded-2xl p-6 group cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
                  isLime
                    ? 'bg-biolume/10 group-hover:bg-biolume/20 group-hover:shadow-[0_0_20px_rgba(163,230,53,0.3)]'
                    : 'bg-iris/10 group-hover:bg-iris/20 group-hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]'
                }`}>
                  <Icon size={20} className={isLime ? 'text-biolume' : 'text-iris-light'} />
                </div>
                <h3 className="font-poppins font-semibold text-ethereal text-lg mb-2 group-hover:text-biolume transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-ethereal/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}