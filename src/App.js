import React from 'react';
import './styles.css';
import Hero from './components/Hero';
import AboutEducation from './components/AboutEducation';
import Internships from './components/Internships';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <Hero />

      <div id="about">
        <AboutEducation />
      </div>

      <div id="experience">
        <div className="full-timeline-wrapper">
          <Internships />
          <Experiences />
        </div>
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
