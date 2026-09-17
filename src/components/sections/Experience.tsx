'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Calendar, Briefcase } from 'lucide-react';
import { experienceData } from '@/data/experience';
import GlowKpiCard, { cardColorMap } from '@/components/ui/GlowKpiCard';

const springTransition = {
  type: 'spring',
  damping: 15,
  stiffness: 100,
  mass: 0.8,
};

export default function Experience() {
  // All experience milestone cards unfolded by default
  const [expandedIndices, setExpandedIndices] = useState<number[]>([0, 1, 2, 3]);

  const toggleExpand = (idx: number) => {
    setExpandedIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section id="experience" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 relative font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '0px 0px -80px 0px', amount: 0.2 }}
          transition={springTransition}
          className="space-y-2 pb-6 border-b border-border-subtle"
        >
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-foreground-subtle">
            <span className="text-primary-dynamic font-bold">04 //</span>
            <span>Career Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-sans text-foreground tracking-tight">
            Experience & Milestones
          </h2>
          <p className="text-sm text-foreground-muted font-sans max-w-lg">
            A chronological timeline of production engineering roles, software consultancies, and digital ventures.
          </p>
        </motion.div>

        {/* Timeline Items with Unified KPI Design */}
        <div className="space-y-6">
          {experienceData.map((item, idx) => {
            const isExpanded = expandedIndices.includes(idx);
            const accent = idx % 2 === 0 ? 'primary' : 'secondary';
            const config = cardColorMap[accent] || cardColorMap.primary;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -35, scaleX: 0.98 }}
                whileInView={{ opacity: 1, x: 0, scaleX: 1 }}
                viewport={{ once: true, margin: '0px 0px -60px 0px', amount: 0.15 }}
                transition={{ ...springTransition, delay: idx * 0.12 }}
                style={{ transformOrigin: 'left center' }}
                className="h-full"
              >
                <GlowKpiCard
                  accentColor={accent}
                  borderRadius="rounded-2xl"
                  borderWidth="p-[1.5px]"
                  className="h-full w-full"
                  innerClassName="p-6 sm:p-8 flex flex-col justify-between"
                  onClick={() => toggleExpand(idx)}
                >
                  <div className="space-y-5">
                    {/* Top Header Row: Left Icon Box + Right Status Pill + Header-style Toggle */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`kpi-icon-box w-12 h-12 rounded-xl flex items-center justify-center border shadow-inner ${config.iconBg}`}
                        >
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-foreground-subtle flex items-center gap-1.5">
                            <Calendar className="w-3 h-3 text-primary-dynamic" />
                            <span>{item.period}</span>
                          </span>
                          <span className="text-xs font-semibold text-foreground-muted">
                            {item.type}
                          </span>
                        </div>
                      </div>

                      {/* Header-Style Pill Toggle Button */}
                      {/* Header-Style Pill Toggle Button: Total Black with Pure White Text */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand(idx);
                        }}
                        className="experience-toggle-btn flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1B20] text-white border-2 border-[#1A1B20] text-xs font-sans font-bold transition-all active:scale-95 shadow-md"
                      >
                        <span
                          className="w-2 h-2 rounded-full animate-pulse bg-white"
                        />
                        <span className="text-white font-bold">{isExpanded ? 'Collapse' : 'Details'}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-300 text-white ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {/* Role Title & Organization */}
                    <div className="space-y-1">
                      <h3 className="text-xl sm:text-2xl font-bold font-sans text-foreground tracking-tight">
                        <span className={accent === 'primary' ? 'text-primary-dynamic' : 'text-secondary-dynamic'}>
                          {item.role.split(' ')[0]}
                        </span>{' '}
                        <span>{item.role.split(' ').slice(1).join(' ')}</span>
                      </h3>

                      <div className="text-xs sm:text-sm text-foreground-muted flex items-center gap-2 font-medium">
                        <span className="text-foreground font-semibold">{item.organization}</span>
                        <span>—</span>
                        <span className="flex items-center gap-1 text-foreground-subtle">
                          <MapPin className="w-3 h-3 text-primary-dynamic" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed font-sans">
                      {item.description}
                    </p>

                    {/* Collapsible Key Deliverables & Tech Stack */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4 pt-3 border-t border-white/5 font-sans text-xs sm:text-sm text-foreground-muted overflow-hidden"
                        >
                          <div className="space-y-2">
                            <div className="text-xs uppercase font-bold text-foreground tracking-wider">
                              Key Production Deliverables
                            </div>
                            <div className="space-y-2 text-xs">
                              {item.highlights.map((h, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <span
                                    className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                                    style={{ backgroundColor: config.dotColor }}
                                  />
                                  <span className="leading-relaxed">{h}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Tech Tags: Total black buttons with pure white text (Image 2) */}
                          <div className="pt-2 flex flex-wrap gap-2 text-xs">
                            {item.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="experience-tech-pill px-3.5 py-1 rounded-full bg-[#1A1B20] text-white border border-[#1A1B20] text-[11px] font-bold shadow-sm"
                              >
                                {tech}
                              </span>
                            ))}
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
