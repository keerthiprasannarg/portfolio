import React from 'react';
import './TimelineStyles.css';

const InternshipSection = () => {
  return (
  <section className="timeline-section">
  <h2 className="section-title">My Internships</h2>
  <div className="timeline">
    
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-card">
        <h3>Software Developer Intern – Smart Desert Pvt Ltd</h3>
        <p>Jul 2021 – Dec 2021</p>
        <ul>
          <li>Created wireframes and high-fidelity mockups using Figma and HTML/CSS.</li>
          <li>Participated in Agile sprints, conducted peer code reviews, and improved documentation workflows.</li>
        </ul>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-card">
        <h3>Teaching Assistant – SUNY New Paltz</h3>
        <p>Jan 2024 – May 2024</p>
        <ul>
          <li>Built a full-stack AI-powered grading website using React, FastAPI, and PostgreSQL.</li>
          <li>Improved grading efficiency by 80% and enhanced reporting using Tableau and Power BI.</li>
        </ul>
      </div>
    </div>

  </div>
</section>

  
  );
};

export default InternshipSection;
