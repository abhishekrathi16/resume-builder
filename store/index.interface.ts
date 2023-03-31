import dayjs from "dayjs";

export type IProfiles = {
  profile_name: string;
  profile_url: string;
};

export interface IBasicDetailsItem {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  profiles: IProfiles[];
}

// export interface IItem {
//   name: string;
//   level: number;
// }

// export interface ISkillsIntrf {
//   languages: IItem[];
//   frameworks: IItem[];
//   technologies: IItem[];
//   libraries: IItem[];
//   databases: IItem[];
//   tools: IItem[];
//   practices: IItem[];
// }

export interface ISkillItem {
  id: number;
  name: string;
}

export interface ISkillState {
  languages: ISkillItem[];
  frameworks: ISkillItem[];
  databases: ISkillItem[];
  tools: ISkillItem[];
  setLanguages: (newLanguage: ISkillItem[]) => void;
  setFrameworks: (newFramework: ISkillItem[]) => void;
  setDatabases: (newDatabase: ISkillItem[]) => void;
  setTools: (newTool: ISkillItem[]) => void;
}

export interface IExperienceItem {
  id: number;
  company_name: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string;
  summary: string;
  isWorkingHere: boolean;
}

export interface IEducation {
  institution: string;
  degree: string;
  course: string;
  startDate: string | null;
  endDate: string | null;
  score: string;
  id: number;
}

export interface ProjectsItem {
  id: number;
  project_name: string;
  url: string;
  startDate: string;
  endDate: string;
  summary: string;
  in_progress: boolean;
}

export interface IAwards {
  id: number;
  title: string;
  organisation: string;
  date: string;
  summary: string;
}

export interface IResume {
  basics: IBasicDetailsItem;
  skills: ISkillState;
  experience: IExperienceItem[];
  education: IEducation[];
}
