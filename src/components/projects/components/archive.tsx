import { useState } from "react";
import { Input } from "@/components/ui/input";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import ArchiveTable from "./archive-table";

const Archive = () => {

  const [search, setSearch] = useState("");
  const trimmedSearch = search.trim().toLowerCase()
  const navigate = useNavigate()

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 min-h-screen">
      <div 
        className="inline-flex items-center group gap-1 relative text-lg cursor-pointer mb-4 text-blue-500"
        onClick={() => navigate("/")}
      >
        <FaArrowLeft className="group-hover:-translate-x-2 transition" />
        <p className="
            relative font-gothic-bold transition-all 
            after:content-[''] after:absolute after:left-0 after:bottom-0 
            after:w-0 after:h-[2px] after:bg-blue-500 
            after:transition-all after:duration-300 
            group-hover:after:w-full 
          "
        >
          Brenn Santiago
        </p>
      </div>
      {/* Title */}
      <h1 className="text-3xl font-gothic-bold text-gray-900 dark:text-white">
        📂 Project Archive
      </h1>
      <p className="text-muted-foreground mt-2">
        A collection of all my past projects. Browse and explore! 🚀
      </p>

      {/* Search Bar */}
      <div className="mt-6 flex gap-2">
        <Input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full"
        />
      </div>
      {/* Project List */}
      <ArchiveTable search={trimmedSearch}/>
    </section>
  );
};

export default Archive;
