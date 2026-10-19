'use client';

import Link from 'next/link';
import { 
  Linkedin, 
  Github, 
  Mail, 
  MapPin, 
  Phone, 
  ArrowUp, 
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import BrandLogo from './BrandLogo';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { personal } = PORTFOLIO_DATA;

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Me', href: '/about' },
    { name: 'Featured Projects', href: '/projects' },
    { name: 'Services & Solutions', href: '/services' },
    { name: 'Contact & Hire', href: '/contact' },
  ];

  const servicesList = [
    'Enterprise ERP Systems',
    'Full-Stack Web Applications',
    'Technical SEO & Audits',
    'Google Business Optimization',
    'Database & Cloud Engineering',
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#F7FAFF] to-white border-t border-[#E4ECF7] pt-10 sm:pt-12 pb-6">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-8 sm:pb-10 border-b border-[#E4ECF7]">
          
          {/* Column 1: Brand, Full Name, Role & Availability (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo />
            
            <p className="text-sm text-[#64748B] leading-relaxed max-w-sm font-normal">
              Full-Stack Software Developer, Technical Project Lead, and SEO Analyst engineering scalable enterprise systems, modern web apps, and high-performance digital experiences.
            </p>

            <div className="space-y-2 pt-1">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#101B3C]">
                <MapPin size={14} className="text-[#1677FF] shrink-0" />
                <span>{personal.location}</span>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available for freelance &amp; full-time opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-sm text-[#101B3C] tracking-wide uppercase">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-[#64748B] hover:text-[#1677FF] transition-colors inline-flex items-center gap-1.5 group font-medium"
                  >
                    <ArrowRight size={12} className="text-slate-300 group-hover:text-[#1677FF] group-hover:translate-x-0.5 transition-all" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services & Stack (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-sm text-[#101B3C] tracking-wide uppercase">
              Expertise
            </h4>
            <ul className="space-y-2.5">
              {servicesList.map((service) => (
                <li key={service} className="text-xs sm:text-sm text-[#64748B] flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Contact & Socials (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-sm text-[#101B3C] tracking-wide uppercase">
              Get In Touch
            </h4>
            
            <div className="space-y-2.5">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2.5 text-xs sm:text-sm text-[#64748B] hover:text-[#1677FF] transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#EFF6FF] border border-blue-200/60 flex items-center justify-center text-[#1677FF] shrink-0 group-hover:bg-[#1677FF] group-hover:text-white transition-all">
                  <Mail size={13} />
                </div>
                <span className="truncate">{personal.email}</span>
              </a>

              <a
                href={`tel:${personal.phone}`}
                className="flex items-center gap-2.5 text-xs sm:text-sm text-[#64748B] hover:text-[#1677FF] transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#EFF6FF] border border-blue-200/60 flex items-center justify-center text-[#1677FF] shrink-0 group-hover:bg-[#1677FF] group-hover:text-white transition-all">
                  <Phone size={13} />
                </div>
                <span>{personal.phone}</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-[#101B3C] mb-2.5">Connect Online</div>
              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="w-9 h-9 rounded-xl bg-white border border-[#E4ECF7] flex items-center justify-center text-[#64748B] hover:text-[#1677FF] hover:border-blue-400 hover:shadow-xs transition-all"
                >
                  <Linkedin size={16} />
                </a>

                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                  className="w-9 h-9 rounded-xl bg-white border border-[#E4ECF7] flex items-center justify-center text-[#64748B] hover:text-[#101B3C] hover:border-slate-400 hover:shadow-xs transition-all"
                >
                  <Github size={16} />
                </a>

                <a
                  href={personal.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                  className="w-9 h-9 rounded-xl bg-white border border-[#E4ECF7] flex items-center justify-center text-[#64748B] hover:text-emerald-600 hover:border-emerald-400 hover:shadow-xs transition-all"
                >
                  <MessageCircle size={16} />
                </a>

                <a
                  href={personal.socials.email}
                  aria-label="Email"
                  title="Direct Email"
                  className="w-9 h-9 rounded-xl bg-white border border-[#E4ECF7] flex items-center justify-center text-[#64748B] hover:text-[#1677FF] hover:border-blue-400 hover:shadow-xs transition-all"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Full Name Copyright & Quick Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-xs text-[#64748B]">
            © {currentYear} <span className="font-bold text-[#101B3C]">Sayed Shahloob P</span>. All rights reserved. Built with Next.js 14, TypeScript &amp; Tailwind CSS.
          </div>

          
        </div>

      </div>
    </footer>
  );
}