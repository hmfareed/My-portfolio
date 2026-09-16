export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: string;
    highlight?: boolean;
    description: string;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Frontend Engineering',
    skills: [
      { name: 'Next.js', level: 'Advanced', highlight: true, description: 'App Router, Server Components, SSR, Edge Handlers' },
      { name: 'React', level: 'Advanced', highlight: true, description: 'Custom Hooks, Context, Suspense, Concurrent Mode' },
      { name: 'TypeScript', level: 'Advanced', highlight: true, description: 'Type Safety, Generics, Discriminated Unions' },
      { name: 'Tailwind CSS', level: 'Advanced', highlight: true, description: 'Design Systems, Custom Tokens, Responsive Layouts' },
      { name: 'Framer Motion', level: 'Proficient', highlight: true, description: 'Complex orchestration, Layout Animations, Scroll-linking' },
      { name: 'State Management', level: 'Proficient', description: 'Zustand, React Query, Redux Toolkit' },
    ],
  },
  {
    category: 'Backend & Systems',
    skills: [
      { name: 'Node.js & Express', level: 'Advanced', highlight: true, description: 'REST APIs, Middleware, Stream processing' },
      { name: 'MongoDB & Mongoose', level: 'Advanced', highlight: true, description: 'Schema Design, Aggregation pipelines, Geospatial 2dsphere' },
      { name: 'PostgreSQL & Prisma', level: 'Proficient', highlight: true, description: 'Relational design, Migrations, ACID transactions' },
      { name: 'Authentication & RBAC', level: 'Advanced', description: 'NextAuth, JWT, Session management, Role gating' },
      { name: 'Payment Integrations', level: 'Advanced', highlight: true, description: 'Paystack, MTN/Telecel Mobile Money Webhooks, Stripe' },
    ],
  },
  {
    category: 'Architecture & DevOps',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', description: 'Trunk workflows, PR reviews, CI/CD Actions' },
      { name: 'Docker', level: 'Proficient', description: 'Multi-stage builds, Containerization' },
      { name: 'Vercel & Cloud', level: 'Advanced', description: 'Serverless deployment, Edge compute, Cache control' },
      { name: 'API Design', level: 'Advanced', description: 'RESTful architecture, Webhooks, Idempotency' },
      { name: 'Performance Optimization', level: 'Advanced', description: 'Core Web Vitals, LCP/CLS tuning, Image caching' },
    ],
  },
];
