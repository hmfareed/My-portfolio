'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FileText, MapPin } from 'lucide-react';
import GlowKpiCard from '@/components/ui/GlowKpiCard';

interface AboutProps {
  onOpenResume: () => void;
}

export default function About({ onOpenResume }: AboutProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '0px 0px -80px 0px', amount: 0.2 }}
          transition={{ type: 'spring', damping: 18, stiffness: 90 }}
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-foreground-subtle pb-6 border-b border-border-subtle"
        >
          <span className="text-accent-dynamic font-bold">03 //</span>
          <span>Identity & Background</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: 3D Interactive Rectangular Portrait with Attached Role */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, rotate: -4, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '0px 0px -80px 0px', amount: 0.2 }}
            transition={{ type: 'spring', damping: 16, stiffness: 90 }}
            className="lg:col-span-5 flex justify-center"
          >
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border border-black/80 bg-surface-200 shadow-2xl shadow-black/80 ring-1 ring-white/10 group cursor-pointer"
            >
              {/* Image */}
              <Image
                src="/images/Fareed.png"
                alt="Mohammed Fareed"
                fill
                className="object-cover object-top filter grayscale contrast-110 brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

              {/* Attached Software Engineer Role & Metadata Overlay */}
              <div className="absolute inset-x-6 bottom-6 flex flex-col justify-end space-y-2 font-sans text-xs z-10">
                <div className="flex items-center justify-between text-foreground">
                  <span className="font-black tracking-wider text-sm">
                    MOHAM<span className="text-primary-dynamic">MED</span> <span className="text-primary-dynamic">FAR</span><span className="text-secondary-dynamic">EED</span>
                  </span>
                  <span className="text-primary-dynamic font-bold">2026</span>
                </div>
                <div className="flex items-center justify-between text-foreground-subtle text-xs pt-2 border-t border-white/15">
                  <span className="font-semibold tracking-wide uppercase">
                    <span className="text-primary-dynamic">SOFT</span><span className="text-secondary-dynamic">WARE</span> <span className="text-foreground">ENGINEER</span>
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-primary-dynamic" />
                    <span>Tamale, Ghana</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Narrative & Competencies with Unique Horizontal Wipe */}
          <motion.div
            initial={{ opacity: 0, x: 70, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '0px 0px -80px 0px', amount: 0.15 }}
            transition={{ type: 'spring', damping: 18, stiffness: 85, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-3xl sm:text-4xl font-bold font-sans text-foreground leading-tight tracking-tight">
                Crafting <span className="text-primary-dynamic">inter</span><span className="text-secondary-dynamic">faces</span> that feel as good as they work.
              </h3>

              <p className="text-base text-foreground-muted leading-relaxed font-sans">
                I specialize in engineering modern web applications, scalable system architectures, and localized e-commerce solutions. My work sits at the intersection of engineering rigor, clean design, and pragmatic product thinking.
              </p>

              <p className="text-sm text-foreground-muted leading-relaxed font-sans">
                Whether architecting multi-vendor logistics pipelines for Northern Ghana or engineering sub-second Continuous Assessment engines for schools, I build robust software designed to perform under real-world constraints.
              </p>
            </div>

            {/* Quick Metrics Cards with Super AMOLED Dark Glassy Styling */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs pt-4 font-sans">
              <GlowKpiCard accentColor="primary" borderRadius="rounded-2xl" borderWidth="p-[1.5px]" className="h-full">
                <div className="p-4 rounded-[inherit] space-y-1.5 h-full bg-transparent">
                  <div className="flex items-center justify-between text-foreground-subtle">
                    <span className="text-2xl font-black font-sans text-primary-dynamic">6+</span>
                    <span className="w-2 h-2 rounded-full bg-primary-dynamic animate-pulse" />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="text-primary-dynamic">PRODUC</span>
                    <span className="text-secondary-dynamic">TION</span>
                  </div>
                  <div className="text-foreground-muted text-xs">Delivered to Clients</div>
                </div>
              </GlowKpiCard>

              <GlowKpiCard accentColor="secondary" borderRadius="rounded-2xl" borderWidth="p-[1.5px]" className="h-full">
                <div className="p-4 rounded-[inherit] space-y-1.5 h-full bg-transparent">
                  <div className="flex items-center justify-between text-foreground-subtle">
                    <span className="text-2xl font-black font-sans text-secondary-dynamic">100%</span>
                    <span className="w-2 h-2 rounded-full bg-secondary-dynamic animate-pulse" />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="text-secondary-dynamic">TYPE</span>
                    <span className="text-primary-dynamic">SCRIPT</span>
                  </div>
                  <div className="text-foreground-muted text-xs">Zero Any Tolerance</div>
                </div>
              </GlowKpiCard>

              <GlowKpiCard accentColor="primary" borderRadius="rounded-2xl" borderWidth="p-[1.5px]" className="col-span-2 sm:col-span-1 h-full">
                <div className="p-4 rounded-[inherit] space-y-1.5 h-full bg-transparent">
                  <div className="flex items-center justify-between text-foreground-subtle">
                    <span className="text-2xl font-black font-sans text-primary-dynamic">GMT</span>
                    <span className="w-2 h-2 rounded-full bg-primary-dynamic animate-pulse" />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="text-primary-dynamic">GLOBAL</span>
                    <span className="text-secondary-dynamic">REMOTE</span>
                  </div>
                  <div className="text-foreground-muted text-xs">Tamale Base & UTC Sync</div>
                </div>
              </GlowKpiCard>
            </div>

            {/* Action Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenResume}
                data-cursor="VIEW CV"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-surface-100 hover:bg-surface-50 border border-black/60 text-foreground text-xs font-sans font-bold hover:border-accent-dynamic transition-all active:scale-95 shadow-md"
              >
                <FileText className="w-4 h-4 text-accent-dynamic" />
                <span>Inspect Resume & Stack</span>
              </button>

              <a
                href="#contact"
                className="text-xs font-sans font-medium text-foreground-subtle hover:text-accent-dynamic transition-colors underline underline-offset-4"
              >
                Discuss an engineering contract →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
