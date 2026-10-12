'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import { 
  FolderKanban, 
  Boxes, 
  Code2, 
  Database, 
  Server, 
  ShieldCheck, 
  Users, 
  Target, 
  Zap, 
  Briefcase,
  Layers,
  Cpu,
  GitBranch,
  Terminal,
  Sparkles
} from 'lucide-react';

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: any;
  accent: string;
  skills: { name: string; level: string; featured?: boolean }[];
}

const Skills = () => {
  const [selectedDomain, setSelectedDomain] = useState<'All' | 'Architecture' | 'Engineering' | 'Leadership'>('All');

  const categories: SkillCategory[] = [
    {
      title: 'Enterprise Applications',
      subtitle: 'ERP, HRMS, CRM, and automated workflow systems',
      icon: Boxes,
      accent: 'blue',
      skills: [
        { name: 'Modular ERP Architecture', level: 'Production', featured: true },
        { name: 'HRMS & Shift Rostering', level: 'Production', featured: true },
        { name: 'CRM & Client Pipelines', level: 'Production', featured: true },
        { name: 'Geofenced GPS Attendance', level: 'Production', featured: true },
        { name: 'Automated Compensation Rules', level: 'Production' },
        { name: 'Double-Entry Ledger Modeling', level: 'Production' },
        { name: 'Audit Logging & Compliance', level: 'Production' }
      ]
    },
    {
      title: 'Frontend & Mobile Engineering',
      subtitle: 'React, Next.js, TypeScript, and cross-platform mobile',
      icon: Code2,
      accent: 'indigo',
      skills: [
        { name: 'Next.js (App Router)', level: 'Production', featured: true },
        { name: 'React.js', level: 'Production', featured: true },
        { name: 'TypeScript', level: 'Production', featured: true },
        { name: 'Tailwind CSS', level: 'Production', featured: true },
        { name: 'Flutter & Dart (Mobile)', level: 'Production' },
        { name: 'State Management (Zustand/Redux)', level: 'Production' },
        { name: 'Progressive Web Apps (PWA)', level: 'Production' }
      ]
    },
    {
      title: 'Backend Systems & APIs',
      subtitle: 'Node.js, REST APIs, and authentication pipelines',
      icon: Server,
      accent: 'purple',
      skills: [
        { name: 'Node.js & Express', level: 'Production', featured: true },
        { name: 'RESTful API Engineering', level: 'Production', featured: true },
        { name: 'JWT Authentication & Sessions', level: 'Production', featured: true },
        { name: 'Next.js Server Actions', level: 'Production' },
        { name: 'Python (FastAPI / ML Services)', level: 'Applied Research' },
        { name: 'API Rate Limiting & Webhooks', level: 'Production' }
      ]
    },
    {
      title: 'Databases & Infrastructure',
      subtitle: 'PostgreSQL, Prisma, Firebase, and Supabase',
      icon: Database,
      accent: 'amber',
      skills: [
        { name: 'PostgreSQL', level: 'Production', featured: true },
        { name: 'Prisma ORM', level: 'Production', featured: true },
        { name: 'Firebase Cloud & Firestore', level: 'Production', featured: true },
        { name: 'Supabase BaaS', level: 'Production' },
        { name: 'Relational Schema Design', level: 'Production' },
        { name: 'Data Migrations & Indexing', level: 'Production' }
      ]
    },
    {
      title: 'Security & Access Control',
      subtitle: 'RBAC, permissions, and secure API design',
      icon: ShieldCheck,
      accent: 'cyan',
      skills: [
        { name: 'Role-Based Access Control (RBAC)', level: 'Production', featured: true },
        { name: 'Multi-Tenant Permission Scoping', level: 'Production', featured: true },
        { name: 'Secure Session & Token Verification', level: 'Production', featured: true },
        { name: 'Input Validation & Sanitization', level: 'Production' },
        { name: 'API Route Guards & Middleware', level: 'Production' }
      ]
    },
    {
      title: 'Delivery & Quality Assurance',
      subtitle: 'Requirements, Git, testing, UAT, and deployment',
      icon: FolderKanban,
      accent: 'emerald',
      skills: [
        { name: 'Functional BRD Documentation', level: 'Production', featured: true },
        { name: 'Sprint Planning & Backlog Management', level: 'Production', featured: true },
        { name: 'User Acceptance Testing (UAT)', level: 'Production', featured: true },
        { name: 'Git & GitHub Version Control', level: 'Production', featured: true },
        { name: 'API Contract Testing (Postman)', level: 'Production' },
        { name: 'Vercel Deployment & Production Support', level: 'Production' }
      ]
    }
  ];

  const leadershipPrinciples = [
    { title: 'Cross-Functional Squad Leadership', desc: 'Guiding dev, design, and QA to deliver releases on schedule.', icon: Users },
    { title: 'BRD to Engineering Translation', desc: 'Turning ambiguous business needs into concrete technical tasks.', icon: Target },
    { title: 'Predictable Sprint Velocity', desc: 'Disciplined backlog grooming, timebox control, and risk reduction.', icon: Zap },
    { title: 'Enterprise Delivery Governance', desc: 'Rigorous UAT signoffs, change controls, and production readiness.', icon: Briefcase }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-28 relative overflow-hidden bg-white border-t border-slate-200/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-slate-100/60 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-100 border border-slate-200 rounded-full mb-4 shadow-2xs">
              <Sparkles size={13} className="text-blue-600" />
              <span className="text-[11px] font-bold text-slate-800 uppercase tracking-widest font-mono">
                Technical Mastery &amp; Expertise
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-950 mb-4 tracking-tight">
              Skills &amp; Technical Capabilities
            </h2>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              A comprehensive breakdown of enterprise architectures, full-stack engineering tools, and technical leadership methodologies applied in production environments.
            </p>
          </motion.div>
        </div>

        {/* 6 Balanced Category Cards (3 cols x 2 rows, Zero Gaps) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-16 sm:mb-20">
          {categories.map((category, catIndex) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.05 }}
                className="h-full flex"
              >
                <TiltCard className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between w-full shadow-sm group">
                  <div>
                    {/* Header */}
                    <div className="flex items-start gap-3.5 mb-5">
                      <div className="w-12 h-12 bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 shrink-0 shadow-2xs">
                        <Icon size={22} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base font-bold text-slate-950 leading-tight">
                          {category.title}
                        </h3>
                        <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                          {category.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Skills Pills with Level Badges */}
                    <div className="pt-4 border-t border-slate-100 space-y-2">
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <span 
                            key={skill.name}
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                              skill.featured 
                                ? 'bg-slate-900 text-white font-semibold shadow-2xs' 
                                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80'
                            }`}
                          >
                            <span>{skill.name}</span>
                            {skill.featured && (
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Metric Note */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span>{category.skills.length} Capabilities Verified</span>
                    <span className="text-slate-700 font-bold">Production Ready</span>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* Operational & Leadership Principles Bar */}
        <div className="max-w-7xl mx-auto pt-10 border-t border-slate-200">
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest block mb-2">
              Engineering Governance
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display tracking-tight">
              Strategic Principles &amp; Delivery DNA
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {leadershipPrinciples.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index }}
                  className="p-5 bg-slate-50 border border-slate-200/90 rounded-2xl hover:bg-white hover:border-slate-300 hover:shadow-md transition-all text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-800 mb-3.5 shadow-2xs">
                    <Icon size={18} />
                  </div>
                  <h4 className="font-bold text-sm text-slate-950 mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;