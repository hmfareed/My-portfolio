'use client';

import React, { useRef, useEffect } from 'react';

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

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle graphite connecting lines between nearby specks
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxLinkDistance) {
            const alpha = (1 - dist / maxLinkDistance) * 0.28 * 0.6;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(45, 48, 56, ${alpha})`;
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
            ctx.beginPath();
            ctx.strokeStyle = `rgba(60, 64, 74, ${alpha})`;
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

      // 3. Update & draw each graphite speck
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

        // Graphite pencil grain specks
        ctx.beginPath();
        ctx.arc(d.x, d.y, Math.max(0.6, currentRadius * 0.8), 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(45, 48, 56, 0.35)';
        ctx.shadowBlur = 0;
        ctx.fill();
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
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block opacity-75" />
    </div>
  );
}
