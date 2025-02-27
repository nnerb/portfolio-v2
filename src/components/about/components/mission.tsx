import { motion } from "framer-motion";
import { variants } from "../ways-animations";
import Header from "@/components/header";

const Mission = () => {
  return ( 
    <div className='flex justify-center relative bg-slate-100 dark:bg-[#020817]'>
      <motion.div 
        variants={variants} 
        initial='hidden' 
        whileInView='show' 
        viewport={{ once: true }} 
        className='flex flex-col my-[3.5rem] gap-10 max-w-[900px] h-full items-center justify-center px-4'>
          <Header title="My Mission" />
          <p className='text-xl text-center font-black'> My <span className='text-blue-500 font-black'>objective</span> is to <span className='text-blue-500 font-black'>help </span> 
            businesses and <span className='text-blue-500 font-black'>adapt</span> on the <span className='text-blue-500 font-black'>best approach</span> of implementing <span className='text-blue-500 font-black'> new technology </span>
            by utilizing my <span className='text-blue-500 font-black'>knowledge</span> and <span className='text-blue-500 font-black'>understanding</span> of the firm's development.</p>
      </motion.div>
    </div>
   );
}
 
export default Mission;