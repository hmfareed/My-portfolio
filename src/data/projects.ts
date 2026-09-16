export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: 'E-Commerce' | 'Systems' | 'Web' | 'All';
  description: string;
  coverImage: string;
  year: number;
  featured: boolean;
  accentColor: 'primary' | 'secondary';
  status: {
    text: string;
    state: 'active' | 'production' | 'beta' | 'live';
  };
  bulletPoints: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    architecture: {
      step: string;
      title: string;
      description: string;
    }[];
    challenges: string[];
    outcomes: string[];
  };
}

export const projectsData: Project[] = [
  {
    id: '01',
    slug: 'kaypacks',
    title: 'Kaypacks',
    subtitle: 'WATER DELIVERY E-COMMERCE PLATFORM',
    tagline: 'Production water delivery platform with dual AI assistants and GPS checkout.',
    category: 'E-Commerce',
    description:
      'Full-stack e-commerce platform for a water delivery enterprise, featuring one-click GPS coordinate capture at checkout, dual customer & admin AI assistants, WhatsApp ordering, Yango door delivery, and Paystack payments.',
    coverImage: '/images/kayspacks.png',
    year: 2026,
    featured: true,
    accentColor: 'primary',
    status: {
      text: 'Live in Production',
      state: 'production',
    },
    bulletPoints: [
      '1-Click GPS Coordinate Capture',
      'Dual Customer & Admin AI',
      'Paystack MoMo & Card Payments',
      'Direct WhatsApp Ordering Pipeline',
      'Yango Door Delivery & Pickup',
      'Cloudinary Media CDN Engine',
    ],
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Cloudinary', 'Paystack', 'Tailwind CSS'],
    metrics: [
      { label: 'GPS Checkout', value: '1-Click Auto-Fill' },
      { label: 'Payments', value: 'Instant MoMo' },
      { label: 'Fulfillment', value: 'Yango + Pickup' },
      { label: 'AI Assistance', value: 'Dual Bot Engine' },
    ],
    liveUrl: 'https://kaypacks.com',
    githubUrl: 'https://github.com/hmfareed/kaypacks',
    caseStudy: {
      overview:
        'Kaypacks is a production full-stack e-commerce platform designed for a water delivery business, eliminating delivery address ambiguity in Ghana while automating product inquiries, order placement, and dispatch.',
      problem:
        'Water delivery logistics in Ghanaian cities often suffer from complex landmark descriptions and manual phone verifications, causing delayed dispatch and lost customer orders during peak hours.',
      solution:
        'Engineered an innovative one-click GPS capture mechanism that auto-fills customer location coordinates at checkout. Built a customer-facing AI chatbot that recommends products and takes orders, alongside an admin AI assistant for instant sales analytics and inventory checks.',
      architecture: [
        {
          step: '01',
          title: 'Storefront & GPS Checkout',
          description: 'Next.js responsive web application integrating HTML5 Geolocation API with reverse geocoding fallback.',
        },
        {
          step: '02',
          title: 'Dual Conversational AI',
          description: 'Customer ordering assistant with human agent escalation, paired with an executive voice/text analytics bot.',
        },
        {
          step: '03',
          title: 'Payment & Settlement Engine',
          description: 'Paystack Mobile Money (MTN & Telecel) and card checkout with instant webhook verification.',
        },
        {
          step: '04',
          title: 'Logistics Integration',
          description: 'Yango door delivery dispatch hooks paired with direct warehouse self-pickup management.',
        },
      ],
      challenges: [
        'Handling GPS variance across mobile devices through graceful landmark fallback.',
        'Ensuring natural conversation flows in the AI shopping assistant with seamless human escalation.',
      ],
      outcomes: [
        'Reduced checkout time by 65% with one-click GPS address completion.',
        'Automated 70% of customer ordering inquiries through the conversational AI bot.',
        'Zero payment reconciliation discrepancy with idempotent Paystack webhook pipelines.',
      ],
    },
  },
  {
    id: '02',
    slug: 'africart',
    title: 'AfriCart',
    subtitle: 'MULTI-VENDOR MARKETPLACE PWA',
    tagline: 'Multi-vendor marketplace PWA with Paystack split payouts and role dashboards.',
    category: 'E-Commerce',
    description:
      'Engineered a multi-vendor marketplace with role-based dashboards for Admins, Vendors, and Shoppers, real-time cart discount and wholesale pricing, vendor onboarding, and Paystack split payments direct to Mobile Money.',
    coverImage: '/images/africart.png',
    year: 2025,
    featured: true,
    accentColor: 'secondary',
    status: {
      text: 'Live on Vercel',
      state: 'production',
    },
    bulletPoints: [
      'Role Dashboards (Admin/Vendor/Shopper)',
      'Paystack Split MoMo Payouts',
      'Real-Time Wholesale Pricing',
      'Vendor Document Verification',
      'Hub-Based Fulfillment Oversight',
      'WCAG AA Dark-First UI',
    ],
    technologies: ['Next.js', 'MongoDB', 'JWT', 'Cloudinary', 'Paystack', 'Tailwind CSS'],
    metrics: [
      { label: 'Architecture', value: 'Multi-Vendor' },
      { label: 'Vendor Payouts', value: 'Paystack Split' },
      { label: 'Pricing Engine', value: 'Wholesale Tiered' },
      { label: 'UI Standards', value: 'WCAG AA Compliant' },
    ],
    liveUrl: 'https://africart-one.vercel.app',
    githubUrl: 'https://github.com/hmfareed/africart',
    caseStudy: {
      overview:
        'AfriCart is a high-performance multi-vendor marketplace PWA enabling local Ghanaian merchants to establish verified digital storefronts with automated subaccount payouts direct to their Mobile Money wallets.',
      problem:
        'Independent vendors lack the infrastructure to handle complex wholesale volume discounts, document verification, and split commission payouts without expensive software licensing.',
      solution:
        'Architected a Next.js and MongoDB platform featuring dedicated role portals for Admins, Vendors, and Shoppers, real-time cart discount logic, automated vendor onboarding workflows, and Paystack split payment webhooks.',
      architecture: [
        {
          step: '01',
          title: 'Multi-Role Portal Architecture',
          description: 'Granular role-based authorization for Admins, Vendors, and Customers with JWT authentication.',
        },
        {
          step: '02',
          title: 'Split Settlement Subsystem',
          description: 'Paystack subaccount integration routing sales revenue directly to vendor Mobile Money numbers.',
        },
        {
          step: '03',
          title: 'Wholesale & Discount Engine',
          description: 'Dynamic price-tier calculator updating cart totals based on order volume and vendor promotional codes.',
        },
      ],
      challenges: [
        'Ensuring secure vendor identity verification with document upload pipelines on Cloudinary.',
        'Maintaining high-speed page loads across low-bandwidth connections with custom skeleton states.',
      ],
      outcomes: [
        'Streamlined multi-merchant onboarding with automated KYC document review.',
        'Zero manual intervention needed for vendor split payouts via Paystack subaccounts.',
      ],
    },
  },
  {
    id: '03',
    slug: 'hanaraschools',
    title: 'HANARA SMS',
    subtitle: 'SCHOOL MANAGEMENT ECOSYSTEM',
    tagline: 'Full-stack school management system with 36+ models and 6 polymorphic roles.',
    category: 'Systems',
    description:
      'Full-stack school management system with 36+ Mongoose models, polymorphic RBAC across 6 roles, daily fee-collection ledger for feeding and bus fares, Socket.io real-time tracking, GPS teacher attendance, and BECE-compliant grading across 13 academic levels.',
    coverImage: '/images/hanaraschools.png',
    year: 2025,
    featured: true,
    accentColor: 'primary',
    status: {
      text: 'Production Deployment',
      state: 'production',
    },
    bulletPoints: [
      '36+ Mongoose Domain Models',
      'Polymorphic RBAC (6 Roles)',
      'Real-Time Fee Collection Ledger',
      'Socket.io Live Audit Logging',
      'BECE-Compliant Grading Engine',
      'Ghana Data Protection Act (Act 843)',
    ],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Zod', 'Socket.io'],
    metrics: [
      { label: 'Domain Models', value: '36+ Schemas' },
      { label: 'Role Security', value: '6 Polymorphic Roles' },
      { label: 'Academic Levels', value: '13 Grades (GES)' },
      { label: 'Compliance', value: 'Act 843 Certified' },
    ],
    liveUrl: 'https://hanaraschools.example.com',
    githubUrl: 'https://github.com/hmfareed/hanara-e-school',
    caseStudy: {
      overview:
        'HANARA SMS is an enterprise-grade school management platform engineered to automate student lifecycle management, daily transportation/feeding fee reconciliation, GES-standardized grading, and parent communication across 13 academic tiers.',
      problem:
        'Schools operated on paper attendance books, manual daily bus fare tally sheets, and handwritten report cards, leading to significant revenue leakage and grading inaccuracies.',
      solution:
        'Designed a scalable Node.js/Express and MongoDB backend with 36+ domain models. Built an immutable audit-log ledger for daily fee tracking via Socket.io, GPS-based teacher check-in/out, and a BECE-compliant grading engine with a dedicated parent portal.',
      architecture: [
        {
          step: '01',
          title: 'Polymorphic RBAC Layer',
          description: 'Role-based access gating for Superadmin, Admin, Teacher, Accountant, Parent, and Driver.',
        },
        {
          step: '02',
          title: 'Daily Financial Ledger',
          description: 'Socket.io real-time event pipeline tracking daily feeding and transport fee collections with zero drift.',
        },
        {
          step: '03',
          title: 'GES Assessment & Grading',
          description: 'Standardized BECE grading rules converting Continuous Assessment marks to percentile grades.',
        },
      ],
      challenges: [
        'Architecting 36+ interconnected Mongoose schemas with referential integrity and atomic updates.',
        'Strict adherence to the Ghana Data Protection Act (Act 843) for minor records and guardian consent.',
      ],
      outcomes: [
        'Eliminated daily fee reconciliation discrepancies through immutable audit logging.',
        'Instant terminal report card generation across all 13 academic class levels.',
      ],
    },
  },
  {
    id: '04',
    slug: 'slaybyhumu',
    title: 'Slay by Humu',
    subtitle: 'LUXURY E-COMMERCE STOREFRONT',
    tagline: 'Curated luxury fashion & beauty storefront with AI shopping assistant and Paystack.',
    category: 'E-Commerce',
    description:
      'Luxury e-commerce storefront featuring an AI shopping assistant for personalized product guidance, Paystack payments, real-time order tracking, in-app notifications, and comprehensive admin analytics.',
    coverImage: '/images/slaybyhumu.png',
    year: 2025,
    featured: true,
    accentColor: 'secondary',
    status: {
      text: 'Live on Vercel',
      state: 'production',
    },
    bulletPoints: [
      'Conversational AI Shopping Guide',
      'Paystack MoMo & Card Gateway',
      'Real-Time Order Tracking',
      'In-App Notification Center',
      'Full Admin Analytics Suite',
      'Mobile-First Luxury Aesthetics',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Paystack'],
    metrics: [
      { label: 'Shopping AI', value: 'Active Guidance' },
      { label: 'Payments', value: 'Paystack MoMo' },
      { label: 'Order Tracking', value: 'Real-Time Sync' },
      { label: 'Admin Suite', value: 'Full Analytics' },
    ],
    liveUrl: 'https://slaybyhumu.vercel.app',
    githubUrl: 'https://github.com/hmfareed/slay-by-humu-store',
    caseStudy: {
      overview:
        'Slay by Humu is a luxury digital storefront built for a premier beauty and fashion brand, combining high-end editorial aesthetics with an intelligent AI shopping concierge and automated checkout.',
      problem:
        'Boutique fashion customers demand personalized guidance for product shades, sizes, and compatibility, which was overwhelming manual staff on Instagram DMs and WhatsApp.',
      solution:
        'Integrated a conversational AI shopping assistant that answers customer questions, recommends curated items, and guides users directly into a friction-free Paystack checkout with real-time status tracking.',
      architecture: [
        {
          step: '01',
          title: 'Editorial Client Storefront',
          description: 'React and Tailwind CSS interface optimized for luxury brand presentation and fluid micro-interactions.',
        },
        {
          step: '02',
          title: 'AI Product Concierge',
          description: 'Context-aware assistant guiding shoppers through inventory recommendations.',
        },
        {
          step: '03',
          title: 'Merchant Analytics Command Center',
          description: 'Complete admin portal managing inventory counts, customer records, order fulfillment, and revenue.',
        },
      ],
      challenges: [
        'Balancing heavy editorial image assets with sub-second page performance on mobile networks.',
      ],
      outcomes: [
        'Transferred 80% of routine product inquiries away from staff DMs into the automated AI concierge.',
        'Achieved seamless Paystack Mobile Money settlement with automated customer notification triggers.',
      ],
    },
  },
];
