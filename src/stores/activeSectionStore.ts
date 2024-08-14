import { create } from "zustand";


type ActiveSectionState = {
  currentActiveSection: string | undefined;
  setCurrentActiveSection: (section: string) => void;
};

export const useActiveSectionStore = create<ActiveSectionState>((set) => ({
  currentActiveSection: undefined,
  setCurrentActiveSection: (section: string) => set({ currentActiveSection: section }),
}));
