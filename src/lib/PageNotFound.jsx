import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

export default function PageNotFound() {
  return (
    <div className="min-h-screen bg-void flex items-center justify-center px-6">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-poppins font-black text-[120px] leading-none gradient-text">404</p>
          <h1 className="font-poppins font-bold text-2xl text-ethereal mt-4 mb-3">Page Not Found</h1>
          <p className="text-ethereal/40 body-lg mb-10">This space doesn't exist — yet.</p>
          <div className="flex gap-4 justify-center">
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-iris text-ethereal font-semibold glow-purple cursor-pointer"
              >
                <Home size={16} /> Back to Home
              </motion.div>
            </Link>
            <Link to="/products">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-ethereal/70 font-semibold cursor-pointer"
              >
                <ArrowLeft size={16} /> Products
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}