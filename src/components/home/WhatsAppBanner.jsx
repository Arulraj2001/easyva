import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

export default function WhatsAppBanner() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden p-8 md:p-10 text-center whatsapp-banner"
        >
          {/* Glowing orbs */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-iris/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-biolume/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0 rounded-3xl border border-iris/20" />

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5 rounded-3xl"
            style={{ backgroundImage: 'radial-gradient(circle, #7C3AED 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

          <div className="relative">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-14 h-14 rounded-full bg-biolume/10 border border-biolume/30 flex items-center justify-center mx-auto mb-4"
            >
              <MessageCircle size={24} className="text-biolume" />
            </motion.div>

            <p className="micro-label text-biolume mb-3">Questions or Bulk Orders</p>
            <h2 className="display-lg font-poppins text-ethereal mb-4">
              Quick Answers for<br />
              <span className="gradient-text">Home, Decor & Craft Needs</span>
            </h2>
            <p className="body-lg text-ethereal/50 mb-6 max-w-md mx-auto">
              Chat with us on WhatsApp for product details, assembly help, bulk pricing and curated recommendations for your space or project.
            </p>

            <motion.button
              onClick={() => openWhatsApp()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-biolume text-void font-bold text-base glow-lime"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
