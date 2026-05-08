import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { productsService } from '@/lib/products-service';
import { MessageCircle, ArrowLeft, CheckCircle2, Package, Ruler, Layers, ChevronRight } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import ProductCard from '@/components/ui/ProductCard';
import { openWhatsApp } from '@/lib/whatsapp';
import { SAMPLE_PRODUCTS } from '@/lib/products-data';

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [activeImg, setActiveImg] = useState(0);
  const [loading, setLoading] = useState(true);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const all = await productsService.getAll(100);
        const source = all && all.length > 0 ? all : SAMPLE_PRODUCTS;
        setAllProducts(source);
        const found = source.find(p => p.slug === slug);
        setProduct(found || null);
      } catch (error) {
        console.error('Failed to load products:', error);
        setAllProducts(SAMPLE_PRODUCTS);
        setProduct(SAMPLE_PRODUCTS.find(p => p.slug === slug) || null);
      }
      setLoading(false);
    };
    load();
    setActiveImg(0);
  }, [slug]);

  if (loading) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center pt-32">
          <div className="w-10 h-10 rounded-full border-2 border-iris border-t-transparent animate-spin" />
        </div>
      </PageLayout>
    );
  }

  if (!product) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center pt-32 flex-col gap-6">
          <p className="text-6xl">404</p>
          <p className="text-ethereal/50 font-poppins text-xl">Product not found</p>
          <Link to="/products" className="flex items-center gap-2 text-iris-light hover:text-biolume transition-colors">
            <ArrowLeft size={16} /> Back to Products
          </Link>
        </div>
      </PageLayout>
    );
  }

  const images = product.images?.length ? product.images : ['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=90'];
  const similar = allProducts.filter(p => p.category === product.category && p.slug !== product.slug).slice(0, 3);

  return (
    <PageLayout productName={product.title}>
      {/* Breadcrumb */}
      <div className="pt-28 pb-6 max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 text-ethereal/30 text-sm">
          <Link to="/" className="hover:text-ethereal transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/products" className="hover:text-ethereal transition-colors">Products</Link>
          <ChevronRight size={12} />
          <span className="text-iris-light">{product.title}</span>
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left — Gallery (60%) */}
          <div className="md:col-span-3 space-y-4">
            {/* Main Image */}
            <motion.div
              className="relative rounded-3xl overflow-hidden bg-lustre h-[480px] cursor-zoom-in group"
              onClick={() => setZoomed(true)}
              data-cursor="product"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImg}
                  src={images[activeImg]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: zoomed ? 1.2 : 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-void/20 to-transparent" />

              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4">
                  <span className="micro-label px-3 py-1.5 rounded-xl bg-iris text-ethereal">{product.badge}</span>
                </div>
              )}

              {/* Stock */}
              <div className="absolute top-4 right-4">
                <span className={`micro-label px-3 py-1.5 rounded-xl ${
                  product.stock_status === 'In Stock'
                    ? 'bg-biolume/20 text-biolume border border-biolume/30'
                    : product.stock_status === 'Limited Stock'
                    ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
                }`}>
                  {product.stock_status}
                </span>
              </div>
            </motion.div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-1">
                {images.map((img, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    whileHover={{ scale: 1.05 }}
                    className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      activeImg === i ? 'border-iris shadow-lg shadow-iris/30' : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </motion.button>
                ))}
              </div>
            )}
          </div>

          {/* Right — Dossier (40%) */}
          <div className="md:col-span-2 space-y-6 md:sticky md:top-28">
            {/* Category */}
            <div>
              <span className="micro-label text-iris-light">{product.category}</span>
            </div>

            {/* Title */}
            <h1 className="font-poppins font-bold text-3xl md:text-4xl text-ethereal leading-tight tracking-tight">
              {product.title}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="font-poppins font-black text-4xl text-ethereal">
                ₹{product.price?.toLocaleString('en-IN')}
              </span>
              {product.original_price && (
                <>
                  <span className="text-ethereal/30 line-through text-xl">₹{product.original_price?.toLocaleString('en-IN')}</span>
                  <span className="micro-label px-2.5 py-1 rounded-lg bg-biolume text-void">
                    Save {Math.round(((product.original_price - product.price) / product.original_price) * 100)}%
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="body-lg text-ethereal/60 leading-relaxed">
              {product.full_description || product.short_description}
            </p>

            {/* Features */}
            {product.features?.length > 0 && (
              <div className="space-y-2.5">
                <p className="micro-label text-ethereal/40">Key Features</p>
                {product.features.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 size={16} className="text-biolume mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-ethereal/70">{f}</span>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Quick Specs */}
            <div className="glass rounded-2xl p-4 border border-white/8 space-y-3">
              {product.material && (
                <div className="flex items-center gap-3 text-sm">
                  <Layers size={14} className="text-iris-light flex-shrink-0" />
                  <span className="text-ethereal/40 w-20 flex-shrink-0">Material</span>
                  <span className="text-ethereal/80">{product.material}</span>
                </div>
              )}
              {product.dimensions && (
                <div className="flex items-center gap-3 text-sm">
                  <Ruler size={14} className="text-iris-light flex-shrink-0" />
                  <span className="text-ethereal/40 w-20 flex-shrink-0">Dimensions</span>
                  <span className="text-ethereal/80">{product.dimensions}</span>
                </div>
              )}
              {product.package_contents && (
                <div className="flex items-start gap-3 text-sm">
                  <Package size={14} className="text-iris-light flex-shrink-0 mt-0.5" />
                  <span className="text-ethereal/40 w-20 flex-shrink-0">Contents</span>
                  <span className="text-ethereal/80 leading-relaxed">{product.package_contents}</span>
                </div>
              )}
            </div>

            {/* CTA */}
            <motion.button
              onClick={() => openWhatsApp(product.title)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-biolume text-void font-bold text-lg glow-lime"
            >
              <MessageCircle size={22} />
              Inquire on WhatsApp
            </motion.button>
          </div>
        </div>

        {/* Full Specs Table */}
        {product.specifications?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="font-poppins font-bold text-2xl text-ethereal mb-8">
              Technical <span className="gradient-text">Specifications</span>
            </h2>
            <div className="glass rounded-2xl border border-white/8 overflow-hidden">
              {product.specifications.map((spec, i) => (
                <div key={i} className={`flex px-6 py-4 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''} ${i !== product.specifications.length - 1 ? 'border-b border-white/5' : ''}`}>
                  <span className="w-1/3 text-ethereal/40 text-sm">{spec.label}</span>
                  <span className="text-ethereal/80 text-sm font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Similar Products */}
        {similar.length > 0 && (
          <div className="mt-24">
            <h2 className="font-poppins font-bold text-2xl text-ethereal mb-8">
              Similar <span className="gradient-text">Products</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {similar.map((p, i) => <ProductCard key={p.id || p.slug} product={p} index={i} />)}
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
}