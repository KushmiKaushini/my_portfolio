import React from 'react'
import '../styles/strengths.css'

function Strengths() {
  const strengths = [
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Development',
      description: 'Strong understanding of role-based systems and mobile databases'
    },
    {
      icon: 'fas fa-code-branch',
      title: 'Collaboration',
      description: 'Practical experience with version control and collaboration tools'
    },
    {
      icon: 'fas fa-sitemap',
      title: 'System Design',
      description: 'Effective at transforming requirements into functional designs'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'UI/UX',
      description: 'Capable of building responsive UIs for both web and mobile apps'
    },
    {
      icon: 'fas fa-code',
      title: 'Clean Code',
      description: 'Delivered clean, documented code in team and solo projects'
    }
  ]

  return (
    <section id="strengths" className="strengths">
      <div className="container">
        <h2 className="section-title">Strengths & Achievements</h2>
        <div className="strengths-grid">
          {strengths.map((strength, index) => (
            <div key={index} className="strength-item">
              <div className="strength-icon">
                <i className={strength.icon}></i>
              </div>
              <h3>{strength.title}</h3>
              <p>{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Strengths
