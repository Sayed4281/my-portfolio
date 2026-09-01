'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Sparkles, CheckCircle2, Clock } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import MagneticButton from './MagneticButton';
import TiltCard from './TiltCard';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setFeedback({ type: null, message: '' });

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setFeedback({ type: 'success', message: '🚀 Message sent successfully! I will respond within 24 hours.' });
        formRef.current.reset();
      } else {
        setFeedback({ type: 'error', message: data.error || 'Failed to send message.' });
      }
    } catch (err: any) {
      setFeedback({ type: 'error', message: err?.message || 'Network error. Please try again.' });
    } finally {
      setIsSending(false);
    }
  };

  const contactOptions = [
    {
      icon: Mail,
      label: 'Direct Email',
      value: 'sayedshahloobpofficial@gmail.com',
      href: 'mailto:sayedshahloobpofficial@gmail.com',
      subtext: 'Fastest response for project inquiries'
    },
    {
      icon: Phone,
      label: 'Phone & WhatsApp',
      value: '+91 9567220971',
      href: 'https://wa.me/919567220971',
      subtext: 'Available for calls & WhatsApp chat'
    },
    {
      icon: MapPin,
      label: 'Location Base',
      value: 'Malappuram, Kerala, India',
      href: 'https://maps.google.com/?q=Malappuram,Kerala',
      subtext: 'Open to Remote & On-site Roles'
    }
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/Sayed4281" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/er-sayed-shahloob-p/" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/_sayed_4281_?utm_source=qr&igsi=MTA2dW5nZDhyeHN1Yg==" },
    { name: "WhatsApp", icon: WhatsAppIcon, href: "https://wa.me/919567220971" },
    { name: "Email", icon: Mail, href: "mailto:sayedshahloobpofficial@gmail.com" }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 relative bg-[#0E1726] overflow-hidden">
      {/* Dynamic Ambient Background Lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-cyan-300 uppercase tracking-widest">
                Available for Projects & Full-time Roles
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-display uppercase tracking-tight mb-4">
              Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">Together</span>
            </h2>

            <p className="text-[#94A3B8] text-xs sm:text-sm md:text-base leading-relaxed">
              Have an enterprise project, HRMS/ERP need, or technical leadership requirement? Reach out directly or drop a message below.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Channels & Social Hub */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="space-y-4">
              {contactOptions.map((item, i) => (
                <TiltCard key={i} className="rounded-2xl overflow-hidden">
                  <a 
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 sm:p-6 bg-[#172033] border border-[#263449] hover:border-blue-500/50 transition-all group block w-full shadow-lg"
                  >
                    <div className="w-12 sm:w-14 h-12 sm:h-14 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-cyan-300 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0 shadow-md">
                      <item.icon size={22} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-black text-cyan-400 tracking-widest uppercase mb-0.5">{item.label}</p>
                      <p className="text-white font-bold text-xs sm:text-sm truncate group-hover:text-cyan-300 transition-colors">{item.value}</p>
                      <p className="text-[10px] text-[#94A3B8] mt-0.5">{item.subtext}</p>
                    </div>
                  </a>
                </TiltCard>
              ))}
            </div>

            {/* Social Connect Hub Card */}
            <div className="p-6 bg-[#172033] border border-[#263449] rounded-2xl shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-black text-white uppercase tracking-widest flex items-center gap-2">
                  <Sparkles size={14} className="text-cyan-400" /> Connect Across Channels
                </span>
                <span className="text-[9px] font-bold text-cyan-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
                  Active
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, i) => (
                  <MagneticButton key={i}>
                    <a 
                      href={social.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      className="w-11 h-11 sm:w-12 sm:h-12 bg-[#0B1220] border border-[#263449] rounded-xl flex items-center justify-center text-[#94A3B8] hover:text-cyan-300 hover:border-blue-500/50 hover:bg-blue-600/10 transition-all group min-h-[44px] min-w-[44px]"
                    >
                      <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                    </a>
                  </MagneticButton>
                ))}
              </div>
            </div>

            {/* Response Time Guarantee Box */}
            <div className="p-4 bg-blue-500/5 border border-blue-500/15 rounded-xl flex items-center gap-3">
              <Clock size={18} className="text-cyan-400 shrink-0" />
              <p className="text-xs text-[#94A3B8] leading-tight">
                <span className="text-white font-semibold">Guaranteed Response:</span> Messages are monitored daily. Expect a reply within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Right Column: High-End Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <TiltCard className="bg-[#172033] border border-[#263449] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#263449]">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-display uppercase tracking-tight">
                    Send a Message
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-1">Fill in the details below to initiate a discussion.</p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20 text-[10px] font-bold text-cyan-300 uppercase">
                  <CheckCircle2 size={12} /> Direct Dispatch
                </div>
              </div>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-4 sm:space-y-5">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-cyan-400 tracking-wider uppercase flex items-center justify-between">
                      <span>YOUR FULL NAME</span>
                      <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="name"
                      required
                      placeholder="e.g. Alexander Wright"
                      className="w-full bg-[#0B1220] border border-[#263449] rounded-xl px-4 py-3 sm:py-3.5 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all placeholder:text-[#94A3B8]/40"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-cyan-400 tracking-wider uppercase flex items-center justify-between">
                      <span>EMAIL ADDRESS</span>
                      <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="alexander@company.com"
                      className="w-full bg-[#0B1220] border border-[#263449] rounded-xl px-4 py-3 sm:py-3.5 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all placeholder:text-[#94A3B8]/40"
                    />
                  </div>
                </div>

                {/* Phone & Subject Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-cyan-400 tracking-wider uppercase flex items-center justify-between">
                      <span>PHONE NUMBER</span>
                      <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="phone"
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#0B1220] border border-[#263449] rounded-xl px-4 py-3 sm:py-3.5 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all placeholder:text-[#94A3B8]/40"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-cyan-400 tracking-wider uppercase flex items-center justify-between">
                      <span>INQUIRY TOPIC</span>
                      <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="subject"
                      required
                      defaultValue=""
                      className="w-full bg-[#0B1220] border border-[#263449] rounded-xl px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all appearance-none"
                      style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'rgba(6,182,212,0.8)\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\' /%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.2rem center', backgroundSize: '1.2rem' }}
                    >
                      <option value="" disabled className="bg-[#0B1220] text-[#94A3B8]">Select subject topic</option>
                      <option value="Project" className="bg-[#0B1220] text-white">Project Collaboration</option>
                      <option value="Freelance" className="bg-[#0B1220] text-white">Freelance / Consulting Inquiry</option>
                      <option value="Hiring" className="bg-[#0B1220] text-white">Job Opportunity (Tech Lead / BA / Dev)</option>
                      <option value="Other" className="bg-[#0B1220] text-white">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-cyan-400 tracking-wider uppercase flex items-center justify-between">
                    <span>PROJECT DESCRIPTION / MESSAGE</span>
                    <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe your requirements, timeline, or inquiry..."
                    className="w-full bg-[#0B1220] border border-[#263449] rounded-xl px-4 py-3 sm:py-3.5 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none placeholder:text-[#94A3B8]/40"
                  />
                </div>

                {/* Feedback Notification Box */}
                {feedback.message && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-xs font-bold p-4 rounded-xl flex items-center gap-2 ${
                      feedback.type === 'success' 
                        ? 'bg-blue-500/20 text-cyan-300 border border-blue-500/30' 
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}
                  >
                    <span>{feedback.message}</span>
                  </motion.div>
                )}

                {/* Submit Button */}
                <MagneticButton className="w-full pt-2">
                  <button
                    disabled={isSending}
                    type="submit"
                    className="group relative w-full py-4 px-8 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black uppercase text-xs sm:text-sm tracking-wider rounded-full shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 min-h-[52px] border border-cyan-400/30"
                  >
                    <span>{isSending ? 'Dispatching Message...' : 'Send Message Now'}</span>
                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </MagneticButton>


              </form>
            </TiltCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;