import React from "react";
import { ISkillItem } from "../../../store/index.interface";
import { SectionHeading } from "../atoms/SectionHeading";

const Skills = ({ title, list }: { title: string; list: ISkillItem[] }) => {
  return (
    <div className="my-3">
      <SectionHeading title={title} />
      <div className="flex items-center flex-wrap gap-2.5 py-2">
        {list.map((item: ISkillItem, index) => (
          <div
            key={index}
            className="py-1 px-2 text-sm font-medium border-b-2 border-color-[##a9a9a9]"
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
