import { skillsData } from "@/data/skills-data";
import { useSkillStore } from "@/stores/useSkillStore";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { variants } from "../animations";

const SkillsGrid = () => {

  const { selectedCategory } = useSkillStore()

  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true); // Set to true after first render
  }, []);

  return ( 
    <motion.section 
      className="grid grid-cols-3 sm:grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-3 w-full"
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }} 
    >
      <AnimatePresence>
      {skillsData.map((skill) =>
        selectedCategory === "ALL" || skill.category === selectedCategory ? (
            <motion.article 
              key={skill.name}
              layout
              className="flex flex-col items-center rounded-md bg-slate-100 dark:bg-slate-900 border 
                border-slate-300 dark:border-slate-800 w-full h-full py-2 group hover:shadow-slate-500
                 dark:hover:shadow-blue-500
                 hover:shadow-[0px_4px_15px] transition-shadow"
              initial={hasLoaded ? { scale: 0} : false}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, type: 'ease' }}
              exit={{ scale: 0 }}
              whileHover={{ y: -3 }}
              whileTap={{ y: -3 }}
            >
              <img src={skill.logo} alt={`${skill.name} logo`} className="w-12 h-12" />
              <h3 className="mt-2 text-xs text-center dark:group-hover:text-blue-500 group-hover:text-slate-500 transition">{skill.name}</h3>
            </motion.article>
        ) : null
      )}
    </AnimatePresence>
    </motion.section>
   );
}
 
export default SkillsGrid;