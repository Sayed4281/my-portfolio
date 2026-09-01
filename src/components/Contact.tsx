'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';
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
        setFeedback({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
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
    { icon: Mail, label: 'EMAIL', value: 'sayedshahloobpofficial@gmail.com', href: 'mailto:sayedshahloobpofficial@gmail.com' },
    { icon: Phone, label: 'PHONE / WHATSAPP', value: '+91 9567220971', href: 'tel:+919567220971' },
    { icon: MapPin, label: 'LOCATION', value: 'Angadipuram, Malappuram, Kerala, India', href: 'https://maps.google.com/?q=Angadipuram,Malappuram,Kerala' }
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/Sayed4281" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/er-sayed-shahloob-p/" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/_sayed_4281_?utm_source=qr&igsi=MTA2dW5nZDhyeHN1Yg==" },
    { name: "WhatsApp", icon: WhatsAppIcon, href: "https://wa.me/919567220971" },
    { name: "Email", icon: Mail, href: "mailto:sayedshahloobpofficial@gmail.com" }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 relative bg-[#0E1726] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10"
        >
          <span className="text-cyan-400 text-xs font-black tracking-[0.4em] uppercase mb-3 block">GET IN TOUCH</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 font-display uppercase tracking-tight">Let's Connect</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-transparent mb-6" />
          <p className="text-[#94A3B8] text-sm sm:text-lg max-w-xl leading-relaxed">
            Available for Technical Lead, Business Analyst, Full-Stack Software Development, and project delivery opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Contact Details Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactOptions.map((item, i) => (
              <a 
                key={i}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 sm:p-6 bg-[#172033] border border-[#263449] rounded-2xl group transition-all hover:border-blue-500/50 shadow-lg"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-cyan-300 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                  <item.icon size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-cyan-400 tracking-wider uppercase mb-0.5">{item.label}</p>
                  <p className="text-white font-medium text-xs sm:text-sm truncate">{item.value}</p>
                </div>
              </a>
            ))}

            <div className="pt-6 sm:pt-8">
              <p className="text-[10px] font-bold text-cyan-400 tracking-widest uppercase mb-4">CONNECT ACROSS SOCIAL MEDIA</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, i) => (
                  <MagneticButton key={i}>
                    <a 
                      href={social.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      className="w-11 h-11 sm:w-12 sm:h-12 bg-[#172033] border border-[#263449] rounded-xl flex items-center justify-center text-[#94A3B8] hover:text-cyan-300 hover:border-blue-500/50 transition-all group min-h-[44px] min-w-[44px]"
                    >
                      <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                    </a>
                  </MagneticButton>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TiltCard className="bg-[#172033] border border-[#263449] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6 font-display">Send a Message</h3>
              
              <form ref={formRef} onSubmit={sendEmail} className="space-y-4 sm:space-y-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#94A3B8] tracking-wider uppercase">YOUR NAME</label>
                  <input
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-[#0B1220] border border-[#263449] rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-all placeholder:text-[#94A3B8]/40"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#94A3B8] tracking-wider uppercase">YOUR EMAIL</label>
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-[#0B1220] border border-[#263449] rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-all placeholder:text-[#94A3B8]/40"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#94A3B8] tracking-wider uppercase">YOUR PHONE NUMBER</label>
                  <input
                    name="phone"
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#0B1220] border border-[#263449] rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-all placeholder:text-[#94A3B8]/40"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#94A3B8] tracking-wider uppercase">SUBJECT</label>
                  <select
                    name="subject"
                    required
                    defaultValue=""
                    className="w-full bg-[#0B1220] border border-[#263449] rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 transition-all appearance-none"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'rgba(148,163,184,0.6)\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\' /%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.2rem center', backgroundSize: '1.2rem' }}
                  >
                    <option value="" disabled className="bg-[#0B1220] text-[#94A3B8]">Select a subject topic</option>
                    <option value="Project" className="bg-[#0B1220] text-white">Project Collaboration</option>
                    <option value="Freelance" className="bg-[#0B1220] text-white">Freelance / Consulting Inquiry</option>
                    <option value="Hiring" className="bg-[#0B1220] text-white">Job Opportunity (PM / BA / Tech Lead)</option>
                    <option value="Other" className="bg-[#0B1220] text-white">Other Inquiry</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#94A3B8] tracking-wider uppercase">MESSAGE</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full bg-[#0B1220] border border-[#263449] rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-all resize-none placeholder:text-[#94A3B8]/40"
                  />
                </div>

                {feedback.message && (
                  <div className={`text-xs font-bold p-4 rounded-xl ${feedback.type === 'success' ? 'bg-blue-500/20 text-cyan-300 border border-blue-500/30' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                    {feedback.message}
                  </div>
                )}

                <MagneticButton className="w-full">
                  <button
                    disabled={isSending}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-500/25 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50 min-h-[48px]"
                  >
                    <Send size={16} />
                    {isSending ? 'Sending Message...' : 'Send Message'}
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