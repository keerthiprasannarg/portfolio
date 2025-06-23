import React from 'react';

export default function AboutEducation() {
  return (
    <section id="about" className="about-section">
  <div className="about-container">
    <div className="about-left">
      <h2>About Me</h2>
      <p>
        I am a creative and driven software engineer dedicated to building digital
        solutions that transform everyday challenges into intuitive experiences.
        I bring clarity and innovation to every project.
      </p>
      <p>
        My focus is on developing applications that are not only visually appealing
        but also highly functional. I value clean, efficient code and scalable design.
      </p>
      <p>
        I believe in continuous learning and collaboration, striving to grow professionally
        while delivering meaningful impact.
      </p>
    </div>

    <div className="about-right">
      <h2>Education</h2>
      <div className="education-card">
        🎓 <br />
        Master of Science in Computer and Information Sciences<br />
        SUNY New Paltz<br />
        New Paltz, NY<br />
        May 2025 
      </div>
    </div>
  </div>
</section>
  );
}
