'use client';

import React from 'react';

interface GlowKpiCardProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  active?: boolean;
  borderWidth?: string;
  borderRadius?: string;
  onClick?: (e: React.MouseEvent) => void;
  dataCursor?: string;
  speed?: 'normal' | 'slow';
}

export default function GlowKpiCard({
  children,
  className = '',
  innerClassName = '',
  active = false,
  borderWidth = 'p-[1.5px]',
  borderRadius = 'rounded-2xl',
  onClick,
  dataCursor,
  speed = 'normal',
}: GlowKpiCardProps) {
  const isClickable = !!onClick;

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
        className={`absolute -inset-1 ${borderRadius} overflow-hidden pointer-events-none transition-opacity duration-300 ${
          active ? 'opacity-80 blur-md' : 'opacity-35 group-hover:opacity-65 blur-sm'
        }`}
      >
        <div
          className={`absolute top-1/2 left-1/2 w-[350%] h-[350%] ${
            speed === 'slow' ? 'animate-border-spin-slow' : 'animate-border-spin'
          }`}
          style={{
            background:
              'conic-gradient(from 0deg at 50% 50%, #00E5FF 0deg, #A78BFA 60deg, #F43F5E 120deg, #F5B942 180deg, #10B981 240deg, #C8FF00 300deg, #00E5FF 360deg)',
          }}
        />
      </div>

      {/* Main card container with border cut */}
      <div
        className={`relative h-full w-full ${borderWidth} ${borderRadius} overflow-hidden shadow-lg transition-transform duration-300`}
      >
        {/* The rotating multi-color conic gradient */}
        <div
          className={`absolute top-1/2 left-1/2 w-[350%] h-[350%] ${
            speed === 'slow' ? 'animate-border-spin-slow' : 'animate-border-spin'
          }`}
          style={{
            background:
              'conic-gradient(from 0deg at 50% 50%, #00E5FF 0deg, #A78BFA 60deg, #F43F5E 120deg, #F5B942 180deg, #10B981 240deg, #C8FF00 300deg, #00E5FF 360deg)',
          }}
        />

        {/* Inner Card Surface */}
        <div
          className={`relative h-full w-full ${borderRadius} transition-all duration-300 ${
            active
              ? 'bg-surface-100/95 ring-1 ring-accent-dynamic/40 shadow-[inset_0_0_20px_var(--color-accent-muted)]'
              : 'bg-surface-200/90 group-hover:bg-surface-100/95'
          } backdrop-blur-xl ${innerClassName}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
