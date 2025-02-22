import { waysData } from "@/data/ways-data";
import { motion } from "framer-motion"
import { containerVariants, variants } from "../ways-animations";

const WaysGrid = () => {
  return ( 
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }} 
    >
      {waysData.map((data, index) => (
        <motion.div 
          className={`
            flex flex-col hover:shadow-2xl rounded-3xl group ease-in 
            ${index === waysData.length - 1 && 'md:col-span-2 md:mx-auto lg:col-auto lg:mx-0'}
          `}
          key={index}
          variants={variants}
        > 
          <div 
            className="
              py-7 px-3 flex flex-col items-center 
              max-w-[320px] h-full rounded"
          >
            <span className="text-[3rem] group-hover:text-blue-500 transition">    
              {<data.icon />}
            </span>
            <div className="relative">
              <h1 className="
                font-gothic-bold text-lg pt-4 text-center font-[600] 
                group-hover:text-blue-500 transition"
              >
                {data.title}
              </h1>
            </div>
            
            <p className="text-center pt-7">{data.caption}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
   );
}
 
export default WaysGrid;