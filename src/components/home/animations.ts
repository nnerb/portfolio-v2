import { Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.2,
    }
  }
}

export const itemVariants: Variants = {
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1, 
    transition: {
      duration: 1,
      type: "ease"
    }
  }
}
