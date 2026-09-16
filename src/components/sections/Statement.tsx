'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Sparkles, Terminal, ArrowRight } from 'lucide-react';
import GlowKpiCard, { cardColorMap } from '@/components/ui/GlowKpiCard';

export default function Statement() {
  const cards = [
    {
      icon: Cpu,
      title: 'Architecture First',
      badge: 'SYSTEM RESILIENCE',
      tag: '01 // PRINCIPLE',
      desc: 'Every application begins with data modeling, failure modes, and database query planning before writing UI components.',
      bullets: [
        'Data Modeling & Schema First',
        'Failure Mode & Latency Planning',
        'Sub-Second Query Optimization',
      ],
      accent: 'primary' as const,
    },
    {
      icon: Sparkles,
      title: 'Obsession with Details',
      badge: 'CRAFT & METRICS',
      tag: '02 // EXECUTION',
      desc: 'Micro-interactions, accessible keyboard navigation, 60fps frame rates, and sub-second feedback loops define quality.',
      bullets: [
        '60 FPS Smooth Frame Rates',
        'Accessible Keyboard Navigation',
        'Tactile Micro-Interactions',
      ],
      accent: 'secondary' as const,
    },
    {
      icon: Terminal,
      title: 'African Market Grounding',
      badge: 'LOCAL ECOSYSTEMS',
      tag: '03 // INFRASTRUCTURE',
      desc: 'Built specifically with real-world infrastructure constraints in mind: variable connectivity, Mobile Money, and mobile-first users.',
      bullets: [
        'Offline-Ready & Fault-Tolerant',
        'Mobile Money API Integration',
        'Low-Bandwidth Mobile Optimization',
      ],
      accent: 'primary' as const,
    },
  ];

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -80px 0px', amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-foreground-subtle"
        >
          <span className="text-primary-dynamic font-bold">01 //</span>
          <span>Philosophy & Foundation</span>
        </motion.div>

        {/* Large Statement with 3D perspective card unfold */}
        <div className="space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -80px 0px', amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-sans font-bold text-foreground leading-[1.06] tracking-tight"
          >
            I don&apos;t just write code.{' '}
            <span className="text-foreground-muted">
              I design resilient systems, solve painful real-world friction, and ship products that endure.
            </span>
          </motion.h2>

          {/* Unified KPI Design Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {cards.map((card, i) => {
              const Icon = card.icon;
              const config = cardColorMap[card.accent] || cardColorMap.primary;

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '0px 0px -60px 0px', amount: 0.15 }}
                  transition={{
                    type: 'spring',
                    damping: 15,
                    stiffness: 95,
                    delay: i * 0.12,
                  }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="h-full"
                >
                  <GlowKpiCard
                    accentColor={card.accent}
                    borderRadius="rounded-2xl"
                    borderWidth="p-[1.5px]"
                    className="h-full"
                    innerClassName="p-6 min-h-[360px] flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      {/* Top Header Row: Left Icon Box + Right Status Pill */}
                      <div className="flex items-center justify-between gap-3">
                        <div
                          className={`kpi-icon-box w-11 h-11 rounded-xl flex items-center justify-center border shadow-inner ${config.iconBg}`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>

                        <span
                          className={`kpi-status-pill inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold backdrop-blur-md border ${config.pillBg}`}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full animate-pulse"
                            style={{ backgroundColor: config.dotColor }}
                          />
                          <span>{card.badge}</span>
                        </span>
                      </div>

                      {/* Title & Tag */}
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold font-sans text-foreground">
                          <span className={card.accent === 'primary' ? 'text-primary-dynamic' : 'text-secondary-dynamic'}>
                            {card.title.split(' ')[0]}
                          </span>{' '}
                          <span>{card.title.split(' ').slice(1).join(' ')}</span>
                        </h3>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-foreground-subtle">
                          {card.tag}
                        </div>
                      </div>

                      {/* Description Paragraph */}
                      <p className="text-xs text-foreground-muted leading-relaxed font-sans">
                        {card.desc}
                      </p>

                      {/* Feature Bullet Points with colored dots */}
                      <div className="space-y-2 pt-1 text-xs text-foreground-muted font-sans">
                        {card.bullets.map((bullet, bi) => (
                          <div key={bi} className="flex items-center gap-2">
                            <span
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: config.dotColor }}
                            />
                            <span className="truncate">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Status / Inspection Indicator */}
                    <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-foreground-subtle">
                      <span>Standard & Protocol</span>
                      <span
                        className={`font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform ${
                          card.accent === 'primary' ? 'text-primary-dynamic' : 'text-secondary-dynamic'
                        }`}
                      >
                        <span>Active</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </GlowKpiCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
