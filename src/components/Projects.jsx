import React, { useState } from 'react'
import '../styles/projects.css'

function Projects() {
  const [flipped, setFlipped] = useState({})
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'Mobile & AI', 'Web & Frontend', 'Data Science & Backend', 'Specialized']

  const projects = [
    {
      id: 'smartLogistics',
      category: 'Mobile & AI',
      icon: 'fas fa-route',
      title: 'AI Smart Logistics Assistant',
      subtitle: 'Cross-Platform Mobile App',
      platform: 'React Native (iOS & Android)',
      tools: 'React Native, TypeScript, Google Maps API, REST API, Git',
      description: 'A premium real-time route optimization platform for logistics operations in Colombo, Sri Lanka. Focuses on intelligent delivery optimization, route efficiency, and modern cross-platform mobile experiences.'
    },
    {
      id: 'aiMentor',
      category: 'Mobile & AI',
      icon: 'fas fa-microphone-alt',
      title: 'AI Personal Mentor',
      subtitle: 'Voice-to-Task Academic Assistant',
      platform: 'Flutter (Android)',
      tools: 'Flutter, Dart, Google Gemini API (LLM), SQLite, Speech-to-Text, SharedPreferences',
      description: 'A voice-powered academic productivity assistant that converts natural language conversations into structured study schedules and task workflows using LLM capabilities.'
    },
    {
      id: 'offlineAiEdu',
      category: 'Mobile & AI',
      icon: 'fas fa-brain',
      title: 'Offline AI Education App',
      subtitle: 'RAG-Enabled Learning Platform',
      platform: 'Flutter (Android)',
      tools: 'Flutter, RAG Architecture, Google Gemini API, ObjectBox/SQLite, Sentence-Transformers, Local BERT (ONNX/TFLite), Riverpod',
      description: 'An offline-first AI-powered education platform for Sri Lankan students. Features intelligent syllabus-based learning, semantic search, and AI-generated assistance without continuous internet connectivity.'
    },
    {
      id: 'milestonePro',
      category: 'Mobile & AI',
      icon: 'fas fa-tasks',
      title: 'MilestonePro',
      subtitle: 'Productivity & Milestone Tracker',
      platform: 'Flutter (Android)',
      tools: 'Flutter, Dart, SharedPreferences, WorkManager, Material Design',
      description: 'A minimalist productivity and milestone tracking application with modern UI design, local persistence, task reminder functionality, and background notification scheduling.'
    },
    {
      id: 'whaleLink',
      category: 'Mobile & AI',
      icon: 'fas fa-water',
      title: 'WhaleLink',
      subtitle: 'Final Year Project – Marine AI Platform',
      platform: 'Python / FastAPI Backend',
      tools: 'Python, FastAPI, YOLOv8, PostGIS, Satellite Imagery Processing, Geospatial Data Systems',
      description: 'An AI-powered marine/environmental intelligence platform focused on satellite imagery analysis and object detection using computer vision. Aligned with UN SDG 14 – Life Below Water.'
    },
    {
      id: 'offlineeduapp',
      category: 'Mobile & AI',
      icon: 'fas fa-graduation-cap',
      title: 'OfflineEduApp',
      subtitle: 'Android Education App',
      duration: '2025 – Present',
      role: 'Lead Android Developer',
      platform: 'Android (Java, SQLite)',
      description: 'A role-based educational app designed for offline usage. Supports Student and Teacher user roles with personalized dashboards and full profile management.'
    },
    {
      id: 'plasticWaste',
      category: 'Mobile & AI',
      icon: 'fas fa-recycle',
      title: 'Plastic Waste App',
      subtitle: 'SDG 14 Initiative',
      platform: 'Android (Front-End Only)',
      tools: 'Android Studio',
      description: 'Designed clean UI screens with info on eco-friendly alternatives. Features daily tips and plastic usage tracker (design stage).'
    },
    {
      id: 'climateEducation',
      category: 'Mobile & AI',
      icon: 'fas fa-cloud-sun',
      title: 'Climate Education App',
      subtitle: 'SDG 13 Initiative',
      platform: 'Android (Front-End Only)',
      tools: 'Android Studio, XML',
      description: 'Offline learning app for school children (Grades 1–13). Grade-based content navigation, fully offline with no internet dependency, designed using Android Studio and XML.'
    },
    {
      id: 'portfolio',
      category: 'Web & Frontend',
      icon: 'fas fa-laptop-code',
      title: 'My Portfolio',
      subtitle: 'React Developer Portfolio',
      tools: 'React.js, Tailwind CSS, Framer Motion, GitHub Actions',
      description: 'A modern developer portfolio showcasing projects, skills, animations, and responsive UI components. Deployed via GitHub Actions with component-based architecture and modern UI animation.'
    },
    {
      id: 'saasLanding',
      category: 'Web & Frontend',
      icon: 'fas fa-globe',
      title: 'SaaS Landing Page',
      subtitle: 'Responsive Frontend UI',
      tools: 'HTML5, CSS3, JavaScript (ES6+), CSS Flexbox & Grid',
      description: 'A responsive SaaS-inspired landing page featuring modern layouts, animations, and polished frontend interactions with pixel-perfect UI development.'
    },
    {
      id: 'weatherApp',
      category: 'Web & Frontend',
      icon: 'fas fa-cloud-sun-rain',
      title: 'Weather App Frontend',
      subtitle: 'API-Driven Weather UI',
      tools: 'HTML5, CSS3, JavaScript (ES6+), Weather API',
      description: 'A clean weather application frontend for displaying weather-related information using API-driven interfaces with responsive design and DOM manipulation.'
    },
    {
      id: 'quickNotes',
      category: 'Web & Frontend',
      icon: 'fas fa-sticky-note',
      title: 'Quick Lecture Notes',
      subtitle: 'Web Note-Taking App',
      tools: 'HTML5, CSS3, JavaScript, LocalStorage API',
      description: 'A lightweight web-based note-taking application with auto-save functionality, organized sidebar navigation, and client-side data management using LocalStorage.'
    },
    {
      id: 'giftHevan',
      category: 'Web & Frontend',
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
      category: 'Web & Frontend',
      icon: 'fas fa-book',
      title: 'Library Management',
      subtitle: 'Horizon Campus',
      tools: 'PHP, MySQL, DFD/ER Diagram tools',
      role: 'System Designer & Developer',
      description: 'Conducted requirements gathering, documented functional requirements, created ERD/DFD diagrams, and developed a working prototype for book records and loan transactions.'
    },
    {
      id: 'housePrice',
      category: 'Data Science & Backend',
      icon: 'fas fa-chart-line',
      title: 'House Price Prediction',
      subtitle: 'ML Regression Model',
      tools: 'Python, Pandas, Scikit-learn, NumPy',
      description: 'A predictive machine learning model that estimates house prices using historical datasets and regression techniques, including data preprocessing and feature engineering.'
    },
    {
      id: 'streamlitML',
      category: 'Data Science & Backend',
      icon: 'fas fa-chart-bar',
      title: 'Streamlit ML App',
      subtitle: 'Interactive ML Dashboard',
      tools: 'Python, Streamlit, Pandas, Scikit-learn',
      description: 'An interactive machine learning dashboard for experimenting with predictive models and visualizing outputs. Demonstrates rapid AI application development and data visualization.'
    },
    {
      id: 'fakeNews',
      category: 'Data Science & Backend',
      icon: 'fas fa-newspaper',
      title: 'Fake News Detection',
      subtitle: 'NLP Text Classification',
      tools: 'Python, Jupyter Notebook, NLTK/SpaCy, Scikit-learn',
      description: 'A machine learning system that classifies news articles as fake or genuine using NLP and text classification techniques, including feature engineering and model training.'
    },
    {
      id: 'universityMgmt',
      category: 'Data Science & Backend',
      icon: 'fas fa-university',
      title: 'University Management System',
      subtitle: 'GUI-Based Desktop App',
      tools: 'C#, .NET Framework, SQL Server, Windows Forms',
      description: 'A GUI-based management platform for handling student, academic, and administrative operations, featuring OOP principles, CRUD operations, and comprehensive database schema design.'
    },
    {
      id: 'bikePlanner',
      category: 'Specialized',
      icon: 'fas fa-bicycle',
      title: 'Safe Bike Ride Planner',
      subtitle: 'Safety-Focused Route System',
      tools: 'Batch Scripting, Weather API, Location Data Processing, Environmental Data Analysis',
      description: 'A safety-focused planning system that evaluates weather, air quality, and location conditions to determine safe cycling routes using real-time environmental data.'
    },
    {
      id: 'calculator',
      category: 'Specialized',
      icon: 'fas fa-calculator',
      title: 'Basic Calculator',
      subtitle: 'Event-Driven JavaScript App',
      tools: 'HTML5, CSS3, JavaScript',
      description: 'A responsive calculator application demonstrating event-driven JavaScript programming, clean UI logic, DOM manipulation, and responsive frontend design.'
    }
  ]

  const toggleFlip = (id) => {
    setFlipped(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Project Highlights</h2>

        <div className="project-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map(project => (
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
                  <span className="project-category-badge">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                  <span className="view-details">View Details ↓</span>
                </div>
                <div className="project-back">
                  <h3>{project.title}</h3>
                  {project.duration && <p><strong>Duration:</strong> {project.duration}</p>}
                  {project.role && <p><strong>Role:</strong> {project.role}</p>}
                  {project.details && <p><strong>Team:</strong> {project.details}</p>}
                  {project.platform && <p><strong>Platform:</strong> {project.platform}</p>}
                  {project.tools && <p><strong>Tools:</strong> {project.tools}</p>}
                  <p>{project.description}</p>
                  <span className="back-to-card">← Back</span>
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
