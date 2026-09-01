import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  const gridItems = Array.from({ length: 20 });

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
           exit={{ 
             opacity: 0,
             transition: { duration: 0.8 }
           }}
           className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B1220] overflow-hidden"
        >
          {/* Fragmented Ambient Background Grid */}
          <div className="absolute inset-0 grid grid-cols-5 grid-rows-4 opacity-10">
            {gridItems.map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.4, 0] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: Math.random() * 1.5,
                  ease: "easeInOut"
                }}
                className="border-[0.5px] border-blue-500/20"
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center px-4 text-center">
            {/* Profile Photo Avatar with Animated Glowing Rings */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8 relative"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 border-2 border-[#263449] rounded-full p-1.5 bg-[#172033] shadow-2xl shadow-blue-500/20 relative z-10 overflow-hidden">
                <motion.img 
                  src="/sayed.png"
                  alt="Sayed Shahloob P"
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Spinning Glowing Ambient Rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 border border-blue-500/30 rounded-full border-t-cyan-400 border-r-transparent"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-5 border border-cyan-500/20 rounded-full border-b-blue-400 border-l-transparent"
              />
            </motion.div>

            {/* Name Typography Animation */}
            <div className="flex gap-[0.15em] sm:gap-[0.2em] mb-3 flex-wrap justify-center">
              {"SAYED SHAHLOOB P".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.3 + (i * 0.04),
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                  className={`text-sm sm:text-base md:text-lg font-black tracking-widest text-white uppercase ${char === " " ? "w-2 sm:w-3" : ""}`}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-[10px] sm:text-xs font-bold text-cyan-400 tracking-[0.35em] uppercase mb-5"
            >
              Software Developer • Tech Lead • Business Analyst
            </motion.div>

            {/* Tactical Gradient Progress Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent w-64 max-w-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

