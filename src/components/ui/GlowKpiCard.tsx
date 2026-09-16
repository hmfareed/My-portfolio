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
    dotColor: string;
    pillBg: string;
    btnBg: string;
    textAccent: string;
    iconBg: string;
  }
> = {
  amber: {
    dotColor: '#F5B942',
    pillBg: 'bg-[#F5B942]/10 border-[#F5B942]/30 text-[#F5B942]',
    btnBg: 'bg-[#F5B942] hover:bg-[#FCD34D] text-black shadow-[0_0_24px_rgba(245,185,66,0.4)]',
    textAccent: 'text-[#F5B942]',
    iconBg: 'bg-[#F5B942]/15 text-[#F5B942] border-[#F5B942]/30',
  },
  teal: {
    dotColor: '#00E5FF',
    pillBg: 'bg-[#00E5FF]/10 border-[#00E5FF]/30 text-[#00E5FF]',
    btnBg: 'bg-[#00E5FF] hover:bg-[#38BDF8] text-black shadow-[0_0_24px_rgba(0,229,255,0.4)]',
    textAccent: 'text-[#00E5FF]',
    iconBg: 'bg-[#00E5FF]/15 text-[#00E5FF] border-[#00E5FF]/30',
  },
  violet: {
    dotColor: '#A78BFA',
    pillBg: 'bg-[#A78BFA]/10 border-[#A78BFA]/30 text-[#A78BFA]',
    btnBg: 'bg-[#A78BFA] hover:bg-[#C4B5FD] text-black shadow-[0_0_24px_rgba(167,139,250,0.4)]',
    textAccent: 'text-[#A78BFA]',
    iconBg: 'bg-[#A78BFA]/15 text-[#A78BFA] border-[#A78BFA]/30',
  },
  rose: {
    dotColor: '#F43F5E',
    pillBg: 'bg-[#F43F5E]/10 border-[#F43F5E]/30 text-[#F43F5E]',
    btnBg: 'bg-[#F43F5E] hover:bg-[#FB7185] text-black shadow-[0_0_24px_rgba(244,63,94,0.4)]',
    textAccent: 'text-[#F43F5E]',
    iconBg: 'bg-[#F43F5E]/15 text-[#F43F5E] border-[#F43F5E]/30',
  },
  lime: {
    dotColor: '#C8FF00',
    pillBg: 'bg-[#C8FF00]/10 border-[#C8FF00]/30 text-[#C8FF00]',
    btnBg: 'bg-[#C8FF00] hover:bg-[#D7FF4F] text-black shadow-[0_0_24px_rgba(200,255,0,0.4)]',
    textAccent: 'text-[#C8FF00]',
    iconBg: 'bg-[#C8FF00]/15 text-[#C8FF00] border-[#C8FF00]/30',
  },
  sky: {
    dotColor: '#38BDF8',
    pillBg: 'bg-[#38BDF8]/10 border-[#38BDF8]/30 text-[#38BDF8]',
    btnBg: 'bg-[#38BDF8] hover:bg-[#60A5FA] text-black shadow-[0_0_24px_rgba(56,189,248,0.4)]',
    textAccent: 'text-[#38BDF8]',
    iconBg: 'bg-[#38BDF8]/15 text-[#38BDF8] border-[#38BDF8]/30',
  },
  spectrum: {
    dotColor: '#00E5FF',
    pillBg: 'bg-accent-muted border-accent-dynamic/40 text-accent-dynamic',
    btnBg: 'bg-accent-dynamic text-black hover:opacity-95 shadow-[0_0_24px_var(--color-accent-glow)]',
    textAccent: 'text-accent-dynamic',
    iconBg: 'bg-accent-muted text-accent-dynamic border-accent-dynamic/30',
  },
};

/**
 * Creates a 4-cut luminous conic gradient with four distinct laser segments
 * spaced at 90-degree intervals around the perimeter.
 */
function getFourCutConic(color: string) {
  if (color === '#00E5FF') {
    // Polychromatic spectrum mode
    return `conic-gradient(from 0deg at 50% 50%, 
      transparent 0deg, 
      #00E5FF 12deg, 
      #ffffff 22deg,
      #00E5FF 32deg, 
      transparent 45deg,
      transparent 90deg, 
      #A78BFA 102deg, 
      #ffffff 112deg,
      #A78BFA 122deg, 
      transparent 135deg,
      transparent 180deg, 
      #F43F5E 192deg, 
      #ffffff 202deg,
      #F43F5E 212deg, 
      transparent 225deg,
      transparent 270deg, 
      #F5B942 282deg, 
      #ffffff 292deg,
      #F5B942 302deg, 
      transparent 315deg,
      transparent 360deg
    )`;
  }

  return `conic-gradient(from 0deg at 50% 50%, 
    transparent 0deg, 
    ${color} 12deg, 
    #ffffff 22deg,
    ${color} 32deg, 
    transparent 45deg,
    transparent 90deg, 
    ${color} 102deg, 
    #ffffff 112deg,
    ${color} 122deg, 
    transparent 135deg,
    transparent 180deg, 
    ${color} 192deg, 
    #ffffff 202deg,
    ${color} 212deg, 
    transparent 225deg,
    transparent 270deg, 
    ${color} 282deg, 
    #ffffff 292deg,
    ${color} 302deg, 
    transparent 315deg,
    transparent 360deg
  )`;
}

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
  const fourCutConic = getFourCutConic(config.dotColor);

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
      {/* Ambient outer glow halo with 4 moving cut lines */}
      <div
        className={`absolute -inset-1.5 ${borderRadius} overflow-hidden pointer-events-none transition-opacity duration-500 ${
          active ? 'opacity-90 blur-lg' : 'opacity-40 group-hover:opacity-80 blur-md'
        }`}
      >
        <div
          className={`absolute top-1/2 left-1/2 w-[350%] h-[350%] ${
            speed === 'slow' ? 'animate-border-spin-slow' : 'animate-border-spin'
          }`}
          style={{
            background: fourCutConic,
          }}
        />
      </div>

      {/* Main card container with border cut & four moving perimeter lines */}
      <div
        className={`relative h-full w-full ${borderWidth} ${borderRadius} overflow-hidden shadow-2xl transition-transform duration-300 border border-white/10`}
      >
        {/* Four-Cut rotating perimeter conic mask (tracing the rounded corners) */}
        <div
          className={`absolute top-1/2 left-1/2 w-[350%] h-[350%] pointer-events-none ${
            speed === 'slow' ? 'animate-border-spin-slow' : 'animate-border-spin'
          }`}
          style={{
            background: fourCutConic,
          }}
        />

        {/* Four Traveling Laser Cut Lines Chasing Each Other Along the 4 Edges */}
        {/* 1. Top Cut Line: moves left to right */}
        <div className="absolute top-0 left-0 right-0 h-[2.5px] overflow-hidden pointer-events-none z-30">
          <div
            className="absolute h-full w-36 sm:w-52 animate-beam-top rounded-full"
            style={{
              background: `linear-gradient(90deg, transparent 0%, ${config.dotColor} 50%, #ffffff 85%, transparent 100%)`,
              boxShadow: `0 0 14px ${config.dotColor}, 0 0 4px #ffffff`,
            }}
          />
        </div>

        {/* 2. Right Cut Line: moves top to bottom */}
        <div className="absolute top-0 right-0 bottom-0 w-[2.5px] overflow-hidden pointer-events-none z-30">
          <div
            className="absolute w-full h-36 sm:h-52 animate-beam-right rounded-full"
            style={{
              background: `linear-gradient(180deg, transparent 0%, ${config.dotColor} 50%, #ffffff 85%, transparent 100%)`,
              boxShadow: `0 0 14px ${config.dotColor}, 0 0 4px #ffffff`,
            }}
          />
        </div>

        {/* 3. Bottom Cut Line: moves right to left */}
        <div className="absolute bottom-0 left-0 right-0 h-[2.5px] overflow-hidden pointer-events-none z-30">
          <div
            className="absolute h-full w-36 sm:w-52 animate-beam-bottom rounded-full"
            style={{
              background: `linear-gradient(270deg, transparent 0%, ${config.dotColor} 50%, #ffffff 85%, transparent 100%)`,
              boxShadow: `0 0 14px ${config.dotColor}, 0 0 4px #ffffff`,
            }}
          />
        </div>

        {/* 4. Left Cut Line: moves bottom to top */}
        <div className="absolute top-0 left-0 bottom-0 w-[2.5px] overflow-hidden pointer-events-none z-30">
          <div
            className="absolute w-full h-36 sm:h-52 animate-beam-left rounded-full"
            style={{
              background: `linear-gradient(0deg, transparent 0%, ${config.dotColor} 50%, #ffffff 85%, transparent 100%)`,
              boxShadow: `0 0 14px ${config.dotColor}, 0 0 4px #ffffff`,
            }}
          />
        </div>

        {/* Inner Card Surface */}
        <div
          className={`relative h-full w-full ${borderRadius} transition-all duration-300 ${
            active
              ? 'bg-[#050810]/98 ring-1 ring-white/10 shadow-[inset_0_0_30px_rgba(0,0,0,0.85)]'
              : 'bg-[#080C16]/96 group-hover:bg-[#050810]/98'
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
