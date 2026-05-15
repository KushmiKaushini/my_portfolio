import React from 'react'
import '../styles/education.css'

function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-card">
          <div className="education-icon">
            <i className="fas fa-university"></i>
          </div>
          <div className="education-details">
            <h3>BSc Hons in Information Technology</h3>
            <h4>Horizon Campus</h4>
            <p className="education-date">2022 - Present (Undergraduate)</p>
            <div className="education-focus">
              <p>Focus Areas:</p>
              <ul>
                <li>Mobile Application Development</li>
                <li>Database Management Systems</li>
                <li>Web Technologies</li>
                <li>System Analysis & Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
