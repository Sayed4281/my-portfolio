import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Mail, ShieldCheck, Zap, Clock } from 'lucide-react';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Initiate direct inquiries, technical consulting, or enterprise project discussions with Sayed Shahloob P.',
};

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Standalone Contact Page Hero */}
      <section className="pt-16 sm:pt-24 pb-12 sm:pb-16 bg-white border-b border-slate-200/80">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-widest font-mono">
                Direct Channels Open
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight mb-4 font-display leading-[1.1]">
              Initiate Direct Collaboration
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Whether you are planning an enterprise ERP initiative, looking for a Technical Project Lead, or require custom software architecture, connect directly through the channels below.
            </p>
          </div>

          {/* SLA highlights banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 shrink-0">
                <Clock size={18} />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">24h SLA Response</span>
                <span className="text-[11px] text-slate-500">Every inquiry reviewed directly</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 shrink-0">
                <ShieldCheck size={18} />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">NDA & Confidentiality</span>
                <span className="text-[11px] text-slate-500">Enterprise security standards</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 shrink-0">
                <Zap size={18} />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">Direct Technical Scoping</span>
                <span className="text-[11px] text-slate-500">Fast feasibility & architecture discussion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form & Direct Channels */}
      <Contact />
    </div>
  );
}
