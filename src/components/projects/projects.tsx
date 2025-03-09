import { projectData } from "@/data/projects-data";
import LeftHeader from "../left-header";
import ProjectCard from "./components/project-card";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { variants } from "./animations";
import CustomEvenSection from "../custom-even-section";

const Projects = () => {
  return (
    <CustomEvenSection id="projects">
      <div className="flex flex-col max-w-[900px] mx-auto items-center gap-4">
        <LeftHeader title="Projects" />
         {/* Project Grid */}
          <motion.div 
            className="grid md:grid-cols-2 gap-6 mt-8"
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }} 
          >
          {projectData.slice(0, 4).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
        
        <a 
          href="/archive"
          target="_blank"
          className="flex items-center group gap-1 relative"
        >
          <p 
            className="
              relative font-gothic-bold transition-all 
              after:content-[''] after:absolute after:left-0 after:bottom-0 
              after:w-0 after:h-[2px] after:bg-blue-500 
              after:transition-all after:duration-300 
              group-hover:after:w-full
            "
          >
            See Full Project Archive
          </p>
          <FaArrowRight className="group-hover:translate-x-2 transition" />
        </a>
      </div>
    </CustomEvenSection>
  );
}

export default Projects;