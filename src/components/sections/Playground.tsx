'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Move, Zap } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseX: number;
  baseY: number;
  color: string;
}

export default function Playground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = 360);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 360;
    };
    window.addEventListener('resize', handleResize);

    const particles: Particle[] = [];
    const count = 75;

    for (let i = 0; i < count; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 2.5 + 1.5,
        baseX: x,
        baseY: y,
        color: i % 4 === 0 ? 'var(--color-accent)' : 'rgba(255, 255, 255, 0.4)',
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect near particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.15 * (1 - dist / 90)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update & draw particles
      particles.forEach((p) => {
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 120;

        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist;
          const angle = Math.atan2(dy, dx);
          p.x -= Math.cos(angle) * force * 5;
          p.y -= Math.sin(angle) * force * 5;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="playground" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 relative font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header with Horizontal Slide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -80px 0px', amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-border-subtle"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-foreground-subtle">
              <span className="text-accent-dynamic font-bold">06 //</span>
              <span>Creative Lab & Experiments</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-sans text-foreground tracking-tight">
              Interactive Physics Lab
            </h2>
            <p className="text-sm text-foreground-muted font-sans max-w-lg">
              Beyond shipping scalable commercial systems, I experiment with interactive browser math, shaders, and reactive particle dynamics.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-foreground-subtle font-medium">
            <Move className="w-4 h-4 text-accent-dynamic animate-pulse" />
            <span>Move cursor inside the canvas</span>
          </div>
        </motion.div>

        {/* Unique Terminal Console Vertical Expansion Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -80px 0px', amount: 0.15 }}
          transition={{ type: 'spring', damping: 16, stiffness: 95 }}
          className="relative w-full rounded-3xl bg-surface-200/80 backdrop-blur-xl border border-border-strong overflow-hidden p-6 sm:p-8 space-y-4 shadow-2xl"
        >
          <div className="flex items-center justify-between text-xs text-foreground-subtle border-b border-border-subtle pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-dynamic" />
              <span className="text-foreground font-semibold">interactive_particles.canvas</span>
            </div>
            <span>60 FPS Active Render</span>
          </div>

          <div className="relative w-full h-[360px] rounded-2xl bg-surface-300/80 border border-border-subtle overflow-hidden">
            <canvas ref={canvasRef} className="w-full h-full block" />
            <div className="absolute top-4 left-4 pointer-events-none text-xs text-foreground-subtle bg-surface-200/90 px-3 py-1 rounded-lg border border-border-subtle backdrop-blur-sm">
              Gravity: Dynamic • Repulsion Field: 120px
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs text-foreground-muted">
            <div className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-accent-dynamic" />
              <span>HTML5 2D Canvas Context • Pure Procedural Math</span>
            </div>
            <div className="text-foreground-subtle">
              Zero External Physics Libraries
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
