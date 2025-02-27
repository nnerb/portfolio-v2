import { create } from "zustand";

type Category = "ALL" | "FRONTEND" | "BACKEND" | "OTHER";

interface SkillStore  {
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
}

export const useSkillStore = create<SkillStore>((set) => ({
  selectedCategory: "ALL",
  setSelectedCategory: (category) => set({ selectedCategory: category }) 
}))