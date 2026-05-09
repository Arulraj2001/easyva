import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, Instagram, MapPin, Send } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';
import PageLayout from '@/components/layout/PageLayout';

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    detail: '+91 9XXXXXXXXX',
    sub: 'Fastest response — typically within minutes',
    action: () => openWhatsApp(),
    btnLabel: 'Open WhatsApp',
    color: 'biolume',
  },
  {
    icon: Mail,
    title: 'Email',
    detail: 'hello@easyva.in',
    sub: 'For inquiries and bulk orders',
    action: () => window.location.href = 'mailto:hello@easyva.in',
    btnLabel: 'Send Email',
    color: 'iris',
  },
  {
    icon: Instagram,
    title: '@easyva.in',
    detail: '@easyva.in',
    sub: 'Follow for new launches & behind the scenes',
    action: () => window.open('https://instagram.com', '_blank'),
    btnLabel: 'Follow Us',
    color: 'iris',
  },
  {
    icon: Phone,
    title: 'Phone',
    detail: '+91 9XXXXXXXXX',
    sub: 'Mon–Sat, 10:00–18:00 IST',
    action: () => window.location.href = 'tel:+919xxxxxxxxx',
    btnLabel: 'Call Now',
    color: 'biolume',
  },
];

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name?.value;
    const message = form.message?.value;
    openWhatsApp(`${name}: ${message}`);
  };

  return (
    <PageLayout>
      {/* Hero */}
      <div className="relative min-h-[40vh] flex items-end pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-biolume/5 via-void to-void" />
        <div className="absolute top-20 left-20 w-80 h-80 bg-iris/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="micro-label text-biolume block mb-2">
              Get In Touch
            </span>

            <h1 className="display-xl font-poppins text-ethereal">
              Let's <span className="gradient-text">Connect.</span>
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {contactMethods.map((method, i) => {
            const Icon = method.icon;
            const isLime = method.color === 'biolume';

            return (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 border border-white/8 hover:border-iris/30 transition-all duration-300 flex flex-col gap-4"
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                    isLime ? 'bg-biolume/10' : 'bg-iris/10'
                  }`}
                >
                  <Icon
                    size={20}
                    className={isLime ? 'text-biolume' : 'text-iris-light'}
                  />
                </div>

                <div>
                  <p className="font-poppins font-semibold text-ethereal">
                    {method.title}
                  </p>

                  <p className="text-sm text-ethereal/70 mt-0.5">
                    {method.detail}
                  </p>

                  <p className="text-xs text-ethereal/30 mt-1">
                    {method.sub}
                  </p>
                </div>

                {/* Updated Small Width Button */}
                <div className="mt-auto">
                  <motion.button
                    onClick={method.action}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`inline-flex items-center justify-center px-3 py-1 rounded-lg text-xs font-medium transition-all duration-300 whitespace-nowrap w-fit ${
                      isLime
                        ? 'bg-biolume/10 border border-biolume/30 text-biolume hover:bg-biolume/20'
                        : 'bg-iris/10 border border-iris/30 text-iris-light hover:bg-iris/20'
                    }`}
                  >
                    {method.btnLabel}
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Form + Info */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 border border-white/8"
          >
            <h2 className="font-poppins font-bold text-2xl text-ethereal mb-2">
              Send a Message
            </h2>

            <p className="text-ethereal/40 text-sm mb-8">
              This will open WhatsApp with your message pre-filled.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                {
                  id: 'name',
                  label: 'Your Name',
                  type: 'text',
                  placeholder: 'John Doe',
                },
                {
                  id: 'phone',
                  label: 'Phone Number',
                  type: 'tel',
                  placeholder: '+91 98765 43210',
                },
                {
                  id: 'product',
                  label: 'Product of Interest',
                  type: 'text',
                  placeholder: 'Glass Soap Dispenser',
                },
              ].map((field) => (
                <div key={field.id} className="gradient-border">
                  <div className="glass rounded-xl p-px">
                    <div className="p-3">
                      <label className="micro-label text-ethereal/40 block mb-2">
                        {field.label}
                      </label>

                      <input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full bg-transparent text-ethereal placeholder:text-ethereal/20 focus:outline-none text-sm input-gradient"
                      />
                    </div>
                  </div>
                </div>
              ))}

              <div className="gradient-border">
                <div className="glass rounded-xl p-px">
                  <div className="p-3">
                    <label className="micro-label text-ethereal/40 block mb-2">
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your needs..."
                      className="w-full bg-transparent text-ethereal placeholder:text-ethereal/20 focus:outline-none text-sm resize-none input-gradient"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-biolume text-void font-bold text-sm glow-lime"
                >
                  <Send size={14} />
                  Send via WhatsApp
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-poppins font-bold text-2xl text-ethereal mb-4">
                Find Us
              </h2>

              <div className="flex items-start gap-3 text-ethereal/60">
                <MapPin
                  size={18}
                  className="text-iris-light mt-0.5 flex-shrink-0"
                />

                <div>
                  <p className="text-ethereal font-medium">India</p>
                  <p className="text-sm mt-1">Shipping across India</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative rounded-2xl overflow-hidden h-64 glass border border-white/8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d18629.805755487785!2d77.0179018490618!3d11.006011823615582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDAwJzMxLjAiTiA3N8KwMDEnMzcuNiJF!5e0!3m2!1sen!2sin!4v1778308782000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="glass rounded-2xl p-6 border border-biolume/20">
              <h3 className="font-poppins font-semibold text-ethereal mb-3">
                Business Hours
              </h3>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-ethereal/40">
                    Monday – Saturday
                  </span>

                  <span className="text-biolume">
                    10:00 – 18:00 IST
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-ethereal/40">Sunday</span>

                  <span className="text-ethereal/30">
                    WhatsApp only
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-ethereal/40">
                    Response Time
                  </span>

                  <span className="text-biolume">
                    Under 2 hours
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
