
import { IconType } from "react-icons"
import { FaEnvelope, FaGitAlt, FaLinkedinIn } from "react-icons/fa6"

export interface SocialDataProps {
  name: IconType
  link: string
  color: string
}

export const socialData: SocialDataProps[] = [
  {
    name: FaEnvelope,
    link: "mailto:brennaldwin.santiago@gmail.com",
    color: "linear-gradient(90deg, rgba(66,133,244,1) 0%, rgba(187,0,27,1) 25%, rgba(234,67,53,1) 50%, rgba(251,188,5,1) 75%, rgba(52,168,83,1) 100%)"
  },
  {
    name: FaGitAlt,
    link: "https://github.com/nnerb",
    color: "#24292F"
  },
  {
    name: FaLinkedinIn,
    link: "https://www.linkedin.com/in/brenn-aldwin-santiago-b16011236/",
    color: "#0A66C2"
  },
  // {
  //   name: FaFacebookF,
  //   link: "https://www.facebook.com/brenn.santiago/",
  //   color: "#3b5999"
  // }
]