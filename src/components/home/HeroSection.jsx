import { useRef, useEffect, useState } from 'react';
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
    const onMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      mouseX.set(((e.clientX - rect.left - cx) / cx) * 15);
      mouseY.set(((e.clientY - rect.top - cy) / cy) * 10);
    };
    const el = heroRef.current;
    el?.addEventListener('mousemove', onMove);
    return () => el?.removeEventListener('mousemove', onMove);
  }, []);

  const particles = Array.from({ length: 20 }, (_, i) => ({
    x: `${Math.random() * 100}%`, y: `${Math.random() * 100}%`, delay: Math.random() * 4
  }));

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-void">
      {/* Background blobs */}
      <FloatingBlob x="10%" y="20%" size={500} color="#7C3AED" delay={0} />
      <FloatingBlob x="60%" y="60%" size={400} color="#A3E635" delay={2} />
      <FloatingBlob x="70%" y="10%" size={300} color="#6D28D9" delay={4} />

      {/* Particles */}
      {particles.map((p, i) => <AnimatedParticle key={i} {...p} />)}

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
        {/* Left — Headline */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-1 h-6 bg-biolume rounded-full" />
            <span className="micro-label text-biolume">Premium Home Essentials</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="display-xl font-poppins text-ethereal mb-6"
          >
            Refining <br />
            <span className="gradient-text">the Routine.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="body-lg text-ethereal/60 mb-10 max-w-md"
          >
            Premium home essentials designed for modern living. Where architectural function meets sculptural form.
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
                Explore the Collection
                <ArrowRight size={16} />
              </motion.div>
            </Link>
            <motion.button
              onClick={() => openWhatsApp()}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl glass border border-biolume/30 text-biolume font-semibold hover:bg-biolume/10 transition-colors"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </motion.button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex gap-8 mt-12"
          >
            {[
              { n: '500+', l: 'Happy Customers' },
              { n: '15+', l: 'Premium Products' },
              { n: '4.9★', l: 'Average Rating' },
            ].map(s => (
              <div key={s.l}>
                <p className="font-poppins font-bold text-2xl text-ethereal">{s.n}</p>
                <p className="text-ethereal/40 text-xs">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Floating product cards */}
        <div className="relative h-[500px] hidden md:block">
          <motion.div
            style={{ rotateY: springX, rotateX: springY }}
            className="relative w-full h-full"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Main card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-10 left-10 right-10 glass rounded-3xl overflow-hidden border border-iris/20 shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=90"
                alt="Premium Glass Soap Dispenser"
                className="w-full h-72 object-cover"
              />
              <div className="p-4 flex justify-between items-center">
                <div>
                  <p className="micro-label text-iris-light mb-0.5">Premium Dispensers</p>
                  <p className="font-poppins font-semibold text-ethereal">Glass Soap Dispenser</p>
                </div>
                <span className="font-bold text-biolume text-lg">₹1,299</span>
              </div>
            </motion.div>

            {/* Float card small */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
              transition={{ duration: 0.7, delay: 0.6, y: { duration: 4, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: 1 } }}
              className="absolute bottom-20 right-0 w-40 glass rounded-2xl p-3 border border-biolume/20"
            >
              <div className="w-8 h-8 rounded-lg bg-biolume/20 flex items-center justify-center mb-2">
                <Sparkles size={14} className="text-biolume" />
              </div>
              <p className="text-xs text-ethereal/60">Premium Quality</p>
              <p className="text-sm font-semibold text-ethereal">Certified</p>
            </motion.div>

            {/* Floating category pill */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: [-5, 5, -5] }}
              transition={{ duration: 0.6, delay: 0.8, y: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }}
              className="absolute top-0 right-0 glass rounded-xl px-3 py-1.5 border border-white/10"
            >
              <span className="micro-label gradient-text">New Collection</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
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