import { create } from "zustand";
import type { MenuKey } from "../constants/nav";

type UIState = {
  activeMenu: MenuKey | null;
  isSubSidebarOpen: boolean;
  openSubSidebar: (menu: MenuKey) => void;
  closeSubSidebar: () => void;
  toggleSubSidebar: () => void;
};

export const useUISlice = create<UIState>((set) => ({
  activeMenu: null,
  isSubSidebarOpen: false,
  openSubSidebar: (menu) => set({ activeMenu: menu, isSubSidebarOpen: true }),
  closeSubSidebar: () => set({ isSubSidebarOpen: false }),
  toggleSubSidebar: () => set((s) => ({ isSubSidebarOpen: !s.isSubSidebarOpen })),
}));
