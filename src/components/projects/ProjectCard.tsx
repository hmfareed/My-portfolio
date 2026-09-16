'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Github,
  ShoppingBag,
  Database,
  GraduationCap,
  Package,
  Scissors,
  BookOpen,
  Layers,
} from 'lucide-react';
import { Project } from '@/data/projects';
import GlowKpiCard, { cardColorMap } from '@/components/ui/GlowKpiCard';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (slug: string) => void;
}

function getProjectIcon(slug: string, className: string) {
  switch (slug) {
    case 'northmarket':
      return <ShoppingBag className={className} />;
    case 'africart':
      return <Database className={className} />;
    case 'hanaraschools':
      return <GraduationCap className={className} />;
    case 'kayspacks':
      return <Package className={className} />;
    case 'slaybyhumu':
      return <Scissors className={className} />;
    case 'novelverse':
      return <BookOpen className={className} />;
    default:
      return <Layers className={className} />;
  }
}

export default function ProjectCard({ project, onOpenCaseStudy }: ProjectCardProps) {
  const accent = project.accentColor || 'primary';
  const config = cardColorMap[accent] || cardColorMap.primary;

  return (
    <GlowKpiCard
      accentColor={accent}
      borderRadius="rounded-[32px]"
      borderWidth="p-[1.5px]"
      className="h-full w-full"
      innerClassName="p-7 sm:p-9 min-h-[460px] flex flex-col justify-between"
      onClick={() => onOpenCaseStudy(project.slug)}
      dataCursor="EXPLORE"
    >
      <div className="space-y-6">
        {/* Top Header Row: Left Icon Container + Right Status Pill */}
        <div className="flex items-center justify-between gap-4">
          <div
            className={`kpi-icon-box w-14 h-14 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105 shadow-inner ${config.iconBg}`}
          >
            {getProjectIcon(project.slug, 'w-7 h-7')}
          </div>

          <div
            className={`kpi-status-pill inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md border ${config.pillBg}`}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: config.dotColor }}
            />
            <span>{project.status?.text || 'Live Production'}</span>
          </div>
        </div>

        {/* Title & Uppercase Subtitle with Split Word Colors */}
        <div className="space-y-1.5">
          <h3 className="text-3xl sm:text-4xl font-black font-sans text-foreground tracking-tight group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 flex-wrap">
            <span className="text-primary-dynamic">
              {project.subtitle.split(' ')[0]}
            </span>
            {project.subtitle.split(' ').slice(1, 2).length > 0 && (
              <span className="text-secondary-dynamic">
                {project.subtitle.split(' ')[1]}
              </span>
            )}
            {project.subtitle.split(' ').slice(2).length > 0 && (
              <span className="text-foreground-muted">
                {project.subtitle.split(' ').slice(2).join(' ')}
              </span>
            )}
          </p>
        </div>

        {/* Paragraph Description */}
        <p className="text-sm sm:text-[15px] text-foreground-muted leading-relaxed font-sans">
          {project.description}
        </p>

        {/* Feature Bullet Points List (Reference elAgent card style) */}
        {project.bulletPoints && project.bulletPoints.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-[13px] text-foreground-muted font-sans pt-1">
            {project.bulletPoints.map((bullet, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: config.dotColor }}
                />
                <span className="truncate">{bullet}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Action Footer: Solid Filled Pill Button with Arrow */}
      <div className="pt-6 flex items-center justify-between gap-4 border-t border-white/5">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenCaseStudy(project.slug);
          }}
          data-cursor="EXPLORE"
          className={`kpi-explore-btn inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg ${config.btnBg}`}
        >
          <span>Explore</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-xs font-medium text-foreground-subtle hover:text-foreground transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-surface-100"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Source</span>
          </a>
        )}
      </div>
    </GlowKpiCard>
  );
}
