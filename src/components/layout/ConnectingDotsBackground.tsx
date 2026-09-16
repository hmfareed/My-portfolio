'use client';

import React, { useRef, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  pulseSpeed: number;
  pulsePhase: number;
}

export default function ConnectingDotsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme, themeConfig } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Responsive dot count
    const dotCount = width < 768 ? 35 : width < 1280 ? 65 : 85;
    const maxLinkDistance = width < 768 ? 85 : 115;
    const mouseRadius = 140;

    const dots: Dot[] = [];
    for (let i = 0; i < dotCount; i++) {
      const radius = Math.random() * 1.8 + 1.2;
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius,
        baseRadius: radius,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    let mouseX = -9999;
    let mouseY = -9999;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    // Convert hex to rgb helper
    const hexToRgb = (hex: string) => {
      const cleaned = hex.replace('#', '');
      const r = parseInt(cleaned.substring(0, 2), 16) || 0;
      const g = parseInt(cleaned.substring(2, 4), 16) || 229;
      const b = parseInt(cleaned.substring(4, 6), 16) || 255;
      return `${r}, ${g}, ${b}`;
    };

    const amoledPalette = [
      '0, 229, 255',   // Primary: Cyan
      '167, 139, 250', // Secondary: Violet
    ];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const rgb = hexToRgb(themeConfig.accentColor);
      const secondaryRgb = hexToRgb(themeConfig.secondaryColor);

      // 1. Draw connecting lines between nearby dots
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxLinkDistance) {
            const alpha = (1 - dist / maxLinkDistance) * 0.28;
            const lineColor =
              theme === 'amoled'
                ? amoledPalette[i % amoledPalette.length]
                : theme === 'pencil'
                ? '45, 48, 56'
                : rgb;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${lineColor}, ${theme === 'pencil' ? alpha * 0.6 : alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      // 2. Draw connections to mouse cursor
      if (mouseX > 0 && mouseY > 0) {
        for (let i = 0; i < dots.length; i++) {
          const dx = mouseX - dots[i].x;
          const dy = mouseY - dots[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseRadius) {
            const alpha = (1 - dist / mouseRadius) * 0.4;
            const cursorLineColor =
              theme === 'amoled'
                ? amoledPalette[i % amoledPalette.length]
                : theme === 'pencil'
                ? '60, 64, 74'
                : secondaryRgb;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${cursorLineColor}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();

            // Slight gentle cursor magnetic pull
            const force = (mouseRadius - dist) / mouseRadius;
            dots[i].x += (dx / dist) * force * 0.3;
            dots[i].y += (dy / dist) * force * 0.3;
          }
        }
      }

      // 3. Update & draw each dot
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];

        // Move dot
        d.x += d.vx;
        d.y += d.vy;

        // Wrap or bounce around edges
        if (d.x < 0) d.x = width;
        else if (d.x > width) d.x = 0;

        if (d.y < 0) d.y = height;
        else if (d.y > height) d.y = 0;

        // Subtle pulsing
        d.pulsePhase += d.pulseSpeed;
        const currentRadius = d.baseRadius + Math.sin(d.pulsePhase) * 0.5;
        const currentDotColor = theme === 'amoled' ? amoledPalette[i % amoledPalette.length] : rgb;

        if (theme === 'pixel') {
          // 8-Bit Retro Square Pixels
          const pixelSize = Math.max(2, Math.round(currentRadius * 2));
          ctx.fillStyle = `rgba(${rgb}, 0.8)`;
          ctx.shadowBlur = 0;
          ctx.fillRect(Math.round(d.x - pixelSize / 2), Math.round(d.y - pixelSize / 2), pixelSize, pixelSize);
        } else if (theme === 'pencil') {
          // Graphite pencil grain specks
          ctx.beginPath();
          ctx.arc(d.x, d.y, Math.max(0.6, currentRadius * 0.8), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(45, 48, 56, 0.35)`;
          ctx.shadowBlur = 0;
          ctx.fill();
        } else if (theme === 'lego') {
          // 3D Circular Lego Studs
          ctx.beginPath();
          ctx.arc(d.x, d.y, Math.max(1.5, currentRadius * 1.2), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rgb}, 0.7)`;
          ctx.shadowBlur = 4;
          ctx.shadowColor = `rgba(${rgb}, 0.4)`;
          ctx.fill();
          // Inner stud highlight ring
          ctx.beginPath();
          ctx.arc(d.x - 0.5, d.y - 0.5, Math.max(0.8, currentRadius * 0.6), 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 255, 255, 0.4)`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
          ctx.shadowBlur = 0;
        } else {
          // Standard glowing circles (polychromatic in amoled)
          ctx.beginPath();
          ctx.arc(d.x, d.y, Math.max(0.8, currentRadius), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${currentDotColor}, 0.75)`;
          ctx.shadowBlur = 9;
          ctx.shadowColor = `rgba(${currentDotColor}, 0.6)`;
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme, themeConfig]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block opacity-75" />
    </div>
  );
}
