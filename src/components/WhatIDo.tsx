'use client';

import { motion } from 'framer-motion';
import { 
  Boxes, 
  Code2, 
  LineChart, 
  FolderKanban, 
  CheckCircle2,
  Layers,
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
      problem: 'Organizations face fragmented data, manual payroll errors, cumbersome attendance logging, and lack of role-based security across departments.',
      solution: 'I architect, lead, and develop modular ERP systems that unify human resources, automated payroll computations, CRM pipelines, financial ledgers, and attendance into a single secure platform.',
      deliverables: [
        'Modular HRMS with employee records & onboarding',
        'Automated payroll calculation with deduction rules',
        'Biometric & GPS geo-fenced attendance tracking',
        'Multi-tenant Role-Based Access Control (RBAC)',
        'CRM lead management & pipeline tracking',
        'Executive financial reporting & audit trails'
      ],
      technologies: ['Next.js 15', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'JWT RBAC', 'Zustand']
    },
    {
      id: 'web-engineering',
      title: 'Full-Stack Web Development',
      icon: Code2,
      badge: 'Modern Web Engineering',
      problem: 'Slow, unscalable web apps with poor state management, brittle APIs, and low search engine indexability fail to convert visitors.',
      solution: 'I engineer fast, responsive, and maintainable web applications using Next.js, React, TypeScript, and relational databases adhering to modern web standards.',
      deliverables: [
        'Server-Side Rendered (SSR) & Static Next.js architectures',
        'Type-safe REST & GraphQL API integrations',
        'Responsive, accessible, mobile-first design systems',
        'Secure authentication & session governance',
        'Core Web Vitals & technical SEO optimization'
      ],
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'REST APIs']
    },
    {
      id: 'business-analysis',
      title: 'Business Analysis & Requirements Engineering',
      icon: LineChart,
      badge: 'Strategy & Discovery',
      problem: 'Development projects fail when business goals are vague, requirements are poorly documented, or clients and engineers misunderstand each other.',
      solution: 'I deconstruct complex business workflows into clear functional specifications, define scope boundaries, author comprehensive proposals, and oversee client UAT.',
      deliverables: [
        'Business process mapping & workflow diagrams',
        'Functional requirements & scope documentation (BRD/SRS)',
        'Commercial proposals & milestone effort estimates',
        'User Acceptance Testing (UAT) criteria & sign-off',
        'Stakeholder feedback reviews & backlog prioritization'
      ],
      technologies: ['Workflow Mapping', 'Scope Analysis', 'Technical Proposals', 'UAT Validation', 'BRD/SRS']
    },
    {
      id: 'project-leadership',
      title: 'Technical Project Leadership & Coordination',
      icon: FolderKanban,
      badge: 'Sprint & Team Delivery',
      problem: 'Engineering teams without technical direction experience scope creep, delayed sprints, uncoordinated tasks, and missed delivery deadlines.',
      solution: 'I lead cross-functional development cycles, manage Jira backlogs, facilitate daily standups, review code, unblock developers, and guarantee milestone delivery.',
      deliverables: [
        'Agile / Scrum sprint planning & backlog grooming',
        'Developer task allocation & daily blocker resolution',
        'Code reviews for quality, security, and standards',
        'Direct stakeholder communication & progress demos',
        'Post-launch production support & rollout readiness'
      ],
      technologies: ['Agile / Scrum', 'Jira / Trello', 'Sprint Backlogs', 'Code Reviews', 'Stakeholder Demos']
    }
  ];

  return (
    <section id="services-list" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-display text-slate-900 tracking-tight mb-3">
            What I Deliver to Businesses & Clients
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            From strategic business discovery to technical architecture and production deployment, here are the core services I provide.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 shadow-2xs">
                      <Icon size={24} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 font-display">
                    {service.title}
                  </h3>

                  <div className="space-y-3 mb-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <p>
                      <strong className="text-slate-900">The Problem:</strong> {service.problem}
                    </p>
                    <p>
                      <strong className="text-slate-900">My Solution:</strong> {service.solution}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                      Key Deliverables
                    </h4>
                    <div className="space-y-2">
                      {service.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 size={15} className="text-blue-600 shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="pt-4 border-t border-slate-100 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">Technologies Involved</span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.technologies.map((t) => (
                        <span key={t} className="text-[10px] font-semibold text-slate-700 px-2 py-0.5 rounded bg-slate-100 border border-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
                  >
                    <span>Inquire about this service</span>
                    <ArrowRight size={14} />
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
