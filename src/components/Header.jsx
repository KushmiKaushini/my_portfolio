import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext.jsx'
import '../styles/header.css'

function Header({ activeSection, scrollToSection }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ]

  const handleNavClick = (id) => {
    scrollToSection(id)
    setMenuOpen(false)
  }

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
    if (!menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  return (
    <header>
      <div className="container">
        <div className="navbar">
          <div className="logo">KKK</div>
          <nav className={menuOpen ? 'active' : ''}>
            <ul>
              {navLinks.map(link => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={activeSection === link.id ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.id)
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header-controls">
            <button className="theme-toggle" onClick={toggleTheme} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
              <i className={`fas fa-${theme === 'dark' ? 'sun' : 'moon'}`}></i>
            </button>
            <div className="menu-toggle" onClick={handleMenuToggle}>
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
