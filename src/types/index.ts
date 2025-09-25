// src/types/index.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export interface Skill {
  name: string;
  img?: string;
}

// export interface Experience {
//   id: number;
//   company: string;
//   position: string;
//   period: string;
//   responsibilities: string[];
//   technologies: string[];
// }

export interface Experience {
  role: string;
  company: string;
  period: string;
  isCurrent?: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
}

export interface ResumeData {
  education: Education[];
  experience: Experience[];
}