import React from "react";
import { IEducation } from "../../../store/index.interface";
import { SectionHeading } from "../atoms/SectionHeading";
import { SectionSubtitle } from "../atoms/SectionSubtitle";
import { SectionTitle } from "../atoms/SectionTitle";
import { dateParser } from "../../../helpers/utils";
import { EducationDetailStore } from "../../../store/education_store";

const Education = () => {
  const { education } = EducationDetailStore((state) => ({
    education: state.academics,
  }));
  return (
    <div className="mb-[20px]" style={{ marginTop: "20px" }}>
      <SectionHeading title="Education" color="#373737" />
      {education.map((item: IEducation, index: number) => {
        return (
          <div key={index} className="py-2">
            <div>
              <SectionTitle label={`${item.degree}, ${item.course}`} />
              <div className="flex justify-between items-center">
                <SectionSubtitle label={item.institution} color="#373737" />
                <div className="flex gap-3">
                  <p className="text-sm" style={{ fontStyle: "italic" }}>
                    {dateParser(item.startDate)} -{dateParser(item.endDate)}
                  </p>
                </div>
              </div>
              <p className="text-sm" style={{ fontStyle: "italic" }}>
                CGPA/Percentage: {item.score}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
