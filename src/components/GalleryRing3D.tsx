'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ExternalLink, 
  X, 
  Sparkles, 
  Database, 
  ShieldCheck, 
  CheckCircle2, 
  Layers
} from 'lucide-react';

export interface GalleryProject {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  badge: string;
  urlPreview: string;
  image: string;
  summary: string;
  role: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  highlights: string[];
}

const DEFAULT_PROJECTS: GalleryProject[] = [
  {
    id: 'hirush-erp',
    title: 'Hirush ERP — Enterprise Resource Planning',
    shortTitle: 'Hirush ERP System',
    category: 'Enterprise Architecture',
    badge: 'Flagship Platform',
    urlPreview: 'hirush-erp.internal/modules',
    image: '/hirush-erp-dashboard.jpg',
    summary: 'Modular multi-tenant corporate platform centralizing HRMS, automated payroll, CRM pipelines, financial ledger tracking, and Role-Based Access Control.',
    role: 'System architecture, sprint lead, multi-tenant DB schemas & UAT.',
    technologies: ['Next.js 15', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'JWT RBAC'],
    metrics: [
      { label: 'Architecture', value: 'Multi-Tenant' },
      { label: 'Security', value: 'Role-Based RBAC' },
    ],
    highlights: [
      'Automated payroll calculation engine',
      'Shift roster & attendance integration',
      'Financial ledgers & automated invoicing',
      'Corporate discovery & stakeholder sign-off'
    ]
  },
  {
    id: 'hrms-payroll',
    title: 'Enterprise HRMS & Automated Payroll Engine',
    shortTitle: 'Workforce & Payroll Engine',
    category: 'Workforce Operations',
    badge: 'Payroll Engine',
    urlPreview: 'workforce.hrms/payroll-engine',
    image: '/hrms-payroll-dashboard.jpg',
    summary: 'Full-lifecycle workforce management suite featuring automated salary compilation, dynamic deduction formulas, leave approval pipelines, and GPS attendance sync.',
    role: 'Engineered payroll formulas, overtime rules & PWA geofence validation.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'PWA Geofencing'],
    metrics: [
      { label: 'Accuracy', value: '100% Automated' },
      { label: 'Check-in', value: 'GPS Geofencing' },
    ],
    highlights: [
      'Automated salary math algorithms',
      'PWA offline check-in caching',
      'Manager leave approval queues',
      'Monthly tax slips & payroll export'
    ]
  },
  {
    id: 'hms-resort',
    title: 'HMS — Hotel & Resort Booking Management Suite',
    shortTitle: 'Hotel & Resort HMS',
    category: 'Hospitality Operations',
    badge: 'Hospitality System',
    urlPreview: 'resort-hms.enterprise/reservations',
    image: '/resort-hms-dashboard.jpg',
    summary: 'Enterprise hospitality portal with interactive room availability calendar, guest KYC gathering, multi-tier staff permissions, and automated GST invoice PDF generation.',
    role: 'Architected concurrent reservation locking, dynamic room grid & invoice PDF engine.',
    technologies: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Razorpay API'],
    metrics: [
      { label: 'Inventory', value: 'Live Room Matrix' },
      { label: 'Reliability', value: 'Zero Double-Booking' },
    ],
    highlights: [
      'Interactive room availability calendar',
      'Row-level locking for concurrent booking',
      'Guest KYC & multi-tier permissions',
      'Automated GST invoice PDF compiler'
    ]
  },
  {
    id: 'restaurant-pos',
    title: 'Restaurant Kitchen Order Flow & POS System',
    shortTitle: 'Kitchen POS & KDS',
    category: 'Real-time Operations',
    badge: 'Real-time POS',
    urlPreview: 'pos-kitchen.cloud/live-kds',
    image: '/restaurant-pos-kds.jpg',
    summary: 'High-throughput restaurant POS and Kitchen Display System (KDS) synchronizing live table occupancy maps, order dispatch queues, and inventory alerts.',
    role: 'Implemented real-time WebSocket state synchronization & table canvas layout mapper.',
    technologies: ['React.js', 'TypeScript', 'PostgreSQL', 'WebSockets', 'Redux Toolkit'],
    metrics: [
      { label: 'Sync', value: 'WebSocket Live' },
      { label: 'Latency', value: 'Instant Dispatch' },
    ],
    highlights: [
      'Live table color mapping canvas',
      'Kitchen display ticket dispatch queue',
      'Split-bill and multi-pay calculations',
      'Automated inventory depletion triggers'
    ]
  },
  {
    id: 'seo-portal',
    title: 'SEO Strategist Digital Performance Portal',
    shortTitle: 'SEO Performance Portal',
    category: 'Web Applications',
    badge: 'Lighthouse 98+',
    urlPreview: 'seo-analytics.internal/portal',
    image: '/haron.png',
    summary: 'High-performance personal brand portal engineered for search engine indexability, achieving 98+ Google Lighthouse scores with rich JSON-LD schema markup.',
    role: 'Technical SEO architecture, structured schema data & Core Web Vitals optimization.',
    technologies: ['React.js', 'Tailwind CSS', 'Technical SEO', 'Vite', 'Schema JSON-LD'],
    metrics: [
      { label: 'Performance', value: '98+ Lighthouse' },
      { label: 'SEO', value: 'Schema JSON-LD' },
    ],
    highlights: [
      'Core Web Vitals sub-second LCP',
      'Automated social graph previews',
      'Structured data JSON-LD microdata',
      'Zero-layout-shift (CLS 0.00)'
    ]
  },
  {
    id: 'visual-specialist',
    title: 'Visual Specialist Portfolio & Video Showcase',
    shortTitle: 'Media & Video Showcase',
    category: 'Creative Engineering',
    badge: 'Fluid Interaction',
    urlPreview: 'creator-showcase.app/media',
    image: '/dilshad.png',
    summary: 'Multimedia showcase for a video creator incorporating fluid interaction design, custom video modal lightbox, and smooth layout transitions.',
    role: 'Frontend component hierarchy, lazy-loaded video pipelines & GSAP/Framer transitions.',
    technologies: ['React.js', 'Framer Motion', 'Tailwind CSS', 'GSAP Animation'],
    metrics: [
      { label: 'Interactions', value: 'Fluid GSAP' },
      { label: 'Playback', value: 'Progressive Poster' },
    ],
    highlights: [
      'Lazy-loaded custom video lightbox',
      'Progressive poster frame pre-fetching',
      'Framer Motion smooth layout morphs',
      'Mobile-first touch gesture controls'
    ]
  }
];

export default function GalleryRing3D() {
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);
  const projects = DEFAULT_PROJECTS;

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 -right-24 w-80 h-80 bg-indigo-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-3 shadow-2xs">
              <Layers size={13} className="text-blue-600" />
              <span>Featured Systems &amp; Engineering Deliverables</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
              Key Engineering &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">Enterprise Platforms</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Explore flagship enterprise ERP, automated payroll engines, hospitality portals, and real-time systems. Click any card to inspect full technical specifications.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-blue-600 hover:text-blue-700 font-bold group self-start md:self-auto px-4 py-2 rounded-xl bg-blue-50/80 hover:bg-blue-100/80 border border-blue-200/80 transition-all"
          >
            <span>Explore All 15+ Verified Systems</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6-Card Responsive Engineering Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="rounded-3xl bg-white border border-slate-200/90 hover:border-blue-400 shadow-xs hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer"
            >
              {/* Visual Preview with Overlaid Metric */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="bg-slate-900/90 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-xl text-white text-[11px] font-semibold flex items-center gap-1.5 shadow-md">
                    <Database size={11} className="text-blue-400" />
                    <span>{project.metrics[0]?.value}</span>
                  </span>
                  <span className="bg-blue-600/90 backdrop-blur-md px-2.5 py-1 rounded-xl text-white text-[11px] font-bold flex items-center gap-1 shadow-md">
                    <ShieldCheck size={11} />
                    <span>{project.metrics[1]?.value}</span>
                  </span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider mb-2">
                    <span className="text-blue-600">{project.category}</span>
                    <span className="text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full font-bold">
                      {project.badge}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 font-display group-hover:text-blue-600 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-[10px] sm:text-[11px] font-semibold text-slate-700 px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200/80">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[10px] sm:text-[11px] font-semibold text-blue-600 px-2 py-1 rounded-lg bg-blue-50 border border-blue-200/60">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                  <span>View Specifications &amp; Architecture</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* QUICK VIEW SPECIFICATIONS LIGHTBOX MODAL */}
      {selectedProject && (
        <div 
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xl animate-scaleUp max-h-[90vh] flex flex-col"
          >
            {/* Modal Header Bar */}
            <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100 shrink-0">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                System Architecture Specification
              </span>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-slate-400 hover:text-slate-700 transition-colors p-1.5 rounded-xl hover:bg-slate-100"
                title="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-3">
                  {selectedProject.category} • {selectedProject.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {selectedProject.summary}
                </p>
              </div>

              {/* Role & Contribution Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                  My Contribution &amp; Leadership:
                </div>
                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {selectedProject.role}
                </div>
              </div>

              {/* Verified Highlights */}
              <div>
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Core Modules &amp; Verified Features
                </div>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {selectedProject.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Technology Stack
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  Close Preview
                </button>
                <Link
                  href="/projects"
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-2 shadow-sm transition-all"
                >
                  <span>FULL PROJECT CATALOG</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
