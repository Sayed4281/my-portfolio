'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Menu, X, FileText, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'What I Do', href: '#what-i-do', id: 'what-i-do' },
    { name: 'How I Work', href: '#how-i-work', id: 'how-i-work' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Leadership', href: '#leadership', id: 'leadership' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Calculate scroll progress percentage
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      // Section Scroll Spy logic
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B1220]/90 backdrop-blur-2xl border-b border-[#263449]/80 py-2.5 shadow-2xl shadow-black/40'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        {/* Top Scroll Progress Line */}
        <div 
          className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-blue-500 via-cyan-400 to-white z-50 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        <nav className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            
            {/* Brand Logo */}
            <motion.a
              href="#home"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/30 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-[#172033] p-2 sm:p-2.5 rounded-xl border border-[#263449] group-hover:border-blue-400/50 transition-colors duration-300">
                  <span className="font-bold text-white text-sm sm:text-base font-display tracking-wider">
                    S
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xs sm:text-sm tracking-wider uppercase text-white group-hover:text-cyan-300 transition-colors">
                  Sayed Shahloob P
                </span>
                <span className="text-[9px] font-semibold tracking-widest text-[#94A3B8] hidden sm:block">
                  Tech Lead & Business Analyst
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation Items */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-[#172033]/60 border border-[#263449]/80 rounded-full px-3 py-1.5 backdrop-blur-md">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative px-2.5 xl:px-3 py-1.5 text-[11px] xl:text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                      isActive ? 'text-white font-black' : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-blue-600/30 border border-blue-400/40 rounded-full shadow-inner shadow-blue-500/20"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Actions: Download CV & Mobile Toggle */}
            <div className="flex items-center gap-2.5">
              <motion.a
                href="/Sayed_Shahloob_P_.pdf"
                target="_blank"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:flex items-center gap-1.5 px-3.5 sm:px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white text-[11px] xl:text-xs font-black uppercase tracking-wider rounded-full shadow-lg shadow-blue-600/25 transition-all shrink-0"
              >
                <FileText size={14} />
                CV
              </motion.a>

              {/* Mobile Hamburger Toggle Button */}
              <button
                className="lg:hidden relative z-50 p-2.5 text-[#94A3B8] hover:text-white rounded-xl bg-[#172033] border border-[#263449] active:scale-95 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X size={22} className="text-cyan-300" /> : <Menu size={22} />}
              </button>
            </div>

          </div>
        </nav>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#0B1220]/80 backdrop-blur-xl flex flex-col pt-24 pb-8 px-4 overflow-y-auto"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: -20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#172033] border border-[#263449] rounded-3xl p-5 shadow-2xl space-y-1.5 max-w-lg mx-auto w-full my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-3 px-3">
                Navigation Menu
              </div>

              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all min-h-[46px] ${
                      isActive
                        ? 'bg-blue-600/20 text-cyan-300 border border-blue-500/30'
                        : 'text-[#94A3B8] hover:text-white hover:bg-blue-500/10'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronRight size={16} className={isActive ? 'text-cyan-300' : 'text-[#94A3B8]/40'} />
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-[#263449]">
                <a
                  href="/Sayed_Shahloob_P_.pdf"
                  target="_blank"
                  download
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-black uppercase tracking-wider rounded-2xl shadow-lg shadow-blue-500/25 min-h-[48px]"
                >
                  <FileText size={16} />
                  Download Curriculum Vitae (PDF)
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

