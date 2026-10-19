'use client';

import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade-in' | 'scale-in';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 0.55,
  className = '',
  threshold = 0.05,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const checkVisibility = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowH = window.innerHeight || document.documentElement.clientHeight || 800;
      if (rect.top <= windowH + 150) {
        setIsVisible(true);
      }
    };

    // Check immediately on mount
    checkVisibility();

    // Primary: IntersectionObserver with generous rootMargin
    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && observer) observer.disconnect();
          } else if (!once) {
            setIsVisible(false);
          }
        },
        {
          threshold,
          rootMargin: '200px 0px 50px 0px',
        }
      );
      observer.observe(element);
    }

    // Secondary: passive scroll listener
    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility, { passive: true });

    // Safety fallback: reveal element after short grace period to prevent blank areas
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
      clearTimeout(fallbackTimer);
    };
  }, [threshold, once, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const getTransform = () => {
    if (isVisible) return 'none';
    switch (animation) {
      case 'fade-up': return 'translateY(24px)';
      case 'fade-down': return 'translateY(-24px)';
      case 'fade-left': return 'translateX(20px)';
      case 'fade-right': return 'translateX(-20px)';
      case 'scale-in': return 'scale(0.96)';
      default: return 'none';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}s cubic-bezier(0.21, 0.47, 0.32, 0.98) ${delay}s, transform ${duration}s cubic-bezier(0.21, 0.47, 0.32, 0.98) ${delay}s`,
      }}
      className={className}
    >
      {children}
    </div>
  );
}
