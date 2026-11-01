import { ServiceItem, TeamMember, SkillItem, ProjectItem, LearningTask, FAQItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    tagline: 'Modernize traditional workflows into scalable digital ecosystems.',
    description: 'We audit legacy operations, eliminate paperwork bottlenecks, and implement tailored digital tools that accelerate operational efficiency without disrupting ongoing operations.',
    iconName: 'transform',
    features: [
      'Operational workflow audits & digital gap analysis',
      'Automated cloud data pipelines & custom dashboards',
      'Seamless migration from legacy spreadsheets to custom apps',
      'Employee onboarding & zero-jargon digital training'
    ],
    deliverables: ['Custom Operations Portal', 'System Architecture Roadmap', 'Process Automation Scripting'],
    gradient: 'from-blue-600 to-cyan-500'
  },
  {
    id: 'website-development',
    title: 'Website Development',
    tagline: 'Engineered for speed, conversion, and impeccable responsive performance.',
    description: 'Turn your business concept into a lightning-fast, high-converting web platform. Built with modern web standards, semantic HTML, and responsive mobile-first architecture.',
    iconName: 'web',
    features: [
      'Custom React & TypeScript modern web applications',
      'High-performance SEO architecture & Core Web Vitals optimization',
      'Interactive client portals & dynamic booking systems',
      'Responsive design supporting mobile, tablet, and desktop'
    ],
    deliverables: ['Production Web Application', 'SEO & Performance Audit', 'Cross-Browser Verification Suite'],
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    tagline: 'Intuitive user journeys crafted for non-technical end users.',
    description: 'Great software feels effortless. We craft human-centric interfaces, accessible color contrast palettes, and interactive prototypes that make complex systems feel intuitive.',
    iconName: 'design',
    features: [
      'User journey mapping & customer empathy research',
      'High-fidelity interactive Figma wireframes and prototypes',
      'Design systems with reusable tokenized component libraries',
      'WCAG 2.1 AA accessibility compliance testing'
    ],
    deliverables: ['Design System Tokens', 'Clickable Prototype', 'Usability Testing Report'],
    gradient: 'from-purple-600 to-blue-600'
  },
  {
    id: 'technology-consulting',
    title: 'Technology Consulting',
    tagline: 'Plain-English technical strategy and architecture roadmaps.',
    description: 'No technical founder? No problem. We serve as your fractional technical co-founder, demystifying cloud choices, hosting options, and software vendor evaluations without acronyms.',
    iconName: 'consulting',
    features: [
      'Tech stack selection tailored to your real budget and goals',
      'Vendor & third-party software cost evaluation',
      'Data security, privacy compliance & cloud risk mitigation',
      'Product roadmapping from MVP to Series A scale'
    ],
    deliverables: ['Technology Architecture Blueprint', 'Vendor Cost Comparison', 'Product Roadmap Matrix'],
    gradient: 'from-blue-700 to-indigo-600'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Elena Rostova',
    role: 'Founder & Chief Innovation Strategist',
    bio: 'Former retail operations director who transitioned into tech after launching her first SaaS. Passionate about empowering non-tech visionaries.',
    specialty: 'Product Strategy & Digital Transformation',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Marcus Vance',
    role: 'Head of Engineering & Architecture',
    bio: 'Senior full-stack architect with 12+ years building accessible web systems. Specializes in turning complex concepts into lightweight software.',
    specialty: 'Web Systems & Performance',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Aria Thorne',
    role: 'Lead UI/UX Designer',
    bio: 'Champion of humane technology. Believes software should feel natural, accessible to all abilities, and visually uplifting.',
    specialty: 'Design Systems & User Research',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Devon Patel',
    role: 'Client Success & Tech Educator',
    bio: 'Dedicated to translating jargon into actionable steps. Guides traditional business owners through their digital transformation journey.',
    specialty: 'Curriculum & Hands-on Mentorship',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  }
];

export const SKILLS: SkillItem[] = [
  { name: 'HTML5', level: 98, category: 'Frontend', highlight: 'Semantic structure, accessibility, microdata' },
  { name: 'CSS3', level: 94, category: 'Frontend', highlight: 'Grid, Flexbox, animations, responsive layouts' },
  { name: 'JavaScript', level: 91, category: 'Frontend', highlight: 'ESNext, DOM manipulation, asynchronous state' },
  { name: 'Responsive Web Design', level: 96, category: 'Frontend', highlight: 'Fluid typography, touch targets, multi-device' },
  { name: 'UI/UX Design', level: 89, category: 'Design', highlight: 'User flows, information hierarchy, design systems' },
  { name: 'Figma', level: 87, category: 'Design', highlight: 'Component libraries, auto-layout, prototypes' },
  { name: 'Problem Solving', level: 98, category: 'Core', highlight: 'Deconstructing business needs into simple software' }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'startup-landing-page',
    title: 'Startup Landing Page',
    tagline: 'High-conversion interactive SaaS showcase',
    description: 'Designed and developed a sleek, responsive landing page for an AI analytics platform. Features dynamic light themes, accessible accordions, interactive conversion calculators, and crisp micro-animations.',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Web Vitals'],
    imageUrl: '/images/project-startup.jpg',
    metrics: '+184% Conversion Rate',
    liveDemoType: 'landing'
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio Website',
    tagline: 'Bespoke digital identity for creators',
    description: 'Crafted a standout personal portfolio highlighting technical capabilities, case studies, and interactive contact touchpoints with custom typography and zero external heavyweight UI bloat.',
    technologies: ['HTML5', 'CSS3', 'JavaScript ES6+', 'SVG Graphics'],
    imageUrl: '/images/project-portfolio.jpg',
    metrics: '99/100 Lighthouse Performance',
    liveDemoType: 'portfolio'
  },
  {
    id: 'interactive-js-app',
    title: 'Interactive JavaScript Application',
    tagline: 'Real-time client-side analytics dashboard',
    description: 'Engineered an interactive analytics and metrics control panel with live filtering, stateful data widgets, dynamic charting simulation, and accessible keyboard shortcuts.',
    technologies: ['JavaScript', 'DOM API', 'HTML5 Canvas', 'CSS Grid'],
    imageUrl: '/images/project-interactive.jpg',
    metrics: '<15ms Response Time',
    liveDemoType: 'app'
  }
];

export const LEARNING_TASKS: LearningTask[] = [
  {
    id: 'task-1',
    number: 1,
    title: 'Build a Simple Static Website',
    description: 'Develop a multi-page static website using clean HTML and CSS, mastering semantic document structure and responsive layouts.',
    objectives: [
      'HTML page structure with semantic header, main, and footer elements',
      'CSS styling with flexbox and grid layouts',
      'Sticky navigation bar with active indicators',
      'Optimized images and multi-column footer',
      'Responsive design adapting from mobile to wide screens'
    ],
    technologies: ['HTML5', 'CSS3'],
    ctaText: 'Preview Static Website',
    modalType: 'static'
  },
  {
    id: 'task-2',
    number: 2,
    title: 'Create a Portfolio Webpage',
    description: 'Build a personal portfolio website to showcase skills, interactive project galleries, and professional identity.',
    objectives: [
      'Single-page layout with smooth section scrolling',
      'Engaging introduction section with tailored typography',
      'Interactive skills bars and project showcase cards',
      'Accessible contact information and social handles',
      'Custom typography, curated color palettes, and CSS animations'
    ],
    technologies: ['HTML5', 'CSS3'],
    ctaText: 'Preview Portfolio',
    modalType: 'portfolio'
  },
  {
    id: 'task-3',
    number: 3,
    title: 'Introduction to JavaScript',
    description: 'Introduce JavaScript to make websites interactive and dynamic through functional state, event listeners, and live DOM validation.',
    objectives: [
      'JavaScript functions and modular code structure',
      'Event listeners for clicks, keyboard events, and mouse triggers',
      'Dropdown menus and tab switchers',
      'Interactive accessible modals with backdrop dismiss',
      'Form handling and real-time input validation'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    ctaText: 'Try Interactive Demo',
    modalType: 'js'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'I have zero technical background. Can I really launch a digital product?',
    answer: 'Absolutely. Over 80% of our successful founders started with no coding experience. We translate complex software terminology into plain, pragmatic language and guide you through idea validation, wireframing, architecture choices, and launch.'
  },
  {
    question: 'How long does a digital transformation or MVP launch typically take?',
    answer: 'A focused MVP or high-converting digital landing platform typically launches within 4 to 8 weeks. Comprehensive enterprise digital transformation roadmaps are delivered in modular 30-day sprint milestones.'
  },
  {
    question: 'What happens after our digital product is built and launched?',
    answer: 'We provide structured documentation, hands-on team training, and ongoing technical guidance. You retain full 100% ownership of your codebase, domain, and data assets.'
  },
  {
    question: 'Do you work with traditional, brick-and-mortar businesses?',
    answer: 'Yes! Some of our most rewarding projects come from logistics, manufacturing, retail, and professional services companies looking to modernize their legacy operations and capture online growth.'
  },
  {
    question: 'What technologies do you use for web development?',
    answer: 'We leverage modern, durable web technologies including React 19, TypeScript, modern CSS, and cloud platforms. We prioritize speed, security, and maintainability over short-lived hype.'
  }
];

export const STATS = [
  { value: 50, suffix: '+', label: 'Ideas Launched', subtext: 'Transformed into working digital reality' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', subtext: 'Based on post-launch founder reviews' },
  { value: 12, suffix: '', label: 'Industry Sectors', subtext: 'Retail, healthcare, logistics & more' },
  { value: 100, suffix: '%', label: 'Human Approach', subtext: 'Zero confusing technical jargon' }
];
