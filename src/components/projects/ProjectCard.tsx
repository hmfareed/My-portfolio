'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { Project } from '@/data/projects';
import GlowKpiCard from '@/components/ui/GlowKpiCard';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (slug: string) => void;
}

export default function ProjectCard({ project, onOpenCaseStudy }: ProjectCardProps) {
  return (
    <motion.div
      layout
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      onClick={() => onOpenCaseStudy(project.slug)}
      data-cursor="VIEW ↗"
      className="group cursor-pointer rounded-2xl bg-surface-200/75 backdrop-blur-md border border-border-subtle hover:border-accent-dynamic/50 p-5 sm:p-6 flex flex-col justify-between gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl font-sans h-full"
    >
      <div className="space-y-4">
        {/* Card Header */}
        <div className="flex items-center justify-between text-xs font-semibold text-foreground-subtle">
          <div className="flex items-center gap-2">
            <span className="text-accent-dynamic font-bold">#{project.id}</span>
            {project.featured && (
              <span className="px-2 py-0.5 rounded-full bg-accent-muted border border-accent-dynamic/40 text-[10px] font-bold text-accent-dynamic">
                ★ FEATURED
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-surface-100 border border-border-subtle text-[11px] text-foreground-muted font-medium">
              {project.category}
            </span>
            <span className="text-[11px]">{project.year}</span>
          </div>
        </div>

        {/* Thumbnail Preview */}
        <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-surface-300/80 border border-border-subtle">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
        </div>

        {/* Title & Tagline */}
        <div className="space-y-1.5">
          <div className="flex items-start justify-between gap-3">
            <h4 className="text-xl sm:text-2xl font-bold font-sans text-foreground group-hover:text-accent-dynamic transition-colors">
              {project.title}
            </h4>
            <div className="w-7 h-7 rounded-full bg-surface-100 flex items-center justify-center text-foreground-muted group-hover:text-black group-hover:bg-accent-dynamic transition-all shrink-0">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
          <p className="text-xs sm:text-sm text-foreground-muted line-clamp-2 leading-relaxed font-sans">
            {project.tagline}
          </p>
        </div>

        {/* KPI Metric Cards with Glowing Colors Moving Around Them */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            {project.metrics.slice(0, 2).map((metric, i) => (
              <GlowKpiCard
                key={i}
                borderRadius="rounded-xl"
                borderWidth="p-[1.5px]"
                className="w-full"
              >
                <div className="p-3 bg-surface-100/90 rounded-[inherit] space-y-0.5">
                  <div className="text-[10px] uppercase font-bold text-foreground-subtle tracking-wider truncate">
                    {metric.label}
                  </div>
                  <div className="text-xs sm:text-sm font-black font-sans text-accent-dynamic tracking-tight truncate">
                    {metric.value}
                  </div>
                </div>
              </GlowKpiCard>
            ))}
          </div>
        )}
      </div>

      {/* Tech pills footer */}
      <div className="flex items-end justify-between gap-3 border-t border-border-subtle pt-3 text-xs">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 2).map((tech) => (
            <span
              key={tech}
              className="rounded-lg bg-surface-100 px-2 py-0.5 text-[11px] font-medium text-foreground-subtle"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 2 && (
            <span className="px-1.5 py-0.5 text-[11px] font-medium text-foreground-subtle">
              +{project.technologies.length - 2}
            </span>
          )}
        </div>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="inline-flex items-center gap-1 rounded-lg border border-border-subtle bg-surface-100 px-2.5 py-1 text-[11px] font-medium text-foreground-muted transition-colors hover:border-accent-dynamic hover:text-accent-dynamic"
          >
            <Github className="h-3 w-3" />
            <span>Code</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}
