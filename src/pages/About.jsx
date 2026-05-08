import { motion } from 'framer-motion';
import { Target, Heart, Leaf, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';

const timeline = [
  { year: '2022', title: 'The Idea', desc: 'Frustrated by the lack of truly premium, thoughtfully designed home essentials in India, the Easyva concept was born in a Bangalore apartment.' },
  { year: '2023', title: 'First Products', desc: 'After 18 months of material testing and design iteration, the first collection launched: the Glass Soap Dispenser and Magnetic Organizer Rack.' },
  { year: '2024', title: 'Community Growth', desc: 'Over 500 homes across India transformed. Partnership with independent ceramic artists to expand the bathroom essentials range.' },
  { year: '2025', title: 'The Full Collection', desc: 'The complete Easyva ecosystem — bathroom, kitchen, and storage — designed as a unified aesthetic language for modern Indian homes.' },
];

const values = [
  { icon: Target, title: 'Precision', desc: 'Every specification, every tolerance — engineered to surpass expectation.' },
  { icon: Heart, title: 'Passion', desc: 'Born from genuine love for beautiful, functional objects in everyday life.' },
  { icon: Leaf, title: 'Sustainability', desc: 'Responsibly sourced materials, zero unnecessary packaging.' },
  { icon: Award, title: 'Excellence', desc: 'We do not launch a product until it exceeds our own standard of perfection.' },
];

export default function About() {
  return (
    <PageLayout>
      {/* Hero */}
      <div className="relative min-h-[55vh] flex items-center pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-iris/10 via-void to-void" />
        <div className="absolute top-10 right-20 w-96 h-96 bg-biolume/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="micro-label text-biolume block mb-4">Our Story</span>
              <h1 className="display-xl font-poppins text-ethereal mb-6">
                Crafted with <br /><span className="gradient-text">Intention.</span>
              </h1>
              <p className="body-lg text-ethereal/60 max-w-md leading-relaxed">
                Easyva was founded on a simple but radical idea: that the objects we interact with every morning and every evening should be as considered as the lives we aspire to live.
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
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=90"
                alt="Easyva products"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-iris/20 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 border border-biolume/20">
              <p className="font-poppins font-bold text-2xl text-biolume">500+</p>
              <p className="text-xs text-ethereal/50">Homes transformed</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <span className="micro-label text-iris-light block mb-4">Mission Statement</span>
            <blockquote className="font-poppins text-2xl md:text-3xl font-semibold text-ethereal leading-relaxed">
              "We exist to prove that the mundane can be <span className="gradient-text">magnificent</span> — that every home, regardless of size, deserves objects worth living with."
            </blockquote>
          </motion.div>

          {/* Values */}
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

      {/* Timeline */}
      <section className="section-pad bg-lustre/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="micro-label text-biolume block mb-4">Journey</span>
            <h2 className="display-lg font-poppins text-ethereal">
              The <span className="gradient-text">Timeline</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-iris via-biolume to-transparent" />
            <div className="space-y-12 pl-16">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative"
                >
                  <div className="absolute -left-[42px] w-4 h-4 rounded-full bg-iris border-2 border-iris/30 shadow-lg shadow-iris/50" />
                  <span className="micro-label text-iris-light">{item.year}</span>
                  <h3 className="font-poppins font-semibold text-ethereal text-xl mt-1 mb-2">{item.title}</h3>
                  <p className="text-ethereal/50 body-lg">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="void-pad">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="display-lg font-poppins text-ethereal mb-6">
              Ready to <span className="gradient-text">Transform</span> Your Space?
            </h2>
            <Link to="/products">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-iris to-iris-light text-ethereal font-semibold glow-purple cursor-pointer"
              >
                Explore the Collection
                <ArrowRight size={18} />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}