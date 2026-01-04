// src/types.d.ts

interface ImportMetaEnv {
  readonly BASE_URL: string;
  // add other env variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface Experience {
  title: string;
  company: string;
  years: string;
  description: string[];
}

export interface Education {
  degree: string;
  university: string;
  years: string;
}

export interface Skills {
  programmingLanguages: string[];
  frontend: string[];
  backend: string[];
  tools: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: Skills;
  projects: Project[];
}
