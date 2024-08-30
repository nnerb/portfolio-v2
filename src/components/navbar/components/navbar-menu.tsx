import { Link } from "react-scroll"
import { motion } from "framer-motion"
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
              offset={0}
              className="relative cursor-pointer"
            >
              {item.name}
              {formattedName === currentActiveSection && (
                <motion.div className="absolute w-full h-[1.5px] rounded-sm bg-blue-500" />
              )}
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  )
}

export default NavbarMenu
