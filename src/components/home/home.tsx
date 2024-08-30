import Particle from "@/particles";
import { motion } from "framer-motion"
import { Button } from "../ui/button";
import { containerVariants, itemVariants } from "./animations";

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
  <section className="w-full h-full" id="home">
    <Particle />
    <div className="relative grid min-h-screen">
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        whileInView="show" 
        viewport={{once: true}} 
        className="flex flex-col justify-center items-start min-h-[650px] w-full"
      >
        <div className="h1-div mb-4 ml-[4px]">
          <h1 className="text-blue-500 transition-all text-[clamp(0.90rem,5vw,1rem)] m-0 p-0">
            Hi, I am
          </h1>
        </div>
        <motion.div variants={itemVariants}>
          <h2
            className="
              font-customBold 
              dark:text-slate-300 
              transition-all 
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
              font-customBold 
              dark:text-slate-400 
              transition-all 
              leading-[1.2] 
              text-[clamp(30px,8vw,70px)] 
              m-0"
            >
            Let's design your success.
          </h3>
        </motion.div>
        <motion.div variants={itemVariants} className="mt-4">
          <p className="transition-all">
            A <span className="text-blue-500 font-semibold">Computer Science</span> graduate who aspires to become a 
            <span className="text-blue-500 font-semibold"> ReactJS Developer</span>.
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