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

  const highlights = [
    {
      icon: 'fas fa-mobile-alt',
      text: 'Mobile Application Developer Intern with hands-on Android & Flutter experience'
    },
    {
      icon: 'fas fa-wifi',
      text: 'Specializes in offline-first application design using SQLite, SharedPreferences & RAG architecture'
    },
    {
      icon: 'fas fa-brain',
      text: 'Built AI-integrated mobile solutions including LLM-powered voice assistants and RAG-enabled education apps'
    },
    {
      icon: 'fas fa-code',
      text: 'Proficient in RESTful API integration, Google Maps API, and Google Gemini API'
    },
    {
      icon: 'fas fa-globe',
      text: 'Full-stack web experience: HTML/CSS, JavaScript, PHP, MySQL, and React.js'
    },
    {
      icon: 'fas fa-chart-line',
      text: 'Data science skills in Python: ML models, NLP, and predictive analytics with Scikit-learn'
    },
    {
      icon: 'fab fa-github',
      text: 'Active open-source contributor with 50+ commits across mobile, AI, and full-stack repositories'
    },
    {
      icon: 'fas fa-users',
      text: 'Effective team player with strong documentation, system design, and communication skills'
    }
  ]

  const contactLinks = [
    { icon: 'fas fa-envelope', label: 'kushmi1428@gmail.com', href: 'mailto:kushmi1428@gmail.com' },
    { icon: 'fab fa-github', label: 'github.com/KushmiKaushini', href: 'https://github.com/KushmiKaushini' },
    { icon: 'fab fa-linkedin', label: 'LinkedIn Profile', href: 'https://linkedin.com/in/k-kaushini-k-ekanayake-1b86b9254' },
    { icon: 'fas fa-phone', label: '+94 78 841 3056', href: 'tel:+94788413056' },
    { icon: 'fas fa-map-marker-alt', label: 'Matara, Sri Lanka', href: null },
  ]

  return (
    <section id="about" className={`about ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">

          <div className="about-text">
            <p>
              Hi! I'm <strong>Kaushini K. Ekanayake</strong> — a motivated and fast-learning
              <strong> Mobile Application Developer Intern</strong> based in Matara, Sri Lanka.
              I'm currently pursuing a <strong>BSc (Hons) in Information Technology</strong> at
              Horizon Campus (Expected 2027), specializing in Mobile App Development and AI Applications.
            </p>
            <p>
              I have hands-on experience in <strong>Android development</strong>, <strong>Flutter</strong>,
              and <strong>offline-first application design</strong>, having built multiple mobile projects
              including an AI-powered offline education platform (RAG architecture), a voice-to-task LLM
              assistant, and a real-time logistics route optimizer using React Native and Google Maps API.
            </p>
            <p>
              Beyond mobile, I work with <strong>Python for AI/ML</strong> (fake news detection, house
              price prediction, computer vision with YOLOv8) and full-stack web development
              (React.js, PHP, MySQL). I'm passionate about building intuitive, user-centric experiences
              that solve real-world problems — both on and offline.
            </p>

            <div className="contact-links">
              {contactLinks.map((link, i) => (
                link.href
                  ? <a key={i} href={link.href} className="contact-link" target="_blank" rel="noreferrer">
                      <i className={link.icon}></i> {link.label}
                    </a>
                  : <span key={i} className="contact-link no-link">
                      <i className={link.icon}></i> {link.label}
                    </span>
              ))}
            </div>
          </div>

          <div className="professional-summary">
            <h3>Professional Highlights</h3>
            <ul>
              {highlights.map((item, i) => (
                <li key={i}>
                  <i className={item.icon}></i>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
