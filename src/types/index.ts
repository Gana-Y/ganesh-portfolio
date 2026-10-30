export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  swaggerUrl?: string;
  imageUrl: string;
  tags: string[];
  featured: boolean;
  status: 'Complete' | 'In Progress' | 'Building' | 'Planned' | 'Production / Live';
  category?: string;
  date?: string;
  highlights?: string[];
}

export interface Skill {
  name: string;
  category: string;
  level: number;
  icon: string;
  color: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  pdfUrl?: string;
  previewUrl?: string;
  credentialId?: string;
  skills?: string[];
  icon: string;
  color: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  imageUrl: string;
  slug: string;
  tags: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
