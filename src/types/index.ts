// Core type definitions for the Personal AI Platform

export interface Profile {
  id: string;
  email: string;
  fullName: string;
  title: string;
  bio: string;
  location: string;
  linkedinUrl?: string;
  githubUrl?: string;
  resumePdfUrl?: string;
  profileImageUrl?: string;
  yearsExperience: number;
  specializations: string[];
  industries: string[];
  availabilityStatus: 'available' | 'busy' | 'not-available';
  preferredRoles: string[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  company: string;
  role: string;
  duration: {
    startDate: string;
    endDate?: string;
    ongoing: boolean;
  };
  summary: string;
  description?: string;
  detailedDescription?: string;
  problemStatement?: string;
  solution?: string;
  results?: ProjectResult[];
  technologies?: string[];
  skills?: string[];
  imageUrl?: string;
  architectureImageUrl?: string;
  caseStudy?: CaseStudy;
  challenges?: string[];
  solutions?: string[];
  teamSize?: string;
  myContributions?: string[];
  lessonsLearned?: string[];
  links?: { label: string; url: string; }[];
  featured: boolean;
  order?: number;
}

export interface ProjectResult {
  metric: string;
  value: string;
  impact: string;
}

export interface CaseStudy {
  background: string;
  challenges: string;
  approach: string;
  implementation: string;
  outcomes: string;
  lessonsLearned: string;
}

export interface Publication {
  id: string;
  title: string;
  type: 'journal' | 'conference' | 'thesis' | 'report' | 'blog' | 'whitepaper';
  authors: string[];
  venue?: string;
  date: string;
  abstract: string;
  keywords: string[];
  doi?: string;
  pdfUrl?: string;
  citations?: number;
  relatedProjects?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  featuredImageUrl?: string;
  tags: string[];
  publishedAt: string;
  readingTime: number;
  codeSnippets?: CodeSnippet[];
}

export interface CodeSnippet {
  language: string;
  code: string;
  filename?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  proficiency: number; // 1-10
  yearsExperience: number;
  projectsCount: number;
  keywords: string[];
}

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  company?: string;
  inquiryType: 'recruitment' | 'consultation' | 'collaboration' | 'speaking' | 'general';
  message: string;
  technologiesOfInterest?: string[];
  projectBudget?: string;
  timeline?: string;
  urgency?: 'immediate' | 'planning' | 'exploratory';
}

export interface AIMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  metadata?: {
    confidence?: number;
    sources?: string[];
    suggestedActions?: string[];
  };
}

export interface AIConversation {
  id: string;
  sessionId: string;
  messages: AIMessage[];
  startedAt: string;
  lastMessageAt: string;
  context?: Record<string, any>;
}