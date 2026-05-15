import React, { useState } from 'react'
import '../styles/projects.css'

function Projects() {
  const [flipped, setFlipped] = useState({})

  const projects = [
    {
      id: 'offlineeduapp',
      icon: 'fas fa-graduation-cap',
      title: 'OfflineEduApp',
      subtitle: 'Android Education App',
      duration: '2025 – Present',
      role: 'Lead Android Developer',
      platform: 'Android (Java, SQLite)',
      description: 'A role-based educational app designed for offline usage. Supports Student and Teacher user roles with personalized dashboards and full profile management.'
    },
    {
      id: 'giftHevan',
      icon: 'fas fa-gift',
      title: 'GiftHevan',
      subtitle: 'Online Gift Shop',
      details: 'Team Size: 7',
      tools: 'HTML, CSS, JavaScript, PHP, MySQL, XAMPP',
      role: 'Front-End Developer & Database Integrator',
      description: 'Designed core pages, created database tables, integrated MySQL backend using PHP for dynamic content rendering, and ensured responsive layouts.'
    },
    {
      id: 'libraryManagement',
      icon: 'fas fa-book',
      title: 'Library Management',
      subtitle: 'Horizon Campus',
      tools: 'PHP, MySQL, DFD/ER Diagram tools',
      role: 'System Designer & Developer',
      description: 'Conducted requirements gathering, documented functional requirements, created diagrams, and developed a working prototype for book records and loan transactions.'
    },
    {
      id: 'plasticWaste',
      icon: 'fas fa-recycle',
      title: 'Plastic Waste App',
      subtitle: 'SDG 14 Initiative',
      platform: 'Android (Front-End Only)',
      tools: 'Android Studio',
      description: 'Designed clean UI screens with info on eco-friendly alternatives. Features daily tips and plastic usage tracker (design stage).'
    },
    {
      id: 'climateEducation',
      icon: 'fas fa-cloud-sun',
      title: 'Climate Education',
      subtitle: 'SDG 13 Initiative',
      platform: 'Android (Front-End Only)',
      goal: 'Offline learning app for school children (Grades 1–13)',
      description: 'Grade-based content navigation, fully offline with no internet dependency, designed using Android Studio and XML.'
    }
  ]

  const toggleFlip = (id) => {
    setFlipped(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Project Highlights</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div
              key={project.id}
              className={`project-card ${flipped[project.id] ? 'flipped' : ''}`}
              onClick={() => toggleFlip(project.id)}
            >
              <div className="project-card-inner">
                <div className="project-front">
                  <div className="project-icon">
                    <i className={project.icon}></i>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                  <span className="view-details">View Details</span>
                </div>
                <div className="project-back">
                  <h3>{project.title}</h3>
                  {project.duration && <p><strong>Duration:</strong> {project.duration}</p>}
                  {project.role && <p><strong>Role:</strong> {project.role}</p>}
                  {project.details && <p><strong>Team Size:</strong> {project.details}</p>}
                  {project.platform && <p><strong>Platform:</strong> {project.platform}</p>}
                  {project.tools && <p><strong>Tools:</strong> {project.tools}</p>}
                  {project.goal && <p><strong>Goal:</strong> {project.goal}</p>}
                  <p>{project.description}</p>
                  <span className="back-to-card">Back</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
