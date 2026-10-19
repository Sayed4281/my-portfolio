'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CollaborationCTAProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CollaborationCTA({
  badge = "LET'S WORK TOGETHER",
  title = "Have a project in mind?",
  subtitle = "I'm always open to new opportunities, collaborations and interesting projects. Feel free to reach out!",
  buttonText = "Get In Touch",
  buttonHref = "/contact",
}: CollaborationCTAProps) {
  return (
    <section className="py-8 sm:py-12 bg-white relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-r from-[#EFF6FF] via-[#F5F9FF] to-[#EBF3FF] border border-[#DDE8F8] p-6 sm:p-10 lg:p-12 shadow-[0_10px_35px_-8px_rgba(22,119,255,0.08)]"
        >
          {/* Subtle Ambient Decorative Circles */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-blue-200/60 text-[#1677FF] text-xs font-bold tracking-wider uppercase shadow-2xs">
                <span className="text-[10px]">◆</span>
                <span>{badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-extrabold text-[#101B3C] tracking-tight leading-tight">
                {title.includes('project') ? (
                  <>
                    Have a <span className="text-[#1677FF]">Project</span> in Mind?
                  </>
                ) : (
                  title
                )}
              </h2>

              <p className="text-[#64748B] text-sm sm:text-base max-w-xl leading-relaxed">
                {subtitle}
              </p>

              <div className="pt-2">
                <Link
                  href={buttonHref}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white font-semibold text-sm btn-gradient group"
                >
                  <span>{buttonText}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Visual: Paper Plane with Dotted Trail and Handwritten Note */}
            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end min-h-[160px]">
              <div className="relative w-full max-w-[280px]">
                {/* SVG Loop Trail and Paper Plane */}
                <svg
                  viewBox="0 0 260 140"
                  className="w-full h-auto overflow-visible"
                  fill="none"
                >
                  {/* Dashed trail */}
                  <path
                    d="M10,120 Q60,130 90,95 T130,50 Q160,30 200,45"
                    stroke="#93C5FD"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    fill="none"
                  />
                  {/* Additional loop */}
                  <path
                    d="M80,105 C110,80 130,120 150,90"
                    stroke="#BFDBFE"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                    fill="none"
                  />
                </svg>

                {/* Floating Paper Plane Icon */}
                <motion.div
                  animate={{ y: [0, -6, 0], rotate: [0, 2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-2 right-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#1677FF] to-[#6945FF] p-3 text-white shadow-xl shadow-blue-500/25 flex items-center justify-center transform rotate-12">
                    <svg viewBox="0 0 24 24" className="w-9 h-9 fill-current" stroke="none">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                  </div>
                </motion.div>

                {/* Handwritten Callout */}
                <div className="absolute -top-4 right-0 lg:-right-4 transform rotate-6 select-none pointer-events-none">
                  <div className="font-handwritten text-xl sm:text-2xl text-[#1677FF] font-bold tracking-wide drop-shadow-sm flex items-center gap-1">
                    <span>Let&apos;s Create Something Great!</span>
                    <span className="text-xl">↗</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
