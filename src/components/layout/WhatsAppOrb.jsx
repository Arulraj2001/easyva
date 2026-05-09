import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

export default function WhatsAppOrb({ productName = null }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="glass rounded-2xl p-5 border border-biolume/30 shadow-xl max-w-xs"
          >
            <p className="text-ethereal/70 text-sm mb-1 micro-label">Easyva Direct Line</p>
            <p className="text-ethereal body-lg mb-4">
              {productName
                ? `Interested in the ${productName}?`
                : 'Questions about our products?'}
            </p>
            <motion.button
              onClick={() => { openWhatsApp(productName); setExpanded(false); }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-biolume text-void font-bold text-sm"
            >
              <MessageCircle size={16} />
              Open WhatsApp Chat
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setExpanded(!expanded)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 rounded-full bg-biolume text-void flex items-center justify-center orb-pulse shadow-lg"
        style={{ boxShadow: '0 0 30px rgba(163, 230, 53, 0.5)' }}
      >
        <AnimatePresence mode="wait">
          {expanded ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X size={20} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle size={20} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}