'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeKey = 'pencil';

export interface ThemeOption {
  id: ThemeKey;
  name: string;
  accentColor: string;
  secondaryColor: string;
  description: string;
  category: 'Special World';
  iconName: 'pencil';
}

export const THEMES: ThemeOption[] = [
  {
    id: 'pencil',
    name: 'Pencil Sketch',
    accentColor: '#1A1B20',
    secondaryColor: 'rgba(255, 255, 255, 1)',
    description: 'Hand-drawn sketchbook on textured paper with graphite typography, sketch borders, and monochromatic artwork',
    category: 'Special World',
    iconName: 'pencil',
  },
];

interface ThemeContextType {
  theme: ThemeKey;
  setTheme: (theme: ThemeKey) => void;
  themeConfig: ThemeOption;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeKey>('pencil');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Lock to pencil theme and clean up obsolete saved themes
    setThemeState('pencil');
    document.documentElement.setAttribute('data-theme', 'pencil');
    localStorage.setItem('mf_portfolio_theme', 'pencil');
    setMounted(true);
  }, []);

  const setTheme = (newTheme: ThemeKey) => {
    setThemeState(newTheme);
    localStorage.setItem('mf_portfolio_theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const currentConfig = THEMES[0];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeConfig: currentConfig }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
