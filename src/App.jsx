import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { ContentProvider, useContent } from './context/ContentContext.jsx'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Strengths from './components/Strengths'
import Contact from './components/Contact'
import Footer from './components/Footer'
import KeyboardTriggerListener from './components/KeyboardTriggerListener.jsx'
import AdminModal from './components/admin/AdminModal.jsx'
import AdminPanel from './components/admin/AdminPanel.jsx'
import './styles/admin.css'

function AppShell() {
  const [activeSection, setActiveSection] = useState('home')
  const { adminOpen, adminAuthenticated, adminError, openAdmin, closeAdmin, verifyAdmin } = useContent()

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      let current = ''

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.clientHeight

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id')
        }
      })

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetPosition = element.offsetTop - 80
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <div className="App">
      <KeyboardTriggerListener />
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Strengths />
      <Contact />
      <Footer />
      <AdminModal
        isOpen={adminOpen}
        onClose={closeAdmin}
        onAuthenticate={verifyAdmin}
        authError={adminError}
      />
      {adminAuthenticated && <AdminPanel />}
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <ContentProvider>
        <AppShell />
      </ContentProvider>
    </ThemeProvider>
  )
}

export default App
