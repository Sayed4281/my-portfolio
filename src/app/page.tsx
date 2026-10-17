import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowRight, 
  Code, 
  Rocket, 
  Lightbulb, 
  Users, 
  Github, 
  FolderGit2,
  Clock,
  ShieldCheck,
  Palette,
  TrendingUp,
  Cpu,
  Globe,
  Headphones
} from 'lucide-react';
import CollaborationCTA from '@/components/CollaborationCTA';
import HomeHeroClient from '@/components/HomeHeroClient';
import ScrollReveal from '@/components/ScrollReveal';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const metadata: Metadata = {
  title: 'Sayed Shahloob P — Software Developer | Technical Project Lead | SEO Analyst',
  description: 'Enterprise ERP, HRMS, Technical SEO, Technical Lead, and Full-Stack Software Engineering Portfolio of Sayed Shahloob P.',
};

export default function HomePage() {
  const { personal, credibilityStats, strengths, services, projects } = PORTFOLIO_DATA;
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* ============================================================== */}
      {/* 1. HERO SECTION (Sequenced Motion Client Component)           */}
      {/* ============================================================== */}
      <HomeHeroClient personal={personal} />

      {/* ============================================================== */}
      {/* 2. PROFESSIONAL STRENGTHS ROW                                  */}
      {/* ============================================================== */}
      <section className="py-8 sm:py-12 bg-white border-y border-[#E4ECF7]/70">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal animation="fade-up" delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {strengths.map((item, idx) => (
                <div
                  key={item.title}
                  className="ref-card p-5 sm:p-6 flex items-start gap-4 hover:border-blue-400 hover:shadow-md hover:-translate-y-1.5 transition-all duration-250 group cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] border border-blue-200/60 flex items-center justify-center text-[#1677FF] shrink-0 group-hover:scale-110 group-hover:bg-[#1677FF] group-hover:text-white transition-all duration-200">
                    {idx === 0 && <Code size={22} />}
                    {idx === 1 && <Rocket size={22} />}
                    {idx === 2 && <Lightbulb size={22} />}
                    {idx === 3 && <Users size={22} />}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-[#101B3C] mb-1 group-hover:text-[#1677FF] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. FEATURED PROJECTS SECTION                                   */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-24 bg-[#F7FAFF]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-200 text-[#1677FF] text-xs font-bold tracking-wider uppercase mb-3 shadow-2xs">
                  <span>◆</span>
                  <span>FEATURED PROJECTS</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#101B3C] tracking-tight">
                  My Latest <span className="text-[#1677FF]">Projects</span>
                </h2>
                <p className="text-[#64748B] text-sm sm:text-base mt-2 max-w-xl">
                  Real-world projects built with modern technologies. Each project solves a specific problem and demonstrates my skills in full-stack development.
                </p>
              </div>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#1677FF] hover:text-[#2563EB] group shrink-0 transition-colors"
              >
                <span>View All Projects</span>
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-200" />
              </Link>
            </div>
          </ScrollReveal>

          {/* 3-Project Card Grid with Stagger & Micro-interactions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {featuredProjects.map((project, pIdx) => (
              <ScrollReveal
                key={project.id}
                animation="fade-up"
                delay={pIdx * 0.1}
                className="h-full"
              >
                <div className="ref-card h-full flex flex-col justify-between overflow-hidden group bg-white hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(16,27,60,0.08)] hover:border-blue-300 transition-all duration-300">
                  <div>
                    {/* Screenshot Container */}
                    <Link
                      href="/contact"
                      className="block relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-[#E4ECF7] cursor-pointer"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.035] transition-transform duration-500 ease-out"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-sm text-[11px] font-bold text-[#1677FF] shadow-xs border border-blue-100">
                          {project.badgeCategory}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-blue-600/90 text-[11px] font-bold text-white shadow-xs">
                          {project.tag}
                        </span>
                      </div>
                    </Link>

                    {/* Card Body */}
                    <div className="p-6">
                      <Link href="/contact" className="block group/title">
                        <h3 className="font-heading font-bold text-lg text-[#101B3C] mb-2 group-hover/title:text-[#1677FF] transition-colors line-clamp-1">
                          {project.title}
                        </h3>
                      </Link>
                      <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed line-clamp-2 mb-4">
                        {project.summary}
                      </p>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md bg-[#F7FAFF] border border-[#E4ECF7] text-[11px] font-medium text-[#64748B]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons Footer */}
                  <div className="p-6 pt-0 flex items-center gap-3">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full text-white text-xs font-semibold btn-gradient group/btn hover:shadow-md transition-all"
                      >
                        <span>Live Demo</span>
                        <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <Link
                        href="/contact"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full text-white text-xs font-semibold btn-gradient group/btn hover:shadow-md transition-all"
                      >
                        <span>View Details</span>
                        <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    )}

                    <a
                      href={project.github || 'https://github.com/Sayed4281'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-white border border-[#E4ECF7] hover:border-blue-400 text-[#101B3C] text-xs font-semibold transition-all hover:bg-slate-50"
                    >
                      <Github size={13} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. SERVICES PREVIEW (WHAT I OFFER)                             */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-blue-200 text-[#1677FF] text-xs font-bold tracking-wider uppercase mb-3 shadow-2xs">
                  <span>◆</span>
                  <span>MY SERVICES</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#101B3C] tracking-tight">
                  What I <span className="text-[#1677FF]">Offer</span>
                </h2>
                <p className="text-[#64748B] text-sm sm:text-base mt-2 max-w-xl">
                  I provide end-to-end web development and digital solutions that help businesses grow and succeed online.
                </p>
              </div>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#1677FF] hover:text-[#2563EB] group shrink-0 transition-colors"
              >
                <span>Explore All Services</span>
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-200" />
              </Link>
            </div>
          </ScrollReveal>

          {/* 6-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ScrollReveal
                key={service.id}
                animation="fade-up"
                delay={index * 0.08}
                className="h-full"
              >
                <div className="ref-card h-full p-6 sm:p-7 flex flex-col justify-between hover:border-blue-400 hover:shadow-[0_16px_36px_rgba(16,27,60,0.08)] hover:-translate-y-1.5 transition-all duration-300 group bg-white">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] border border-blue-200/70 flex items-center justify-center text-[#1677FF] mb-5 group-hover:scale-110 group-hover:bg-[#1677FF] group-hover:text-white transition-all duration-200">
                      {index === 0 && <Code size={24} />}
                      {index === 1 && <Palette size={24} />}
                      {index === 2 && <TrendingUp size={24} />}
                      {index === 3 && <Cpu size={24} />}
                      {index === 4 && <Globe size={24} />}
                      {index === 5 && <Headphones size={24} />}
                    </div>

                    <h3 className="font-heading font-bold text-lg text-[#101B3C] mb-2 group-hover:text-[#1677FF] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-6">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1677FF] hover:text-[#2563EB] group/link transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. CREDIBILITY METRICS BAR                                     */}
      {/* ============================================================== */}
      <section className="py-10 bg-[#F7FAFF] border-y border-[#E4ECF7]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal animation="fade-up">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {credibilityStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#E4ECF7]/80 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] border border-blue-200/60 flex items-center justify-center text-[#1677FF] shrink-0">
                    {i === 0 && <FolderGit2 size={20} />}
                    {i === 1 && <Clock size={20} />}
                    {i === 2 && <ShieldCheck size={20} />}
                    {i === 3 && <Headphones size={20} />}
                  </div>
                  <div>
                    <div className="font-heading font-extrabold text-2xl text-[#101B3C] leading-none mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#64748B] font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. COLLABORATION CTA                                           */}
      {/* ============================================================== */}
      <CollaborationCTA />
    </div>
  );
}
