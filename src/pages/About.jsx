import { motion } from 'framer-motion';
import { Target, Heart, Leaf, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';

const values = [
  {
    icon: Target,
    title: 'Useful First',
    desc: 'Every product should solve a real home, storage or creative need before it earns a place in the collection.',
  },
  {
    icon: Heart,
    title: 'Made For Daily Life',
    desc: 'We choose products that are easy to use, easy to gift and easy to return to again and again.',
  },
  {
    icon: Leaf,
    title: 'Simple Materials',
    desc: 'Bamboo, ceramic, cotton, glass, steel and reusable craft tools are preferred where they make sense.',
  },
  {
    icon: Award,
    title: 'Clear Guidance',
    desc: 'From product details to kit contents, Easyva keeps information practical so customers can buy with confidence.',
  },
];

const categoryNotes = [
  {
    title: 'Home and Kitchen',
    desc: 'Organizers, trays, dispensers and storage products that help Indian kitchens feel cleaner and easier to use.',
  },
  {
    title: 'Home Decor',
    desc: 'Decorative vases, wall hangings and trays that add warmth to living rooms, bedrooms, balconies and entryways.',
  },
  {
    title: 'Art and Craft',
    desc: 'Beginner-friendly craft supplies for DIY decor, school work, handmade gifts and weekend creative projects.',
  },
  {
    title: 'Embroidery Kit',
    desc: 'Complete embroidery kits with hoops, printed fabric, threads, needles and guides for mindful stitching.',
  },
];

export default function About() {
  return (
    <PageLayout
      seo={{
        title: 'About Easyva | Home, Decor, Craft and Embroidery Products',
        description:
          'Learn about Easyva, a curated shopping destination for home and kitchen essentials, home decor, art and craft supplies, and embroidery kits in India.',
        keywords: 'about Easyva, home and kitchen products, home decor, art and craft supplies, embroidery kit India',
        canonicalPath: '/about',
      }}
    >
      <div className="relative min-h-[38vh] flex items-center pt-24 pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-iris/10 via-void to-void" />
        <div className="absolute top-10 right-20 w-96 h-96 bg-biolume/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="micro-label text-biolume block mb-4">About Easyva</span>
              <h1 className="display-xl font-poppins text-ethereal mb-6">
                Curated for <br /><span className="gradient-text">Homes and Makers.</span>
              </h1>
              <p className="body-lg text-ethereal/60 max-w-md leading-relaxed">
                Easyva brings together useful home and kitchen products, warm home decor, creative art and craft supplies, and complete embroidery kits. Our goal is to make everyday spaces easier to organize and creative hobbies easier to begin.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative rounded-3xl overflow-hidden h-80">
              <img
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=90"
                alt="Easyva art, craft and home products"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-iris/20 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 border border-biolume/20">
              <p className="font-poppins font-bold text-2xl text-biolume">4</p>
              <p className="text-xs text-ethereal/50">Curated categories</p>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <span className="micro-label text-iris-light block mb-4">Our Promise</span>
            <blockquote className="font-poppins text-2xl md:text-3xl font-semibold text-ethereal leading-relaxed">
              "Easyva helps customers find useful products for better homes, thoughtful gifts and creative time."
            </blockquote>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-6 border border-white/8 hover:border-iris/30 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-iris/10 flex items-center justify-center mb-4 group-hover:bg-iris/20 transition-colors">
                    <Icon size={20} className="text-iris-light" />
                  </div>
                  <h3 className="font-poppins font-semibold text-ethereal text-lg mb-2">{val.title}</h3>
                  <p className="text-ethereal/50 text-sm leading-relaxed">{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-lustre/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="micro-label text-biolume block mb-4">What We Sell</span>
            <h2 className="display-lg font-poppins text-ethereal">
              Easyva <span className="gradient-text">Categories</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categoryNotes.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-6 border border-white/8"
              >
                <h3 className="font-poppins font-semibold text-ethereal text-xl mb-2">{item.title}</h3>
                <p className="text-ethereal/50 body-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="void-pad">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="display-lg font-poppins text-ethereal mb-6">
              Explore the <span className="gradient-text">Easyva Collection</span>
            </h2>
            <Link to="/products">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-iris to-iris-light text-ethereal font-semibold glow-purple cursor-pointer"
              >
                Shop Products
                <ArrowRight size={18} />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
