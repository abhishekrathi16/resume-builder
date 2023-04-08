export interface IEducationItem {
  institution: string;
  degree: string;
  course: string;
  startDate: string | null;
  endDate: string | null;
  score: string;
  id: number;
}

export interface IEducationState {
  academics: IEducationItem[];
  setEducation: (newEducation: IEducationItem[]) => void;
  onmoveup: (id: number) => void;
  onmovedown: (id: number) => void;
  updateEducation: (id: number, updatedInfo: IEducationItem) => void;
}
