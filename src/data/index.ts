import { Project, Skill, Certification, NavLink, SocialLink } from '@/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'GitHub', href: '#github' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Gana-Y', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ganesh-yandigeri-988821287', icon: 'linkedin' },
  { label: 'Twitter', href: 'https://x.com/Ganesh821060', icon: 'twitter' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/Ganesh_Op/', icon: 'code' },
  { label: 'Email', href: 'mailto:ganeshyandigeri1@gmail.com', icon: 'mail' },
];

export const SKILLS: Skill[] = [
  // Languages
  { name: 'Python', category: 'Languages', level: 95, icon: '🐍', color: '#3776AB' },
  { name: 'JavaScript', category: 'Languages', level: 85, icon: '🟨', color: '#F7DF1E' },
  { name: 'TypeScript', category: 'Languages', level: 82, icon: '🔷', color: '#3178C6' },
  { name: 'SQL', category: 'Languages', level: 84, icon: '🗃️', color: '#336791' },

  // AI / ML
  { name: 'RAG Pipelines', category: 'AI/ML', level: 92, icon: '📚', color: '#7c3aed' },
  { name: 'ChromaDB', category: 'AI/ML', level: 90, icon: '🟣', color: '#8B5CF6' },
  { name: 'Google Gemini API', category: 'AI/ML', level: 92, icon: '✨', color: '#4285F4' },
  { name: 'Semantic Embeddings', category: 'AI/ML', level: 88, icon: '🧠', color: '#06B6D4' },
  { name: 'Prompt Engineering', category: 'AI/ML', level: 90, icon: '🎯', color: '#10B981' },
  { name: 'PyTorch', category: 'AI/ML', level: 80, icon: '🔥', color: '#EE4C2C' },

  // Backend & Systems
  { name: 'FastAPI', category: 'Backend', level: 92, icon: '⚡', color: '#009688' },
  { name: 'AsyncIO & WebSockets', category: 'Backend', level: 88, icon: '🔄', color: '#3B82F6' },
  { name: 'Low-Latency Design', category: 'Backend', level: 85, icon: '⏱️', color: '#EC4899' },
  { name: 'REST APIs & Microservices', category: 'Backend', level: 90, icon: '🌐', color: '#6366F1' },
  { name: 'Flask', category: 'Backend', level: 80, icon: '🌶️', color: '#000000' },
  { name: 'Node.js', category: 'Backend', level: 75, icon: '🟢', color: '#339933' },

  // Databases
  { name: 'PostgreSQL', category: 'Databases', level: 84, icon: '🐘', color: '#336791' },
  { name: 'MongoDB', category: 'Databases', level: 80, icon: '🍃', color: '#47A248' },
  { name: 'Redis', category: 'Databases', level: 82, icon: '🔴', color: '#DC382D' },

  // Tools & Infra
  { name: 'Docker', category: 'Tools', level: 82, icon: '🐳', color: '#2496ED' },
  { name: 'Git', category: 'Tools', level: 90, icon: '📦', color: '#F05032' },
  { name: 'Linux', category: 'Tools', level: 85, icon: '🐧', color: '#FCC624' },
  { name: 'Pytest & CI/CD', category: 'Tools', level: 85, icon: '🧪', color: '#0A9EDC' },
];

export const SKILL_CATEGORIES = ['All', 'Languages', 'AI/ML', 'Backend', 'Databases', 'Tools'];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Florix AI — Full-Stack AI Academic Engine & RAG Platform',
    description:
      'Full-stack AI academic engine ingesting multi-format sources (PDFs, YouTube transcripts, web articles) to generate adaptive quizzes and active-recall flashcards using Google Gemini. Features a ChromaDB RAG pipeline (HNSW index) with sub-200ms semantic retrieval, SQLite fallback, and an asynchronous REST API secured with JWT auth, RBAC, and SlowAPI rate limiting across 15+ relational tables.',
    techStack: ['Python', 'FastAPI', 'Google Gemini API', 'ChromaDB', 'SQLAlchemy', 'React 19', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Gana-Y/Florix_AI',
    liveUrl: 'https://florix-4rkmoj877-ganesh-y-s-projects.vercel.app',
    imageUrl: '/images/florix-ai.png',
    tags: ['Multimodal RAG', 'Vector Search (ChromaDB)', 'Google Gemini', 'Full-Stack'],
    featured: true,
    status: 'Complete',
  },
  {
    id: '2',
    title: 'OrderCore — Limit Order Book & Matching Engine',
    description:
      'Single-symbol matching engine with strict price-time priority supporting LIMIT, MARKET, IOC, and FOK order types, pre-trade risk checks, and self-trade prevention. Designed using a heap-indexed price-level structure with O(1) amortised cancellations, achieving 136,000 orders/sec throughput and 4.3 µs median match latency. Features a REST order-entry API and WebSocket depth streaming.',
    techStack: ['Python', 'FastAPI', 'AsyncIO', 'WebSockets', 'Pytest', 'Low-Latency Design'],
    githubUrl: 'https://github.com/Gana-Y/OrderCore',
    liveUrl: '#',
    imageUrl: '/images/ordercore.png',
    tags: ['FinTech', 'Low-Latency', 'AsyncIO / WebSockets', '136k Orders/sec'],
    featured: true,
    status: 'Complete',
  },
  {
    id: '3',
    title: 'MedAI Diagnosis Assistant',
    description:
      'An AI-powered medical diagnosis assistant leveraging large language models and computer vision to analyze symptoms and medical imaging. Integrates RAG pipeline for evidence-based recommendations.',
    techStack: ['Python', 'LangChain', 'FastAPI', 'PyTorch', 'OpenCV', 'MongoDB', 'React'],
    githubUrl: 'https://github.com/Gana-Y',
    liveUrl: '#',
    imageUrl: '/images/project-1.jpg',
    tags: ['Healthcare AI', 'LLM', 'Computer Vision'],
    featured: false,
    status: 'In Progress',
  },
  {
    id: '4',
    title: 'FinSight — Market Intelligence',
    description:
      'Real-time financial market analysis tool using NLP to parse earnings calls, news sentiment, and SEC filings. Generates AI-driven investment insights with explainable predictions.',
    techStack: ['Python', 'HuggingFace', 'FastAPI', 'PostgreSQL', 'React', 'Docker'],
    githubUrl: 'https://github.com/Gana-Y',
    liveUrl: '#',
    imageUrl: '/images/project-2.jpg',
    tags: ['FinTech', 'NLP', 'Sentiment Analysis'],
    featured: false,
    status: 'Building',
  },
  {
    id: '5',
    title: 'Neural Document Q&A System',
    description:
      'A RAG-based document intelligence system that ingests PDFs, research papers, and knowledge bases, enabling semantic search and conversational querying with citation tracking.',
    techStack: ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'FastAPI', 'Next.js'],
    githubUrl: 'https://github.com/Gana-Y',
    liveUrl: '#',
    imageUrl: '/images/project-3.jpg',
    tags: ['RAG', 'LLM', 'Vector DB'],
    featured: false,
    status: 'Planned',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: '1',
    title: 'OCI 2025 Certified Generative AI Professional',
    issuer: 'Oracle University',
    date: 'Oct 2025',
    credentialUrl: '#',
    icon: '🏆',
    color: 'from-orange-600/20 to-red-600/10',
  },
  {
    id: '2',
    title: 'OCI 2025 AI Foundations Associate',
    issuer: 'Oracle University',
    date: 'Aug 2025',
    credentialUrl: '#',
    icon: '🔮',
    color: 'from-red-600/20 to-orange-600/10',
  },
  {
    id: '3',
    title: 'Software Engineering Job Simulation',
    issuer: 'JPMorgan Chase · Forage',
    date: 'Sep 2025',
    credentialUrl: '#',
    icon: '🏦',
    color: 'from-blue-600/20 to-indigo-600/10',
  },
  {
    id: '4',
    title: 'Crash Course on Python',
    issuer: 'Google · Coursera',
    date: 'Sep 2025',
    credentialUrl: 'https://coursera.org/verify/FJTN4M7JRA72',
    icon: '🐍',
    color: 'from-green-600/20 to-emerald-600/10',
  },
];

export const BLOG_POSTS = [
  {
    id: '1',
    title: 'Simon Willison\'s Weblog',
    excerpt:
      'One of the most insightful blogs on LLMs, AI tools, and the practical reality of building with language models. Essential reading for any AI engineer.',
    category: 'LLMs',
    readTime: '5 min',
    date: '2024-11-01',
    imageUrl: '/images/blog-1.jpg',
    slug: 'simon-willison',
    url: 'https://simonwillison.net/',
    tags: ['LLMs', 'AI Tools', 'Python'],
  },
  {
    id: '2',
    title: 'Sebastian Raschka\'s Blog',
    excerpt:
      'Deep dives into machine learning research, LLM fine-tuning, and practical ML engineering. Written by the author of "Build a Large Language Model From Scratch".',
    category: 'Machine Learning',
    readTime: '8 min',
    date: '2024-10-15',
    imageUrl: '/images/blog-2.jpg',
    slug: 'sebastian-raschka',
    url: 'https://sebastianraschka.com/blog/',
    tags: ['ML Research', 'LLMs', 'Deep Learning'],
  },
  {
    id: '3',
    title: 'LangChain Blog',
    excerpt:
      'Official blog from the LangChain team covering agents, RAG pipelines, and the latest in building production LLM applications.',
    category: 'LLM Engineering',
    readTime: '6 min',
    date: '2024-09-28',
    imageUrl: '/images/blog-3.jpg',
    slug: 'langchain-blog',
    url: 'https://www.langchain.com/blog',
    tags: ['LangChain', 'Agents', 'RAG'],
  },
];

export const GITHUB_USERNAME = 'Gana-Y';
export const LEETCODE_USERNAME = 'Ganesh_Op';

export const PERSONAL_INFO = {
  name: 'Ganesh Yandigeri',
  title: 'Python & AI Systems Engineer',
  tagline: 'Python Engineer Building LLM/RAG Applications & Low-Latency Backend Systems',
  bio: 'Python engineer building LLM/RAG applications and low-latency backend systems with FastAPI and React. Built a full-stack RAG platform on Google Gemini and ChromaDB, and a matching engine processing 136,000 orders/sec with price-time priority and pre-trade risk checks.',
  email: 'ganeshyandigeri1@gmail.com',
  phone: '+91-6366597684',
  location: 'Bangalore, India',
  github: 'https://github.com/Gana-Y',
  linkedin: 'https://www.linkedin.com/in/ganesh-yandigeri',
  twitter: 'https://x.com/Ganesh821060',
  leetcode: 'https://leetcode.com/u/Ganesh_Op/',
};
