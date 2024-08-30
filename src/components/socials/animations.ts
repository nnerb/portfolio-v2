// src/animations/variants.ts
import { Variants } from "framer-motion";

export const variants: Variants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 2,
      type: 'ease'
    }
  }
}

export const containerVariants: Variants = {
  hidden: {
    display: "none",
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    }
  },
  show: {
    display: "flex",
    transition: {
      staggerChildren: 0.08,
    }
  }
}

export const itemVariants: Variants = {  
  hidden: { 
    scale: 0, 
    y: 50 
  },
  show: {
    scale: 1,
    y: 0, 
    transition: { 
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
}
