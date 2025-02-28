import LeftHeader from "../left-header";
import ExperienceGrid from "./components/experience-grid";

const Experience = () => {
  return ( 
    <section id="experience" className="py-16 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="flex flex-col items-center gap-10 max-w-[900px] mx-auto">
        <LeftHeader title="Experience"/>
        <ExperienceGrid />
      </div>
    </section>
   );
}
 
export default Experience;