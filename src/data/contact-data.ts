import { IconType } from "react-icons";
import { FaEnvelope, FaHouse, FaPhone } from "react-icons/fa6";

interface ContactDataProps {
  title: string;
  description: string;
  icon: IconType
}


export const contactData: ContactDataProps[] = [
  {
      title: "Las Piñas City, Metro Manila",
      description: "1236 Balite St. Ilaya",
      icon: FaHouse,
  },
  {
      title: "+63-935-609-5278",
      description: "Mon - Sun",
      icon: FaPhone,
  },
  {
      title: "brennaldwin.santiago@gmail.com",
      description: "Send it here",
      icon: FaEnvelope
  }
];
