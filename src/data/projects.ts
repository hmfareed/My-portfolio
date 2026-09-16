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
  accentColor: 'amber' | 'teal' | 'violet' | 'rose' | 'lime' | 'sky';
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
    slug: 'northmarket',
    title: 'NorthMarket',
    subtitle: 'LOCAL COMMERCE INFRASTRUCTURE',
    tagline: 'Local commerce infrastructure engineered for Northern Ghana.',
    category: 'Systems',
    description:
      'A multi-vendor localized digital marketplace bridging consumers and merchants across Tamale and Northern Ghana, delivering real-time logistics tracking and instant Mobile Money settlements.',
    coverImage: '/images/africart.png',
    year: 2026,
    featured: true,
    accentColor: 'amber',
    status: {
      text: 'Now in Beta Testing',
      state: 'beta',
    },
    bulletPoints: [
      'Instant MoMo Webhooks',
      'Sub-500ms Geospatial',
      'Multi-Vendor Architecture',
      'Offline-First 3G PWA',
      'Automated Rider Dispatch',
      'Zero Settlement Delay',
    ],
    technologies: ['Next.js 14', 'TypeScript', 'MongoDB', 'Paystack MoMo', 'Tailwind CSS', 'Framer Motion', 'Zustand'],
    metrics: [
      { label: 'Sub-second', value: '450ms Latency' },
      { label: 'Mobile Optimized', value: '3G Adaptive' },
      { label: 'Settlements', value: 'Instant MoMo' },
      { label: 'Vendors', value: 'Multi-Tenant' },
    ],
    liveUrl: 'https://northmarket.example.com',
    githubUrl: 'https://github.com/hmfareed/northmarket',
    caseStudy: {
      overview:
        'NorthMarket was architected to solve a critical regional challenge in Northern Ghana: long delivery lead times and lack of localized digital merchant tools. The platform empowers local vendors to catalog products, accept Mobile Money natively, and dispatch to couriers automatically.',
      problem:
        'Nationwide platforms fail to serve regional hubs effectively due to multi-day warehouse transfers and lack of local motorcycle courier integrations. Vendors lacked an accessible dashboard that runs reliably on mobile devices under variable bandwidth.',
      solution:
        'Engineered an offline-resilient Next.js progressive web application powered by MongoDB geospatial queries. Implemented automated webhook listeners for MTN and Telecel Mobile Money transactions with zero reconciliation delay.',
      architecture: [
        {
          step: '01',
          title: 'Edge & Client Application',
          description: 'Next.js App Router providing server-rendered pages and instant hydration on mobile browsers.',
        },
        {
          step: '02',
          title: 'Geospatial Dispatch Engine',
          description: 'MongoDB 2dsphere indexes mapping buyer locations to the nearest verified neighborhood couriers.',
        },
        {
          step: '03',
          title: 'Payment Clearing Subsystem',
          description: 'Idempotent webhook pipeline verifying Mobile Money payments before dispatch release.',
        },
        {
          step: '04',
          title: 'Merchant Command Center',
          description: 'Real-time sales notifications, stock tracking, and automated digital receipts.',
        },
      ],
      challenges: [
        'Variable network conditions required optimistic UI updates and aggressive image format optimization.',
        'High concurrency during peak shopping hours handled via atomic inventory decrement transactions.',
      ],
      outcomes: [
        'Achieved sub-2.2s Largest Contentful Paint (LCP) across slow 3G cellular benchmarks.',
        'Zero race conditions in cart checkouts via transactional document locking.',
      ],
    },
  },
  {
    id: '02',
    slug: 'africart',
    title: 'AfriCart',
    subtitle: 'MULTI-TENANT COMMERCE ENGINE',
    tagline: 'Multi-vendor digital retail engine with integrated POS and inventory sync.',
    category: 'E-Commerce',
    description:
      'Full-scale commerce platform designed to empower African retailers with synchronized multi-channel sales, inventory ledger, and instant customer checkout.',
    coverImage: '/images/africart.png',
    year: 2025,
    featured: true,
    accentColor: 'teal',
    status: {
      text: 'Live Production',
      state: 'production',
    },
    bulletPoints: [
      'Dual-Channel Inventory POS',
      '0% Stock Drift Across Stores',
      'Instant Mobile Money Checkout',
      'Transactional Row Locking',
      'Row-Level Security Multitenant',
      'Sub-Second Barcode Sync',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Prisma'],
    metrics: [
      { label: 'Stock Sync', value: '0% Drift' },
      { label: 'Transactions', value: '100% Atomic' },
      { label: 'Checkout Time', value: '< 3 clicks' },
      { label: 'Platform Uptime', value: '99.9%' },
    ],
    liveUrl: 'https://africart.example.com',
    githubUrl: 'https://github.com/hmfareed/africart',
    caseStudy: {
      overview:
        'AfriCart bridges physical storefront retail with digital commerce. Retailers operate an in-store POS terminal while their digital catalog is live for nationwide buyers, sharing a single source of inventory truth.',
      problem:
        'Merchants were managing separate stock logs for physical store purchases and online orders, leading to overselling and frustrated buyers.',
      solution:
        'Developed an atomic inventory locking mechanism using PostgreSQL transaction isolation levels. When an in-store barcode is scanned or a web buyer enters checkout, stock is locked dynamically with sub-second TTL release.',
      architecture: [
        {
          step: '01',
          title: 'Multi-Tenant Architecture',
          description: 'Row-level security isolates merchant data while maintaining shared compute resources.',
        },
        {
          step: '02',
          title: 'Dual-Channel Inventory Worker',
          description: 'Synchronizes physical barcode scans and web cart sessions in real time.',
        },
        {
          step: '03',
          title: 'Unified Checkout Pipeline',
          description: 'Supports cards, USSD, and Mobile Money with automated SMS confirmation.',
        },
      ],
      challenges: [
        'Preventing stale reads across concurrent web and POS terminal checkouts.',
        'Designing a high-contrast, touch-optimized POS terminal UI for tablets and barcode scanners.',
      ],
      outcomes: [
        'Eliminated inventory mismatches across simulated high-load flash sales.',
        'Lightweight bundle delivering snappy performance on modest retail hardware.',
      ],
    },
  },
  {
    id: '03',
    slug: 'hanaraschools',
    title: 'Hanara School Management',
    subtitle: 'CONTINUOUS ASSESSMENT SYSTEM',
    tagline: 'Enterprise school operations, grading, and administrative ledger platform.',
    category: 'Systems',
    description:
      'All-in-one educational management ecosystem uniting administrators, teachers, parents, and students with real-time academic records and automated terminal report cards.',
    coverImage: '/images/hanaraschools.png',
    year: 2025,
    featured: true,
    accentColor: 'violet',
    status: {
      text: 'Institutional Rollout',
      state: 'production',
    },
    bulletPoints: [
      'Automated Continuous Assessment',
      'Batch PDF Report Compiler',
      'Granular Role-Based Access',
      'Real-Time Academic Transcripts',
      '100% Deterministic GPA Rules',
      'Sub-Second Student Record Queries',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'PDFKit'],
    metrics: [
      { label: 'Reporting Speed', value: '85% Faster' },
      { label: 'Grading Accuracy', value: '100%' },
      { label: 'Role Security', value: 'Granular RBAC' },
      { label: 'PDF Generation', value: 'Sub-second' },
    ],
    liveUrl: 'https://hanaraschools.example.com',
    githubUrl: 'https://github.com/hmfareed/hanara-e-school',
    caseStudy: {
      overview:
        'Hanara Schools System modernized institutional workflows for primary and junior secondary institutions, replacing manual marksheets with an automated continuous assessment engine.',
      problem:
        'End-of-term grading required weeks of error-prone manual calculations and handwritten terminal report cards, delaying results and creating billing disputes.',
      solution:
        'Created a robust role-based system where teachers input continuous assessment scores, the engine calculates percentiles and aggregates automatically, and teachers batch-generate print-ready PDF reports in seconds.',
      architecture: [
        {
          step: '01',
          title: 'Role-Based Access Layer',
          description: 'Dedicated portals for Headmaster, Bursar, Teachers, and Parents with strict authorization.',
        },
        {
          step: '02',
          title: 'Assessment Engine',
          description: 'Calculates standardized scores, grade positions, and GPA ranks deterministically.',
        },
        {
          step: '03',
          title: 'Batch PDF Compiler',
          description: 'Compiles high-resolution, branded terminal report cards for hundreds of students in parallel.',
        },
      ],
      challenges: [
        'Complex grading formula variations across different grade levels and curricula.',
        'High memory efficiency requirements when rendering hundreds of graphic-rich report cards.',
      ],
      outcomes: [
        'Reduced report card compilation turnaround from 2 weeks to under 30 minutes.',
        'Parent engagement increased significantly with instant access to academic performance.',
      ],
    },
  },
  {
    id: '04',
    slug: 'kayspacks',
    title: "Kay's Packs",
    subtitle: 'CUSTOM PACKAGING PLATFORM',
    tagline: 'Bespoke packaging and luxury container e-commerce experience.',
    category: 'E-Commerce',
    description:
      'Custom packaging store featuring parametric volume calculators, dynamic bulk discount tiers, and interactive container specifications.',
    coverImage: '/images/kayspacks.png',
    year: 2025,
    featured: false,
    accentColor: 'rose',
    status: {
      text: 'Active Commerce',
      state: 'active',
    },
    bulletPoints: [
      'Parametric Volume Calculator',
      'Dynamic Bulk Discount Tiers',
      'Interactive 3D Container Specs',
      'Automated Instant Quotations',
      'Frictionless Direct Checkout',
      '60 FPS Reactive Matrix',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Paystack'],
    metrics: [
      { label: 'Volume Tiering', value: 'Dynamic' },
      { label: 'Quote Speed', value: 'Instant' },
      { label: 'UI Responsiveness', value: '60 FPS' },
    ],
    liveUrl: 'https://kayspacks.example.com',
    githubUrl: 'https://github.com/hmfareed/kaypacks',
    caseStudy: {
      overview:
        "Kay's Packs is a specialized digital storefront catering to beauty brands, food vendors, and boutique companies needing custom packaging supplies.",
      problem:
        'Standard e-commerce platforms could not handle custom quantity tiers and dynamic dimensions where price per unit drops based on volume.',
      solution:
        'Engineered an interactive pricing matrix that updates in real time as clients adjust quantities and finish options, streamlining the quotation pipeline.',
      architecture: [
        {
          step: '01',
          title: 'Parametric Pricing Calculator',
          description: 'Client-side reactive price calculation with server-side validation.',
        },
        {
          step: '02',
          title: 'Interactive Product Customizer',
          description: 'Smooth Framer Motion transitions highlighting package finishes and specifications.',
        },
      ],
      challenges: ['Optimizing high-resolution product photography without sacrificing mobile page speeds.'],
      outcomes: ['Boosted quote request conversions with frictionless direct digital orders.'],
    },
  },
  {
    id: '05',
    slug: 'slaybyhumu',
    title: 'Slay by Humu',
    subtitle: 'SALON RESERVATION ENGINE',
    tagline: 'Luxury salon appointment scheduling & stylist booking system.',
    category: 'Web',
    description:
      'Curated appointment booking platform featuring calendar slot reservation, service add-on configurations, automated SMS confirmations, and deposit management.',
    coverImage: '/images/slaybyhumu.png',
    year: 2024,
    featured: false,
    accentColor: 'lime',
    status: {
      text: 'Live Service',
      state: 'production',
    },
    bulletPoints: [
      'Dynamic Time Slot Booking',
      'Automated WhatsApp & SMS Alerts',
      '70% No-Show Reduction Rate',
      'Upfront Mobile Money Deposit',
      'Stylist Schedule Buffer Matrix',
      '< 90s Client Booking Flow',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Supabase'],
    metrics: [
      { label: 'No-Show Rate', value: 'Reduced 70%' },
      { label: 'Booking Flow', value: '< 90 seconds' },
      { label: 'Mobile Traffic', value: '92%' },
    ],
    liveUrl: 'https://slaybyhumu.example.com',
    githubUrl: 'https://github.com/hmfareed/slay-by-humu-store',
    caseStudy: {
      overview:
        'Slay by Humu transformed a busy hair styling boutique from manual WhatsApp messaging into an automated 24/7 self-service reservation engine.',
      problem:
        'Frequent client double-bookings and last-minute cancellations caused schedule voids and lost revenue.',
      solution:
        'Designed an appointment engine with calendar slot reservations, automated buffer windows between appointments, and upfront Mobile Money deposit locks.',
      architecture: [
        {
          step: '01',
          title: 'Calendar Matrix & Time Slot Engine',
          description: 'Calculates active stylist availability considering duration and service add-ons.',
        },
        {
          step: '02',
          title: 'Automated Reminder Queue',
          description: 'Dispatches automated WhatsApp/SMS booking confirmations 24 hours in advance.',
        },
      ],
      challenges: ['Handling time-zone discrepancies and concurrent appointment slot claims gracefully.'],
      outcomes: ['Virtually eliminated scheduling conflicts and reduced client no-shows by 70%.'],
    },
  },
  {
    id: '06',
    slug: 'novelverse',
    title: 'NovelVerse',
    subtitle: 'OFFLINE PUBLISHING HUB',
    tagline: 'Distraction-free episodic fiction reading & publishing platform.',
    category: 'Systems',
    description:
      'Modern web application for indie authors and avid readers featuring customizable reading typography, offline chapter caching, and creator tipping.',
    coverImage: '/images/hanaraschools.png',
    year: 2024,
    featured: false,
    accentColor: 'sky',
    status: {
      text: 'Web App Live',
      state: 'active',
    },
    bulletPoints: [
      'IndexedDB Offline Chapter Caching',
      'Distraction-Free Typography Engine',
      'Real-Time Community Discussions',
      'OLED / Sepia / Dark Reading Themes',
      'Zero Latency Gesture Navigation',
      'Cross-Device Reading Sync',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'IndexedDB'],
    metrics: [
      { label: 'Reading Speed', value: 'Zero Latency' },
      { label: 'Offline Sync', value: 'Full Chapter Cache' },
      { label: 'Themes', value: 'OLED / Sepia / Dark' },
    ],
    liveUrl: 'https://novelverse.example.com',
    githubUrl: 'https://github.com/hmfareed/novelverse',
    caseStudy: {
      overview:
        'NovelVerse is a publishing hub designed specifically for serialized fiction writers and mobile readers, prioritizing typography and clean reading UX.',
      problem:
        'Existing serialized fiction sites are bloated with intrusive ads, broken chapter navigation, and no offline support for subway or travel reading.',
      solution:
        'Crafted a typography-focused progressive web app with IndexedDB local caching, gesture navigation, and real-time community chapter comments.',
      architecture: [
        {
          step: '01',
          title: 'Offline Reading Engine',
          description: 'Pre-caches consecutive chapters in browser IndexedDB for seamless offline reading.',
        },
        {
          step: '02',
          title: 'Typographic Customizer',
          description: 'User-configurable font sizes, line heights, margins, and paper textures.',
        },
      ],
      challenges: ['Ensuring chapter progress bookmarks synchronize across devices without network blocking.'],
      outcomes: ['Delivered average reading session lengths exceeding 40 minutes per active user.'],
    },
  },
];
