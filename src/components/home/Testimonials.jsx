
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai, Maharashtra',
    avatar: 'PS',
    rating: 5,
    text: 'The Glass Soap Dispenser completely transformed my bathroom aesthetic. Every guest asks where I got it. The quality is unmatched — it feels substantial, the pump is smooth, and it looks like a piece of art on my counter.',
    product: 'Premium Glass Soap Dispenser'
  },
  {
    name: 'Arjun Mehta',
    location: 'Bangalore, Karnataka',
    avatar: 'AM',
    rating: 5,
    text: 'I was skeptical about magnetic organizers until I tried Easyva\'s system. Installed in under 2 minutes, holds my heaviest kitchen tools with zero issues. The build quality is exceptional — aerospace-grade materials at a fraction of what I expected to pay.',
    product: 'Smart Magnetic Organizer Rack'
  },
  {
    name: 'Ananya Patel',
    location: 'Delhi',
    avatar: 'AP',
    rating: 5,
    text: 'Ordered the Luxury Bathroom Gift Set for my new home and it exceeded every expectation. The packaging alone is worth framing. Each piece has a satisfying weight to it. This is what premium should feel like.',
    product: 'Luxury Bathroom Gift Set'
  },
  {
    name: 'Rahul Verma',
    location: 'Pune, Maharashtra',
    avatar: 'RV',
    rating: 5,
    text: 'The Modular Kitchen Organizer is a game-changer. My countertop went from chaotic to curated in minutes. The bamboo base is gorgeous and the snap-lock system is incredibly intuitive. Already ordering a second set.',
    product: 'Modular Kitchen Organizer System'
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} size={14} className="text-biolume fill-biolume" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-biolume/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-iris/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-1 h-5 bg-biolume rounded-full" />
            <span className="micro-label text-biolume">Real Stories</span>
            <div className="w-1 h-5 bg-biolume rounded-full" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="display-lg font-poppins text-ethereal"
          >
            What Our <span className="gradient-text">Customers Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="body-lg text-ethereal/50 mt-4 max-w-xl mx-auto"
          >
            Join 500+ happy homeowners who have transformed their spaces with Easyva.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3 }}
              className="glass rounded-xl p-4 border border-white/8 hover:border-biolume/20 transition-all duration-300 group"
            >
              {/* Quote icon */}
              <Quote size={18} className="text-biolume/20 mb-3" />

              {/* Rating */}
              <StarRating rating={item.rating} />

              {/* Text */}
              <p className="text-ethereal/70 text-xs leading-relaxed mt-3 mb-4">
                "{item.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-2.5 mt-auto">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-iris to-biolume flex items-center justify-center text-void font-bold text-[10px]">
                  {item.avatar}
                </div>
                <div>
                  <p className="font-poppins font-semibold text-ethereal text-xs">{item.name}</p>
                  <p className="text-ethereal/30 text-[10px]">{item.location}</p>
                </div>
                <span className="ml-auto text-[9px] uppercase tracking-wider text-iris-light/50 group-hover:text-iris-light transition-colors">
                  {item.product}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}