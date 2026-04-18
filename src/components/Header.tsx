import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'History', href: '#history' },
  { label: 'Culture', href: '#culture' },
  { label: 'Attractions', href: '#attractions' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-editorial-bg/90 backdrop-blur-md z-40 border-b border-editorial-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-editorial-red flex items-center justify-center">
               <span className="text-editorial-bg font-serif font-bold text-xl leading-none -mt-1">K</span>
            </div>
            <span className="font-serif italic text-2xl text-editorial-fg">Kyushu</span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-editorial-fg/70 hover:text-editorial-red font-medium text-[11px] uppercase tracking-[2px] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-editorial-fg/70 hover:text-editorial-fg focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-editorial-bg border-b border-editorial-border"
      >
        <div className="px-4 pt-2 pb-4 space-y-1 sm:px-3">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-[11px] uppercase tracking-[2px] font-medium text-editorial-fg/80 hover:text-editorial-red"
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
