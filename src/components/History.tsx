import { motion } from 'motion/react';

const TIMELINE = [
  {
    year: "Antiquity",
    title: "The Birthplace of Japanese Civilization",
    description: "Kyushu is often considered the cradle of Japanese civilization, rich in myth and legend, where the descent of the sun goddess Amaterasu's grandson took place."
  },
  {
    year: "1543",
    title: "First Contact with the West",
    description: "Portuguese traders landed on the island of Tanegashima, south of Kyushu, bringing firearms and introducing Western trade to Japan."
  },
  {
    year: "1639 - 1854",
    title: "The Gateway during Isolation",
    description: "During the Sakoku (isolationist) period, Dejima in Nagasaki served as the sole gateway for foreign trade, making Kyushu the window to the world."
  },
  {
    year: "1868",
    title: "Meiji Restoration",
    description: "Leaders from the Satsuma Domain (modern Kagoshima) played a crucial role in overthrowing the shogunate and establishing modern Japan."
  }
];

export default function History() {
  return (
    <section id="history" className="py-24 bg-editorial-bg border-b border-editorial-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-editorial-gray font-semibold tracking-[0.3em] uppercase text-[12px] block mb-4"
          >
            Our Past
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-5xl md:text-6xl font-serif italic text-editorial-fg font-normal tracking-tight"
          >
            A Tapestry of History
          </motion.h2>
          <p className="mt-8 max-w-2xl text-[14px] text-editorial-gray mx-auto leading-[1.6]">
            From ancient mythology to the modernization of Japan, Kyushu has always been at the forefront of the nation's pivotal moments.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-ml-px top-0 bottom-0 w-[1px] bg-editorial-border" />

          <div className="space-y-16 relative">
            {TIMELINE.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-editorial-fg -ml-[5px] mt-[26px] z-10" />
                <div className="flex-1 md:w-1/2 pl-12 md:pl-0">
                  <div className={`py-4 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <span className="text-editorial-gray font-sans text-[11px] tracking-[1px] uppercase mb-4 block">{item.year}</span>
                    <h3 className="text-2xl font-serif italic text-editorial-fg mb-4">{item.title}</h3>
                    <p className="text-editorial-fg/80 text-[13px] leading-[1.6]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
