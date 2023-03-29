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

export interface IExperienceState {
  experiences: IExperienceItem[];
  setExperience: (newExperience: IExperienceItem[]) => void;
  onmoveup: (id: number) => void;
  onmovedown: (id: number) => void;
  updateExperience: (id: number, updatedInfo: IExperienceItem) => void;
}
