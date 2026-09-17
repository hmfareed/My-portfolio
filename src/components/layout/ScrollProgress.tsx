'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[9999] origin-left pointer-events-none h-[3.5px] bg-[#232429] shadow-[0_1px_3px_rgba(35,36,41,0.4)]"
    />
  );
}
