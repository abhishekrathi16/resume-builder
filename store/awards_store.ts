import { create } from "zustand";

import { IAwardItem, IAwardsState } from "./awards.interface";
import resumeData from "../helpers/constants/resume-data.json";

const onMoveUp = (array: IAwardItem[], id: number): IAwardItem[] => {
  if (id == 0 || id > array.length) return array;
  let temp: IAwardItem = array[id];
  array[id] = array[id - 1];
  array[id - 1] = temp;
  return array;
};

const onMoveDown = (array: IAwardItem[], id: number): IAwardItem[] => {
  if (id == array.length - 1 || id < 0) return array;
  let temp: IAwardItem = array[id];
  array[id] = array[id + 1];
  array[id + 1] = temp;
  return array;
};

const updateAward = (
  array: IAwardItem[],
  id: number,
  updatedInfo: IAwardItem
): IAwardItem[] => {
  array[id] = updatedInfo;
  return array;
};

export const AwardDetailStore = create<IAwardsState>((set) => ({
  awards: resumeData.awards,
  setAwards: (newAwards: IAwardItem[]) =>
    set((state) => ({
      ...state,
      awards: (state.awards = newAwards),
    })),
  onmoveup: (id: number) =>
    set((state: IAwardsState) => ({
      ...state,
      awards: (state.awards = onMoveUp(state.awards, id)),
    })),
  onmovedown: (id: number) =>
    set((state: IAwardsState) => ({
      ...state,
      awards: (state.awards = onMoveDown(state.awards, id)),
    })),
  updateAward: (id: number, updatedInfo: IAwardItem) =>
    set((state: IAwardsState) => ({
      ...state,
      awards: (state.awards = updateAward(state.awards, id, updatedInfo)),
    })),
}));
