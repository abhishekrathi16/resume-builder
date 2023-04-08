import { Fragment, ReactNode, useMemo } from "react";
import { IExperienceItem } from "../../../store/experience.interface";
import { IEducationItem } from "../../../store/education.interface";
import { IAwardItem } from "../../../store/awards.interface";
import { ProjectsItem } from "../../../store/projects.interface";
import { ISkillItem } from "../../../store/skill.interface";

export const SectionValidator = ({
  value,
  children,
}: {
  value:
    | string
    | IExperienceItem[]
    | IEducationItem[]
    | IAwardItem[]
    | ProjectsItem[]
    | ISkillItem[];
  children: ReactNode;
}) => {
  const isValid = useMemo(() => {
    return (value || "").length > 0;
  }, [value]);

  if (!isValid) {
    return null;
  }

  return <Fragment>{children}</Fragment>;
};
