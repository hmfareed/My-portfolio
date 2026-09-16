export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    period: '2026 — Present',
    role: 'Full-Stack Developer',
    organization: 'Freelance & Personal Ventures',
    location: 'Tamale, Ghana',
    type: 'Full-Stack Development',
    description:
      'Designing and building full-stack web products from interface and API architecture through to deployment, including personal ventures such as NorthMarket.',
    highlights: [
      'Engineered an event-driven Paystack Mobile Money payment listener with automated dispatch webhooks.',
      'Designed spatial indexing algorithms in MongoDB reducing rider lookup delays to sub-500ms.',
      'Built a low-latency offline-tolerant merchant mobile portal tailored for mobile browsers on 3G networks.',
    ],
    technologies: ['Next.js 14', 'TypeScript', 'MongoDB', 'Paystack API', 'Tailwind CSS', 'Zustand'],
  },
  {
    period: '2026',
    role: 'Student Intern',
    organization: 'Tamale Metropolitan Assembly',
    location: 'Ghana',
    type: 'Public Sector Internship',
    description:
      'Student intern supporting public-sector digital operations and applying practical software engineering skills in a professional environment.',
    highlights: [
      'Contributed to technology-enabled workplace processes in a public-sector setting.',
      'Developed professional communication, collaboration, and delivery practices.',
    ],
    technologies: ['Digital Operations', 'Collaboration', 'Documentation'],
  },
  {
    period: '2025',
    role: 'Freelance Frontend Engineer',
    organization: 'Independent Client Projects',
    location: 'Ghana',
    type: 'Freelance Engineering',
    description:
      'Designed and delivered responsive web interfaces, interactive brand experiences, and clean frontend systems for client and personal projects.',
    highlights: [
      'Crafted animated interactive layouts using Framer Motion and custom CSS systems.',
      'Optimized client web assets to consistently score 95+ in Google Lighthouse metrics.',
    ],
    technologies: ['JavaScript (ES6+)', 'TypeScript', 'React', 'Tailwind CSS', 'HTML5/CSS3'],
  },
];
