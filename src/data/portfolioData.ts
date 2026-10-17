export interface ProjectItem {
  id: string;
  title: string;
  category: 'Enterprise Systems' | 'Web Applications' | 'Mobile Applications' | 'AI & Research';
  badgeCategory: string;
  tag: string;
  status: string;
  summary: string;
  problem: string;
  role: string;
  architecture: string;
  image: string;
  technologies: string[];
  modules: string[];
  link?: string;
  github?: string;
  isFeatured?: boolean;
}

export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  shortDesc: string;
  desc: string;
  deliverables: string[];
  features: string[];
}

export interface WorkExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  isCurrent?: boolean;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  description?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Sayed Shahloob P',
    brandName: 'Sayed',
    displayName: 'Sayed Shahloob P',
    title: 'Full Stack Developer & Problem Solver',
    roleTag: 'Software Developer, Technical Project Lead & SEO Analyst',
    email: 'sayedshahloobpofficial@gmail.com',
    secondaryEmail: 'sayed3309@gmail.com',
    phone: '+91 9567220971',
    displayPhone: '+91 8309 123 456',
    location: 'Perinthalmanna, Malappuram District, Kerala, India',
    availability: 'Available for opportunities',
    resumeUrl: '/sayed_shahloob_p_resume.pdf',
    photoUrl: '/IMG_0594.JPG.jpeg',
    bio: "I'm a passionate full-stack developer with a strong focus on building scalable, user-friendly, and high-performance web applications. I love turning ideas into real products with clean code and modern technologies.",
    story: "I'm a dedicated full-stack developer who loves creating scalable, efficient, and user-friendly web applications. My journey in tech started with curiosity and a passion for problem-solving, which eventually turned into a profession. I enjoy working with modern technologies, learning new skills, and growing as a developer and as a person.",
    socials: {
      github: 'https://github.com/Sayed4281',
      linkedin: 'https://www.linkedin.com/in/er-sayed-shahloob-p/',
      twitter: 'https://twitter.com',
      instagram: 'https://www.instagram.com/_sayed_4281_?utm_source=qr&igsi=MTA2dW5nZDhyeHN1Yg==',
      whatsapp: 'https://wa.me/919567220971',
      email: 'mailto:sayedshahloobpofficial@gmail.com'
    }
  },

  credibilityStats: [
    { value: '5+', label: 'Projects Completed' },
    { value: '2+', label: 'Years Experience' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support & Communication' }
  ],

  strengths: [
    {
      title: 'Clean Code',
      description: 'Write maintainable, scalable and efficient code.',
      icon: 'code'
    },
    {
      title: 'Problem Solver',
      description: 'Find creative solutions to complex challenges.',
      icon: 'rocket'
    },
    {
      title: 'Continuous Learner',
      description: 'Always exploring new technologies and trends.',
      icon: 'lightbulb'
    },
    {
      title: 'Team Player',
      description: 'Collaborate and build better together.',
      icon: 'users'
    }
  ],

  services: [
    {
      id: 'full-stack-web',
      iconName: 'code',
      title: 'Full Stack Web Development',
      shortDesc: 'Modern, scalable and high-performance web applications using React, Next.js, Node.js and more.',
      desc: 'Architecting end-to-end full stack web platforms with modern reactive frontend frameworks and robust backend databases.',
      deliverables: [
        'SPA & Progressive Web Apps',
        'REST APIs & Database Integration',
        'Clean & Maintainable Code'
      ],
      features: [
        'Next.js 15 App Router SSR/SSG',
        'TypeScript Type-Safe Architecture',
        'Relational & NoSQL Schema Design',
        'Continuous Integration & Deployment'
      ]
    },
    {
      id: 'erp-hrms',
      iconName: 'trending-up',
      title: 'ERP / HRMS Solutions',
      shortDesc: 'Custom ERP and HR management systems to streamline your business operations and workforce.',
      desc: 'Modular enterprise solutions covering multi-tenant organizations, staff lifecycle, payroll automation, and inventory control.',
      deliverables: [
        'Inventory & Stock Management',
        'Employee Management',
        'Reporting & Analytics'
      ],
      features: [
        'Automated Monthly Payroll Engine',
        'GPS Geo-Fenced Staff Check-ins',
        'Multi-Tenant Role-Based Access Control',
        'Financial Ledger & Automated Invoicing'
      ]
    },
    {
      id: 'seo-perf',
      iconName: 'search',
      title: 'SEO & Performance Optimization',
      shortDesc: "Improve your website's visibility and performance with proven SEO strategies and technical optimization.",
      desc: 'Technical SEO audits, Google Core Web Vitals remediation, and structured schema microdata implementation.',
      deliverables: [
        'On-Page & Off-Page SEO',
        'Speed Optimization',
        'Technical SEO Audit'
      ],
      features: [
        'Google Lighthouse 98+ Score Target',
        'JSON-LD Microdata Taxonomy',
        'Sub-second Largest Contentful Paint (LCP)',
        'Search Console Indexing Remediations'
      ]
    },
    {
      id: 'ui-ux',
      iconName: 'palette',
      title: 'UI/UX Design',
      shortDesc: 'Modern and user-friendly designs that provide great user experiences and boost engagement.',
      desc: 'Crafting clean, accessible, and intuitive visual interfaces designed around real user conversion goals.',
      deliverables: [
        'Wireframes & Prototypes',
        'Responsive Design',
        'Branding & Visual Design'
      ],
      features: [
        'Figma High-Fidelity Prototypes',
        'Accessible Component Design Systems',
        'Mobile-First Layout Hierarchy',
        'Micro-Interactions & Transitions'
      ]
    },
    {
      id: 'web-apps',
      iconName: 'globe',
      title: 'Web Applications',
      shortDesc: 'Custom web applications tailored to your unique business requirements.',
      desc: 'Developing specialized web tools, portals, dashboards, and automated management software.',
      deliverables: [
        'Business Portals',
        'Management Systems',
        'API Integrations'
      ],
      features: [
        'Secure JWT / OAuth Authentication',
        'Real-time WebSocket Push Feeds',
        'Exportable PDF & Excel Reports',
        'Robust Form Validation & Caching'
      ]
    },
    {
      id: 'ai-automation',
      iconName: 'cpu',
      title: 'AI & Automation',
      shortDesc: 'Leverage the power of AI and automation to save time, increase productivity and work smarter.',
      desc: 'Integrating artificial intelligence models, smart conversational assistants, and automated workflow triggers.',
      deliverables: [
        'AI Chatbots & Assistants',
        'Workflow Automation',
        'Data Processing & Analytics'
      ],
      features: [
        'Custom Intelligent Chatbot Bots',
        'Automated Webhooks & Notifications',
        'Data Extraction & Formatting Pipelines',
        'LLM API Integration & Fine-Tuning'
      ]
    }
  ],

  projects: [
    {
      id: 'hirush-erp',
      title: 'Hirush ERP — Enterprise Resource Planning',
      category: 'Enterprise Systems',
      badgeCategory: 'ERP System',
      tag: 'Full Stack',
      status: 'Flagship Enterprise Product',
      summary: 'Modular Enterprise Resource Planning system managing staff, automated multi-tier payroll, attendance, CRM pipelines, accounting ledgers, and multi-tenant RBAC governance.',
      problem: 'Organizations struggle with disconnected tools for employee tracking, multi-tier payroll calculation, shift scheduling, and financial ledgers.',
      role: 'Technical Lead & Developer — Led system planning, architecture design, module development, sprint backlogs, and final UAT sign-off.',
      architecture: 'Modular multi-tenant architecture with PostgreSQL relational schemas, Prisma ORM, Next.js 15, and strict Role-Based Access Control (RBAC).',
      image: '/hirush-erp-dashboard.jpg',
      technologies: ['Next.js 15', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'JWT RBAC'],
      modules: [
        'HRMS & Staff Management',
        'Automated Payroll Engine',
        'Attendance & Shift Tracking',
        'CRM & Client Pipelines',
        'Financial Ledger & Invoicing',
        'Role-Based Access (RBAC)'
      ],
      isFeatured: true,
      github: 'https://github.com/Sayed4281'
    },
    {
      id: 'ai-seo-auditor',
      title: 'AI Website SEO Auditor SaaS',
      category: 'AI & Research',
      badgeCategory: 'AI SaaS',
      tag: 'Full Stack AI',
      status: 'Production AI Platform',
      summary: 'Deterministic technical SEO auditing platform featuring real-time crawling, factual metric computations, SSRF protection, and grounded AI-generated executive remediation plans.',
      problem: 'Traditional SEO audit tools generate generic scores without grounded context, actionable remediation code, or enterprise SSRF crawler safety.',
      role: 'Full-Stack & AI Engineer — Engineered the crawler pipeline, rule evaluation engine, Gemini AI prompt grounding, and interactive scoring UI.',
      architecture: 'Asynchronous crawler engine with Cheerio DOM parsing, deterministic heuristic rule checkers, and Google Gemini API integration.',
      image: '/ai-seo-auditor.png',
      technologies: ['Next.js 14', 'TypeScript', 'Gemini AI', 'Tailwind CSS', 'Cheerio', 'SSRF Safe Crawler', 'Framer Motion'],
      modules: [
        'Real-time SSRF-Safe Crawler',
        'Deterministic Technical Scorer',
        'Meta & Heading Tree Verification',
        'Broken Link & Canonical Check',
        'Grounded AI Remediation Plans',
        'Executive PDF Audit Export'
      ],
      isFeatured: true,
      github: 'https://github.com/Sayed4281'
    },
    {
      id: 'vehicle-rto-system',
      title: 'RTO FleetHub — Vehicle Documentation & Payment Management',
      category: 'Enterprise Systems',
      badgeCategory: 'Fleet & RTO',
      tag: 'Enterprise System',
      status: 'Production Fleet System',
      summary: 'Specialized vehicle RTO compliance and payments platform tracking RC status, automated RTO tax deadlines, insurance renewals, permit verification, and payment ledgers.',
      problem: 'Commercial fleet owners experience severe penalties and downtime due to unmonitored RTO tax expiry, insurance renewals, and disorganized physical documents.',
      role: 'Full-Stack Developer — Designed the vehicle compliance tracking matrix, automated renewal notification triggers, and payment reconciliation ledger.',
      architecture: 'Relational fleet database with automated cron jobs monitoring document validity periods, calculating pending taxes, and handling payments.',
      image: '/vehicle-rto-system.png',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Payment Gateway', 'Notification Cron'],
      modules: [
        'Vehicle RC Status Tracking',
        'Automated RTO Tax Calculator',
        'Insurance & Permit Expiry Alerts',
        'Digital Document Locker (342+ Docs)',
        'Payment Reconciliation Ledger',
        'Fleet Compliance Score (94%)'
      ],
      isFeatured: true,
      github: 'https://github.com/Sayed4281'
    },
    {
      id: 'attendance-hrms',
      title: 'HRMS & Payroll Attendance Management System (PWA)',
      category: 'Enterprise Systems',
      badgeCategory: 'HRMS & Payroll',
      tag: 'PWA / Full Stack',
      status: 'Production System',
      summary: 'Dual-module Progressive Web App with GPS-based geo-fencing check-in, shift matrix management, leave approvals, and automated monthly payroll computation.',
      problem: 'Field and remote staff attendance tracking suffered from manual logging errors, buddy punching, and lack of verifiable location check-ins.',
      role: 'Full-Stack Lead — Architected the GPS geo-fencing perimeter validation, offline-first PWA caching, and supervisor approval workflow.',
      architecture: 'Offline-first PWA with Service Workers, browser geolocation API with radius calculation, and real-time backend synchronization.',
      image: '/hrms-payroll-dashboard.jpg',
      technologies: ['React', 'Node.js', 'Firebase', 'PWA', 'GPS Geofencing', 'Tailwind CSS', 'Service Workers'],
      modules: [
        'GPS Geo-fencing Radius Check',
        'Shift Scheduling Matrix',
        'Leave Request & Approval Flow',
        'Automated Payroll Data Export',
        'Offline-First Check-in Cache',
        'Supervisor Verification Portal'
      ],
      isFeatured: false,
      github: 'https://github.com/Sayed4281'
    },
    {
      id: 'video-editor-portfolio',
      title: 'Video Editor & Multimedia Showcase',
      category: 'Web Applications',
      badgeCategory: 'Portfolio Web App',
      tag: 'Creative',
      status: 'Live Production Web App',
      summary: 'High-performance multimedia showcase for video creator Muhammed Dilshad incorporating fluid interaction design, custom video modal lightboxes, and smooth layout transitions.',
      problem: 'Traditional portfolio templates struggled to showcase high-resolution video reels without dragging down page performance and Core Web Vitals.',
      role: 'Frontend Developer — Designed responsive component hierarchy and optimized asset loading pipelines for sub-second page interaction.',
      architecture: 'Lazy-loaded video players with progressive poster frame pre-fetching, dynamic video modal, and Framer Motion layout transitions.',
      image: '/dilshad.png',
      technologies: ['React.js', 'Framer Motion', 'Tailwind CSS', 'GSAP Animation', 'Vite'],
      modules: [
        'Fluid Interaction Design',
        'Custom Video Lightbox Modal',
        'Framer Motion Transitions',
        'Lazy-loaded Video Pipelines',
        'High-Res Asset Pre-fetching',
        'Ultra-Responsive Layouts'
      ],
      isFeatured: false,
      link: 'https://muhammed-dilshad-p.vercel.app/'
    },
    {
      id: 'seo-strategist-portfolio',
      title: 'SEO Strategist Personal Brand Portal',
      category: 'Web Applications',
      badgeCategory: 'SEO Portal',
      tag: 'Web App',
      status: 'Live Production Web App',
      summary: 'High-performance personal brand portal for Haron Saeed engineered for search engine indexability, achieving 98+ Google Lighthouse scores with rich schema markup.',
      problem: 'Digital portfolio required exceptional Core Web Vitals performance, automated social preview cards, and comprehensive schema taxonomy.',
      role: 'Frontend Engineer & SEO Specialist — Implemented technical SEO architecture, structured data JSON-LD, and responsive design.',
      architecture: 'Static site generation with pre-rendered semantic HTML, optimized WebP imagery, and schema.org microdata.',
      image: '/haron.png',
      technologies: ['React.js', 'Tailwind CSS', 'Technical SEO', 'Vite', 'Schema JSON-LD'],
      modules: [
        '98+ Google Lighthouse Score',
        'Schema.org JSON-LD Taxonomy',
        'Automated OpenGraph Cards',
        'Core Web Vitals Optimization',
        'Pre-rendered Semantic HTML',
        'Ultra-Fast CDN Delivery'
      ],
      isFeatured: false,
      link: 'https://haronsaeed.vercel.app/'
    },
    {
      id: 'restaurant-pos',
      title: 'Restaurant Kitchen & Order Management System',
      category: 'Enterprise Systems',
      badgeCategory: 'POS & KDS',
      tag: 'Real-time System',
      status: 'Completed Solution',
      summary: 'Real-time order management application streamlining kitchen display tickets, table status mapping, split billing, and inventory synchronization.',
      problem: 'Kitchen staff and waitstaff communication delays caused inaccurate order tracking during rush hours.',
      role: 'Frontend & WebSocket Developer — Implemented Kitchen Display System (KDS) live sync and interactive table layout maps.',
      architecture: 'Event-driven WebSocket architecture broadcasting table state updates instantaneously across POS and kitchen displays.',
      image: '/restaurant-pos-kds.jpg',
      technologies: ['React.js', 'TypeScript', 'PostgreSQL', 'Redux Toolkit', 'WebSockets', 'Tailwind CSS'],
      modules: [
        'Live Table Color Map',
        'KDS Kitchen Display Tickets',
        'Split Bill Calculations',
        'Inventory Depletion Alerts',
        'WebSocket Instant Broadcasts',
        'POS Cashier Synchronization'
      ],
      isFeatured: false,
      github: 'https://github.com/Sayed4281'
    }
  ] as ProjectItem[],

  workExperience: [
    {
      role: 'Jr. Software Engineer',
      company: 'Hirush Global LLP',
      location: 'Malappuram, Kerala',
      period: 'Nov 2025 – Present',
      type: 'Full-time',
      isCurrent: true,
      responsibilities: [
        'Architected & delivered core Hirush ERP modules: HRMS, automated payroll, CRM pipelines, attendance, and multi-tenant RBAC.',
        'Managing dev team sprint backlogs, daily standups, code reviews, and quality audits.',
        'Bridging stakeholder business workflows with technical execution and UAT release sign-offs.'
      ],
      technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Sprint Leadership', 'RBAC Security']
    },
    {
      role: 'Software Developer',
      company: 'Pro26 LLP',
      location: 'Remote',
      period: 'May 2025 – Present',
      type: 'Part-time',
      isCurrent: true,
      responsibilities: [
        'Engineered responsive, fluid component systems and cross-platform Flutter layouts.',
        'Integrated real-time Firebase backend services, authentication flows, and RESTful APIs.'
      ],
      technologies: ['React.js', 'Flutter', 'TypeScript', 'Firebase', 'State Management', 'REST APIs']
    },
    {
      role: 'SEO Analyst',
      company: 'Hirush Global LLP',
      location: 'Malappuram, Kerala',
      period: 'Feb 2025 – Nov 2025',
      type: 'Full-time / Strategy',
      isCurrent: false,
      responsibilities: [
        'Boosted organic search indexability and Core Web Vitals scores across production web systems.',
        'Engineered rich JSON-LD microdata schemas and optimized sub-second Largest Contentful Paint (LCP).'
      ],
      technologies: ['Technical SEO', 'Schema JSON-LD', 'Google Search Console', 'Core Web Vitals', 'Lighthouse 98+']
    },
    {
      role: 'Application Manager',
      company: 'Eduthalim International Educational Consultancy',
      location: 'Manjeri, Kerala',
      period: 'Aug 2025 – Oct 2025',
      type: 'Contract / Full-time',
      isCurrent: false,
      responsibilities: [
        'Managed application deployment schedules, stakeholder feedback, and change requests.',
        'Facilitated User Acceptance Testing (UAT) sessions and system readiness checks before go-live.'
      ],
      technologies: ['Application Management', 'Requirements Gathering', 'Stakeholder Coordination', 'UAT Testing']
    }
  ],

  education: [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'MEA Engineering College, Kerala',
      location: 'Kerala, India',
      period: '2021 – 2025',
      grade: 'CGPA: 8.08 / 10',
      description: 'Comprehensive study in algorithms, data structures, DBMS, system architecture, and software engineering.'
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Govt. Higher Secondary School, Kerala',
      location: 'Kerala, India',
      period: '2019 – 2021',
      grade: 'Percentage: 92%',
      description: 'Major in Physics, Chemistry, Mathematics, and Computer Science.'
    },
    {
      degree: 'SSLC (Secondary School Leaving Certificate)',
      institution: 'Govt. High School, Kerala',
      location: 'Kerala, India',
      period: '2019',
      grade: 'Percentage: 90%',
      description: 'Foundational academic honors with high distinction.'
    }
  ],

  techStack: [
    { name: 'React', category: 'Frontend', icon: 'react' },
    { name: 'Next.js', category: 'Frontend', icon: 'nextjs' },
    { name: 'TypeScript', category: 'Frontend', icon: 'typescript' },
    { name: 'Tailwind CSS', category: 'Frontend', icon: 'tailwind' },
    { name: 'JavaScript', category: 'Frontend', icon: 'javascript' },
    { name: 'Node.js', category: 'Backend', icon: 'nodejs' },
    { name: 'Express.js', category: 'Backend', icon: 'express' },
    { name: 'Python', category: 'Backend', icon: 'python' },
    { name: 'Firebase', category: 'Backend', icon: 'firebase' },
    { name: 'PostgreSQL', category: 'Databases', icon: 'postgresql' },
    { name: 'MongoDB', category: 'Databases', icon: 'mongodb' },
    { name: 'Supabase', category: 'Databases', icon: 'supabase' },
    { name: 'Technical SEO', category: 'SEO & Optimization', icon: 'seo' },
    { name: 'Google Search Console', category: 'SEO & Optimization', icon: 'gsc' },
    { name: 'Google Business Profile', category: 'SEO & Optimization', icon: 'gbp' },
    { name: 'Git', category: 'Tools', icon: 'git' },
    { name: 'Figma', category: 'Tools', icon: 'figma' },
    { name: 'Docker', category: 'Cloud & Deployment', icon: 'docker' },
    { name: 'Vercel', category: 'Cloud & Deployment', icon: 'vercel' }
  ],

  workflowSteps: [
    {
      step: '01',
      title: 'Understand Your Needs',
      desc: 'We discuss your goals, ideas and requirements in detail.',
      icon: 'message'
    },
    {
      step: '02',
      title: 'Plan & Design',
      desc: 'I create a clear plan and modern design for your project.',
      icon: 'lightbulb'
    },
    {
      step: '03',
      title: 'Development',
      desc: 'I build your solution using best practices and latest tech.',
      icon: 'code'
    },
    {
      step: '04',
      title: 'Test & Review',
      desc: 'We do thorough testing to ensure quality and performance.',
      icon: 'shield'
    },
    {
      step: '05',
      title: 'Launch & Support',
      desc: 'We deploy your project and provide ongoing support.',
      icon: 'rocket'
    }
  ]
};
