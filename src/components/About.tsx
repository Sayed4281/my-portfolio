'use client';

import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-white border-b border-slate-200/80">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-blue-500/[0.04] blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Side: Image with Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <TiltCard className="relative aspect-[4/5] max-w-[260px] sm:max-w-[340px] md:max-w-[380px] mx-auto group rounded-[2.5rem] overflow-hidden border border-slate-200 p-3 bg-white shadow-xl">
              <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-slate-50">
                <img 
                  src="/sayed.png" 
                  alt="Sayed Shahloob P" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-60" />
              </div>

              {/* Stats Overlay - Premium Light Glass */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="absolute bottom-4 right-4 p-4 sm:p-5 backdrop-blur-2xl bg-white/95 border border-slate-200 rounded-[1.5rem] shadow-xl z-20"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">2+</h4>
                    <p className="text-[9px] sm:text-[10px] uppercase font-bold text-blue-700 tracking-[0.15em]">Years Exp.</p>
                  </div>
                  <div className="w-[1px] h-8 bg-slate-200" />
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">15+</h4>
                    <p className="text-[9px] sm:text-[10px] uppercase font-bold text-blue-700 tracking-[0.15em]">Projects</p>
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          </motion.div>

          {/* Right Side: Narrative Content */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-8 sm:w-10 h-[2px] bg-blue-600" />
                <span className="text-blue-700 text-[11px] sm:text-xs font-black tracking-[0.3em] uppercase">Who I Am</span>
              </div>
              
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 sm:mb-6 leading-[1.1] tracking-tight font-display uppercase">
                Software Developer & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">Technical Lead</span>
              </h2>
              
              <div className="space-y-3.5 sm:space-y-5 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-6 font-normal">
                <p className="border-l-2 border-blue-600 pl-4 italic text-slate-800 font-medium">
                  &ldquo;I understand the client&apos;s business problem, convert it into a technical solution, coordinate the team, and help deliver the software.&rdquo;
                </p>

                <p className="pl-4 text-slate-600">
                  I am a <span className="text-slate-900 font-bold">Software Developer, Technical Project Lead, and SEO Analyst</span> with hands-on experience across software development, technical SEO, ERP/HRMS implementation, client management, and project delivery.
                </p>

                <p className="pl-4 text-slate-600">
                  I work across the complete project lifecycle—from understanding technical requirements and optimizing web performance to planning solutions, coordinating development, testing, and deployment.
                </p>
              </div>

              {/* Core Philosophy Badges */}
              <div className="flex flex-wrap gap-2 pl-4">
                {['Technical SEO', 'ERP/HRMS Architecture', 'Team Coordination', 'Agile Delivery'].map((tag, idx) => (
                  <motion.span 
                    key={tag}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * idx }}
                    className="px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-[10px] sm:text-xs font-bold text-blue-700 uppercase tracking-wider shadow-sm"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;