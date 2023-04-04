import React from "react";
import { ISkillItem } from "../../../store/index.interface";
import { SectionHeading } from "../atoms/SectionHeading";
import { SkillDetailStore } from "../../../store/skill_store";
import { SectionTitle } from "../atoms/SectionTitle";

const Skills = ({ title, list }: { title: string; list: ISkillItem[] }) => {
  return (
    <div className="my-3" style={{ marginTop: "5px" }}>
      <SectionTitle label={title} />
      <div className="flex items-center flex-wrap gap-2.5">
        {list.map((item: ISkillItem, index) => (
          <div
            key={index}
            className="text-sm font-medium pr-2"
            style={{ fontStyle: "italic" }}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
