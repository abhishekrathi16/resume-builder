import React from "react";
import { dateParser } from "../../../helpers/utils";
import { HTMLRendererTwo } from "../../../helpers/common/components/HTMLRendererTwo";
import { IExperienceItem } from "../../../store/index.interface";
import { SectionHeading } from "../atoms/SectionHeading";
import { SectionList } from "../atoms/SectionList";
import { SectionSubtitle } from "../atoms/SectionSubtitle";
import { SectionTitle } from "../atoms/SectionTitle";
import { ExperienceDetailStore } from "../../../store/experience_store";

const Experience = () => {
  const { experience } = ExperienceDetailStore((state) => ({
    experience: state.experiences,
  }));
  return (
    <div className="mb-1">
      <SectionHeading title="Experience" color="#373737" />
      {experience.map((item: IExperienceItem, index: number) => {
        return (
          <div className="py-2" key={index}>
            <SectionTitle label={item.position} />
            <div className="flex justify-between items-center">
              <SectionSubtitle label={item.company_name} color="#373737" />
              <div>
                <p className="text-xs" style={{ fontStyle: "italic" }}>
                  {dateParser(item.startDate)}-{" "}
                  {item.isWorkingHere ? "present" : dateParser(item.endDate)}
                </p>
              </div>
            </div>
            <SectionList>
              <HTMLRendererTwo htmlString={item.summary} />
            </SectionList>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
