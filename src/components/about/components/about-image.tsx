import { aboutVariant } from "../animations";
import { motion } from "framer-motion"
import profile from "/images/profile.jpg"

const AboutImage = () => {
  return ( 
    <motion.div 
      variants={aboutVariant} initial="hiddenImage" whileInView="showImage" viewport={{ once: true }} 
      className="group relative max-w-[300px] justify-self-center"
    >
      <div 
        className="group-hover:after:top-[10px] group-hover:after:left-[10px] 
        group-hover:filter-none after:absolute after:top-[20px] after:left-[20px] after:z-0 
        after:content-[''] after:w-full after:h-full after:rounded-sm after:border-2 
        after:border-[#3B82F6] after:transition-all after:duration-300 rounded-sm relative bg-blue-500"
      >
        <div className="grayscale-[50%] group-hover:grayscale-[0%] z-10 relative rounded w-full">
          <img 
            className="rounded" 
            loading="lazy" 
            decoding="async" 
            src={profile} 
            alt="Brenn Aldwin Santiago smiling at the camera"
            role="img"
          />
        </div>
      </div>
    </motion.div>
  );
}
 
export default AboutImage;