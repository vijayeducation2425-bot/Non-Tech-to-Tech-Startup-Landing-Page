export type PageView = 'home' | 'about' | 'services' | 'portfolio' | 'learning' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: 'transform' | 'web' | 'design' | 'consulting';
  features: string[];
  deliverables: string[];
  gradient: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  specialty: string;
  avatarUrl: string;
}

export interface SkillItem {
  name: string;
  level: number;
  category: 'Frontend' | 'Design' | 'Core';
  highlight: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  metrics: string;
  liveDemoType: 'landing' | 'portfolio' | 'app';
}

export interface LearningTask {
  id: string;
  number: number;
  title: string;
  description: string;
  objectives: string[];
  technologies: string[];
  ctaText: string;
  modalType: 'static' | 'portfolio' | 'js';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactFormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export interface GetStartedFormData {
  name: string;
  email: string;
  projectType: string;
  description: string;
}
