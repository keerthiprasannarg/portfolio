import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>GET IN TOUCH</h2>
      <div className="contact-content">
        <div className="contact-info">
          <p>📧 keerthiprasannarg@gmail.com</p>
          <p>🔗 <a href="https://www.linkedin.com/in/keerthi-prasanna-rg/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          <p>💻 <a href="https://github.com/keerthiprasannarg" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </div>
        <form className="contact-form">
          <input placeholder="Name*" required />
          <input type="email" placeholder="Email*" required />
          <textarea placeholder="Description*" required />
          <button type="submit">SEND</button>
        </form>
      </div>
    </section>
  );
}
