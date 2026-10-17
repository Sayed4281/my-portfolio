'use client';

import { useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Youtube,
  User,
  Loader2
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function ContactClientView() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });
  const shouldReduceMotion = useReducedMotion();

  const { personal } = PORTFOLIO_DATA;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback({ type: null, message: '' });

    if (!formRef.current) return;
    const formData = new FormData(formRef.current);

    const payload = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    if (!payload.name || !payload.email || !payload.subject || !payload.message) {
      setFeedback({ type: 'error', message: 'Please fill out all required fields.' });
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setFeedback({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. I will get back to you within 24 hours.'
        });
        formRef.current.reset();
      } else {
        setFeedback({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (err: any) {
      setFeedback({
        type: 'error',
        message: err?.message || 'Network error occurred. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ============================================================== */}
      {/* 2. CONTACT FORM & DIRECT CONTACT (2 COLUMNS)                  */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-24 bg-[#F7FAFF] border-y border-[#E4ECF7]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="lg:col-span-7 bg-white rounded-[1.75rem] border border-[#E4ECF7] p-8 sm:p-10 shadow-sm"
            >
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-blue-200 text-[#1677FF] text-xs font-bold tracking-wider uppercase mb-3">
                  <span>◆</span>
                  <span>Send a Message</span>
                </div>
                <h2 className="text-3xl font-heading font-extrabold text-[#101B3C] tracking-tight">
                  Contact <span className="text-[#1677FF]">Form</span>
                </h2>
                <p className="text-[#64748B] text-xs sm:text-sm mt-1.5">
                  Fill out the form below and I&apos;ll get back to you as soon as possible.
                </p>
              </div>

              {feedback.type && (
                <div
                  className={`p-4 rounded-xl text-xs sm:text-sm font-semibold mb-6 flex items-center gap-2 ${
                    feedback.type === 'success'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-rose-50 text-rose-800 border border-rose-200'
                  }`}
                >
                  <CheckCircle2 size={16} className="shrink-0" />
                  <span>{feedback.message}</span>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#101B3C] mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative flex items-center">
                      <User size={15} className="absolute left-3.5 text-slate-400 pointer-events-none" />
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full bg-[#F7FAFF] border border-[#E4ECF7] rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-[#101B3C] placeholder:text-slate-400 focus:outline-none focus:border-[#1677FF] focus:ring-2 focus:ring-[#1677FF]/20 focus:bg-white transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-bold text-[#101B3C] mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative flex items-center">
                      <Mail size={15} className="absolute left-3.5 text-slate-400 pointer-events-none" />
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        className="w-full bg-[#F7FAFF] border border-[#E4ECF7] rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-[#101B3C] placeholder:text-slate-400 focus:outline-none focus:border-[#1677FF] focus:ring-2 focus:ring-[#1677FF]/20 focus:bg-white transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-[#101B3C] mb-1.5">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    required
                    defaultValue=""
                    className="w-full bg-[#F7FAFF] border border-[#E4ECF7] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#101B3C] focus:outline-none focus:border-[#1677FF] focus:ring-2 focus:ring-[#1677FF]/20 focus:bg-white transition-all duration-200"
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="Enterprise ERP / HRMS System">Enterprise ERP / HRMS System</option>
                    <option value="Full-Stack Web Application">Full-Stack Web Application</option>
                    <option value="Technical SEO & Performance Audit">Technical SEO &amp; Performance Audit</option>
                    <option value="UI/UX Design & Frontend">UI/UX Design &amp; Frontend</option>
                    <option value="Consulting & Technical Leadership">Consulting &amp; Technical Leadership</option>
                    <option value="Just Saying Hello">Just Saying Hello</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-[#101B3C] mb-1.5">
                    Message *
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell me about your project, idea or just say hello..."
                      className="w-full bg-[#F7FAFF] border border-[#E4ECF7] rounded-xl p-4 text-xs sm:text-sm text-[#101B3C] placeholder:text-slate-400 focus:outline-none focus:border-[#1677FF] focus:ring-2 focus:ring-[#1677FF]/20 focus:bg-white transition-all duration-200 resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-sm btn-gradient disabled:opacity-60 cursor-pointer shadow-md shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Send Message</span>
                        <ArrowRight size={15} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Right Column: Direct Contact & Socials */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="lg:col-span-5 space-y-6"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-200 text-[#1677FF] text-xs font-bold tracking-wider uppercase mb-3 shadow-2xs">
                  <span>◆</span>
                  <span>Direct Contact</span>
                </div>
                <h2 className="text-3xl font-heading font-extrabold text-[#101B3C] tracking-tight">
                  Get in Touch <span className="text-[#1677FF]">Directly</span>
                </h2>
                <p className="text-[#64748B] text-xs sm:text-sm mt-1.5 leading-relaxed">
                  You can also reach me through the following channels. I&apos;m always open to new opportunities and exciting projects.
                </p>
              </div>

              {/* 4 Clickable Direct Contact Cards with Hover Elevation */}
              <div className="space-y-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="ref-card p-4 flex items-center justify-between hover:border-blue-400 hover:shadow-md hover:-translate-y-1 transition-all duration-250 bg-white group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-blue-200 flex items-center justify-center text-[#1677FF] group-hover:scale-110 group-hover:bg-[#1677FF] group-hover:text-white transition-all duration-200">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] text-[#64748B] font-medium">Email</div>
                      <div className="text-xs sm:text-sm font-bold text-[#101B3C] group-hover:text-[#1677FF] transition-colors">
                        {personal.secondaryEmail}
                      </div>
                    </div>
                  </div>
                  <ArrowRight size={15} className="text-slate-400 group-hover:text-[#1677FF] group-hover:translate-x-1.5 transition-all duration-200" />
                </a>

                <a
                  href={`tel:${personal.phone}`}
                  className="ref-card p-4 flex items-center justify-between hover:border-blue-400 hover:shadow-md hover:-translate-y-1 transition-all duration-250 bg-white group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-blue-200 flex items-center justify-center text-[#1677FF] group-hover:scale-110 group-hover:bg-[#1677FF] group-hover:text-white transition-all duration-200">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] text-[#64748B] font-medium">Phone</div>
                      <div className="text-xs sm:text-sm font-bold text-[#101B3C] group-hover:text-[#1677FF] transition-colors">
                        {personal.displayPhone}
                      </div>
                    </div>
                  </div>
                  <ArrowRight size={15} className="text-slate-400 group-hover:text-[#1677FF] group-hover:translate-x-1.5 transition-all duration-200" />
                </a>

                <a
                  href="https://maps.google.com/?q=Perinthalmanna,Malappuram,Kerala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ref-card p-4 flex items-center justify-between hover:border-blue-400 hover:shadow-md hover:-translate-y-1 transition-all duration-250 bg-white group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-blue-200 flex items-center justify-center text-[#1677FF] group-hover:scale-110 group-hover:bg-[#1677FF] group-hover:text-white transition-all duration-200">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] text-[#64748B] font-medium">Location</div>
                      <div className="text-xs sm:text-sm font-bold text-[#101B3C] group-hover:text-[#1677FF] transition-colors">
                        {personal.location}
                      </div>
                    </div>
                  </div>
                  <ArrowRight size={15} className="text-slate-400 group-hover:text-[#1677FF] group-hover:translate-x-1.5 transition-all duration-200" />
                </a>

                <div className="ref-card p-4 flex items-center justify-between bg-white border border-[#E4ECF7]">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-blue-200 flex items-center justify-center text-[#1677FF]">
                      <Clock size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] text-[#64748B] font-medium">Availability</div>
                      <div className="text-xs sm:text-sm font-bold text-emerald-600 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Available for freelance &amp; full-time</span>
                      </div>
                    </div>
                  </div>
                  <ArrowRight size={15} className="text-slate-300" />
                </div>
              </div>

              {/* Follow Me Socials */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#101B3C]">Follow Me</span>
                  <div className="font-handwritten text-xl text-[#1677FF] font-bold tracking-wide select-none">
                    <span>Let&apos;s connect!</span> ↗
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <a
                    href={personal.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="w-10 h-10 rounded-full bg-white border border-[#E4ECF7] flex items-center justify-center text-[#64748B] hover:text-[#1677FF] hover:border-blue-400 hover:shadow-sm hover:-translate-y-0.5 hover:scale-105 transition-all duration-200"
                  >
                    <Linkedin size={18} />
                  </a>

                  <a
                    href={personal.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="w-10 h-10 rounded-full bg-white border border-[#E4ECF7] flex items-center justify-center text-[#64748B] hover:text-[#1677FF] hover:border-blue-400 hover:shadow-sm hover:-translate-y-0.5 hover:scale-105 transition-all duration-200"
                  >
                    <Github size={18} />
                  </a>

                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter Profile"
                    className="w-10 h-10 rounded-full bg-white border border-[#E4ECF7] flex items-center justify-center text-[#64748B] hover:text-[#1677FF] hover:border-blue-400 hover:shadow-sm hover:-translate-y-0.5 hover:scale-105 transition-all duration-200"
                  >
                    <Twitter size={18} />
                  </a>

                  <a
                    href={personal.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Profile"
                    className="w-10 h-10 rounded-full bg-white border border-[#E4ECF7] flex items-center justify-center text-[#64748B] hover:text-[#1677FF] hover:border-blue-400 hover:shadow-sm hover:-translate-y-0.5 hover:scale-105 transition-all duration-200"
                  >
                    <Instagram size={18} />
                  </a>

                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube Channel"
                    className="w-10 h-10 rounded-full bg-white border border-[#E4ECF7] flex items-center justify-center text-[#64748B] hover:text-[#1677FF] hover:border-blue-400 hover:shadow-sm hover:-translate-y-0.5 hover:scale-105 transition-all duration-200"
                  >
                    <Youtube size={18} />
                  </a>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. LOCATION MAP & PROJECT CTA (2 COLUMNS)                     */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="rounded-[1.75rem] border border-[#E4ECF7] overflow-hidden bg-white shadow-sm grid lg:grid-cols-12">
            
            {/* Left: Proper Interactive Google Map */}
            <div className="lg:col-span-5 relative min-h-[320px] sm:min-h-[360px] overflow-hidden bg-slate-100 flex flex-col justify-between">
              {/* Live Google Maps Iframe for Perinthalmanna, Malappuram, Kerala */}
              <iframe
                title="Sayed Location - Perinthalmanna, Malappuram, Kerala"
                src="https://maps.google.com/maps?q=Perinthalmanna,%20Malappuram%20District,%20Kerala,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full border-0 filter saturate-[1.1] contrast-[1.02]"
                loading="lazy"
                allowFullScreen
              />

              {/* Floating Location Badge */}
              <div className="relative z-10 p-4 pointer-events-none">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-blue-200/80 pointer-events-auto">
                  <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] border border-blue-200 flex items-center justify-center text-[#1677FF] shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#101B3C]">Perinthalmanna, Malappuram</div>
                    <div className="text-[10px] text-[#64748B] font-medium">Kerala, India</div>
                  </div>
                </div>
              </div>

              {/* Open in Google Maps Link */}
              <div className="relative z-10 p-4">
                <a
                  href="https://maps.google.com/?q=Perinthalmanna,Malappuram,Kerala,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-[#E4ECF7] text-xs font-bold text-[#1677FF] shadow-md hover:bg-white hover:border-blue-400 hover:shadow-lg transition-all group/btn"
                >
                  <span>Open in Google Maps</span>
                  <ArrowRight size={13} className="group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right: Have a Project in Mind CTA with Interest Pills */}
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-blue-200 text-[#1677FF] text-xs font-bold tracking-wider uppercase mb-1">
                  <span>◆</span>
                  <span>Start a Conversation</span>
                </div>
                <h3 className="text-3xl font-heading font-extrabold text-[#101B3C] tracking-tight">
                  Have a <span className="text-[#1677FF]">Project</span> in Mind?
                </h3>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed max-w-lg">
                  I&apos;m always open to new opportunities, collaborations and interesting projects. Let&apos;s build something great together!
                </p>

                {/* 4 Interest Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3">
                  <div className="p-2.5 rounded-xl bg-[#F7FAFF] border border-[#E4ECF7] text-center text-xs font-bold text-[#101B3C] hover:border-blue-300 transition-colors">
                    Web Applications
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#F7FAFF] border border-[#E4ECF7] text-center text-xs font-bold text-[#101B3C] hover:border-blue-300 transition-colors">
                    ERP Systems
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#F7FAFF] border border-[#E4ECF7] text-center text-xs font-bold text-[#101B3C] hover:border-blue-300 transition-colors">
                    Mobile Apps
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#F7FAFF] border border-[#E4ECF7] text-center text-xs font-bold text-[#101B3C] hover:border-blue-300 transition-colors">
                    Consulting
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => window.scrollTo({ top: 300, behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-xs sm:text-sm btn-gradient shadow-md shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                >
                  <span>Get In Touch</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
