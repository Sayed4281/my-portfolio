'use client';

import { motion, AnimatePresence } from 'framer-motion';

import { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Respect user's reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setLoading(false);
      return;
    }

    // Allow complete elegant animation of avatar, name, subtitle, and progress bar
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  const gridItems = Array.from({ length: 20 });

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
           initial={{ opacity: 1 }}
           exit={{ 
             opacity: 0,
             scale: 1.02,
             transition: { duration: 0.5, ease: "easeInOut" }
           }}
           className="fixed inset-0 z-[100] flex items-center justify-center bg-[#F8FAFC] overflow-hidden pointer-events-none"
        >
          {/* Fragmented Ambient Background Grid */}
          <div className="absolute inset-0 grid grid-cols-5 grid-rows-4 opacity-30">
            {gridItems.map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: Math.random() * 1.5,
                  ease: "easeInOut"
                }}
                className="border-[0.5px] border-slate-200"
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center px-4 text-center">
            {/* Profile Photo Avatar with Animated Glowing Rings */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mb-7 relative"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 border-2 border-slate-200 rounded-full p-1.5 bg-white shadow-2xl shadow-blue-500/15 relative z-10 overflow-hidden">
                <motion.img 
                  src="/sayed.png"
                  alt="Sayed Shahloob P"
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>

              {/* Spinning Glowing Ambient Rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 border border-blue-500/30 rounded-full border-t-blue-600 border-r-transparent"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-5 border border-indigo-500/20 rounded-full border-b-indigo-600 border-l-transparent"
              />
            </motion.div>

            {/* Name Typography Animation */}
            <div className="flex gap-[0.15em] sm:gap-[0.2em] mb-2.5 flex-wrap justify-center">
              {"SAYED SHAHLOOB P".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.25 + (i * 0.035),
                    duration: 0.35,
                    ease: "easeOut"
                  }}
                  className={`text-sm sm:text-base md:text-lg font-black tracking-widest text-slate-900 uppercase ${char === " " ? "w-2 sm:w-3" : ""}`}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Subtitle (Software Developer • Technical Lead • SEO Analyst) */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.4 }}
              className="text-[10px] sm:text-xs font-bold text-blue-600 tracking-[0.3em] uppercase mb-5"
            >
              Software Developer • Technical Lead • SEO Analyst
            </motion.div>

            {/* Tactical Gradient Progress Line */}
            <motion.div
              initial={{ width: 0, opacity: 0.4 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-blue-600 to-transparent w-64 max-w-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

