import melham from "/images/company/melham.jpg"
import xircus from "/images/company/xircus.jpg"
import blackfort from "/images/company/blackfort.png"
import cebpac from "/images/company/cebpac.jpg"

interface ExperiencesProps {
  title: string;
  company: string;
  clientLogo?: string;
  date: string;
  image: string;
  description: string;
  skills: string[],
  url: string;
}


export const experiences: ExperiencesProps[] = [
  {
    title: "Backend Developer → Site Reliability Engineer (Client: Cebu Pacific Air",
    company: "Blackfort Consulting Inc.",
    clientLogo: cebpac,
    date: "Apr 2025 - Present",
    image: blackfort,
    description: `
     Started as a Backend Developer, building APIs and microservices for Cebu Pacific’s flight booking system, 
     focusing on initial booking, manage booking, and CEB Super Pass module. 
     Currently serving as an Site Reliability Engineer, managing multiple enterprise systems 
     including payments and cargo/passenger services, leading initiatives to automate manual processes, 
     handle deployments, troubleshoot incidents, and ensure smooth, reliable operations.`,
    skills: [
      'Node/Express.js', 'Apigee', 'Git', 'Azure DevOps', 'Automation', 
      'GraphQL', '.NET', 'Troubleshooting', 'Monitoring', 'Deployments'
    ],
    url: "https://blackfort.ph"
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
];
