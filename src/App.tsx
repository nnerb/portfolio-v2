import Container from "./components/container"
import Home from "./components/home/home"
import Navbar from "./components/navbar/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import Socials from "./components/socials/socials"
import About from "./components/about/about"
import Experience from "./components/experience/experience"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div 
        className="relative w-full h-full font-gothic-regular bg-slate-100 
        dark:bg-transparent text-slate-900 dark:text-slate-200 overflow-hidden
      "
        >
        <Navbar/>
        <Container>
          <div id="about">
            <Home />
            <About />
          </div>
          <Experience />
        </Container> 
        <Socials />
      </div>
    </ThemeProvider>
  )
}

export default App
