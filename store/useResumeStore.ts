import ResumeData from "../helpers/constants/resume-data.json";
import { SkillDetailStore } from "./skill_store";
import { ProjectsDetailStore } from "./projects_store";
import { EducationDetailStore } from "./education_store";
import { ExperienceDetailStore } from "./experience_store";
import BasicDetailStore from "./basic_store";
import { AwardDetailStore } from "./awards_store";

export const useResumeStore = () => {
  return {
    ...ResumeData,
    basics: BasicDetailStore((state) => state.values),
    work: ExperienceDetailStore((state) => state.experiences),
    education: EducationDetailStore((state) => state.academics),
    projects: ProjectsDetailStore((state) => state.projects),
    awards: AwardDetailStore((state) => state.awards),
    skills: {
      languages: SkillDetailStore((state) => state.languages),
      frameworks: SkillDetailStore((state) => state.frameworks),
      databases: SkillDetailStore((state) => state.databases),
      tools: SkillDetailStore((state) => state.tools),
    },
  };
};
