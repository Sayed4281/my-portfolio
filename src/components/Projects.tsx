'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Layers, 
  Terminal, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight, 
  Sparkles, 
  Database, 
  Cpu, 
  Users, 
  Clock, 
  ExternalLink,
  ChevronRight,
  FolderGit2,
  Code2,
  Server,
  Zap,
  Globe,
  Activity,
  FileCode,
  LayoutGrid
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Enterprise ERP' | 'Web Systems' | 'AI & Research';
  role: string;
  period: string;
  overview: string;
  architectureDetails: string;
  highlights: string[];
  stack: string[];
  metrics: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
  accent: string;
}

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Enterprise ERP' | 'Web Systems' | 'AI & Research'>('All');
  const [activeFlagshipModule, setActiveFlagshipModule] = useState(0);
  const [activeFlagshipView, setActiveFlagshipView] = useState<'modules' | 'architecture' | 'security'>('modules');

  const flagshipModules = [
    {
      id: 'hrms',
      name: 'HRMS & Shift Automation',
      tag: 'Workforce Operations',
      desc: 'Real-time staff time-tracking, multi-shift rostering, overtime tracking, automated leave accrual calculations, and hierarchical manager approval queues.',
      tech: ['GPS Geofencing', 'Next.js Server Actions', 'PostgreSQL Cron', 'Prisma Schema'],
      status: 'Implemented & Active',
      statusBadge: 'Active'
    },
    {
      id: 'payroll',
      name: 'Automated Payroll Engine',
      tag: 'Compensation Logic',
      desc: 'Configurable compensation formula engine calculating base salary, deductions, allowances, statutory deductions, and generating PDF payslips.',
      tech: ['Dynamic Calculation Formulas', 'Deterministic Tax Slabs', 'PDF Generation Stream', 'ACID Transactions'],
      status: 'Development Phase',
      statusBadge: 'In Development'
    },
    {
      id: 'crm',
      name: 'CRM & Milestone Pipelines',
      tag: 'Revenue Cycles',
      desc: 'Customer onboarding pipeline, deal progression tracking, deliverable milestone signoffs, and automated recurring billing invoices.',
      tech: ['Kanban State Machine', 'Automated Invoicing', 'Client Milestone Signoff', 'Audit Logs'],
      status: 'Implemented & Active',
      statusBadge: 'Active'
    },
    {
      id: 'finance',
      name: 'Finance & Audit Ledgers',
      tag: 'Accounting & Compliance',
      desc: 'Double-entry accounting ledgers, income and expense classification, immutable transaction audit trails, and financial reconciliation exports.',
      tech: ['Double-Entry Accounting', 'Immutable Ledger Schema', 'CSV/Excel Exporters', 'Financial Reconciliation'],
      status: 'Planned Architecture',
      statusBadge: 'Planned'
    },
    {
      id: 'rbac',
      name: 'Multi-Tenant RBAC Governance',
      tag: 'Security & Access',
      desc: 'Fine-grained permission matrices controlling view, create, edit, and approval privileges across corporate branches and departments.',
      tech: ['JWT Claims & Session Guards', 'Row-Level Security (RLS)', 'Branch Scoping', 'Role Permission Matrix'],
      status: 'Implemented & Active',
      statusBadge: 'Active'
    }
  ];

  const projects: Project[] = [
    {
      id: 'resort-booking',
      title: 'Hospitality & Dynamic Booking Engine',
      tagline: 'High-concurrency room inventory, dynamic rate calendar, and automated invoicing.',
      category: 'Enterprise ERP',
      role: 'Full-Stack Developer',
      period: 'Production Delivery',
      overview: 'Engineered a modern web booking management system for luxury resort properties. Centralized live room availability, automated dynamic seasonal rate shifts, and eliminated manual paper booking registers.',
      architectureDetails: 'Engineered with optimistic UI locking and ACID transaction boundaries to prevent double-booking across concurrent front-desk and online guest reservations.',
      highlights: [
        'Real-time room occupancy calendar with multi-building grid layout',
        'Seasonal dynamic rate calculation engine with tax rules & discount coupons',
        'Automated booking confirmation PDF generation & payment webhook integration',
        'Front-desk check-in/check-out workflow with guest identity verification'
      ],
      stack: ['Next.js 14', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'Payment Webhooks', 'Tailwind CSS'],
      metrics: [
        { label: 'Concurrency', value: 'Optimistic Locking' },
        { label: 'Integrity', value: 'ACID Boundary' }
      ],
      accent: 'blue'
    },
    {
      id: 'workforce-pwa',
      title: 'Field Workforce Smart Attendance PWA',
      tagline: 'Geofenced biometric check-in with offline sync and supervisor notification queues.',
      category: 'Enterprise ERP',
      role: 'Frontend & Mobile Engineer',
      period: 'Production Deployment',
      overview: 'Offline-first Progressive Web Application designed for distributed on-site field staff. Enforces GPS perimeter boundaries before allowing check-in, syncing automatically once internet connectivity is restored.',
      architectureDetails: 'Leverages service worker background sync and IndexedDB offline persistence to guarantee attendance integrity even in zero-reception rural field areas.',
      highlights: [
        'GPS coordinates geofencing with adjustable meter radius verification',
        'Offline-first IndexedDB cache syncing with backend upon network detection',
        'Supervisor alert queue for late check-ins and unscheduled shift overrides'
      ],
      stack: ['React.js', 'TypeScript', 'PWA / Service Workers', 'IndexedDB', 'Firebase', 'GPS Geolocation API', 'Tailwind CSS'],
      metrics: [
        { label: 'Sync Architecture', value: 'Service Worker / IDB' },
        { label: 'Verification', value: 'GPS Radius Check' }
      ],
      accent: 'emerald'
    },
    {
      id: 'neuvitx-ai',
      title: 'NeuVitX — AI Health Diagnostics System',
      tagline: 'Hardware-software neural vitals classifier presented at ICETI4T 2025 conference.',
      category: 'AI & Research',
      role: 'Co-Author & Lead Developer',
      period: 'Published Research',
      overview: 'Peer-reviewed research presented at the ICETI4T 2025 international conference. Combines non-invasive biometric sensors with an edge machine learning classifier for real-time anomaly detection.',
      architectureDetails: 'Low-latency edge inference pipeline that parses raw sensor telemetry on microcontrollers and streams classified vital abnormalities via WebSocket companion apps.',
      highlights: [
        'Published in peer-reviewed ICETI4T 2025 conference proceedings',
        'Microcontroller hardware integration streaming live ECG, SpO2, and heart rate',
        'Cross-platform Flutter companion application for clinical monitoring and alerting'
      ],
      stack: ['Flutter', 'Python', 'FastAPI', 'TensorFlow Lite', 'IoT Sensors', 'Firebase Cloud', 'WebSockets'],
      metrics: [
        { label: 'Conference', value: 'ICETI4T 2025' },
        { label: 'Pipeline', value: 'Edge Telemetry' }
      ],
      accent: 'purple'
    },
    {
      id: 'haron-seo',
      title: 'SEO Strategist Digital Architecture Portal',
      tagline: 'High-performance digital portal with automated JSON-LD schema and semantic structure.',
      category: 'Web Systems',
      role: 'Frontend Engineer',
      period: 'Live Production',
      overview: 'Custom digital portal engineered for search discoverability, semantic entity markup, and lightweight page delivery across international regions.',
      architectureDetails: 'Pre-rendered static generation paired with edge caching and zero-layout-shift asset optimization to achieve near-instantaneous global TTFB.',
      highlights: [
        'Automated JSON-LD rich snippet schema integration',
        'Semantic HTML5 hierarchy and strict accessibility standards',
        'Responsive layout engineered with zero cumulative layout shifts'
      ],
      stack: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Technical SEO', 'Schema Markup'],
      liveUrl: 'https://haronsaeed.vercel.app/',
      metrics: [
        { label: 'Architecture', value: 'SSG Pre-rendering' },
        { label: 'Schema', value: 'JSON-LD Structured' }
      ],
      accent: 'indigo'
    },
    {
      id: 'dilshad-multimedia',
      title: 'Multimedia Specialist Web Platform',
      tagline: 'Showcase featuring custom video streaming modal and hardware-accelerated transitions.',
      category: 'Web Systems',
      role: 'Frontend Developer',
      period: 'Live Production',
      overview: 'Multimedia showcase incorporating canvas background effects, custom video player modal lightbox, and smooth layout transitions.',
      architectureDetails: 'Utilizes hardware-accelerated transforms and requestAnimationFrame throttling to ensure smooth transitions during video streaming.',
      highlights: [
        'Hardware-accelerated CSS and animation pipeline',
        'Dynamic video lightbox with lazy video buffering',
        'Minimalist editorial layout tailored for creative visual presentations'
      ],
      stack: ['React.js', 'Framer Motion', 'Tailwind CSS', 'GSAP', 'HTML5 Video'],
      liveUrl: 'https://muhammed-dilshad-p.vercel.app/',
      metrics: [
        { label: 'Display Engine', value: 'Canvas / CSS GPU' },
        { label: 'Media Strategy', value: 'Buffered Video Stream' }
      ],
      accent: 'cyan'
    }
  ];

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-28 relative bg-[#FAFAFB]">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-100 border border-slate-200 rounded-full mb-4 shadow-2xs">
            <Layers size={13} className="text-blue-600" />
            <span className="text-[11px] font-bold text-slate-800 uppercase tracking-widest font-mono">
              Engineering Case Studies &amp; Deployments
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-950 tracking-tight mb-4">
            Architected &amp; Delivered Platforms
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Real-world enterprise systems, modular ERP architectures, and high-efficiency full-stack platforms engineered using cutting-edge technologies.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 1. FLAGSHIP HERO PROJECT: HIRUSH ERP ARCHITECTURE CONSOLE */}
        {/* ========================================================================= */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm mb-16 relative overflow-hidden">
          
          {/* Top Browser Bar Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              {/* Traffic Light Dots */}
              <div className="flex items-center gap-1.5 mr-2">
                <span className="w-3 h-3 rounded-full bg-red-400/80" />
                <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
              </div>

              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60 font-mono">
                  Flagship Enterprise Architecture
                </span>
                <span className="text-xs text-slate-500 ml-2 font-medium">
                  Production System (Active)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 font-mono">
              <span className="text-slate-400">Role:</span>
              <span className="bg-slate-100 px-2.5 py-1 rounded-md text-slate-900">Full-Stack Developer &amp; Project Lead</span>
            </div>
          </div>

          {/* Title & Narrative */}
          <div className="py-6 space-y-3">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight font-display">
              Hirush ERP — Modular Enterprise Operating System
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-4xl font-normal">
              Architected to replace fragmented legacy business tools with a unified, high-performance web platform. Spearheaded the full-stack database modeling, automated payroll engines, GPS shift attendance, and multi-tenant RBAC governance.
            </p>
          </div>

          {/* Architecture & Engineering Attributes Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-4 my-2 border-y border-slate-100">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/70">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide block mb-0.5 font-mono">
                Architecture Pattern
              </span>
              <span className="text-sm sm:text-base font-extrabold text-slate-950">
                Modular Monolith (Next.js)
              </span>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/70">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide block mb-0.5 font-mono">
                Persistence Tier
              </span>
              <span className="text-sm sm:text-base font-extrabold text-slate-950">
                PostgreSQL + Prisma ORM
              </span>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/70">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide block mb-0.5 font-mono">
                Security &amp; Auth
              </span>
              <span className="text-sm sm:text-base font-extrabold text-slate-950">
                Multi-Tenant JWT RBAC
              </span>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/70">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide block mb-0.5 font-mono">
                Codebase Integrity
              </span>
              <span className="text-sm sm:text-base font-extrabold text-slate-950">
                Strict TypeScript + Zod
              </span>
            </div>
          </div>

          {/* Interactive Architectural Console (Modules Tabs) */}
          <div className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 font-mono">
                <Terminal size={14} className="text-blue-600" />
                Integrated Enterprise Modules (Click to Inspect)
              </span>
              <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">
                Active Module: 0{activeFlagshipModule + 1}
              </span>
            </div>

            {/* Module Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-5">
              {flagshipModules.map((mod, idx) => (
                <button
                  key={mod.id}
                  onClick={() => setActiveFlagshipModule(idx)}
                  className={`p-3 text-left rounded-xl border transition-all text-xs font-bold ${
                    activeFlagshipModule === idx
                      ? 'bg-slate-950 text-white border-slate-950 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[10px] opacity-70 font-mono">0{idx + 1}</span>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      mod.statusBadge === 'Active' ? 'bg-emerald-400' :
                      mod.statusBadge === 'In Development' ? 'bg-amber-400' : 'bg-slate-400'
                    }`} />
                  </div>
                  <span className="leading-tight line-clamp-1 block">{mod.name.split(' ')[0]} {mod.name.split(' ')[1] || ''}</span>
                </button>
              ))}
            </div>

            {/* Active Module Details Card */}
            <div className="p-6 bg-[#FAFAFB] border border-slate-200 rounded-2xl">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
                  <h4 className="text-base font-bold text-slate-950">
                    {flagshipModules[activeFlagshipModule].name}
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-500">{flagshipModules[activeFlagshipModule].tag}</span>
                  <span className={`px-2.5 py-0.5 text-[11px] font-bold rounded border ${
                    flagshipModules[activeFlagshipModule].statusBadge === 'Active'
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      : flagshipModules[activeFlagshipModule].statusBadge === 'In Development'
                      ? 'bg-amber-50 text-amber-800 border-amber-200'
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}>
                    {flagshipModules[activeFlagshipModule].status}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl mb-4 font-normal">
                {flagshipModules[activeFlagshipModule].desc}
              </p>

              {/* Module Tech Sub-Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-200/60">
                <span className="text-[11px] font-mono text-slate-500 uppercase font-semibold">Under the hood:</span>
                {flagshipModules[activeFlagshipModule].tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 bg-white border border-slate-200 rounded text-[11px] font-mono text-slate-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Full Implementation Tech Stack */}
          <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1 font-mono">
                Technology Stack:
              </span>
              {['Next.js 15 (App Router)', 'React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'JWT RBAC', 'Tailwind CSS'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-800 shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. CURATED PRODUCTION DEPLOYMENTS (High-Efficiency Latest Tech Grid) */}
        {/* ========================================================================= */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight font-display">
                Additional Production Deployments
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Specialized platforms engineered with modern frameworks, high concurrency, and performance optimization.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl shadow-2xs overflow-x-auto">
              {(['All', 'Enterprise ERP', 'Web Systems', 'AI & Research'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    activeTab === cat
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Modern Projects */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-lg hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header with Traffic Light Simulation & Metadata */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-red-400 transition-colors" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-amber-400 transition-colors" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-emerald-400 transition-colors" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded font-mono ml-1">
                        {project.category}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono text-slate-500">
                      {project.period}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h4 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight mb-2 font-display">
                    {project.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-normal">
                    {project.overview}
                  </p>

                  {/* Architecture Efficiency Note */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4 text-xs text-slate-700">
                    <span className="font-semibold text-slate-900 block mb-0.5">Architecture &amp; Tech:</span>
                    <span className="text-slate-600">{project.architectureDetails}</span>
                  </div>

                  {/* Key Highlights */}
                  <ul className="space-y-1.5 mb-5 text-xs text-slate-600">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-1.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom: Stack Badges & Live Links */}
                <div>
                  {/* Metrics Badges */}
                  <div className="grid grid-cols-2 gap-2 mb-4 pt-3 border-t border-slate-100">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-[10px] text-slate-500 block uppercase font-mono">{m.label}</span>
                        <span className="text-xs font-bold text-slate-900">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack & Action */}
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-slate-50 border border-slate-200/80 rounded text-[11px] font-mono text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="px-1.5 py-0.5 text-[10px] text-slate-500 font-mono">
                          +{project.stack.length - 4} more
                        </span>
                      )}
                    </div>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-blue-600 transition-colors bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg shadow-2xs"
                      >
                        <span>Live Site</span>
                        <ArrowUpRight size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
