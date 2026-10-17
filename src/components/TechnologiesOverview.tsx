'use client';

import { motion, useReducedMotion } from 'framer-motion';

export interface SkillItem {
  name: string;
  percentage: number;
}

export interface SkillGroup {
  id: string;
  title: string;
  desc: string;
  skills: SkillItem[];
}

export default function TechnologiesOverview() {
  const shouldReduceMotion = useReducedMotion();

  // Configurable skills dataset preserving all six categories, descriptions & skills
  const skillGroups: SkillGroup[] = [
    {
      id: 'enterprise-erp',
      title: 'Enterprise ERP & Governance',
      desc: 'Architecting multi-tenant business workflows, role-based access security, and corporate data pipelines.',
      skills: [
        { name: 'HRMS Modules', percentage: 95 },
        { name: 'Automated Payroll Engine', percentage: 94 },
        { name: 'CRM Pipelines', percentage: 90 },
        { name: 'Multi-Tenant RBAC', percentage: 96 },
        { name: 'JWT Authentication', percentage: 95 },
        { name: 'Attendance Geo-Fencing', percentage: 92 },
        { name: 'Financial Ledgers', percentage: 88 },
      ],
    },
    {
      id: 'frontend-web',
      title: 'Frontend & Modern Web',
      desc: 'Engineering fast, accessible, and search-optimized user interfaces with fluid interaction design.',
      skills: [
        { name: 'Next.js 15 (App Router)', percentage: 96 },
        { name: 'React.js', percentage: 95 },
        { name: 'TypeScript', percentage: 94 },
        { name: 'Tailwind CSS', percentage: 96 },
        { name: 'Framer Motion', percentage: 88 },
        { name: 'Responsive Architecture', percentage: 95 },
        { name: 'State Management', percentage: 92 },
      ],
    },
    {
      id: 'backend-db',
      title: 'Backend & Database Systems',
      desc: 'Designing resilient REST microservices, transactional relational schemas, and secure API layers.',
      skills: [
        { name: 'Node.js', percentage: 92 },
        { name: 'PostgreSQL', percentage: 94 },
        { name: 'Prisma ORM', percentage: 92 },
        { name: 'RESTful APIs', percentage: 96 },
        { name: 'MySQL', percentage: 90 },
        { name: 'Supabase', percentage: 88 },
        { name: 'Row-Level Security', percentage: 92 },
      ],
    },
    {
      id: 'mobile-iot',
      title: 'Mobile & IoT Telemetry',
      desc: 'Building cross-platform mobile applications paired with real-time Bluetooth sensor telemetry.',
      skills: [
        { name: 'Flutter', percentage: 90 },
        { name: 'Dart', percentage: 88 },
        { name: 'Progressive Web Apps (PWA)', percentage: 92 },
        { name: 'BLE Sensor Sync', percentage: 86 },
        { name: 'IoT Telemetry', percentage: 88 },
        { name: 'Firebase Cloud Messaging', percentage: 90 },
      ],
    },
    {
      id: 'seo-perf',
      title: 'Technical SEO & Performance',
      desc: 'Optimizing crawl budgets, structured JSON-LD schema microdata, and achieving top Google PageSpeed.',
      skills: [
        { name: 'Google Lighthouse', percentage: 98 },
        { name: 'JSON-LD Schema Markup', percentage: 96 },
        { name: 'Core Web Vitals (LCP/CLS)', percentage: 94 },
        { name: 'Crawl Budget Audits', percentage: 90 },
        { name: 'Search Console Indexing', percentage: 95 },
      ],
    },
    {
      id: 'agile-delivery',
      title: 'Agile Delivery & Leadership',
      desc: 'Directing development cycles, sprint backlogs, code reviews, quality standards, and stakeholder demos.',
      skills: [
        { name: 'Agile / Scrum Sprints', percentage: 95 },
        { name: 'Jira Backlog Grooming', percentage: 94 },
        { name: 'Code Reviews & Standards', percentage: 95 },
        { name: 'Sprint Retrospectives', percentage: 92 },
        { name: 'Production Handover', percentage: 94 },
      ],
    },
  ];

  // Balanced 2-column layout (3 groups per column on desktop/tablet)
  const leftColumnGroups = skillGroups.slice(0, 3);
  const rightColumnGroups = skillGroups.slice(3, 6);

  return (
    <section id="technologies" className="py-20 sm:py-28 bg-white border-b border-slate-200/80 text-slate-900 relative overflow-hidden">
      <div id="skills" className="sr-only" />

      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-500/[0.03] rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        {/* Main Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-display">
            Technical Skills
          </h2>
          {/* Subtle horizontal blue divider */}
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            A comprehensive, production-verified overview of core programming languages, database architectures, and engineering competencies.
          </p>
        </div>

        {/* Two Balanced Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-14 lg:gap-16 items-start">
          {/* Left Column (Groups 1, 2, 3) */}
          <div className="space-y-12 sm:space-y-14">
            {leftColumnGroups.map((group) => (
              <div key={group.id} className="space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-display">
                    {group.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {group.desc}
                  </p>
                </div>

                <div className="space-y-4 pt-1">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs sm:text-sm">
                        <span className="text-slate-800 font-semibold">{skill.name}</span>
                        <span className="text-blue-600 font-bold tabular-nums">{skill.percentage}%</span>
                      </div>
                      <div
                        className="w-full bg-slate-100 border border-slate-200/80 h-2 sm:h-2.5 rounded-full overflow-hidden"
                        role="progressbar"
                        aria-valuenow={skill.percentage}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${skill.name} proficiency: ${skill.percentage}%`}
                      >
                        <motion.div
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: shouldReduceMotion ? 0 : 1.0,
                            ease: 'easeOut',
                            delay: 0.1,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (Groups 4, 5, 6) */}
          <div className="space-y-12 sm:space-y-14">
            {rightColumnGroups.map((group) => (
              <div key={group.id} className="space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-display">
                    {group.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {group.desc}
                  </p>
                </div>

                <div className="space-y-4 pt-1">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs sm:text-sm">
                        <span className="text-slate-800 font-semibold">{skill.name}</span>
                        <span className="text-blue-600 font-bold tabular-nums">{skill.percentage}%</span>
                      </div>
                      <div
                        className="w-full bg-slate-100 border border-slate-200/80 h-2 sm:h-2.5 rounded-full overflow-hidden"
                        role="progressbar"
                        aria-valuenow={skill.percentage}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${skill.name} proficiency: ${skill.percentage}%`}
                      >
                        <motion.div
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: shouldReduceMotion ? 0 : 1.0,
                            ease: 'easeOut',
                            delay: 0.1,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
