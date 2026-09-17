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
    organization: 'Freelance & Production Ventures',
    location: 'Tamale, Ghana',
    type: 'Full-Stack Engineering',
    description:
      'Architecting, engineering, and deploying end-to-end full-stack web applications for clients and personal ventures. Delivering production MERN systems with scalable REST APIs, database schemas, Paystack payment gateways, and cloud infrastructure.',
    highlights: [
      'Shipped live production web platforms (Kaypacks, AfriCart, HANARA SMS, Slay by Humu) with real-world Paystack Mobile Money integrations.',
      'Architected multi-vendor marketplace systems with automated Paystack subaccount/split payouts direct to Mobile Money accounts.',
      'Built customer-facing and admin AI assistants for order automation, product recommendations, and real-time inventory analytics.',
      'Engineered one-click GPS coordinate capture at checkout, eliminating delivery address ambiguity in local logistics.',
    ],
    technologies: ['Next.js', 'React', 'Node.js', 'Express', 'MongoDB', 'Paystack', 'TypeScript', 'Tailwind CSS'],
  },
  {
    period: '2026',
    role: 'Student Intern',
    organization: 'Tamale Metropolitan Assembly',
    location: 'Tamale, Ghana',
    type: 'Public Sector IT & Systems Support',
    description:
      'Assisted the IT and administration department at Tamale Metropolitan Assembly in maintaining municipal computer systems, network connectivity, hardware diagnostics, and digital record-keeping operations.',
    highlights: [
      'Provided hardware diagnostics, system maintenance, and tier-1/tier-2 technical support across metropolitan departments.',
      'Assisted with municipal database record-keeping, administrative data entry, and digital workflow verification.',
      'Collaborated with senior IT officers on local network troubleshooting, workstation security, and systems setup.',
      'Gained practical hands-on experience in public sector IT infrastructure and municipal operational governance.',
    ],
    technologies: ['IT Support', 'Network Troubleshooting', 'Hardware Maintenance', 'Data Management', 'Systems Administration'],
  },
  {
    period: '2026',
    role: 'Team Leader, Machine Learning Group',
    organization: 'University of Technology and Applied Sciences (UTAS)',
    location: 'Navrongo, Ghana',
    type: 'Applied AI & Team Leadership',
    description:
      'Led a specialized team applying machine learning models to a chronic kidney disease dataset, evaluating prediction accuracy and coordinating comprehensive model testing.',
    highlights: [
      'Directed model training, feature selection, and cross-validation benchmarking across clinical diagnostic metrics.',
      'Coordinated cross-functional research sprints, evaluation workflows, and milestone reviews for team members.',
      'Delivered rigorous prediction accuracy reports identifying key clinical risk indicators.',
    ],
    technologies: ['Python', 'Machine Learning', 'Data Modeling', 'Team Leadership', 'Model Evaluation'],
  },
  {
    period: '2025',
    role: 'Frontend Developer',
    organization: 'Freelance & Client Projects',
    location: 'Tamale, Ghana',
    type: 'Frontend Engineering & UI/UX',
    description:
      'Designed and developed modern, responsive, and accessible client-side web interfaces for business clients and personal projects. Focused on modular component architecture, tactile micro-interactions, and mobile-first experiences.',
    highlights: [
      'Built pixel-perfect, responsive web interfaces using React, Next.js, TypeScript, and Tailwind CSS.',
      'Translated Stitch and Banani UI/UX prototypes into performant, accessible code with smooth animations.',
      'Optimized frontend performance, asset loading pipelines, and mobile responsiveness across diverse device viewports.',
      'Integrated third-party APIs and state management solutions for seamless client-side user interactions.',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3', 'UI Design'],
  },
  {
    period: '2024 — 2027 (Expected)',
    role: 'BSc Computer Science, Level 300',
    organization: 'University of Technology and Applied Sciences (UTAS)',
    location: 'Navrongo, Ghana',
    type: 'Academic Degree',
    description:
      'Third-year Computer Science undergraduate specializing in the MERN stack, database design, and software engineering. Combining rigorous academic foundations with hands-on production application delivery.',
    highlights: [
      'Specializing in MERN stack architectures, RESTful API design, and distributed data modeling.',
      'Hands-on focus on Ghanaian payment infrastructure (Paystack MoMo), e-commerce workflows, and accessible web standards.',
      'Active technical collaborator across university software engineering and machine learning study groups.',
    ],
    technologies: ['Computer Science', 'Data Structures', 'Database Systems', 'Software Engineering', 'Algorithms'],
  },
];
