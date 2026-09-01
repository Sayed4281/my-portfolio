'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import React, { useRef } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e?: any) => void;
  href?: string;
  target?: string;
  rel?: string;
  strength?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  href,
  target,
  rel,
  strength = 35,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 180, damping: 14 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * (strength / 100));
    y.set(distanceY * (strength / 100));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isFullWidth = className.includes('w-full');

  if (href) {
    return (
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={isFullWidth ? 'w-full block' : 'inline-block'}
      >
        <motion.a
          href={href}
          target={target}
          rel={rel}
          onClick={onClick}
          style={{ x: springX, y: springY }}
          className={className}
        >
          {children}
        </motion.a>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={isFullWidth ? 'w-full block' : 'inline-block'}
    >
      <motion.div
        onClick={onClick}
        style={{ x: springX, y: springY }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};


export default MagneticButton;
