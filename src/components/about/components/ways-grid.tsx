import { waysData } from "@/data/ways-data";
import { motion } from "framer-motion"
import { containerVariants, variants } from "../ways-animations";
import { Card } from "@/components/ui/card";

const WaysGrid = () => {
  return ( 
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }} 
    >
      {waysData.map((data, index) => (
        <motion.div 
          key={index}
          className={`
            flex flex-col group max-w-[400px] md:max-w-[300px]
            ${index === waysData.length - 1 && 'md:col-span-2 md:mx-auto lg:col-auto lg:mx-0'}
          `}
          variants={variants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.05 }}
        > 
          <Card 
            className="bg-slate-100 dark:bg-slate-900 hover:shadow-slate-300
            hover:dark:shadow-sky-900 hover:shadow-[0px_0px_10px] p-4
             rounded-lg h-full flex flex-col items-center"
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
            
            <p className="text-center pt-5 text-sm text-slate-700 dark:text-slate-400">{data.caption}</p>
          </Card>
        </motion.div>
      ))}
    </motion.div>
   );
}
 
export default WaysGrid;