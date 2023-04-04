import React from "react";
import { ProjectsItem } from "../../../store/index.interface";
import { SectionHeading } from "../atoms/SectionHeading";
import { SectionSubtitle } from "../atoms/SectionSubtitle";
import { SectionTitle } from "../atoms/SectionTitle";
import { SectionList } from "../atoms/SectionList";
import { dateParser } from "../../../helpers/utils";
import { HTMLRendererTwo } from "../../../helpers/common/components/HTMLRendererTwo";
import { ProjectsDetailStore } from "../../../store/projects_store";

const Projects = () => {
  const { projects } = ProjectsDetailStore((state) => ({
    projects: state.projects,
  }));
  console.log(projects);

  return (
    <div className="mb-1 mt-2">
      <SectionHeading title="Projects" color="white" />
      {projects.map((item: ProjectsItem, index: number) => {
        return (
          <div key={index} className="py-2">
            <div className="flex justify-between items-center">
              <a href={item.url}>
                <SectionTitle label={`${item.project_name}`} />
              </a>
              <p className="text-xs" style={{ fontStyle: "italic" }}>
                {dateParser(item.startDate)} -
                {item.in_progress ? "present" : dateParser(item.endDate)}
              </p>
            </div>
            {/* <div className="flex justify-between items-center">
                 <SectionSubtitle label={`${item}`}/>
              </div> */}
            <SectionList>
              <HTMLRendererTwo htmlString={item.summary} />
            </SectionList>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
