'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, ArrowUpRight, Send, MessageSquare } from 'lucide-react';

const springTransition = {
  type: 'spring',
  damping: 15,
  stiffness: 100,
  mass: 0.8,
};

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: 'Web Application',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = 'mohammedfareed.dev@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 relative overflow-hidden font-sans">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-dynamic opacity-[0.05] blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        {/* Section Header with Gravity Descent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -80px 0px', amount: 0.2 }}
          transition={{ type: 'spring', damping: 16, stiffness: 110 }}
          className="space-y-4 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3.5 py-1 rounded-full bg-surface-100/80 backdrop-blur-md border border-border-subtle text-foreground-subtle">
            <span className="text-accent-dynamic font-bold">07 //</span>
            <span>Let&apos;s Connect</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-sans text-foreground tracking-tight uppercase leading-[0.95]">
            Have an idea? <br />
            <span className="text-accent-dynamic">Let&apos;s build it.</span>
          </h2>

          <p className="text-base sm:text-lg text-foreground-muted font-sans max-w-xl mx-auto">
            Whether you need a full-scale web product, a localized commerce system, or a technical consultation, my inbox is always open.
          </p>
        </motion.div>

        {/* Quick Email Pill Action with Centering Compression */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -60px 0px', amount: 0.2 }}
          transition={{ ...springTransition, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-sans"
        >
          <a
            href={`mailto:${emailAddress}`}
            data-cursor="EMAIL ↗"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent-dynamic text-black font-semibold text-sm tracking-wide flex items-center justify-center gap-2 hover:shadow-[0_0_25px_var(--color-accent-glow)] transition-all active:scale-95 shadow-lg"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email Directly</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            onClick={handleCopyEmail}
            className="w-full sm:w-auto px-6 py-4 rounded-full bg-surface-100/80 hover:bg-surface-50 backdrop-blur-md border border-border-strong text-foreground text-sm flex items-center justify-center gap-2 transition-all hover:border-accent-dynamic active:scale-95 shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-accent-dynamic" />
                <span className="text-accent-dynamic font-bold">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-foreground-muted" />
                <span>{emailAddress}</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Interactive Inquiry Form Card with Floating Elevate */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '0px 0px -80px 0px', amount: 0.15 }}
          transition={{ type: 'spring', damping: 16, stiffness: 100, delay: 0.2 }}
          className="contact-inquiry-card max-w-2xl mx-auto rounded-3xl bg-surface-200/80 backdrop-blur-xl border border-border-strong p-6 sm:p-10 shadow-2xl"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-accent-muted border border-accent-dynamic/40 flex items-center justify-center mx-auto text-accent-dynamic">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-sans">Message Dispatched</h3>
              <p className="text-xs text-foreground-muted max-w-sm mx-auto font-sans">
                Thank you, {formState.name || 'there'}! I’ve received your message and will respond within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormState({ name: '', email: '', projectType: 'Web Application', message: '' });
                }}
                className="text-xs text-accent-dynamic hover:underline pt-2 font-medium"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1 border-b border-border-subtle pb-4">
                <h3 className="text-lg font-bold font-sans text-foreground flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-accent-dynamic" />
                  <span>Start a Project Discussion</span>
                </h3>
                <p className="text-xs text-foreground-muted font-sans">
                  Fill out the details below and I’ll get back to you promptly.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-foreground-subtle uppercase text-[11px] tracking-wider font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kwame Mensah"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface-100/90 border border-border-subtle text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-accent-dynamic transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-foreground-subtle uppercase text-[11px] tracking-wider font-semibold">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface-100/90 border border-border-subtle text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-accent-dynamic transition-colors"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div className="space-y-1.5 text-xs font-sans">
                <label className="text-foreground-subtle uppercase text-[11px] tracking-wider font-semibold">
                  Project Domain / Need
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {['Web Application', 'E-Commerce System', 'Architecture Review', 'Mobile Money / API', 'Design & Frontend', 'Contract Role'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormState({ ...formState, projectType: type })}
                      className={`px-3 py-2 rounded-xl text-left text-xs border transition-all ${
                        formState.projectType === type
                          ? 'border-accent-dynamic bg-accent-muted text-accent-dynamic font-bold shadow-sm'
                          : 'border-border-subtle bg-surface-100/90 text-foreground-muted hover:text-foreground'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5 text-xs font-sans">
                <label className="text-foreground-subtle uppercase text-[11px] tracking-wider font-semibold">
                  Brief Project Overview
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about what you are planning to build, target timelines, or specific technical requirements..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-surface-100/90 border border-border-subtle text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-accent-dynamic resize-none font-sans text-xs transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-accent-dynamic text-black font-sans text-xs font-bold flex items-center justify-center gap-2 hover:opacity-95 transition-all active:scale-[0.99] disabled:opacity-50 shadow-md"
              >
                {isSubmitting ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
