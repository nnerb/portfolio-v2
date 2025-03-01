import { Variants } from "framer-motion"

export const variants: Variants = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'ease',
      duration: 1,
    },
  },
}
