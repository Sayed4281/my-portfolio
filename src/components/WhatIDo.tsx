'use client';

import { motion } from 'framer-motion';
import { 
  Boxes, 
  Code2, 
  LineChart, 
  FolderKanban, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const WhatIDo = () => {
  const services = [
    {
      id: 'erp-hrms',
      title: 'Enterprise ERP & HRMS Solutions',
      icon: Boxes,
      badge: 'Core Specialization',
      description: 'Architecting modular corporate systems that unify employee records, automated payroll calculation, multi-branch attendance, and role-based access.',
      deliverables: [
        'Automated Payroll & HRMS Engine',
        'GPS & Biometric Attendance Tracking',
        'Multi-Tenant Role-Based Access (RBAC)',
      ],
      technologies: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Prisma']
    },
    {
      id: 'web-engineering',
      title: 'Full-Stack Web Development',
      icon: Code2,
      badge: 'Modern Web Engineering',
      description: 'Engineering fast, responsive, and maintainable cloud applications with type-safe APIs, modern state management, and relational database schemas.',
      deliverables: [
        'Server-Side Rendered (SSR) Next.js Systems',
        'Type-Safe REST & GraphQL APIs',
        'Responsive, Mobile-First Design Systems',
      ],
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS']
    },
    {
      id: 'technical-seo',
      title: 'Technical SEO & Performance Engineering',
      icon: LineChart,
      badge: 'Search & Performance',
      description: 'Maximizing organic visibility through in-depth technical audits, rich JSON-LD structured schema markup, and sub-second Core Web Vitals optimization.',
      deliverables: [
        '98+ Google Lighthouse & Core Web Vitals',
        'JSON-LD Structured Schema Microdata',
        'Search Console & Crawl Budget Optimization',
      ],
      technologies: ['Technical SEO', 'Schema JSON-LD', 'Core Web Vitals']
    },
    {
      id: 'project-leadership',
      title: 'Technical Project Leadership & Delivery',
      icon: FolderKanban,
      badge: 'Sprint & Team Delivery',
      description: 'Leading engineering cycles through structured 2-week Agile sprints, architectural code reviews, daily unblocking, and guaranteed milestone delivery.',
      deliverables: [
        'Agile / Scrum Sprint & Backlog Planning',
        'Code Reviews, Security & Quality Standards',
        'Direct Stakeholder Demos & Production Handover',
      ],
      technologies: ['Agile / Scrum', 'Jira Backlogs', 'Sprint Milestones']
    }
  ];

  return (
    <section id="services-list" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-display text-slate-900 tracking-tight mb-3">
            What I Deliver to Businesses &amp; Clients
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            From strategic technical discovery to modular architecture and production deployment.
          </p>
        </div>

        {/* Minimal Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header with Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-2xs">
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-200/80">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5 font-display group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Concise Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* 3 Sharp Deliverables */}
                  <div className="space-y-2.5 mb-6">
                    {service.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with Minimal Tech Chips & Inquiry Link */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.map((t) => (
                      <span key={t} className="text-[10px] font-semibold text-slate-600 px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200/80">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors group/link shrink-0"
                  >
                    <span>Inquire</span>
                    <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhatIDo;

