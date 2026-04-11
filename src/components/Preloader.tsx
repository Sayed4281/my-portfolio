import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  // Grid items for the background fragment effect
  const gridItems = Array.from({ length: 20 });

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
           exit={{ 
             opacity: 0,
             transition: { duration: 1, delay: 0.5 }
           }}
           className="fixed inset-0 z-[100] flex items-center justify-center bg-[#000000] overflow-hidden"
        >
          {/* Fragmented Background Grid */}
          <div className="absolute inset-0 grid grid-cols-5 grid-rows-4 opacity-20">
            {gridItems.map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
                className="border-[0.5px] border-white/10"
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Initial */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8 relative"
            >
              <div className="w-20 h-20 border border-white/10 rounded-2xl flex items-center justify-center bg-white/5 backdrop-blur-sm">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-4xl font-display font-black text-white"
                >
                  S
                </motion.span>
              </div>
              {/* Spinning borders */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border border-white/5 rounded-3xl"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 border border-white/5 rounded-2xl"
              />
            </motion.div>

            {/* Name with Staggered Letter Animation */}
            <div className="flex gap-[0.2em] mb-4">
              {"SAYED SHAHLOOB".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.8 + (i * 0.05),
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  className={`text-sm md:text-base font-black tracking-widest text-white ${char === " " ? "w-4" : ""}`}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Corrected Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-[10px] font-bold text-neutral-500 tracking-[0.4em] uppercase mb-8"
            >
              Software Developer
            </motion.div>

            {/* Tactical Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
              className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-64 mt-2"
            />

            {/* Footer status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mt-12 flex items-center gap-2"
            >
              <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
              <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-[0.5em]">Establishing Connection</span>
            </motion.div>
          </div>

          {/* Wipe Effect on Exit */}
          <motion.div
            initial={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 bg-white origin-bottom z-50 pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
