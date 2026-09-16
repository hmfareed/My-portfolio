'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Code2, Globe } from 'lucide-react';
import { formatTimeGMT } from '@/lib/utils';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    setTime(formatTimeGMT());
    const interval = setInterval(() => {
      setTime(formatTimeGMT());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border-subtle bg-surface-300/60 backdrop-blur-xl relative overflow-hidden pt-16 pb-12 px-6 sm:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top bar with back to top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-border-subtle">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold font-sans text-foreground tracking-tight">
              MOHAMMED FAREED
            </h3>
            <p className="text-sm text-foreground-muted mt-1 font-sans">
              Engineering high-impact interfaces & real-world digital systems.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-100 hover:bg-surface-50 border border-border-subtle text-xs font-sans font-medium text-foreground hover:text-accent-dynamic transition-colors group shadow-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Middle Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs font-sans">
          {/* Status & Location */}
          <div className="space-y-3">
            <div className="text-foreground-subtle uppercase text-[11px] font-semibold tracking-wider">
              Location & Time
            </div>
            <div className="flex items-center gap-2 text-foreground font-medium">
              <Globe className="w-4 h-4 text-accent-dynamic" />
              <span>Tamale, Ghana (GMT)</span>
            </div>
            <div className="text-accent-dynamic font-bold">
              {time ? `${time} UTC` : 'Live GMT'}
            </div>
            <div className="flex items-center gap-2 text-foreground-muted">
              <span className="w-2 h-2 rounded-full bg-accent-dynamic animate-pulse" />
              <span>Available for select projects</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <div className="text-foreground-subtle uppercase text-[11px] font-semibold tracking-wider">
              Index
            </div>
            <ul className="space-y-2 text-foreground-muted">
              <li>
                <a href="#projects" className="hover:text-accent-dynamic transition-colors">
                  01 // Projects & Systems
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent-dynamic transition-colors">
                  02 // About & Philosophy
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-accent-dynamic transition-colors">
                  03 // Career Timeline
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-accent-dynamic transition-colors">
                  04 // Tech Stack
                </a>
              </li>
              <li>
                <a href="#playground" className="hover:text-accent-dynamic transition-colors">
                  05 // Interactive Lab
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-3">
            <div className="text-foreground-subtle uppercase text-[11px] font-semibold tracking-wider">
              Connect
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/hmfareed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-accent-dynamic" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/mohammed-fareed-haruna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-accent-dynamic" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:mohammedfareed.dev@gmail.com"
                  className="flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-accent-dynamic" />
                  <span>mohammedfareed.dev@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* The Differentiator: Open Source */}
          <div className="footer-built-in-public space-y-3 bg-[#1A1B20] text-white p-5 rounded-2xl border-2 border-[#1A1B20] shadow-md">
            <div className="flex items-center gap-2 text-white font-bold">
              <Code2 className="w-4 h-4 text-white" />
              <span className="text-white">Built in Public</span>
            </div>
            <p className="text-xs text-white/90 leading-relaxed font-sans">
              This portfolio codebase is modular, accessible, and open source. Designed with Next.js App Router, Tailwind CSS, and Framer Motion.
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 text-[11px] text-white font-bold bg-white/15 border border-white/20 px-2.5 py-1 rounded-full">
                Next.js 14 • TS • Tailwind
              </span>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-foreground-subtle">
          <div>
            © {new Date().getFullYear()} Mohammed Fareed. All rights reserved.
          </div>
          <div className="flex items-center gap-4 font-medium">
            <span>Designed for high-impact performance</span>
            <span>•</span>
            <span className="text-foreground-muted">60 FPS Particle Canvas</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
