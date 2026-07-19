import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, MessageCircle } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import { openWhatsApp } from '@/lib/whatsapp';

const faqCategories = [
  {
    name: 'Orders & Shipping',
    icon: '📦',
    questions: [
      {
        q: 'How long does shipping take?',
        a: 'We ship across India via premium courier partners. Standard delivery takes 3-7 business days depending on your location. Metro cities typically receive orders within 2-4 days. Express shipping is available at checkout for 1-2 day delivery.'
      },
      {
        q: 'What are the shipping charges?',
        a: 'Orders above ₹999 qualify for free standard shipping. For orders below ₹999, a flat ₹49 shipping fee applies. Express shipping is available at ₹99 regardless of order value.'
      },
      {
        q: 'Do you ship internationally?',
        a: 'Currently, we ship exclusively within India. We are exploring international shipping options and will announce availability soon. Follow us on Instagram for updates.'
      },
      {
        q: 'How can I track my order?',
        a: 'Once your order is dispatched, you will receive a tracking link via WhatsApp and email. You can track your package in real-time through our courier partner\'s portal.'
      },
      {
        q: 'Can I change my delivery address after placing an order?',
        a: 'Address changes can be made within 2 hours of placing the order. Please message us on WhatsApp immediately with your order number and updated address, and we will do our best to accommodate.'
      }
    ]
  },
  {
    name: 'Returns & Exchanges',
    icon: '🔄',
    questions: [
      {
        q: 'What is your return policy?',
        a: 'We offer a 7-day return window from the date of delivery. Products must be unused, in original packaging, and in resalable condition. Custom or personalized items are non-returnable.'
      },
      {
        q: 'How do I initiate a return?',
        a: 'Simply message us on WhatsApp with your order number and reason for return. Our team will guide you through the process and arrange a pickup within 48 hours.'
      },
      {
        q: 'Who pays for return shipping?',
        a: 'If the return is due to a defect, damage, or error on our part, we cover the return shipping costs. For change-of-mind returns, a ₹99 restocking fee is deducted from the refund.'
      },
      {
        q: 'How long do refunds take?',
        a: 'Once we receive and inspect the returned item, refunds are processed within 3-5 business days. The amount will be credited to your original payment method.'
      },
      {
        q: 'Can I exchange a product?',
        a: 'Yes, exchanges are available within the 7-day window. We recommend messaging us on WhatsApp to check stock availability before initiating an exchange request.'
      }
    ]
  },
  {
    name: 'Product Care',
    icon: '🧼',
    questions: [
      {
        q: 'How do I clean the Glass Soap Dispenser?',
        a: 'The borosilicate glass body can be cleaned with warm water and mild soap. Avoid abrasive scrubbers. The pump mechanism can be disassembled for thorough cleaning — simply unscrew the pump head and rinse under running water.'
      },
      {
        q: 'Are your products dishwasher safe?',
        a: 'Ceramic and bamboo components are dishwasher safe on a gentle cycle. However, we recommend hand washing to preserve the finish. Aluminum and stainless steel parts should be wiped clean with a damp cloth.'
      },
      {
        q: 'How do I maintain the bamboo products?',
        a: 'Bamboo products are finished with natural oil. To maintain their appearance, wipe with a slightly damp cloth and dry immediately. Avoid prolonged soaking. Apply food-safe mineral oil every 3-4 months to replenish the finish.'
      },
      {
        q: 'Will the magnetic organizers damage my walls?',
        a: 'No. Our magnetic systems use N52 neodymium magnets that attach to metal surfaces without any adhesive or drilling. For non-metal surfaces, our adhesive systems use 3M VHB tape that removes cleanly with a heat gun, leaving no residue.'
      }
    ]
  },
  {
    name: 'Product & Order Info',
    icon: '❓',
    questions: [
      {
        q: 'Are your products BPA-free?',
        a: 'Yes, all Easyva products are 100% BPA-free. We use food-grade materials throughout — borosilicate glass, 304 stainless steel, food-safe ABS polymer, and natural bamboo. Every material is selected for safety and durability.'
      },
      {
        q: 'Do you offer bulk or wholesale orders?',
        a: 'Yes, we offer special pricing for bulk orders, corporate gifting, and hospitality partnerships. Please reach out to us on WhatsApp with your requirements, and our team will prepare a customized quote.'
      },
      {
        q: 'Can I get a product sample before ordering in bulk?',
        a: 'Absolutely. For bulk inquiries, we can arrange product samples at a nominal cost, which is fully adjustable against your first bulk order. Contact us on WhatsApp for details.'
      },
      {
        q: 'Is gift wrapping available?',
        a: 'All Easyva products come in premium gift-ready packaging. For an additional ₹99, we offer special gift wrapping with a handwritten note card. Select the gift wrap option at checkout.'
      }
    ]
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].name);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const currentCategory = faqCategories.find(c => c.name === activeCategory);
  const filteredQuestions = currentCategory?.questions.filter(
    item => !searchQuery || item.q.toLowerCase().includes(searchQuery.toLowerCase()) || item.a.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <PageLayout>
      {/* Hero */}
      <div className="relative min-h-[35vh] flex items-end pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-iris/5 via-void to-void" />
        <div className="absolute top-20 right-20 w-80 h-80 bg-biolume/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="micro-label text-biolume">Help Center</span>
            <h1 className="display-xl font-poppins text-ethereal mt-2">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-24">
        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative mb-10"
        >
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ethereal/30" />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 glass rounded-xl border border-white/10 text-ethereal placeholder:text-ethereal/30 focus:outline-none focus:border-iris/50 transition-colors bg-transparent text-sm"
          />
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {faqCategories.map(cat => (
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

        {/* Questions */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-3"
        >
          {filteredQuestions.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-4xl mb-4">🔍</p>
              <p className="text-ethereal/50">No questions found matching your search.</p>
              <button onClick={() => setSearchQuery('')} className="mt-3 text-iris-light micro-label hover:text-biolume transition-colors">
                Clear search
              </button>
            </div>
          ) : (
            filteredQuestions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-2xl border border-white/8 overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-poppins font-medium text-ethereal text-sm pr-4">
                    {item.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
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
                        <p className="text-ethereal/60 text-sm leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass rounded-3xl p-8 md:p-12 text-center border border-biolume/20"
        >
          <div className="w-16 h-16 rounded-full bg-biolume/10 border border-biolume/30 flex items-center justify-center mx-auto mb-4">
            <MessageCircle size={28} className="text-biolume" />
          </div>
          <h2 className="font-poppins font-bold text-2xl text-ethereal mb-3">
            Still have questions?
          </h2>
          <p className="text-ethereal/50 body-lg mb-6 max-w-md mx-auto">
            Our team typically responds within minutes. We're here to help with anything you need.
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