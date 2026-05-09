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
          className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center whatsapp-banner"
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
              className="w-20 h-20 rounded-full bg-biolume/10 border border-biolume/30 flex items-center justify-center mx-auto mb-6"
            >
              <MessageCircle size={32} className="text-biolume" />
            </motion.div>

            <p className="micro-label text-biolume mb-4">Direct Line Open</p>
            <h2 className="display-lg font-poppins text-ethereal mb-4">
              Need Product Details<br />
              <span className="gradient-text">or Bulk Orders?</span>
            </h2>
            <p className="body-lg text-ethereal/50 mb-10 max-w-md mx-auto">
              Get instant responses, exclusive pricing, and personalized recommendations directly from the Easyva team.
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