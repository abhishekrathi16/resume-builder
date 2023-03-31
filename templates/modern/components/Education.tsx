import React from "react";
import { IEducation } from "../../../store/index.interface";
import { SectionHeading } from "../atoms/SectionHeading";
import { SectionSubtitle } from "../atoms/SectionSubtitle";
import { SectionTitle } from "../atoms/SectionTitle";
import { dateParser } from "../../../helpers/utils";
import { EducationDetailStore } from '../../../store/education_store';

const Education = () => {
  const { education } = EducationDetailStore((state) => ({
    education: state.academics,
  }))
  return (
    <div className="mb-3">
      <SectionHeading title="Education" />
      {education.map((item: IEducation, index: number) => {
        return (
          <div key={index} className="py-2">
            <div>
              <SectionTitle label={item.institution} />
              <div className="flex justify-between items-center">
                <SectionSubtitle label={`${item.degree} - ${item.course}`} />
                <div className="flex gap-3">
                  <p className="text-xs">
                    {dateParser(item.startDate)} -{dateParser(item.endDate)}
                  </p>
                </div>
              </div>
              <p className="text-xs">{item.score}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
