import { IconType } from "react-icons";
import { AiOutlineCloudServer } from "react-icons/ai";
import { BiCode } from "react-icons/bi";
import { MdOutlineDesignServices } from "react-icons/md";

export interface WaysDataProps {
  id: number;
  title: string;
  icon: IconType;
  caption: string;
}

export const waysData: WaysDataProps[] = [
  {
    id: 1,
    title: 'Full-Stack Web Development',
    icon: BiCode,
    caption: 'Building scalable web applications with both frontend and backend technologies, ensuring seamless user experience and performance.'
  },
  {
    id: 2,
    title: 'User-Centered Design',
    icon: MdOutlineDesignServices,
    caption: 'Designing intuitive and responsive interfaces while ensuring accessibility and performance on all devices.'
  },
  {
    id: 3,
    title: 'API Development & Integration',
    icon: AiOutlineCloudServer,
    caption: 'Creating and integrating RESTful APIs to connect frontend interfaces with powerful backend services.'
  },
];
