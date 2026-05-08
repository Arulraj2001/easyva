import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppOrb from './WhatsAppOrb';

export default function PageLayout({ children, productName = null, hideFooter = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-void"
    >
      <Navbar />
      <main>{children}</main>
      {!hideFooter && <Footer />}
      <WhatsAppOrb productName={productName} />
    </motion.div>
  );
}