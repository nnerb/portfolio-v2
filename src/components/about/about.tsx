import { aboutItems } from "@/constants/aboutItems";
import { motion } from "framer-motion"
import profile from "../../assets/images/profile.jpg"
import { FaChevronRight } from "react-icons/fa6";
import { CSSProperties, useEffect, useState } from "react";
import { aboutVariant, containerVariants, li, ul } from "./animations";

const DURATION = 2000

const About = () => {

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
    <div className="relative transition bg-slate-50 dark:bg-slate-950" id="about">
      <div className="flex flex-col align-center justify-center max-w-[900px] mx-auto py-[100px] px-4">
        <h1 
          className="
            text-[clamp(26px,5vw,32px)] flex items-center gap-8 w-full relative font-gothic-bold whitespace-nowrap 
            after:content-[''] after:block after:relative after:w-[300px] after:h-[1px] after:bg-slate-900 
            dark:after:bg-slate-200 
          "
        >
          About Me
        </h1>
        <div className="pt-8 relative flex justify-center items-center flex-col gap-[7rem]">
          <div className="grid md:grid-cols-[2fr,1fr] gap-[50px]">
            <div className="flex flex-col gap-4 text-lg">
              <p className='mb-2'>
                <span className='text-blue-500 font-[600]'>Hello</span>
                ! My name is 
                <span className='text-blue-500 font-[600]'> Brenn Aldwin A. Santiago</span>
                . I specialize in
                <span className='text-blue-500 font-[600]'> building refined digital web experiences </span>
                 with a
                <span className='text-blue-500 font-[600]'> focus </span> 
                on 
                <span className='text-blue-500 font-[600]'> responsive </span>
                and 
                <span className='text-blue-500 font-[600]'> interactive content. </span>
              </p>
              <p className="mb-2 dark:text-slate-200">
                I graduated with a 
                <span className='text-blue-500 font-[600]'> bachelor's degree in Computer Science </span> 
                at 
                <span className='text-blue-500 font-[600]'> Cavite State University. </span> 
                I am currently seeking opportunities to 
                <span className='text-blue-500 font-[600]'> further advance my career in Web Development</span> 
                .
              </p>
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
            </div>
            <motion.div 
              variants={aboutVariant} initial='hiddenImage' whileInView='showImage' viewport={{ once:true }} 
              className='wrapper-container group relative max-w-[300px] justify-self-center'
            >
              <div className='wrapper group-hover:after:top-[10px] group-hover:after:left-[10px] 
              group-hover:filter-none after:absolute after:top-[20px] after:left-[20px] after:z-0 after:content-[""] 
              after:w-full after:h-full after:rounded-sm after:border-2 after:border-[#3B82F6] after:transition-all after:duration-300 rounded-sm relative bg-blue-500'>
                <div className='profile--container grayscale-[50%] group-hover:grayscale-[0%] z-10 relative 
                      rounded w-full'
                >
                  <img className='rounded' loading='lazy' src={profile} alt=''/>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default About;