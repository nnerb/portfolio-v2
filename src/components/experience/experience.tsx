import { motion } from "framer-motion"  
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import LeftHeader from "../left-header";
import { containerVariants, variants } from "./animations";
import melham from "@/assets/images/company/melham.jpg"
import xircus from "@/assets/images/company/xircus.jpg"

interface ExperiencesProps {
  title: string;
  company: string;
  date: string;
  image: string;
  description: string[];
}

const Experience = () => {
  const experiences: ExperiencesProps[] = [
    {
      title: "Full-Stack Developer Intern",
      company: "Melham Construction Corporation",
      date: "Jul 2022 - Aug 2022",
      image: melham,
      description: [
        "Developed and maintained an LMS using HTML, CSS, JavaScript, PHP, and MySQL.",
        "Optimized system performance by troubleshooting issues and improving speed.",
        "Translated client requirements into functional system designs and workflows.",
        "Collaborated with co-interns to implement updates, demonstrating teamwork."
      ],
    },
    {
      title: "Junior Software Developer",
      company: "Xircus Web3 Protocol",
      date: "Jan 2024 - Nov 2024",
      image: xircus,
      description: [
        "Built and maintained front-end components using Next.js and Chakra UI.",
        "Translated UI/UX designs into responsive and dynamic web interfaces.",
        "Optimized application performance for speed, scalability, and compatibility.",
        "Reviewed code and troubleshot issues to maintain high-quality software."
      ],
    },
  ];
  return ( 
    <section id="experience" className="py-16 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="flex flex-col items-center gap-10 max-w-[900px] mx-auto">
        <LeftHeader title="Experience"/>
        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }} 
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={variants}>
              <Card className="bg-slate-100 dark:bg-slate-900 shadow-lg mt-0!">
                <CardHeader className="flex-row gap-4">
                  <div>
                    <img src={exp.image} className="h-14 w-14 rounded-full" />
                  </div>
                  <div className="flex flex-col items-start !mt-0">
                    <CardTitle className="text-lg">{exp.title}</CardTitle>
                    <div className="text-xs text-gray-500">
                      <p>{exp.company}</p>
                      <p>{exp.date}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    {exp.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
   );
}
 
export default Experience;