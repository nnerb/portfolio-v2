import { useScroll, useTransform } from "framer-motion";
import MobileSidebar from "./components/mobile-sidebar";
import ModeToggle from "./components/mode-toggle";
import NavbarMenu from "./components/navbar-menu";
import { useEffect, useState } from "react";
import logo from "@/assets/images/logo.png"

const Navbar = () => {

  const { scrollYProgress } = useScroll();

  const backgroundTransform = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["", "bg-slate-100 dark:bg-slate-950"]
  );
  const boxShadowTransform = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["none", "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"]
  );

  const [background, setBackground] = useState<string>();
  const [boxShadow, setBoxShadow] = useState<string>();

  useEffect(() => {
    const unsubscribeBackground = backgroundTransform.on("change",setBackground);
    const unsubscribeBoxShadow = boxShadowTransform.on("change", setBoxShadow);
    return () => {
      unsubscribeBackground();
      unsubscribeBoxShadow();
    };
  }, [backgroundTransform, boxShadowTransform]);
  return ( 
    <div className={`w-full z-50 fixed py-4 top-0 ${background}`} style={{ boxShadow }}>
      <div className="w-full flex justify-between mx-auto items-center max-w-[1100px] px-4">
        <div>
          <img src={logo} className="h-8 w-8"/>
        </div>
        <NavbarMenu />
        <div className="flex items-center justify-center gap-4"> 
          <ModeToggle />
          <MobileSidebar />
        </div>
      </div>
    </div>
   );
}
 
export default Navbar;