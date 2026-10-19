'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { WorkExperience, EducationItem } from '@/data/portfolioData';

interface AboutTimelineClientProps {
  workExperience: WorkExperience[];
  education: EducationItem[];
}

export default function AboutTimelineClient({ workExperience, education }: AboutTimelineClientProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="grid lg:grid-cols-12 gap-12 lg:gap-14">
      {/* Left: Professional Experience Timeline */}
      <div className="lg:col-span-7">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-blue-200 text-[#1677FF] text-xs font-bold tracking-wider uppercase mb-3">
            <span>◆</span>
            <span>Professional Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#101B3C] tracking-tight">
            My <span className="text-[#1677FF]">Journey</span>
          </h2>
          <p className="text-[#64748B] text-xs sm:text-sm mt-2">
            A timeline of my professional journey, key roles and achievements that shaped my growth as a developer.
          </p>
        </div>

        {/* Vertical Timeline with Progressive Reveal */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-200 space-y-10">
          {workExperience.map((exp, idx) => (
            <motion.div
              key={exp.company + exp.period}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05, margin: "100px 0px 0px 0px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative group"
            >
              {/* Highlighted Circle Node on entry */}
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 + 0.1 }}
                className="absolute -left-[31px] sm:-left-[39px] top-1 w-5 h-5 rounded-full bg-white border-4 border-[#1677FF] shadow-xs group-hover:scale-125 group-hover:border-[#2563EB] group-hover:shadow-[0_0_12px_rgba(22,119,255,0.4)] transition-all duration-300"
              />

              <div className="bg-white p-5 rounded-2xl border border-transparent hover:border-[#E4ECF7] hover:shadow-xs transition-all duration-200">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#101B3C] group-hover:text-[#1677FF] transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-semibold text-[#1677FF] bg-[#EFF6FF] px-2.5 py-0.5 rounded-full border border-blue-200/60">
                    {exp.period}
                  </span>
                </div>

                <div className="text-xs sm:text-sm font-semibold text-[#1677FF] mb-2">
                  {exp.company} • {exp.location}
                </div>

                <ul className="space-y-1.5 text-xs sm:text-[13px] text-[#64748B] leading-relaxed mb-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <span className="text-[#1677FF] text-xs leading-5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-[11px] font-medium text-slate-600 hover:border-blue-300 hover:text-[#1677FF] transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right: Education Cards */}
      <div className="lg:col-span-5 space-y-6">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-blue-200 text-[#1677FF] text-xs font-bold tracking-wider uppercase mb-3">
            <span>◆</span>
            <span>Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#101B3C] tracking-tight">
            My <span className="text-[#1677FF]">Education</span>
          </h2>
        </div>

        <div className="space-y-4">
          {education.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05, margin: "100px 0px 0px 0px" }}
              transition={{ duration: 0.45, delay: idx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="p-5 rounded-2xl bg-white border border-[#E4ECF7] shadow-2xs hover:shadow-md hover:border-blue-300 hover:-translate-y-1 transition-all duration-250 group"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-heading font-bold text-base text-[#101B3C] group-hover:text-[#1677FF] transition-colors">
                  {item.degree}
                </h3>
              </div>
              <p className="text-xs font-semibold text-[#1677FF] mb-1">
                {item.institution}
              </p>
              <div className="flex items-center justify-between text-xs text-[#64748B] mb-2 font-medium">
                <span>{item.period}</span>
                <span className="font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                  {item.grade}
                </span>
              </div>
              {item.description && (
                <p className="text-xs text-[#64748B] leading-relaxed pt-1 border-t border-slate-100">
                  {item.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
