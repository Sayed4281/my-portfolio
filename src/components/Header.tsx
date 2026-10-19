'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_4px_20px_rgba(16,27,60,0.06)] border-b border-[#E4ECF7]'
          : 'bg-white/70 backdrop-blur-sm border-b border-[#E4ECF7]/60'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-[72px] sm:h-[80px] flex items-center justify-between">
        {/* Left: Brand Logo */}
        <BrandLogo />

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative py-2 text-sm sm:text-[15px] font-semibold transition-colors duration-200 ${
                  active ? 'text-[#1677FF]' : 'text-[#101B3C] hover:text-[#1677FF]'
                }`}
              >
                <span>{item.name}</span>
                {active && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#1677FF] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-white font-semibold text-sm btn-gradient group"
          >
            <span>Get In Touch</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden p-2 rounded-xl text-[#101B3C] hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1677FF]"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-b border-[#E4ECF7] shadow-xl overflow-hidden"
          >
            <div className="px-5 py-6 space-y-4">
              {navLinks.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-base font-semibold transition-colors ${
                      active
                        ? 'bg-[#EFF6FF] text-[#1677FF]'
                        : 'text-[#101B3C] hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.name}</span>
                    {active && <span className="w-2 h-2 rounded-full bg-[#1677FF]" />}
                  </Link>
                );
              })}

              <div className="pt-2 border-t border-slate-100">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-white font-semibold text-sm btn-gradient"
                >
                  <span>Get In Touch</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
