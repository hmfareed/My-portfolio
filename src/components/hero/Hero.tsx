'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Terminal } from 'lucide-react';

const iosSpring = {
  type: 'spring',
  damping: 14,
  stiffness: 110,
  mass: 0.7,
};

export default function Hero() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 600], [0, 45]);
  const glowParallax = useTransform(scrollY, [0, 600], [0, 80]);

  return (
    <section className="relative overflow-hidden px-6 pb-14 pt-28 sm:px-12 sm:pb-18 sm:pt-32 lg:px-20 font-sans">
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
              <span className="hero-availability-pill inline-flex items-center gap-2 rounded-full bg-surface-100/90 px-3.5 py-1.5 text-foreground-muted backdrop-blur-md shadow-lg border border-black/40">
                <span className="h-2 w-2 animate-pulse rounded-full bg-accent-dynamic" />
                Available for selected projects
              </span>
              <span className="hero-role-badge inline-flex items-center gap-1.5 rounded-full bg-surface-100/90 px-3.5 py-1.5 font-semibold shadow-sm border border-white/10 text-xs">
                <Terminal className="h-3.5 w-3.5 text-primary-dynamic" />
                <span className="text-primary-dynamic">FULL</span>
                <span className="text-foreground-muted">-</span>
                <span className="text-secondary-dynamic">STACK</span>
                <span className="text-foreground ml-0.5">DEVELOPER</span>
              </span>
            </motion.div>

            {/* Headline - "MOHAMMED" on line 1, "FAREED" on line 2 with dual-tone syllables */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 55 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ ...iosSpring, delay: 0.15 }}
              className="space-y-1.5"
            >
              <p className="text-xs sm:text-sm font-bold tracking-widest uppercase flex items-center gap-1">
                <span className="text-foreground-muted">HELLO, MY NAME IS</span>
                <span className="text-primary-dynamic">✦</span>
              </p>
              <h1 className="text-[clamp(3.5rem,8vw,6.8rem)] font-black uppercase leading-[0.88] tracking-tight font-sans">
                <span className="block text-foreground">
                  MOHAM<span className="text-primary-dynamic">MED</span>
                </span>
                <span className="block hero-accent-name tracking-normal">
                  <span className="text-primary-dynamic">FAR</span>
                  <span className="text-secondary-dynamic">EED</span>
                </span>
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
                I build <span className="text-primary-dynamic font-black">high-</span><span className="text-secondary-dynamic font-black">performance</span>, visually thoughtful web experiences.
              </p>
              <p className="text-base leading-relaxed text-foreground-muted sm:text-lg font-sans">
                Third-year Computer Science student at UTAS and full-stack developer specializing in the MERN stack. Focused on real-world payment (Paystack) and e-commerce systems engineered for the Ghanaian market.
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
                className="group hero-cta-btn inline-flex items-center gap-2.5 rounded-full bg-accent-dynamic px-7 py-4 text-sm font-bold text-black transition-all hover:-translate-y-1 hover:shadow-[0_0_32px_var(--color-accent-glow)] active:scale-95 shadow-xl"
              >
                <span>Explore my work</span>
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <a
                href="#contact"
                className="hero-secondary-btn inline-flex items-center gap-2 rounded-full bg-surface-100/90 hover:bg-surface-50 px-7 py-4 text-sm font-semibold text-foreground transition-all hover:-translate-y-1 border border-black/60 backdrop-blur-md active:scale-95 shadow-lg"
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
              <div className="hero-avatar-halo absolute w-72 sm:w-80 md:w-96 aspect-square rounded-full bg-accent-dynamic opacity-25 blur-[75px] pointer-events-none" />
              <div className="hero-avatar-halo absolute -right-4 top-10 h-48 w-48 rounded-full bg-blue-500/20 blur-[70px] pointer-events-none" />

              {/* CIRCULAR Picture Container with clean, luminous border */}
              <div className="hero-avatar-frame relative w-72 sm:w-80 md:w-[370px] aspect-square rounded-full p-2 sm:p-2.5 bg-surface-100/40 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/40 ring-1 ring-white/15">
                <div className="hero-avatar-inner relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-transparent">
                  <Image
                    src="/images/Fareed.png"
                    alt="MOHAMMED FAREED"
                    fill
                    priority
                    className="object-cover object-top scale-105 brightness-105 contrast-105"
                  />
                </div>
              </div>

              {/* Location floating pill */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ ...iosSpring, delay: 0.45 }}
                className="hero-location-pill mt-4 whitespace-nowrap rounded-full bg-surface-100/95 px-5 py-2 text-xs font-semibold text-foreground backdrop-blur-xl shadow-2xl font-sans flex items-center gap-2 border border-black/60"
              >
                <span className="h-2 w-2 rounded-full bg-accent-dynamic animate-pulse" />
                <span>Based in Tamale, Ghana</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
