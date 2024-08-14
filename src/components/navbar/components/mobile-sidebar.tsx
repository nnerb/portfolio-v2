import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, } from "lucide-react"
import Sidebar from "./sidebar"
import { Button } from "@/components/ui/button"

export const MobileSidebar = () => {
  return (
      <Sheet>
        <SheetTrigger className="md:hidden hover:opacity-75 transition">
          <Button variant="outline" size="icon" className="outline-blue-500 outline outline-1" >
            <Menu className="text-blue-500" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="p-0">
          <SheetHeader>
          <SheetTitle hidden></SheetTitle>
          <SheetDescription hidden></SheetDescription>
          </SheetHeader>
          <Sidebar />   
        </SheetContent>
      </Sheet>
  )
}