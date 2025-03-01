import { motion } from "framer-motion"
import { containerVariants, variants } from "../animations";
import { experiences } from "@/data/experience-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const ExperienceGrid = () => {

  return ( 
    <motion.div 
      className="relative w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }} 
    >
      {/* Vertical line */}
       <div className="absolute left-5 sm:left-1/2 to h-full w-1 
       bg-slate-300 dark:bg-slate-900 transform sm:-translate-x-1/2 "/>

      <div className="flex flex-col gap-10 w-full">
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              variants={variants}
              key={index}
              className={`
                relative flex items-start gap-4 sm:gap-10 h-full w-full pl-16 
                sm:pl-0 flex-row ${isLeft ? "sm:flex-row" : "sm:flex-row-reverse" }
              `}
            >
              {/* Dot Indicator on the Timeline */}
              <div className="absolute left-5 sm:left-1/2 top-[calc(50%-24px)] transform 
              -translate-x-1/2 bg-blue-500 dark:bg-blue-400 rounded-full">
                <a 
                  className="flex-shrink-0"
                  href={exp.url}
                  target="_blank"
                >
                  <img src={exp.image} className="h-12 w-12 rounded-full border border-primary" />
                </a>
              </div>

              {/* Experience Card */}
              <div className={`w-full sm:w-1/2 ${isLeft ? "sm:pr-10" : "sm:pl-10"}`}>
                <Card 
                  className="
                    bg-slate-100 dark:bg-slate-900 hover:shadow-slate-300
                    hover:dark:shadow-sky-900 hover:shadow-[0px_0px_15px] h-full w-full
                    p-4 sm:p-6 transition
                  "
                >
                  <Accordion type="multiple" defaultValue={[experiences[0].company]}>               
                    <AccordionItem value={exp.company} className="cursor-default flex flex-col gap-4">
                      <AccordionTrigger className="w-full">
                        <CardHeader className="flex-row gap-4 w-full">
                          <div className="flex flex-col items-start">
                            <CardTitle className="text-lg text-start">{exp.title}</CardTitle>
                            <div className="text-xs text-gray-500 flex flex-col items-start w-full">
                              <a 
                                className="hover:underline cursor-pointer text-start"
                                href={exp.url}
                                target="_blank"
                              >
                                {exp.company}
                              </a>
                              <p>{exp.date}</p>
                            </div>
                          </div>
                        </CardHeader>
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4">
                        <CardContent className="text-sm text-slate-700 dark:text-slate-400 ">
                          {exp.description}
                        </CardContent>
                        <div className="flex flex-wrap gap-[6px]">
                          {exp.skills.map((skill, index) => (
                            <Badge variant="custom" key={index}>
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Card>
              </div>
            </motion.div>
          )
      })}
      </div>
    </motion.div>

   );
}
 
export default ExperienceGrid;