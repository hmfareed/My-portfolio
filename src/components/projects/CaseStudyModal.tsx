'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, ShieldAlert, Layers } from 'lucide-react';
import Image from 'next/image';
import { Project } from '@/data/projects';
import GlowKpiCard from '@/components/ui/GlowKpiCard';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto font-sans">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-surface-200/95 backdrop-blur-2xl border border-border-strong rounded-3xl shadow-2xl overflow-y-auto z-10 p-6 sm:p-10 flex flex-col gap-8"
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between border-b border-border-subtle pb-6">
            <div className="flex items-center gap-3">
              <span className="text-xs text-accent-dynamic font-bold px-2.5 py-1 bg-surface-100 rounded-lg border border-border-subtle">
                CASE STUDY #{project.id}
              </span>
              <span className="text-xs text-foreground-muted font-medium">
                {project.category} • {project.year}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-surface-100 hover:bg-surface-50 border border-border-subtle text-foreground-muted hover:text-foreground transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title & Tagline */}
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans text-foreground tracking-tight">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-foreground-muted font-sans max-w-2xl leading-relaxed">
              {project.tagline}
            </p>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-lg bg-surface-100 border border-border-subtle text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Visual Showcase Banner */}
          <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden border border-border-strong bg-surface-300">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-200 via-transparent to-transparent opacity-60" />
          </div>

          {/* Key Metrics Grid with Glowing Moving Borders */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.metrics.map((m, idx) => (
              <GlowKpiCard key={idx} borderRadius="rounded-xl" borderWidth="p-[1.5px]" className="h-full">
                <div className="p-4 rounded-[inherit] bg-surface-100/90 space-y-1 text-center h-full flex flex-col justify-center">
                  <div className="text-lg sm:text-xl font-bold text-accent-dynamic">{m.value}</div>
                  <div className="text-[11px] text-foreground-subtle uppercase font-medium">{m.label}</div>
                </div>
              </GlowKpiCard>
            ))}
          </div>

          {/* Problem & Solution Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The Problem */}
            <div className="p-6 rounded-2xl bg-surface-100/80 border border-border-subtle space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                <ShieldAlert className="w-4 h-4 text-rose-400" />
                <span>The Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>

            {/* The Solution */}
            <div className="p-6 rounded-2xl bg-surface-100/80 border border-border-subtle space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent-dynamic" />
                <span>The Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                {project.caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Architecture Pipeline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-foreground">
              <Layers className="w-4 h-4 text-accent-dynamic" />
              <span>System Architecture & Data Flow</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.caseStudy.architecture.map((arch) => (
                <div
                  key={arch.step}
                  className="p-4 rounded-xl bg-surface-100/80 border border-border-subtle space-y-1.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-accent-dynamic">
                      {arch.step}
                    </span>
                    <h4 className="text-xs font-bold text-foreground">{arch.title}</h4>
                  </div>
                  <p className="text-xs text-foreground-muted leading-relaxed">{arch.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & Measured Outcomes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold text-foreground tracking-wider">
                Technical Challenges Solved
              </h4>
              <ul className="space-y-2 text-xs text-foreground-muted">
                {project.caseStudy.challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent-dynamic mt-0.5">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold text-foreground tracking-wider">
                Measurable Engineering Results
              </h4>
              <ul className="space-y-2 text-xs text-foreground-muted">
                {project.caseStudy.outcomes.map((o, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent-dynamic mt-0.5">•</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* End-of-Page Launch & Links Hub */}
          <div className="rounded-2xl p-6 sm:p-8 bg-surface-100/90 border border-border-strong space-y-5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-dynamic opacity-10 blur-[80px] pointer-events-none rounded-full" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-widest text-accent-dynamic">
                  Ready to inspect in production?
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-sans text-foreground">
                  Launch & Explore {project.title}
                </h3>
                {project.liveUrl && (
                  <p className="text-xs text-foreground-muted font-mono">
                    {project.liveUrl}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-accent-dynamic text-black font-black text-xs sm:text-sm tracking-wide transition-all hover:scale-105 active:scale-95 shadow-[0_0_24px_var(--color-accent-glow)]"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-surface-200 hover:bg-surface-50 border border-border-subtle text-foreground text-xs sm:text-sm font-semibold transition-all hover:scale-105 active:scale-95"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs text-foreground-subtle">
              <span>{project.category} • Architecture Completed {project.year}</span>
              <button
                onClick={onClose}
                className="hover:text-foreground font-medium underline underline-offset-4"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
