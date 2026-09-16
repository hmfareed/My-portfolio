'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Database, Smartphone } from 'lucide-react';
import { Project } from '@/data/projects';

interface FeaturedProjectProps {
  project: Project;
  onOpenCaseStudy: (slug: string) => void;
}

const springTransition = {
  type: 'spring',
  damping: 16,
  stiffness: 110,
  mass: 0.8,
};

export default function FeaturedProject({ project, onOpenCaseStudy }: FeaturedProjectProps) {
  return (
    <motion.div
      id="featured"
      initial={{ opacity: 0, scale: 0.88, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px', amount: 0.15 }}
      transition={springTransition}
      className="space-y-6 font-sans"
    >
      <div className="flex items-center justify-between text-xs font-semibold text-foreground-subtle tracking-wide">
        <div className="flex items-center gap-2">
          <span className="text-accent-dynamic font-bold">★ FEATURED SYSTEM</span>
          <span>•</span>
          <span className="text-foreground-muted">FLAGSHIP ARCHITECTURE</span>
        </div>
        <span className="hidden sm:inline-block">TAMALE, GHANA</span>
      </div>

      {/* Main Spotlight Card */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="group relative rounded-3xl bg-surface-200/75 backdrop-blur-xl border border-border-strong hover:border-accent-dynamic/50 transition-all p-6 sm:p-10 overflow-hidden shadow-2xl"
      >
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-dynamic opacity-[0.06] blur-[100px] pointer-events-none rounded-full group-hover:opacity-[0.1] transition-opacity" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left info column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-accent-muted text-accent-dynamic border border-accent-dynamic/30">
                  {project.category}
                </span>
                <span className="text-xs font-medium text-foreground-subtle">{project.year}</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-black font-sans text-foreground tracking-tight">
                {project.title}
              </h3>
              <p className="text-base text-foreground-muted leading-relaxed font-sans pt-1">
                {project.description}
              </p>
            </div>

            {/* Architecture Highlights */}
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center gap-2.5 text-foreground-muted">
                <Zap className="w-4 h-4 text-accent-dynamic shrink-0" />
                <span>Sub-500ms geospatial vendor matching & rider dispatch</span>
              </div>
              <div className="flex items-center gap-2.5 text-foreground-muted">
                <Smartphone className="w-4 h-4 text-accent-dynamic shrink-0" />
                <span>Instant Paystack MTN & Telecel MoMo webhooks</span>
              </div>
              <div className="flex items-center gap-2.5 text-foreground-muted">
                <Database className="w-4 h-4 text-accent-dynamic shrink-0" />
                <span>MongoDB 2dsphere indexing with atomic lock engine</span>
              </div>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-lg bg-surface-100/90 border border-border-subtle text-foreground-muted backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={() => onOpenCaseStudy(project.slug)}
                data-cursor="VIEW ↗"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-dynamic text-black font-semibold text-xs tracking-wide hover:shadow-[0_0_20px_var(--color-accent-glow)] transition-all active:scale-95 shadow-md"
              >
                <span>Read Full Case Study</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div
              onClick={() => onOpenCaseStudy(project.slug)}
              data-cursor="EXPLORE"
              className="cursor-pointer relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-border-strong bg-surface-300/80 group-hover:scale-[1.01] transition-transform duration-500 shadow-xl"
            >
              {project.slug === 'northmarket' ? (
                <div className="absolute inset-0 overflow-hidden bg-surface-300/90 p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs font-semibold text-accent-dynamic">
                    <span>NORTHMARKET DISPATCH NETWORK</span>
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-accent-dynamic animate-ping" />LIVE MAP</span>
                  </div>
                  <div className="relative mx-auto h-36 w-64 my-auto flex items-center justify-center">
                    <div className="absolute w-44 h-44 rounded-full border border-accent-dynamic/20 animate-pulse" />
                    <div className="absolute w-28 h-28 rounded-full border border-accent-dynamic/40" />
                    <span className="relative z-10 px-3 py-1.5 rounded-full bg-surface-100 border border-accent-dynamic text-xs font-bold text-foreground shadow-lg">
                      Tamale Hub Node
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="rounded-xl border border-border-subtle bg-surface-100/70 p-2.5 text-foreground-muted">
                      VENDORS<br /><b className="text-foreground">LOCAL FIRST</b>
                    </div>
                    <div className="rounded-xl border border-accent-dynamic/30 bg-accent-muted p-2.5 text-foreground-muted">
                      BETA ENGINE<br /><b className="text-accent-dynamic">80% ONLINE</b>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-200/90 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
                </>
              )}

              {/* Status Badge in Corner */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-surface-100/90 backdrop-blur-md border border-border-subtle text-xs font-medium">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-dynamic animate-pulse" />
                  <span className="text-foreground font-bold">NorthMarket Platform</span>
                </div>
                <span className="text-accent-dynamic font-semibold">Active Development</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
