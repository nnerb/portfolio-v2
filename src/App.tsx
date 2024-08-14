import Container from "./components/container"
import Home from "./components/home/home"
import Navbar from "./components/navbar/navbar"
import { ThemeProvider } from "@/components/theme-provider"



function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div 
        className="
          relative 
          w-full 
          h-full 
          font-custom 
          bg-slate-100 
          dark:bg-transparent
          text-slate-900
          dark:text-slate-200
        "
        >
        <Navbar/>
        <Container>
          <Home />
        </Container> 
      </div>
    </ThemeProvider>
  )
}

export default App
