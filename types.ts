// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Company Info (singleton)
export interface CompanyInfo extends CosmicObject {
  type: 'company-info';
  metadata: {
    company_name: string;
    tagline: string;
    mission_statement: string;
    vision_statement: string;
    about_us: string;
    hero_background?: {
      url: string;
      imgix_url: string;
    };
    founded_year?: string;
    headquarters?: string;
    contact_email?: string;
    contact_phone?: string;
    primary_color?: string;
    secondary_color?: string;
  };
}

// Services
export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name: string;
    short_description: string;
    full_description: string;
    service_image?: {
      url: string;
      imgix_url: string;
    };
    key_features?: string[];
    display_order?: number;
  };
}

// Team Members
export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    full_name: string;
    role: string;
    bio: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
    linkedin_url?: string;
    email?: string;
    display_order?: number;
    featured?: boolean;
  };
}

// Testimonials
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name: string;
    client_title: string;
    company: string;
    testimonial_text: string;
    client_photo?: {
      url: string;
      imgix_url: string;
    };
    company_logo?: {
      url: string;
      imgix_url: string;
    };
    rating?: number;
    featured?: boolean;
  };
}

// Case Studies
export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    project_name: string;
    client: string;
    industry?: string;
    project_summary: string;
    challenge: string;
    solution: string;
    results: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    gallery_images?: Array<{
      url: string;
      imgix_url: string;
    }>;
    related_service?: Service;
    completion_date?: string;
    featured?: boolean;
  };
}

// Roadmap Milestones
export type MilestoneStatus = 'completed' | 'in-progress' | 'planned';

export interface RoadmapMilestone extends CosmicObject {
  type: 'roadmap-milestones';
  metadata: {
    milestone_title: string;
    description: string;
    target_date: string;
    status: {
      key: MilestoneStatus;
      value: string;
    };
    milestone_icon?: {
      url: string;
      imgix_url: string;
    };
    display_order: number;
  };
}

// Partners
export type PartnerType = 'investor' | 'technology' | 'strategic' | 'supplier';

export interface Partner extends CosmicObject {
  type: 'partners';
  metadata: {
    partner_name: string;
    partner_type: {
      key: PartnerType;
      value: string;
    };
    description?: string;
    logo?: {
      url: string;
      imgix_url: string;
    };
    website_url?: string;
    featured?: boolean;
  };
}

// News Updates
export type NewsCategory = 'company-news' | 'product-launch' | 'partnership' | 'industry-insight';

export interface NewsUpdate extends CosmicObject {
  type: 'news-updates';
  metadata: {
    headline: string;
    summary: string;
    full_content: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    publication_date: string;
    category: {
      key: NewsCategory;
      value: string;
    };
    featured?: boolean;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guard for runtime validation
export function isCosmicObject(obj: any): obj is CosmicObject {
  return (
    obj &&
    typeof obj === 'object' &&
    'id' in obj &&
    'type' in obj &&
    'metadata' in obj
  );
}