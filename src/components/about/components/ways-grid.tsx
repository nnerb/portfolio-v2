import { waysData } from "@/data/ways-data";
import { motion } from "framer-motion"
import { containerVariants, variants } from "../ways-animations";

const WaysGrid = () => {
  return ( 
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }} 
    >
      {waysData.map((data, index) => (
        <motion.div 
          className={`
            flex flex-col group ease-in rounded-3xl
            ${index === waysData.length - 1 && 'md:col-span-2 md:mx-auto lg:col-auto lg:mx-0'}
          `}
          key={index}
          variants={variants}
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
        > 
          <div 
            className="
              py-7 px-5 flex flex-col items-center 
              max-w-[320px] h-full transition-all
              bg-white dark:bg-slate-900/10 rounded-3xl"
          >
            <span className="text-[3rem] group-hover:text-blue-500 transition">    
              {<data.icon />}
            </span>
            <div className="relative">
              <h1 className="
                font-gothic-bold text-base pt-3 text-center font-[600] 
                group-hover:text-blue-500 transition"
              >
                {data.title}
              </h1>
            </div>
            
            <p className="text-center pt-5 text-sm">{data.caption}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
   );
}
 
export default WaysGrid;