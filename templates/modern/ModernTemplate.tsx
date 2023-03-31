import React, { useContext } from "react";
import Awards from "./components/Awards";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Basics from "./components/Basics";
import Projects from "./components/Projects";
import Education from "./components/Education";
import { StateContext } from "../../components/modules/builder/resume/ResumeLayout";
import { SectionValidator } from "../../helpers/common/components/ValidSectionRenderer";

const ModernTemplate = () => {
  const resumeData = useContext(StateContext);

  return (
    <>
      <div className="p-2">
        <Basics basics={resumeData.basics} />
        <div className="flex">
          <div className="basis-[60%] p-3">
            <SectionValidator value={resumeData.work}>
              <Experience experience={resumeData.work} />
            </SectionValidator>

            <SectionValidator value={resumeData.awards}>
              <Awards awardsRecieved={resumeData.awards} />
            </SectionValidator>
          </div>
          <div className="basis-[40%] p-3">
            <SectionValidator value={resumeData.education}>
              <Education education={resumeData.education} />
            </SectionValidator>

            <SectionValidator value={resumeData.skills.languages}>
            <Skills title="Languages" list={resumeData.skills.languages} />
          </SectionValidator>

          <SectionValidator value={resumeData.skills.databases}>
            <Skills title="Databases" list={resumeData.skills.databases} />
          </SectionValidator>

          <SectionValidator value={resumeData.skills.frameworks}>
            <Skills title="Frameworks" list={resumeData.skills.frameworks} />
          </SectionValidator>

          <SectionValidator value={resumeData.skills.tools}>
            <Skills title="Tools" list={resumeData.skills.tools} />
          </SectionValidator>

            <SectionValidator value={resumeData.projects}>
              <Projects projects={resumeData.projects} />
            </SectionValidator>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernTemplate;
