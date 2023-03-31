import React, { useContext } from "react";
import Awards from "./components/Awards";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Basics from "./components/Basics";
import Projects from "./components/Projects";
import Education from "./components/Education";
import { StateContext } from "../../components/modules/builder/resume/ResumeLayout";
import { SectionValidator } from "../../helpers/common/components/ValidSectionRenderer";
import { SkillDetailStore } from "../../store/skill_store";
import { ExperienceDetailStore } from "../../store/experience_store";
import BasicDetailStore from "../../store/basic_store";
import { ProjectsDetailStore } from "../../store/projects_store";
import { EducationDetailStore } from "../../store/education_store";
import { AwardDetailStore } from "../../store/awards_store";

const ModernTemplate = () => {
  const resumeData = useContext(StateContext);
  // console.log(resumeData);

  const { languages, databases, tools, frameworks } = SkillDetailStore(
    (state) => ({
      languages: state.languages,
      frameworks: state.frameworks,
      databases: state.databases,
      tools: state.tools,
    })
  );

  const { experiences } = ExperienceDetailStore((state) => ({
    experiences: state.experiences,
  }));

  const { basics } = BasicDetailStore((state) => ({
    basics: state.values,
  }));

  const { projects } = ProjectsDetailStore((state) => ({
    projects: state.projects,
  }));

  const { academics } = EducationDetailStore((state) => ({
    academics: state.academics,
  }));

  const { awards } = AwardDetailStore((state) => ({
    awards: state.awards,
  }));

  return (
    <>
      <div className="p-2">
        <Basics />
        <div className="flex">
          <div className="basis-[60%] p-3">
            <SectionValidator value={experiences}>
              <Experience />
            </SectionValidator>

            <SectionValidator value={awards}>
              <Awards />
            </SectionValidator>
          </div>
          <div className="basis-[40%] p-3">
            <SectionValidator value={academics}>
              <Education />
            </SectionValidator>

            <SectionValidator value={languages}>
              <Skills title="Languages" list={languages} />
            </SectionValidator>

            <SectionValidator value={databases}>
              <Skills title="Databases" list={databases} />
            </SectionValidator>

            <SectionValidator value={frameworks}>
              <Skills title="Frameworks" list={frameworks} />
            </SectionValidator>

            <SectionValidator value={tools}>
              <Skills title="Tools" list={tools} />
            </SectionValidator>

            <SectionValidator value={projects}>
              <Projects />
            </SectionValidator>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernTemplate;
