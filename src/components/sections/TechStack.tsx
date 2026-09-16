'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '@/data/skills';
import { getOfficialIcon } from '@/components/icons/TechIcons';
import GlowKpiCard from '@/components/ui/GlowKpiCard';

const bloomSpring = {
  type: 'spring',
  damping: 12,
  stiffness: 120,
  mass: 0.6,
};

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <section id="skills" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 relative bg-surface-300/30 border-y border-border-subtle font-sans">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header with Unique Horizontal Slide & Unfold */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -80px 0px', amount: 0.2 }}
          transition={{ type: 'spring', damping: 16, stiffness: 90 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border-subtle"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-foreground-subtle">
              <span className="text-primary-dynamic font-bold">05 //</span>
              <span>Technical Repertoire</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-sans text-foreground tracking-tight">
              Skills & Core Technologies
            </h2>
            <p className="text-sm text-foreground-muted font-sans max-w-lg">
              Industry-standard production toolchains powered by modern, battle-tested engineering ecosystems.
            </p>
          </div>

          {/* Category Tabs: Header-Style Capsule Pill Buttons */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-surface-100/80 backdrop-blur-md border border-border-subtle self-start md:self-auto overflow-x-auto max-w-full">
            {skillsData.map((cat, idx) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(idx)}
                className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium transition-all whitespace-nowrap active:scale-95 shadow-sm ${
                  activeCategory === idx
                    ? 'bg-primary-dynamic text-black font-bold shadow-sm'
                    : 'text-foreground-muted hover:text-foreground hover:bg-surface-50'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Active Category Skills Grid with Unified KPI Card Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData[activeCategory].skills.map((skill, index) => {
            const accent = index % 2 === 0 ? 'primary' : 'secondary';

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.88, y: 24 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -60px 0px', amount: 0.15 }}
                transition={{ ...bloomSpring, delay: (index % 3) * 0.08 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="h-full"
              >
                <GlowKpiCard
                  accentColor={accent}
                  borderRadius="rounded-2xl"
                  borderWidth="p-[1.5px]"
                  className="h-full"
                  innerClassName="tech-skill-card p-6 min-h-[220px] flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        {/* Official Brand SVG Vector Icon in kpi-icon-box */}
                        <div className="kpi-icon-box flex h-11 w-11 items-center justify-center rounded-xl border border-black/40 bg-surface-100/90 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                          {getOfficialIcon(skill.name, 'w-6 h-6')}
                        </div>
                        <h4 className="text-lg font-bold font-sans text-foreground group-hover:text-primary-dynamic transition-colors">
                          {skill.name}
                        </h4>
                      </div>
                      <span className="kpi-status-pill text-xs font-semibold px-3 py-1 rounded-full bg-surface-100 border border-border-subtle text-foreground-muted">
                        {skill.level}
                      </span>
                    </div>

                    <p className="text-xs text-foreground-muted leading-relaxed font-sans">
                      {skill.description}
                    </p>
                  </div>

                  {skill.highlight ? (
                    <div className="pt-3 mt-2 border-t border-white/5 flex items-center gap-2 text-xs text-primary-dynamic font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-dynamic animate-pulse" />
                      <span>Primary Production Stack</span>
                    </div>
                  ) : (
                    <div className="pt-3 mt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-foreground-subtle">
                      <span>Production Tool</span>
                      <span className="text-primary-dynamic font-semibold">Ready</span>
                    </div>
                  )}
                </GlowKpiCard>
              </motion.div>
            );
          })}
        </div>

        {/* Architecture Strip with Unified KPI Card Design */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -80px 0px', amount: 0.2 }}
          transition={{ type: 'spring', damping: 15, stiffness: 100 }}
          className="w-full h-full"
        >
          <GlowKpiCard
            accentColor="primary"
            borderRadius="rounded-3xl"
            borderWidth="p-[1.5px]"
            className="w-full h-full"
            innerClassName="tech-arch-strip p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs shadow-2xl"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-primary-dynamic animate-pulse" />
                <span>Modern Frontend</span>
              </div>
              <p className="text-foreground-muted leading-relaxed font-sans">
                Next.js 14 App Router, React 18 Concurrent Mode, Tailwind CSS responsive layouts, and 60fps Framer Motion orchestration.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary-dynamic" />
                <span>Data & Reliability</span>
              </div>
              <p className="text-foreground-muted leading-relaxed font-sans">
                MongoDB 2dsphere spatial indexes, PostgreSQL transactional isolation, Redis caching, and optimistic client updates.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-primary-dynamic" />
                <span>Localized Integrations</span>
              </div>
              <p className="text-foreground-muted leading-relaxed font-sans">
                Paystack MTN & Telecel Mobile Money webhook listeners with idempotent transaction settlement engines.
              </p>
            </div>
          </GlowKpiCard>
        </motion.div>
      </div>
    </section>
  );
}
