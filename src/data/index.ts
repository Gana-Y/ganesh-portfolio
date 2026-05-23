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
  { name: 'Python', category: 'Languages', level: 90, icon: '🐍', color: '#3776AB' },
  { name: 'C++', category: 'Languages', level: 75, icon: '⚙️', color: '#00599C' },
  { name: 'SQL', category: 'Languages', level: 80, icon: '🗃️', color: '#336791' },

  // AI / ML
  { name: 'PyTorch', category: 'AI/ML', level: 85, icon: '🔥', color: '#EE4C2C' },
  { name: 'TensorFlow', category: 'AI/ML', level: 80, icon: '🧠', color: '#FF6F00' },
  { name: 'scikit-learn', category: 'AI/ML', level: 85, icon: '📊', color: '#F7931E' },
  { name: 'OpenCV', category: 'AI/ML', level: 78, icon: '👁️', color: '#5C3EE8' },
  { name: 'HuggingFace', category: 'AI/ML', level: 82, icon: '🤗', color: '#FFD21E' },
  { name: 'LangChain', category: 'AI/ML', level: 80, icon: '🔗', color: '#1C3C3C' },

  // Backend
  { name: 'FastAPI', category: 'Backend', level: 83, icon: '⚡', color: '#009688' },
  { name: 'Flask', category: 'Backend', level: 80, icon: '🌶️', color: '#000000' },
  { name: 'Node.js', category: 'Backend', level: 70, icon: '🟢', color: '#339933' },

  // Databases
  { name: 'MongoDB', category: 'Databases', level: 75, icon: '🍃', color: '#47A248' },
  { name: 'PostgreSQL', category: 'Databases', level: 72, icon: '🐘', color: '#336791' },

  // DevOps / Tools
  { name: 'Git', category: 'Tools', level: 88, icon: '📦', color: '#F05032' },
  { name: 'Docker', category: 'Tools', level: 70, icon: '🐳', color: '#2496ED' },
  { name: 'Linux', category: 'Tools', level: 80, icon: '🐧', color: '#FCC624' },
];

export const SKILL_CATEGORIES = ['All', 'Languages', 'AI/ML', 'Backend', 'Databases', 'Tools'];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'MedAI Diagnosis Assistant',
    description:
      'An AI-powered medical diagnosis assistant leveraging large language models and computer vision to analyze symptoms and medical imaging. Integrates RAG pipeline for evidence-based recommendations.',
    techStack: ['Python', 'LangChain', 'FastAPI', 'PyTorch', 'OpenCV', 'MongoDB', 'React'],
    githubUrl: 'https://github.com/Gana-Y',
    liveUrl: '#',
    imageUrl: '/images/project-1.jpg',
    tags: ['Healthcare AI', 'LLM', 'Computer Vision'],
    featured: true,
    status: 'In Progress',
  },
  {
    id: '2',
    title: 'FinSight — Market Intelligence',
    description:
      'Real-time financial market analysis tool using NLP to parse earnings calls, news sentiment, and SEC filings. Generates AI-driven investment insights with explainable predictions.',
    techStack: ['Python', 'HuggingFace', 'FastAPI', 'PostgreSQL', 'React', 'Docker'],
    githubUrl: 'https://github.com/Gana-Y',
    liveUrl: '#',
    imageUrl: '/images/project-2.jpg',
    tags: ['FinTech', 'NLP', 'Sentiment Analysis'],
    featured: true,
    status: 'Building',
  },
  {
    id: '3',
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
  {
    id: '4',
    title: 'DeepVision — Object Detection',
    description:
      'Real-time multi-class object detection system trained on custom medical imaging datasets using YOLOv9. Achieves 94% mAP for clinical anomaly detection.',
    techStack: ['Python', 'PyTorch', 'OpenCV', 'YOLO', 'Flask', 'Docker'],
    githubUrl: 'https://github.com/Gana-Y',
    liveUrl: '#',
    imageUrl: '/images/project-4.jpg',
    tags: ['Computer Vision', 'Deep Learning', 'Healthcare'],
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
  name: 'Ganesh Y',
  title: 'AI Engineer',
  tagline: 'Aspiring AI/ML Engineer Building with Python, LLMs, Deep Learning & Machine Learning',
  bio: "I would love to work in the field of healthcare and finance, and AI is changing both in ways that genuinely excite me. Currently building projects, learning LLMs, and figuring things out as I go. Let's connect and build.",
  email: 'ganeshyandigeri1@gmail.com',
  phone: '6366597684',
  location: 'India',
  github: 'https://github.com/Gana-Y',
  linkedin: 'https://www.linkedin.com/in/ganesh-yandigeri-988821287',
  twitter: 'https://x.com/Ganesh821060',
  leetcode: 'https://leetcode.com/u/Ganesh_Op/',
};
