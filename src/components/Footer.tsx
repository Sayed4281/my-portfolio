'use client';

import Link from 'next/link';
import { Linkedin, Github, Mail, Twitter } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-white border-t border-[#E4ECF7] py-8 sm:py-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Brand Logo & Dynamic Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
            <BrandLogo />
            <span className="text-xs sm:text-sm text-[#64748B]">
              © {currentYear} {PORTFOLIO_DATA.personal.brandName}. All rights reserved.
            </span>
          </div>

          {/* Center/Right: Navigation Links & Social Media */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <nav className="flex items-center gap-5 sm:gap-6">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs sm:text-sm font-medium text-[#64748B] hover:text-[#1677FF] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={PORTFOLIO_DATA.personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-full bg-[#F7FAFF] border border-[#E4ECF7] flex items-center justify-center text-[#64748B] hover:text-[#1677FF] hover:border-blue-300 hover:bg-blue-50/50 transition-all"
              >
                <Linkedin size={16} />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-full bg-[#F7FAFF] border border-[#E4ECF7] flex items-center justify-center text-[#64748B] hover:text-[#1677FF] hover:border-blue-300 hover:bg-blue-50/50 transition-all"
              >
                <Github size={16} />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
                className="w-9 h-9 rounded-full bg-[#F7FAFF] border border-[#E4ECF7] flex items-center justify-center text-[#64748B] hover:text-[#1677FF] hover:border-blue-300 hover:bg-blue-50/50 transition-all"
              >
                <Twitter size={16} />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.socials.email}
                aria-label="Direct Email"
                className="w-9 h-9 rounded-full bg-[#F7FAFF] border border-[#E4ECF7] flex items-center justify-center text-[#64748B] hover:text-[#1677FF] hover:border-blue-300 hover:bg-blue-50/50 transition-all"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}