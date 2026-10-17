import type { Metadata } from 'next';
import { Zap, Users, MessageSquare } from 'lucide-react';
import ContactClientView from '@/components/ContactClientView';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Contact & Hire — Sayed Shahloob P | Software Developer & Technical Lead',
  description: 'Get in touch with Sayed Shahloob P for enterprise ERP projects, full-stack software development, technical SEO, or consulting inquiries.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ============================================================== */}
      {/* 1. CONTACT HERO SECTION matching reference                    */}
      {/* ============================================================== */}
      <section className="relative pt-8 sm:pt-14 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#F7FAFF] via-white to-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <ScrollReveal animation="fade-down" delay={0.05}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-blue-200/70 text-[#1677FF] text-xs font-bold tracking-wide shadow-2xs">
                  <span className="text-[10px]">◆</span>
                  <span>Let&apos;s Connect</span>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={0.15}>
                <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-heading font-black text-[#101B3C] tracking-tight leading-[1.1]">
                  Get In Touch <br />
                  <span className="text-brand-gradient">Let&apos;s Build Something Great</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={0.22}>
                <p className="text-[#64748B] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                  Have a project in mind, a collaboration opportunity, or just want to say hello? I&apos;d love to hear from you. Feel free to reach out using the form or directly through the contact details below.
                </p>
              </ScrollReveal>

              {/* 3 Benefit Cards */}
              <ScrollReveal animation="fade-up" delay={0.3}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-xl">
                  <div className="p-3.5 rounded-xl bg-white border border-[#E4ECF7] shadow-xs hover:border-blue-300 hover:shadow-sm transition-all">
                    <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#1677FF] flex items-center justify-center mb-2">
                      <Zap size={16} />
                    </div>
                    <div className="font-heading font-bold text-xs sm:text-sm text-[#101B3C]">
                      Fast Response
                    </div>
                    <div className="text-[11px] text-[#64748B] mt-0.5">
                      Usually within 24 hours
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-[#E4ECF7] shadow-xs hover:border-blue-300 hover:shadow-sm transition-all">
                    <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#1677FF] flex items-center justify-center mb-2">
                      <Users size={16} />
                    </div>
                    <div className="font-heading font-bold text-xs sm:text-sm text-[#101B3C]">
                      Open to Opportunities
                    </div>
                    <div className="text-[11px] text-[#64748B] mt-0.5">
                      Freelance &amp; Full-time
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-[#E4ECF7] shadow-xs hover:border-blue-300 hover:shadow-sm transition-all">
                    <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#1677FF] flex items-center justify-center mb-2">
                      <MessageSquare size={16} />
                    </div>
                    <div className="font-heading font-bold text-xs sm:text-sm text-[#101B3C]">
                      Collaboration
                    </div>
                    <div className="text-[11px] text-[#64748B] mt-0.5">
                      Let&apos;s create something amazing
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Workspace Illustration Composition with Handwritten Note */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <ScrollReveal animation="scale-in" delay={0.2} className="relative w-full max-w-[440px]">
                {/* Organic backdrop glow */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/15 via-indigo-200/20 to-purple-500/15 rounded-3xl blur-xl" />

                {/* Modern Workspace Visual Frame */}
                <div className="relative rounded-2xl border-2 border-white shadow-2xl overflow-hidden bg-white group">
                  <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-900 border-b border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <div className="px-3 py-0.5 rounded-md bg-slate-800 text-[11px] font-mono text-emerald-400 border border-slate-700">
                      collaboration-hub.online
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className="aspect-[16/10] w-full overflow-hidden relative bg-slate-100">
                    <img
                      src="/contact-hero-showcase.jpg"
                      alt="Sayed Shahloob P Developer Workspace and Collaboration Hub"
                      className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Floating Contact Status Badges */}
                <div className="absolute -top-3.5 left-3 bg-white/95 backdrop-blur-md border border-[#E4ECF7] rounded-xl px-3 py-1.5 shadow-md flex items-center gap-2 text-xs font-bold text-[#101B3C]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Online &amp; Active</span>
                </div>

                <div className="absolute -bottom-3.5 right-4 bg-white/95 backdrop-blur-md border border-[#E4ECF7] rounded-xl px-3 py-1.5 shadow-md flex items-center gap-2 text-xs font-bold text-[#101B3C]">
                  <span className="w-2 h-2 rounded-full bg-[#1677FF]" />
                  <span>Fast Response</span>
                </div>

                {/* Handwritten Annotation */}
                <div className="absolute -top-8 right-2 transform rotate-6 select-none pointer-events-none">
                  <div className="font-handwritten text-lg sm:text-xl text-[#1677FF] font-bold tracking-wide drop-shadow-sm flex items-center gap-1">
                    <span>Feel free to reach out!</span>
                    <span className="text-lg">↗</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2 & 3. CONTACT FORM, DIRECT DETAILS & MAP CTA                  */}
      {/* ============================================================== */}
      <ContactClientView />
    </div>
  );
}
