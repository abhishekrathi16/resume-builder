import { create } from "zustand";
import {
  IBasicDetailsItem,
  IBasicDetailsState,
  IProfiles,
} from "./basic.interface";
import resumeData from "../helpers/constants/resume-data.json";

const BasicDetailStore = create<IBasicDetailsState>((set) => ({
  values: resumeData.basics,
  changeValue: (value: IBasicDetailsItem) =>
    set((state) => ({
      ...state,
      values: (state.values = value),
    })),
}));

export default BasicDetailStore;
