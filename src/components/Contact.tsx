'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Sparkles, CheckCircle2, Clock, Briefcase, Code } from 'lucide-react';
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
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
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
        setFeedback({ type: 'success', message: 'Message delivered successfully! I will review your details and respond within 24 hours.' });
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
      subtext: 'Fastest response for project inquiries & hiring'
    },
    {
      icon: Phone,
      label: 'Phone & WhatsApp',
      value: '+91 9567220971',
      href: 'https://wa.me/919567220971',
      subtext: 'Available for calls & WhatsApp business chat'
    },
    {
      icon: MapPin,
      label: 'Location Base',
      value: 'Perinthalmanna, Malappuram District, Kerala, India',
      href: 'https://maps.google.com/?q=Perinthalmanna,Malappuram,Kerala',
      subtext: 'Open to Remote, Hybrid, & Relocation roles'
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/er-sayed-shahloob-p/" },
    { name: "GitHub", icon: Github, href: "https://github.com/Sayed4281" },
    { name: "WhatsApp", icon: WhatsAppIcon, href: "https://wa.me/919567220971" },
    { name: "Email", icon: Mail, href: "mailto:sayedshahloobpofficial@gmail.com" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/_sayed_4281_?utm_source=qr&igsi=MTA2dW5nZDhyeHN1Yg==" }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 relative bg-slate-50/70 border-b border-slate-200/80 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-indigo-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Channels & Social Hub */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="space-y-4">
              {contactOptions.map((item, i) => (
                <TiltCard key={i} className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md">
                  <a 
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 sm:p-6 bg-white border border-slate-200/90 hover:border-blue-400 transition-all group block w-full"
                  >
                    <div className="w-12 sm:w-14 h-12 sm:h-14 bg-blue-50 border border-blue-200 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0 shadow-sm">
                      <item.icon size={22} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-black text-blue-700 tracking-widest uppercase mb-0.5">{item.label}</p>
                      <p className="text-slate-900 font-bold text-xs sm:text-sm truncate group-hover:text-blue-600 transition-colors">{item.value}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">{item.subtext}</p>
                    </div>
                  </a>
                </TiltCard>
              ))}
            </div>

            {/* Social Connect Hub Card */}
            <div className="p-6 bg-white border border-slate-200/90 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                  <Sparkles size={14} className="text-blue-600" /> Connect Across Channels
                </span>
                <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
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
                      className="w-11 h-11 sm:w-12 sm:h-12 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-400 hover:bg-blue-50 transition-all group min-h-[44px] min-w-[44px] shadow-sm"
                    >
                      <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                    </a>
                  </MagneticButton>
                ))}
              </div>
            </div>

            {/* Response Time Guarantee Box */}
            <div className="p-4 bg-blue-50/80 border border-blue-200 rounded-xl flex items-center gap-3">
              <Clock size={18} className="text-blue-600 shrink-0" />
              <p className="text-xs text-slate-600 leading-tight">
                <span className="text-slate-900 font-bold">Fast Turnaround:</span> Inquiries are checked every business day. Expect a reply within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <TiltCard className="bg-white border border-slate-200 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden">
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display uppercase tracking-tight">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill in the form below to discuss opportunities, projects, or consulting inquiries.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-blue-50 rounded-full border border-blue-200 text-[10px] font-bold text-blue-700 uppercase shadow-sm">
                  <CheckCircle2 size={12} /> Direct Dispatch
                </div>
              </div>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-4 sm:space-y-5">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-blue-700 tracking-wider uppercase flex items-center justify-between">
                      <span>YOUR FULL NAME</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="name"
                      required
                      placeholder="e.g. Alexander Wright"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 sm:py-3.5 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all placeholder:text-slate-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-blue-700 tracking-wider uppercase flex items-center justify-between">
                      <span>EMAIL ADDRESS</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="alexander@company.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 sm:py-3.5 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Phone & Inquiry Topic */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-blue-700 tracking-wider uppercase flex items-center justify-between">
                      <span>PHONE NUMBER</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="phone"
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 sm:py-3.5 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all placeholder:text-slate-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-blue-700 tracking-wider uppercase flex items-center justify-between">
                      <span>INQUIRY TOPIC</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="subject"
                      required
                      defaultValue=""
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all appearance-none cursor-pointer"
                      style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'rgba(37,99,235,0.8)\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\' /%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.2rem center', backgroundSize: '1.2rem' }}
                    >
                      <option value="" disabled className="text-slate-400">Select inquiry topic</option>
                      <option value="Enterprise ERP / HRMS System">Enterprise ERP / HRMS System</option>
                      <option value="Technical Project Lead Role">Technical Project Lead Role</option>
                      <option value="Software Developer / Full-Stack Position">Software Developer / Full-Stack Position</option>
                      <option value="Custom Web Application Development">Custom Web Application Development</option>
                      <option value="Technical SEO & Architecture Consultation">Technical SEO & Architecture Consultation</option>
                      <option value="General Collaboration / Other">General Collaboration / Other</option>
                    </select>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-blue-700 tracking-wider uppercase flex items-center justify-between">
                    <span>PROJECT DESCRIPTION / MESSAGE</span>
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Provide details about your requirements, role specifications, or timeline..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 sm:py-3.5 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all resize-none placeholder:text-slate-400"
                  />
                </div>

                {/* Feedback Notification Box */}
                {feedback.message && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-xs font-bold p-4 rounded-xl flex items-center gap-2 ${
                      feedback.type === 'success' 
                        ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                        : 'bg-red-50 text-red-700 border border-red-200'
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
                    className="group relative w-full py-4 px-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black uppercase text-xs sm:text-sm tracking-wider rounded-full shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 min-h-[52px]"
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