import { useState } from "react";
import { projectData } from "@/data/projects-data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Archive = () => {
  const [search, setSearch] = useState("");
  const filteredProjects = projectData.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase())
  );

  const navigate = useNavigate()

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 min-h-screen">
      <div 
        className="inline-flex items-center group gap-1 relative text-lg cursor-pointer mb-4 text-blue-500"
        onClick={() => navigate("/")}
      >
        <FaArrowLeft className="group-hover:-translate-x-2 transition" />
        <p className="
            relative font-gothic-bold transition-all 
            after:content-[''] after:absolute after:left-0 after:bottom-0 
            after:w-0 after:h-[2px] after:bg-blue-500 
            after:transition-all after:duration-300 
            group-hover:after:w-full 
          "
        >
          Brenn Santiago
        </p>
      </div>
      {/* Title */}
      <h1 className="text-3xl font-gothic-bold text-gray-900 dark:text-white">
        📂 Project Archive
      </h1>
      <p className="text-muted-foreground mt-2">
        A collection of all my past projects. Browse and explore! 🚀
      </p>

      {/* Search Bar */}
      <div className="mt-6 flex gap-2">
        <Input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full"
        />
        <Button variant="default">Search</Button>
      </div>

      {/* Project List */}
      <div className="mt-6">
        <Table className="text-base">
          <TableHeader>
            <TableRow className="font-gothic-bold text-[15px]">
              <TableHead>Year</TableHead>
              <TableHead>Project</TableHead>
              <TableHead className="hidden sm:table-cell">Tech Stack</TableHead>
              <TableHead>Links</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProjects
            .sort((a,b) => parseInt(b.year) - parseInt(a.year))
            .map((project, index) => (
              <TableRow key={index}>
                <TableCell className="text-muted-foreground">{project.year}</TableCell>
                <TableCell className="font-gothic-bold text-muted-foreground ">{project.name}</TableCell>
                <TableCell className="hidden sm:block">
                  <div className="flex gap-2 flex-wrap">
                    {project.techStack.map((tech, i) => (
                      <Badge key={i} variant="custom" className="">{tech}</Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="p-3 text-sm font-gothic-bold">
                  <div className="flex gap-3">
                    {project.url.repo && (
                      <a
                        href={project.url.repo}
                        target="_blank"
                        className="text-blue-500  hover:underline"
                      >
                        GitHub
                      </a>
                    )}
                    {project.url.live && (
                      <a
                        href={project.url.live}
                        target="_blank"
                        className="text-green-600 dark:text-green-400 hover:underline"
                      >
                        Live
                      </a>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default Archive;
