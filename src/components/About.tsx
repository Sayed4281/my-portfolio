'use client';

import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 relative overflow-hidden bg-white">
      {/* Background Decorative Mesh */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-100/70 blur-[130px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Image with Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <TiltCard className="relative aspect-[4/5] max-w-[280px] sm:max-w-[340px] md:max-w-[380px] mx-auto group rounded-[2.5rem] overflow-hidden border border-slate-200 p-3 bg-white shadow-xl">
              <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-slate-100">
                <img 
                  src="/sayed.png" 
                  alt="Sayed Shahloob P" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Stats Overlay - Clean Light Luxury */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="absolute bottom-4 right-4 p-4 sm:p-5 backdrop-blur-xl bg-white/95 border border-slate-200/90 rounded-[1.5rem] shadow-xl z-20"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display">8.08</h4>
                    <p className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">CGPA · B.Tech</p>
                  </div>
                  <div className="w-[1px] h-8 bg-slate-200" />
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display">ERP/HRMS</h4>
                    <p className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">Engineering</p>
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
                <div className="w-8 sm:w-10 h-[1.5px] bg-slate-900" />
                <span className="text-slate-500 text-[11px] sm:text-xs font-mono font-semibold tracking-[0.2em] uppercase">Professional Introduction</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 mb-4 sm:mb-6 leading-[1.15] tracking-tight font-display">
                Connecting Business Goals with <br />
                <span className="text-slate-600 font-medium">Reliable Production Software</span>
              </h2>
              
              <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-normal">
                <p className="border-l-2 border-slate-900 pl-4 text-slate-900 font-medium">
                  Software systems succeed when technical implementation strictly mirrors commercial and operational requirements.
                </p>

                <p className="pl-4">
                  My work spans the entire software delivery spectrum: uncovering root operational bottlenecks, translating client requirements into structured specifications, designing scalable schemas, and writing clean, maintainable code.
                </p>

                <p className="pl-4">
                  Through sprint planning, automated testing, user acceptance (UAT), and disciplined deployments, I ensure that software transitions smoothly from concept to production with predictable stability.
                </p>
              </div>

              {/* Core Delivery Lifecycle Flow */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pl-4 pt-2">
                {[
                  '1. Business Analysis', 
                  '2. Requirements Specs', 
                  '3. System Architecture', 
                  '4. Full-Stack Dev', 
                  '5. Testing & UAT', 
                  '6. Production Support'
                ].map((stage, idx) => (
                  <span 
                    key={stage}
                    className="px-3 py-1.5 bg-slate-50 border border-slate-200/80 rounded-lg text-xs font-medium text-slate-700 font-mono"
                  >
                    {stage}
                  </span>
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