import { create } from "zustand";

import { IExperienceItem, IExperienceState } from "./experience.interface";
import resumeData from "../helpers/constants/resume-data.json";

const onMoveUp = (array: IExperienceItem[], id: number): IExperienceItem[] => {
  if (id == 0 || id > array.length) return array;
  let temp: IExperienceItem = array[id];
  array[id] = array[id - 1];
  array[id - 1] = temp;
  return array;
};

const onMoveDown = (
  array: IExperienceItem[],
  id: number
): IExperienceItem[] => {
  if (id == array.length - 1 || id < 0) return array;
  let temp: IExperienceItem = array[id];
  array[id] = array[id + 1];
  array[id + 1] = temp;
  return array;
};

const updateExperience = (
  array: IExperienceItem[],
  id: number,
  updatedInfo: IExperienceItem
): IExperienceItem[] => {
  array[id] = updatedInfo;
  return array;
};

export const ExperienceDetailStore = create<IExperienceState>((set) => ({
  experiences: resumeData.work,
  setExperience: (newExperience: IExperienceItem[]) =>
    set((state) => ({
      ...state,
      experiences: (state.experiences = newExperience),
    })),
  onmoveup: (id: number) =>
    set((state: IExperienceState) => ({
      ...state,
      experiences: (state.experiences = [...onMoveUp(state.experiences, id)]),
    })),
  onmovedown: (id: number) =>
    set((state: IExperienceState) => ({
      ...state,
      experiences: (state.experiences = onMoveDown(state.experiences, id)),
    })),
  updateExperience: (id: number, updatedInfo: IExperienceItem) =>
    set((state: IExperienceState) => ({
      ...state,
      academics: (state.experiences = updateExperience(
        state.experiences,
        id,
        updatedInfo
      )),
    })),
}));
