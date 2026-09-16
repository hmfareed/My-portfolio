'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Radio, Server, Layers } from 'lucide-react';
import GlowKpiCard, { cardColorMap } from '@/components/ui/GlowKpiCard';

interface CurrentlyBuildingProps {
  onOpenCaseStudy: (slug: string) => void;
}

export default function CurrentlyBuilding({ onOpenCaseStudy }: CurrentlyBuildingProps) {
  const config = cardColorMap.primary;

  return (
    <section className="px-6 sm:px-12 lg:px-20 py-16 relative font-sans">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '0px 0px -80px 0px', amount: 0.15 }}
          transition={{ type: 'spring', damping: 18, stiffness: 90, mass: 0.9 }}
          className="h-full"
        >
          <GlowKpiCard
            accentColor="primary"
            borderRadius="rounded-3xl"
            borderWidth="p-[1.5px]"
            className="h-full w-full"
            innerClassName="currently-building-card p-8 sm:p-12 min-h-[380px] flex flex-col justify-between"
          >
            <div className="space-y-8 relative z-10">
              {/* Top Header Row: Left Status Pill + Right Location Pill */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-foreground-subtle border-b border-border-subtle pb-4">
                <div className="flex items-center gap-2">
                  <span
                    className={`kpi-status-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md border ${config.pillBg}`}
                  >
                    <Radio className="w-3.5 h-3.5 text-primary-dynamic animate-pulse" />
                    <span className="uppercase tracking-wider">Active Sprint</span>
                    <span>•</span>
                    <span className="font-bold">2026 ROADMAP</span>
                  </span>
                </div>

                <span className="px-3.5 py-1.5 rounded-full bg-surface-100 border border-border-subtle text-[11px] font-medium text-foreground-subtle">
                  TAMALE // ACCRA
                </span>
              </div>

              {/* Content Row */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8 space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs text-primary-dynamic uppercase tracking-widest font-bold">
                      Primary Venture Focus
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-black font-sans text-foreground tracking-tight">
                      <span className="text-primary-dynamic">Kay</span>
                      <span className="text-secondary-dynamic">packs</span>{' '}
                      <span>Water Delivery Platform</span>
                    </h3>
                  </div>

                  <p className="text-sm text-foreground-muted leading-relaxed font-sans max-w-xl">
                    Full-stack production e-commerce platform for clean water logistics with one-click GPS coordinate capture at checkout, Paystack payments, Yango door delivery, and dual AI assistants for customer ordering and admin analytics.
                  </p>

                  {/* Progress bar */}
                  <div className="space-y-2 max-w-md pt-2">
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span className="text-foreground-muted">Milestone: Dual AI & GPS Checkout</span>
                      <span className="text-primary-dynamic font-bold">100% Live in Production</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-surface-100 overflow-hidden border border-border-subtle p-0.5">
                      <motion.div
                        initial={{ width: '0%' }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full bg-primary-dynamic shadow-[0_0_10px_var(--color-primary)]"
                      />
                    </div>
                  </div>
                </div>

                {/* Action column */}
                <div className="md:col-span-4 flex flex-col gap-3 justify-center">
                  <button
                    onClick={() => onOpenCaseStudy('kaypacks')}
                    className="kpi-explore-btn w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-primary-dynamic text-black font-sans text-xs font-bold transition-all active:scale-95 shadow-md hover:scale-[1.02]"
                  >
                    <span>Inspect System Architecture</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <div className="currently-building-stack-box p-4 rounded-2xl bg-[#1A1B20] text-white border-2 border-[#1A1B20] text-xs space-y-1.5 font-sans shadow-md">
                    <div className="text-white font-bold flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-white" />
                      <span className="text-white">Stack in production:</span>
                    </div>
                    <div className="text-white/90 font-medium">Next.js • TypeScript • MongoDB • Paystack • Cloudinary</div>
                  </div>
                </div>
              </div>
            </div>
          </GlowKpiCard>
        </motion.div>
      </div>
    </section>
  );
}
