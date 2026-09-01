import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'What I Do', href: '#what-i-do' },
    { name: 'How I Work', href: '#how-i-work' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-[#0B1220]/95 backdrop-blur-2xl border-b border-[#263449] py-3 shadow-2xl'
        : 'bg-transparent py-4 sm:py-5'
        }`}
    >
      <nav className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-[#172033] p-2 sm:p-2.5 rounded-lg border border-[#263449] group-hover:border-blue-500/40 transition-colors duration-300">
                <span className="font-bold text-white text-base sm:text-lg font-display">
                  S
                </span>
              </div>
            </div>
            <span className="font-bold text-xs tracking-[0.15em] uppercase text-[#F8FAFC] group-hover:text-blue-400 transition-colors duration-300 hidden sm:inline-block">
              Sayed Shahloob P
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                className="relative px-2 xl:px-3 py-1.5 text-[11px] xl:text-xs font-bold uppercase tracking-wider text-[#94A3B8] hover:text-white transition-colors duration-300 group whitespace-nowrap"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}

            <motion.a
              href="/Sayed_Shahloob_P_.pdf"
              target="_blank"
              download
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-2 xl:ml-3 px-3.5 xl:px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-[11px] xl:text-xs font-black uppercase tracking-wider rounded-full shadow-lg shadow-blue-500/25 transition-all flex items-center gap-1.5 shrink-0"
            >
              <FileText size={14} />
              CV
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#94A3B8] hover:text-white p-2 transition-colors rounded-lg bg-[#172033]/80 border border-[#263449]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="lg:hidden overflow-hidden bg-[#172033]/98 backdrop-blur-2xl rounded-2xl border border-[#263449] max-h-[80vh] overflow-y-auto shadow-2xl"
            >
              <div className="p-4 space-y-1">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#94A3B8] hover:text-white hover:bg-blue-500/10 rounded-xl transition-all border-b border-[#263449]/40 last:border-0"
                  >
                    {item.name}
                  </motion.a>
                ))}
                <a
                  href="/Sayed_Shahloob_P_.pdf"
                  target="_blank"
                  download
                  className="block px-4 py-3.5 mt-3 text-center bg-blue-600 text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-lg shadow-blue-500/25"
                >
                  Download CV (PDF)
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
