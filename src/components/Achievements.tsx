'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Trophy, Star, Target, Sparkles, CheckCircle2 } from 'lucide-react';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const achievements = [
    {
      icon: Trophy,
      title: 'Academic Excellence',
      description: 'B.Tech in Computer Science & Engineering',
      detail: '8.08 CGPA',
      meta: 'Calicut University',
    },
    {
      icon: Award,
      title: 'Research Publication',
      description: 'NeuVitX Health System Presentation',
      detail: 'ICETI4T 2025',
      meta: 'Peer-Reviewed Conference',
    },
    {
      icon: Star,
      title: 'NSS Social Leadership',
      description: 'Dream House Humanitarian Coordinator',
      detail: '5 Houses Built',
      meta: 'Community Impact',
    },
    {
      icon: Target,
      title: 'Enterprise Architecture',
      description: 'Hirush ERP & Full-Stack Systems',
      detail: 'Modular Architecture',
      meta: 'Production Verified',
    },
  ];

  return (
    <section id="achievements" className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-[#FAFAFB] border-t border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 flex flex-col items-center text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-slate-200 rounded-full shadow-xs mb-4">
            <Sparkles size={13} className="text-blue-600" />
            <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
              Verified Milestones
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-3">
            Academic & Professional Impact
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
            A track record of disciplined engineering execution, academic rigor, peer-reviewed research, and community leadership.
          </p>
        </motion.div>

        {/* Achievements Grid: Perfectly balanced 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="relative group p-6 sm:p-7 bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-blue-600 transition-all duration-300 shadow-sm">
                  <item.icon size={22} />
                </div>
                
                <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-1.5 tracking-tight group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 text-xs sm:text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-slate-950 font-extrabold text-xs sm:text-sm tracking-wide bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/70">
                  {item.detail}
                </span>
                <span className="text-[11px] font-semibold text-slate-500">
                  {item.meta}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;