import Skills from './components/Skills/Skills'
import Contact from './components/Contacts/Contact'
import Project from './components/Project'
import Experience from './components/Experience/Experience'
import About from './components/About/About'
import Header from './components/Header'
import ThemeToggle from './components/ThemeToggle'
import { ThemeProvider } from './context/ThemeContext'

const App = () => {
  return (
    <>
      <ThemeProvider>
        <div className="relative overflow-x-hidden w-full min-h-screen bg-white text-black dark:bg-[#121212] dark:text-white transition-colors duration-300">
          <Header />
          <main>
            <About />
            <Skills />
            <Experience />
            <Project />
            <Contact />
            <ThemeToggle />
          </main>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
