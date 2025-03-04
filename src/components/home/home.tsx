
import { motion } from "framer-motion"
import { Button } from "../ui/button";
import { containerVariants, itemVariants } from "./animations";
import Particle from "@/particles";
import { Typewriter } from "react-simple-typewriter"

const Home = () => {

  const onButtonClick = () => {
    const fileName = 'Santiago-BrennAldwin-A-Resume.pdf'
    fetch(fileName).then(response => {
        response.blob().then(() => {
          const alink = document.createElement('a')
          alink.target = "_blank"
          alink.href = fileName 
          alink.click()
        })
    })
}

  return ( 
  <section className="relative block w-full duration-300">
    <Particle />
    <div className="relative grid place-items-center min-h-screen">
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true }} 
        className="max-w-[1100px] mx-auto px-4 flex flex-col justify-center items-start min-h-[650px] w-full"
      >
        <div className="mb-4 ml-[4px]">
          <h1 className="text-blue-500 text-[clamp(0.90rem,5vw,1rem)] m-0 p-0">
            Hi, I am
          </h1>
        </div>
        <motion.div variants={itemVariants}>
          <h2
            className="
              font-gothic-bold 
              dark:text-slate-300 
              leading-[1.2] 
              text-[clamp(30px,8vw,70px)] 
              m-0
            "
            >
            Brenn Aldwin Santiago.
          </h2>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h3 
            className="
              font-gothic-bold 
              bg-gradient-to-tl from-blue-400 via-blue-600 to-blue-800
              text-transparent bg-clip-text 
              leading-[1.2] 
              text-[clamp(30px,8vw,70px)] 
              m-0"
            >
            <span>
              <Typewriter
                words={
                  [
                    "Learning & Growing as a Developer.",
                    "Frontend Enthusiast",
                    "Passionate Problem-Solver",
                    "Code. Debug. Repeat."
                  ]
                } 
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h3>
        </motion.div>
        <motion.div variants={itemVariants} className="mt-4">
          <p className="">
            A <span className="text-blue-500 font-semibold">Software Developer</span> specializing in <span className="text-blue-500 font-semibold">React.js</span> and 
            <span className="text-blue-500 font-semibold"> Modern Web Development</span>.
          </p>
        </motion.div>
        <motion.div variants={itemVariants} className="mt-5">
          <Button 
            onClick={onButtonClick} 
            className="font-bold"
            >
            RESUME
          </Button>
        </motion.div>
      </motion.div> 
    </div>
  </section>

   );
}
 
export default Home;