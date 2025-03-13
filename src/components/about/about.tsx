import CustomEvenSection from "../custom-even-section";
import LeftHeader from "../left-header";
import AboutDetails from "./components/about-details";
import AboutImage from "./components/about-image";
import Mission from "./components/mission";
import Ways from "./components/ways";

const About = () => {
  return (  
    <CustomEvenSection id="section" aria-labelledby="about-title" customClass="pb-0">
      <div className="flex flex-col align-center justify-center max-w-[900px] mx-auto ">
        <LeftHeader title="About Me" />
        <div className="pt-8 pb-16 relative flex justify-center items-center flex-col gap-20">
          <div className="grid md:grid-cols-[2fr,1fr] gap-[50px] relative">
            <AboutDetails />
            <AboutImage />
          </div>
          <Ways />
        </div>
      </div>
      <Mission />
    </CustomEvenSection>
   );
}
 
export default About;