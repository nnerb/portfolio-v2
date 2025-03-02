import Container from "./components/container"
import Home from "./components/home/home"
import Navbar from "./components/navbar/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import Socials from "./components/socials/socials"
import About from "./components/about/about"
import Experience from "./components/experience/experience"
import Projects from "./components/projects/projects"
import Skills from "./components/skills/skills"
import { Route, Routes } from "react-router-dom"
import Archive from "./components/projects/components/archive"
import Contact from "./components/contact/contact"
import { Toaster } from "./components/ui/sonner"
import Footer from "./components/footer"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div 
        className="relative w-full h-full font-gothic-regular bg-slate-100 
        dark:bg-transparent text-slate-900 dark:text-slate-200 overflow-hidden
      "
        >
        <Routes>
          <Route index element={
            <>
            <Navbar/>
            <Container>
              <div id="about">
                <Home />
                <About />
              </div>
              <Experience />
              <Skills />
              <Projects/>
              <Contact />
            </Container> 
            <Socials />
            <Footer />
          </>
          }/>
          <Route path="archive" element={<Archive />}/>
        </Routes>
      </div>
      <Toaster position="top-right" />
    </ThemeProvider>
  )
}

export default App
