'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface CTASectionProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  highlightText?: string;
  description: string;
  primaryBtnText: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
  secondaryBtnDownload?: boolean | string;
  secondaryBtnIcon?: React.ReactNode;
  trustBadges?: string[];
}

export default function CTASection({
  badge = 'Open for Technical Leadership Roles & Enterprise Consulting',
  badgeIcon = <Sparkles size={13} className="text-blue-600" />,
  title,
  highlightText,
  description,
  primaryBtnText,
  primaryBtnHref = '/contact',
  secondaryBtnText,
  secondaryBtnHref,
  secondaryBtnDownload,
  secondaryBtnIcon,
  trustBadges = [
    'Fast response within 24 hours',
    'Enterprise ERP & Web Architecture',
    'Open to global & remote opportunities',
  ],
}: CTASectionProps) {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-transparent to-slate-50/50 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        {/* Compact Light-Theme Executive Card */}
        <div className="relative rounded-3xl p-6 sm:p-9 lg:p-11 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40 border border-blue-200/90 shadow-lg shadow-blue-500/5">
          {/* Top accent light bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500" />

          {/* Ambient background soft glowing lights */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/[0.07] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-500/[0.06] rounded-full blur-3xl pointer-events-none" />

          {/* Subtle grid dot pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#00000006_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            {/* Pill Badge */}
            {badge && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-700 text-xs font-bold mb-4 shadow-2xs backdrop-blur-sm">
                {badgeIcon}
                <span>{badge}</span>
              </div>
            )}

            {/* Heading (Reduced & Balanced Size) */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-3 font-display leading-[1.2]">
              {title}{' '}
              {highlightText && (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
                  {highlightText}
                </span>
              )}
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto mb-7 leading-relaxed font-normal">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
              <Link
                href={primaryBtnHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-md shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>{primaryBtnText}</span>
                <ArrowRight size={15} />
              </Link>

              {secondaryBtnText && secondaryBtnHref && (
                secondaryBtnDownload ? (
                  <a
                    href={secondaryBtnHref}
                    target="_blank"
                    download={typeof secondaryBtnDownload === 'string' ? secondaryBtnDownload : undefined}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full border border-slate-200 hover:border-slate-300 transition-all hover:scale-105 active:scale-95 shadow-2xs"
                  >
                    {secondaryBtnIcon}
                    <span>{secondaryBtnText}</span>
                  </a>
                ) : (
                  <Link
                    href={secondaryBtnHref}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full border border-slate-200 hover:border-slate-300 transition-all hover:scale-105 active:scale-95 shadow-2xs"
                  >
                    {secondaryBtnIcon}
                    <span>{secondaryBtnText}</span>
                  </Link>
                )
              )}
            </div>

            {/* Trust Badges */}
            {trustBadges && trustBadges.length > 0 && (
              <div className="mt-7 pt-5 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-3.5 sm:gap-5 text-[11px] sm:text-xs text-slate-600">
                {trustBadges.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
