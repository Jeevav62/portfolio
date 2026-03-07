export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  comingSoon?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  date: string;
  readTime?: string;
}

export interface Skill {
  name: string;
  icon?: string;
  category: "ai" | "programming" | "tools";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
