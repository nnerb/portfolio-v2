import { useSkillStore } from "@/stores/useSkillStore";
import { motion } from "framer-motion"

const categories = ["ALL", "FRONTEND", "BACKEND", "OTHER"] as const;

const SkillsMenu = () => {

  const { setSelectedCategory, selectedCategory } = useSkillStore()

  return ( 

    <nav>
      <ul className="flex items-center gap-5 text-xs">
        {categories.map((category, index) => (
          <li key={index} className="relative">
            <button
              onClick={() => setSelectedCategory(category)}
              className={`${category === selectedCategory && "text-blue-500"} transition`}
            >
              {category}
              {category === selectedCategory && (
                <motion.div 
                  layoutId="id"
                  className="absolute w-full h-[2px] rounded-lg bg-blue-500" 
                />
              )}
            </button>
          </li>
        ))}        
      </ul>
    </nav>
  );
}
 
export default SkillsMenu;