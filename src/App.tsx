import { motion, useScroll, useSpring } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import History from './components/History';
import Culture from './components/Culture';
import Attractions from './components/Attractions';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen font-sans bg-editorial-bg text-editorial-fg selection:bg-editorial-red/20 selection:text-editorial-fg">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-editorial-red z-50 origin-left"
        style={{ scaleX }}
      />
      <Header />
      <main>
        <Hero />
        <History />
        <Culture />
        <Attractions />
      </main>
      <Footer />
    </div>
  );
}
