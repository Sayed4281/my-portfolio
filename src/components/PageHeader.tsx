'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  highlightText?: string;
  subtitle: string;
  badge: string;
  icon?: React.ReactNode;
  highlights?: string[];
  sideCard?: React.ReactNode;
}

export default function PageHeader({
  title,
  highlightText,
  subtitle,
  badge,
  icon,
  highlights,
  sideCard,
}: PageHeaderProps) {
  // If no explicit highlightText is provided, split the title to accent the last words
  const words = title.split(' ');
  const mainTitle = highlightText 
    ? title 
    : (words.length > 3 ? words.slice(0, -2).join(' ') : words.slice(0, -1).join(' '));
  const gradientTitle = highlightText 
    ? highlightText 
    : (words.length > 3 ? words.slice(-2).join(' ') : words.slice(-1).join(' '));

  return (
    <div className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 overflow-hidden border-b border-slate-200/90 bg-gradient-to-b from-white via-slate-50/80 to-[#F8FAFC]">
      {/* Decorative Ambient Mesh Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[360px] bg-gradient-to-r from-blue-500/12 via-indigo-500/10 to-cyan-500/12 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-blue-400/8 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-indigo-400/8 rounded-full blur-[90px] pointer-events-none" />

      {/* Grid Pattern with Fade Mask */}
      <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Bottom Accent Gradient Streak */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className={`grid grid-cols-1 ${sideCard ? 'lg:grid-cols-12 gap-8 lg:gap-12 items-center' : 'max-w-4xl'}`}>
          
          {/* Main Left Content */}
          <div className={sideCard ? 'lg:col-span-7 space-y-4' : 'space-y-4'}>
            {/* Glowing Category Badge (No breadcrumb) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-50 via-indigo-50/70 to-blue-50 border border-blue-200/90 text-blue-800 text-xs font-bold shadow-2xs backdrop-blur-md mb-2"
            >
              <span className="p-1 rounded-full bg-white shadow-2xs text-blue-600">
                {icon || <Sparkles size={12} />}
              </span>
              <span>{badge}</span>
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600"></span>
              </span>
            </motion.div>

            {/* Page Main Headline with Dynamic Gradient Highlight */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-[52px] font-black text-slate-900 tracking-tight font-display leading-[1.14]"
            >
              {mainTitle}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
                {gradientTitle}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal pt-1"
            >
              {subtitle}
            </motion.p>

            {/* Quick Highlight Pills */}
            {highlights && highlights.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-3"
              >
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 border border-slate-200/90 shadow-2xs text-[11px] sm:text-xs font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50/30 transition-all duration-200"
                  >
                    <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Right Side Column (Side Card) */}
          {sideCard && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="lg:col-span-5 w-full mt-6 lg:mt-0"
            >
              {sideCard}
            </motion.div>
          )}

        </div>
      </div>
    </div>
  );
}
