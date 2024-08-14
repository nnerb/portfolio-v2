import { Link } from "react-scroll";
import { motion, Variants } from "framer-motion";
import { menuItems } from "@/constants/menuItem";
import { formatName } from "@/utils/formatName";
import { useActiveSectionStore } from "@/stores/activeSectionStore";


const NavbarMenu = () => {

    const { currentActiveSection, setCurrentActiveSection } = useActiveSectionStore();

    console.log('menu', currentActiveSection)

    const handleSetActive = (section: string) => {
      setCurrentActiveSection(section);
    };

    const variants: Variants = {
        hidden: { 
            y: -50,
            opacity: 0
        },
        show: {
            y: 0,
            opacity: 1, 
            transition: {
                type: 'ease',
                duration: 1.25
            }
        }
    }

    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.5
        }
      }
    }

    return (
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="show" 
          className="hidden md:flex gap-10 text-xs font-bold"
        >
            {menuItems.map((item, index) => {
                const formattedName = formatName(item.name)
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
    );
};

export default NavbarMenu;
