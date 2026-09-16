'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

export default function CustomCursor() {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'project' | 'text'>('default');

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only run on fine pointer devices (desktops/laptops, not touchscreens)
    if (!window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    document.documentElement.classList.add('has-custom-cursor');

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      const clickableTarget = target.closest('a, button, [role="button"]') as HTMLElement | null;

      if (cursorTarget) {
        const text = cursorTarget.getAttribute('data-cursor') || '';
        setCursorText(text);
        setCursorVariant('project');
      } else if (clickableTarget) {
        setCursorText('');
        setCursorVariant('hover');
      } else {
        setCursorText('');
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleElementHover);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleElementHover);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Follower */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center font-mono text-[10px] font-bold uppercase tracking-wider select-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: cursorVariant === 'project' ? 84 : cursorVariant === 'hover' ? 44 : 28,
            height: cursorVariant === 'project' ? 32 : cursorVariant === 'hover' ? 44 : 28,
            borderRadius: theme === 'pixel' ? 0 : theme === 'pencil' ? 12 : 9999,
            backgroundColor:
              cursorVariant === 'project'
                ? 'var(--color-accent)'
                : cursorVariant === 'hover'
                ? theme === 'pencil' ? 'rgba(35, 36, 42, 0.08)' : 'rgba(255, 255, 255, 0.08)'
                : 'transparent',
            borderColor:
              cursorVariant === 'project'
                ? 'var(--color-accent)'
                : cursorVariant === 'hover'
                ? 'var(--color-accent)'
                : theme === 'pencil' ? 'rgba(35, 36, 42, 0.45)' : 'rgba(255, 255, 255, 0.3)',
            color: cursorVariant === 'project' ? (theme === 'pencil' ? '#FAF6EE' : '#050505') : (theme === 'pencil' ? '#1E1F24' : '#F5F5F5'),
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 28 }}
          className={`border backdrop-blur-[1px] flex items-center justify-center shadow-lg ${
            theme === 'pixel' ? 'rounded-none border-2' : theme === 'pencil' ? 'border-2 border-dashed' : ''
          }`}
        >
          {cursorText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="px-2 whitespace-nowrap"
            >
              {cursorText}
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      {/* Center Precise Dot / Pixel / Lead Point */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] ${
          theme === 'pixel'
            ? 'w-2 h-2 rounded-none bg-accent-dynamic'
            : theme === 'pencil'
            ? 'w-1.5 h-1.5 rounded-full bg-[#232429]'
            : 'w-1.5 h-1.5 rounded-full bg-accent-dynamic'
        }`}
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: cursorVariant === 'project' ? 0 : 1,
        }}
      />
    </>
  );
}
