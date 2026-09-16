'use client';

import React from 'react';

export default function Marquee() {
  const items = [
    {
      part1: 'FULL',
      part1Color: 'text-primary-dynamic',
      part2: '-STACK',
      part2Color: 'text-secondary-dynamic',
      rest: ' DEVELOPMENT',
    },
    {
      part1: 'UI',
      part1Color: 'text-primary-dynamic',
      part2: ' ENGINEER',
      part2Color: 'text-secondary-dynamic',
      rest: 'ING',
    },
    {
      part1: 'PRO',
      part1Color: 'text-primary-dynamic',
      part2: 'DUCT',
      part2Color: 'text-secondary-dynamic',
      rest: ' DESIGN',
    },
    {
      part1: 'SYS',
      part1Color: 'text-primary-dynamic',
      part2: 'TEM',
      part2Color: 'text-secondary-dynamic',
      rest: ' ARCHITECTURE',
    },
    {
      part1: 'NEXT',
      part1Color: 'text-primary-dynamic',
      part2: '.JS',
      part2Color: 'text-secondary-dynamic',
      rest: ' & REACT',
    },
    {
      part1: 'MO',
      part1Color: 'text-primary-dynamic',
      part2: 'BILE',
      part2Color: 'text-secondary-dynamic',
      rest: ' MONEY INTEGRATIONS',
    },
    {
      part1: 'PERFORM',
      part1Color: 'text-primary-dynamic',
      part2: 'ANCE',
      part2Color: 'text-secondary-dynamic',
      rest: ' OPTIMIZATION',
    },
    {
      part1: 'CREA',
      part1Color: 'text-primary-dynamic',
      part2: 'TIVE',
      part2Color: 'text-secondary-dynamic',
      rest: ' ENGINEERING',
    },
  ];

  return (
    <div
      data-dark-container="true"
      className="marquee-billboard w-full overflow-hidden py-4 select-none relative backdrop-blur-2xl border-y border-white/[0.08]"
      style={{
        backgroundColor: '#000000',
        background:
          'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(0, 0, 0, 0.85) 50%, rgba(0, 0, 0, 0.98) 100%)',
      }}
    >
      {/* Top moving Primary & Secondary laser line matching KPI cards */}
      <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden z-20 pointer-events-none">
        <div
          className="h-full w-[200%] animate-laser-flow"
          style={{
            background:
              'linear-gradient(90deg, #00E5FF 0%, #A78BFA 25%, transparent 40%, transparent 50%, #00E5FF 60%, #A78BFA 85%, transparent 100%)',
            backgroundSize: '50% 100%',
            boxShadow: '0 0 12px rgba(0, 229, 255, 0.45)',
          }}
        />
      </div>

      {/* Bottom moving Primary & Secondary laser line matching KPI cards */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden z-20 pointer-events-none">
        <div
          className="h-full w-[200%] animate-laser-flow-reverse"
          style={{
            background:
              'linear-gradient(90deg, #A78BFA 0%, #00E5FF 25%, transparent 40%, transparent 50%, #A78BFA 60%, #00E5FF 85%, transparent 100%)',
            backgroundSize: '50% 100%',
            boxShadow: '0 0 12px rgba(167, 139, 250, 0.45)',
          }}
        />
      </div>

      {/* Left/Right gradient fade masks for seamless infinite flow */}
      <div className="absolute left-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Horizontal Billboard Items with Split Word Colors */}
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-6 px-6 font-sans text-xs sm:text-sm font-bold tracking-wider whitespace-nowrap uppercase"
          >
            <span>
              <span className={item.part1Color}>{item.part1}</span>
              <span className={item.part2Color}>{item.part2}</span>
              <span className="text-foreground-muted">{item.rest}</span>
            </span>
            <span className="text-primary-dynamic opacity-70">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
