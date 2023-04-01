import { ISkillItem } from "./skill.interface";
export interface ProjectsItem {
  id: number;
  project_name: string;
  url: string;
  startDate: string;
  endDate: string;
  summary: string;
  in_progress: boolean;
  frameworks: ISkillItem[];
}

export interface ProjectsItemState {
  projects: ProjectsItem[];
  setProjects: (newProjects: ProjectsItem[]) => void;
  onmoveup: (index: number) => void;
  onmovedown: (index: number) => void;
  updateProjects: (index: number, updatedInfo: ProjectsItem) => void;
}
