import CustomEvenSection from "../custom-even-section";
import LeftHeader from "../left-header";
import ExperienceGrid from "./components/experience-grid";

const Experience = () => {
  return ( 
    <CustomEvenSection id="experience">
      <div className="flex flex-col items-center gap-10 max-w-[900px] mx-auto">
        <LeftHeader title="Experience"/>
        <ExperienceGrid />
      </div>
    </CustomEvenSection>
   );
}
 
export default Experience;