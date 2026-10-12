'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderKanban, 
  LineChart, 
  Boxes, 
  Code2, 
  ShieldCheck, 
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface ServiceDetail {
  id: string;
  title: string;
  badge: string;
  icon: any;
  summary: string;
  problem: string;
  workInvolved: string[];
  deliverables: string[];
  methodsAndTech: string[];
  businessOutcome: string;
}

const WhatIDo = () => {
  const [expandedId, setExpandedId] = useState<string | null>('erp-hrms');

  const services: ServiceDetail[] = [
    {
      id: 'proj-coord',
      title: 'Technical Project Coordination and Delivery',
      badge: 'Execution & Governance',
      icon: FolderKanban,
      summary: 'Cross-functional engineering coordination, sprint orchestration, and proactive scope management to ensure on-time software release.',
      problem: 'Engineering teams often encounter scope creep, misaligned sprint targets, and fragmented communication between designers, developers, and business stakeholders.',
      workInvolved: [
        'Sprint backlog grooming and priority definition',
        'Developer task breakdown and dependency sequencing',
        'Daily standups and blocker resolution',
        'Milestone tracking and release readiness reviews'
      ],
      deliverables: [
        'Structured Sprint Backlogs & Velocity Reports',
        'Technical Dependency Maps',
        'Milestone Delivery Schedules'
      ],
      methodsAndTech: ['Agile / Scrum', 'Jira / GitHub Projects', 'Notion Workspaces', 'CI/CD Workflow Triggers'],
      businessOutcome: 'Predictable release cycles, reduced engineering bottlenecks, and transparent project progress for leadership.'
    },
    {
      id: 'ba-workflow',
      title: 'Business Analysis and Workflow Design',
      badge: 'Requirements Engineering',
      icon: LineChart,
      summary: 'Translating complex stakeholder business models and manual operational workflows into precise, actionable technical specifications.',
      problem: 'Ambiguous or undocumented business rules lead to expensive rework, developer assumptions, and systems that fail to reflect actual business operations.',
      workInvolved: [
        'In-depth stakeholder discovery sessions and operational interviews',
        'Business process mapping and state transition diagrams',
        'Functional requirements definition and edge-case documentation',
        'User story authoring with concrete acceptance criteria'
      ],
      deliverables: [
        'Business Requirements Documents (BRDs)',
        'Workflow State Diagrams (BPMN / Flowcharts)',
        'User Story Maps & Traceability Matrices'
      ],
      methodsAndTech: ['BPMN Modeling', 'Figma Wireframing', 'Requirements Traceability', 'Functional Logic Mapping'],
      businessOutcome: 'Clear alignment between business goals and codebase architecture, eliminating ambiguity before development begins.'
    },
    {
      id: 'erp-hrms',
      title: 'ERP and HRMS Application Development',
      badge: 'Enterprise Systems',
      icon: Boxes,
      summary: 'Modular enterprise architecture connecting workforce time-tracking, attendance, CRM pipelines, compensation, and audit ledgers.',
      problem: 'Businesses operate on disparate spreadsheets and disconnected SaaS tools that cause duplicate data entry, calculation errors, and zero unified reporting.',
      workInvolved: [
        'Relational database schema modeling for multi-entity businesses',
        'HRMS shift roster logic, leave accruals, and geofenced attendance',
        'CRM sales pipeline states and automated milestone invoicing',
        'Compensation calculation engines and double-entry ledger structures'
      ],
      deliverables: [
        'Modular Multi-Entity Web Application',
        'Relational PostgreSQL / Prisma Schemas',
        'Automated Invoice and Document Engines'
      ],
      methodsAndTech: ['Next.js (App Router)', 'PostgreSQL', 'Prisma ORM', 'TypeScript', 'Server Actions'],
      businessOutcome: 'A centralized operational platform tailored to business workflows, eliminating duplicate tools and manual data errors.'
    },
    {
      id: 'full-stack',
      title: 'Full-Stack Web Application Engineering',
      badge: 'Core Engineering',
      icon: Code2,
      summary: 'Production-ready web application engineering with responsive UI architectures, server-rendered components, and resilient APIs.',
      problem: 'Slow, poorly architected applications lead to poor user experiences, fragile state management, high maintenance overhead, and difficult scaling.',
      workInvolved: [
        'Server-side rendering and static pre-rendering optimization',
        'Component hierarchy design with strict TypeScript contracts',
        'RESTful API route handlers and server action workflows',
        'Cross-platform progressive web apps (PWAs) with offline caching'
      ],
      deliverables: [
        'Responsive, Accessible Web Applications',
        'Typed API Routes & Server Actions',
        'PWA Implementations with Service Workers'
      ],
      methodsAndTech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Service Workers / PWA'],
      businessOutcome: 'Fast, maintainable web systems that scale cleanly and deliver consistent experiences across desktop and mobile devices.'
    },
    {
      id: 'rbac-security',
      title: 'Authentication, RBAC, and Access-Control Design',
      badge: 'Security & Permissions',
      icon: ShieldCheck,
      summary: 'Fine-grained permission matrices, JWT authentication guards, and role-based access control protecting sensitive organizational records.',
      problem: 'Unprotected endpoints, insecure session tokens, and coarse permissions expose corporate data to unauthorized access and privilege escalation.',
      workInvolved: [
        'Role and permission matrix design across organization tiers',
        'JWT token issuance, verification, and HTTP-only cookie security',
        'Route middleware guards and component-level privilege gates',
        'Data-level branch scoping and immutable audit logging'
      ],
      deliverables: [
        'Role-Based Permission Matrix Specs',
        'Authentication Middleware & Guard Pipelines',
        'Administrative Access Management Panels'
      ],
      methodsAndTech: ['JWT Tokens', 'Next.js Middleware', 'Row-Level Security (RLS)', 'bcrypt / Argon2', 'Audit Logs'],
      businessOutcome: 'Strict operational data separation, granular employee privilege boundaries, and compliance-ready security safeguards.'
    },
    {
      id: 'qa-deployment',
      title: 'Testing, UAT, Deployment, and Production Support',
      badge: 'Quality & Support',
      icon: CheckCircle2,
      summary: 'Systematic functional quality assurance, formal user acceptance testing signoffs, zero-downtime deployments, and post-launch stability support.',
      problem: 'Unverified releases result in production outages, critical regression bugs, user frustration, and lack of rollback procedures.',
      workInvolved: [
        'Functional verification against documented acceptance criteria',
        'User Acceptance Testing (UAT) execution with stakeholders',
        'Staging and production deployment environment configuration',
        'Post-deployment health checks, error logging, and user support'
      ],
      deliverables: [
        'UAT Test Scripts & Sign-Off Checklists',
        'Production Deployment Configuration',
        'Operational Handover & Maintenance Guides'
      ],
      methodsAndTech: ['Vercel / Node Hosting', 'Post-Deployment Sanity Testing', 'Error Monitoring', 'Git Version Control'],
      businessOutcome: 'Stable software launches with verified business requirements and clear operational support post-deployment.'
    }
  ];

  return (
    <section id="what-i-do" className="py-16 sm:py-20 md:py-28 relative bg-[#FAFAFB] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-slate-200/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-slate-500 text-xs font-mono font-semibold tracking-[0.25em] uppercase mb-3 block">
              Enterprise Practice Areas
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-950 mb-4 tracking-tight">
              Six Core Service Capabilities
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Systematic software engineering and technical project leadership tailored for organizations requiring verified architectural depth and reliable delivery.
            </p>
          </motion.div>
        </div>

        {/* 6 Core Services Grid with Deep Detail Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="h-full flex flex-col"
              >
                <div
                  className={`bg-white border rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between h-full shadow-sm ${
                    isExpanded 
                      ? 'border-slate-950 ring-1 ring-slate-950/5 shadow-md' 
                      : 'border-slate-200/90 hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800">
                        <Icon size={20} />
                      </div>
                      <span className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-md text-[11px] font-mono text-slate-700 font-semibold">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-950 mb-2.5 font-display tracking-tight">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                      {service.summary}
                    </p>

                    {/* Problem Solved Snippet */}
                    <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl mb-5 text-xs">
                      <span className="text-[10px] font-mono font-bold uppercase text-slate-500 block mb-1">Problem Addressed:</span>
                      <p className="text-slate-700 leading-relaxed font-normal">{service.problem}</p>
                    </div>

                    {/* Expandable Deep Breakdown */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4 pt-4 border-t border-slate-100 text-xs overflow-hidden"
                        >
                          <div>
                            <span className="text-[10px] font-mono font-bold uppercase text-slate-500 block mb-1.5">Scope &amp; Work:</span>
                            <ul className="space-y-1 text-slate-600">
                              {service.workInvolved.map((w, idx) => (
                                <li key={idx} className="flex items-start gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                                  <span>{w}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <span className="text-[10px] font-mono font-bold uppercase text-slate-500 block mb-1.5">Deliverables:</span>
                            <ul className="space-y-1 text-slate-600">
                              {service.deliverables.map((d, idx) => (
                                <li key={idx} className="flex items-start gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                                  <span>{d}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <span className="text-[10px] font-mono font-bold uppercase text-slate-500 block mb-1.5">Technologies &amp; Methods:</span>
                            <div className="flex flex-wrap gap-1">
                              {service.methodsAndTech.map((t, idx) => (
                                <span key={idx} className="px-2 py-0.5 bg-slate-100 rounded text-[10px] font-mono text-slate-700">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="p-2.5 bg-blue-50/60 border border-blue-100 rounded-lg">
                            <span className="text-[10px] font-mono font-bold uppercase text-blue-900 block mb-0.5">Intended Outcome:</span>
                            <p className="text-slate-700 text-[11px] leading-relaxed">{service.businessOutcome}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Toggle Deep Dive Button */}
                  <div className="pt-4 mt-4 border-t border-slate-100">
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : service.id)}
                      className="w-full py-2 px-3 bg-slate-50 hover:bg-slate-100 rounded-xl text-xs font-bold text-slate-800 transition-colors flex items-center justify-between"
                    >
                      <span>{isExpanded ? 'Hide Specifications' : 'Inspect Scope & Deliverables'}</span>
                      <ChevronDown size={14} className={`transition-transform duration-200 ${isExpanded ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                    </button>
                  </div>
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
