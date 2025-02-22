
import { motion } from "framer-motion"
import { Button } from "../ui/button";
import { containerVariants, itemVariants } from "./animations";
import Particle from "@/particles";

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
  <section className="relative block w-full duration-500" id="home">
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
              dark:text-slate-400 
              leading-[1.2] 
              text-[clamp(30px,8vw,70px)] 
              m-0"
            >
            Let's design your success.
          </h3>
        </motion.div>
        <motion.div variants={itemVariants} className="mt-4">
          <p className="">
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