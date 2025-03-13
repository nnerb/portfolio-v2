import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, } from "lucide-react"
import Sidebar from "./sidebar"
import { Button } from "@/components/ui/button"
import logo from "/images/logo.png"

const MobileSidebar = () => {

  return (
      <Sheet>
        <SheetTrigger className="md:hidden hover:opacity-75 transition" asChild>
          <Button variant="outline" size="icon" className="outline-blue-500 outline outline-1" >
            <Menu className="text-blue-500" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="p-8 bg-slate-100 dark:bg-slate-950 ">
          <SheetHeader>
            <SheetTitle className="sr-only"></SheetTitle>
            <SheetDescription className="sr-only"></SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-10">
            <div className="w-full">
              <img src={logo} className="h-12 w-12 mx-auto"/>
            </div>
            <Sidebar />  
          </div>
        </SheetContent>
      </Sheet>
  )
}

export default MobileSidebar;