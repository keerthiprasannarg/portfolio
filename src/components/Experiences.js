import React from 'react';
import './TimelineStyles.css';

const ExperienceSection = () => {
  return (
   <section className="timeline-section">
  <h2 className="section-title">My Experiences</h2>

  <div className="timeline">
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-card">
        <h3>Software Engineer – Smart Desert Pvt Ltd | Bengaluru</h3>
        <p>May 2022 – Aug 2024</p>
        <ul>
          <li>Built a social media platform using the MERN stack (MongoDB, Express.js, React, Node.js).</li>
          <li>Integrated Stripe for secure transactions and implemented role-based access control.</li>
          <li>Wrote SQL and Python scripts to ensure backend system stability and data integrity.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

  );
};

export default ExperienceSection;
