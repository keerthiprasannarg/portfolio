import React from 'react';
import './Skills.css';

const skills = [
  "HTML", "CSS", "JavaScript", "Python", "Java", "Dart",
  "React", "React Native", "Node.js", "Express",
  "Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision",
  "AWS", "Git", "GitHub", "Postman", "Android Studio", "VS Code", "Figma", "Canva"
];

const Skills = () => {
  return (
    <section className="skills-wrapper">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
