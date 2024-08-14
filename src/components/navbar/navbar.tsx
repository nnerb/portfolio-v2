import { MobileSidebar } from "./components/mobile-sidebar";
import { ModeToggle } from "./components/mode-toggle";
import NavbarMenu from "./components/navbar-menu";

const Navbar = () => {
  return ( 
    <div className="w-full z-50 fixed py-4 top-0 transition-all px-4">
      <div className="w-full flex justify-between mx-auto items-center max-w-[1100px]">
        <div>
          <img src='/src/assets/images/logo.png' className="h-8 w-8"/>
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