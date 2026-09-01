import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
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
          {/* Fragmented Background Grid */}
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

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Initial */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8 relative"
            >
              <div className="w-20 h-20 border border-[#263449] rounded-2xl flex items-center justify-center bg-[#172033] backdrop-blur-sm shadow-xl shadow-blue-500/10">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl font-display font-black text-white"
                >
                  S
                </motion.span>
              </div>
              {/* Spinning borders */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border border-blue-500/20 rounded-3xl"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 border border-cyan-500/10 rounded-2xl"
              />
            </motion.div>

            {/* Name */}
            <div className="flex gap-[0.2em] mb-4">
              {"SAYED SHAHLOOB P".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.4 + (i * 0.04),
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                  className={`text-sm md:text-base font-black tracking-widest text-white ${char === " " ? "w-3" : ""}`}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="text-[10px] font-bold text-cyan-400 tracking-[0.4em] uppercase mb-6"
            >
              Software Developer | Technical Lead | Business Analyst
            </motion.div>

            {/* Tactical Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.6 }}
              className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-64 mt-2"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
