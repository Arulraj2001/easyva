import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai, Maharashtra',
    avatar: 'PS',
    rating: 5,
    text: 'The kitchen storage rack made my small counter much easier to manage. Spices, tea jars and small containers are finally visible instead of being stacked everywhere.',
    product: 'Expandable Kitchen Storage Rack',
  },
  {
    name: 'Arjun Mehta',
    location: 'Bangalore, Karnataka',
    avatar: 'AM',
    rating: 5,
    text: 'I ordered the macrame wall hanging for my reading corner and it changed the whole room. Simple, warm and easy to hang without making the wall look crowded.',
    product: 'Macrame Wall Hanging Decor',
  },
  {
    name: 'Ananya Patel',
    location: 'Delhi',
    avatar: 'AP',
    rating: 5,
    text: 'The acrylic paint set was perfect for my weekend DIY projects. The colors are bright, easy to use and good for both paper crafts and small decor pieces.',
    product: 'Acrylic Paint Set',
  },
  {
    name: 'Rahul Verma',
    location: 'Pune, Maharashtra',
    avatar: 'RV',
    rating: 5,
    text: 'The beginner embroidery kit had everything inside, so I did not have to search for hoops or threads separately. The printed fabric made my first project feel possible.',
    product: 'Beginner Floral Embroidery Kit',
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
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-1 h-5 bg-biolume rounded-full" />
            <span className="micro-label text-biolume">Customer Notes</span>
            <div className="w-1 h-5 bg-biolume rounded-full" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="display-lg font-poppins text-ethereal"
          >
            What Easyva <span className="gradient-text">Customers Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="body-lg text-ethereal/50 mt-4 max-w-xl mx-auto"
          >
            Real feedback on home and kitchen products, home decor, art and craft supplies, and embroidery kits.
          </motion.p>
        </div>

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
              <Quote size={18} className="text-biolume/20 mb-3" />
              <StarRating rating={item.rating} />
              <p className="text-ethereal/70 text-xs leading-relaxed mt-3 mb-4">"{item.text}"</p>

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
