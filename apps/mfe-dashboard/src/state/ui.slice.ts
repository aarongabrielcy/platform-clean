import { create } from "zustand";

type UIState = {
  filter: string;
  setFilter: (v: string) => void;
};

export const useUISlice = create<UIState>((set) => ({
  filter: "",
  setFilter: (v: string) => set({ filter: v })
}));
