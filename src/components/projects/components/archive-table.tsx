import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { projectData } from "@/data/projects-data";

const ArchiveTable = ({ search } : { search: string }) => {

  const filteredProjects = projectData.filter((project) => {
    const { name, year } = project
    const techStack = project.techStack.map((tech) => tech.toLowerCase())
  
    return (
      name.toLowerCase().includes(search.toLowerCase()) ||
      year.includes(search.toLowerCase()) ||
      techStack.includes(search.toLowerCase())
    )
  }
    
  );

  return ( 
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
   );
}
 
export default ArchiveTable;