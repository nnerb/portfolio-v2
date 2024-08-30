import { Variants } from "framer-motion"

/* Onscoll transitions */
export const aboutVariant: Variants = {
  hidden: {
    opacity: 0,
    x: -100
  },
  show:{
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 2
    }
  },
  hiddenImage: {
    opacity: 0,
    y: 100
  },
  showImage:{
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 2
    }
  }
}

/* More info transition */

export const containerVariants: Variants = {
  hidden: {
    height: "0px",
    transition:{
      delay: 1.3,
      duration: 0.5
    }
  },
  show :{
    height: "72px",
    transition: {
      duration: 0.5
    }
  }
}

export const ul: Variants = {
  hidden: {
    display: "none",
    transition: {
      delay: 1.3,
      staggerChildren: 0.4,
    }
  },
  show: {
    display: "block",
    transition: {
      staggerChildren: 0.4
    }
  },
  
}

export const li: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
    transition: {
      type: "spring",
      duration: 1.5
    }
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 1.5
    }
  },
}