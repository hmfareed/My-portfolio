'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project, projectsData } from '@/data/projects';
import ProjectCard from './ProjectCard';

interface ProjectGridProps {
  onOpenCaseStudy: (slug: string) => void;
}

export default function ProjectGrid({ onOpenCaseStudy }: ProjectGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'E-Commerce' | 'Systems' | 'Web'>('All');

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  const categories: ('All' | 'E-Commerce' | 'Systems' | 'Web')[] = ['All', 'E-Commerce', 'Systems', 'Web'];

  return (
    <section id="projects" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 relative font-sans">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header & Filters with Spring Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -80px 0px', amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border-subtle"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-foreground-subtle">
              <span className="text-accent-dynamic font-bold">02 //</span>
              <span>Selected Architectures</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-sans text-foreground tracking-tight">
              Production Work & Systems
            </h2>
            <p className="text-sm text-foreground-muted max-w-lg font-sans">
              Real-world products engineered for scale, resilience, and business impact. Click any project to inspect the case study.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-surface-100/80 backdrop-blur-md border border-border-subtle self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-accent-dynamic text-black font-bold shadow-sm'
                    : 'text-foreground-muted hover:text-foreground hover:bg-surface-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Two Side-by-Side Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              return (
                <motion.div
                  key={project.id}
                  initial={{
                    opacity: 0,
                    y: 45,
                    scale: 0.96,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{ once: true, margin: '0px 0px -60px 0px', amount: 0.15 }}
                  transition={{
                    type: 'spring',
                    damping: 16,
                    stiffness: 95,
                    delay: (idx % 2) * 0.12,
                  }}
                  className="h-full"
                >
                  <ProjectCard
                    project={project}
                    onOpenCaseStudy={onOpenCaseStudy}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
