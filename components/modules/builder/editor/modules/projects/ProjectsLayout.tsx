import React, { useEffect } from "react";
import { ProjectsItem } from "../../../../../../store/projects.interface";
import { ProjectsDetailStore } from "../../../../../../store/projects_store";
import TextField from "@mui/material/TextField";

const ProjectsLayout = () => {
  const { projects, setProjects, onmoveup, onmovedown, updateProjects } =
    ProjectsDetailStore((state) => ({
      projects: state.projects,
      setProjects: state.setProjects,
      onmoveup: state.onmoveup,
      onmovedown: state.onmovedown,
      updateProjects: state.updateProjects,
    }));
  const addprojects = () => {
    let newProject: ProjectsItem = {
      id: projects.length,
      project_name: "",
      url: "",
      startDate: "",
      endDate: "",
      summary: "",
      in_progress: false,
    };
    projects.push(newProject);
    setProjects(projects);
    console.log(projects);
  };
  const removeProjects = (id: number) => {
    let newProjects: ProjectsItem[] = projects;
    newProjects.splice(id, 1);
    setProjects(newProjects);
    console.log(projects);
  };

  const onChangeHandler = (
    value: string | boolean,
    key: string,
    id: number
  ) => {
    let newObj: ProjectsItem = projects[id];
    if (typeof value === "string") {
      if (
        key == "project_name" ||
        key == "url" ||
        key == "startDate" ||
        key == "endDate" ||
        key == "summary"
      ) {
        newObj[key] = value;
      }
    } else {
      newObj["in_progress"] = value;
    }
    updateProjects(id, newObj);
    console.log(projects);
  };

  const onMoveUp = (id: number) => {
    onmoveup(id);
    console.log(projects);
  };

  const onMoveDown = (id: number) => {
    onmovedown(id);
    console.log(projects);
  };

  return <div>Projects Layout</div>;
};

export default ProjectsLayout;
