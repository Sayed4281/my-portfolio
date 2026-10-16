import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import CredibilityStats from '@/components/CredibilityStats';
import CTASection from '@/components/CTASection';
import GalleryRing3D from '@/components/GalleryRing3D';
import { 
  ArrowRight, 
  Layers, 
  Sparkles, 
  Clock, 
  Briefcase, 
  Award,
  CheckCircle2, 
  Boxes, 
  LineChart, 
  FolderKanban, 
  Code2,
  ExternalLink,
  GraduationCap,
  Database,
  ShieldCheck,
  Zap,
  Terminal
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sayed Shahloob P — Software Developer | Technical Project Lead | SEO Analyst',
  description: 'Personal portfolio of Sayed Shahloob P: Software Developer, Technical Project Lead, and SEO Analyst specialized in Enterprise ERP, HRMS, and full-stack software delivery.',
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Professional Credibility Strip (Trendy Scroll-based Counting) */}
      <CredibilityStats />

      {/* 3. Interactive 3D Gallery Ring Showcase */}
      <GalleryRing3D />

      {/* 4. What I Do */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-200/80 relative overflow-hidden">
        {/* Subtle decorative grid/glow */}
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-blue-500/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-indigo-500/[0.04] rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-bold uppercase tracking-widest mb-4 shadow-2xs">
                <Briefcase size={12} className="text-blue-600" />
                <span>Core Capabilities & Value</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-display">
                Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Enterprise Impact</span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-3 leading-relaxed">
                Strategic technical capabilities delivering reliable architecture, streamlined processes, and production-grade software.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 text-xs sm:text-sm text-blue-600 hover:text-blue-700 font-bold group px-5 py-2.5 rounded-full bg-white border border-slate-200 hover:border-blue-400 shadow-2xs hover:shadow-xs transition-all self-start md:self-auto"
            >
              <span>6-Step Delivery Process & Specs</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Boxes,
                title: 'Enterprise ERP / HRMS',
                desc: 'End-to-end planning, development, and deployment of modular ERP systems covering HRMS, payroll, attendance, CRM, finance, and role-based security.',
                tag: 'Enterprise Architecture',
                features: ['Payroll Engines', 'Multi-Tenant RBAC', 'Biometric / GPS Sync']
              },
              {
                icon: Code2,
                title: 'Full-Stack Web Apps',
                desc: 'Responsive, accessible, production-grade applications using Next.js 15, TypeScript, Node.js, and relational databases engineered for speed.',
                tag: 'Web Engineering',
                features: ['Next.js SSR / SSG', 'RESTful Endpoints', 'Core Web Vitals']
              },
              {
                icon: LineChart,
                title: 'Technical SEO & Analytics',
                desc: 'Technical site audits, Core Web Vitals optimization, JSON-LD schema markup, search indexability, and Google Search Console performance tracking.',
                tag: 'Search & Speed',
                features: ['Core Web Vitals', 'Schema JSON-LD', 'Search Console Audits']
              },
              {
                icon: FolderKanban,
                title: 'Technical Project Lead',
                desc: 'Leading developer sprint cycles, backlog grooming, milestone tracking, code reviews, and serving as the direct bridge between clients and engineering.',
                tag: 'Sprint Governance',
                features: ['Agile Backlogs', 'Milestone Demos', 'Code Reviews']
              }
            ].map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div 
                  key={idx}
                  className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-400 transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-600 transition-all duration-500" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50/80 border border-blue-200/80 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-2xs">
                        <Icon size={22} />
                      </div>
                      <span className="text-[9px] font-black uppercase tracking-wider text-blue-700 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200/80">
                        {srv.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-slate-900 mb-2.5 font-display group-hover:text-blue-600 transition-colors">
                      {srv.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-5">
                      {srv.desc}
                    </p>

                    <div className="space-y-1.5 pt-4 border-t border-slate-100 mb-6">
                      {srv.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11px] font-semibold text-slate-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/services"
                    className="inline-flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-blue-600 pt-3 border-t border-slate-100 transition-colors"
                  >
                    <span>View deliverables</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Career & Research Highlights — Redesigned Cohesive Executive Cards */}
      <section className="py-20 sm:py-24 border-t border-slate-200/80 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-3 shadow-2xs">
              <Sparkles size={13} className="text-blue-600" />
              <span>Career & Academic Foundations</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
              Professional Leadership & Academic Excellence
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-2.5">
              Combining active enterprise software leadership with formal computer science scholarship and published research.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Card 1: Career Leadership Snapshot */}
            <div className="p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500" />
              
              {/* Ambient Glow */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-blue-500/[0.04] group-hover:bg-blue-500/[0.08] rounded-full blur-2xl pointer-events-none transition-all duration-500" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Current Active Role</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/80">
                    Nov 2025 – Present
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black font-display tracking-tight text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                  Software Developer & Technical Lead
                </h3>
                <p className="text-blue-600 text-xs sm:text-sm font-bold mb-3.5">Hirush Global LLP · Malappuram, Kerala</p>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                  Spearheading architectural design and module implementation for enterprise ERP products (HRMS, CRM, Finance, Payroll, and Attendance). Coordinating dev sprint backlogs, running UAT cycles, and translating corporate client objectives into scalable technical releases.
                </p>

                {/* Key Deliverables bullets */}
                <div className="space-y-2 mb-6 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70">
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                    <span><strong>Enterprise Architecture:</strong> Modular Next.js 15, PostgreSQL &amp; RBAC security</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 size={14} className="text-blue-500 mt-0.5 shrink-0" />
                    <span><strong>Sprint Governance:</strong> Agile backlog grooming, sprint cadence &amp; team code reviews</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 size={14} className="text-indigo-500 mt-0.5 shrink-0" />
                    <span><strong>Client Discovery:</strong> Technical SRS roadmaps &amp; stakeholder UAT sign-offs</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-7">
                  {['Sprint Leadership', 'ERP Architecture', 'Code Review', 'Stakeholder UAT', 'Next.js 15', 'PostgreSQL'].map((t) => (
                    <span key={t} className="px-2.5 py-0.5 text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-slate-500 font-medium">Full employment history on About profile</span>
                <Link
                  href="/about#experience"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md shadow-blue-500/15 transition-all hover:scale-105 active:scale-95"
                >
                  <span>Explore Career Timeline</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Card 2: Academic Degree & Published Research */}
            <div className="p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 hover:border-indigo-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500" />
              
              {/* Ambient Glow */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-indigo-500/[0.04] group-hover:bg-indigo-500/[0.08] rounded-full blur-2xl pointer-events-none transition-all duration-500" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                    <GraduationCap size={13} className="text-indigo-600" />
                    <span>Academic &amp; Research Honors</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/80">
                    2021 – 2025
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black font-display tracking-tight text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
                  B.Tech in Computer Science &amp; Engineering
                </h3>
                <p className="text-indigo-600 text-xs sm:text-sm font-bold mb-3.5">
                  MEA Engineering College · KTU (CGPA: 8.08 / Distinction)
                </p>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                  Distinction graduate in Computer Science. Strong foundational mastery in algorithms, distributed systems, relational schema design, and production software lifecycle.
                </p>

                {/* Published Research spotlight box */}
                <div className="mb-6 p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200/70">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Award size={14} className="text-indigo-600 shrink-0" />
                    <span className="text-xs font-bold text-slate-900">
                      ICETI4T 2025 International Conference Publication
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Co-authored &amp; presented peer-reviewed research on AI-driven health telemetry and biometric anomaly detection. Integrated IoT sensor arrays with cross-platform mobile diagnostics workflows.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-7">
                  {['Algorithms', 'Data Structures', 'Database Systems', 'AI Telemetry', 'Conference Paper', 'Distinction'].map((t) => (
                    <span key={t} className="px-2.5 py-0.5 text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-slate-500 font-medium">Read research papers &amp; honors</span>
                <Link
                  href="/about#education"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md shadow-indigo-500/15 transition-all hover:scale-105 active:scale-95"
                >
                  <span>View Academic Details</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Final Call to Action Card — Single Focused Button */}
      <CTASection
        badge="Open for Technical Leadership Roles & Enterprise Consulting"
        title="Ready to Build Something"
        highlightText="Exceptional Together?"
        description="Whether you need a dedicated Technical Project Lead to drive your engineering roadmap or an experienced software developer to architect your next enterprise ERP/web system, let's start the conversation."
        primaryBtnText="Initiate Discussion"
        primaryBtnHref="/contact"
        trustBadges={[
          'Fast response within 24 hours',
          'Enterprise ERP & Web Architecture',
          'Open to Global / Remote Positions',
        ]}
      />
    </div>
  );
}
