'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Calendar, CheckCircle2, Sparkles, Building2 } from 'lucide-react';

interface WorkExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  isCurrent?: boolean;
  description: string;
  highlights: string[];
  skills: string[];
}

const Experience = () => {
  const experiences: WorkExperience[] = [
    {
      title: 'Jr. Software Engineer',
      company: 'Hirush Global LLP',
      location: 'Malappuram, Kerala',
      period: 'Nov 2025 – Present',
      type: 'Full-time',
      isCurrent: true,
      description: 'Leading and contributing to the technical planning, architecture, development, and implementation of Hirush ERP system modules. Coordinating sprint backlogs, leading code reviews, and managing stakeholder delivery.',
      highlights: [
        'Architected & delivered core Hirush ERP modules: HRMS, automated payroll, CRM pipelines, attendance, and multi-tenant RBAC',
        'Managing dev team tasks, sprint backlogs, daily standups, and code quality audits',
        'Bridging stakeholder business workflows with technical execution and UAT release sign-offs',
      ],
      skills: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Sprint Leadership', 'RBAC Security'],
    },
    {
      title: 'Software Developer',
      company: 'Pro26 LLP',
      location: 'Remote',
      period: 'May 2025 – Present',
      type: 'Part-time',
      isCurrent: true,
      description: 'Developing high-performance responsive web applications and cross-platform mobile apps with Flutter. Optimizing frontend state management, design systems, and backend API integration layers.',
      highlights: [
        'Engineered responsive, fluid component systems and cross-platform Flutter layouts',
        'Integrated real-time Firebase backend services, authentication flows, and RESTful APIs',
      ],
      skills: ['React.js', 'Flutter', 'TypeScript', 'Firebase', 'State Management', 'REST APIs'],
    },
    {
      title: 'SEO Analyst',
      company: 'Hirush Global LLP',
      location: 'Malappuram, Kerala',
      period: 'Feb 2025 – Nov 2025',
      type: 'Full-time / Strategy',
      isCurrent: false,
      description: 'Executed technical SEO audits, search engine indexability strategies, structured JSON-LD schema markup, keyword architecture, and Core Web Vitals optimization.',
      highlights: [
        'Boosted organic search indexability and Core Web Vitals scores across production web systems',
        'Engineered rich JSON-LD microdata schemas and optimized sub-second Largest Contentful Paint (LCP)',
      ],
      skills: ['Technical SEO', 'Schema JSON-LD', 'Google Search Console', 'Core Web Vitals', 'Lighthouse 98+'],
    },
    {
      title: 'Application Manager',
      company: 'Eduthalim International Educational Consultancy',
      location: 'Manjeri, Kerala',
      period: 'Aug 2025 – Oct 2025',
      type: 'Contract / Full-time',
      isCurrent: false,
      description: 'Supervised software application deployments, performed functional requirements gathering, and bridged communication between engineering teams and operational stakeholders.',
      highlights: [
        'Managed application deployment schedules, stakeholder feedback, and change requests',
        'Facilitated User Acceptance Testing (UAT) sessions and system readiness checks before go-live',
      ],
      skills: ['Application Management', 'Requirements Gathering', 'Stakeholder Coordination', 'UAT Testing'],
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 relative bg-gradient-to-b from-white via-slate-50/60 to-white border-b border-slate-200/80 overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-3/4 -right-24 w-80 h-80 bg-indigo-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-3 shadow-2xs">
              <Briefcase size={13} className="text-blue-600" />
              <span>Career Journey &amp; Milestones</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-display">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">Experience</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
              Proven track record in technical leadership, full-stack software development, sprint coordination, and enterprise ERP systems.
            </p>
          </motion.div>
        </div>

        {/* Structured Linear Timeline Stream */}
        <div className="relative pl-6 sm:pl-10 md:pl-12 border-l-2 border-slate-200 space-y-10 sm:space-y-14 ml-2 sm:ml-6 md:ml-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[55px] top-6 w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                {exp.isCurrent ? (
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                ) : (
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-blue-600" />
                )}
              </div>

              {/* Experience Card */}
              <div className="rounded-3xl bg-white border border-slate-200/90 hover:border-blue-400 p-6 sm:p-8 shadow-xs hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 relative overflow-hidden">
                {/* Top Subtle Gradient Accent Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Top Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-2xl font-black text-slate-900 font-display group-hover:text-blue-600 transition-colors">
                      {exp.title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-slate-600 mt-1.5">
                      <span className="inline-flex items-center gap-1.5 text-blue-700 font-bold">
                        <Building2 size={14} className="text-blue-600" />
                        <span>{exp.company}</span>
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="inline-flex items-center gap-1 text-slate-500">
                        <MapPin size={13} className="text-slate-400" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Period & Employment Badges */}
                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-1.5 shrink-0">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold ${
                      exp.isCurrent 
                        ? 'bg-emerald-50 border border-emerald-200 text-emerald-700' 
                        : 'bg-blue-50 border border-blue-200 text-blue-700'
                    }`}>
                      <Calendar size={11} />
                      <span>{exp.period}</span>
                    </span>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 text-[10px] font-bold uppercase tracking-wider">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Executive Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Key Deliverables & Responsibilities */}
                <div className="mb-6 space-y-2.5">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Key Deliverables &amp; Achievements
                  </span>
                  <div className="space-y-2">
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50/80 hover:bg-blue-50/40 p-2.5 sm:p-3 rounded-xl border border-slate-100 transition-colors">
                        <CheckCircle2 size={15} className="text-blue-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Technologies &amp; Domain Expertise
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-[11px] font-semibold text-slate-700 bg-slate-100/90 border border-slate-200 rounded-lg hover:border-blue-300 hover:text-blue-700 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
