import { menuData } from "@/data/menu-data";
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
        {menuData.map((item, index) => {
          const formattedName = formatName(item.name)
          return (
            <div 
              key={index} 
              className={cn(
                "relative text-xs cursor-pointer rounded-lg p-4 w-full font-semibold text-center",
                currentActiveSection === formattedName && "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
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