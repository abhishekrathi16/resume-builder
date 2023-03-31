import React from "react";
import { ProjectsItem } from "../../../store/index.interface";
import { SectionHeading } from "../atoms/SectionHeading";
import { SectionSubtitle } from "../atoms/SectionSubtitle";
import { SectionTitle } from "../atoms/SectionTitle";
import { SectionList } from "../atoms/SectionList";
import { dateParser } from "../../../helpers/utils";
import { HTMLRenderer } from "../../../helpers/common/components/HTMLRenderer";
import { ProjectsDetailStore } from "../../../store/projects_store";

const Projects = () => {
  const { projects } = ProjectsDetailStore((state) => ({
    projects: state.projects,
  }));
  return (
    <div className="mb-3">
      <SectionHeading title="Projects" />
      {projects.map((item: ProjectsItem, index: number) => {
        return (
          <div key={index} className="py-2">
            <div>
              <a href={item.url}>
                <SectionTitle label={`${item.project_name}`} />
              </a>
              <div className="flex justify-between items-center">
                {/* <SectionSubtitle label={`${item.}`}/>     usedTechStack to be added here */}
                <div className="flex gap-3">
                  <p className="text-xs">
                    {dateParser(item.startDate)} -
                    {item.in_progress ? "present" : dateParser(item.endDate)}
                  </p>
                </div>
              </div>
              <SectionList>
                <HTMLRenderer htmlString={item.summary} />
              </SectionList>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
