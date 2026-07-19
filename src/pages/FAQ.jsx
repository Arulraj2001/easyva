import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, MessageCircle } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import { openWhatsApp } from '@/lib/whatsapp';
import { buildFaqStructuredData } from '@/lib/seo';

const faqCategories = [
  {
    name: 'Orders and Shipping',
    icon: 'Box',
    questions: [
      {
        q: 'How long does Easyva delivery take?',
        a: 'We ship across India through courier partners. Most orders arrive within 3 to 7 business days depending on the delivery location. Metro cities are usually faster than remote pin codes.',
      },
      {
        q: 'How can I ask about product availability?',
        a: 'You can message us on WhatsApp with the product name or category. We will confirm availability, pricing, shipping timeline and bulk quantity options if needed.',
      },
      {
        q: 'Do you offer bulk orders for gifting or events?',
        a: 'Yes. Bulk orders are available for home decor, art and craft supplies, embroidery kits and selected home and kitchen products. Share the quantity and delivery city on WhatsApp for a quote.',
      },
      {
        q: 'Can I change my delivery address after ordering?',
        a: 'Please message us as soon as possible. Address changes can usually be handled before dispatch, but they may not be possible once the courier has picked up the order.',
      },
    ],
  },
  {
    name: 'Returns and Support',
    icon: 'Return',
    questions: [
      {
        q: 'What is your return policy?',
        a: 'Returns are accepted within 7 days of delivery for unused products in original packaging. Items that are damaged through use, missing parts or altered after delivery may not be eligible.',
      },
      {
        q: 'What should I do if an item arrives damaged?',
        a: 'Send clear photos or a short video on WhatsApp within 24 hours of delivery. Our team will review the issue and help with a replacement, return or suitable resolution.',
      },
      {
        q: 'Are embroidery kits and craft kits returnable?',
        a: 'Unopened kits can usually be returned within the return window. Opened kits with used threads, paints, resin, fabric or tools may not be returnable for hygiene and completeness reasons.',
      },
      {
        q: 'How do refunds work?',
        a: 'After the returned item is received and checked, eligible refunds are processed to the original payment method or as agreed with support.',
      },
    ],
  },
  {
    name: 'Product Care',
    icon: 'Care',
    questions: [
      {
        q: 'How do I care for home and kitchen organizers?',
        a: 'Wipe organizers, racks and trays with a soft damp cloth and dry them immediately. Avoid soaking bamboo or wood products, and keep metal parts away from harsh cleaners.',
      },
      {
        q: 'How should I clean home decor products?',
        a: 'Use a dry or slightly damp cloth for ceramic vases, decorative trays and wall decor. Keep macrame and fabric decor away from direct moisture and dust gently when needed.',
      },
      {
        q: 'Are art and craft supplies beginner friendly?',
        a: 'Yes. Easyva art and craft supplies are selected for beginners, students and hobby makers. Product pages mention recommended uses, surfaces and safety notes where relevant.',
      },
      {
        q: 'What is included in an embroidery kit?',
        a: 'Most Easyva embroidery kits include printed fabric, an embroidery hoop, colored threads, needles and a guide. Check each product page for exact contents and hoop size.',
      },
    ],
  },
  {
    name: 'Product Help',
    icon: 'Help',
    questions: [
      {
        q: 'Which category should I choose for gifting?',
        a: 'Home decor and embroidery kits are popular for thoughtful gifts. Art and craft supplies work well for students and hobby makers, while home and kitchen products are useful for housewarming gifts.',
      },
      {
        q: 'Can you recommend products for a small kitchen?',
        a: 'Yes. Message us on WhatsApp with a photo or description of your counter, drawer or shelf space. We can suggest storage racks, cutlery trays, dispensers and organizers.',
      },
      {
        q: 'Are product images exact?',
        a: 'Images are used to represent the product style and use case. Natural materials, handmade-look finishes and lighting may create small variations in color or texture.',
      },
      {
        q: 'How do I contact Easyva quickly?',
        a: 'WhatsApp is the fastest way to reach us for product details, order help, gifting suggestions and bulk inquiries.',
      },
    ],
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].name);
  const [searchQuery, setSearchQuery] = useState('');

  const currentCategory = faqCategories.find((category) => category.name === activeCategory);
  const filteredQuestions = currentCategory?.questions.filter(
    (item) =>
      !searchQuery ||
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase()),
  ) || [];

  return (
    <PageLayout
      seo={{
        title: 'Easyva FAQ | Shipping, Returns, Product Care and Embroidery Kits',
        description:
          'Find answers about Easyva shipping, returns, product care, home and kitchen products, home decor, art and craft supplies, and embroidery kits.',
        keywords: 'Easyva FAQ, shipping, returns, product care, embroidery kit questions, art and craft supplies',
        canonicalPath: '/faq',
        structuredData: buildFaqStructuredData(faqCategories.flatMap((category) => category.questions)),
      }}
    >
      <div className="relative min-h-[28vh] flex items-end pb-10 pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-iris/5 via-void to-void" />
        <div className="absolute top-20 right-20 w-80 h-80 bg-biolume/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="micro-label text-biolume">Help Center</span>
            <h1 className="display-xl font-poppins text-ethereal mt-2">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
          </motion.div>
          <p className="text-ethereal/60 mt-4 max-w-3xl">
            Answers about Easyva delivery, returns, product care, craft kit contents and WhatsApp support.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-14">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="relative mb-6">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ethereal/30" />
          <input
            type="text"
            placeholder="Search shipping, returns, decor, craft or embroidery..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="w-full pl-11 pr-4 py-3.5 glass rounded-xl border border-white/10 text-ethereal placeholder:text-ethereal/30 focus:outline-none focus:border-iris/50 transition-colors bg-transparent text-sm"
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-2 mb-6">
          {faqCategories.map((cat) => (
            <motion.button
              key={cat.name}
              onClick={() => { setActiveCategory(cat.name); setOpenIndex(null); }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl micro-label transition-all duration-300 ${
                activeCategory === cat.name
                  ? 'bg-iris text-ethereal glow-purple'
                  : 'glass border border-white/10 text-ethereal/50 hover:border-iris/30 hover:text-ethereal'
              }`}
            >
              <span>{cat.icon}</span>
              {cat.name}
            </motion.button>
          ))}
        </motion.div>

        <motion.div key={activeCategory} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="space-y-3">
          {filteredQuestions.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-ethereal/50">No questions found matching your search.</p>
              <button onClick={() => setSearchQuery('')} className="mt-3 text-iris-light micro-label hover:text-biolume transition-colors">
                Clear search
              </button>
            </div>
          ) : (
            filteredQuestions.map((item, i) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-2xl border border-white/8 overflow-hidden"
              >
                <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors">
                  <span className="font-poppins font-medium text-ethereal text-sm pr-4">{item.q}</span>
                  <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
                    <ChevronDown size={16} className="text-ethereal/30" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-0">
                        <div className="w-full h-px bg-white/5 mb-4" />
                        <p className="text-ethereal/60 text-sm leading-relaxed">{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          )}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 glass rounded-3xl p-6 md:p-8 text-center border border-biolume/20">
          <div className="w-16 h-16 rounded-full bg-biolume/10 border border-biolume/30 flex items-center justify-center mx-auto mb-4">
            <MessageCircle size={28} className="text-biolume" />
          </div>
          <h2 className="font-poppins font-bold text-2xl text-ethereal mb-3">Still have questions?</h2>
          <p className="text-ethereal/50 body-lg mb-6 max-w-md mx-auto">
            Message us for product recommendations, order help, bulk pricing or craft kit details.
          </p>
          <motion.button
            onClick={() => openWhatsApp()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-biolume text-void font-bold text-base glow-lime"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </motion.button>
        </motion.div>
      </div>
    </PageLayout>
  );
}
