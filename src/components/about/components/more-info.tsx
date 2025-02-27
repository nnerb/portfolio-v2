import { motion } from "framer-motion"
import { aboutVariant, containerVariants, li, ul } from "../animations";
import { CSSProperties, useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { aboutItems } from "@/constants/about-items";

const DURATION = 2000

const MoreInfo = () => {

  const [infoStatus, setInfoStatus] = useState(false);
  const [isAllow, setIsAllow] = useState(true) // Start as allowed

  // Function to disable interactions for 2 seconds
  const disableForDuration = async (duration: number) => {
    setIsAllow(false); // Disable interactions
    await new Promise(resolve => setTimeout(resolve, duration)); // Wait for the specified duration
    setIsAllow(true); // Re-enable interactions
  };

  // Toggle info status and handle disabling interactions
  const toggleInfo = () => {
    if (isAllow) { // Only toggle if interactions are allowed
      setInfoStatus(prevState => !prevState);
      disableForDuration(DURATION) // Disable for 2 seconds
    }
  }

  useEffect(() => {
    const handleInitialDisable = async () => {
      await disableForDuration(2000); // Disable for 2 seconds on load
    };

    handleInitialDisable();
  }, []); 

  const styles: CSSProperties = {
    pointerEvents: isAllow ? "auto" : "none"
  }

    
  const infoItems = aboutItems.map((item, index) => (
    <motion.li key={index} variants={li} className="font-black list-disc marker:text-blue-500">
      {item.title}
    </motion.li>
  ))

  return ( 
    <motion.div
      variants={aboutVariant} 
      initial='hidden' 
      whileInView='show' 
      viewport={{ once:true }}
      className="flex flex-col gap-2">
      <div 
        className="flex items-center text-blue-500 font-bold mr-auto cursor-pointer hover:text-blue-800"
        onClick={toggleInfo} 
        style={styles}
      >
        <p className=''>More info: </p>
        <motion.li animate={{ rotate: infoStatus ? 90 : 0 }} className="ml-2 list-none">
          <FaChevronRight />
        </motion.li>
      </div>
      <motion.div variants={containerVariants}  animate={infoStatus ? "show" : "hidden"}>
        <motion.ul variants={ul} animate={infoStatus ? "show" : "hidden"} className="ml-10 hidden">
          {infoItems}
        </motion.ul> 
      </motion.div>
    </motion.div>
   );
}
 
export default MoreInfo;