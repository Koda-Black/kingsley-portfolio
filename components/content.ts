export type Project = {
  name: string;
  eyebrow: string;
  description: string;
  image: string;
  url: string;
  stack: string[];
  tone: string;
};

export const projects: Project[] = [
  { name: "Aera", eyebrow: "Company building", description: "A polished digital home for a new way to build ambitious companies and teams.", image: "/projects/aera.png", url: "https://www.aera.llc", stack: ["Next.js", "TypeScript", "Product"], tone: "lavender" },
  { name: "FarmSat", eyebrow: "Agri intelligence", description: "Satellite crop-risk intelligence with an AI-agent point of view for faster farm decisions.", image: "/projects/farmsat.png", url: "https://farmsat-frontend.vercel.app", stack: ["React", "TypeScript", "AI", "Geospatial"], tone: "mint" },
  { name: "BorderMind AI", eyebrow: "Trade compliance", description: "AI-powered customs and export compliance software designed to remove blind spots.", image: "/projects/bordermind.png", url: "https://bordermind-ai.vercel.app", stack: ["React", "Node.js", "AI", "SaaS"], tone: "coral" },
  { name: "ChangeLedger", eyebrow: "Regulatory intelligence", description: "AI regulatory-change intelligence and workflow tooling for modern SaaS businesses.", image: "/projects/changeledger.png", url: "https://changeledger.vercel.app", stack: ["React", "Node.js", "AI", "Workflow"], tone: "yellow" },
  { name: "Edu Learning & Immersion", eyebrow: "Language education", description: "A multilingual learning platform for language, communication and digital solutions.", image: "/projects/edu-learning.png", url: "https://www.edulearningimmersion.org/en", stack: ["Next.js", "TypeScript", "Education"], tone: "blue" },
  { name: "Fitness Space", eyebrow: "Wellness platform", description: "Scalable wellness infrastructure, personalized guidance and Bibi AI for healthier daily habits.", image: "/fitnessspace.png", url: "https://getfitness.space", stack: ["Node.js", "MongoDB", "Redis", "AWS", "AI"], tone: "lavender" },
  { name: "FarmShare Marketplace", eyebrow: "Agricultural commerce", description: "A pooled-buying marketplace connecting Nigerian farmers, vendors and buyers.", image: "/farmshare.png", url: "https://farmshare-marketplace.vercel.app", stack: ["Next.js", "NestJS", "PostgreSQL"], tone: "mint" },
  { name: "DevRise Academy", eyebrow: "Developer education", description: "Structured learning paths and mentorship helping professionals transition into technology.", image: "/devrise.png", url: "https://thedevrise.com", stack: ["Next.js", "TypeScript", "Node.js"], tone: "blue" },
  { name: "Yarna Suite", eyebrow: "Fintech & commerce", description: "Cross-platform products and backend systems built for fintech and commerce at scale.", image: "/yarna.png", url: "https://yarnaclient.onrender.com", stack: ["React", "React Native", "Node.js", "GCP"], tone: "purple" },
  { name: "Natours", eyebrow: "Travel platform", description: "A tour-booking product with authentication, payments, reviews and real-time availability.", image: "/projects/natours.png", url: "https://natours-us.onrender.com", stack: ["Node.js", "MongoDB", "Express", "Stripe"], tone: "coral" },
];

export const articles = [
  {
    publication: "THISDAY",
    date: "August 29, 2026",
    title: "Kingsley Onuorah Engineers Fitness Space To Extend Beyond WhatsApp Groups",
    summary: "How Fitness Space translated years of real-world behavior, accountability and personalization into scalable product infrastructure and Bibi AI.",
    url: "https://www.thisdaylive.com/2026/08/29/kingsley-onuorah-engineers-fitness-space-to-extend-beyond-whatsapp-groups/",
  },
];

export const navigation = [
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Experience", "/experience"],
  ["Journal", "/journal"],
  ["Contact", "/contact"],
] as const;
