import Header from "../header";
import { motion } from "framer-motion";
import { container, first_item, second_item } from "./animations";
import ContactDetails from "./components/contact-details";
import ContactForm from "./components/contact-form";

const Contact = () => {
  return ( 
    <section id="contact" className="bg-slate-100 dark:bg-slate-custom px-4 py-16">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-10">
        <Header title="Send Me A Message"/>
        <motion.div 
          variants={container} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once:true }} 
          className="flex flex-col md:flex-row gap-10 w-full h-full justify-center"
        >
          <motion.div 
            variants={first_item} 
            className="flex gap-5 flex-1 flex-col w-full h-full justify-center"
          >
            <h2 className="text-2xl font-gothic-bold">Getting in touch is easy!</h2>
            <ContactDetails/>
          </motion.div>
          <motion.div 
            variants={second_item} 
            className="flex w-full md:pl-5 h-full"
          >
            <div className="h-full w-full flex flex-col">
              <div className='pb-4 text-blue-500 w-full overflow-hidden flex'>
                <p className='text-xl font-gothic-bold'>
                  Great vision without great people is irrelevant. Let's work together!
                </p>
              </div>
              <ContactForm/>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
   );
}
 
export default Contact;