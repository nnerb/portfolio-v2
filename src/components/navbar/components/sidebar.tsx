import { menuItems } from "@/constants/menuItem";
import { cn } from "@/lib/utils";
import { useActiveSectionStore } from "@/stores/activeSectionStore";
import { formatName } from "@/utils/formatName";
import { Link } from "react-scroll";

  const Sidebar = () => {

    const { currentActiveSection, setCurrentActiveSection } = useActiveSectionStore();

    const handleSetActive = (section: string) => {
      setCurrentActiveSection(section);
    };

  return ( 
    <div className="flex flex-col justify-center items-center gap-5 mt-5 w-full">
        {menuItems.map((item, index) => {
          const formattedName = formatName(item.name)
          return (
            <div 
              key={index} 
              className={cn(
                "relative text-xs cursor-pointer rounded-lg p-4 w-full font-semibold text-center",
                currentActiveSection === formattedName && "bg-blue-200 dark:bg-blue-400"
              )}
            >
              <Link
                name={formattedName}
                activeClass="active"
                onSetActive={() => handleSetActive(formattedName)}
                spy
                to={formattedName}
                offset={-60}
                
            >
                {item.name}
            </Link>
            </div>
          )
        })}
    </div>
   );
}
 
export default Sidebar;