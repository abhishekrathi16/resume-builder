import { create } from "zustand";

import { ISkillItem, ISkillState } from "./skill.interface";
import resumeData from "../helpers/constants/resume-data.json";

export const SkillDetailStore = create<ISkillState>((set) => ({
  languages: resumeData.skills.languages,
  frameworks: resumeData.skills.frameworks,
  databases: resumeData.skills.databases,
  tools: resumeData.skills.tools,
  setLanguages: (newLanguage: ISkillItem[]) =>
    set((state: ISkillState) => ({
      ...state,
      languages: (state.languages = newLanguage),
    })),
  setFrameworks: (newFramework: ISkillItem[]) =>
    set((state: ISkillState) => ({
      ...state,
      frameworks: (state.frameworks = newFramework),
    })),
  setDatabases: (newDatabase: ISkillItem[]) =>
    set((state: ISkillState) => ({
      ...state,
      databases: (state.databases = newDatabase),
    })),
  setTools: (newTools: ISkillItem[]) =>
    set((state: ISkillState) => ({
      ...state,
      tools: (state.tools = newTools),
    })),
}));
