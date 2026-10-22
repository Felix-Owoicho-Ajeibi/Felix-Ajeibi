import { ASSETS } from './assets';

export interface Project {
  id: string;
  title: string;
  category: 'Web Design' | 'Financial Markets' | 'AI Automation';
  client: string;
  subtitle: string;
  description: string;
  challenge: string;
  solution: string;
  servicesDelivered: string[];
  techStack: string[];
  image: string;
  liveUrl?: string;
  statusTag: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  serviceDropdownValue: string;
  description: string;
  highlights: string[];
  ctaText: string;
  iconName: 'Layout' | 'Share2' | 'TrendingUp' | 'Cpu';
  disclaimer?: string;
}

export interface SkillGroup {
  name: string;
  category: string;
  description: string;
  skills: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  summary: string;
  deliverables: string[];
}

export const PERSONAL_INFO = {
  fullName: 'Felix Owoicho Ajeibi',
  shortName: 'Felix Ajeibi',
  tagline: 'I design websites, grow brands, and read the markets.',
  intro:
    'With over 6 years of hands-on experience, I help businesses establish an authoritative online presence, optimize digital brand communication, and navigate financial markets through disciplined technical research and AI-assisted workflows.',
  bioParagraph1:
    'I am a multidisciplinary digital professional with 6+ years of experience helping businesses build their online presence, manage digital platforms, improve brand communication, and explore opportunities in financial markets. My approach merges human-centered design aesthetics with reliable technical engineering and practical business pragmatism.',
  bioParagraph2:
    'From building bespoke e-commerce and corporate platforms using WordPress, Elementor, and Shopify to dissecting institutional market structure on the charts, I focus on measurable, high-clarity execution. I don\'t rely on digital buzzwords—I build systems that work, look sharp, and make daily operations simpler.',
  email: 'nexaprodigitalbusinesssolution@gmail.com',
  phoneDisplay: '+234 815 735 7758',
  phoneRaw: '+2348157357758',
  location: 'Nigeria (Serving Global Clients)',
  availability: 'Available for select freelance projects & remote roles',
  whatsappUrl:
    'https://wa.me/2348157357758?text=Hello%20Felix%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20or%20opportunity.',
  socials: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/felix-owoicho-ajeibi',
      handle: 'felix-owoicho-ajeibi',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/felixajeibi',
      handle: 'felixajeibi',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/felix.ajeibi',
      handle: 'felix.ajeibi',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/felixajeibi',
      handle: '@felixajeibi',
    },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'evaxin-international',
    title: 'EVAXin International',
    category: 'Web Design',
    client: 'EVAXin International',
    subtitle: 'High-End E-Commerce Experience & Product Showcase',
    description:
      'Designed and developed a responsive, conversion-focused e-commerce storefront for an international lifestyle and apparel catalog.',
    challenge:
      'The client needed an elevated, international retail platform that combined editorial luxury styling with lightning-fast catalog navigation, mobile cart optimization, and intuitive inventory maintenance.',
    solution:
      'Structured a modern storefront architecture featuring minimalist visual hierarchy, responsive multi-currency catalog browsing, accessible product filters, and streamlined checkout pathways.',
    servicesDelivered: [
      'Store Architecture & UI Layouts',
      'Mobile-First Responsive Layouts',
      'Product Taxonomy & Catalog Structuring',
      'Performance & Image Optimization',
    ],
    techStack: ['Shopify', 'WordPress', 'WooCommerce', 'CSS3', 'Responsive Design'],
    image: ASSETS.evaxinImage,
    liveUrl: 'https://evaxininternational.com',
    statusTag: 'Verified Client Project',
  },
  {
    id: 'emb-trade-logistics',
    title: 'EMB Trade Logistics Nigeria Limited',
    category: 'Web Design',
    client: 'EMB Trade Logistics Nig. Ltd.',
    subtitle: 'Corporate Freight & Haulage Logistics Portal',
    description:
      'Engineered an authoritative corporate presence with streamlined quote requests and multi-modal logistics service showcases.',
    challenge:
      'International and regional freight clients needed clear visibility into logistics capacities, shipment tracking procedures, and a straightforward way to request customized haulage proposals.',
    solution:
      'Crafted an enterprise-grade digital portal with an interactive quotation inquiry flow, service-by-service operational overviews, and reassuring corporate branding aligned to international trade standards.',
    servicesDelivered: [
      'Corporate Web Architecture',
      'Interactive Quote Inquiry Workflows',
      'Brand Identity Digital Adaptation',
      'Cross-Device Performance Tuning',
    ],
    techStack: ['WordPress', 'Elementor', 'PHP', 'CSS3', 'Corporate CMS'],
    image: ASSETS.embLogisticsImage,
    liveUrl: 'https://embtradelogistics.com',
    statusTag: 'Verified Client Project',
  },
  {
    id: 'alimentos-batavia',
    title: 'Alimentos Batavia Limited',
    category: 'Web Design',
    client: 'Alimentos Batavia Limited',
    subtitle: 'Agribusiness & Food Processing Corporate Website',
    description:
      'Built a modern corporate website showcasing sustainable grain processing, farm-to-export supply chains, and investor credentials.',
    challenge:
      'A rapidly growing agro-allied enterprise required a trustworthy digital home to communicate ESG sustainability standards, bulk agro-commodity exports, and facility certifications to institutional partners.',
    solution:
      'Designed an impactful visual narrative with structured product catalogs, high-resolution facility tours, and clear communication channels for international commodity buyers.',
    servicesDelivered: [
      'Responsive Web Development',
      'Agro-Export Product Catalog',
      'Corporate Investor Messaging',
      'Search Engine Optimization (SEO)',
    ],
    techStack: ['WordPress', 'Elementor', 'Custom CSS', 'Content Structuring'],
    image: ASSETS.alimentosBataviaImage,
    liveUrl: 'https://alimentosbatavia.com',
    statusTag: 'Verified Client Project',
  },
  {
    id: 'market-structure-analysis',
    title: 'Market Structure & Price Action Journal',
    category: 'Financial Markets',
    client: 'Market Research Initiative',
    subtitle: 'Institutional Liquidity & Technical Chart Studies',
    description:
      'Structured technical research series and educational breakdown focused on price action, multi-timeframe liquidity runs, and disciplined risk-to-reward ratios.',
    challenge:
      'Retail market participants often suffer from emotional over-trading, lagging indicators, and inconsistent risk frameworks when navigating volatile forex and index instruments.',
    solution:
      'Developed a clean, rule-based price-action journal documenting order flow mechanics, break of structure (BOS), change of character (CHoCH), and liquidity sweeps without misleading indicator clutter.',
    servicesDelivered: [
      'Multi-Timeframe Technical Analysis',
      'Institutional Liquidity Mapping',
      'Educational Price Action Case Studies',
      'Risk Management Framework Documentation',
    ],
    techStack: ['TradingView', 'MetaTrader 5', 'Price Action', 'Market Structure'],
    image: ASSETS.marketAnalysisImage,
    statusTag: 'Verified Market Research',
  },
  {
    id: 'ai-lead-automation',
    title: 'Automated Lead Triage & Social Pipeline',
    category: 'AI Automation',
    client: 'Digital Operations Workflow',
    subtitle: 'AI-Assisted Inquiry Routing & Cross-Platform Content Dispatch',
    description:
      'Implemented practical workflow automations connecting client inquiry forms, intelligent lead qualification, and synchronized social content distribution.',
    challenge:
      'Handling repetitive incoming inquiries and manual cross-posting across social channels consumed multiple hours weekly that could be spent on high-leverage client delivery.',
    solution:
      'Constructed a streamlined webhook pipeline that validates inbound inquiries, drafts structured preliminary briefs, and orchestrates scheduled content queues across brand touchpoints.',
    servicesDelivered: [
      'Workflow Discovery & Process Mapping',
      'AI Prompt Structure for Lead Triage',
      'Multi-App Webhook Integrations',
      'Time-Saving Operations Setup',
    ],
    techStack: ['Make / Zapier', 'Webhooks', 'AI Productivity Tools', 'Airtable'],
    image: ASSETS.aiWorkflowImage,
    statusTag: 'Verified Workflow Case',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-design',
    title: 'Web Design & Development',
    serviceDropdownValue: 'Web Design & Development',
    description:
      'Design and build responsive, professional websites that help businesses communicate clearly and present their services effectively.',
    highlights: [
      'WordPress & Elementor customization',
      'Wix website development',
      'Shopify e-commerce stores',
      'Mobile-first responsive layouts',
      'Website maintenance & content management',
    ],
    ctaText: 'Discuss a Website Project',
    iconName: 'Layout',
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    serviceDropdownValue: 'Social Media Management',
    description:
      'Help brands maintain a consistent social presence through organized content, profile optimization, and audience-focused growth strategies.',
    highlights: [
      'Content planning & calendar management',
      'Social media profile optimization',
      'Content publishing & scheduling',
      'Audience engagement & brand tone',
      'Performance monitoring & insights',
    ],
    ctaText: 'Grow My Brand',
    iconName: 'Share2',
  },
  {
    id: 'financial-analysis',
    title: 'Financial Market Analysis',
    serviceDropdownValue: 'Financial Market Analysis',
    description:
      'Provide structured market research, technical analysis, trade ideas, and educational content to help traders understand market conditions.',
    highlights: [
      'Technical market analysis & chart setups',
      'Price-action & market-structure analysis',
      'Trading education & risk frameworks',
      'Research on relevant financial instruments',
    ],
    ctaText: 'Discuss Market Analysis',
    iconName: 'TrendingUp',
    disclaimer:
      'Market analysis is strictly educational and informational; not guaranteed financial advice or a promise of trading profits.',
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    serviceDropdownValue: 'AI Automation',
    description:
      'Help businesses identify repetitive digital tasks and explore practical AI-assisted workflows that save time and improve operational efficiency.',
    highlights: [
      'Digital workflow discovery & operational audits',
      'AI-assisted content preparation workflows',
      'Business process automation pipelines',
      'Practical AI tool integration where appropriate',
      'Straightforward automation consulting',
    ],
    ctaText: 'Explore Automation',
    iconName: 'Cpu',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: 'Website Design & Development',
    category: 'Engineering & CMS',
    description: 'Modern, responsive layouts engineered for performance, readability, and conversion.',
    skills: ['WordPress', 'Elementor', 'Wix', 'Shopify', 'HTML5', 'CSS3', 'JavaScript'],
  },
  {
    name: 'Design & Digital Marketing',
    category: 'Brand & Visual Strategy',
    description: 'Visual communication and social media frameworks that position brands with authority.',
    skills: [
      'Canva',
      'Adobe Photoshop',
      'Social Media Management',
      'Profile Optimization',
      'Content Planning',
    ],
  },
  {
    name: 'Financial Market Analysis',
    category: 'Market Research & Price Action',
    description: 'Systematic technical research based on market structure and liquidity dynamics.',
    skills: [
      'TradingView',
      'MetaTrader 5',
      'Technical Analysis',
      'Market Structure',
      'Price Action & Liquidity',
    ],
  },
  {
    name: 'AI & Automation',
    category: 'Workflows & Operations',
    description: 'Streamlined automations and AI tooling designed to eliminate repetitive administrative toil.',
    skills: [
      'AI-Assisted Content Creation',
      'Workflow Automation',
      'AI Productivity Tools',
      'Platform Integrations',
    ],
  },
];

export const WORK_PROCESS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    summary: 'Understand the business, audience, and core objectives through a thorough initial consultation.',
    deliverables: ['Goals Alignment', 'Audience Insights', 'Scope Definition'],
  },
  {
    number: '02',
    title: 'Plan',
    summary: 'Define the architectural scope, content structure, visual direction, and key project priorities.',
    deliverables: ['Information Architecture', 'Wireframes / Milestones', 'Content Roadmap'],
  },
  {
    number: '03',
    title: 'Build',
    summary: 'Design, implement, test, and refine the solution across real devices and screen dimensions.',
    deliverables: ['Production Development', 'Mobile Optimization', 'Cross-Browser QA'],
  },
  {
    number: '04',
    title: 'Deliver',
    summary: 'Launch the work cleanly, verify live integrations, and agree on any ongoing operational support.',
    deliverables: ['Live Deployment', 'Walkthrough & Handover', 'Ongoing Maintenance Support'],
  },
];

export const CV_DATA = {
  name: 'Felix Owoicho Ajeibi',
  title: 'Web Designer | Brand Growth Specialist | Market Analyst | AI Automation',
  contact: {
    email: 'nexaprodigitalbusinesssolution@gmail.com',
    phone: '+234 815 735 7758',
    location: 'Nigeria (Available for Remote Work Globally)',
  },
  summary:
    'Dedicated digital professional with over 6 years of proven experience designing modern responsive websites, optimizing brand communication channels, conducting structured financial market analysis, and orchestrating practical AI automations. Combines aesthetic precision with business pragmatism and measurable outcomes.',
  experience: [
    {
      role: 'Lead Digital Strategist & Web Designer',
      organization: 'NexaPro Digital Solutions / Independent Freelance',
      period: '2019 – Present (6+ Years)',
      responsibilities: [
        'Designed, deployed, and maintained custom commercial websites for international and domestic enterprises including EVAXin International, EMB Trade Logistics, and Alimentos Batavia.',
        'Streamlined client acquisition funnels using tailored WordPress, Shopify, and Elementor architectures.',
        'Crafted social media content schedules and profile optimization blueprints to build coherent brand authority.',
        'Audited repetitive manual administrative bottlenecks and deployed AI-assisted workflow pipelines.',
      ],
    },
    {
      role: 'Financial Market Research Analyst',
      organization: 'Independent Market Research & Trading Education',
      period: '2020 – Present',
      responsibilities: [
        'Conducted systematic technical analysis across major currency pairs, indices, and commodities using TradingView and MetaTrader 5.',
        'Mapped institutional market structure, order flow liquidity, and high-probability price-action frameworks.',
        'Authored educational market commentary and risk management guidelines for aspiring market participants.',
      ],
    },
  ],
  education: [
    {
      degree: 'Higher National Diploma / Bachelor equivalent in relevant discipline',
      institution: 'Accredited Tertiary Institution, Nigeria',
      focus: 'Digital Technologies, Business Systems & Applied Computing',
    },
  ],
  coreCompetencies: [
    'Web Architecture (WordPress, Elementor, Wix, Shopify, HTML/CSS)',
    'Responsive Mobile-First UI/UX',
    'Brand Growth & Profile Optimization',
    'Financial Market Technical Analysis (Price Action & Structure)',
    'Practical AI Workflow Automation',
    'Client Communication & Project Management',
  ],
};
