import React from 'react';
import './Hero.css';


export default function Hero() {
  return (
    <section className="hero">
   <nav className="navbar">
  <div className="navbar-container">
    <div className="logo">Keerthi Prasanna R G </div>
    <div className="nav-links">
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
</nav>
<h1 className="hero-title">HI I'M</h1>
<h2 className="hero-name">KEERTHI PRASANNA <br/>
 RAMAYANADHA GOPINATH</h2>
<p className="hero-tagline">Code. Create. Innovate.</p>
<div className="hero-buttons">
  <a href="#contact" className="btn">
    GET IN TOUCH
  </a>
  <a
    href="/Keerthi-Prasanna-Resume.pdf"
    download
    target="_blank"
    rel="noopener noreferrer"
    className="btn"
  >
    DOWNLOAD RESUME
  </a>
</div>
    </section>
  );
}
