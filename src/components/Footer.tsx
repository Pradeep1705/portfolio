import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Email',
      url: 'mailto:pradeepanravi01@gmail.com',
      icon: '📧'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/pradeepan',
      icon: '💼'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/pradeepan',
      icon: '🐙'
    },

  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="footer">
      <div className="footer-background">
        <div className="footer-overlay"></div>
      </div>
      
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3 className="logo-text">PRADEEPAN R</h3>
              <p className="logo-subtitle">Full Stack Developer & Data Science Student</p>
            </div>
            <p className="footer-description">
              Passionate about creating innovative solutions through technology. 
              Always eager to learn, grow, and contribute to meaningful projects.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="footer-link"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Get In Touch</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:pradeepanravi01@gmail.com" className="contact-link">
                  pradeepanravi01@gmail.com
                </a>
              </div>

              <div className="contact-item">
                <span className="contact-icon">💼</span>
                <a href="https://linkedin.com/in/pradeepan" className="contact-link" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Connect With Me</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-link"
                  target={social.name !== 'Email' && social.name !== 'Phone' ? '_blank' : undefined}
                  rel={social.name !== 'Email' && social.name !== 'Phone' ? 'noopener noreferrer' : undefined}
                  title={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Pradeepan R. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;