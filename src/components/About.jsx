import React, { useEffect, useState } from 'react'
import '../styles/about.css'

function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      })
    }, { threshold: 0.1 })

    const element = document.getElementById('about')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Hi! I'm <strong>Kushmi Kaushini K. Ekanayake</strong>, an aspiring Android Developer and Third-year undergraduate student at Horizon Campus pursuing a BSc Hons in Information Technology. I have a passion for mobile app development, system design, and UI/UX.</p>
            <p>I have hands-on experience in building Android applications that work seamlessly without an internet connection, using technologies like <strong>Java</strong>, <strong>SQLite</strong>, and <strong>Android Studio</strong>. I take pride in designing apps that offer intuitive user experiences while solving real-world problems.</p>
            <p>I am also well-versed in web development with HTML, CSS, PHP, and MySQL, and I have completed several academic projects involving team collaboration, system analysis, and database management.</p>
          </div>
          <div className="professional-summary">
            <h3>Professional Summary</h3>
            <ul>
              <li><i className="fas fa-check-circle"></i> Android Developer with experience in building role-based applications</li>
              <li><i className="fas fa-check-circle"></i> Proficient in local storage using SQLite and offline-first architecture</li>
              <li><i className="fas fa-check-circle"></i> Skilled in creating user dashboards, login systems, and complete CRUD operations</li>
              <li><i className="fas fa-check-circle"></i> Familiar with version control, database schema design, and Material UI components</li>
              <li><i className="fas fa-check-circle"></i> Effective team player with strong documentation and communication skills</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
