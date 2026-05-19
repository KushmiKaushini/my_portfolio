import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import '../styles/hero.css'

function Hero({ scrollToSection }) {
  const [displayText, setDisplayText] = useState('')
  const [titleIndex, setTitleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const titles = [
    'Android Developer',
    'UI/UX Enthusiast',
    'Mobile App Builder',
    'Problem Solver'
  ]

  useEffect(() => {
    const currentTitle = titles[titleIndex]
    let timeout

    if (isDeleting) {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentTitle.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        }, 50)
      } else {
        setIsDeleting(false)
        setTitleIndex((titleIndex + 1) % titles.length)
        timeout = setTimeout(() => {}, 500)
      }
    } else {
      if (charIndex < currentTitle.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentTitle.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        }, 100)
      } else {
        setIsDeleting(true)
        timeout = setTimeout(() => {}, 1500)
      }
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, titleIndex, titles])

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Kushmi Kaushini</h1>
            <h2>{displayText}</h2>
            <p>Building offline-first mobile applications with seamless user experiences</p>
            <div className="cta-buttons">
              <button
                className="btn primary"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </button>
              <button
                className="btn secondary"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-container">
              <img
                src="https://via.placeholder.com/300?text=Kushmi+Kaushini"
                alt="Kushmi Kaushini"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
