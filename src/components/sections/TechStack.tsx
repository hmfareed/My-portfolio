'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '@/data/skills';
import { getOfficialIcon } from '@/components/icons/TechIcons';
import GlowKpiCard from '@/components/ui/GlowKpiCard';
import { Layers3, Database, ShieldCheck, Sparkles } from 'lucide-react';

const allSkills = skillsData.flatMap((cat) => cat.skills);

const categories = [
  { label: 'All Stack', skills: allSkills },
  ...skillsData.map((cat) => ({ label: cat.category, skills: cat.skills })),
];

const architecturePillars = [
  {
    title: 'Modern Frontend',
    subtitle: 'CLIENT ENGINE',
    status: '60 FPS TIER',
    accent: 'primary' as const,
    icon: Layers3,
    description:
      'Next.js 14 App Router, React 18 Concurrent Mode, responsive Tailwind layouts, and 60fps Framer Motion transitions.',
    bullets: [
      'Next.js 14 App Router & Server Components',
      'React 18 Concurrent Mode & Suspense',
      'Tailwind CSS design token architectures',
      '60 FPS gesture-driven motion transitions',
    ],
    footerTag: 'High-Fidelity Client Tier',
  },
  {
    title: 'Data & Reliability',
    subtitle: 'PERSISTENCE LAYER',
    status: 'ACID SECURE',
    accent: 'secondary' as const,
    icon: Database,
    description:
      'MongoDB 2dsphere spatial indexes, PostgreSQL transactional isolation, Redis high-throughput caching, and optimistic UI updates.',
    bullets: [
      'MongoDB 2dsphere spatial geo-queries',
      'PostgreSQL ACID transactional isolation',
      'Redis in-memory caching & rate limiting',
      'Optimistic mutations with error rollbacks',
    ],
    footerTag: 'Data Integrity Tier',
  },
  {
    title: 'Localized Integrations',
    subtitle: 'FINTECH & LOGISTICS',
    status: 'MOMO NATIVE',
    accent: 'primary' as const,
    icon: ShieldCheck,
    description:
      'Paystack MTN & Telecel Mobile Money webhook listeners with idempotent settlement engines and automated receipts.',
    bullets: [
      'Paystack MTN & Telecel MoMo webhooks',
      'Idempotent transaction settlement ledger',
      'Automated SMS & email receipt pipelines',
      'Sub-second payment verification webhooks',
    ],
    footerTag: 'Ecosystem Settlement Tier',
  },
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const displayedSkills = categories[activeCategory]?.skills || allSkills;

  return (
    <section id="skills" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 relative bg-surface-300/30 border-y border-border-subtle font-sans">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header with Title & Capsule Pill Tabs */}
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
            {categories.map((cat, idx) => (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(idx)}
                className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium transition-all whitespace-nowrap active:scale-95 shadow-sm ${
                  activeCategory === idx
                    ? 'bg-primary-dynamic text-black font-bold shadow-sm'
                    : 'text-foreground-muted hover:text-foreground hover:bg-surface-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 2 Side-by-Side Pencil-Shaded Logos Grid (Cardless, Left-Right Stagger) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 gap-6 sm:gap-10 max-w-3xl mx-auto py-4"
          >
            {displayedSkills.map((skill, index) => {
              const isLeft = index % 2 === 0;
              const rowIndex = Math.floor(index / 2);

              return (
                <motion.div
                  key={skill.name}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -55 : 55,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }}
                  viewport={{ once: true, margin: '0px 0px -40px 0px', amount: 0.15 }}
                  transition={{
                    type: 'spring',
                    damping: 16,
                    stiffness: 100,
                    delay: rowIndex * 0.08 + (isLeft ? 0 : 0.05),
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="pencil-shaded-item group flex flex-col items-center justify-center p-5 sm:p-7 rounded-2xl transition-all cursor-default select-none"
                >
                  {/* Pencil-shaded Logo */}
                  <div className="pencil-shaded-logo flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 group-hover:scale-110">
                    {getOfficialIcon(skill.name, 'w-12 h-12 sm:w-16 sm:h-16')}
                  </div>

                  {/* Skill Name in clean typography */}
                  <h4 className="mt-3 text-sm sm:text-base font-bold font-sans text-foreground text-center tracking-tight transition-colors group-hover:text-primary-dynamic">
                    {skill.name}
                  </h4>

                  {/* Subtle level caption */}
                  <span className="mt-0.5 text-[10px] sm:text-xs font-mono text-foreground-subtle text-center">
                    {skill.level}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* The Next KPI under the Stack: 3 Architecture Pillars in Full Current KPI Design */}
        <div className="space-y-6 pt-10 border-t border-border-subtle">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-foreground-subtle">
                ARCHITECTURE & INFRASTRUCTURE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-sans text-foreground">
                Core Architectural Pillars
              </h3>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-primary-dynamic font-semibold px-3 py-1 rounded-full bg-surface-100 border border-border-subtle">
              <Sparkles className="w-3.5 h-3.5" />
              <span>3 Resilient Tiers</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {architecturePillars.map((pillar, i) => {
              const Icon = pillar.icon;
              const isPrimary = pillar.accent === 'primary';

              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 35, scale: 0.95 }}
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
                    accentColor={pillar.accent}
                    borderRadius="rounded-2xl"
                    borderWidth="p-[1.5px]"
                    className="h-full"
                    innerClassName="p-6 min-h-[380px] flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      {/* Top Header Row: Left Icon Box + Right Status Pill */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="kpi-icon-box w-11 h-11 rounded-xl flex items-center justify-center border border-black/40 bg-surface-100/90 shadow-sm text-foreground">
                          <Icon className="w-5 h-5 text-primary-dynamic" />
                        </div>
                        <span className="kpi-status-pill text-xs font-semibold px-3 py-1 rounded-full bg-surface-100 border border-border-subtle text-foreground-muted flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-dynamic animate-pulse" />
                          <span>{pillar.status}</span>
                        </span>
                      </div>

                      {/* Subtitle & Title */}
                      <div>
                        <span className="text-[10px] font-mono tracking-widest uppercase text-foreground-subtle">
                          {pillar.subtitle}
                        </span>
                        <h4 className="text-xl font-bold font-sans tracking-tight text-foreground mt-0.5">
                          {pillar.title.split(' ')[0]}{' '}
                          <span className={isPrimary ? 'text-primary-dynamic' : 'text-secondary-dynamic'}>
                            {pillar.title.split(' ').slice(1).join(' ')}
                          </span>
                        </h4>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-foreground-muted leading-relaxed font-sans">
                        {pillar.description}
                      </p>

                      {/* Feature Bullets */}
                      <ul className="space-y-2 pt-3 border-t border-white/5">
                        {pillar.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-foreground-muted">
                            <span
                              className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                                idx % 2 === 0 ? 'bg-primary-dynamic' : 'bg-secondary-dynamic'
                              }`}
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer Status Row */}
                    <div className="pt-4 mt-3 border-t border-white/5 flex items-center justify-between text-xs text-foreground-subtle">
                      <span className="font-mono text-[11px] uppercase tracking-wider">{pillar.footerTag}</span>
                      <span className="flex items-center gap-1 text-primary-dynamic font-semibold text-[11px]">
                        Verified
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
