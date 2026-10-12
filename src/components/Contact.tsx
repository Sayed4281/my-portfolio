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
        setFeedback({ type: 'success', message: 'Message sent successfully! Thank you for reaching out.' });
        formRef.current.reset();
      } else {
        setFeedback({ type: 'error', message: data.error || 'Failed to dispatch message.' });
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
      subtext: 'Direct channel for project discussions'
    },
    {
      icon: Phone,
      label: 'Phone & WhatsApp',
      value: '+91 9567220971',
      href: 'https://wa.me/919567220971',
      subtext: 'Direct calls & instant business chat'
    },
    {
      icon: MapPin,
      label: 'Headquarters / Location',
      value: 'Malappuram, Kerala, India',
      href: 'https://maps.google.com/?q=Malappuram,Kerala',
      subtext: 'Open to Remote & Hybrid Engagements'
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
    <section id="contact" className="py-16 sm:py-20 md:py-24 relative bg-white border-t border-slate-200/80 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200/80 rounded-full mb-4 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider font-mono">
                Available for Engineering &amp; Delivery Engagements
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-4 font-display">
              Initiate a Technical Discussion
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              Discuss enterprise software initiatives, ERP &amp; HRMS architecture requirements, technical project coordination, or full-stack software delivery.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Channels & Social Hub */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="space-y-3.5">
              {contactOptions.map((item, i) => (
                <TiltCard key={i} className="rounded-2xl overflow-hidden">
                  <a 
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 sm:p-6 bg-[#FAFAFB] border border-slate-200/90 hover:border-slate-400 hover:bg-white transition-all group block w-full rounded-2xl shadow-2xs hover:shadow-md"
                  >
                    <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 shrink-0 shadow-xs">
                      <item.icon size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-bold text-slate-500 tracking-wider uppercase mb-0.5 font-mono">{item.label}</p>
                      <p className="text-slate-950 font-bold text-xs sm:text-sm truncate group-hover:text-blue-600 transition-colors">{item.value}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">{item.subtext}</p>
                    </div>
                  </a>
                </TiltCard>
              ))}
            </div>

            {/* Social Connect Hub Card */}
            <div className="p-6 bg-[#FAFAFB] border border-slate-200/90 rounded-2xl shadow-2xs">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 font-mono">
                  <Sparkles size={14} className="text-blue-600" /> Direct Profiles
                </span>
                <span className="text-[10px] font-semibold text-slate-600 bg-white px-2 py-0.5 rounded-full border border-slate-200 font-mono">
                  Verified Channels
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((social, i) => (
                  <MagneticButton key={i}>
                    <a 
                      href={social.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      className="w-11 h-11 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-700 hover:text-slate-950 hover:border-slate-900 hover:bg-slate-50 transition-all group shadow-2xs min-h-[44px] min-w-[44px]"
                    >
                      <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                    </a>
                  </MagneticButton>
                ))}
              </div>
            </div>

            {/* Delivery Note */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3">
              <Clock size={18} className="text-blue-600 shrink-0" />
              <p className="text-xs text-slate-600 leading-tight">
                <span className="text-slate-900 font-semibold">Direct Communication:</span> Inquiries are routed directly to my personal inbox and reviewed promptly.
              </p>
            </div>
          </motion.div>

          {/* Right Column: High-End Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#FAFAFB] border border-slate-200/90 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden">
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight font-display">
                    Direct Inquiry
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">Submit your requirements to initiate an engineering or business consultation.</p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full border border-slate-200 text-[11px] font-bold text-slate-800 font-mono">
                  <CheckCircle2 size={13} className="text-blue-600" /> Direct Delivery
                </div>
              </div>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-4 sm:space-y-5">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-700 tracking-wider uppercase flex items-center justify-between">
                      <span>Full Name</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="name"
                      required
                      placeholder="e.g. Alexander Wright"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/5 transition-all placeholder:text-slate-400 shadow-2xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-700 tracking-wider uppercase flex items-center justify-between">
                      <span>Work Email</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="alexander@company.com"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/5 transition-all placeholder:text-slate-400 shadow-2xs"
                    />
                  </div>
                </div>

                {/* Phone & Subject Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-700 tracking-wider uppercase flex items-center justify-between">
                      <span>Phone / WhatsApp</span>
                      <span className="text-slate-400 font-normal text-[10px]">(Optional)</span>
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/5 transition-all placeholder:text-slate-400 shadow-2xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-700 tracking-wider uppercase flex items-center justify-between">
                      <span>Engagement Type</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="subject"
                      required
                      defaultValue=""
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/5 transition-all shadow-2xs appearance-none"
                      style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%2364748b\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\' /%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.2rem center', backgroundSize: '1rem' }}
                    >
                      <option value="" disabled className="text-slate-400">Select engagement topic</option>
                      <option value="ERP Architecture" className="text-slate-900">ERP / HRMS Enterprise Architecture</option>
                      <option value="Technical Leadership" className="text-slate-900">Technical Project Leadership / BA</option>
                      <option value="Full-Stack Engineering" className="text-slate-900">Full-Stack Development (React, Next.js, Node)</option>
                      <option value="Hiring / Career" className="text-slate-900">Strategic Hiring Opportunity</option>
                      <option value="General Consulting" className="text-slate-900">General Consulting / Other</option>
                    </select>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-700 tracking-wider uppercase flex items-center justify-between">
                    <span>Project Scope & Requirements</span>
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Briefly describe your project requirements, scope, target timeline, or inquiry..."
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/5 transition-all resize-none placeholder:text-slate-400 shadow-2xs"
                  />
                </div>

                {/* Feedback Notification Box */}
                {feedback.message && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-xs font-bold p-4 rounded-xl flex items-center gap-2 ${
                      feedback.type === 'success' 
                        ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' 
                        : 'bg-red-50 text-red-900 border border-red-200'
                    }`}
                  >
                    <span>{feedback.message}</span>
                  </motion.div>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    disabled={isSending}
                    type="submit"
                    className="w-full py-3.5 px-6 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm tracking-wide rounded-xl shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-2.5 min-h-[48px]"
                  >
                    <span>{isSending ? 'Transmitting Request...' : 'Send Message'}</span>
                    <Send size={15} />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;