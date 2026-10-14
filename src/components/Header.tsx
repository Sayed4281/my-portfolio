'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  User,
  Briefcase,
  Layers,
  Mail,
  Download,
  Menu,
  X,
  ChevronRight,
  Github,
  Linkedin
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  // Exactly 5 main navigation destinations
  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Projects', href: '/projects', icon: Layers },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const isItemActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname === href || pathname.startsWith(href + '/');
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
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

  // Close mobile menu whenever pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
        <div
          className={`w-full bg-white/80 backdrop-blur-xl border-b border-slate-200/70 transition-all duration-300 ${
            isScrolled
              ? 'py-2.5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] bg-white/95'
              : 'py-3.5 shadow-none'
          }`}
        >
          {/* Subtle scroll progress tracker on bottom rim */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden pointer-events-none">
            <div
              className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 transition-all duration-150"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
            
            {/* Brand Logo & Professional Identity */}
            <Link
              href="/"
              className="flex items-center gap-3.5 group shrink-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/80 flex items-center justify-center font-display font-black text-white text-base shadow-sm group-hover:border-blue-500 group-hover:shadow-blue-500/10 transition-all duration-300 group-hover:scale-105">
                  <span className="bg-gradient-to-br from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                    S
                  </span>
                </div>
                {/* Verified status dot */}
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white shadow-2xs" />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-sm sm:text-base text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    Sayed Shahloob P
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[10px] font-bold text-emerald-700 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Available
                  </span>
                </div>
                <span className="text-[11px] font-medium text-slate-500 tracking-tight">
                  Software Developer · Technical Project Lead
                </span>
              </div>
            </Link>

            {/* Desktop Navigation (5 Main Destinations) */}
            <nav className="hidden md:flex items-center gap-1 sm:gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = isItemActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold transition-all duration-200 ${
                      isActive
                        ? 'text-blue-600 font-extrabold'
                        : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50/80 rounded-full'
                    }`}
                  >
                    <Icon size={14} className={isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-600'} />
                    <span>{item.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Actions: Resume CTA & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-full transition-colors"
              >
                <Mail size={13} className="text-blue-600" />
                <span>Let&apos;s Talk</span>
              </Link>

              <motion.a
                href="/Sayed_Shahloob_P_.pdf"
                target="_blank"
                download="Sayed_Shahloob_P_Resume.pdf"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-xs text-white shadow-sm hover:shadow-md bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all"
              >
                <Download size={13} />
                <span>Resume</span>
                <span className="text-[9px] font-black uppercase tracking-wider px-1 py-0.2 rounded bg-white/20 text-white">
                  PDF
                </span>
              </motion.a>

              {/* Mobile Hamburger Toggle */}
              <button
                className="md:hidden p-2 text-slate-700 hover:text-slate-900 rounded-xl bg-slate-100 border border-slate-200 active:scale-95 transition-all flex items-center justify-center min-h-[40px] min-w-[40px]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X size={20} className="text-blue-600" /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-slate-900/40 backdrop-blur-md flex flex-col pt-20 pb-6 px-4 overflow-y-auto"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: -20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-slate-200 rounded-3xl p-5 shadow-2xl space-y-4 max-w-md mx-auto w-full my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white text-base shadow-sm">
                    S
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-900">Sayed Shahloob P</span>
                    <span className="text-[10px] text-emerald-600 flex items-center gap-1 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Available for projects & roles
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                >
                  <X size={18} />
                </button>
              </div>

              {/* 5 Navigation Links */}
              <div className="grid grid-cols-1 gap-1.5">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = isItemActive(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-blue-50 text-blue-700 border border-blue-200 shadow-sm'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`p-1.5 rounded-lg ${isActive ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500'}`}>
                          <Icon size={14} />
                        </div>
                        <span>{item.name}</span>
                      </div>
                      <ChevronRight size={14} className={isActive ? 'text-blue-600' : 'text-slate-400'} />
                    </Link>
                  );
                })}
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-slate-100 space-y-3">
                <a
                  href="/Sayed_Shahloob_P_.pdf"
                  target="_blank"
                  download="Sayed_Shahloob_P_Resume.pdf"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md shadow-blue-500/20 transition-all"
                >
                  <Download size={15} />
                  <span>Download Resume (PDF)</span>
                </a>

                <div className="flex items-center justify-center gap-2 pt-1">
                  <a
                    href="https://github.com/Sayed4281"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-colors"
                    title="GitHub"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/er-sayed-shahloob-p/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="https://wa.me/919567220971"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-emerald-600 hover:border-emerald-300 transition-colors"
                    title="WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:sayedshahloobpofficial@gmail.com"
                    className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-colors"
                    title="Email"
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
