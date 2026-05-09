import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  X,
} from 'lucide-react';

import { openWhatsApp } from '@/lib/whatsapp';

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <>
      <footer className="relative bg-void border-t border-white/5 overflow-hidden">
        {/* Background glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-iris/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-iris to-biolume flex items-center justify-center">
                  <span className="font-poppins font-black text-void">
                    E
                  </span>
                </div>

                <span className="font-poppins font-bold text-2xl text-ethereal tracking-tight">
                  easy
                  <span className="gradient-text">va</span>
                </span>
              </div>

              <p className="text-ethereal/50 body-lg max-w-sm">
                Premium home & lifestyle essentials designed
                for modern living. Where function meets
                artistry.
              </p>

              <div className="flex gap-3 mt-6">
                {/* WhatsApp */}
                <button
                  onClick={() => openWhatsApp()}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-biolume/10 border border-biolume/30 text-biolume text-sm font-medium hover:bg-biolume/20 transition-colors"
                >
                  <MessageCircle size={15} />
                  WhatsApp
                </button>

                {/* Instagram */}
                  <a
                    href="https://instagram.com/easyva.3011"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-iris/10 border border-iris/30 text-iris-light text-sm font-medium hover:bg-iris/20 transition-colors"
                  >
                    <Instagram size={15} />
                    Insta
                  </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <p className="micro-label text-ethereal/40 mb-5">
                Navigation
              </p>

              <div className="flex flex-col gap-3">
                {[
                  { label: 'Home', path: '/' },
                  { label: 'Products', path: '/products' },
                  { label: 'About', path: '/about' },
                  { label: 'Contact', path: '/contact' },
                ].map((link) => (
                  <a
                    key={link.path}
                    href={link.path}
                    className="flex items-center gap-1 text-ethereal/50 hover:text-biolume transition-colors text-sm group"
                  >
                    {link.label}

                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="micro-label text-ethereal/40 mb-5">
                Contact
              </p>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-ethereal/50 text-sm">
                  <Phone
                    size={13}
                    className="text-iris-light"
                  />
                  +91 9342879701
                </div>

                <div className="flex items-center gap-2 text-ethereal/50 text-sm">
                  <Mail
                    size={13}
                    className="text-iris-light"
                  />
                  muruganboutiqueandcosmetics@gmail.com
                </div>

                <div className="flex items-center gap-2 text-ethereal/50 text-sm">
                  <MapPin
                    size={13}
                    className="text-iris-light"
                  />
                  India
                </div>

                <div className="flex items-center gap-2 text-ethereal/50 text-sm">
                  <Instagram
                    size={13}
                    className="text-iris-light"
                  />
                  @easyva.3011
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left */}
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <p className="text-ethereal/30 text-sm">
                © 2026 Easyva. All rights reserved.
              </p>

              <a
                href="https://arulraj2001.github.io/Portfolio/"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-iris-light hover:text-biolume transition-colors flex items-center gap-1"
              >
                Developed by Arulraj • Contact me for websites
                <ArrowUpRight size={12} />
              </a>
            </div>

            {/* Policy Links */}
            <div className="flex gap-6">
              <button
                onClick={() =>
                  setActiveModal('privacy')
                }
                className="text-ethereal/20 hover:text-biolume transition-colors text-xs"
              >
                Privacy Policy
              </button>

              <button
                onClick={() =>
                  setActiveModal('terms')
                }
                className="text-ethereal/20 hover:text-biolume transition-colors text-xs"
              >
                Terms of Use
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 40,
              }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl glass rounded-3xl border border-white/10 p-8 max-h-[85vh] overflow-y-auto"
            >
              {/* Close */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 text-ethereal/40 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              {/* Privacy Policy */}
              {activeModal === 'privacy' && (
                <div>
                  <h2 className="text-3xl font-bold text-ethereal mb-6">
                    Privacy Policy
                  </h2>

                  <div className="space-y-5 text-sm text-ethereal/60 leading-7">
                    <p>
                      Easyva values your privacy and is
                      committed to protecting your personal
                      information.
                    </p>

                    <p>
                      We only collect information required
                      for order processing, customer support,
                      and improving your shopping experience.
                    </p>

                    <p>
                      Your contact details are never sold or
                      shared with third parties without your
                      consent.
                    </p>

                    <p>
                      Payment information is processed
                      securely through trusted payment
                      providers.
                    </p>

                    <p>
                      By using our website, you agree to our
                      privacy practices and policies.
                    </p>
                  </div>
                </div>
              )}

              {/* Terms */}
              {activeModal === 'terms' && (
                <div>
                  <h2 className="text-3xl font-bold text-ethereal mb-6">
                    Terms of Use
                  </h2>

                  <div className="space-y-5 text-sm text-ethereal/60 leading-7">
                    <p>
                      By accessing Easyva, you agree to use
                      this website lawfully and responsibly.
                    </p>

                    <p>
                      Product images, branding, and content
                      are protected and may not be copied
                      without permission.
                    </p>

                    <p>
                      We reserve the right to update product
                      pricing, availability, and policies at
                      any time.
                    </p>

                    <p>
                      Customers are responsible for providing
                      accurate delivery and contact details.
                    </p>

                    <p>
                      Continued use of the website indicates
                      acceptance of these terms.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
