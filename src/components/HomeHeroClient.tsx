'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Download, FolderGit2, Clock, ShieldCheck } from 'lucide-react';

interface HomeHeroClientProps {
  personal: {
    name: string;
    title: string;
    bio: string;
    resumeUrl: string;
    photoUrl: string;
  };
}

export default function HomeHeroClient({ personal }: HomeHeroClientProps) {
  const shouldReduceMotion = useReducedMotion();

  const techLogos = [
    {
      name: 'React',
      svg: (
        <svg className="w-5 h-5" viewBox="0 0 115.3 100" fill="#0284C7">
          <path d="M57.7 0C25.8 0 0 22.4 0 50s25.8 50 57.7 50 57.7-22.4 57.7-50S89.5 0 57.7 0zm0 88.5c-21.2 0-38.5-17.2-38.5-38.5S36.5 11.5 57.7 11.5 96.2 28.8 96.2 50 78.9 88.5 57.7 88.5z" />
          <circle cx="57.7" cy="50" r="14" fill="#0284C7" />
        </svg>
      ),
    },
    {
      name: 'Next.js',
      svg: (
        <svg className="w-5 h-5" viewBox="0 0 180 180" fill="none">
          <circle cx="90" cy="90" r="90" fill="#000000" />
          <path d="M149.508 157.08L69.142 54H54V125.842H66.697V68.796L139.73 162.774C143.123 161.047 146.393 159.138 149.508 157.08Z" fill="white" />
          <path d="M115.258 54H127.955V107.083L115.258 90.963V54Z" fill="white" />
        </svg>
      ),
    },
    {
      name: 'Node.js',
      svg: (
        <svg className="w-5 h-5" viewBox="0 0 256 289" fill="#16A34A">
          <path d="M128 0L256 73.9V215.1L128 289L0 215.1V73.9L128 0Z" />
        </svg>
      ),
    },
    {
      name: 'MongoDB',
      svg: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#15803D">
          <path d="M12 2C12 2 6 7 6 13C6 16.31 8.69 19 12 19C15.31 19 18 16.31 18 13C18 7 12 2 12 2Z" />
        </svg>
      ),
    },
    {
      name: 'Tailwind CSS',
      svg: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#06B6D4">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
        </svg>
      ),
    },
    {
      name: 'Git',
      svg: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#EA580C">
          <path d="M2.59,10.59L10.59,2.59C11.37,1.81 12.63,1.81 13.41,2.59L21.41,10.59C22.19,11.37 22.19,12.63 21.41,13.41L13.41,21.41C12.63,22.19 11.37,22.19 10.59,21.41L2.59,13.41C1.81,12.63 1.81,11.37 2.59,10.59Z" />
        </svg>
      ),
    },
    {
      name: 'PostgreSQL',
      svg: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#2563EB">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
      ),
    },
    {
      name: 'TypeScript',
      svg: (
        <div className="w-5 h-5 rounded bg-[#3178C6] text-white font-bold text-[10px] flex items-center justify-center">
          TS
        </div>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.09,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.55,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <section className="relative pt-6 sm:pt-8 lg:pt-10 pb-10 sm:pb-14 lg:pb-16 overflow-hidden bg-gradient-to-b from-[#F7FAFF] via-white to-white flex items-center min-h-[calc(100vh-4.5rem)]">
      {/* Decorative ambient blobs */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-blue-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-indigo-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 relative z-10 py-2 sm:py-3">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Sequenced Narrative & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-4 sm:space-y-5 text-left"
          >
            {/* 1. Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-blue-200/70 text-[#1677FF] text-xs font-bold tracking-wide shadow-2xs">
                <span className="text-[10px]">◆</span>
                <span>{personal.title}</span>
              </div>
            </motion.div>

            {/* 2. Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-heading font-black text-[#101B3C] tracking-tight leading-[1.12]"
            >
              Hi, I&apos;m <br />
              <span className="text-[#101B3C]">Sayed</span>{' '}
              <span className="text-brand-gradient">Shahloob P</span>
            </motion.h1>

            {/* 3. Professional Subtitle */}
            <motion.h2
              variants={itemVariants}
              className="text-lg sm:text-xl font-heading font-bold text-[#101B3C] tracking-tight"
            >
              Building Modern Web Experiences
            </motion.h2>

            {/* 4. Description */}
            <motion.p
              variants={itemVariants}
              className="text-[#64748B] text-sm sm:text-base leading-relaxed max-w-xl font-normal"
            >
              {personal.bio}
            </motion.p>

            {/* 5. CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3.5 pt-1"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm sm:text-base btn-gradient group shadow-md shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>View My Projects</span>
                <ArrowRight size={17} className="group-hover:translate-x-1.5 transition-transform duration-200" />
              </Link>

              <a
                href={personal.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#E4ECF7] hover:border-blue-400 text-[#101B3C] font-semibold text-sm sm:text-base shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
              >
                <span>Download CV</span>
                <Download size={17} className="text-[#1677FF] group-hover:translate-y-0.5 transition-transform duration-200" />
              </a>
            </motion.div>

            {/* 6. Tech Stack Horizontal Row with Stagger & Tooltip */}
            <motion.div variants={itemVariants} className="pt-2">
              <div className="flex items-center gap-2.5 flex-wrap">
                {techLogos.map((tech) => (
                  <div
                    key={tech.name}
                    title={tech.name}
                    aria-label={tech.name}
                    className="w-10 h-10 rounded-xl bg-white border border-[#E4ECF7] flex items-center justify-center shadow-xs hover:shadow-md hover:border-blue-300 hover:-translate-y-1 transition-all duration-200 cursor-default"
                  >
                    {tech.svg}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Photo + Floating Card + Annotation */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[310px] sm:max-w-[340px] lg:max-w-[365px]">
              {/* Soft Organic Blue Backdrop Blob */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#1677FF]/15 via-blue-100 to-[#6945FF]/10 rounded-[2.5rem] blur-xl transform -rotate-3" />

              {/* Photo Frame with gentle scale entrance */}
              <motion.div
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.65, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="relative rounded-[2rem] overflow-hidden border-2 border-white shadow-xl bg-white"
              >
                <div className="aspect-[4/4.5] sm:aspect-[4/4.3] w-full overflow-hidden relative">
                  <img
                    src="/sayed.png"
                    alt={personal.name}
                    className="w-full h-full object-cover object-top hover:scale-103 transition-transform duration-500"
                  />
                </div>
              </motion.div>

              {/* Floating Achievement Card on the right */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20, scale: shouldReduceMotion ? 1 : 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.38, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="absolute -bottom-3 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md border border-[#E4ECF7] rounded-xl p-3 sm:p-3.5 shadow-[0_10px_25px_rgba(22,119,255,0.10)] space-y-2.5 z-20 min-w-[165px]"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#1677FF]">
                    <FolderGit2 size={14} />
                  </div>
                  <div>
                    <div className="font-heading font-extrabold text-sm text-[#101B3C] leading-none">5+</div>
                    <div className="text-[10px] text-[#64748B] font-medium">Projects Completed</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#1677FF]">
                    <Clock size={14} />
                  </div>
                  <div>
                    <div className="font-heading font-extrabold text-sm text-[#101B3C] leading-none">1+</div>
                    <div className="text-[10px] text-[#64748B] font-medium">Years Experience</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#1677FF]">
                    <ShieldCheck size={14} />
                  </div>
                  <div>
                    <div className="font-heading font-extrabold text-sm text-[#101B3C] leading-none">100%</div>
                    <div className="text-[10px] text-[#64748B] font-medium">Commitment</div>
                  </div>
                </div>
              </motion.div>

              {/* Handwritten Annotation top-right */}
              <motion.div
                initial={{ opacity: 0, rotate: 12, scale: 0.9 }}
                animate={{ opacity: 1, rotate: 6, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
                className="absolute -top-6 right-0 select-none pointer-events-none"
              >
                <div className="font-handwritten text-lg sm:text-xl text-[#1677FF] font-bold tracking-wide drop-shadow-sm flex items-center gap-1">
                  <span>Code Build Improve</span>
                  <span className="text-lg">↗</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
