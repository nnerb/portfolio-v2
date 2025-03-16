import Header from "@/components/header";
import WaysGrid from "./ways-grid";

const Ways = () => {
  return ( 
    <section className="grid place-items-center gap-10">
      <Header title="Ways that I can help" />
      <WaysGrid />
    </section>
   );
}
 
export default Ways;