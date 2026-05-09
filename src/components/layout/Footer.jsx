import { Link } from 'react-router-dom';
import { MessageCircle, Instagram, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

export default function Footer() {
  return (
    <footer className="relative bg-void border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-iris/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-iris to-biolume flex items-center justify-center">
                <span className="font-poppins font-black text-void">E</span>
              </div>
              <span className="font-poppins font-bold text-2xl text-ethereal tracking-tight">
                easy<span className="gradient-text">va</span>
              </span>
            </div>
            <p className="text-ethereal/50 body-lg max-w-sm">
              Premium home & lifestyle essentials designed for modern living. Where function meets artistry.
            </p>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => openWhatsApp()}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-biolume/10 border border-biolume/30 text-biolume text-sm font-medium hover:bg-biolume/20 transition-colors"
              >
                <MessageCircle size={15} />
                WhatsApp
              </button>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-iris/10 border border-iris/30 text-iris-light text-sm font-medium hover:bg-iris/20 transition-colors"
              >
                <Instagram size={15} />
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="micro-label text-ethereal/40 mb-5">Navigation</p>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Products', path: '/products' },
                { label: 'About', path: '/about' },
                { label: 'Contact', path: '/contact' },
              ].map(link => (
                <Link key={link.path} to={link.path} className="flex items-center gap-1 text-ethereal/50 hover:text-biolume transition-colors text-sm group">
                  {link.label}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="micro-label text-ethereal/40 mb-5">Contact</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-ethereal/50 text-sm">
                <Phone size={13} className="text-iris-light" />
                +91 9XXXXXXXXX
              </div>
              <div className="flex items-center gap-2 text-ethereal/50 text-sm">
                <Mail size={13} className="text-iris-light" />
                hello@easyva.in
              </div>
              <div className="flex items-center gap-2 text-ethereal/50 text-sm">
                <MapPin size={13} className="text-iris-light" />
                India
              </div>
              <div className="flex items-center gap-2 text-ethereal/50 text-sm">
                <Instagram size={13} className="text-iris-light" />
                @easyva.in
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ethereal/30 text-sm">
            © 2026 Easyva. All rights reserved.
          </p>
          <a
              href="https://arulraj2001.github.io/Portfolio/"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-iris-light hover:text-biolume transition-colors flex items-center gap-1"
            >
              Developed by Arulraj
              <ArrowUpRight size={12} />
            </a>
          </div>
          <div className="flex gap-6">
            <span className="text-ethereal/20 text-xs">Privacy Policy</span>
            <span className="text-ethereal/20 text-xs">Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
