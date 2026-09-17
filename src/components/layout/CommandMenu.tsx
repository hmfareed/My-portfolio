'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  FileText,
  Copy,
  Check,
  FolderGit2,
  ArrowRight,
  X,
} from 'lucide-react';
import { projectsData } from '@/data/projects';

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onOpenCaseStudy: (slug: string) => void;
}

export default function CommandMenu({
  isOpen,
  onClose,
  onOpenResume,
  onOpenCaseStudy,
}: CommandMenuProps) {
  const [query, setQuery] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          inputRef.current?.focus();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mohammedfareed.dev@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const navItems = [
    { label: 'Work & Projects', href: '#projects', hint: 'Section' },
    { label: 'About Mohammed', href: '#about', hint: 'Section' },
    { label: 'Career Trajectory', href: '#experience', hint: 'Section' },
    { label: 'Tech Stack & Skills', href: '#skills', hint: 'Section' },
    { label: 'Interactive Lab', href: '#playground', hint: 'Experiment' },
    { label: 'Contact & Inquiries', href: '#contact', hint: 'Section' },
  ];

  const filteredNav = navItems.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = projectsData.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 font-sans">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="command-menu-backdrop fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="command-menu-window relative w-full max-w-xl bg-surface-200/95 backdrop-blur-2xl border border-border-strong rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
        >
          {/* Search Header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-border-subtle bg-surface-100/60">
            <Search className="w-4 h-4 text-foreground-muted shrink-0" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search portfolio sections, projects, commands... (Esc to close)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1 text-foreground-muted hover:text-foreground rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results Container */}
          <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4 text-xs font-sans">

            {/* Quick Actions */}
            <div>
              <div className="px-3 py-1.5 text-[11px] font-semibold text-foreground-subtle uppercase tracking-wider">
                Quick Actions
              </div>
              <div className="space-y-1">
                <button
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-foreground-muted hover:text-foreground hover:bg-surface-50 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-accent-dynamic" />
                    ) : (
                      <Copy className="w-4 h-4 text-foreground-muted" />
                    )}
                    <span>{copiedEmail ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
                  </div>
                  <span className="text-[11px] text-foreground-subtle">mohammedfareed.dev@gmail.com</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-foreground-muted hover:text-foreground hover:bg-surface-50 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-accent-dynamic" />
                    <span>View Resume & Credentials</span>
                  </div>
                  <span className="text-[11px] text-accent-dynamic font-medium">Preview ↗</span>
                </button>
              </div>
            </div>

            {/* Case Studies / Projects */}
            {filteredProjects.length > 0 && (
              <div>
                <div className="px-3 py-1.5 text-[11px] font-semibold text-foreground-subtle uppercase tracking-wider flex items-center gap-1.5">
                  <FolderGit2 className="w-3.5 h-3.5" />
                  <span>Case Studies</span>
                </div>
                <div className="space-y-1">
                  {filteredProjects.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        onClose();
                        onOpenCaseStudy(p.slug);
                      }}
                      className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-foreground-muted hover:text-foreground hover:bg-surface-50 transition-colors text-left"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-foreground-subtle font-mono text-[11px]">#{p.id}</span>
                        <span className="text-foreground font-semibold">{p.title}</span>
                        <span className="text-[10px] text-accent-dynamic bg-surface-100 px-2 py-0.5 rounded-full border border-border-subtle">
                          {p.category}
                        </span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-foreground-subtle" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            {filteredNav.length > 0 && (
              <div>
                <div className="px-3 py-1.5 text-[11px] font-semibold text-foreground-subtle uppercase tracking-wider">
                  Navigation
                </div>
                <div className="space-y-1">
                  {filteredNav.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={onClose}
                      className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-foreground-muted hover:text-foreground hover:bg-surface-50 transition-colors"
                    >
                      <span>{item.label}</span>
                      <span className="text-[10px] text-foreground-subtle">{item.hint}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer bar */}
          <div className="px-5 py-3 bg-surface-100/60 border-t border-border-subtle flex items-center justify-between text-[11px] text-foreground-subtle font-sans">
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 rounded bg-surface-50 border border-border-subtle">Esc</span>
              <span>to close</span>
            </div>
            <span>Mohammed Fareed Portfolio</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
