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
