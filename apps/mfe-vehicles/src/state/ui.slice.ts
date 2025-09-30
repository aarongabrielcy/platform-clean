import { create } from "zustand";

type UIState = {
  query: string;
  setQuery: (q: string) => void;
};

export const usVehiclesUISlice = create<UIState>((set) => ({
  query: "",
  setQuery: (q) => set({ query: q })
}));
