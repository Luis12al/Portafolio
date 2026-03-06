// Tipos para el portafolio

export interface Skill {
  name: string;
  icon?: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string;
  featured?: boolean;
  category: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  description: string[];
  technologies?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
  icon?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
