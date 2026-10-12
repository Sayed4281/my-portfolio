'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 5 core pages as requested
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/90 shadow-xs py-3'
          : 'bg-white/70 backdrop-blur-sm border-b border-slate-200/50 py-4 sm:py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
        
        {/* Brand Name / Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs tracking-wider shadow-xs group-hover:bg-blue-600 transition-colors">
            SP
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm sm:text-base tracking-tight text-slate-950 group-hover:text-blue-600 transition-colors">
              Sayed Shahloob
            </span>
            <span className="text-[10px] text-slate-500 font-medium hidden sm:block -mt-0.5">
              Technical Lead &amp; Solutions Architect
            </span>
          </div>
        </Link>

        {/* 5 Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-colors rounded-lg ${
                  isActive 
                    ? 'text-slate-950 font-semibold' 
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/70'
                }`}
              >
                <span>{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="headerActiveIndicator"
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-slate-950 rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action: Clean Resume Link & Mobile Toggle */}
        <div className="flex items-center gap-2.5">
          <a
            href="/Sayed_Shahloob_P_.pdf"
            target="_blank"
            download="Sayed_Shahloob_P_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold shadow-2xs hover:border-slate-400 transition-all"
          >
            <FileText size={13} className="text-slate-500" />
            <span>Resume</span>
            <ArrowUpRight size={12} className="text-slate-400" />
          </a>

          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-all"
          >
            <span>Let&apos;s Talk</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-950 rounded-lg bg-slate-100 border border-slate-200 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2 shadow-lg"
          >
            {navItems.map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-slate-100 text-slate-950 font-semibold' 
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
              <a
                href="/Sayed_Shahloob_P_.pdf"
                target="_blank"
                download="Sayed_Shahloob_P_Resume.pdf"
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-800"
              >
                <FileText size={13} />
                <span>Download Resume</span>
              </a>
              <Link
                href="/contact"
                className="flex-1 flex items-center justify-center py-2.5 rounded-lg bg-slate-900 text-xs font-semibold text-white"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
