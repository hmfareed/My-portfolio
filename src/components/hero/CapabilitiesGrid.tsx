'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers3, Database, Code2, Gauge, ChevronRight, Terminal } from 'lucide-react';
import GlowKpiCard from '@/components/ui/GlowKpiCard';

interface CapabilityCard {
  id: string;
  title: string;
  category: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: 'primary' | 'secondary';
  description: string;
  highlights: string[];
  code: string;
  technicalDetail: string;
  metric: { label: string; value: string };
  direction: 'left' | 'right';
  delay: number;
}

const capabilities: CapabilityCard[] = [
  {
    id: '01',
    title: 'Full-Stack Development',
    category: 'WATER DELIVERY & PRODUCTION PWA',
    badge: 'Live in Production',
    icon: Layers3,
    accent: 'primary',
    description:
      'Production-grade e-commerce applications built with Next.js, MongoDB, and Node.js. Features 1-click GPS coordinate capture at checkout, dual customer & admin AI assistants, and automated Yango door delivery.',
    highlights: [
      'Next.js 14 + MongoDB + Node.js',
      'Paystack MoMo & Card Payments',
      '1-Click GPS Coordinate Capture',
      'Direct WhatsApp Ordering Pipeline',
    ],
    code: 'kaypacks.status = "production"',
    technicalDetail:
      'Full production lifecycle: architectural specs, Stitch/Banani UI prototyping, database indexing, and Vercel cloud deployment with 99.9% uptime.',
    metric: { label: 'Flagship Platform', value: 'Kaypacks PWA' },
    direction: 'left',
    delay: 0.05,
  },
  {
    id: '02',
    title: 'Mobile Money Integrations',
    category: 'PAYMENTS & LOGISTICS ENGINE',
    badge: 'Paystack Live',
    icon: Database,
    accent: 'secondary',
    description:
      'Engineered specifically for the Ghanaian commerce ecosystem. Resilient webhook listeners for MTN Mobile Money & Telecel Cash, subaccount split payouts directly to MoMo wallets, and automated digital receipts.',
    highlights: [
      'MTN Mobile Money & Telecel Cash',
      'Instant Webhook Signature Validation',
      'Automated PDF Receipts & Invoicing',
      'Subaccount MoMo Split Payouts',
    ],
    code: 'payments.connect("Paystack_MoMo")',
    technicalDetail:
      'Handles transient telecommunication network failures with exponential backoff retries, idempotent webhook processing, and cryptographic verification.',
    metric: { label: 'Payment Rail', value: 'Paystack MoMo' },
    direction: 'right',
    delay: 0.18,
  },
  {
    id: '03',
    title: 'Core Architecture',
    category: 'MERN & SYSTEMS ENGINEERING',
    badge: '36+ Data Schemas',
    icon: Code2,
    accent: 'secondary',
    description:
      'Robust backend systems engineered for scale. Designed 36+ Mongoose models, 2dsphere geospatial indexes for driver tracking, polymorphic RBAC across 6 access tiers, and Ghana Data Protection Act compliance.',
    highlights: [
      'Next.js + Node & Express REST APIs',
      'MongoDB 2dsphere Geospatial Indexing',
      '6-Role Polymorphic RBAC Hierarchy',
      'Ghana Data Protection Act (Act 843)',
    ],
    code: 'stack = ["Next.js", "Node", "MongoDB", "Express"]',
    technicalDetail:
      'Strict TypeScript contracts, Zod runtime schema validation, JWT auth with refresh rotation, and Socket.io bidirectional event streaming.',
    metric: { label: 'Data Architecture', value: '36+ Models' },
    direction: 'left',
    delay: 0.28,
  },
  {
    id: '04',
    title: 'Performance Optimization',
    category: 'RUNTIME EFFICIENCY & UX',
    badge: 'Target LCP < 2.2s',
    icon: Gauge,
    accent: 'primary',
    description:
      'Sub-second initial loads, optimized JavaScript bundles, and 60 FPS transitions. Engineered with accessible WCAG AA keyboard flows, tactile physical button feedback, and resilient offline states.',
    highlights: [
      'Optimized JavaScript & CSS Bundles',
      '60 FPS Hardware-Accelerated Polish',
      'WCAG AA Accessible Navigation',
      'Sub-Second Server-Side Rendering',
    ],
    code: 'target.lcp < 2.2s && fps >= 60',
    technicalDetail:
      'Dynamic route code-splitting, tree-shaken dependencies, font preloading, and smooth Lenis inertial physics tuned for high-refresh desktop and mobile displays.',
    metric: { label: 'Benchmark Speed', value: 'LCP < 2.2s' },
    direction: 'right',
    delay: 0.4,
  },
];

export default function CapabilitiesGrid() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  return (
    <section
      id="capabilities"
      className="py-16 sm:py-24 px-6 sm:px-12 lg:px-20 relative overflow-hidden font-sans"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -60px 0px', amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-foreground-subtle">
            <span className="text-primary-dynamic font-bold">CAPABILITIES //</span>
            <span>
              <span className="text-primary-dynamic">CORE</span> &{' '}
              <span className="text-secondary-dynamic">ENGINEERING</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-sans text-foreground tracking-tight">
            Engineering Foundations & Systems
          </h2>
          <p className="text-sm sm:text-base text-foreground-muted max-w-2xl font-sans leading-relaxed">
            Full-stack MERN architectures, resilient payment integrations, and performance-first interfaces built for scale and real-world impact.
          </p>
        </motion.div>

        {/* 2 Side-by-Side KPI Cards Grid with Alternating Left-Right-Left-Right Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            const isActive = activeCardId === cap.id;
            const isLeft = cap.direction === 'left';

            return (
              <motion.div
                key={cap.id}
                initial={{
                  opacity: 0,
                  x: isLeft ? -70 : 70,
                  y: 20,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true, margin: '0px 0px -80px 0px', amount: 0.15 }}
                transition={{
                  type: 'spring',
                  damping: 18,
                  stiffness: 90,
                  delay: cap.delay,
                }}
                whileHover={{ y: -6, scale: 1.015 }}
                className="h-full"
              >
                <GlowKpiCard
                  accentColor={cap.accent}
                  active={isActive}
                  borderRadius="rounded-[32px]"
                  borderWidth="p-[1.5px]"
                  className="h-full w-full"
                  innerClassName="p-7 sm:p-9 min-h-[420px] flex flex-col justify-between"
                  onClick={() => setActiveCardId(isActive ? null : cap.id)}
                  dataCursor="INSPECT"
                >
                  <div className="space-y-6">
                    {/* Top Header Row: Left Icon Container + Right Status Badge */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="w-13 h-13 rounded-2xl flex items-center justify-center p-3 bg-surface-100 border border-border-subtle shadow-inner">
                        <Icon
                          className={`w-6 h-6 ${
                            cap.accent === 'primary'
                              ? 'text-primary-dynamic'
                              : 'text-secondary-dynamic'
                          }`}
                        />
                      </div>

                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md border bg-surface-100 border-border-subtle">
                        <span
                          className={`w-2 h-2 rounded-full animate-pulse ${
                            cap.accent === 'primary'
                              ? 'bg-primary-dynamic'
                              : 'bg-secondary-dynamic'
                          }`}
                        />
                        <span className="text-foreground-subtle text-[11px] font-bold tracking-wide">
                          {cap.badge}
                        </span>
                      </div>
                    </div>

                    {/* Title & Uppercase Category Subtitle */}
                    <div className="space-y-1.5">
                      <h3 className="text-2xl sm:text-3xl font-black font-sans text-foreground tracking-tight">
                        {cap.title}
                      </h3>
                      <p
                        className={`text-xs font-bold uppercase tracking-widest ${
                          cap.accent === 'primary'
                            ? 'text-primary-dynamic'
                            : 'text-secondary-dynamic'
                        }`}
                      >
                        {cap.category}
                      </p>
                    </div>

                    {/* Paragraph Description */}
                    <p className="text-sm text-foreground-muted leading-relaxed font-sans">
                      {cap.description}
                    </p>

                    {/* Feature Highlights List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-foreground-muted font-sans pt-1">
                      {cap.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span
                            className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                              cap.accent === 'primary'
                                ? 'bg-primary-dynamic'
                                : 'bg-secondary-dynamic'
                            }`}
                          />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Footer & Interactive Code/Spec Drawer */}
                  <div className="pt-6 border-t border-border-subtle space-y-3">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs font-mono text-foreground-subtle">
                        <Terminal className="w-3.5 h-3.5 text-primary-dynamic shrink-0" />
                        <span className="truncate">{cap.code}</span>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveCardId(isActive ? null : cap.id);
                        }}
                        className="inline-flex items-center gap-1 text-xs font-bold text-foreground hover:text-primary-dynamic transition-colors"
                      >
                        <span>{isActive ? 'Hide Spec' : 'Inspect'}</span>
                        <ChevronRight
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${
                            isActive ? 'rotate-90' : 'group-hover:translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden pt-2"
                        >
                          <div className="p-4 rounded-2xl bg-surface-100/90 border border-border-subtle text-xs text-foreground-muted leading-relaxed font-sans space-y-2">
                            <div className="text-[10px] uppercase font-bold tracking-widest text-primary-dynamic">
                              Deep Dive // Architecture Note
                            </div>
                            <p>{cap.technicalDetail}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </GlowKpiCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
