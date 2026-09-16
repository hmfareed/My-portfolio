'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CinematicIntroProps {
  onComplete: () => void;
}

export default function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [step, setStep] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user already saw intro this session
    const seen = sessionStorage.getItem('mf_intro_seen');
    if (seen) {
      setIsDismissed(true);
      onComplete();
      return;
    }

    const t1 = setTimeout(() => setStep(1), 300);
    const t2 = setTimeout(() => setStep(2), 750);
    const t3 = setTimeout(() => {
      setIsDismissed(true);
      sessionStorage.setItem('mf_intro_seen', 'true');
      onComplete();
    }, 1300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsDismissed(true);
    sessionStorage.setItem('mf_intro_seen', 'true');
    onComplete();
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="cinematic-intro"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
        onClick={handleSkip}
        className="fixed inset-0 z-[1000] bg-background flex flex-col items-center justify-center cursor-pointer select-none overflow-hidden font-sans"
      >
        <div className="relative flex flex-col items-center gap-4 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-sans text-foreground-muted tracking-[0.25em] uppercase flex items-center gap-2 font-medium"
          >
            <span>MOHAMMED FAREED</span>
            <span className="text-accent-dynamic">•</span>
            <span>PORTFOLIO 2026</span>
          </motion.div>

          {/* Animated Horizon Beam */}
          <div className="relative w-64 sm:w-96 h-0.5 bg-surface-100 overflow-hidden my-2">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: step >= 1 ? '0%' : '-100%' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full bg-accent-dynamic shadow-[0_0_12px_var(--color-accent)]"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: step >= 2 ? 1 : 0, scale: step >= 2 ? 1 : 0.95 }}
            transition={{ duration: 0.4 }}
            className="text-sm sm:text-base font-semibold text-foreground tracking-wide font-sans"
          >
            System Architect & Full-Stack Builder
          </motion.div>
        </div>

        {/* Skip hint */}
        <div className="absolute bottom-8 text-xs font-sans text-foreground-subtle">
          Click anywhere to enter
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
