import { IconType } from "react-icons";
import { AiOutlineCloudServer } from "react-icons/ai";
import { BiCode } from "react-icons/bi";
import { MdOutlineDesignServices } from "react-icons/md";

export interface WaysDataProps {
  title: string;
  icon: IconType;
  caption: string;
}

export const waysData: WaysDataProps[] = [
  {
    'title': 'Full-Stack Web Development',
    'icon': BiCode,
    'caption': 'Building scalable web applications with both frontend and backend technologies, ensuring seamless user experience and performance.'
  },
  {
    'title': 'API Development',
    'icon': AiOutlineCloudServer,
    'caption': 'Creating and integrating RESTful APIs to connect frontend interfaces with powerful backend services.'
  },
  {
    'title': 'User-Centered Design',
    'icon': MdOutlineDesignServices,
    'caption': 'Designing intuitive and responsive interfaces while ensuring accessibility and performance on all devices.'
  }
];
