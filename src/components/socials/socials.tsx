import { socialItems } from "@/constants/socialItems"
import './socials.css'
import { FaChevronDown } from "react-icons/fa6";
import { motion,  } from "framer-motion"
import { useState } from "react";
import { containerVariants, itemVariants, variants } from "./animations";

const Socials = () => {

  const [isOpen, setIsOpen] = useState(true)
  const socialToggle = () => setIsOpen((prevMode) => !prevMode)

  return ( 
    <motion.div
      variants={variants} 
      initial="initial" 
      animate="animate"  
      className="
        fixed flex flex-col items-center gap-2  
      text-white bottom-0 right-0 text-[1.4rem] mr-4 mb-4 z-50
      "
    >
      <motion.div 
        className="flex flex-col-reverse gap-2"
        animate={isOpen ? "show" : "hidden"}
        variants={containerVariants}
      >
        {socialItems.map((item, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants} 
            
          >
            <a 
              href={item.link}  
              target="_blank" 
              style={{ background: item.color }}
              className="
                a-socials group relative bg-slate-900 rounded-full p-[0.5rem]
                grid place-items-center border-slate-900 border border-solid overflow-hidden
                hover:cursor-pointer dark:text-slate-200 dark:before:bg-slate-200 dark:border-slate-200
              "
            >
              <item.name 
                className="
                  text-[1.5rem] relative z-[3] transition-all
                dark:group-hover:text-slate-200 duration-500 dark:text-slate-900
                "
              />
            </a>
          </motion.div>
        ))}
      </motion.div>
      <div 
        className="
          rounded-full p-[0.5rem] text-slate-900 
          hover:bg-slate-600/20 cursor-pointer 
          transition-all duration-500 dark:text-slate-200
        "
        onClick={socialToggle}
      >
         <motion.div animate={{ rotate: isOpen ? 0 : -180 }} >
          <FaChevronDown className="text-[1.5rem]" />
        </motion.div>
      </div>
    </motion.div>
   );
}
 
export default Socials