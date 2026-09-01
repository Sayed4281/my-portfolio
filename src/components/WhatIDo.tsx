'use client';

import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

import { 
  FolderKanban, 
  LineChart, 
  Boxes, 
  Compass, 
  Code2 
} from 'lucide-react';


const WhatIDo = () => {
  const services = [
    {
      title: 'Project Management',
      icon: FolderKanban,
      badge: 'Agile & Delivery',
      description: 'End-to-end software project coordination, sprint planning, task assignment, and timely delivery across multi-disciplinary teams.',
      bullets: ['Sprint & Task Planning', 'Resource & Scope Management', 'Milestone Delivery']
    },
    {
      title: 'Business Analysis',
      icon: LineChart,
      badge: 'Strategy & Requirements',
      description: 'Requirements gathering, business process analysis, workflow definition, and translating stakeholder vision into functional specs.',
      bullets: ['Workflow Optimization', 'Functional Documentation', 'UAT & Stakeholder Sign-off']
    },
    {
      title: 'ERP & HRMS Systems',
      icon: Boxes,
      badge: 'Enterprise Solutions',
      description: 'Planning, development, testing, and implementation of enterprise systems covering HR, CRM, Finance, Payroll, Attendance, and reporting.',
      bullets: ['HRMS & Attendance Modules', 'Payroll & Accounting Ledgers', 'RBAC & Multi-tenant Security']
    },
    {
      title: 'Technical Consulting',
      icon: Compass,
      badge: 'Solution Planning & Implementation',
      description: 'Translating complex business requirements into practical technical solutions, functional workflow planning, and team coordination.',
      bullets: ['Client Proposals & Quotations', 'Solution Planning & Workflow', 'Bridge Management & Devs']
    },
    {
      title: 'Software Development',
      icon: Code2,
      badge: 'Full-Stack Web & Mobile',
      description: 'Hands-on engineering using Next.js, React, TypeScript, Node.js, Flutter, PostgreSQL, and robust REST APIs.',
      bullets: ['Scalable Frontend Architecture', 'REST & GraphQL APIs', 'Performance & SEO Optimization']
    }
  ];

  return (
    <section id="what-i-do" className="py-12 sm:py-16 md:py-20 relative bg-[#0E1726] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-600/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-cyan-400 text-[11px] sm:text-xs font-black tracking-[0.4em] uppercase mb-2 block">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white mb-3 sm:mb-4 uppercase tracking-tight">
              What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">Do</span>
            </h2>
            <p className="text-[#94A3B8] text-xs sm:text-sm md:text-base leading-relaxed">
              Bridging business objectives and software execution through structured management, functional analysis, and full-stack engineering.
            </p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((item, index) => {
            const Icon = item.icon;
            const isFeatured = index === 2; // ERP Card visually highlighted

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="h-full flex"
              >
                <TiltCard
                  className={`group relative rounded-[2rem] p-6 sm:p-8 border transition-all duration-500 flex flex-col justify-between w-full ${
                    isFeatured 
                      ? 'bg-gradient-to-b from-blue-600/15 via-[#172033] to-[#172033] border-blue-500/50 shadow-2xl shadow-blue-500/10' 
                      : 'bg-[#172033] border-[#263449] hover:border-blue-500/40'
                  }`}
                >
                  <div>
                    {/* Top Bar inside Card */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 text-cyan-300">
                        <Icon size={24} className="transition-transform group-hover:scale-110" />
                      </div>
                      <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] text-cyan-300 font-bold uppercase tracking-wider">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-white mb-3 font-display">
                      {item.title}
                    </h3>

                    <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="pt-5 border-t border-[#263449]">
                    <ul className="space-y-2">
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#94A3B8]">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:bg-blue-400 transition-colors" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhatIDo;

