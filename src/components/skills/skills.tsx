
import Header from "../header";
import SkillsGrid from "./components/skills-grid";
import SkillsMenu from "./components/skills-menu";

const Skills = () => {
  return ( 
    <section id="skills" className=" bg-slate-100 dark:bg-slate-custom px-4 py-16">
      <div className="max-w-[900px] mx-auto flex flex-col items-center justify-center gap-10">
        <Header title="Skills"/>
        <SkillsMenu />
        <SkillsGrid />
      </div>
    </section>
   );
}
 
export default Skills;