import melham from "/images/company/melham.jpg"
import xircus from "/images/company/xircus.jpg"
import blackfort from "/images/company/blackfort.png"
import cebpac from "/images/company/cebpac.jpg"

interface ExperiencesProps {
  title: string;
  company: string;
  client?: string;
  clientLogo?: string;
  date: string;
  image: string;
  description: string;
  skills: string[],
  url: string;
}


export const experiences: ExperiencesProps[] = [
  {
    title: "Backend Developer",
    client: "Cebu Pacific Air",
    company: "Blackfort Consulting Inc.",
    clientLogo: cebpac,
    date: "Apr 2025 - Present",
    image: blackfort,
    description: `
     At Cebu Pacific, we handle flight booking services for millions of passengers, 
     from initial search to manage booking and Super Pass subscriptions. 
     I developed and maintained backend APIs using Node.js and Express.js, integrating Navitaire's 
     GraphQL and REST endpoints with Apigee management. I led an automation initiative that reduced manual validation effort by 95%, and supported bank 
     payment integrations with SAP. I also conducted code reviews, resolved production issues, and 
     ensured financial data reliability for transaction processing.`,
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
