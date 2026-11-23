
export const PROJECTS : { title: string; description: string; technologies: string[]; githubLink: string; liveLink: string; screenshot: string }[] = [
  {
    title: 'Imaradesk',
    description:
      'Open-source, self-hosted helpdesk platform rivaling Zendesk & Freshdesk. Features smart ticket routing, SLA tracking, multi-channel inbox (email, chat, Telegram), automation engine, asset management, CSAT surveys, and real-time analytics. MIT licensed with Docker/Kubernetes deployment.',
    technologies: ['Django', 'React', 'Inertia.js', 'Docker', 'Microservices'],
    githubLink: 'https://github.com/imaradesk/imaradesk-os',
    liveLink: 'https://imaradesk.com',
    screenshot: `https://s.wordpress.com/mshots/v1/https%3A%2F%2Fimaradesk.com?w=800&h=500`,
  },
  {
    title: 'DoveORM',
    description:
      'Lightweight, security-hardened Python ORM for SQLite, MySQL/MariaDB and PostgreSQL. Inspired by Django, Spring Boot & ActiveRecord — featuring auto-generated reversible migrations, dynamic finders, chainable lazy QuerySets, relationships with eager loading, nested transactions, and safe-by-default protections against SQL injection and mass assignment. MIT licensed, published on PyPI.',
    technologies: ['Python', 'SQLite', 'MySQL', 'PostgreSQL', 'CLI'],
    githubLink: 'https://github.com/imaradesk/doveorm',
    liveLink: 'https://doveorm.imaradesk.com',
    screenshot: `https://s.wordpress.com/mshots/v1/https%3A%2F%2Fdoveorm.imaradesk.com?w=800&h=500`,
  },
  {
    title: 'Makao Smart',
    description:
      'Property management platform built for the African market. Automates rent collection, tenant onboarding, maintenance tracking, lease management, and financial reporting. Integrated with M-Pesa, Equity Bank, KCB, Co-op Bank, and other Kenyan payment providers. Serving 500+ properties.',
    technologies: ['Django', 'Spring Boot', 'React', 'Docker'],
    githubLink: '',
    liveLink: 'https://makaosmart.org',
    screenshot: `https://s.wordpress.com/mshots/v1/https%3A%2F%2Fmakaosmart.org?w=800&h=500`,
  },
  // {
  //   title: 'Imarachat',
  //   description:
  //     'Real-time live chat and messaging platform for customer support teams. Embeddable chat widgets, agent dashboards, conversation routing, and seamless integration with the Imaradesk ticketing ecosystem. Enables instant customer engagement across websites and apps.',
  //   technologies: ['Spring Boot', 'React', 'WebSocket', 'Docker', 'Microservices'],
  //   githubLink: '',
  //   liveLink: 'https://imaradesk.com/products/imarachat',
  //   screenshot: `https://s.wordpress.com/mshots/v1/https%3A%2F%2Fimaradesk.com%2Fproducts%2Fimarachat?w=800&h=500`,
  // },
  {
    title: 'FarmDoctor AI',
    description:
      'AI-powered mobile app empowering Kenyan farmers with crop disease diagnostics, real-time weather alerts, community support, dealer directory, farm management tools, pest outbreak maps, and marketplace. Features camera-based diagnosis, AI chat assistant, and analytics dashboards.',
    technologies: ['Flutter', 'AI', 'Django', 'WebSocket'],
    githubLink: '',
    liveLink: 'https://farmdokta.coredesk.pro',
    screenshot: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Ffarmdokta.coredesk.pro?w=800&h=500',
  },
  {
    title: 'Imaradesk Whatsapp Assistant',
    description:
      'Imaradesk Whatsapp Assistant transforms WhatsApp into an intelligent helpdesk channel. It routes incoming messages through AI-powered chatbot flows, classifies intent, searches a vector-embedded knowledge base, and escalates to human agents when needed — all with sub-100ms database latency via multi-region geo-routing.',
    technologies: ['Node.js', 'AI', 'AWS services', 'WebSocket', 'Next.js'],
    githubLink: '',
    liveLink: 'https://imaradesk-ai.vercel.app',
    screenshot: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fimaradesk-ai.vercel.app?w=800&h=500',
  },
];
