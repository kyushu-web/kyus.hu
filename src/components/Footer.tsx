export default function Footer() {
  return (
    <footer className="bg-editorial-dark text-editorial-gray py-16 border-t border-editorial-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-editorial-red flex items-center justify-center">
             <span className="text-white font-serif font-bold text-xl leading-none -mt-1">K</span>
          </div>
          <span className="font-serif italic text-2xl text-editorial-dark-fg tracking-tight">Kyushu Guide</span>
        </div>
        
        <p className="text-[10px] uppercase tracking-[1px] text-editorial-gray">
          Exploring the Southern Frontier &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
