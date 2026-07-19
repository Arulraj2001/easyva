import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppOrb from './WhatsAppOrb';
import Seo from '@/components/seo/Seo';

export default function PageLayout({ children, productName = null, hideFooter = false, seo = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-void"
    >
      <Seo {...seo} />
      <Navbar />
      <main>{children}</main>
      {!hideFooter && <Footer />}
      <WhatsAppOrb productName={productName} />
    </motion.div>
  );
}