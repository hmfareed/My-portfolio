'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Calendar } from 'lucide-react';
import { experienceData } from '@/data/experience';

const springTransition = {
  type: 'spring',
  damping: 15,
  stiffness: 100,
  mass: 0.8,
};

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
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
            <span className="text-accent-dynamic font-bold">04 //</span>
            <span>Career Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-sans text-foreground tracking-tight">
            Experience & Milestones
          </h2>
          <p className="text-sm text-foreground-muted font-sans max-w-lg">
            A chronological timeline of production engineering roles, software consultancies, and digital ventures.
          </p>
        </motion.div>

        {/* Timeline Items with Horizontal Kinetic Rail Slide */}
        <div className="space-y-4">
          {experienceData.map((item, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -35, scaleX: 0.98 }}
                whileInView={{ opacity: 1, x: 0, scaleX: 1 }}
                viewport={{ once: true, margin: '0px 0px -60px 0px', amount: 0.15 }}
                transition={{ ...springTransition, delay: idx * 0.12 }}
                style={{ transformOrigin: 'left center' }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-md ${
                  isExpanded
                    ? 'bg-surface-200/80 border-accent-dynamic/40 shadow-xl'
                    : 'bg-surface-100/60 border-border-subtle hover:border-border-strong'
                }`}
              >
                {/* Header Row */}
                <button
                  onClick={() => toggleExpand(idx)}
                  className="w-full p-6 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none cursor-pointer"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-foreground-subtle font-medium">
                      <Calendar className="w-3.5 h-3.5 text-accent-dynamic" />
                      <span>{item.period}</span>
                      <span>•</span>
                      <span>{item.type}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold font-sans text-foreground">
                      {item.role}
                    </h3>

                    <div className="text-sm text-foreground-muted flex items-center gap-2 font-medium">
                      <span className="text-foreground">{item.organization}</span>
                      <span>—</span>
                      <span className="flex items-center gap-1 text-foreground-subtle">
                        <MapPin className="w-3 h-3 text-accent-dynamic" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <span className="text-xs text-accent-dynamic hidden sm:inline-block font-medium">
                      {isExpanded ? 'Collapse' : 'Details'}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-surface-100 border border-border-subtle flex items-center justify-center transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 text-accent-dynamic' : 'text-foreground-muted'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Collapsible Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-border-subtle px-6 pb-6 pt-4 space-y-4 font-sans text-xs sm:text-sm text-foreground-muted"
                    >
                      <p className="leading-relaxed">{item.description}</p>

                      <div className="space-y-2">
                        <div className="text-xs uppercase font-semibold text-foreground tracking-wider">
                          Key Deliverables
                        </div>
                        <ul className="space-y-1.5 text-xs">
                          {item.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-accent-dynamic mt-0.5 font-bold">•</span>
                              <span className="leading-relaxed">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 flex flex-wrap gap-1.5 text-xs">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-surface-100 border border-border-subtle text-foreground-subtle font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
