import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Star, Layers, Zap } from 'lucide-react';

const stats = [
  { icon: Users, value: 500, suffix: '+', label: 'Happy Customers', color: 'text-iris-light' },
  { icon: Star, value: 100, suffix: '%', label: 'Premium Quality', color: 'text-biolume' },
  { icon: Layers, value: 15, suffix: '+', label: 'Modern Designs', color: 'text-iris-light' },
  { icon: Zap, value: 24, suffix: '/7', label: 'Fast Support', color: 'text-biolume' },
];

function CountUp({ target, suffix, started }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const step = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(interval); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, target]);

  return <>{count}{suffix}</>;
}

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="void-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-iris/5 via-transparent to-biolume/5" />
      <div className="absolute inset-0 border-y border-white/5" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center">
                    <Icon size={22} className={stat.color} />
                  </div>
                </div>
                <p className={`font-poppins font-black text-4xl md:text-5xl mb-2 ${stat.color}`}>
                  <CountUp target={stat.value} suffix={stat.suffix} started={inView} />
                </p>
                <p className="micro-label text-ethereal/40">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}