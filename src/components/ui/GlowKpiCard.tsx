'use client';

import React from 'react';

export type CardAccentColor = 'amber' | 'teal' | 'violet' | 'rose' | 'lime' | 'sky' | 'spectrum';

export interface GlowKpiCardProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  active?: boolean;
  borderWidth?: string;
  borderRadius?: string;
  onClick?: (e: React.MouseEvent) => void;
  dataCursor?: string;
  speed?: 'normal' | 'slow';
  accentColor?: CardAccentColor;
  showParticles?: boolean;
}

export const cardColorMap: Record<
  CardAccentColor,
  {
    borderGrad: string;
    haloColor: string;
    dotColor: string;
    pillBg: string;
    btnBg: string;
    textAccent: string;
    iconBg: string;
  }
> = {
  amber: {
    borderGrad: 'conic-gradient(from 0deg at 50% 50%, #F5B942, #FDE68A, #D97706, #78350F, #F5B942)',
    haloColor: 'rgba(245, 185, 66, 0.32)',
    dotColor: '#F5B942',
    pillBg: 'bg-[#F5B942]/10 border-[#F5B942]/30 text-[#F5B942]',
    btnBg: 'bg-[#F5B942] hover:bg-[#FCD34D] text-black shadow-[0_0_24px_rgba(245,185,66,0.4)]',
    textAccent: 'text-[#F5B942]',
    iconBg: 'bg-[#F5B942]/15 text-[#F5B942] border-[#F5B942]/30',
  },
  teal: {
    borderGrad: 'conic-gradient(from 0deg at 50% 50%, #00E5FF, #34D399, #059669, #064E3B, #00E5FF)',
    haloColor: 'rgba(0, 229, 255, 0.32)',
    dotColor: '#00E5FF',
    pillBg: 'bg-[#00E5FF]/10 border-[#00E5FF]/30 text-[#00E5FF]',
    btnBg: 'bg-[#00E5FF] hover:bg-[#38BDF8] text-black shadow-[0_0_24px_rgba(0,229,255,0.4)]',
    textAccent: 'text-[#00E5FF]',
    iconBg: 'bg-[#00E5FF]/15 text-[#00E5FF] border-[#00E5FF]/30',
  },
  violet: {
    borderGrad: 'conic-gradient(from 0deg at 50% 50%, #A78BFA, #DDD6FE, #7C3AED, #4C1D95, #A78BFA)',
    haloColor: 'rgba(167, 139, 250, 0.32)',
    dotColor: '#A78BFA',
    pillBg: 'bg-[#A78BFA]/10 border-[#A78BFA]/30 text-[#A78BFA]',
    btnBg: 'bg-[#A78BFA] hover:bg-[#C4B5FD] text-black shadow-[0_0_24px_rgba(167,139,250,0.4)]',
    textAccent: 'text-[#A78BFA]',
    iconBg: 'bg-[#A78BFA]/15 text-[#A78BFA] border-[#A78BFA]/30',
  },
  rose: {
    borderGrad: 'conic-gradient(from 0deg at 50% 50%, #F43F5E, #FECDD3, #E11D48, #881337, #F43F5E)',
    haloColor: 'rgba(244, 63, 94, 0.32)',
    dotColor: '#F43F5E',
    pillBg: 'bg-[#F43F5E]/10 border-[#F43F5E]/30 text-[#F43F5E]',
    btnBg: 'bg-[#F43F5E] hover:bg-[#FB7185] text-black shadow-[0_0_24px_rgba(244,63,94,0.4)]',
    textAccent: 'text-[#F43F5E]',
    iconBg: 'bg-[#F43F5E]/15 text-[#F43F5E] border-[#F43F5E]/30',
  },
  lime: {
    borderGrad: 'conic-gradient(from 0deg at 50% 50%, #C8FF00, #ECFCCB, #84CC16, #365314, #C8FF00)',
    haloColor: 'rgba(200, 255, 0, 0.32)',
    dotColor: '#C8FF00',
    pillBg: 'bg-[#C8FF00]/10 border-[#C8FF00]/30 text-[#C8FF00]',
    btnBg: 'bg-[#C8FF00] hover:bg-[#D7FF4F] text-black shadow-[0_0_24px_rgba(200,255,0,0.4)]',
    textAccent: 'text-[#C8FF00]',
    iconBg: 'bg-[#C8FF00]/15 text-[#C8FF00] border-[#C8FF00]/30',
  },
  sky: {
    borderGrad: 'conic-gradient(from 0deg at 50% 50%, #38BDF8, #BAE6FD, #0284C7, #082F49, #38BDF8)',
    haloColor: 'rgba(56, 189, 248, 0.32)',
    dotColor: '#38BDF8',
    pillBg: 'bg-[#38BDF8]/10 border-[#38BDF8]/30 text-[#38BDF8]',
    btnBg: 'bg-[#38BDF8] hover:bg-[#60A5FA] text-black shadow-[0_0_24px_rgba(56,189,248,0.4)]',
    textAccent: 'text-[#38BDF8]',
    iconBg: 'bg-[#38BDF8]/15 text-[#38BDF8] border-[#38BDF8]/30',
  },
  spectrum: {
    borderGrad:
      'conic-gradient(from 0deg at 50% 50%, #00E5FF 0deg, #A78BFA 60deg, #F43F5E 120deg, #F5B942 180deg, #10B981 240deg, #C8FF00 300deg, #00E5FF 360deg)',
    haloColor: 'rgba(0, 229, 255, 0.32)',
    dotColor: '#00E5FF',
    pillBg: 'bg-accent-muted border-accent-dynamic/40 text-accent-dynamic',
    btnBg: 'bg-accent-dynamic text-black hover:opacity-95 shadow-[0_0_24px_var(--color-accent-glow)]',
    textAccent: 'text-accent-dynamic',
    iconBg: 'bg-accent-muted text-accent-dynamic border-accent-dynamic/30',
  },
};

export default function GlowKpiCard({
  children,
  className = '',
  innerClassName = '',
  active = false,
  borderWidth = 'p-[1.5px]',
  borderRadius = 'rounded-3xl',
  onClick,
  dataCursor,
  speed = 'normal',
  accentColor = 'spectrum',
  showParticles = true,
}: GlowKpiCardProps) {
  const isClickable = !!onClick;
  const config = cardColorMap[accentColor] || cardColorMap.spectrum;

  return (
    <div
      onClick={onClick}
      data-cursor={dataCursor}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={
        isClickable
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick(e as unknown as React.MouseEvent);
              }
            }
          : undefined
      }
      className={`group relative ${isClickable ? 'cursor-pointer select-none' : ''} ${className}`}
    >
      {/* Ambient outer glow halo */}
      <div
        className={`absolute -inset-1.5 ${borderRadius} overflow-hidden pointer-events-none transition-opacity duration-500 ${
          active ? 'opacity-85 blur-lg' : 'opacity-35 group-hover:opacity-75 blur-md'
        }`}
      >
        <div
          className={`absolute top-1/2 left-1/2 w-[350%] h-[350%] ${
            speed === 'slow' ? 'animate-border-spin-slow' : 'animate-border-spin'
          }`}
          style={{
            background: config.borderGrad,
          }}
        />
      </div>

      {/* Main card container with border cut */}
      <div
        className={`relative h-full w-full ${borderWidth} ${borderRadius} overflow-hidden shadow-2xl transition-transform duration-300`}
      >
        {/* The rotating luminous border */}
        <div
          className={`absolute top-1/2 left-1/2 w-[350%] h-[350%] ${
            speed === 'slow' ? 'animate-border-spin-slow' : 'animate-border-spin'
          }`}
          style={{
            background: config.borderGrad,
          }}
        />

        {/* Inner Card Surface */}
        <div
          className={`relative h-full w-full ${borderRadius} transition-all duration-300 ${
            active
              ? 'bg-[#080B12]/98 ring-1 ring-white/10 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)]'
              : 'bg-[#0A0E18]/95 group-hover:bg-[#070A12]/98'
          } backdrop-blur-2xl overflow-hidden ${innerClassName}`}
        >
          {/* Floating luminous dust particles in card background */}
          {showParticles && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
              <span
                className="absolute top-[20%] right-[28%] w-1.5 h-1.5 rounded-full opacity-60 animate-pulse"
                style={{ backgroundColor: config.dotColor }}
              />
              <span
                className="absolute top-[48%] left-[58%] w-1 h-1 rounded-full opacity-40"
                style={{ backgroundColor: config.dotColor }}
              />
              <span
                className="absolute top-[68%] left-[24%] w-1.5 h-1.5 rounded-full opacity-50 animate-pulse"
                style={{ backgroundColor: config.dotColor, animationDelay: '1.2s' }}
              />
              <span
                className="absolute top-[36%] left-[34%] w-1 h-1 rounded-full opacity-35"
                style={{ backgroundColor: config.dotColor }}
              />
              <span
                className="absolute top-[76%] right-[18%] w-1 h-1 rounded-full opacity-45 animate-pulse"
                style={{ backgroundColor: config.dotColor, animationDelay: '2.4s' }}
              />
            </div>
          )}

          {/* Child content container above particles */}
          <div className="relative z-10 h-full w-full flex flex-col justify-between">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
