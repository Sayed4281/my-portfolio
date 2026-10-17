import type { Metadata } from 'next';
import { 
  Cpu, 
  Code, 
  Clock, 
  Star, 
  MessageSquare, 
  Lightbulb, 
  ShieldCheck, 
  Rocket, 
  FolderGit2,
  Headphones
} from 'lucide-react';
import CollaborationCTA from '@/components/CollaborationCTA';
import ServicesClientView from '@/components/ServicesClientView';
import ScrollReveal from '@/components/ScrollReveal';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const metadata: Metadata = {
  title: 'Professional Services — Sayed Shahloob P | Enterprise ERP, Web Apps & SEO',
  description: 'Full-stack web engineering, ERP/HRMS architecture, technical SEO optimization, UI/UX design, and AI automation by Sayed Shahloob P.',
};

export default function ServicesPage() {
  const { services, credibilityStats, workflowSteps } = PORTFOLIO_DATA;

  return (
    <div className="min-h-screen bg-white">
      {/* ============================================================== */}
      {/* 1. SERVICES HERO SECTION                                       */}
      {/* ============================================================== */}
      <section className="relative pt-8 sm:pt-14 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#F7FAFF] via-white to-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <ScrollReveal animation="fade-down" delay={0.05}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-blue-200/70 text-[#1677FF] text-xs font-bold tracking-wide shadow-2xs">
                  <span className="text-[10px]">◆</span>
                  <span>My Services</span>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={0.15}>
                <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-heading font-black text-[#101B3C] tracking-tight leading-[1.1]">
                  Professional Services <br />
                  <span className="text-brand-gradient">for Your Digital Growth</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={0.22}>
                <p className="text-[#64748B] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                  I offer modern web solutions, automation, and digital services to help businesses build, grow and stay ahead in the competitive online world. From full-stack development to SEO, I deliver reliable, scalable and future-ready solutions.
                </p>
              </ScrollReveal>

              {/* 4 Value Pills */}
              <ScrollReveal animation="fade-up" delay={0.3}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 max-w-xl">
                  <div className="p-2.5 rounded-xl bg-white border border-[#E4ECF7] shadow-xs flex items-center gap-2 hover:border-blue-300 transition-colors">
                    <Cpu size={16} className="text-[#1677FF] shrink-0" />
                    <span className="text-xs font-bold text-[#101B3C]">Modern Technologies</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white border border-[#E4ECF7] shadow-xs flex items-center gap-2 hover:border-blue-300 transition-colors">
                    <Code size={16} className="text-[#1677FF] shrink-0" />
                    <span className="text-xs font-bold text-[#101B3C]">Clean &amp; Scalable Code</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white border border-[#E4ECF7] shadow-xs flex items-center gap-2 hover:border-blue-300 transition-colors">
                    <Clock size={16} className="text-[#1677FF] shrink-0" />
                    <span className="text-xs font-bold text-[#101B3C]">On-Time Delivery</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white border border-[#E4ECF7] shadow-xs flex items-center gap-2 hover:border-blue-300 transition-colors">
                    <Star size={16} className="text-[#1677FF] shrink-0" />
                    <span className="text-xs font-bold text-[#101B3C]">Client Satisfaction</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Modern Software Development & Engineering Ecosystem Showcase */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <ScrollReveal animation="scale-in" delay={0.2} className="relative w-full max-w-[440px]">
                {/* Organic backdrop glow */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/15 via-blue-200/20 to-indigo-500/15 rounded-3xl blur-xl" />

                {/* Visual Frame */}
                <div className="relative rounded-2xl border-2 border-white shadow-2xl overflow-hidden bg-white group">
                  <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-900 border-b border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <div className="px-3 py-0.5 rounded-md bg-slate-800 text-[11px] font-mono text-cyan-300 border border-slate-700">
                      engineering-ecosystem.io
                    </div>
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  </div>
                  <div className="aspect-[16/10] w-full overflow-hidden relative bg-slate-100">
                    <img
                      src="/services-hero-showcase.jpg"
                      alt="Full-Stack Development & Software Engineering Ecosystem"
                      className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Floating Value Badges */}
                <div className="absolute -top-3.5 left-2 bg-white/95 backdrop-blur-md border border-[#E4ECF7] rounded-xl px-3 py-1.5 shadow-md flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#EFF6FF] text-[#1677FF] flex items-center justify-center">
                    <Code size={13} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#101B3C]">Web &amp; Mobile</div>
                  </div>
                </div>

                <div className="absolute -top-3.5 right-2 bg-white/95 backdrop-blur-md border border-[#E4ECF7] rounded-xl px-3 py-1.5 shadow-md flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#EFF6FF] text-[#1677FF] flex items-center justify-center">
                    <Rocket size={13} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#101B3C]">API &amp; Cloud</div>
                  </div>
                </div>

                <div className="absolute -bottom-3.5 right-3 bg-white/95 backdrop-blur-md border border-[#E4ECF7] rounded-xl px-3 py-1.5 shadow-md flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#EFF6FF] text-[#1677FF] flex items-center justify-center">
                    <Cpu size={13} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#101B3C]">Architecture</div>
                  </div>
                </div>

                {/* Handwritten Annotation */}
                <div className="absolute -top-9 right-3 transform rotate-6 select-none pointer-events-none">
                  <div className="font-handwritten text-lg sm:text-xl text-[#1677FF] font-bold tracking-wide drop-shadow-sm flex items-center gap-1">
                    <span>Turning Ideas into Digital Solutions</span>
                    <span className="text-lg">↗</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. CORE SERVICES 6-CARD GRID                                   */}
      {/* ============================================================== */}
      <ServicesClientView services={services} />

      {/* ============================================================== */}
      {/* 3. WHY WORK WITH ME? PANEL                                     */}
      {/* ============================================================== */}
      <section className="py-14 bg-[#F7FAFF] border-y border-[#E4ECF7]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal animation="fade-up">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Narrative */}
              <div className="lg:col-span-5 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-200 text-[#1677FF] text-xs font-bold tracking-wider uppercase shadow-2xs">
                  <span>◆</span>
                  <span>Why Choose Me</span>
                </div>
                <h2 className="text-3xl font-heading font-extrabold text-[#101B3C] tracking-tight">
                  Why Work With Me?
                </h2>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                  I focus on delivering high-quality solutions with clear communication, timely delivery and long-term support for your success.
                </p>
              </div>

              {/* Right 4 Stats */}
              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {credibilityStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-xl bg-white border border-[#E4ECF7] shadow-xs text-center sm:text-left hover:border-blue-300 hover:shadow-md hover:-translate-y-1 transition-all duration-250"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#EFF6FF] text-[#1677FF] flex items-center justify-center mb-2 mx-auto sm:mx-0">
                      {i === 0 && <FolderGit2 size={18} />}
                      {i === 1 && <Clock size={18} />}
                      {i === 2 && <ShieldCheck size={18} />}
                      {i === 3 && <Headphones size={18} />}
                    </div>
                    <div className="font-heading font-extrabold text-2xl text-[#101B3C]">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-[#64748B] font-medium mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. HOW I WORK (5-STEP PROCESS)                                 */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          {/* Header */}
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-blue-200 text-[#1677FF] text-xs font-bold tracking-wider uppercase mb-3">
                  <span>◆</span>
                  <span>My Process</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#101B3C] tracking-tight">
                  How I <span className="text-[#1677FF]">Work</span>
                </h2>
                <p className="text-[#64748B] text-sm sm:text-base mt-2">
                  A simple and transparent process to deliver the best results.
                </p>
              </div>

              <div className="font-handwritten text-2xl text-[#1677FF] font-bold tracking-wide select-none self-end">
                <span>From Idea to Launch</span> ↗
              </div>
            </div>
          </ScrollReveal>

          {/* 5-Step Process: Horizontal on Desktop, Vertical on Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {workflowSteps.map((step, idx) => (
              <ScrollReveal
                key={step.step}
                animation="fade-up"
                delay={idx * 0.1}
                className="h-full"
              >
                <div className="ref-card h-full p-5 sm:p-6 flex flex-col justify-between relative bg-white group hover:border-blue-400 hover:shadow-[0_12px_28px_rgba(22,119,255,0.08)] hover:-translate-y-1.5 transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-slate-400 group-hover:text-[#1677FF] transition-colors">
                        {step.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-blue-200/60 flex items-center justify-center text-[#1677FF] group-hover:scale-110 group-hover:bg-[#1677FF] group-hover:text-white transition-all duration-200">
                        {idx === 0 && <MessageSquare size={18} />}
                        {idx === 1 && <Lightbulb size={18} />}
                        {idx === 2 && <Code size={18} />}
                        {idx === 3 && <ShieldCheck size={18} />}
                        {idx === 4 && <Rocket size={18} />}
                      </div>
                    </div>

                    <h3 className="font-heading font-bold text-sm sm:text-base text-[#101B3C] mb-2 group-hover:text-[#1677FF] transition-colors">
                      {idx + 1}. {step.title}
                    </h3>

                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Connecting Arrow for desktop (not on last item) */}
                  {idx < 4 && (
                    <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 text-blue-300 pointer-events-none">
                      ➔
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. COLLABORATION CTA                                           */}
      {/* ============================================================== */}
      <CollaborationCTA />
    </div>
  );
}
