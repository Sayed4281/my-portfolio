'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Github, 
  Play,
  Layers
} from 'lucide-react';
import { ProjectItem } from '@/data/portfolioData';

interface ProjectsClientViewProps {
  initialProjects: ProjectItem[];
}

export default function ProjectsClientView({ initialProjects }: ProjectsClientViewProps) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterTabs = [
    'All',
    'Enterprise Systems',
    'Web Applications',
    'AI & SaaS'
  ];

  const filteredProjects = initialProjects.filter((p) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Enterprise Systems') return p.category === 'Enterprise Systems';
    if (activeFilter === 'Web Applications') return p.category === 'Web Applications';
    if (activeFilter === 'AI & SaaS') return p.category === 'AI & Research';
    return true;
  });

  return (
    <>
      {/* ============================================================== */}
      {/* 2. PROJECT FILTERS BAR                                         */}
      {/* ============================================================== */}
      <section className="py-6 sm:py-8 bg-white border-b border-[#E4ECF7]/60">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex items-center flex-wrap gap-2.5 sm:gap-3">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    isActive
                      ? 'bg-[#1677FF] text-white shadow-md shadow-blue-500/25 scale-[1.02]'
                      : 'bg-[#F0F5FF] text-[#64748B] hover:text-[#101B3C] hover:bg-[#E4ECF7]'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. PROJECT GRID — DIRECT INQUIRY VIA CONTACT FORM              */}
      {/* ============================================================== */}
      <section className="py-8 sm:py-16 bg-[#F7FAFF] min-h-[500px]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#E4ECF7] p-8">
              <Layers size={40} className="mx-auto text-slate-400 mb-3" />
              <h3 className="font-heading font-bold text-lg text-[#101B3C]">
                No projects found in this category
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-1 mb-4">
                Try selecting &apos;All&apos; to view all enterprise and web projects.
              </p>
              <button
                onClick={() => setActiveFilter('All')}
                className="px-5 py-2 rounded-full bg-[#1677FF] text-white text-xs font-semibold"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="ref-card flex flex-col justify-between overflow-hidden group bg-white hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(16,27,60,0.08)] hover:border-blue-400 transition-all duration-300"
                  >
                    <div>
                      {/* Project Screenshot -> links directly to Contact Form */}
                      <Link
                        href="/contact"
                        className="block relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-[#E4ECF7] cursor-pointer"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top group-hover:scale-[1.035] transition-transform duration-500 ease-out"
                        />
                        <div className="absolute top-3 left-3 flex items-center gap-1.5">
                          <span className="px-3 py-0.5 rounded-full bg-blue-600/90 text-white text-[11px] font-bold shadow-xs">
                            {project.badgeCategory}
                          </span>
                        </div>
                      </Link>

                      {/* Card Body */}
                      <div className="p-6">
                        <Link
                          href="/contact"
                          className="block font-heading font-bold text-lg text-[#101B3C] mb-2 group-hover:text-[#1677FF] transition-colors cursor-pointer line-clamp-1"
                        >
                          {project.title}
                        </Link>

                        <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed line-clamp-2 mb-4">
                          {project.summary}
                        </p>

                        {/* Tech Stack Badges */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.technologies.slice(0, 5).map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-0.5 rounded-md bg-[#EFF6FF] text-[#1677FF] text-[11px] font-medium border border-blue-100"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions Footer */}
                    <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 pt-4">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1677FF] hover:text-[#2563EB] group/btn cursor-pointer"
                      >
                        <span>View Details</span>
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1.5 transition-transform duration-200" />
                      </Link>

                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#1677FF] transition-colors"
                        >
                          <Play size={13} className="fill-current text-[#1677FF]" />
                          <span>Live Demo</span>
                        </a>
                      ) : (
                        <a
                          href={project.github || 'https://github.com/Sayed4281'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
                        >
                          <Github size={13} />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
