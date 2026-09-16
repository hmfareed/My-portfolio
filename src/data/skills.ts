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
      { name: 'Tailwind CSS', level: 'Advanced', highlight: true, description: 'shadcn/ui, Bootstrap, Design Systems, Tokens' },
      { name: 'Vite & UI Design', level: 'Advanced', highlight: true, description: 'Google Stitch, Banani, Fast Bundling, Prototyping' },
      { name: 'HTML5 & CSS3', level: 'Advanced', description: 'Semantic Markup, Responsive Flex/Grid Layouts, WCAG AA' },
    ],
  },
  {
    category: 'Backend & Databases',
    skills: [
      { name: 'Node.js & Express', level: 'Advanced', highlight: true, description: 'REST APIs, Middleware, JWT, Zod/Joi Validation' },
      { name: 'MongoDB & Mongoose', level: 'Advanced', highlight: true, description: '36+ Schemas, Aggregations, Geospatial 2dsphere' },
      { name: 'PostgreSQL', level: 'Proficient', highlight: true, description: 'Relational Design, ACID Transactions, Prisma' },
      { name: 'Authentication & RBAC', level: 'Advanced', description: 'JWT, Polymorphic 6-Role RBAC, Clerk, NextAuth' },
      { name: 'Paystack & MoMo', level: 'Advanced', highlight: true, description: 'MTN & Telecel Webhooks, Split Subaccount Payouts' },
    ],
  },
  {
    category: 'Tools & Integrations',
    skills: [
      { name: 'Socket.io', level: 'Advanced', highlight: true, description: 'Real-Time Fee Ledgers, Live Audit Logging, Events' },
      { name: 'Cloudinary', level: 'Advanced', description: 'Media CDN, KYC Document Verification, Asset Optimization' },
      { name: 'Git & GitHub', level: 'Advanced', description: 'Trunk Workflows, CI/CD Actions, PR Reviews' },
      { name: 'Vercel & Cloud', level: 'Advanced', description: 'Serverless Deployment, Edge Compute, Cache Control' },
      { name: 'Terminal & Bash', level: 'Advanced', description: 'Command Line, Linux Workflows, Shell Scripting' },
    ],
  },
];
