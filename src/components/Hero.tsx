'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, Instagram, ArrowRight, Sparkles } from 'lucide-react';

import { WhatsAppIcon } from './WhatsAppIcon';
import { useRef } from 'react';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.96]);

  const socialLinks = [
    { name: "GitHub", Icon: Github, href: "https://github.com/Sayed4281" },
    { name: "LinkedIn", Icon: Linkedin, href: "https://www.linkedin.com/in/er-sayed-shahloob-p/" },
    { name: "Instagram", Icon: Instagram, href: "https://www.instagram.com/_sayed_4281_?utm_source=qr&igsi=MTA2dW5nZDhyeHN1Yg==" },
    { name: "WhatsApp", Icon: WhatsAppIcon, href: "https://wa.me/919567220971" },
    { name: "Email", Icon: Mail, href: "mailto:sayedshahloobpofficial@gmail.com" }
  ];

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="min-h-[92vh] lg:min-h-screen flex items-center justify-center relative overflow-hidden pt-24 sm:pt-28 pb-12 sm:pb-16 bg-[#0B1220]"
    >
      {/* Ambient Radial Lighting & Glowing Blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y }}
          className="absolute top-1/4 left-1/4 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-blue-600/[0.07] rounded-full blur-[100px] sm:blur-[140px]"
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -80]) }}
          className="absolute bottom-1/4 right-1/4 w-[240px] sm:w-[400px] h-[240px] sm:h-[400px] bg-cyan-500/[0.05] rounded-full blur-[90px] sm:blur-[120px]"
        />
      </div>

      <motion.div 
        style={{ opacity, scale }}
        className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl"
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column Text Content */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col text-left">

            {/* Availability / Roles Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 border border-blue-500/25 rounded-full mb-4 sm:mb-6 self-start max-w-full shadow-lg shadow-blue-500/5 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-cyan-300 truncate">
                Tech Lead • Business Analyst • Dev
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-4 sm:mb-6 font-display tracking-tight text-white uppercase"
            >
              Sayed <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">Shahloob P</span>
            </motion.h1>

            {/* Sub-headline Narrative */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base lg:text-lg text-[#F8FAFC] mb-3 sm:mb-4 max-w-2xl leading-relaxed font-medium"
            >
              I bridge business requirements and technology by managing software projects, analyzing workflows, coordinating development teams, and contributing to full-stack enterprise applications.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xs sm:text-sm lg:text-base text-[#94A3B8] mb-6 sm:mb-8 max-w-2xl leading-relaxed"
            >
              Building and delivering business-driven software solutions across ERP, HRMS, web applications, and enterprise systems.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10"
            >
              <a
                href="#projects"
                className="group relative px-6 sm:px-7 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white text-xs sm:text-sm font-black uppercase tracking-wider rounded-full shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-2 min-h-[46px]"
              >
                <span>View Projects</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/Sayed_Shahloob_P_.pdf"
                target="_blank"
                download
                className="flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-[#172033] text-[#F8FAFC] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full border border-[#263449] hover:border-blue-500/50 hover:bg-[#1E293B] transition-all duration-300 hover:scale-105 active:scale-95 text-center min-h-[46px]"
              >
                <FileText size={16} className="text-cyan-400" />
                Download CV
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-1.5 px-6 sm:px-7 py-3.5 bg-cyan-500/10 text-cyan-300 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full border border-cyan-500/30 hover:bg-cyan-500/20 transition-all duration-300 hover:scale-105 active:scale-95 text-center min-h-[46px]"
              >
                <Sparkles size={15} />
                Contact Me
              </a>
            </motion.div>

            {/* Social Links Row */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.0 }}
              className="flex items-center gap-3 sm:gap-4 flex-wrap"
            >
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#94A3B8]">
                Connect:
              </span>
              <div className="flex gap-2.5 sm:gap-3 flex-wrap">
                {socialLinks.map(({ name, Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={name}
                    className="group relative p-2.5 sm:p-3 text-[#94A3B8] hover:text-cyan-300 transition-all duration-300 bg-[#172033] border border-[#263449] rounded-xl hover:border-blue-500/50 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  >
                    <Icon size={18} className="relative z-10 group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-blue-500/10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column Profile Showcase Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
            className="order-1 lg:order-2 lg:col-span-5 flex justify-center"
          >
            <div className="relative group">
              {/* Rotating Ambient Decorative Rings */}
              <div className="absolute inset-0 -m-4 sm:-m-6 border border-blue-500/25 rounded-[2.5rem] sm:rounded-[3rem] animate-[spin_25s_linear_infinite] pointer-events-none" />
              <div className="absolute inset-0 -m-2 sm:-m-3 border border-cyan-400/15 rounded-[2rem] sm:rounded-[2.5rem] animate-[spin_18s_linear_infinite_reverse] pointer-events-none" />

              <div className="relative rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-[#263449] bg-[#172033] shadow-2xl transition-all duration-700 aspect-[3/4] w-[210px] xs:w-[240px] sm:w-[290px] md:w-[320px] lg:w-[340px] group-hover:border-blue-500/50">
                <motion.img
                  src="/IMG_0594.JPG.jpeg"
                  alt="Sayed Shahloob P"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover brightness-100 contrast-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent z-20 opacity-40" />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden lg:flex pointer-events-none"
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#94A3B8]">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

