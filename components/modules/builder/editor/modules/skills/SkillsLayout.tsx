import React, { useEffect, useState } from "react";
import resumeData from "../../../../../../helpers/constants/resume-data.json";
import { ISkillItem } from "../../../../../../store/skill.interface";
import { SkillDetailStore } from "../../../../../../store/skill_store";

const SkillsLayout = () => {
  const [lang, setLang] = useState("");
  const [frame, setFrame] = useState("");
  const [datab, setDatab] = useState("");
  const [tool, setTool] = useState("");

  const {
    languages,
    frameworks,
    databases,
    tools,
    setLanguages,
    setFrameworks,
    setDatabases,
    setTools,
  } = SkillDetailStore((state) => ({
    languages: state.languages,
    frameworks: state.frameworks,
    databases: state.databases,
    tools: state.tools,
    setLanguages: state.setLanguages,
    setFrameworks: state.setFrameworks,
    setDatabases: state.setDatabases,
    setTools: state.setTools,
  }));

  const addLanguage = () => {
    let newObj: ISkillItem = {
      id: languages.length,
      name: lang,
    };
    languages.push(newObj);
    setLanguages(languages);
    console.log(languages);
  };
  const removeLanguage = (id: number) => {
    let newObj: ISkillItem[] = languages;
    newObj.splice(id, 1);
    setLanguages(newObj);
    console.log(languages);
  };

  const addFrameworks = () => {
    let newObj: ISkillItem = {
      id: languages.length,
      name: frame,
    };
    frameworks.push(newObj);
    setFrameworks(frameworks);
    console.log(frameworks);
  };

  const removeFramework = (id: number) => {
    let newObj: ISkillItem[] = frameworks;
    newObj.splice(id, 1);
    setFrameworks(newObj);
    console.log(frameworks);
  };

  const addDatabase = () => {
    let newObj: ISkillItem = {
      id: databases.length,
      name: datab,
    };
    databases.push(newObj);
    setDatabases(databases);
    console.log(databases);
  };

  const removeDatabase = (id: number) => {
    let newObj: ISkillItem[] = databases;
    newObj.splice(id, 1);
    setDatabases(newObj);
    console.log(databases);
  };

  const addTools = () => {
    let newObj: ISkillItem = {
      id: tools.length,
      name: tool,
    };
    tools.push(newObj);
    setTools(tools);
    console.log(tools);
  };

  const removeTool = (id: number) => {
    let newObj: ISkillItem[] = tools;
    newObj.splice(id, 1);
    setTools(newObj);
    console.log(tools);
  };

  return <div>SkillsLayout</div>;
};

export default SkillsLayout;
