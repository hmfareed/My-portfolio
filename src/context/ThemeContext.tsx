'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeKey =
  | 'oceanic-blue'
  | 'cyber-lime'
  | 'cosmic-violet'
  | 'sunset-gold'
  | 'emerald-matrix'
  | 'crimson-rose'
  | 'pencil'
  | 'lego'
  | 'pixel'
  | 'amoled';

export interface ThemeOption {
  id: ThemeKey;
  name: string;
  accentColor: string;
  secondaryColor: string;
  description: string;
  category?: 'Special World' | 'Neon & Dark';
  iconName?: 'pencil' | 'lego' | 'pixel' | 'palette' | 'moon';
}

export const THEMES: ThemeOption[] = [
  {
    id: 'pencil',
    name: 'Pencil Sketch',
    accentColor: '#1A1B20',
    secondaryColor: '#525560',
    description: 'Hand-drawn sketchbook on textured paper with graphite typography, sketch borders, and monochromatic artwork',
    category: 'Special World',
    iconName: 'pencil',
  },
  {
    id: 'lego',
    name: 'Lego Studio',
    accentColor: '#E3000B',
    secondaryColor: '#FFD500',
    description: 'Iconic plastic brick universe with 3D studs baseplate, tactile snap buttons, and vibrant toy hues',
    category: 'Special World',
    iconName: 'lego',
  },
  {
    id: 'pixel',
    name: '8-Bit Pixel',
    accentColor: '#00FF66',
    secondaryColor: '#00F0FF',
    description: 'Retro arcade universe with 8-bit typography, 0px stepped borders, CRT scanlines, and pixelated graphics',
    category: 'Special World',
    iconName: 'pixel',
  },
  {
    id: 'amoled',
    name: 'AMOLED Super Dark',
    accentColor: '#FFFFFF',
    secondaryColor: '#00E5FF',
    description: 'True pure black #000000 with multi-color polychromatic accents and glowing KPI cards',
    category: 'Special World',
    iconName: 'moon',
  },
  {
    id: 'oceanic-blue',
    name: 'Oceanic Blue',
    accentColor: '#00E5FF',
    secondaryColor: '#38BDF8',
    description: 'Deep midnight navy blending into pitch black with electric cyan',
    category: 'Neon & Dark',
    iconName: 'palette',
  },
  {
    id: 'cyber-lime',
    name: 'Cyber Lime',
    accentColor: '#C8FF00',
    secondaryColor: '#D7FF4F',
    description: 'High-contrast obsidian with neon electric lime',
    category: 'Neon & Dark',
    iconName: 'palette',
  },
  {
    id: 'cosmic-violet',
    name: 'Cosmic Violet',
    accentColor: '#A78BFA',
    secondaryColor: '#C4B5FD',
    description: 'Deep cosmos violet and glowing nebula hues',
    category: 'Neon & Dark',
    iconName: 'palette',
  },
  {
    id: 'sunset-gold',
    name: 'Sunset Gold',
    accentColor: '#F5B942',
    secondaryColor: '#FCD34D',
    description: 'Warm luxury amber gold on deep onyx',
    category: 'Neon & Dark',
    iconName: 'palette',
  },
  {
    id: 'emerald-matrix',
    name: 'Emerald Matrix',
    accentColor: '#10B981',
    secondaryColor: '#34D399',
    description: 'Radiant mint and cybernetic emerald on dark slate',
    category: 'Neon & Dark',
    iconName: 'palette',
  },
  {
    id: 'crimson-rose',
    name: 'Crimson Rose',
    accentColor: '#F43F5E',
    secondaryColor: '#FB7185',
    description: 'Vibrant scarlet and neon rose on obsidian charcoal',
    category: 'Neon & Dark',
    iconName: 'palette',
  },
];

interface ThemeContextType {
  theme: ThemeKey;
  setTheme: (theme: ThemeKey) => void;
  themeConfig: ThemeOption;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeKey>('oceanic-blue');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load persisted theme or default to oceanic-blue
    const saved = localStorage.getItem('mf_portfolio_theme') as ThemeKey | null;
    if (saved && THEMES.some((t) => t.id === saved)) {
      setThemeState(saved);
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      document.documentElement.setAttribute('data-theme', 'oceanic-blue');
    }
    setMounted(true);
  }, []);

  const setTheme = (newTheme: ThemeKey) => {
    setThemeState(newTheme);
    localStorage.setItem('mf_portfolio_theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const currentConfig = THEMES.find((t) => t.id === theme) || THEMES[0];

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
