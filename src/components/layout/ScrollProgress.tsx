'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

export default function ScrollProgress() {
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  const getBarStyle = () => {
    if (theme === 'pencil') {
      return 'h-[3.5px] bg-[#232429] shadow-[0_1px_3px_rgba(35,36,41,0.4)]';
    }
    if (theme === 'lego') {
      return 'h-[4px] bg-gradient-to-r from-[#E3000B] via-[#FFD500] via-[#0055BF] to-[#00852B] shadow-[0_2px_8px_rgba(227,0,11,0.4)]';
    }
    if (theme === 'pixel') {
      return 'h-[4px] bg-[#00FF66] shadow-[0_0_10px_#00FF66]';
    }
    return 'h-[3px] bg-gradient-to-r from-accent-dynamic via-cyan-300 to-accent-dynamic shadow-[0_0_12px_var(--color-accent-glow)]';
  };

  return (
    <motion.div
      style={{ scaleX }}
      className={`fixed top-0 left-0 right-0 z-[9999] origin-left pointer-events-none ${getBarStyle()}`}
    />
  );
}
