import { motion } from 'motion/react';
import { Utensils, Droplets, Mountain, Palette } from 'lucide-react';

const FEATURES = [
  {
    icon: Utensils,
    title: "Rich Culinary Heritage",
    description: "Birthplace of Tonkotsu (pork bone) ramen, street food stalls (Yatai) in Fukuoka, and distinct regional shochu spirits."
  },
  {
    icon: Droplets,
    title: "Onsen Culture",
    description: "Home to Beppu, the world's most active geothermal spring resort, offering sand baths, steam cooking, and healing waters."
  },
  {
    icon: Mountain,
    title: "Volcanic Landscapes",
    description: "The island's culture is deeply tied to its active volcanoes, shaping its agriculture, ceramics, and spiritual reverence for nature."
  },
  {
    icon: Palette,
    title: "Traditional Crafts",
    description: "Famous worldwide for Arita, Imari, and Karatsu pottery, techniques passed down through generations since the 16th century."
  }
];

export default function Culture() {
  return (
    <section id="culture" className="py-32 bg-editorial-dark text-editorial-dark-fg overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          <div className="lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-editorial-gray font-semibold tracking-[0.3em] uppercase text-[12px] block mb-6"
            >
              Way of Life
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-serif italic text-white font-normal mb-8 tracking-tight"
            >
              Vibrant & Evolving Culture
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[14px] leading-[1.8] text-[#a0a0a0] mb-16 max-w-lg"
            >
              Kyushu's distinct identity was forged through its geographic separation from the mainland and its historical role as Japan's primary gateway to Asia and the West. The result is a warm, open culture renowned for its exceptional hospitality.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
              {FEATURES.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    className="border-t border-editorial-dark-border pt-6"
                  >
                    <h3 className="text-[11px] uppercase tracking-[1px] font-semibold text-editorial-gray mb-3 flex items-center gap-3">
                      <Icon className="w-4 h-4 text-editorial-red" />
                      {feature.title}
                    </h3>
                    <p className="text-[13px] leading-[1.6] text-editorial-dark-fg/70">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <img 
                src="https://images.unsplash.com/photo-1635379511574-bc167ca085c8?q=80&w=800&auto=format&fit=crop" 
                alt="Ramen"
                referrerPolicy="no-referrer"
                className="object-cover h-80 w-full rounded-sm filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              <img 
                src="https://images.unsplash.com/photo-1670672013421-ec17c92a66d8?q=80&w=800&auto=format&fit=crop" 
                alt="Pottery"
                referrerPolicy="no-referrer"
                className="object-cover h-80 w-full mt-12 rounded-sm filter grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
