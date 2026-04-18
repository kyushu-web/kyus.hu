import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542931287-023b922fa89b?q=80&w=1920&auto=format&fit=crop"
          alt="Kyushu misty mountains"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <span className="text-editorial-red font-semibold tracking-[0.3em] uppercase text-[12px] mb-6 block">
            Discover Japan's Third Largest Island
          </span>
          <h1 className="text-7xl md:text-[120px] font-sans text-white font-normal mb-8 drop-shadow-lg leading-[0.85] tracking-[-4px]">
            KYU<br/>SHU
            <div className="text-[40px] opacity-40 absolute -right-4 md:-right-12 top-0 font-sans tracking-normal">九州</div>
          </h1>
          <h2 className="text-2xl md:text-3xl font-serif italic text-white/90 mb-6 drop-shadow-md">
            The Spirit of Kyushu
          </h2>
          <p className="text-sm md:text-base text-white/80 mb-12 max-w-lg mx-auto font-sans leading-relaxed drop-shadow">
            Experience a land shaped by fire, steeped in ancient history, and brimming with vibrant culture. Where smoldering volcanoes meet tranquil historic shrines.
          </p>
        </motion.div>

        <motion.a
          href="#history"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="inline-flex items-center gap-4 text-editorial-bg hover:text-editorial-red transition-colors group"
        >
          <span className="text-[10px] tracking-[2px] uppercase">Begin Exploring</span>
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </div>
    </section>
  );
}
