import React, { useState } from 'react'
import '../styles/skills.css'

function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: 'fas fa-code',
      skills: [
        { name: 'JavaScript', level: 'Strong' },
        { name: 'HTML5 & CSS3', level: 'Strong' },
        { name: 'Python', level: 'Intermediate' },
        { name: 'C#', level: 'Intermediate' },
        { name: 'SQL', level: 'Intermediate' },
        { name: 'PHP', level: 'Intermediate' },
        { name: 'Dart', level: 'Intermediate' },
        { name: 'Java', level: 'Intermediate' },
        { name: 'TypeScript', level: 'Beginner' },
        { name: 'C++', level: 'Beginner' },
      ]
    },
    {
      title: 'Mobile Development',
      icon: 'fas fa-mobile-alt',
      skills: [
        { name: 'Flutter', level: 'Intermediate' },
        { name: 'React Native', level: 'Intermediate' },
        { name: 'Android Studio', level: 'Intermediate' },
        { name: 'Android SDK / Java', level: 'Intermediate' },
        { name: 'SQLite', level: 'Strong' },
        { name: 'SharedPreferences', level: 'Intermediate' },
        { name: 'Riverpod (State Mgmt)', level: 'Intermediate' },
        { name: 'WorkManager', level: 'Beginner' },
        { name: 'Offline-First Design', level: 'Strong' },
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: 'fas fa-brain',
      skills: [
        { name: 'Google Gemini API (LLM)', level: 'Intermediate' },
        { name: 'RAG Architecture', level: 'Intermediate' },
        { name: 'Sentence-Transformers', level: 'Intermediate' },
        { name: 'Local BERT (ONNX/TFLite)', level: 'Beginner' },
        { name: 'YOLOv8 (Computer Vision)', level: 'Intermediate' },
        { name: 'NLP / Text Classification', level: 'Intermediate' },
        { name: 'Scikit-learn', level: 'Intermediate' },
        { name: 'Pandas / NumPy', level: 'Intermediate' },
        { name: 'Speech-to-Text Integration', level: 'Intermediate' },
        { name: 'Fake News Detection (NLP)', level: 'Intermediate' },
      ]
    },
    {
      title: 'Frontend Development',
      icon: 'fas fa-palette',
      skills: [
        { name: 'React.js', level: 'Intermediate' },
        { name: 'Tailwind CSS', level: 'Intermediate' },
        { name: 'Framer Motion', level: 'Beginner' },
        { name: 'Responsive Web Design', level: 'Strong' },
        { name: 'CSS Flexbox & Grid', level: 'Strong' },
        { name: 'DOM Manipulation', level: 'Strong' },
        { name: 'Dark Mode UI Design', level: 'Intermediate' },
        { name: 'Figma (Prototyping)', level: 'Intermediate' },
      ]
    },
    {
      title: 'Backend & Databases',
      icon: 'fas fa-database',
      skills: [
        { name: 'MySQL', level: 'Strong' },
        { name: 'FastAPI (Python)', level: 'Intermediate' },
        { name: 'PHP', level: 'Intermediate' },
        { name: 'XAMPP / Apache', level: 'Intermediate' },
        { name: 'PostGIS', level: 'Beginner' },
        { name: 'SQL Server', level: 'Intermediate' },
        { name: 'CRUD Operations', level: 'Strong' },
        { name: 'Session Handling', level: 'Intermediate' },
        { name: 'REST API Integration', level: 'Intermediate' },
      ]
    },
    {
      title: 'Software Engineering',
      icon: 'fas fa-sitemap',
      skills: [
        { name: 'Requirements Gathering', level: 'Intermediate' },
        { name: 'ERD & DFD Diagrams', level: 'Intermediate' },
        { name: 'Role-Based Systems', level: 'Intermediate' },
        { name: 'OOP Principles', level: 'Intermediate' },
        { name: 'Modular Architecture', level: 'Intermediate' },
        { name: 'AI Agent System Design', level: 'Beginner' },
        { name: 'Multi-Agent Architecture', level: 'Beginner' },
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: 'fas fa-tools',
      skills: [
        { name: 'Git & GitHub', level: 'Strong' },
        { name: 'VS Code', level: 'Strong' },
        { name: 'Android Studio', level: 'Intermediate' },
        { name: 'Visual Studio', level: 'Intermediate' },
        { name: 'Jupyter Notebook', level: 'Intermediate' },
        { name: 'Streamlit', level: 'Intermediate' },
        { name: 'GitHub Actions (CI/CD)', level: 'Beginner' },
        { name: 'Google Maps API', level: 'Intermediate' },
      ]
    }
  ]

  const levelColor = {
    Strong: 'level-strong',
    Intermediate: 'level-intermediate',
    Beginner: 'level-beginner'
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-legend">
          <span className="legend-item"><span className="dot level-strong"></span> Strong</span>
          <span className="legend-item"><span className="dot level-intermediate"></span> Intermediate</span>
          <span className="legend-item"><span className="dot level-beginner"></span> Beginner</span>
        </div>

        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>
                <i className={category.icon}></i> {category.title}
              </h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={`skill-item ${levelColor[skill.level]}`}>
                    {skill.name}
                    <span className="skill-level-tag">{skill.level}</span>
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
