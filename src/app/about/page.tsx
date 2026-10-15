import type { Metadata } from 'next';
import AboutHero from '@/components/AboutHero';
import Experience from '@/components/Experience';
import LeadershipManagement from '@/components/LeadershipManagement';
import HowIWork from '@/components/HowIWork';
import CTASection from '@/components/CTASection';
import TiltCard from '@/components/TiltCard';
import { 
  Download, 
  Mail, 
  ArrowRight, 
  Award, 
  GraduationCap, 
  CheckCircle2, 
  HeartHandshake, 
  Sparkles, 
  BookOpen, 
  Cpu, 
  Home, 
  Building 
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Me & Professional Experience — Sayed Shahloob P',
  description: 'Comprehensive professional profile of Sayed Shahloob P: Software Developer, Technical Project Lead, and SEO Analyst. Career timeline, education, research, and leadership.',
};

export default function AboutPage() {
  const academicPillars = [
    'Data Structures & Algorithms',
    'Database Management Systems (DBMS)',
    'Computer Networks & Security',
    'Operating Systems Architecture',
    'Software Engineering & Agile',
    'Object-Oriented Programming'
  ];

  return (
    <div className="min-h-screen">
      {/* 1. Executive About Hero Section */}
      <AboutHero />

      <div className="relative">
        {/* 2. Career Timeline */}
        <Experience />

        {/* 3. Education & Academic Distinction */}
        <section id="education" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
            <div className="max-w-4xl mx-auto">
              
              {/* Header */}
              <div className="text-center sm:text-left mb-8 sm:mb-12">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest mb-3 w-fit mx-auto sm:mx-0">
                  <GraduationCap size={14} className="text-blue-600" />
                  <span>Academic Qualifications</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display uppercase">
                  Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">Distinction</span>
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-2">
                  Rigorous foundational degree in Computer Science and Engineering with university honors.
                </p>
              </div>

              {/* 3D Interactive Education Card */}
              <TiltCard 
                maxTilt={6}
                glowColor="rgba(37, 99, 235, 0.16)"
                className="p-6 sm:p-9 rounded-[2.5rem] bg-white border border-slate-200/90 hover:border-blue-400 shadow-sm hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                {/* Accent Top Gradient */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500" />

                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                  
                  {/* Left Column: Degree & Details */}
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 text-blue-600 shrink-0 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                      <GraduationCap size={32} />
                    </div>

                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[10px] font-black uppercase tracking-wider text-blue-700">
                          Bachelor of Technology (B.Tech)
                        </span>
                        <span className="text-xs text-slate-400 font-medium">2021 &ndash; 2025</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
                        Computer Science and Engineering
                      </h3>

                      <p className="text-xs sm:text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                        <Building size={14} className="text-blue-600 shrink-0" />
                        <span>MEA Engineering College &bull; APJ Abdul Kalam Technological University (KTU)</span>
                      </p>

                      {/* Academic Foundations Matrix */}
                      <div className="pt-2">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Core Computer Science Foundations
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {academicPillars.map((pillar) => (
                            <span 
                              key={pillar}
                              className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/90 text-[10px] font-bold text-slate-700 group-hover:border-blue-200 transition-colors"
                            >
                              {pillar}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: CGPA Spotlight Box */}
                  <div className="w-full lg:w-auto shrink-0 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-blue-50/90 via-indigo-50/50 to-white border border-blue-200/90 text-center flex flex-col items-center justify-center shadow-xs">
                    <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-display">
                      8.08
                    </span>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">
                      Cumulative CGPA
                    </p>
                    <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-white text-[11px] font-extrabold shadow-sm">
                      <CheckCircle2 size={12} />
                      <span>First Class with Distinction</span>
                    </div>
                  </div>

                </div>
              </TiltCard>
            </div>
          </div>
        </section>

        {/* 4. Leadership & Team Coordination */}
        <LeadershipManagement />

        {/* 5. How I Work: 4-Phase Delivery Methodology */}
        <HowIWork />

        {/* 6. Research, Publications & Community Impact */}
        <section id="research" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-1/2 left-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
            <div className="max-w-4xl mx-auto">
              
              {/* Header */}
              <div className="text-center sm:text-left mb-8 sm:mb-12">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-3 w-fit mx-auto sm:mx-0">
                  <Award size={14} className="text-indigo-600" />
                  <span>Research &amp; Social Impact</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display uppercase">
                  Publications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">Leadership</span>
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-2">
                  Peer-reviewed technical research publications and verified humanitarian project coordination.
                </p>
              </div>

              <div className="space-y-6 sm:space-y-8">
                
                {/* 3D Card 1: Research Publication */}
                <TiltCard 
                  maxTilt={6}
                  glowColor="rgba(99, 102, 241, 0.16)"
                  className="p-6 sm:p-8 rounded-[2.5rem] bg-white border border-slate-200/90 hover:border-indigo-400 shadow-sm hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500" />

                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600 shrink-0 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                        <BookOpen size={28} />
                      </div>
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-black uppercase tracking-wider">
                            International Conference Publication
                          </span>
                          <span className="text-[11px] font-bold text-slate-500">ICETI4T 2025</span>
                        </div>
                        <h3 className="text-lg sm:text-2xl font-black text-slate-900 font-display">
                          NeuVitX: IoT-Enabled Health Telemetry & AI Diagnostic System
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                          Presented at the International Conference on Emerging Trends in Industry 4.0 Technologies. Co-engineered an IoT biometric architecture with real-time sensor processing and machine learning models for proactive vitals anomaly detection.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-700">
                            IoT Telemetry
                          </span>
                          <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-700">
                            Python &amp; ML
                          </span>
                          <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-700">
                            Flutter Mobile UI
                          </span>
                          <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-700">
                            Real-Time MQTT
                          </span>
                        </div>
                      </div>
                    </div>

                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white border border-indigo-200 text-xs font-bold uppercase tracking-wider transition-all duration-300 shrink-0 self-end md:self-center shadow-2xs hover:shadow-md"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </TiltCard>

                {/* 3D Card 2: Humanitarian Community Leadership */}
                <TiltCard 
                  maxTilt={6}
                  glowColor="rgba(16, 185, 129, 0.16)"
                  className="p-6 sm:p-8 rounded-[2.5rem] bg-white border border-slate-200/90 hover:border-emerald-400 shadow-sm hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />

                  <div className="flex flex-col sm:flex-row items-start gap-5">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 shrink-0 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                      <HeartHandshake size={30} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-black uppercase tracking-wider">
                          Humanitarian Leadership
                        </span>
                        <span className="text-[11px] font-bold text-slate-500">National Service Scheme (NSS)</span>
                      </div>
                      <h3 className="text-lg sm:text-2xl font-black text-slate-900 font-display">
                        Dream House Project Coordinator — 5 Residential Homes
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                        Coordinated student volunteers, material logistics, procurement, and community sponsors for the construction and formal handover of 5 residential houses for underprivileged families.
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        <span className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-[10px] font-bold text-emerald-800">
                          5 Houses Handed Over
                        </span>
                        <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-700">
                          Resource Logistics
                        </span>
                        <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-700">
                          Volunteer Coordination
                        </span>
                      </div>
                    </div>
                  </div>
                </TiltCard>

              </div>
            </div>
          </div>
        </section>

        {/* 7. Resume Download & Executive Contact CTA Card */}
        <CTASection
          badge="Executive Profile & Direct Contact"
          title="Let's Build the Next"
          highlightText="Milestone Together"
          description="Available for technical leadership positions, enterprise system planning, or consulting on scalable software development."
          primaryBtnText="Initiate Contact"
          primaryBtnHref="/contact"
          secondaryBtnText="Download Resume (PDF)"
          secondaryBtnHref="/Sayed_Shahloob_P_.pdf"
          secondaryBtnDownload="Sayed_Shahloob_P_Resume.pdf"
          secondaryBtnIcon={<Download size={15} />}
          trustBadges={[
            'B.Tech CSE Distinction (8.08 CGPA)',
            'Hirush Global LLP Tech Lead',
            'Published Researcher ICETI4T 2025',
          ]}
        />
      </div>
    </div>
  );
}

