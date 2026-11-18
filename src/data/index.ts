import { Project, Skill, Certification, NavLink, SocialLink } from '@/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Approach', href: '#singularity' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
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
  { name: 'Python', category: 'Languages', level: 95, icon: 'code', color: '#2dd4bf' },
  { name: 'JavaScript', category: 'Languages', level: 85, icon: 'file-code', color: '#2dd4bf' },
  { name: 'TypeScript', category: 'Languages', level: 82, icon: 'braces', color: '#2dd4bf' },
  { name: 'SQL', category: 'Languages', level: 84, icon: 'database', color: '#2dd4bf' },

  // AI / ML
  { name: 'RAG Pipelines', category: 'AI/ML', level: 92, icon: 'layers', color: '#2dd4bf' },
  { name: 'ChromaDB', category: 'AI/ML', level: 90, icon: 'search', color: '#2dd4bf' },
  { name: 'Google Gemini API', category: 'AI/ML', level: 92, icon: 'cpu', color: '#2dd4bf' },
  { name: 'Semantic Embeddings', category: 'AI/ML', level: 88, icon: 'network', color: '#2dd4bf' },
  { name: 'Prompt Engineering', category: 'AI/ML', level: 90, icon: 'terminal', color: '#2dd4bf' },
  { name: 'PyTorch', category: 'AI/ML', level: 80, icon: 'activity', color: '#2dd4bf' },

  // Backend & Systems
  { name: 'FastAPI', category: 'Backend', level: 92, icon: 'server', color: '#2dd4bf' },
  { name: 'AsyncIO & WebSockets', category: 'Backend', level: 88, icon: 'radio', color: '#2dd4bf' },
  { name: 'Low-Latency Design', category: 'Backend', level: 85, icon: 'gauge', color: '#2dd4bf' },
  { name: 'REST APIs & Microservices', category: 'Backend', level: 90, icon: 'globe', color: '#2dd4bf' },
  { name: 'Flask', category: 'Backend', level: 80, icon: 'box', color: '#2dd4bf' },
  { name: 'Node.js', category: 'Backend', level: 75, icon: 'workflow', color: '#2dd4bf' },

  // Databases
  { name: 'PostgreSQL', category: 'Databases', level: 84, icon: 'database', color: '#2dd4bf' },
  { name: 'MongoDB', category: 'Databases', level: 80, icon: 'hard-drive', color: '#2dd4bf' },
  { name: 'Redis', category: 'Databases', level: 82, icon: 'zap', color: '#2dd4bf' },

  // Tools & Infra
  { name: 'Docker', category: 'Tools', level: 82, icon: 'container', color: '#2dd4bf' },
  { name: 'Git', category: 'Tools', level: 90, icon: 'git-branch', color: '#2dd4bf' },
  { name: 'Linux', category: 'Tools', level: 85, icon: 'terminal', color: '#2dd4bf' },
  { name: 'Pytest & CI/CD', category: 'Tools', level: 85, icon: 'check-square', color: '#2dd4bf' },
];

export const SKILL_CATEGORIES = ['All', 'Languages', 'AI/ML', 'Backend', 'Databases', 'Tools'];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Florix AI',
    subtitle: 'Full-stack academic engine and RAG platform',
    category: 'AI systems / Full-stack',
    date: 'Jan 2025 — Present',
    description:
      'Ingests PDFs, YouTube transcripts, and web articles to generate adaptive quizzes and active-recall flashcards via Google Gemini. Built on a ChromaDB HNSW vector pipeline with sub-200ms semantic retrieval, SQLite fallback, and an asynchronous FastAPI backend with JWT auth, RBAC, and SlowAPI rate limiting across 15+ relational tables.',
    techStack: ['Python', 'FastAPI', 'Google Gemini API', 'ChromaDB', 'SQLAlchemy', 'React 19', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Gana-Y/Florix_AI',
    liveUrl: 'https://florix-4rkmoj877-ganesh-y-s-projects.vercel.app',
    imageUrl: '/images/florix-ai.png',
    tags: ['RAG pipeline', 'ChromaDB HNSW', '<200ms retrieval'],
    featured: true,
    status: 'Production / Live',
  },
  {
    id: '2',
    title: 'OrderCore',
    subtitle: 'Limit order book and matching engine',
    category: 'Low-latency systems / FinTech',
    date: '2025',
    description:
      'Single-symbol matching engine with strict price-time priority supporting LIMIT, MARKET, IOC, and FOK order types, pre-trade risk checks, and self-trade prevention. Uses a heap-indexed price-level structure with O(1) amortised cancellations, achieving 136,000 orders/sec throughput and 4.3 µs median match latency over REST and WebSocket depth streams.',
    techStack: ['Python', 'FastAPI', 'AsyncIO', 'WebSockets', 'Pytest', 'Low-Latency Design'],
    githubUrl: 'https://github.com/Gana-Y/OrderCore',
    liveUrl: '#',
    imageUrl: '/images/ordercore.png',
    tags: ['136K ops/s', '4.3 µs median', 'O(1) cancel'],
    featured: true,
    status: 'Complete',
  },
  {
    id: '3',
    title: 'Vesper',
    subtitle: 'Sandboxed code execution engine and online judge arbiter',
    category: 'Systems programming / Backend / DevOps',
    date: 'October 2026',
    description:
      'Isolated, multi-tenant code execution engine and automated judge arbiter evaluating untrusted C++17, Python 3, and Java submissions with Linux cgroup sandboxing, PID caps, and sub-millisecond execution telemetry.',
    techStack: ['Python', 'FastAPI', 'Docker', 'Linux cgroups', 'C++17', 'Java 17+', 'Uvicorn', 'Pytest', 'Bash', 'REST APIs', 'Render'],
    githubUrl: 'https://github.com/Gana-Y/vesper-engine',
    liveUrl: 'https://vesper-engine.onrender.com',
    swaggerUrl: 'https://vesper-engine.onrender.com/docs',
    imageUrl: '/images/vesper.png',
    tags: ['Linux cgroups', 'Docker sandbox', '<90ms cloud eval'],
    featured: true,
    status: 'Production / Live',
    highlights: [
      'Hardened sandbox isolation: Enforces defense-in-depth security envelopes using Docker and Linux cgroups, including strict PID limits (pids_limit=64 for fork-bomb immunity), air-gapped networking (network_disabled=True), and read-only root filesystems with ephemeral /tmp tmpfs mounts.',
      'Dual-backend architecture: Abstraction layer supporting containerized cgroups for production workloads alongside a zero-dependency local process supervisor for microsecond wall-clock timing and peak RSS memory tracking.',
      '7-state verdict arbitration: Parses POSIX signals and exact stdout diffs to evaluate submissions into standard online judge verdicts: AC, WA, TLE, MLE, RE, CE, and OLE.',
      'Interactive studio and production API: Developer workstation with live telemetry and keyboard shortcuts, supported by an asynchronous FastAPI REST API deployed live on Render with sub-90ms cloud evaluation latencies.',
      'Test automation: Backed by a 100% passing Pytest test suite covering syntax errors, memory limits, infinite loop timeouts, and edge cases.',
    ],
  },
  {
    id: '4',
    title: 'MedAI Diagnosis Assistant',
    subtitle: 'Clinical symptom and imaging analysis',
    category: 'Healthcare AI',
    description:
      'Medical diagnosis assistant using language models and computer vision to analyze symptoms and medical imaging, paired with a RAG pipeline for evidence-based recommendations.',
    techStack: ['Python', 'LangChain', 'FastAPI', 'PyTorch', 'OpenCV', 'MongoDB', 'React'],
    githubUrl: 'https://github.com/Gana-Y',
    liveUrl: '#',
    imageUrl: '',
    tags: ['Healthcare', 'RAG', 'Computer vision'],
    featured: false,
    status: 'In Progress',
  },
  {
    id: '5',
    title: 'FinSight',
    subtitle: 'Market intelligence and filing analysis',
    category: 'FinTech / NLP',
    description:
      'Financial market analysis tool parsing earnings calls, news sentiment, and SEC filings to produce explainable investment signals.',
    techStack: ['Python', 'HuggingFace', 'FastAPI', 'PostgreSQL', 'React', 'Docker'],
    githubUrl: 'https://github.com/Gana-Y',
    liveUrl: '#',
    imageUrl: '',
    tags: ['FinTech', 'NLP', 'Sentiment analysis'],
    featured: false,
    status: 'Building',
  },
  {
    id: '6',
    title: 'Neural Document Q&A',
    subtitle: 'Citation-tracked document retrieval',
    category: 'RAG / Vector search',
    description:
      'Document intelligence system ingesting PDFs, research papers, and internal knowledge bases for semantic search and conversational querying with inline citations.',
    techStack: ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'FastAPI', 'Next.js'],
    githubUrl: 'https://github.com/Gana-Y',
    liveUrl: '#',
    imageUrl: '',
    tags: ['RAG', 'Vector DB', 'Citations'],
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
    credentialUrl: 'https://catalog-education.oracle.com',
    pdfUrl: '/certs/oracle-gen-ai-professional.pdf',
    previewUrl: '/certs/oracle-gen-ai-professional.png',
    credentialId: '101968817OCI25GAIOCP',
    skills: ['Large Language Models (LLMs)', 'RAG Architecture', 'OCI Generative AI Service', 'Fine-Tuning', 'Vector Retrieval'],
    icon: 'award',
    color: '',
  },
  {
    id: '2',
    title: 'OCI 2025 AI Foundations Associate',
    issuer: 'Oracle University',
    date: 'Aug 2025',
    credentialUrl: 'https://catalog-education.oracle.com',
    pdfUrl: '/certs/oracle-ai-foundations.pdf',
    previewUrl: '/certs/oracle-ai-foundations.png',
    credentialId: '101968817OCI25AIFA',
    skills: ['Machine Learning Basics', 'Deep Learning', 'Computer Vision', 'Natural Language Processing', 'OCI AI Services'],
    icon: 'cpu',
    color: '',
  },
  {
    id: '3',
    title: 'Software Engineering Job Simulation',
    issuer: 'JPMorgan Chase · Forage',
    date: 'Sep 2025',
    credentialUrl: 'https://www.theforage.com/simulations/jpmorgan/software-engineering-6fa4',
    pdfUrl: '/certs/jpmorgan-forage.pdf',
    previewUrl: '/certs/jpmorgan-forage.png',
    credentialId: 'JPMC-SWE-SIM-2025',
    skills: ['Financial Data Feeds', 'Perspective Library', 'Interface Graphing', 'TypeScript', 'Python'],
    icon: 'briefcase',
    color: '',
  },
  {
    id: '4',
    title: 'Crash Course on Python',
    issuer: 'Google · Coursera',
    date: 'Sep 2025',
    credentialUrl: 'https://coursera.org/verify/FJTN4M7JRA72',
    pdfUrl: '/certs/google-python.pdf',
    previewUrl: '/certs/google-python.png',
    credentialId: 'FJTN4M7JRA72',
    skills: ['Python Fundamentals', 'Object-Oriented Programming', 'Data Structures', 'Automation Scripting'],
    icon: 'code',
    color: '',
  },
];

export const BLOG_POSTS = [
  {
    id: '1',
    title: "Simon Willison's Weblog",
    excerpt:
      'Practical writing on LLMs, developer tools, and building reliable software with language models.',
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
    title: "Sebastian Raschka's Blog",
    excerpt:
      'Deep dives into machine learning research, LLM fine-tuning, and practical ML engineering.',
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
      'Engineering notes covering retrieval pipelines, agents, and production LLM applications.',
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
  tagline: 'Python engineer building RAG applications, sandboxed execution engines, and low-latency backend systems',
  bio: 'Python engineer building LLM/RAG applications, sandboxed execution engines, and low-latency backend systems with FastAPI, Docker, and React. Built Florix AI on Google Gemini and ChromaDB, OrderCore processing 136,000 orders/sec with 4.3 µs median match latency, and Vesper for cgroup-isolated multi-language code evaluation.',
  email: 'ganeshyandigeri1@gmail.com',
  phone: '+91-6366597684',
  location: 'Bangalore, India',
  github: 'https://github.com/Gana-Y',
  linkedin: 'https://www.linkedin.com/in/ganesh-yandigeri',
  twitter: 'https://x.com/Ganesh821060',
  leetcode: 'https://leetcode.com/u/Ganesh_Op/',
};
