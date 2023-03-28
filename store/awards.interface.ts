export interface IAwardItem {
  id: number;
  title: string;
  organisation: string;
  date: string;
  summary: string;
}

export interface IAwardsState {
  awards: IAwardItem[];
  setAwards: (newAwards: IAwardItem[]) => void;
  onmoveup: (index: number) => void;
  onmovedown: (index: number) => void;
  updateAward: (index: number, updatedInfo: IAwardItem) => void;
}
