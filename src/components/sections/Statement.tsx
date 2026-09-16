'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Sparkles, Terminal } from 'lucide-react';

export default function Statement() {
  const cards = [
    {
      icon: Cpu,
      title: 'Architecture First',
      desc: 'Every application begins with data modeling, failure modes, and database query planning before writing UI components.',
    },
    {
      icon: Sparkles,
      title: 'Obsession with Details',
      desc: 'Micro-interactions, accessible keyboard navigation, 60fps frame rates, and sub-second feedback loops define quality.',
    },
    {
      icon: Terminal,
      title: 'African Market Grounding',
      desc: 'Built specifically with real-world infrastructure constraints in mind: variable connectivity, Mobile Money, and mobile-first users.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 relative overflow-hidden font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -80px 0px', amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-foreground-subtle"
        >
          <span className="text-accent-dynamic font-bold">01 //</span>
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

          {/* Unique 3D Perspective Card Flip Animation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 [perspective:1200px]">
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, rotateX: 38, y: 60 }}
                  whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                  viewport={{ once: true, margin: '0px 0px -60px 0px', amount: 0.15 }}
                  transition={{
                    type: 'spring',
                    damping: 14,
                    stiffness: 90,
                    delay: i * 0.12,
                  }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="p-6 rounded-2xl bg-surface-200/75 backdrop-blur-md border border-border-subtle space-y-3 hover:border-accent-dynamic/40 transition-colors shadow-xl"
                >
                  <div className="w-10 h-10 rounded-xl bg-surface-100 flex items-center justify-center text-accent-dynamic">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-sans text-foreground">
                    {card.title}
                  </h3>
                  <p className="text-xs text-foreground-muted leading-relaxed font-sans">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
