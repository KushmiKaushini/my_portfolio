import React from 'react'
import '../styles/education.css'

function Education() {
  const certifications = [
    { icon: 'fas fa-award', title: 'Machine Learning Fundamentals', issuer: 'Kaggle' },
    { icon: 'fas fa-award', title: 'Full-Stack Web Development', issuer: 'Udemy' },
    { icon: 'fas fa-award', title: 'Python Programming', issuer: 'Udemy' },
    { icon: 'fas fa-award', title: 'Android Basics', issuer: 'Udemy' },
    { icon: 'fas fa-award', title: 'Software Development', issuer: 'DpEducation' },
  ]

  const achievements = [
    { icon: 'fab fa-github', text: 'Active GitHub Contributor: 50+ commits across mobile, AI, and full-stack repositories' },
    { icon: 'fas fa-globe', text: 'Environmental Technology Project aligned with UN SDG 14 – Life Below Water (WhaleLink)' },
    { icon: 'fas fa-users', text: 'Open-source contributor: documentation, code reviews, and collaborative repo management' },
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>

        {/* 1. Academic Timeline Section */}
        <div className="education-timeline">
          {/* Degree */}
          <div className="education-card primary">
            <div className="education-icon">
              <i className="fas fa-university"></i>
            </div>
            <div className="education-details">
              <span className="edu-badge">Current</span>
              <h3>BSc (Hons) in Information Technology</h3>
              <h4>Horizon Campus, Malabe, Sri Lanka</h4>
              <p className="education-date">
                <i className="fas fa-calendar-alt"></i> 2022 – Present &nbsp;|&nbsp; Expected Graduation: 2027
              </p>
              
              <div className="education-specialization">
                <p className="edu-label">Specialization</p>
                <div className="edu-tags">
                  <span>Mobile Application Development</span>
                  <span>Software Engineering</span>
                  <span>Web Technologies</span>
                  <span>AI Applications</span>
                </div>
              </div>

              <div className="education-focus">
                <p className="edu-label">Relevant Coursework</p>
                <ul>
                  <li><i className="fas fa-check-circle"></i> Mobile App Development</li>
                  <li><i className="fas fa-check-circle"></i> Software Engineering</li>
                  <li><i className="fas fa-check-circle"></i> Web Technologies</li>
                  <li><i className="fas fa-check-circle"></i> Database Systems</li>
                  <li><i className="fas fa-check-circle"></i> UI/UX Design</li>
                </ul>
              </div>
            </div>
          </div>

          {/* A/L */}
          <div className="education-card secondary">
            <div className="education-icon">
              <i className="fas fa-school"></i>
            </div>
            <div className="education-details">
              <h3>G.C.E. Advanced Level</h3>
              <h4>St. Thomas Girls' High School, Matara</h4>
              <p className="education-date">
                <i className="fas fa-calendar-alt"></i> 2020
              </p>
              <p className="edu-stream">
                <i className="fas fa-stream"></i> Stream: <strong>Arts with ICT</strong>
              </p>
            </div>
          </div>
        </div>

        {/* 2. Certifications Grid Section */}
        <div className="certifications-section">
          <h3 className="subsection-title">
            <i className="fas fa-certificate"></i> Certifications
          </h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card">
                <i className={cert.icon}></i>
                <div>
                  <p className="cert-title">{cert.title}</p>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Achievements Section */}
        <div className="achievements-section">
          <h3 className="subsection-title">
            <i className="fas fa-trophy"></i> Achievements
          </h3>
          <div className="achievements-list">
            {achievements.map((item, index) => (
              <div key={index} className="achievement-item">
                <i className={item.icon}></i>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Education