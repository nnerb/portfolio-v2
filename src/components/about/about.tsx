import LeftHeader from "../left-header";
import AboutDetails from "./components/about-details";
import AboutImage from "./components/about-image";
import Ways from "./components/ways";

const About = () => {
  return ( 
    <div className="relative transition bg-slate-50 dark:bg-slate-950" id="about">
      <div className="flex flex-col align-center justify-center max-w-[900px] mx-auto py-[100px] px-4">
        <LeftHeader title="About Me"/>
        <div className="pt-8 relative flex justify-center items-center flex-col gap-[7rem]">
          <div className="grid md:grid-cols-[2fr,1fr] gap-[50px]">
            <AboutDetails />
            <AboutImage />
          </div>
          <Ways />
        </div>
      </div>
    </div>
   );
}
 
export default About;