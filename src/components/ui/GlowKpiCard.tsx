'use client';

import React from 'react';

export type CardAccentColor =
  | 'primary'
  | 'secondary'
  | 'amber'
  | 'teal'
  | 'violet'
  | 'rose'
  | 'lime'
  | 'sky'
  | 'spectrum';

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
  string,
  {
    dotColor: string;
    pillBg: string;
    btnBg: string;
    textAccent: string;
    iconBg: string;
  }
> = {
  primary: {
    dotColor: '#00E5FF',
    pillBg: 'bg-[#00E5FF]/10 border-[#00E5FF]/30 text-[#00E5FF]',
    btnBg: 'bg-[#00E5FF] hover:bg-[#38BDF8] text-black shadow-[0_0_20px_rgba(0,229,255,0.35)]',
    textAccent: 'text-[#00E5FF]',
    iconBg: 'bg-[#00E5FF]/15 text-[#00E5FF] border-[#00E5FF]/30',
  },
  secondary: {
    dotColor: '#A78BFA',
    pillBg: 'bg-[#A78BFA]/10 border-[#A78BFA]/30 text-[#A78BFA]',
    btnBg: 'bg-[#A78BFA] hover:bg-[#C4B5FD] text-black shadow-[0_0_20px_rgba(167,139,250,0.35)]',
    textAccent: 'text-[#A78BFA]',
    iconBg: 'bg-[#A78BFA]/15 text-[#A78BFA] border-[#A78BFA]/30',
  },
  // Backward compatibility mappings strictly mapped to primary & secondary
  teal: {
    dotColor: '#00E5FF',
    pillBg: 'bg-[#00E5FF]/10 border-[#00E5FF]/30 text-[#00E5FF]',
    btnBg: 'bg-[#00E5FF] hover:bg-[#38BDF8] text-black shadow-[0_0_20px_rgba(0,229,255,0.35)]',
    textAccent: 'text-[#00E5FF]',
    iconBg: 'bg-[#00E5FF]/15 text-[#00E5FF] border-[#00E5FF]/30',
  },
  sky: {
    dotColor: '#00E5FF',
    pillBg: 'bg-[#00E5FF]/10 border-[#00E5FF]/30 text-[#00E5FF]',
    btnBg: 'bg-[#00E5FF] hover:bg-[#38BDF8] text-black shadow-[0_0_20px_rgba(0,229,255,0.35)]',
    textAccent: 'text-[#00E5FF]',
    iconBg: 'bg-[#00E5FF]/15 text-[#00E5FF] border-[#00E5FF]/30',
  },
  lime: {
    dotColor: '#00E5FF',
    pillBg: 'bg-[#00E5FF]/10 border-[#00E5FF]/30 text-[#00E5FF]',
    btnBg: 'bg-[#00E5FF] hover:bg-[#38BDF8] text-black shadow-[0_0_20px_rgba(0,229,255,0.35)]',
    textAccent: 'text-[#00E5FF]',
    iconBg: 'bg-[#00E5FF]/15 text-[#00E5FF] border-[#00E5FF]/30',
  },
  violet: {
    dotColor: '#A78BFA',
    pillBg: 'bg-[#A78BFA]/10 border-[#A78BFA]/30 text-[#A78BFA]',
    btnBg: 'bg-[#A78BFA] hover:bg-[#C4B5FD] text-black shadow-[0_0_20px_rgba(167,139,250,0.35)]',
    textAccent: 'text-[#A78BFA]',
    iconBg: 'bg-[#A78BFA]/15 text-[#A78BFA] border-[#A78BFA]/30',
  },
  amber: {
    dotColor: '#A78BFA',
    pillBg: 'bg-[#A78BFA]/10 border-[#A78BFA]/30 text-[#A78BFA]',
    btnBg: 'bg-[#A78BFA] hover:bg-[#C4B5FD] text-black shadow-[0_0_20px_rgba(167,139,250,0.35)]',
    textAccent: 'text-[#A78BFA]',
    iconBg: 'bg-[#A78BFA]/15 text-[#A78BFA] border-[#A78BFA]/30',
  },
  rose: {
    dotColor: '#A78BFA',
    pillBg: 'bg-[#A78BFA]/10 border-[#A78BFA]/30 text-[#A78BFA]',
    btnBg: 'bg-[#A78BFA] hover:bg-[#C4B5FD] text-black shadow-[0_0_20px_rgba(167,139,250,0.35)]',
    textAccent: 'text-[#A78BFA]',
    iconBg: 'bg-[#A78BFA]/15 text-[#A78BFA] border-[#A78BFA]/30',
  },
  spectrum: {
    dotColor: '#00E5FF',
    pillBg: 'bg-[#00E5FF]/10 border-[#00E5FF]/30 text-[#00E5FF]',
    btnBg: 'bg-[#00E5FF] hover:bg-[#38BDF8] text-black shadow-[0_0_20px_rgba(0,229,255,0.35)]',
    textAccent: 'text-[#00E5FF]',
    iconBg: 'bg-[#00E5FF]/15 text-[#00E5FF] border-[#00E5FF]/30',
  },
};

/**
 * Creates a slow, calm 4-cut perimeter conic gradient alternating Primary (#00E5FF)
 * and Secondary (#A78BFA), smoothly tracing edges and rounded corners without disco flashing.
 */
function getFourCutConic() {
  return `conic-gradient(from 0deg at 50% 50%, 
    transparent 0deg, 
    var(--kpi-cut-1, #00E5FF) 12deg, 
    var(--kpi-cut-1, #00E5FF) 36deg, 
    transparent 50deg,
    transparent 90deg, 
    var(--kpi-cut-2, #A78BFA) 102deg, 
    var(--kpi-cut-2, #A78BFA) 126deg, 
    transparent 140deg,
    transparent 180deg, 
    var(--kpi-cut-1, #00E5FF) 192deg, 
    var(--kpi-cut-1, #00E5FF) 216deg, 
    transparent 230deg,
    transparent 270deg, 
    var(--kpi-cut-2, #A78BFA) 282deg, 
    var(--kpi-cut-2, #A78BFA) 306deg, 
    transparent 320deg,
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
  accentColor = 'primary',
  showParticles = true,
}: GlowKpiCardProps) {
  const isClickable = !!onClick;
  const config = cardColorMap[accentColor] || cardColorMap.primary;
  const fourCutConic = getFourCutConic();

  return (
    <div
      onClick={onClick}
      data-cursor={dataCursor}
      data-kpi-card="true"
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
      {/* Calm ambient outer glow halo (slow 10s rotation, no disco flashing) */}
      <div
        className={`kpi-outer-halo absolute -inset-1 ${borderRadius} overflow-hidden pointer-events-none transition-opacity duration-700 ${
          active ? 'opacity-80 blur-md' : 'opacity-25 group-hover:opacity-65 blur-sm'
        }`}
      >
        <div
          className="kpi-conic-glow absolute top-1/2 left-1/2 w-[350%] h-[350%] pointer-events-none animate-border-spin-calm"
          style={{
            background: fourCutConic,
          }}
        />
      </div>

      {/* Main card container with four cut perimeter lines moving smoothly */}
      <div
        className={`kpi-card-box relative h-full w-full ${borderWidth} ${borderRadius} overflow-hidden shadow-2xl transition-transform duration-300 border border-white/10`}
      >
        {/* Four-Cut rotating perimeter conic mask (smooth 10s calm orbit around edges and corners) */}
        <div
          className="kpi-conic-border absolute top-1/2 left-1/2 w-[350%] h-[350%] pointer-events-none animate-border-spin-calm"
          style={{
            background: fourCutConic,
          }}
        />

        {/* Inner Card Surface: Super AMOLED Dark with Glassmorphism */}
        <div
          className={`kpi-card-surface relative h-full w-full ${borderRadius} transition-all duration-300 backdrop-blur-2xl overflow-hidden border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),0_12px_40px_rgba(0,0,0,0.85)] ${
            active
              ? 'ring-1 ring-white/15'
              : 'group-hover:border-white/15'
          } ${innerClassName}`}
          style={{
            background:
              'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(0, 0, 0, 0.75) 45%, rgba(0, 0, 0, 0.98) 100%)',
            backgroundColor: '#000000',
          }}
        >
          {/* Subtle top specular glass sheen line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-20" />

          {/* Calm luminous particles in card background (Primary & Secondary only) */}
          {showParticles && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
              <span
                className="absolute top-[20%] right-[26%] w-1.5 h-1.5 rounded-full opacity-45 animate-pulse"
                style={{ backgroundColor: '#00E5FF' }}
              />
              <span
                className="absolute top-[52%] left-[62%] w-1 h-1 rounded-full opacity-35"
                style={{ backgroundColor: '#A78BFA' }}
              />
              <span
                className="absolute top-[72%] left-[22%] w-1.5 h-1.5 rounded-full opacity-40 animate-pulse"
                style={{ backgroundColor: '#00E5FF', animationDelay: '2.5s' }}
              />
              <span
                className="absolute top-[34%] left-[36%] w-1 h-1 rounded-full opacity-30"
                style={{ backgroundColor: '#A78BFA' }}
              />
            </div>
          )}

          {/* Child content container */}
          <div className="relative z-10 h-full w-full flex flex-col justify-between">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
