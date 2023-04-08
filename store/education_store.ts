import { create } from "zustand";

import { IEducationItem, IEducationState } from "./education.interface";
import resumeData from "../helpers/constants/resume-data.json";

const onMoveUp = (array: IEducationItem[], id: number): IEducationItem[] => {
  if (id == 0 || id > array.length) return array;
  let temp: IEducationItem = array[id];
  array[id] = array[id - 1];
  array[id - 1] = temp;
  return array;
};

const onMoveDown = (array: IEducationItem[], id: number): IEducationItem[] => {
  if (id == array.length - 1 || id < 0) return array;
  let temp: IEducationItem = array[id];
  array[id] = array[id + 1];
  array[id + 1] = temp;
  return array;
};

const updateEducation = (
  array: IEducationItem[],
  id: number,
  updatedInfo: IEducationItem
): IEducationItem[] => {
  array[id] = updatedInfo;
  return array;
};

export const EducationDetailStore = create<IEducationState>((set) => ({
  academics: resumeData.education,
  setEducation: (newEducationArray: IEducationItem[]) =>
    set((state: IEducationState) => ({
      ...state,
      academics: (state.academics = newEducationArray),
    })),
  onmoveup: (id: number) =>
    set((state: IEducationState) => ({
      ...state,
      academics: (state.academics = [...onMoveUp(state.academics, id)]),
    })),

  onmovedown: (id: number) =>
    set((state: IEducationState) => ({
      ...state,
      academics: (state.academics = onMoveDown(state.academics, id)),
    })),
  updateEducation: (id: number, updatedInfo: IEducationItem) =>
    set((state: IEducationState) => ({
      ...state,
      academics: (state.academics = updateEducation(
        state.academics,
        id,
        updatedInfo
      )),
    })),
}));
