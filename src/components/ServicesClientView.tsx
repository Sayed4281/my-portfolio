'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  Code, 
  TrendingUp, 
  Search, 
  Palette, 
  Globe, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  X,
  Sparkles
} from 'lucide-react';
import { ServiceItem } from '@/data/portfolioData';

interface ServicesClientViewProps {
  services: ServiceItem[];
}

export default function ServicesClientView({ services }: ServicesClientViewProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Escape key support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedService(null);
      }
    };
    if (selectedService) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  const getServiceIcon = (index: number) => {
    switch (index) {
      case 0: return <Code size={24} />;
      case 1: return <TrendingUp size={24} />;
      case 2: return <Search size={24} />;
      case 3: return <Palette size={24} />;
      case 4: return <Globe size={24} />;
      case 5: return <Cpu size={24} />;
      default: return <Code size={24} />;
    }
  };

  return (
    <>
      {/* ============================================================== */}
      {/* 2. CORE SERVICES 6-CARD GRID                                   */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-blue-200 text-[#1677FF] text-xs font-bold tracking-wider uppercase mb-3">
              <span>◆</span>
              <span>What I Offer</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#101B3C] tracking-tight">
              My Core <span className="text-[#1677FF]">Services</span>
            </h2>
            <p className="text-[#64748B] text-sm sm:text-base mt-2 max-w-xl">
              Comprehensive digital solutions tailored to your business needs.
            </p>
          </div>

          {/* 6-Card Grid with Fade-Up and Micro-interactions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="ref-card p-7 sm:p-8 flex flex-col justify-between hover:border-blue-400 hover:shadow-[0_16px_36px_rgba(16,27,60,0.08)] hover:-translate-y-1.5 transition-all duration-300 bg-white group"
              >
                <div>
                  {/* Colored Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] border border-blue-200/70 flex items-center justify-center text-[#1677FF] mb-6 group-hover:scale-110 group-hover:bg-[#1677FF] group-hover:text-white transition-all duration-200">
                    {getServiceIcon(index)}
                  </div>

                  <h3 className="font-heading font-bold text-xl text-[#101B3C] mb-3 group-hover:text-[#1677FF] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* 3 Deliverables with Blue Checkmarks */}
                  <ul className="space-y-2.5 mb-8">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-xs sm:text-[13px] font-medium text-slate-700">
                        <CheckCircle2 size={16} className="text-[#1677FF] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Working Learn More Button with Arrow Animation */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedService(service)}
                    aria-label={`Learn more about ${service.title}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1677FF] hover:text-[#2563EB] group/btn cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-sm"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1.5 transition-transform duration-200" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SERVICE DETAIL MODAL (Accessible & Escape-Enabled)             */}
      {/* ============================================================== */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-lg w-full border border-[#E4ECF7] shadow-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                aria-label="Close service details"
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <X size={20} />
              </button>

              <div className="space-y-5">
                <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] border border-blue-200/70 flex items-center justify-center text-[#1677FF]">
                  <Sparkles size={24} />
                </div>

                <div>
                  <h3 id="service-modal-title" className="text-2xl font-heading font-extrabold text-[#101B3C]">
                    {selectedService.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                    {selectedService.desc}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#1677FF] mb-3">
                    Deliverables &amp; Inclusions
                  </h4>
                  <div className="space-y-2">
                    {selectedService.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 size={16} className="text-[#1677FF] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-white font-semibold text-xs btn-gradient shadow-md shadow-blue-500/20 hover:shadow-lg transition-all"
                  >
                    <span>Discuss This Service</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
