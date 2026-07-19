// @ts-nocheck
import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

function FloatingBlob({ x, y, size, color, delay }) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl opacity-20 pointer-events-none blob"
      style={{ left: x, top: y, width: size, height: size, background: color }}
      animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 8 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  );
}

function AnimatedParticle({ x, y, delay }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-biolume/40"
      style={{ left: x, top: y }}
      animate={{ y: [0, -40, 0], opacity: [0, 1, 0] }}
      transition={{ duration: 3 + delay, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
  );
}

export default function HeroSection() {
  const heroRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const onMove = (event) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      mouseX.set(((event.clientX - rect.left - cx) / cx) * 15);
      mouseY.set(((event.clientY - rect.top - cy) / cy) * 10);
    };
    const el = heroRef.current;
    el?.addEventListener('mousemove', onMove);
    return () => el?.removeEventListener('mousemove', onMove);
  }, [mouseX, mouseY]);

  const particles = Array.from({ length: 20 }, () => ({
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    delay: Math.random() * 4,
  }));

  return (
    <section ref={heroRef} className="hero-mobile-dark relative min-h-screen flex items-center overflow-hidden bg-void">
      <div
        className="hero-mobile-image absolute inset-0 md:hidden bg-center bg-cover"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dk8odjbsk/image/upload/v1784452492/easyva_bg_oig26y.jpg')" }}
      />
      <div className="hero-mobile-overlay absolute inset-0 md:hidden bg-gradient-to-br from-void/90 via-void/75 to-void/90" />

      <FloatingBlob x="10%" y="20%" size={500} color="#7C3AED" delay={0} />
      <FloatingBlob x="60%" y="60%" size={400} color="#A3E635" delay={2} />
      <FloatingBlob x="70%" y="10%" size={300} color="#6D28D9" delay={4} />

      {particles.map((particle, index) => <AnimatedParticle key={index} {...particle} />)}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-1 h-6 bg-biolume rounded-full" />
            <span className="micro-label text-white">Home and kitchen | Home decor | Art and craft | Embroidery kit</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="display-xl font-poppins text-ethereal mb-6"
          >
            Style Your Home.
            <br />
            <span className="gradient-text">Create with Joy.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="body-lg text-ethereal/60 mb-10 max-w-md"
          >
            Shop home essentials, decor accents, craft supplies and embroidery kits curated for everyday living and thoughtful gifting.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/products">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-iris to-iris-light text-ethereal font-semibold glow-purple cursor-pointer"
              >
                <Sparkles size={16} />
                Shop Products
                <ArrowRight size={16} />
              </motion.div>
            </Link>
            <motion.button
              onClick={() => openWhatsApp()}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="hero-mobile-whatsapp flex items-center gap-2 px-6 py-3.5 rounded-xl bg-biolume text-black font-semibold transition-colors"
            >
              <MessageCircle size={16} />
              <span className="hero-mobile-whatsapp-label">Ask on WhatsApp</span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex gap-8 mt-12"
          >
            {[
              { n: '4', l: 'Core Categories' },
              { n: '12+', l: 'Curated Products' },
              { n: 'India', l: 'Delivery Support' },
            ].map((stat) => (
              <div key={stat.l}>
                <p className="font-poppins font-bold text-2xl text-ethereal">{stat.n}</p>
                <p className="text-ethereal/40 text-xs">{stat.l}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative h-[500px] hidden md:block">
          <motion.div
            style={{ rotateY: springX, rotateX: springY }}
            className="relative w-full h-full"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-10 left-10 right-10 glass rounded-3xl overflow-hidden border border-iris/20 shadow-2xl"
            >
              <img
                src="https://res.cloudinary.com/dk8odjbsk/image/upload/v1784452492/easyva_bg_oig26y.jpg"
                alt="Easyva home, decor and craft products"
                className="w-full h-72 object-cover"
              />
              <div className="p-4 flex justify-between items-center">
                <div>
                  <p className="micro-label text-iris-light mb-0.5">Featured Category</p>
                  <p className="font-poppins font-semibold text-ethereal">Embroidery Starter Kits</p>
                </div>
                <span className="font-bold text-biolume text-lg">From Rs. 649</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
              transition={{ duration: 0.7, delay: 0.6, y: { duration: 4, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: 1 } }}
              className="absolute bottom-20 right-0 w-40 glass rounded-2xl p-3 border border-biolume/20"
            >
              <div className="w-8 h-8 rounded-lg bg-biolume/20 flex items-center justify-center mb-2">
                <Sparkles size={14} className="text-biolume" />
              </div>
              <p className="text-xs text-ethereal/60">Popular Searches</p>
              <p className="text-sm font-semibold text-ethereal">Craft Kits</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: [-5, 5, -5] }}
              transition={{ duration: 0.6, delay: 0.8, y: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }}
              className="absolute top-0 right-0 glass rounded-xl px-3 py-1.5 border border-white/10"
            >
              <span className="micro-label gradient-text">New Easyva Collection</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="micro-label text-ethereal/30">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-iris/50 to-transparent" />
      </motion.div>
    </section>
  );
}
