import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className={`mx-4 md:mx-8 rounded-2xl transition-all duration-500 ${
          scrolled
            ? 'glass border border-white/10 shadow-2xl shadow-void/80'
            : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-14">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-iris to-biolume flex items-center justify-center">
                <span className="font-poppins font-black text-void text-sm">E</span>
              </div>
              <span className="font-poppins font-bold text-xl text-ethereal tracking-tight">
                easy<span className="gradient-text">va</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link key={link.path} to={link.path} className="relative group">
                    <span className={`micro-label transition-colors duration-200 ${
                      isActive ? 'text-biolume' : 'text-ethereal/60 hover:text-ethereal'
                    }`}>
                      {link.label}
                    </span>
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-iris to-biolume"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ originX: 0 }}
                    />
                  </Link>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <div className="hidden md:flex items-center gap-3">
              <motion.button
                onClick={() => openWhatsApp()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-biolume text-void font-semibold text-sm transition-all duration-300 hover:bg-biolume-dark glow-lime"
              >
                <MessageCircle size={15} />
                WhatsApp
              </motion.button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-ethereal p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-4 right-4 z-40 glass rounded-2xl border border-white/10 p-6 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`micro-label py-2 border-b border-white/5 transition-colors ${
                    location.pathname === link.path ? 'text-biolume' : 'text-ethereal/70'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => openWhatsApp()}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-biolume text-void font-semibold mt-2"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}