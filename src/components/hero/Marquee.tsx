'use client';

import React from 'react';

export default function Marquee() {
  const items = [
    'FULL STACK DEVELOPMENT',
    'UI ENGINEERING',
    'PRODUCT DESIGN',
    'SYSTEM ARCHITECTURE',
    'NEXT.JS & REACT',
    'MOBILE MONEY INTEGRATIONS',
    'CREATIVE DEVELOPMENT',
    'PERFORMANCE OPTIMIZATION',
  ];

  return (
    <div className="w-full overflow-hidden bg-surface-300/40 py-4 select-none relative backdrop-blur-md">
      {/* Top moving multi-color laser line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden z-20 pointer-events-none">
        <div
          className="h-full w-[200%] animate-laser-flow"
          style={{
            background:
              'linear-gradient(90deg, #00E5FF, #A78BFA, #F43F5E, #F5B942, #10B981, #C8FF00, #00E5FF, #A78BFA, #F43F5E, #F5B942, #10B981, #C8FF00, #00E5FF)',
            backgroundSize: '50% 100%',
            boxShadow: '0 0 10px rgba(0, 229, 255, 0.75)',
          }}
        />
      </div>

      {/* Bottom moving multi-color laser line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden z-20 pointer-events-none">
        <div
          className="h-full w-[200%] animate-laser-flow-reverse"
          style={{
            background:
              'linear-gradient(90deg, #C8FF00, #10B981, #F5B942, #F43F5E, #A78BFA, #00E5FF, #C8FF00, #10B981, #F5B942, #F43F5E, #A78BFA, #00E5FF)',
            backgroundSize: '50% 100%',
            boxShadow: '0 0 10px rgba(244, 63, 94, 0.75)',
          }}
        />
      </div>

      {/* Left/Right gradient fade masks */}
      <div className="absolute left-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((text, idx) => (
          <div
            key={idx}
            className="flex items-center gap-6 px-6 font-sans text-xs sm:text-sm font-semibold tracking-wider text-foreground-muted whitespace-nowrap uppercase"
          >
            <span>{text}</span>
            <span className="text-accent-dynamic">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
