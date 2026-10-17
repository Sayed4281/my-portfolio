import type { Metadata } from 'next';
import { Layers, Code, Star } from 'lucide-react';
import CollaborationCTA from '@/components/CollaborationCTA';
import ProjectsClientView from '@/components/ProjectsClientView';
import ScrollReveal from '@/components/ScrollReveal';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const metadata: Metadata = {
  title: 'My Projects — Sayed Shahloob P | Enterprise ERP & Web Engineering',
  description: 'Enterprise ERP systems, full-stack web applications, health telemetry, and cloud utilities built by Sayed Shahloob P.',
};

export default function ProjectsPage() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <div className="min-h-screen bg-white">
      {/* ============================================================== */}
      {/* 1. PROJECTS HERO SECTION matching reference                   */}
      {/* ============================================================== */}
      <section className="relative pt-8 sm:pt-14 pb-12 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#F7FAFF] via-white to-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <ScrollReveal animation="fade-down" delay={0.05}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-blue-200/70 text-[#1677FF] text-xs font-bold tracking-wide shadow-2xs">
                  <span className="text-[10px]">◆</span>
                  <span>My Work</span>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={0.15}>
                <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-heading font-black text-[#101B3C] tracking-tight leading-[1.1]">
                  My Projects <br />
                  <span className="text-brand-gradient">Built with Passion</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={0.22}>
                <p className="text-[#64748B] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                  Here are some of my recent projects, where I turn ideas into fully functional, scalable, and modern web applications. Each project represents a real-world problem solved with clean code and modern technologies.
                </p>
              </ScrollReveal>

              {/* 3 Metrics Row */}
              <ScrollReveal animation="fade-up" delay={0.3}>
                <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2 max-w-lg">
                  <div className="p-3 sm:p-4 rounded-xl bg-white border border-[#E4ECF7] shadow-xs flex items-center gap-3 hover:border-blue-300 hover:shadow-sm transition-all">
                    <div className="w-9 h-9 rounded-lg bg-[#EFF6FF] text-[#1677FF] flex items-center justify-center shrink-0">
                      <Layers size={18} />
                    </div>
                    <div>
                      <div className="font-heading font-extrabold text-lg text-[#101B3C] leading-none">5+</div>
                      <div className="text-[11px] text-[#64748B] font-medium mt-0.5">Projects Completed</div>
                    </div>
                  </div>

                  <div className="p-3 sm:p-4 rounded-xl bg-white border border-[#E4ECF7] shadow-xs flex items-center gap-3 hover:border-blue-300 hover:shadow-sm transition-all">
                    <div className="w-9 h-9 rounded-lg bg-[#EFF6FF] text-[#1677FF] flex items-center justify-center shrink-0">
                      <Code size={18} />
                    </div>
                    <div>
                      <div className="font-heading font-extrabold text-lg text-[#101B3C] leading-none">2+</div>
                      <div className="text-[11px] text-[#64748B] font-medium mt-0.5">Live Deployments</div>
                    </div>
                  </div>

                  <div className="p-3 sm:p-4 rounded-xl bg-white border border-[#E4ECF7] shadow-xs flex items-center gap-3 hover:border-blue-300 hover:shadow-sm transition-all">
                    <div className="w-9 h-9 rounded-lg bg-[#EFF6FF] text-[#1677FF] flex items-center justify-center shrink-0">
                      <Star size={18} />
                    </div>
                    <div>
                      <div className="font-heading font-extrabold text-lg text-[#101B3C] leading-none">100%</div>
                      <div className="text-[11px] text-[#64748B] font-medium mt-0.5">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Modern Laptop visual with real project dashboard screenshot */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <ScrollReveal animation="scale-in" delay={0.2} className="relative w-full max-w-[440px]">
                {/* Organic backdrop glow */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/15 via-indigo-200/20 to-purple-500/15 rounded-3xl blur-xl" />

                {/* Browser / Dashboard Frame */}
                <div className="relative rounded-2xl border-2 border-white shadow-2xl overflow-hidden bg-slate-900 group">
                  <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-800/90 border-b border-slate-700/50">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/90" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/90" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
                    </div>
                    <div className="px-3 py-0.5 rounded-md bg-slate-900/80 text-[11px] font-mono text-slate-300 border border-slate-700/60">
                      hirusherp.cloud/dashboard
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className="aspect-[16/10] w-full overflow-hidden relative bg-slate-950">
                    <img
                      src="/hirush-erp-dashboard.jpg"
                      alt="Hirush ERP Enterprise SaaS Platform"
                      className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Floating Tech Badges */}
                <div className="absolute -top-3.5 left-3 bg-white/95 backdrop-blur-md border border-[#E4ECF7] rounded-xl px-3 py-1.5 shadow-md flex items-center gap-2 text-xs font-bold text-[#101B3C]">
                  <span className="w-2 h-2 rounded-full bg-[#1677FF]" />
                  <span>Next.js 15</span>
                </div>

                <div className="absolute -top-3.5 right-3 bg-white/95 backdrop-blur-md border border-[#E4ECF7] rounded-xl px-3 py-1.5 shadow-md flex items-center gap-2 text-xs font-bold text-[#101B3C]">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" />
                  <span>PostgreSQL</span>
                </div>

                <div className="absolute -bottom-3.5 left-4 bg-white/95 backdrop-blur-md border border-[#E4ECF7] rounded-xl px-3 py-1.5 shadow-md flex items-center gap-2 text-xs font-bold text-[#101B3C]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Prisma ORM</span>
                </div>

                <div className="absolute -bottom-3.5 right-4 bg-white/95 backdrop-blur-md border border-[#E4ECF7] rounded-xl px-3 py-1.5 shadow-md flex items-center gap-2 text-xs font-bold text-[#101B3C]">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  <span>TypeScript</span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2 & 3. FILTERS & PROJECT GRID                                  */}
      {/* ============================================================== */}
      <ProjectsClientView initialProjects={projects} />

      {/* ============================================================== */}
      {/* 4. COLLABORATION CTA                                           */}
      {/* ============================================================== */}
      <CollaborationCTA />
    </div>
  );
}
