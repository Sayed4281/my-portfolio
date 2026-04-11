import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-[#000000]/80 backdrop-blur-xl border-b border-white/[0.06] py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/#home"
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-[#111111] p-2.5 rounded-lg border border-white/[0.06] group-hover:border-white/30 transition-colors duration-300">
                <span className="font-bold text-white text-lg font-display">
                  S
                </span>
              </div>
            </div>
            <span className="font-semibold text-sm tracking-[0.2em] uppercase text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300">
              Sayed Shahloob P
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative px-4 py-2 text-sm text-neutral-500 hover:text-neutral-200 transition-colors duration-300 group"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}

            <motion.a
              href="/cv.html"
              target="_blank"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-6 px-5 py-2 bg-white/10 text-white text-sm font-medium rounded-lg border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-neutral-400 hover:text-white p-2 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="lg:hidden overflow-hidden bg-[#0a0a0a]/95 backdrop-blur-xl rounded-xl border border-white/[0.06]"
            >
              <div className="p-4 space-y-1">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-neutral-400 hover:text-white hover:bg-white/[0.03] rounded-lg transition-all duration-300"
                  >
                    {item.name}
                  </motion.a>
                ))}
                <a
                  href="/cv.html"
                  target="_blank"
                  className="block px-4 py-3 mt-3 text-center bg-white/10 text-white font-medium rounded-lg border border-white/20"
                >
                  View Resume
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
