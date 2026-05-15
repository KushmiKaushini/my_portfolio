import React, { useEffect, useState } from 'react'
import '../styles/skills.css'

function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: 'fas fa-code',
      skills: ['Java', 'C#', 'SQL', 'PHP', 'C++', 'HTML', 'CSS']
    },
    {
      title: 'Mobile Development',
      icon: 'fas fa-mobile-alt',
      skills: ['Android Studio', 'Android SDK', 'XML']
    },
    {
      title: 'Databases',
      icon: 'fas fa-database',
      skills: ['SQLite', 'MySQL']
    },
    {
      title: 'Version Control',
      icon: 'fas fa-code-branch',
      skills: ['Git', 'GitHub']
    },
    {
      title: 'Other Tools',
      icon: 'fas fa-tools',
      skills: ['Visual Studio', 'XAMPP', 'VS Code']
    },
    {
      title: 'Concepts',
      icon: 'fas fa-lightbulb',
      skills: ['Offline-first design', 'OOP', 'CRUD operations', 'UI/UX']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>
                <i className={category.icon}></i> {category.title}
              </h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
