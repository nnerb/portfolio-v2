import { Link } from "react-scroll"
import { motion, useScroll, useTransform } from "framer-motion"
import { menuItems } from "@/constants/menuItem"
import { formatName } from "@/utils/formatName"
import { useActiveSectionStore } from "@/stores/activeSectionStore"
import { containerVariants, variants } from "../animations"

const NavbarMenu = () => {
  const { currentActiveSection, setCurrentActiveSection } = useActiveSectionStore()

  console.log('menu', currentActiveSection)

  const handleSetActive = (section: string) => {
    setCurrentActiveSection(section)
  }

  const { scrollYProgress } = useScroll()

  const navbarStyles = {
    background: useTransform(scrollYProgress, [0,0.1], ['none', `${'bg-slate-100 dark:bg-slate-950'}`]),
    boxShadow: useTransform(scrollYProgress, [0,0.1], ['none', '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)']),
    // backdropFilter: useTransform(scrollYProgress, [0,0.1], ['none', 'blur(10px)'])
} 

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="hidden md:flex gap-10 text-xs font-bold"
    >
      {menuItems.map((item, index) => {
        const formattedName = formatName(item.name);
        return (
          <motion.div key={index} variants={variants}>
            <Link
              name={formattedName}
              activeClass="active"
              onSetActive={() => handleSetActive(formattedName)}
              spy
              to={formattedName}
              offset={-60}
              className="relative cursor-pointer duration-500"
            >
              {item.name}
              {formattedName === currentActiveSection && (
                <motion.div 
                  layout 
                  className="absolute w-full h-[1.5px] rounded-lg bg-blue-500" 
                />
              )}
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  )
}

export default NavbarMenu
