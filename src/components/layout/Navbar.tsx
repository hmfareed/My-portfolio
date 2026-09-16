'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Command, Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';

interface NavbarProps {
  onOpenCommand: () => void;
  onOpenResume: () => void;
}

export default function Navbar({ onOpenCommand, onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Stack', href: '#skills' },
    { name: 'Lab', href: '#playground' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans border-b ${
          scrolled
            ? 'bg-surface-300/90 backdrop-blur-xl border-border-strong shadow-2xl py-3 px-6 sm:px-12 lg:px-20'
            : 'bg-surface-200/70 backdrop-blur-md border-border-subtle py-3.5 px-6 sm:px-12 lg:px-20'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="Mohammed Fareed Homepage"
          >
            <span className="w-8 h-8 rounded-xl bg-surface-100 border border-border-subtle flex items-center justify-center font-sans font-bold text-xs text-foreground group-hover:border-accent-dynamic group-hover:text-accent-dynamic transition-colors shadow-sm">
              MF
            </span>
            <div className="flex flex-col">
              <span className="navbar-brand-name text-xs font-semibold tracking-wide uppercase font-sans text-foreground flex items-center gap-1.5">
                Mohammed Fareed
                <span className="w-1.5 h-1.5 rounded-full bg-accent-dynamic animate-pulse" />
              </span>
              <span className="navbar-brand-title text-[10px] text-foreground-subtle hidden sm:inline-block font-sans font-medium">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="navbar-nav-capsule hidden md:flex items-center gap-1 bg-surface-100/60 px-2 py-1 rounded-full border border-border-subtle backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="navbar-nav-link px-3 py-1.5 text-xs font-medium text-foreground-muted hover:text-foreground hover:bg-surface-50 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2">
            {/* Quick Theme Switcher */}
            <ThemeSwitcher />

            {/* Quick Command Trigger */}
            <button
              onClick={onOpenCommand}
              className="navbar-cmd-btn hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-sans text-foreground-muted hover:text-foreground bg-surface-100 hover:bg-surface-50 border border-border-subtle rounded-full transition-colors"
              title="Open Command Menu (Ctrl+K)"
            >
              <Command className="w-3.5 h-3.5 text-accent-dynamic" />
              <span className="text-[11px] font-medium">⌘K</span>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="navbar-cv-btn hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans font-medium text-foreground-muted hover:text-foreground bg-surface-100 hover:bg-surface-50 border border-border-subtle rounded-full transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV</span>
            </button>

            {/* Contact CTA */}
            <a
              href="#contact"
              className="navbar-contact-btn flex items-center gap-1 px-4 py-1.5 text-xs font-semibold rounded-full bg-accent-dynamic text-black hover:opacity-90 transition-transform active:scale-95 shadow-sm"
            >
              <span>Let&apos;s talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-surface-100 border border-border-subtle text-foreground"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 bg-surface-200/95 backdrop-blur-xl border border-border-strong rounded-3xl p-6 shadow-2xl flex flex-col gap-4 md:hidden font-sans"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 text-sm font-medium text-foreground-muted hover:text-accent-dynamic hover:bg-surface-100 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="h-px bg-border-subtle my-1" />

            <div className="flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommand();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-sans font-medium bg-surface-100 border border-border-subtle rounded-xl text-foreground"
              >
                <Command className="w-4 h-4 text-accent-dynamic" />
                <span>Command Menu</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-sans font-medium bg-surface-100 border border-border-subtle rounded-xl text-foreground"
              >
                <FileText className="w-4 h-4" />
                <span>View CV</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
