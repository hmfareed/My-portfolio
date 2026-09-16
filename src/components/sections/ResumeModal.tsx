'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, MapPin, Mail, Globe } from 'lucide-react';
import { experienceData } from '@/data/experience';
import { projectsData } from '@/data/projects';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto font-sans">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[92vh] bg-surface-200/95 backdrop-blur-2xl border border-border-strong rounded-3xl shadow-2xl overflow-y-auto z-10 p-6 sm:p-10 flex flex-col gap-6"
        >
          {/* Header Action Bar: Header-Style Buttons */}
          <div className="flex items-center justify-between border-b border-border-subtle pb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-primary-dynamic px-3.5 py-1 bg-surface-100 rounded-full border border-border-subtle">
                CURRICULUM VITAE
              </span>
              <span className="text-xs text-foreground-subtle hidden sm:inline-block font-medium">
                Updated 2026
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-100 hover:bg-surface-50 border border-border-subtle text-xs font-sans text-foreground hover:text-primary-dynamic transition-colors font-medium active:scale-95 shadow-sm"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-surface-100 hover:bg-surface-50 border border-border-subtle text-foreground-muted hover:text-foreground transition-colors active:scale-95"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Printable Resume Content */}
          <div className="space-y-8 font-sans text-foreground">
            {/* Top Identity Block */}
            <div className="space-y-3 border-b border-border-subtle pb-6">
              <h2 className="text-3xl sm:text-4xl font-black font-sans tracking-tight">
                MOHAMMED FAREED MANDEEYA HARUNA
              </h2>
              <div className="text-sm text-accent-dynamic font-semibold">
                Full-Stack MERN Developer & Computer Science Student (UTAS)
              </div>

              <div className="flex flex-wrap gap-y-2 gap-x-6 text-xs text-foreground-muted pt-1 font-medium">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-accent-dynamic" />
                  <span>Tamale, Ghana</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span>📞 0209878744</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-accent-dynamic" />
                  <span>mohammedfareed.dev@gmail.com</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-accent-dynamic" />
                  <a href="https://github.com/hmfareed" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    github.com/hmfareed
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <a href="https://linkedin.com/in/mohammed-fareed-haruna" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    linkedin.com/in/mohammed-fareed-haruna
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-widest text-foreground-subtle font-bold">
                Professional Summary
              </h3>
              <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed font-sans">
                Third-year Computer Science student and full-stack developer specializing in the MERN stack, with hands-on experience building and shipping production web apps solo and in teams. Focused on real-world payment (Paystack) and e-commerce systems for the Ghanaian market, comfortable across the stack from UI design to backend architecture and third-party integrations.
              </p>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-widest text-foreground-subtle font-bold">
                Education
              </h3>
              <div className="p-3.5 rounded-xl bg-surface-100 border border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between text-xs font-sans">
                <div>
                  <div className="font-bold text-foreground text-sm">BSc Computer Science, Level 300</div>
                  <div className="text-foreground-subtle">University of Technology and Applied Sciences (UTAS), Navrongo</div>
                </div>
                <div className="text-xs text-accent-dynamic font-semibold mt-1 sm:mt-0">
                  2024 — 2027 (Expected)
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-foreground-subtle font-bold">
                Work Experience
              </h3>
              <div className="space-y-5">
                {experienceData.map((exp, i) => (
                  <div key={i} className="space-y-1.5 text-xs sm:text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between font-sans">
                      <span className="font-bold text-foreground">{exp.role}</span>
                      <span className="text-xs text-accent-dynamic font-semibold">{exp.period}</span>
                    </div>
                    <div className="text-xs text-foreground-subtle font-medium">
                      {exp.organization} • {exp.location}
                    </div>
                    <p className="text-xs text-foreground-muted leading-relaxed pt-1">
                      {exp.description}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-foreground-muted pt-1">
                      {exp.highlights.map((hl, j) => (
                        <li key={j} className="leading-relaxed">{hl}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Project Highlights */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-widest text-foreground-subtle font-bold">
                Key Production Systems
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {projectsData.slice(0, 4).map((proj) => (
                  <div
                    key={proj.id}
                    className="p-3.5 rounded-xl bg-surface-100 border border-border-subtle space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold font-sans text-foreground">{proj.title}</span>
                      <span className="text-[11px] text-accent-dynamic font-semibold">{proj.year}</span>
                    </div>
                    <p className="text-xs text-foreground-muted line-clamp-2 leading-relaxed">
                      {proj.description}
                    </p>
                    <div className="text-[11px] text-foreground-subtle pt-1 font-medium">
                      {proj.technologies.slice(0, 3).join(' • ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills Summary */}
            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-widest text-foreground-subtle font-bold">
                Technical Skills & Toolchains
              </h3>
              <div className="text-xs space-y-1.5 text-foreground-muted">
                <div>
                  <span className="text-foreground font-semibold">Languages: </span>
                  JavaScript, TypeScript, HTML, CSS.
                </div>
                <div>
                  <span className="text-foreground font-semibold">Frontend: </span>
                  React, Next.js, Vite, Tailwind CSS, shadcn/ui, Bootstrap, UI Design.
                </div>
                <div>
                  <span className="text-foreground font-semibold">Backend: </span>
                  Node.js, Express, JWT Authentication, Zod/Joi Validation.
                </div>
                <div>
                  <span className="text-foreground font-semibold">Databases: </span>
                  MongoDB, Mongoose, PostgreSQL.
                </div>
                <div>
                  <span className="text-foreground font-semibold">Tools & Integrations: </span>
                  Paystack, Clerk, Socket.io, Vercel, Cloudinary, Nodemailer, Google Stitch, Banani, Git/GitHub, Terminal (Bash).
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
