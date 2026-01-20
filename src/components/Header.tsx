import React, { useState, useEffect } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">PRADEEPAN</span>
            <span className="logo-subtitle">PORTFOLIO</span>
          </div>
          
          <nav className="nav">
            <ul className="nav-list">
              <li><button onClick={() => scrollToSection('hero')} className="nav-link">Home</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button></li>
              <li><button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button></li>
              <li><button onClick={() => scrollToSection('education')} className="nav-link">Education</button></li>
              <li><button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button></li>
            </ul>
          </nav>

          <div className="header-actions">
            <a 
              href="mailto:pradeepanravi01@gmail.com" 
              className="btn-primary contact-btn"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;