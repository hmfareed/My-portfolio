'use client';

import React, { useState } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import ConnectingDotsBackground from '@/components/layout/ConnectingDotsBackground';
import Navbar from '@/components/layout/Navbar';
import ScrollProgress from '@/components/layout/ScrollProgress';
import SmoothScroll from '@/components/layout/SmoothScroll';
import CustomCursor from '@/components/layout/CustomCursor';
import CommandMenu from '@/components/layout/CommandMenu';
import Footer from '@/components/layout/Footer';
import CinematicIntro from '@/components/hero/CinematicIntro';
import Hero from '@/components/hero/Hero';
import Marquee from '@/components/hero/Marquee';
import Statement from '@/components/sections/Statement';
import ProjectGrid from '@/components/projects/ProjectGrid';
import CaseStudyModal from '@/components/projects/CaseStudyModal';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import TechStack from '@/components/sections/TechStack';
import Playground from '@/components/sections/Playground';
import CurrentlyBuilding from '@/components/sections/CurrentlyBuilding';
import Contact from '@/components/sections/Contact';
import ResumeModal from '@/components/sections/ResumeModal';
import { projectsData } from '@/data/projects';

export default function HomePage() {
  const [introFinished, setIntroFinished] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeCaseStudySlug, setActiveCaseStudySlug] = useState<string | null>(null);

  const activeProject = activeCaseStudySlug
    ? projectsData.find((p) => p.slug === activeCaseStudySlug) || null
    : null;

  return (
    <ThemeProvider>
      {/* Lenis Smooth Inertial Scrolling Engine */}
      <SmoothScroll />

      {/* Top Glowing Scroll Progress Indicator */}
      <ScrollProgress />

      <main className="min-h-screen text-foreground relative selection:bg-accent selection:text-black font-sans">
        {/* Full-Page Connecting Dots Canvas running across the entire site */}
        <ConnectingDotsBackground />

        {/* 1. Snappy Cinematic Intro */}
        <CinematicIntro onComplete={() => setIntroFinished(true)} />

        {/* 2. Custom Desktop Cursor */}
        <CustomCursor />

        {/* 3. Global Navbar with Theme Switcher */}
        <Navbar
          onOpenCommand={() => setCommandOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* Page Content Layers (relative z-10 with overflow-x-clip for slide animations) */}
        <div className="relative z-10 overflow-x-clip">
          {/* 4. Hero Section */}
          <Hero />

          {/* 5. Capabilities Marquee */}
          <Marquee />

          {/* 6. Statement & Philosophy */}
          <Statement />

          {/* 7. Curated Projects & Case Studies */}
          <ProjectGrid
            onOpenCaseStudy={(slug) => setActiveCaseStudySlug(slug)}
          />

          {/* 8. About & Interactive Portrait */}
          <About onOpenResume={() => setResumeOpen(true)} />

          {/* 9. Career Trajectory Timeline */}
          <Experience />

          {/* 10. Technical Stack Matrix */}
          <TechStack />

          {/* 11. Interactive Physics Lab */}
          <Playground />

          {/* 12. Currently Building Live Tracker */}
          <CurrentlyBuilding
            onOpenCaseStudy={(slug) => setActiveCaseStudySlug(slug)}
          />

          {/* 13. High-Impact Contact */}
          <Contact />

          {/* 14. Footer */}
          <Footer />
        </div>

        {/* Interactive Overlays */}
        <CommandMenu
          isOpen={commandOpen}
          onClose={() => setCommandOpen(false)}
          onOpenResume={() => setResumeOpen(true)}
          onOpenCaseStudy={(slug) => setActiveCaseStudySlug(slug)}
        />

        <CaseStudyModal
          project={activeProject}
          onClose={() => setActiveCaseStudySlug(null)}
        />

        <ResumeModal
          isOpen={resumeOpen}
          onClose={() => setResumeOpen(false)}
        />
      </main>
    </ThemeProvider>
  );
}
