export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  gradient: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  points: string[];
  type: "work" | "education";
  side: "left" | "right";
}
