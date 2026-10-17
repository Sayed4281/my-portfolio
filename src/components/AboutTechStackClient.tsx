'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TechItem {
  name: string;
  category: string;
  icon?: string;
}

interface AboutTechStackClientProps {
  techStack: TechItem[];
}

export default function AboutTechStackClient({ techStack }: AboutTechStackClientProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Frontend',
    'Backend',
    'Databases',
    'SEO & Optimization',
    'Tools',
    'Cloud & Deployment'
  ];

  const getTechIcon = (name: string, iconKey?: string) => {
    const key = (iconKey || name).toLowerCase();

    switch (key) {
      case 'react':
        return (
          <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200/70 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 115.3 100" fill="#0284C7">
              <path d="M57.7 0C25.8 0 0 22.4 0 50s25.8 50 57.7 50 57.7-22.4 57.7-50S89.5 0 57.7 0zm0 88.5c-21.2 0-38.5-17.2-38.5-38.5S36.5 11.5 57.7 11.5 96.2 28.8 96.2 50 78.9 88.5 57.7 88.5z" />
              <circle cx="57.7" cy="50" r="14" fill="#0284C7" />
            </svg>
          </div>
        );
      case 'next.js':
      case 'nextjs':
        return (
          <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-300 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 180 180" fill="none">
              <circle cx="90" cy="90" r="90" fill="#0F172A" />
              <path d="M149.508 157.08L69.142 54H54V125.842H66.697V68.796L139.73 162.774C143.123 161.047 146.393 159.138 149.508 157.08Z" fill="white" />
              <path d="M115.258 54H127.955V107.083L115.258 90.963V54Z" fill="white" />
            </svg>
          </div>
        );
      case 'typescript':
        return (
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0">
            <div className="w-6 h-6 rounded bg-[#3178C6] text-white font-bold text-[11px] flex items-center justify-center font-mono shadow-xs">
              TS
            </div>
          </div>
        );
      case 'javascript':
        return (
          <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
            <div className="w-6 h-6 rounded bg-[#F7DF1E] text-black font-extrabold text-[11px] flex items-center justify-center font-mono shadow-xs">
              JS
            </div>
          </div>
        );
      case 'tailwind css':
      case 'tailwind':
        return (
          <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#06B6D4">
              <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
            </svg>
          </div>
        );
      case 'node.js':
      case 'nodejs':
        return (
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 256 289" fill="#16A34A">
              <path d="M128 0L256 73.9V215.1L128 289L0 215.1V73.9L128 0Z" />
            </svg>
          </div>
        );
      case 'express.js':
      case 'express':
        return (
          <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
            <div className="w-6 h-6 rounded bg-slate-800 text-white font-bold text-[10px] flex items-center justify-center font-mono">
              ex
            </div>
          </div>
        );
      case 'python':
        return (
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#387EB8" d="M11.9 1C6.7 1 7.1 3.2 7.1 3.2v2.3h4.9v.7H5.2S2 5.8 2 11c0 5.1 2.8 5 2.8 5h1.7v-2.3s-.1-2.8 2.8-2.8h4.7s2.7 0 2.7-2.7V3.8s.5-2.8-4.8-2.8zm-1.4 1.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" />
              <path fill="#FFE052" d="M12.1 23c5.2 0 4.8-2.2 4.8-2.2v-2.3H12v-.7h6.8s3.2.4 3.2-4.8c0-5.1-2.8-5-2.8-5h-1.7v2.3s.1 2.8-2.8 2.8H10s-2.7 0-2.7 2.7v4.4s-.5 2.8 4.8 2.8zm1.4-1.5c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" />
            </svg>
          </div>
        );
      case 'firebase':
        return (
          <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#F59E0B">
              <path d="M4.6 18.2L9.2 4.1c.2-.7 1.2-.7 1.4 0l2.3 8.3L4.6 18.2zM19.4 18.2l-2.4-14c-.1-.7-1.1-.9-1.4-.3l-8.4 14.3h12.2zM3.4 19.8l1.4-2.4 7.2 4.2c.6.3 1.3.3 1.9 0l7.2-4.2 1.4 2.4c.5.8-.1 1.8-1 1.8H4.4c-.9 0-1.5-1-1-1.8z" />
            </svg>
          </div>
        );
      case 'postgresql':
        return (
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#336791">
              <path d="M12 3c-4.42 0-8 1.79-8 4v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.43 6 2s-2.13 2-6 2-6-1.43-6-2 2.13-2 6-2zm6 12c0 .57-2.13 2-6 2s-6-1.43-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V17zm0-4c0 .57-2.13 2-6 2s-6-1.43-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V13z" />
            </svg>
          </div>
        );
      case 'mongodb':
        return (
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#15803D">
              <path d="M12 2C12 2 6 7 6 13C6 16.31 8.69 19 12 19C15.31 19 18 16.31 18 13C18 7 12 2 12 2Z" />
            </svg>
          </div>
        );
      case 'supabase':
        return (
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M13.4 2L3 14.5h7.6L9.6 22l10.4-12.5h-7.6L13.4 2z" fill="#10B981" />
            </svg>
          </div>
        );
      case 'technical seo':
      case 'seo':
        return (
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <path d="M11 8l2 2-2 2" />
            </svg>
          </div>
        );
      case 'google search console':
      case 'gsc':
        return (
          <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M3 13h4v8H3v-8zm7-6h4v14h-4V7zm7-4h4v18h-4V3z" fill="#4285F4" />
              <path d="M3 17l7-6 4 3 7-8" stroke="#34A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        );
      case 'google business profile':
      case 'gbp':
        return (
          <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335" />
              <circle cx="12" cy="9" r="2.5" fill="white" />
            </svg>
          </div>
        );
      case 'git':
        return (
          <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#EA580C">
              <path d="M2.59,10.59L10.59,2.59C11.37,1.81 12.63,1.81 13.41,2.59L21.41,10.59C22.19,11.37 22.19,12.63 21.41,13.41L13.41,21.41C12.63,22.19 11.37,22.19 10.59,21.41L2.59,13.41C1.81,12.63 1.81,11.37 2.59,10.59Z" />
            </svg>
          </div>
        );
      case 'figma':
        return (
          <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M8 3h4v4H8a2 2 0 110-4z" fill="#F24E1E" />
              <path d="M12 3h4a2 2 0 110 4h-4V3z" fill="#FF7262" />
              <path d="M8 7h4v4H8a2 2 0 110-4z" fill="#A259FF" />
              <circle cx="14" cy="9" r="2" fill="#1ABCFE" />
              <path d="M8 11h4v4H8a2 2 0 110-4z" fill="#0ACF83" />
            </svg>
          </div>
        );
      case 'docker':
        return (
          <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0284C7">
              <path d="M2 13.5c0-1.9 1.5-3.5 3.5-3.5h1.2v-1.2c0-1.9 1.5-3.5 3.5-3.5h1.6V3.8c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8v1.5h1.6c1.9 0 3.5 1.6 3.5 3.5v1.2h1.2c1.9 0 3.5 1.6 3.5 3.5 0 4.7-3.8 8.5-8.5 8.5H10.5C5.8 22 2 18.2 2 13.5z" />
            </svg>
          </div>
        );
      case 'vercel':
        return (
          <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-300 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0F172A">
              <path d="M12 1L24 22H0L12 1Z" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-blue-200 flex items-center justify-center font-bold text-xs text-[#1677FF] shrink-0">
            {name.slice(0, 2).toUpperCase()}
          </div>
        );
    }
  };

  const filteredTech = techStack.filter((tech) => {
    if (activeCategory === 'All') return true;
    return tech.category === activeCategory;
  });

  const getCategoryCount = (cat: string) => {
    if (cat === 'All') return techStack.length;
    return techStack.filter((t) => t.category === cat).length;
  };

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex items-center flex-wrap gap-2 sm:gap-2.5 mb-8">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          const count = getCategoryCount(cat);
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                isActive
                  ? 'bg-[#1677FF] text-white shadow-md shadow-blue-500/25 ring-2 ring-[#1677FF]/20'
                  : 'bg-white border border-[#E4ECF7] text-[#64748B] hover:text-[#101B3C] hover:border-blue-300 hover:bg-slate-50'
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-[#64748B]'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Interactive Tech Cards Grid */}
      <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <AnimatePresence>
          {filteredTech.map((tech) => (
            <motion.div
              layout
              key={tech.name}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              title={`${tech.name} — ${tech.category}`}
              className="group bg-white border border-[#E4ECF7] hover:border-[#1677FF] rounded-2xl p-4 flex items-center gap-3.5 shadow-xs hover:shadow-[0_10px_24px_rgba(22,119,255,0.10)] hover:-translate-y-1.5 transition-all duration-250 cursor-default"
            >
              <div className="group-hover:scale-110 transition-transform duration-250">
                {getTechIcon(tech.name, tech.icon)}
              </div>
              <div className="min-w-0">
                <span className="font-heading font-extrabold text-sm text-[#101B3C] block truncate group-hover:text-[#1677FF] transition-colors">
                  {tech.name}
                </span>
                <span className="text-[10px] text-[#64748B] font-medium block truncate">
                  {tech.category}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

