'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Code2, Database, Gauge, Layers3, Terminal } from 'lucide-react';
import GlowKpiCard from '@/components/ui/GlowKpiCard';

const kpis = [
  { label: 'Build status', value: '80%', code: 'northmarket.progress = 0.80', detail: 'NorthMarket is actively being shaped into a focused local-commerce platform.', icon: Layers3 },
  { label: 'Core stack', value: 'MERN', code: 'stack = ["Next", "Node", "Mongo"]', detail: 'Comfortable taking a product from interface and API design to deployment.', icon: Code2 },
  { label: 'Commerce', value: 'MoMo', code: 'payments.connect("Paystack")', detail: 'Built for Ghanaian checkout flows and practical payment integrations.', icon: Database },
  { label: 'Performance', value: 'Fast', code: 'target.lcp < 2.2s', detail: 'Thoughtful loading states and responsive, accessible interfaces come first.', icon: Gauge },
];

const iosSpring = {
  type: 'spring',
  damping: 14,
  stiffness: 110,
  mass: 0.7,
};

const kpiContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const kpiCardVariants = {
  hidden: { opacity: 0, scale: 0.78, y: 45 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 14,
      stiffness: 110,
      mass: 0.7,
    },
  },
};

const lineVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  const [activeKpi, setActiveKpi] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 600], [0, 45]);
  const glowParallax = useTransform(scrollY, [0, 600], [0, 80]);

  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-28 sm:px-12 sm:pb-20 sm:pt-32 lg:px-20 font-sans">
      {/* Radiant ambient glow with scroll parallax */}
      <motion.div
        style={{ y: glowParallax }}
        className="absolute left-1/2 top-20 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent-dynamic opacity-[0.08] blur-[160px] pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_.9fr] md:gap-8">
          {/* Left Column - iOS Spring Pop In */}
          <div className="space-y-6 sm:space-y-7">
            {/* Availability & Role Pills */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75, y: 35 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ ...iosSpring, delay: 0.05 }}
              className="flex flex-wrap gap-2.5 text-xs font-sans"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-surface-100/90 px-3.5 py-1.5 text-foreground-muted backdrop-blur-md shadow-lg border border-black/40">
                <span className="h-2 w-2 animate-pulse rounded-full bg-accent-dynamic" />
                Available for selected projects
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-muted px-3.5 py-1.5 text-accent-dynamic font-semibold shadow-sm border border-black/30">
                <Terminal className="h-3.5 w-3.5" />
                Full-Stack Developer
              </span>
            </motion.div>

            {/* Headline - "MOHAMMED" on line 1, "FAREED" on line 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 55 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ ...iosSpring, delay: 0.15 }}
              className="space-y-1.5"
            >
              <p className="text-xs sm:text-sm font-bold tracking-widest text-accent-dynamic uppercase">
                Hello, my name is
              </p>
              <h1 className="text-[clamp(3.5rem,8vw,6.8rem)] font-black uppercase leading-[0.88] tracking-tight font-sans">
                <span className="block text-foreground">MOHAMMED</span>
                <span className="block text-accent-dynamic">FAREED</span>
              </h1>
            </motion.div>

            {/* Intro Subtitle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ ...iosSpring, delay: 0.25 }}
              className="max-w-xl space-y-3"
            >
              <p className="text-lg font-bold leading-relaxed text-foreground sm:text-xl font-sans">
                I build high-performance, visually thoughtful web experiences.
              </p>
              <p className="text-base leading-relaxed text-foreground-muted sm:text-lg font-sans">
                A Computer Science student and full-stack developer focused on clean interfaces, practical architecture, and commerce systems engineered for real-world impact.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ ...iosSpring, delay: 0.35 }}
              className="flex flex-wrap gap-3 pt-1"
            >
              <a
                href="#projects"
                data-cursor="EXPLORE"
                className="group inline-flex items-center gap-2.5 rounded-full bg-accent-dynamic px-7 py-4 text-sm font-bold text-black transition-all hover:-translate-y-1 hover:shadow-[0_0_32px_var(--color-accent-glow)] active:scale-95 shadow-xl"
              >
                <span>Explore my work</span>
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-surface-100/90 hover:bg-surface-50 px-7 py-4 text-sm font-semibold text-foreground transition-all hover:-translate-y-1 border border-black/60 backdrop-blur-md active:scale-95 shadow-lg"
              >
                <span>Let&apos;s connect</span>
                <ArrowUpRight className="h-4 w-4 text-accent-dynamic" />
              </a>
            </motion.div>
          </div>

          {/* Right Column - CIRCULAR Picture with subtle, blended black border & scroll parallax */}
          <motion.div
            style={{ y: yParallax }}
            className="relative mx-auto w-full flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 60 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ ...iosSpring, delay: 0.2 }}
              className="relative w-full flex flex-col items-center justify-center"
            >
              {/* Soft Ambient Radial Halo behind the circular picture */}
              <div className="absolute w-72 sm:w-80 md:w-96 aspect-square rounded-full bg-accent-dynamic opacity-25 blur-[75px] pointer-events-none" />
              <div className="absolute -right-4 top-10 h-48 w-48 rounded-full bg-blue-500/20 blur-[70px] pointer-events-none" />

              {/* CIRCULAR Picture Container with thin, blended black border */}
              <div className="relative w-72 sm:w-80 md:w-[370px] aspect-square rounded-full p-2 sm:p-2.5 bg-surface-200/50 backdrop-blur-xl border border-black/80 shadow-2xl shadow-black/90 ring-1 ring-white/10">
                <div className="relative h-full w-full overflow-hidden rounded-full border border-black/50 bg-surface-300/80">
                  <Image
                    src="/images/Fareed.png"
                    alt="MOHAMMED FAREED"
                    fill
                    priority
                    className="object-cover object-top scale-105"
                  />
                </div>
              </div>

              {/* Location floating pill */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ ...iosSpring, delay: 0.45 }}
                className="mt-4 whitespace-nowrap rounded-full bg-surface-100/95 px-5 py-2 text-xs font-semibold text-foreground backdrop-blur-xl shadow-2xl font-sans flex items-center gap-2 border border-black/60"
              >
                <span className="h-2 w-2 rounded-full bg-accent-dynamic animate-pulse" />
                <span>Based in Tamale, Ghana</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* KPI Strip with Sequential Reveal & Connected Laser Line on Scroll */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.2 }}
          variants={kpiContainerVariants}
          className="relative mt-20 pt-8 sm:mt-24"
        >
          <div className="absolute left-[7%] right-[7%] top-0 hidden h-px bg-gradient-to-r from-transparent via-accent-dynamic/40 to-transparent md:block" />

          {/* Animated horizontal connecting laser line bridging all 4 cards in-line */}
          <div className="absolute top-[48%] -translate-y-1/2 left-[5%] right-[5%] h-[2.5px] hidden lg:block pointer-events-none z-0">
            <motion.div
              variants={lineVariants}
              className="h-full w-full origin-left bg-gradient-to-r from-[#00E5FF] via-[#A78BFA] via-[#F43F5E] via-[#F5B942] to-[#10B981] shadow-[0_0_12px_rgba(0,229,255,0.8)]"
            />
            {/* Connection junction nodes between cards */}
            <div className="absolute top-1/2 -translate-y-1/2 left-[25%] -translate-x-1/2 z-10 flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping absolute opacity-75" />
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#00E5FF]" />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 left-[50%] -translate-x-1/2 z-10 flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400 animate-ping absolute opacity-75" />
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#F43F5E]" />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 left-[75%] -translate-x-1/2 z-10 flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping absolute opacity-75" />
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#F5B942]" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
            {kpis.map((kpi, index) => {
              const Icon = kpi.icon;
              const isActive = activeKpi === index;

              return (
                <motion.div
                  key={kpi.label}
                  variants={kpiCardVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="h-full"
                >
                  <GlowKpiCard
                    active={isActive}
                    onClick={() => setActiveKpi(isActive ? null : index)}
                    borderRadius="rounded-2xl"
                    borderWidth="p-[1.5px]"
                    className="h-full"
                    innerClassName="p-5 min-h-[148px] flex flex-col justify-between"
                    dataCursor="INSPECT"
                  >
                    <div>
                      <div className="mb-4 flex items-start justify-between">
                        <Icon className="h-4 w-4 text-accent-dynamic" />
                        <span className="text-[11px] font-bold uppercase tracking-widest text-foreground-subtle">
                          0{index + 1}
                        </span>
                      </div>
                      <div className="text-xs font-medium text-foreground-subtle">{kpi.label}</div>
                      <div className="mt-1 text-2xl font-black tracking-tight text-foreground font-sans">
                        {kpi.value}
                      </div>
                    </div>
                    <AnimatePresence mode="wait">
                      {isActive ? (
                        <motion.p
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          className="mt-3 text-xs leading-relaxed text-accent-dynamic font-medium"
                        >
                          {kpi.code}
                          <br />
                          <span className="text-foreground-muted">{kpi.detail}</span>
                        </motion.p>
                      ) : (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="mt-3 text-xs text-foreground-muted group-hover:text-accent-dynamic transition-colors font-medium"
                        >
                          Click to inspect ↗
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </GlowKpiCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
