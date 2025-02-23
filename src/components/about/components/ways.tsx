import Header from "@/components/header";
import WaysGrid from "./ways-grid";

const Ways = () => {
  return ( 
    <div className="grid place-items-center gap-10">
      <Header title="Ways that I can help" />
      <WaysGrid />
    </div>
   );
}
 
export default Ways;