// Common types and interfaces

// API Response wrapper
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Paginated response
export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

// Contact form data
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

// Team member
export interface TeamMember {
  id: number;
  slug: string;
  name: string;
  title: string;
  role: string;
  email: string;
  phone?: string;
  image: string;
  bio: string;
  areasOfPractice: string[];
  education?: string[];
  admissions?: string[];
  linkedIn?: string;
}

// Practice area
export interface PracticeArea {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  details: string;
}

// Blog post
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: TeamMember;
  category: BlogCategory;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  readTime: number;
  featured: boolean;
}

// Blog category
export interface BlogCategory {
  id: number;
  slug: string;
  name: string;
  description?: string;
  postCount: number;
}

// Testimonial
export interface Testimonial {
  id: number;
  name: string;
  title: string;
  company?: string;
  content: string;
  image?: string;
  rating: number;
}

// Navigation item
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Company info
export interface CompanyInfo {
  name: string;
  tagline: string;
  email: string;
  phone: string;
  address: string;
  hours: string;
  social: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}
