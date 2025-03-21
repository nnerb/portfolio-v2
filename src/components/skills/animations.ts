import { Variants } from "framer-motion";

export const variants: Variants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "ease"
    }
  }
}