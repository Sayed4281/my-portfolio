import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import CredibilityStats from '@/components/CredibilityStats';
import CTASection from '@/components/CTASection';
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
  GraduationCap
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sayed Shahloob P — Software Developer | Technical Project Lead | Business Analyst',
  description: 'Personal portfolio of Sayed Shahloob P: Software Developer, Technical Project Lead, and Business Analyst specialized in Enterprise ERP, HRMS, and full-stack software delivery.',
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Professional Credibility Strip (Trendy Scroll-based Counting) */}
      <CredibilityStats />

      {/* 3. Featured Projects */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3 shadow-xs">
                <Layers size={13} className="text-blue-600" />
                <span>Featured Systems</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
                Key Engineering & ERP Deliverables
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-blue-600 hover:text-blue-700 font-bold group"
            >
              <span>Explore All Verified Projects</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Project 1: Hirush ERP */}
            <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden flex flex-col shadow-xs hover:shadow-lg transition-all">
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Hirush ERP"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-600 text-white shadow-sm">
                    Flagship Enterprise System
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 font-display">
                    Hirush ERP — Enterprise Resource Planning System
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    Modular multi-tenant corporate platform integrating HRMS, automated payroll calculation, CRM pipelines, financial ledger tracking, shift management, and fine-grained Role-Based Access Control (RBAC).
                  </p>
                  <p className="text-xs text-slate-500 mb-4">
                    <strong className="text-slate-800">My Contribution:</strong> System planning, module architecture, sprint leadership, developer coordination, client discovery, and UAT sign-off.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {['Next.js 15', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'JWT RBAC'].map((tech) => (
                      <span key={tech} className="text-[11px] font-semibold text-slate-700 px-2.5 py-0.5 rounded bg-slate-100 border border-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
                >
                  <span>View full case study & specifications</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Project 2: NeuVitX AI & Health System */}
            <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden flex flex-col shadow-xs hover:shadow-lg transition-all">
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <img 
                  src="https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="NeuVitX Health System"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-indigo-600 text-white shadow-sm">
                    ICETI4T 2025 Publication
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 font-display">
                    NeuVitX — AI Health Monitoring & Diagnostics
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    Hardware-software healthcare architecture integrating biometric sensors with cross-platform mobile analytics for real-time vitals monitoring and anomaly detection, presented at ICETI4T 2025.
                  </p>
                  <p className="text-xs text-slate-500 mb-4">
                    <strong className="text-slate-800">My Contribution:</strong> Co-authored research, integrated hardware telemetry with mobile interface, and built algorithmic alert workflows.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {['Flutter', 'Python', 'Firebase', 'IoT Sensors', 'Biometrics', 'Research Paper'].map((tech) => (
                      <span key={tech} className="text-[11px] font-semibold text-slate-700 px-2.5 py-0.5 rounded bg-slate-100 border border-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
                >
                  <span>Read conference research & architecture</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                title: 'Business Analysis',
                desc: 'Deconstructing operational workflows, interviewing stakeholders, translating business goals into technical specifications, and managing UAT.',
                tag: 'Discovery & Scope',
                features: ['BRD / SRS Specs', 'Workflow Diagrams', 'UAT Sign-off']
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

      {/* 5. Career & Research Highlights Banner Duo */}
      <section className="py-20 sm:py-24 border-t border-slate-200/80 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Career Snapshot Card */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-xl relative overflow-hidden flex flex-col justify-between">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[10px] font-black uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Current Active Role</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-400">Nov 2025 – Present</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white mb-3">
                  Software Developer & Technical Lead
                </h3>
                <p className="text-blue-400 text-sm font-bold mb-4">Hirush Global LLP · Malappuram, Kerala</p>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 max-w-xl">
                  Spearheading architectural design and module implementation for enterprise ERP products (HRMS, CRM, Finance, Payroll, and Attendance). Coordinating dev sprint backlogs, running UAT cycles, and translating corporate client objectives into scalable technical releases.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {['Sprint Leadership', 'ERP Architecture', 'Code Review', 'Stakeholder UAT', 'Next.js 15', 'PostgreSQL'].map((t) => (
                    <span key={t} className="px-2.5 py-1 text-[10px] font-semibold text-slate-300 bg-white/5 border border-white/10 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-slate-400">Full employment history available on About profile</span>
                <Link
                  href="/about#experience"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-md hover:scale-105"
                >
                  <span>Explore Career Timeline</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Research & Academic Highlights Card */}
            <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-black uppercase tracking-widest">
                    <Award size={12} className="text-indigo-600" />
                    <span>Peer-Reviewed Research</span>
                  </div>
                  <span className="text-xs font-bold text-slate-400">2025</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display tracking-tight mb-3">
                  ICETI4T 2025 International Conference
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Co-authored & presented research on AI-driven health telemetry and biometric anomaly detection. Integrated IoT sensor arrays with cross-platform mobile diagnostics workflows for real-time patient observation.
                </p>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 mb-6">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Academic Degree</span>
                  <p className="text-xs font-bold text-slate-900">B.Tech in Computer Science & Engineering</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">MEA Engineering College · KTU (CGPA: 8.08 / Distinction)</p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Read academic papers & honors</span>
                <Link
                  href="/about#research"
                  className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 hover:text-indigo-700 group"
                >
                  <span>View Details</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Final Call to Action Card */}
      <CTASection
        badge="Open for Technical Leadership Roles & Enterprise Consulting"
        title="Ready to Build Something"
        highlightText="Exceptional Together?"
        description="Whether you need a dedicated Technical Project Lead to drive your engineering roadmap or an experienced software developer to architect your next enterprise ERP/web system, let's start the conversation."
        primaryBtnText="Initiate Discussion"
        primaryBtnHref="/contact"
        secondaryBtnText="Browse Case Studies"
        secondaryBtnHref="/projects"
        trustBadges={[
          'Fast response within 24 hours',
          'Enterprise ERP & Web Architecture',
          'Open to Global / Remote Positions',
        ]}
      />
    </div>
  );
}
