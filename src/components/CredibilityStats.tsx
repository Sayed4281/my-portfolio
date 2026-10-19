'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Clock, Layers, GraduationCap, CheckCircle2, TrendingUp, Sparkles, Award, ShieldCheck } from 'lucide-react';
import { useInView } from 'framer-motion';

interface StatItemProps {
  icon: React.ReactNode;
  accentColor: 'blue' | 'indigo' | 'cyan' | 'emerald';
  badge: string;
  badgeIcon: React.ReactNode;
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
  description: string;
}

function AnimatedStatCard({
  icon,
  accentColor,
  badge,
  badgeIcon,
  value,
  suffix = '',
  decimals = 0,
  label,
  description,
}: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [displayValue, setDisplayValue] = useState(decimals > 0 ? (0).toFixed(decimals) : '0');

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;
    const duration = 1800; // 1.8 seconds

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Smooth easeOutCubic curve
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = easeProgress * value;

      if (decimals > 0) {
        setDisplayValue(current.toFixed(decimals));
      } else {
        setDisplayValue(Math.floor(current).toString());
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(decimals > 0 ? value.toFixed(decimals) : value.toString());
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value, decimals]);

  const colorStyles = {
    blue: {
      borderHover: 'hover:border-blue-400/80',
      topLine: 'bg-gradient-to-r from-blue-500 to-indigo-500',
      iconBg: 'bg-blue-50 text-blue-600 border-blue-200/80',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200/60',
      glow: 'group-hover:bg-blue-500/5',
      suffixColor: 'text-blue-600',
    },
    indigo: {
      borderHover: 'hover:border-indigo-400/80',
      topLine: 'bg-gradient-to-r from-indigo-500 to-purple-500',
      iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-200/80',
      badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200/60',
      glow: 'group-hover:bg-indigo-500/5',
      suffixColor: 'text-indigo-600',
    },
    cyan: {
      borderHover: 'hover:border-cyan-400/80',
      topLine: 'bg-gradient-to-r from-cyan-500 to-blue-500',
      iconBg: 'bg-cyan-50 text-cyan-600 border-cyan-200/80',
      badgeBg: 'bg-cyan-50 text-cyan-700 border-cyan-200/60',
      glow: 'group-hover:bg-cyan-500/5',
      suffixColor: 'text-cyan-600',
    },
    emerald: {
      borderHover: 'hover:border-emerald-400/80',
      topLine: 'bg-gradient-to-r from-emerald-500 to-teal-500',
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
      glow: 'group-hover:bg-emerald-500/5',
      suffixColor: 'text-emerald-600',
    },
  }[accentColor];

  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-white/90 backdrop-blur-sm border border-slate-200/80 ${colorStyles.borderHover} shadow-xs hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between`}
    >
      {/* Top Accent Gradient Line */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${colorStyles.topLine} opacity-80 group-hover:opacity-100 transition-opacity`} />

      {/* Ambient background hover glow */}
      <div className={`absolute inset-0 ${colorStyles.glow} transition-colors duration-300 pointer-events-none`} />

      {/* Top Bar: Icon + Trendy Micro-Badge */}
      <div className="flex items-center justify-between gap-3 mb-4 relative z-10">
        <div className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border ${colorStyles.iconBg} shadow-2xs group-hover:scale-105 group-hover:rotate-2 transition-transform duration-300`}>
          {icon}
        </div>
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold border ${colorStyles.badgeBg} shadow-2xs tracking-wide`}>
          {badgeIcon}
          <span>{badge}</span>
        </span>
      </div>

      {/* Counter + Label */}
      <div className="relative z-10">
        <div className="flex items-baseline gap-0.5">
          <span className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight font-display tabular-nums leading-none">
            {displayValue}
          </span>
          {suffix && (
            <span className={`text-2xl sm:text-3xl font-black ${colorStyles.suffixColor} font-display leading-none`}>
              {suffix}
            </span>
          )}
        </div>

        <h4 className="text-xs sm:text-[13px] font-extrabold text-slate-800 uppercase tracking-wider mt-2.5">
          {label}
        </h4>
        
        <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-1 leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function CredibilityStats() {
  const stats: StatItemProps[] = [
    {
      icon: <Clock size={22} />,
      accentColor: 'blue',
      badge: 'Active Tech Lead',
      badgeIcon: <TrendingUp size={11} />,
      value: 2,
      suffix: '+',
      decimals: 0,
      label: 'Years Experience',
      description: 'Leading ERP & full-stack development',
    },
    {
      icon: <Layers size={22} />,
      accentColor: 'indigo',
      badge: 'Production Systems',
      badgeIcon: <Sparkles size={11} />,
      value: 15,
      suffix: '+',
      decimals: 0,
      label: 'Projects Delivered',
      description: 'Enterprise ERP, SaaS & web portals',
    },
    {
      icon: <GraduationCap size={22} />,
      accentColor: 'cyan',
      badge: 'Distinction · KTU',
      badgeIcon: <Award size={11} />,
      value: 8.08,
      suffix: '',
      decimals: 2,
      label: 'B.Tech CSE CGPA',
      description: 'MEA Engineering College · Research author',
    },
    {
      icon: <CheckCircle2 size={22} />,
      accentColor: 'emerald',
      badge: 'SLA Guaranteed',
      badgeIcon: <ShieldCheck size={11} />,
      value: 100,
      suffix: '%',
      decimals: 0,
      label: 'Delivery Focus',
      description: 'Milestone execution & clean architecture',
    },
  ];

  return (
    <section className="py-10 sm:py-14 border-y border-slate-200/80 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/70 relative overflow-hidden">
      {/* Subtle background ambient mesh */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-blue-500/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-indigo-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <AnimatedStatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
