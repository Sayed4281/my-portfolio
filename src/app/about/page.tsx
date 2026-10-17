import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowRight, 
  Download, 
  Code, 
  Rocket, 
  Users, 
  Quote,
  TrendingUp
} from 'lucide-react';
import CollaborationCTA from '@/components/CollaborationCTA';
import ScrollReveal from '@/components/ScrollReveal';
import AboutTechStackClient from '@/components/AboutTechStackClient';
import AboutTimelineClient from '@/components/AboutTimelineClient';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const metadata: Metadata = {
  title: 'About Me — Sayed Shahloob P | Software Developer & Technical Lead',
  description: 'Detailed background, technical skills, professional experience timeline, and education of Sayed Shahloob P.',
};

export default function AboutPage() {
  const { personal, strengths, techStack, workExperience, education } = PORTFOLIO_DATA;

  return (
    <div className="min-h-screen bg-white">
      {/* ============================================================== */}
      {/* 1. ABOUT HERO SECTION                                          */}
      {/* ============================================================== */}
      <section className="relative pt-6 sm:pt-8 lg:pt-10 pb-10 sm:pb-14 lg:pb-16 overflow-hidden bg-gradient-to-b from-[#F7FAFF] via-white to-white flex items-center min-h-[calc(100vh-4.5rem)]">
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 relative z-10 py-2 sm:py-3">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
              <ScrollReveal animation="fade-down" delay={0.05}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-blue-200/70 text-[#1677FF] text-xs font-bold tracking-wide shadow-2xs">
                  <span className="text-[10px]">◆</span>
                  <span>About Me</span>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={0.15}>
                <h1 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-heading font-black text-[#101B3C] tracking-tight leading-[1.12]">
                  Hi, I&apos;m <br />
                  <span className="text-[#101B3C]">Sayed</span>{' '}
                  <span className="text-brand-gradient">Shahloob P</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={0.22}>
                <h2 className="text-lg sm:text-xl font-heading font-bold text-[#101B3C] tracking-tight">
                  Full Stack Developer &amp; Problem Solver
                </h2>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={0.3}>
                <p className="text-[#64748B] text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                  {personal.bio}
                </p>
              </ScrollReveal>


              {/* CTA Buttons */}
              <ScrollReveal animation="fade-up" delay={0.42}>
                <div className="flex flex-wrap items-center gap-3.5 pt-1">
                  <a
                    href={personal.resumeUrl}
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm sm:text-base btn-gradient shadow-md shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    <span>Download CV</span>
                    <Download size={17} />
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#E4ECF7] hover:border-blue-400 text-[#101B3C] font-semibold text-sm sm:text-base shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all group"
                  >
                    <span>Let&apos;s Work Together</span>
                    <ArrowRight size={17} className="group-hover:translate-x-1.5 transition-transform text-[#1677FF] duration-200" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Profile Photo with Scale Reveal and Soft Shadow */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <ScrollReveal animation="scale-in" delay={0.25} className="relative w-full max-w-[310px] sm:max-w-[340px] lg:max-w-[365px]">
                <div className="relative w-full">
                  {/* Decorative Organic Backdrop */}
                  <div className="absolute -inset-4 bg-gradient-to-tr from-blue-400/20 via-indigo-300/15 to-purple-400/20 rounded-[2.5rem] blur-xl transform rotate-2" />

                  {/* Photo Frame */}
                  <div className="relative rounded-[2rem] overflow-hidden border-2 border-white shadow-xl bg-white">
                    <div className="aspect-[4/4.6] sm:aspect-[4/4.3] w-full overflow-hidden relative">
                      <img
                        src={personal.photoUrl}
                        alt={personal.name}
                        className="w-full h-full object-cover object-top hover:scale-103 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Handwritten Annotation */}
                  <div className="absolute -top-6 right-0 transform rotate-6 select-none pointer-events-none">
                    <div className="font-handwritten text-lg sm:text-xl text-[#1677FF] font-bold tracking-wide drop-shadow-sm flex items-center gap-1">
                      <span>Turning Ideas into Real Solutions</span>
                      <span className="text-lg">↗</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. MY STORY & STRENGTHS SECTION                                */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 bg-white border-y border-[#E4ECF7]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal animation="fade-up">
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-blue-200 text-[#1677FF] text-xs font-bold tracking-wider uppercase mb-3">
                <span>◆</span>
                <span>My Story</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#101B3C] tracking-tight">
                A Passion for Building <span className="text-[#1677FF]">Digital Solutions</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Left Story from Left, Quote from Right (<=20px movement) */}
          <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-12">
            <div className="lg:col-span-7">
              <ScrollReveal animation="fade-right" delay={0.1}>
                <div className="space-y-4 text-sm sm:text-base text-[#64748B] leading-relaxed pt-2">
                  <p>{personal.story}</p>
                  <p>
                    With hands-on experience in full-stack engineering, enterprise ERP/HRMS architecture, and technical SEO, I bridge business workflows with scalable code. I focus on creating maintainable systems that empower users and solve tangible business challenges.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal animation="fade-left" delay={0.2} className="h-full">
                <div className="h-full rounded-2xl bg-gradient-to-br from-[#EFF6FF] to-[#F5F8FF] border border-[#DDE8F8] p-7 sm:p-8 flex flex-col justify-between shadow-2xs relative overflow-hidden">
                  <Quote size={40} className="text-blue-500/20 absolute -top-1 -left-1" />
                  <div className="relative z-10 pt-2">
                    <p className="font-heading font-semibold text-lg sm:text-xl text-[#101B3C] italic leading-snug mb-4">
                      &ldquo;Technology is best when it brings people together.&rdquo;
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-[#1677FF]">
                      — Matt Mullenweg
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* 4 Professional Values Row with Staggered ScrollReveal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {strengths.map((item, idx) => (
              <ScrollReveal
                key={item.title}
                animation="fade-up"
                delay={idx * 0.08}
              >
                <div className="ref-card p-5 sm:p-6 flex items-start gap-4 hover:border-blue-400 hover:shadow-md hover:-translate-y-1.5 transition-all duration-250 bg-white group cursor-default">
                  <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] border border-blue-200/60 flex items-center justify-center text-[#1677FF] shrink-0 group-hover:scale-110 group-hover:bg-[#1677FF] group-hover:text-white transition-all duration-200">
                    {idx === 0 && <Code size={20} />}
                    {idx === 1 && <Rocket size={20} />}
                    {idx === 2 && <Users size={20} />}
                    {idx === 3 && <TrendingUp size={20} />}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-[#101B3C] mb-1 group-hover:text-[#1677FF] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. TECHNICAL SKILLS (Interactive Tabs Client View)             */}
      {/* ============================================================== */}
      <section id="skills" className="py-16 sm:py-24 bg-[#F7FAFF]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal animation="fade-up">
            <div className="text-left mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-200 text-[#1677FF] text-xs font-bold tracking-wider uppercase mb-3 shadow-2xs">
                <span>◆</span>
                <span>Technical Skills</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#101B3C] tracking-tight">
                My Tech <span className="text-[#1677FF]">Stack</span>
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base mt-2 max-w-xl">
                I work with modern technologies across the full stack to build powerful and scalable web applications.
              </p>
            </div>
          </ScrollReveal>

          {/* Interactive Filterable Tech Stack */}
          <AboutTechStackClient techStack={techStack} />
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. PROFESSIONAL EXPERIENCE & EDUCATION                         */}
      {/* ============================================================== */}
      <section id="experience" className="py-16 sm:py-24 bg-white border-t border-[#E4ECF7]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <AboutTimelineClient workExperience={workExperience} education={education} />
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. COLLABORATION CTA                                           */}
      {/* ============================================================== */}
      <CollaborationCTA />
    </div>
  );
}
