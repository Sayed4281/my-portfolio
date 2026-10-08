'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  User,
  Briefcase,
  Workflow,
  Layers,
  Clock,
  Sparkles,
  Users,
  Mail,
  Download,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Github,
  Linkedin,
  MessageSquare
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const moreDropdownRef = useRef<HTMLDivElement>(null);

  // Primary navigation displayed on compact desktop (lg)
  const primaryNavItems = [
    { name: 'Home', href: '#home', id: 'home', icon: Home },
    { name: 'About', href: '#about', id: 'about', icon: User },
    { name: 'What I Do', href: '#what-i-do', id: 'what-i-do', icon: Briefcase },
    { name: 'Projects', href: '#projects', id: 'projects', icon: Layers },
    { name: 'Experience', href: '#experience', id: 'experience', icon: Clock },
    { name: 'Skills', href: '#skills', id: 'skills', icon: Sparkles },
    { name: 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ];

  // Secondary items tucked into "More" on lg, shown inline on xl+
  const secondaryNavItems = [
    { name: 'How I Work', href: '#how-i-work', id: 'how-i-work', icon: Workflow, desc: 'Agile execution & delivery lifecycle' },
    { name: 'Leadership', href: '#leadership', id: 'leadership', icon: Users, desc: 'Team leadership & business analysis' },
  ];

  // Complete list for wide screens & mobile menu
  const allNavItems = [
    { name: 'Home', href: '#home', id: 'home', icon: Home },
    { name: 'About', href: '#about', id: 'about', icon: User },
    { name: 'What I Do', href: '#what-i-do', id: 'what-i-do', icon: Briefcase },
    { name: 'How I Work', href: '#how-i-work', id: 'how-i-work', icon: Workflow },
    { name: 'Projects', href: '#projects', id: 'projects', icon: Layers },
    { name: 'Experience', href: '#experience', id: 'experience', icon: Clock },
    { name: 'Skills', href: '#skills', id: 'skills', icon: Sparkles },
    { name: 'Leadership', href: '#leadership', id: 'leadership', icon: Users },
    { name: 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Scroll progress
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);

      // Section spy
      const sections = allNavItems.map(item => document.getElementById(item.id));
      const scrollPosition = scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(allNavItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const isSecondaryActive = secondaryNavItems.some(item => item.id === activeSection);

  return (
    <>
      {/* Floating Island Header */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 pointer-events-none"
      >
        <div
          className={`max-w-[1440px] mx-auto pointer-events-auto relative transition-all duration-300 rounded-2xl lg:rounded-full ${
            isScrolled
              ? 'bg-[#0B1220]/85 backdrop-blur-2xl border border-white/[0.12] shadow-[0_12px_40px_rgba(0,0,0,0.65)] py-2 sm:py-2.5 px-3.5 sm:px-5 lg:px-6'
              : 'bg-[#0B1220]/55 backdrop-blur-xl border border-white/[0.07] shadow-[0_8px_32px_rgba(0,0,0,0.25)] py-3 sm:py-3.5 px-3.5 sm:px-5 lg:px-6'
          }`}
        >
          {/* Subtle specular top highlight */}
          <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent pointer-events-none" />

          {/* Integrated laser progress bar at bottom */}
          <div className="absolute bottom-0 left-6 right-6 h-[1.5px] overflow-hidden rounded-full pointer-events-none opacity-80">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-400 transition-all duration-150 shadow-[0_0_10px_rgba(56,189,248,0.7)]"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          <div className="flex items-center justify-between gap-3 sm:gap-4">
            
            {/* Brand Logo & Monogram */}
            <motion.a
              href="#home"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {/* Monogram Icon */}
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 rounded-xl blur-[3px] opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0d1629] border border-white/10 group-hover:border-cyan-400/50 flex items-center justify-center font-display font-black text-white text-base tracking-wider shadow-inner transition-colors">
                  <span className="bg-gradient-to-br from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                    S
                  </span>
                  {/* Glowing availability pulse on badge */}
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0B1220]" />
                </div>
              </div>

              {/* Title & Tagline */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xs sm:text-sm tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                    Sayed Shahloob P
                  </span>
                  <span className="hidden 2xl:inline-flex items-center gap-1 px-1.5 py-0.2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[9px] font-semibold text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 tracking-wide">
                  Tech Lead · Business Analyst
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation (XL+: Full list of 9 items) */}
            <nav className="hidden xl:flex items-center p-1 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-md">
              {allNavItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative px-2.5 2xl:px-3 py-1.5 text-[12px] 2xl:text-[13px] font-medium transition-colors duration-200 whitespace-nowrap rounded-full ${
                      isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activePillXl"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/35 via-cyan-500/25 to-blue-600/35 border border-cyan-400/40 shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Compact Desktop Navigation (LG to XL: 7 items + More dropdown) */}
            <nav className="hidden lg:flex xl:hidden items-center p-1 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-md">
              {primaryNavItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative px-2.5 py-1.5 text-xs font-medium transition-colors duration-200 whitespace-nowrap rounded-full ${
                      isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activePillLg"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/35 via-cyan-500/25 to-blue-600/35 border border-cyan-400/40 shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                      />
                    )}
                  </a>
                );
              })}

              {/* More Dropdown */}
              <div className="relative" ref={moreDropdownRef}>
                <button
                  onClick={() => setIsMoreOpen(!isMoreOpen)}
                  className={`relative flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-full transition-colors ${
                    isSecondaryActive || isMoreOpen ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                  aria-expanded={isMoreOpen}
                >
                  <span className="relative z-10">More</span>
                  <ChevronDown size={13} className={`relative z-10 transition-transform ${isMoreOpen ? 'rotate-180 text-cyan-300' : ''}`} />
                  {isSecondaryActive && (
                    <motion.div
                      layoutId="activePillLg"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/35 via-cyan-500/25 to-blue-600/35 border border-cyan-400/40"
                      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                    />
                  )}
                </button>

                <AnimatePresence>
                  {isMoreOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 w-64 p-2 bg-[#0d1629]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl z-50 space-y-1"
                    >
                      {secondaryNavItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.id;
                        return (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMoreOpen(false)}
                            className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                              isActive
                                ? 'bg-blue-600/20 text-cyan-300 border border-cyan-400/30'
                                : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                            }`}
                          >
                            <div className={`p-1.5 rounded-lg shrink-0 mt-0.5 ${isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-white/[0.05] text-slate-400'}`}>
                              <Icon size={14} />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-xs font-semibold">{item.name}</span>
                              <span className="text-[10px] text-slate-400 leading-tight">{item.desc}</span>
                            </div>
                          </a>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Actions: Contact link, Resume CTA & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              
              {/* Quick Contact Shortcut (visible md+) */}
              <a
                href="#contact"
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all border border-transparent hover:border-white/10"
              >
                <Mail size={13} className="text-cyan-400" />
                <span>Let&apos;s Talk</span>
              </a>

              {/* Elevated Resume Download Button */}
              <motion.a
                href="/Sayed_Shahloob_P_.pdf"
                target="_blank"
                download="Sayed_Shahloob_P_Resume.pdf"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="relative group inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold text-xs text-white overflow-hidden shadow-lg shadow-blue-500/20"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
                <span className="absolute inset-[1px] bg-[#0c1427]/85 backdrop-blur-md rounded-full transition-colors group-hover:bg-[#0c1427]/60" />
                
                <span className="relative z-10 flex items-center gap-1.5">
                  <Download size={13} className="text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
                  <span className="tracking-wide">Resume</span>
                  <span className="text-[9px] font-black uppercase tracking-wider px-1 py-0.5 rounded bg-blue-500/20 text-cyan-300 border border-blue-400/30">
                    PDF
                  </span>
                </span>
              </motion.a>

              {/* Mobile Hamburger Toggle */}
              <button
                className="lg:hidden relative p-2 text-slate-300 hover:text-white rounded-xl bg-white/[0.05] border border-white/10 hover:border-cyan-400/40 active:scale-95 transition-all min-h-[40px] min-w-[40px] flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X size={20} className="text-cyan-300" /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>
      </motion.header>

      {/* Modern Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#070b14]/85 backdrop-blur-2xl flex flex-col pt-20 pb-6 px-4 overflow-y-auto"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: -20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0e1628] border border-white/10 rounded-3xl p-5 shadow-2xl space-y-4 max-w-md mx-auto w-full my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center font-bold text-white text-sm">
                    S
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white">Sayed Shahloob P</span>
                    <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Available for projects
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Navigation links with icons */}
              <div className="grid grid-cols-1 gap-1 max-h-[50vh] overflow-y-auto pr-1">
                {allNavItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-blue-600/25 text-cyan-300 border border-cyan-400/30 shadow-[0_0_15px_rgba(56,189,248,0.15)]'
                          : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`p-1.5 rounded-lg ${isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-white/[0.05] text-slate-400'}`}>
                          <Icon size={14} />
                        </div>
                        <span>{item.name}</span>
                      </div>
                      <ChevronRight size={14} className={isActive ? 'text-cyan-300' : 'text-slate-600'} />
                    </a>
                  );
                })}
              </div>

              {/* Mobile CTA: Download Resume */}
              <div className="pt-2 border-t border-white/[0.08] space-y-3">
                <a
                  href="/Sayed_Shahloob_P_.pdf"
                  target="_blank"
                  download="Sayed_Shahloob_P_Resume.pdf"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 hover:opacity-95 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-blue-500/25 transition-all"
                >
                  <Download size={15} />
                  <span>Download Resume (PDF)</span>
                </a>

                {/* Direct quick-connect bar */}
                <div className="flex items-center justify-center gap-2 pt-1">
                  <a
                    href="https://github.com/Sayed4281"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/[0.05] border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/30 transition-colors"
                    title="GitHub"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/er-sayed-shahloob-p/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/[0.05] border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/30 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="https://wa.me/919567220971"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/[0.05] border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/30 transition-colors"
                    title="WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:sayedshahloobpofficial@gmail.com"
                    className="p-2 rounded-lg bg-white/[0.05] border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/30 transition-colors"
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
