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
    period: '2025 — Present',
    role: 'Solo Full-Stack Developer',
    organization: 'Freelance & Production Ventures',
    location: 'Tamale, Ghana',
    type: 'Full-Stack Engineering',
    description:
      'Independently designed, built, and deployed full-stack web applications end-to-end for clients and personal ventures, from architecture to deployment. Managed complete project lifecycles solo, including specs, Stitch/Banani-based UI prototyping, implementation, and Vercel deployment.',
    highlights: [
      'Shipped production web applications (Kaypacks, AfriCart, Slay by Humu) with real-world Paystack Mobile Money integrations.',
      'Built customer-facing and admin AI assistants for order automation, product recommendations, and real-time inventory analytics.',
      'Engineered one-click GPS coordinate capture at checkout, eliminating delivery address ambiguity in local logistics.',
      'Architected multi-vendor marketplace systems with Paystack subaccount/split payouts direct to Mobile Money accounts.',
    ],
    technologies: ['Next.js', 'React', 'Node.js', 'Express', 'MongoDB', 'Paystack', 'TypeScript', 'Tailwind CSS'],
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
