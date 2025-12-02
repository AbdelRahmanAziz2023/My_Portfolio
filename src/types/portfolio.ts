export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'tools';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
