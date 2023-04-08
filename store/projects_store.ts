import { create } from "zustand";
import resumeData from "../helpers/constants/resume-data.json";
import { ProjectsItem, ProjectsItemState } from "./projects.interface";

const onMoveUp = (array: ProjectsItem[], id: number): ProjectsItem[] => {
  if (id == 0 || id > array.length) return array;
  let temp: ProjectsItem = array[id];
  array[id] = array[id - 1];
  array[id - 1] = temp;
  return array;
};

const onMoveDown = (array: ProjectsItem[], id: number): ProjectsItem[] => {
  if (id == array.length - 1 || id < 0) return array;
  let temp: ProjectsItem = array[id];
  array[id] = array[id + 1];
  array[id + 1] = temp;
  return array;
};

const updateProjects = (
  array: ProjectsItem[],
  id: number,
  updatedInfo: ProjectsItem
): ProjectsItem[] => {
  array[id] = updatedInfo;
  return array;
};

export const ProjectsDetailStore = create<ProjectsItemState>((set) => ({
  projects: resumeData.projects,
  setProjects: (newProjects: ProjectsItem[]) =>
    set((state: ProjectsItemState) => ({
      ...state,
      projects: (state.projects = newProjects),
    })),
  onmoveup: (id: number) =>
    set((state: ProjectsItemState) => ({
      ...state,
      projects: (state.projects = onMoveUp(state.projects, id)),
    })),
  onmovedown: (id: number) =>
    set((state: ProjectsItemState) => ({
      ...state,
      projects: (state.projects = onMoveDown(state.projects, id)),
    })),
  updateProjects: (id: number, updatedInfo: ProjectsItem) =>
    set((state: ProjectsItemState) => ({
      ...state,
      projects: (state.projects = updateProjects(
        state.projects,
        id,
        updatedInfo
      )),
    })),
}));
