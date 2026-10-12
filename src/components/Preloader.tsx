'use client';

import { motion, AnimatePresence } from 'framer-motion';

import { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Only show on initial session load, not on every multi-page navigation
    const hasVisited = typeof window !== 'undefined' && sessionStorage.getItem('portfolio_visited');
    if (!hasVisited) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('portfolio_visited', 'true');
        }
      }, 700);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
           exit={{ 
             opacity: 0,
             transition: { duration: 0.4 }
           }}
           className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FAFAFB] overflow-hidden"
        >
          <div className="relative z-10 flex flex-col items-center px-4 text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center font-display font-black text-slate-900 text-2xl mb-4"
            >
              S
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-xs font-semibold tracking-wider text-slate-900 uppercase mb-3"
            >
              Sayed Shahloob P
            </motion.div>

            {/* Tactical Progress Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="h-[2px] bg-slate-900 w-32 rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

