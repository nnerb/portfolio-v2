

import { FaGithub, FaLink } from "react-icons/fa6";
import { badgeVariants } from "@/components/ui/badge";
import { ProjectDataProps } from "@/data/projects-data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ProjectCardProps {
  project: ProjectDataProps
}

const ProjectCard = ({ project } : ProjectCardProps ) => {

  return (
    <div>
      <Card 
        className="
          bg-slate-100 dark:bg-slate-900 hover:shadow-slate-300
          hover:dark:shadow-sky-900 hover:shadow-[0px_0px_15px] h-full w-full
          p-4 sm:p-6 transition group flex flex-col gap-2
        "
      >
        {/* Project Image */}
        <img 
          src={project.image} 
          alt={project.name} 
          className="
            w-full h-40 object-cover ring-slate-300 dark:ring-slate-800  ring-1 rounded-md hidden md:block
            group-hover:ring-slate-400 dark:group-hover:ring-slate-700 transition
          " 
        />
        <CardHeader>
          <h3 
            className="
              text-xl font-gothic-bold text-slate-900 
              dark:text-white group-hover:text-blue-500
              transition
            "
          >
            {project.name}
          </h3>
        </CardHeader>
        <CardContent className="flex flex-col gap-2 h-full">
         <p className="text-gray-600 dark:text-gray-400 text-sm">{project.description}</p>
          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-[6px] -ml-1 mt-1">
            {project.techStack.map((tech, i) => (
              <span key={i} className={`${badgeVariants({ variant: "custom" })}`}>
                {tech}
              </span>
            ))}
          </div>
          {/* Links with Icons */}
          <div className="flex justify-between items-center mt-auto">
            {project.url.repo && (
              <a href={project.url.repo} target="_blank" className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm  hover:underline">
                <FaGithub /> GitHub
              </a>
            )}
            {project.url.live && (
              <a href={project.url.live} target="_blank" className="flex items-center gap-1 text-green-600 dark:text-green-400 text-sm  hover:underline">
                <FaLink /> Live Demo
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
