import type { Metadata } from 'next';
import AboutHero from '@/components/AboutHero';
import Experience from '@/components/Experience';
import LeadershipManagement from '@/components/LeadershipManagement';
import HowIWork from '@/components/HowIWork';
import CTASection from '@/components/CTASection';
import { Download, Mail, ArrowRight, Award, GraduationCap, CheckCircle2, HeartHandshake, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Me & Professional Experience — Sayed Shahloob P',
  description: 'Comprehensive professional profile of Sayed Shahloob P: Software Developer, Technical Project Lead, and SEO Analyst. Career timeline, education, research, and leadership.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* 1. Executive About Hero Section */}
      <AboutHero />

      <div className="relative">
        {/* 2. Career Timeline */}
        <Experience />

        {/* 4. Education & Academic Distinction */}
        <section id="education" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-4 w-fit">
                <GraduationCap size={14} className="text-blue-600" />
                <span>Academic Foundation</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-display mb-8">
                Education & Qualifications
              </h2>

              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 shrink-0">
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
                      Bachelor of Technology (B.Tech)
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                      Computer Science and Engineering
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      MEA Engineering College · APJ Abdul Kalam Technological University (KTU)
                    </p>
                    <p className="text-xs text-slate-500 mt-2">
                      Core Foundations: Data Structures, Algorithms, Database Management Systems, Software Engineering, Computer Networks, Operating Systems.
                    </p>
                  </div>
                </div>

                <div className="sm:text-right shrink-0 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-3xl font-black text-blue-600 font-display">8.08</span>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Cumulative CGPA</p>
                  <span className="inline-block mt-1 px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold">
                    First Class with Distinction
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Leadership & Team Coordination */}
        <LeadershipManagement />

        {/* 6. How I Work: 4-Phase Delivery Methodology */}
        <HowIWork />

        {/* 7. Research, Publications & Community Leadership */}
        <section id="research" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-4 w-fit">
                <Award size={14} className="text-indigo-600" />
                <span>Publications & Impact</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-display mb-8">
                Research & Selected Recognition
              </h2>

              <div className="space-y-6">
                {/* Research Publication */}
                <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600 shrink-0">
                      <Award size={26} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700">
                        International Conference Publication
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                        ICETI4T 2025: NeuVitX AI Health Monitoring System
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        Peer-reviewed research presented at the International Conference on Emerging Trends in Industry 4.0 Technologies. Co-engineered an IoT biometric architecture with machine learning algorithms for real-time vitals anomaly detection.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-[10px] font-semibold text-slate-700">
                          IoT Biometrics
                        </span>
                        <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-[10px] font-semibold text-slate-700">
                          Python & ML
                        </span>
                        <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-[10px] font-semibold text-slate-700">
                          Flutter Mobile App
                        </span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700 shrink-0 self-end md:self-center"
                  >
                    <span>View Project Case Study</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Community Leadership */}
                <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 shrink-0">
                    <HeartHandshake size={26} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                      Social Impact & Leadership
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                      National Service Scheme (NSS) — Dream House Project Coordinator
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Coordinated volunteer teams, material logistics, and community stakeholders for the construction and handover of 5 residential houses for underprivileged families.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Resume Download & Executive Contact CTA Card */}
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
