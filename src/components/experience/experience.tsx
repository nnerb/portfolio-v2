import { motion } from "framer-motion"  
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import LeftHeader from "../left-header";
import { containerVariants, variants } from "./animations";
import melham from "@/assets/images/company/melham.jpg"
import xircus from "@/assets/images/company/xircus.jpg"
import { badgeVariants } from "../ui/badge";

interface ExperiencesProps {
  title: string;
  company: string;
  date: string;
  image: string;
  description: string;
  skills: string[],
  url: string;
}

const Experience = () => {
  const experiences: ExperiencesProps[] = [
    {
      title: "Full-Stack Developer Intern",
      company: "Melham Construction Corporation",
      date: "Jul 2022 - Aug 2022",
      image: melham,
      description: `
        At Melham Construction Corporation, I helped develop and maintain an LMS to 
        streamline learning processes, using HTML, CSS, JavaScript, PHP, and MySQL. 
        I optimized system performance by troubleshooting issues and improving speed,
        ensuring a seamless user experience. Working closely with co-interns, 
        I translated client needs into functional workflows and implemented updates, fostering teamwork and 
        problem-solving skills.`,
      skills: ['HTML & CSS', 'Bootstrap', 'jQuery', 'PHP', 'MySQL', 'MariaDB', 'XAMPP', 'Trello'],
      url: "https://uip.ph"
    },
    {
      title: "Junior Software Developer",
      company: "Xircus Web3 Protocol",
      date: "Jan 2024 - Nov 2024",
      image: xircus,
      description: `
        At Xircus, we built the 'WordPress of Web3,' enabling users to launch decentralized marketplaces
        with ease. I developed front-end components using Next.js and Chakra UI, creating pre-made templates for
        seamless customization. I also optimized performance for speed and scalability while reviewing code
        and troubleshooting issues to ensure a high-quality user experience.`,
      skills: ['HTML & CSS', 'Next.js', 'React.js', 'Chakra UI', 'Tanstack Query', 'GraphQL', 'Trello'],
      url: "https://xircus.app/"
    },
  ];
  return ( 
    <section id="experience" className="py-16 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="flex flex-col items-center gap-10 max-w-[900px] mx-auto">
        <LeftHeader title="Experience"/>
        <motion.div 
          className="grid md:grid-cols-2 gap-6 w-full cursor-pointer"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }} 
        >
          {experiences.map((exp, index) => (
            <a key={index} href={exp.url} target="_blank" rel="noopener noreferrer">
              <motion.div
                variants={variants}
                whileHover={{ scale: 1.05 }}
                className="h-full"
              >
                <Card className="bg-slate-100 dark:bg-slate-900 shadow-lg mt-0! h-full">
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
                  <CardContent
                    className="text-sm text-slate-700 dark:text-slate-400"
                  >
                  {exp.description}
                  </CardContent>
                  <div className="px-6 pb-6 flex flex-wrap gap-2">
                    {exp.skills.map((skill, index) => (
                      <p className={`${badgeVariants({ variant: "custom" })}`} key={index}>{skill}</p>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
   );
}
 
export default Experience;