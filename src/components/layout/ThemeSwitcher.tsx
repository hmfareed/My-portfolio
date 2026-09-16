'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check, Pencil, Boxes, Gamepad2, Sparkles, Moon } from 'lucide-react';
import { useTheme, THEMES, ThemeKey } from '@/context/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeThemeObj = THEMES.find((t) => t.id === theme) || THEMES[0];

  const getThemeIcon = (id: ThemeKey) => {
    switch (id) {
      case 'pencil':
        return <Pencil className="w-3.5 h-3.5 text-foreground-muted" />;
      case 'lego':
        return <Boxes className="w-3.5 h-3.5 text-foreground-muted" />;
      case 'pixel':
        return <Gamepad2 className="w-3.5 h-3.5 text-foreground-muted" />;
      case 'amoled':
        return <Moon className="w-3.5 h-3.5 text-foreground-muted" />;
      default:
        return <Palette className="w-3.5 h-3.5 text-foreground-muted" />;
    }
  };

  const specialThemes = THEMES.filter((t) => t.category === 'Special World');
  const standardThemes = THEMES.filter((t) => t.category !== 'Special World');

  return (
    <div ref={dropdownRef} className="relative font-sans">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-100 hover:bg-surface-50 border border-border-subtle hover:border-accent-dynamic text-xs font-sans text-foreground transition-all active:scale-95"
        title="Switch Portfolio Theme"
      >
        <span
          className="w-2.5 h-2.5 rounded-full shadow-sm"
          style={{ backgroundColor: activeThemeObj.accentColor }}
        />
        <span className="hidden sm:inline-block font-medium">{activeThemeObj.name}</span>
        {getThemeIcon(theme)}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute right-0 top-full mt-2 w-64 rounded-2xl bg-surface-200/95 backdrop-blur-xl border border-border-strong p-2 shadow-2xl z-50 flex flex-col gap-1 font-sans"
          >
            {/* Special Aesthetic Worlds */}
            <div className="px-3 py-1 text-[10px] font-bold text-accent-dynamic uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              <span>Immersive Worlds</span>
            </div>

            {specialThemes.map((t) => {
              const isSelected = theme === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs transition-all ${
                    isSelected
                      ? 'bg-surface-50 text-foreground font-bold border border-border-subtle shadow-sm'
                      : 'text-foreground-muted hover:text-foreground hover:bg-surface-100'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {getThemeIcon(t.id)}
                    <div className="flex flex-col">
                      <span className="font-semibold text-foreground">{t.name}</span>
                      <span className="text-[10px] text-foreground-subtle line-clamp-1">{t.description}</span>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-3.5 h-3.5 text-accent-dynamic shrink-0 ml-1" />
                  )}
                </button>
              );
            })}

            <div className="my-1 h-px bg-border-subtle" />

            {/* Standard Neon Palettes */}
            <div className="px-3 py-1 text-[10px] font-bold text-foreground-subtle uppercase tracking-wider">
              Chroma Palettes
            </div>

            <div className="grid grid-cols-2 gap-1 px-1">
              {standardThemes.map((t) => {
                const isSelected = theme === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      setTheme(t.id);
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left text-xs transition-all ${
                      isSelected
                        ? 'bg-surface-50 text-foreground font-semibold border border-border-subtle'
                        : 'text-foreground-muted hover:text-foreground hover:bg-surface-100'
                    }`}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0 shadow-sm"
                      style={{ backgroundColor: t.accentColor }}
                    />
                    <span className="truncate text-[11px]">{t.name}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
