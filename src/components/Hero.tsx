import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ['Full Stack Developer', 'Data Science Student', 'Machine Learning Enthusiast', 'Problem Solver'];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;
    
    const typeWriter = setInterval(() => {
      if (charIndex < currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeWriter);
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            if (charIndex > 0) {
              setDisplayText(currentRole.slice(0, charIndex - 1));
              charIndex--;
            } else {
              clearInterval(deleteInterval);
              setCurrentIndex((prev) => (prev + 1) % roles.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeWriter);
  }, [currentIndex]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in-up">
            <h1 className="hero-title">
              Hi, I'm <span className="name-highlight">Pradeepan R</span>
            </h1>
            <div className="hero-subtitle">
              <span className="typing-text">{displayText}</span>
              <span className="cursor">|</span>
            </div>
            <p className="hero-description">
              A passionate student with a keen interest in full stack development and 
              machine learning, seeking opportunities to apply my technical skills in a 
              dynamic environment. Currently pursuing B.S. in Data Science and Applications 
              at IIT Madras.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">7.37</span>
                <span className="stat-label">CGPA</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
            
            <div className="hero-actions">
              <button onClick={scrollToProjects} className="btn-primary">
                View My Work
              </button>
              <a 
                href="mailto:pradeepanravi01@gmail.com" 
                className="btn-secondary"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="hero-visual fade-in">
            <div className="code-window">
              <div className="window-header">
                <div className="window-controls">
                  <span className="control red"></span>
                  <span className="control yellow"></span>
                  <span className="control green"></span>
                </div>
                <span className="window-title">portfolio.tsx</span>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="line-number">1</span>
                  <span className="code-text">
                    <span className="keyword">const</span> 
                    <span className="variable"> developer</span> 
                    <span className="operator"> = </span>
                    <span className="string">"Pradeepan R"</span>
                    <span className="punctuation">;</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">2</span>
                  <span className="code-text">
                    <span className="keyword">const</span> 
                    <span className="variable"> skills</span> 
                    <span className="operator"> = </span>
                    <span className="punctuation">[</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">3</span>
                  <span className="code-text">
                    <span className="indent">  </span>
                    <span className="string">"Python"</span>
                    <span className="punctuation">,</span>
                    <span className="string"> "React"</span>
                    <span className="punctuation">,</span>
                    <span className="string"> "Flask"</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">4</span>
                  <span className="code-text">
                    <span className="punctuation">];</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">5</span>
                  <span className="code-text">
                    <span className="keyword">console</span>
                    <span className="punctuation">.</span>
                    <span className="method">log</span>
                    <span className="punctuation">(</span>
                    <span className="string">"Ready to code!"</span>
                    <span className="punctuation">);</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;