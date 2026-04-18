import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const PLACES = [
  {
    name: "Kumamoto Castle",
    location: "Kumamoto",
    image: "https://images.unsplash.com/photo-1705695464723-56195396666b?q=80&w=800&auto=format&fit=crop",
    description: "One of Japan's three premier castles, renowned for its formidable stone walls and defensive architecture. Originally built in 1607."
  },
  {
    name: "Mount Aso",
    location: "Kumamoto",
    image: "https://images.unsplash.com/photo-1615340244831-c1c940e708ca?q=80&w=800&auto=format&fit=crop",
    description: "An active volcano featuring one of the largest calderas in the world. The stunning grass-covered plains contrast with the smoking crater."
  },
  {
    name: "Beppu Onsen",
    location: "Oita",
    image: "https://images.unsplash.com/photo-1752917868539-c4d8e3bc0804?q=80&w=800&auto=format&fit=crop",
    description: "A famous hot spring resort town that produces more hot spring water than anywhere else in Japan, marked by its numerous steam vents."
  },
  {
    name: "Takachiho Gorge",
    location: "Miyazaki",
    image: "https://images.unsplash.com/photo-1773933609615-8efca4a7c512?q=80&w=800&auto=format&fit=crop",
    description: "A V-shaped gorge created by the Gokase River cutting through volcanic rock. Visitors can paddle through the steep, lush cliffs."
  },
  {
    name: "Yatai Food Stalls",
    location: "Fukuoka",
    image: "https://images.unsplash.com/photo-1764073231256-16b148ff180c?q=80&w=800&auto=format&fit=crop",
    description: "Iconic open-air food stalls lining the streets of Nakasu, offering Hakata ramen, yakitori, and an unforgettable communal atmosphere."
  },
  {
    name: "Yakushima",
    location: "Kagoshima (Island)",
    image: "https://images.unsplash.com/photo-1723536524589-1fbfa413fda3?q=80&w=800&auto=format&fit=crop",
    description: "A subtropical island known for its ancient cedar forests, some trees over 1,000 years old. Inspiration for Studio Ghibli's Princess Mononoke."
  }
];

export default function Attractions() {
  return (
    <section id="attractions" className="py-24 bg-editorial-bg border-t border-editorial-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
           <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-editorial-gray font-semibold tracking-[0.3em] uppercase text-[12px] block mb-4"
          >
            Must Visit
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-5xl md:text-6xl font-serif italic text-editorial-fg font-normal tracking-tight"
          >
            Iconic Destinations
          </motion.h2>
          <p className="mt-8 max-w-2xl text-[14px] leading-[1.6] text-editorial-gray mx-auto">
            Explore the diverse landscapes of Kyushu, from dramatic coastlines and lush forests to historic monuments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PLACES.map((place, index) => (
            <motion.div
              key={place.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group border border-editorial-border bg-editorial-bg/50 overflow-hidden relative flex flex-col"
            >
              <div className="relative h-64 overflow-hidden border-b border-editorial-border">
                <div className="absolute inset-0 bg-editorial-dark/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img 
                  src={place.image} 
                  alt={place.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-editorial-bg px-3 py-1.5 border border-editorial-border text-[10px] uppercase font-semibold tracking-[1px] text-editorial-fg">
                  <MapPin className="w-3 h-3 text-editorial-red" />
                  {place.location}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-serif italic text-editorial-fg mb-3">{place.name}</h3>
                <p className="text-editorial-fg/70 text-[13px] leading-[1.6]">
                  {place.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
