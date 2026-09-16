'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Radio } from 'lucide-react';

interface CurrentlyBuildingProps {
  onOpenCaseStudy: (slug: string) => void;
}

const springTransition = {
  type: 'spring',
  damping: 15,
  stiffness: 100,
  mass: 0.8,
};

export default function CurrentlyBuilding({ onOpenCaseStudy }: CurrentlyBuildingProps) {
  return (
    <section className="px-6 sm:px-12 lg:px-20 py-16 relative font-sans">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '0px 0px -80px 0px', amount: 0.15 }}
          transition={{ type: 'spring', damping: 18, stiffness: 90, mass: 0.9 }}
          className="rounded-3xl bg-surface-200/75 backdrop-blur-xl border border-border-strong p-8 sm:p-12 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle glow circle */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent-dynamic opacity-[0.06] blur-[80px] pointer-events-none rounded-full" />

          <div className="space-y-8 relative z-10">
            {/* Tag line */}
            <div className="flex items-center justify-between text-xs font-semibold text-foreground-subtle border-b border-border-subtle pb-4">
              <div className="flex items-center gap-2">
                <Radio className="w-3.5 h-3.5 text-accent-dynamic animate-pulse" />
                <span className="text-foreground uppercase tracking-wider">
                  Active Sprint
                </span>
                <span>•</span>
                <span className="text-accent-dynamic font-bold">2026 ROADMAP</span>
              </div>
              <span>TAMALE // ACCRA</span>
            </div>

            {/* Content Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4">
                <div className="space-y-1">
                  <span className="text-xs text-accent-dynamic uppercase tracking-widest font-bold">
                    Primary Venture Focus
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-black font-sans text-foreground tracking-tight">
                    NorthMarket Commerce Engine
                  </h3>
                </div>

                <p className="text-sm text-foreground-muted leading-relaxed font-sans max-w-xl">
                  Transforming regional commerce across Northern Ghana. Solving slow multi-day delivery times with localized vendor clustering, real-time rider tracking, and instant Mobile Money transactions.
                </p>

                {/* Progress bar */}
                <div className="space-y-2 max-w-md pt-2">
                  <div className="flex items-center justify-between text-xs font-medium">
                    <span className="text-foreground-muted">Milestone: Core Beta Engine</span>
                    <span className="text-accent-dynamic font-bold">80% Complete</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-surface-100 overflow-hidden border border-border-subtle p-0.5">
                    <motion.div
                      initial={{ width: '0%' }}
                      whileInView={{ width: '80%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-full bg-accent-dynamic shadow-[0_0_10px_var(--color-accent)]"
                    />
                  </div>
                </div>
              </div>

              {/* Action column */}
              <div className="md:col-span-4 flex flex-col gap-3 justify-center">
                <button
                  onClick={() => onOpenCaseStudy('northmarket')}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-accent-dynamic text-black font-sans text-xs font-bold hover:shadow-[0_0_20px_var(--color-accent-glow)] transition-all active:scale-95 shadow-md"
                >
                  <span>Inspect System Architecture</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <div className="p-4 rounded-xl bg-surface-100/80 border border-border-subtle text-xs text-foreground-subtle space-y-1 font-sans">
                  <div className="text-foreground font-semibold">Stack in flight:</div>
                  <div>Next.js 14 • MongoDB Geospatial • Paystack MoMo Webhooks • Redis</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
