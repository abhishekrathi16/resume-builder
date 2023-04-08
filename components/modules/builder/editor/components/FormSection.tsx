import React from "react";
import BasicLayout from "../modules/basic/BasicLayout";
import EducationLayout from "../modules/education/EducationLayout";
import ExperienceLayout from "../modules/experience/ExperienceLayout";
import SkillsLayout from "../modules/skills/SkillsLayout";
import AwardsLayout from "../modules/awards/AwardsLayout";
import ProjectsLayout from "../modules/projects/ProjectsLayout";

interface Id {
  id: number;
}

const switchLayouts = (id: number): JSX.Element => {
  switch (id) {
    case 1:
      return <BasicLayout />;
    case 2:
      return <EducationLayout />;
    case 3:
      return <SkillsLayout />;
    case 4:
      return <ExperienceLayout />;
    case 5:
      return <ProjectsLayout />;
    case 6:
      return <AwardsLayout />;
    default:
      return <></>;
  }
};

const FormSection = (props: Id) => {
  return (
    <div className="bg-white mt-[40px] max-h-[700px] p-[40px] pt-[20px] pb-[50px] mb-[40px] overflow-x-scroll rounded-xl shadow-xl">
      {switchLayouts(props.id)}
    </div>
  );
};

export default FormSection;
