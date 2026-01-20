import React from 'react';
import './Experience.css';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  duration: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  icon: string;
}

interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  description: string;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Full-Stack Developer",
      company: "IIT Madras",
      duration: "Present",
      type: "Academic Project",
      description: "Currently working on full-stack development projects as part of academic curriculum, focusing on modern web technologies and best practices.",
      responsibilities: [
        "Developing responsive web applications using React and Vue.js",
        "Building RESTful APIs with Flask and Python",
        "Database design and management with SQLite",
        "Implementing version control with Git and GitHub",
        "Code review and collaborative development"
      ],
      technologies: ["React", "Vue.js", "Flask", "Python", "SQLite", "Git"],
      achievements: [
        "Successfully completed multiple full-stack projects",
        "Maintained high code quality standards",
        "Collaborated effectively in team environments"
      ]
    },
    {
      id: 2,
      title: "Data Analytics Intern",
      company: "Kriti Labs",
      duration: "Jan 2025 - June 2025",
      type: "Internship",
      description: "Gained hands-on experience in data analytics, working with real-world datasets and implementing machine learning solutions for business problems.",
      responsibilities: [
        "Analyzed large datasets to extract meaningful insights",
        "Developed predictive models using machine learning algorithms",
        "Created data visualizations and reports for stakeholders",
        "Collaborated with cross-functional teams on data-driven projects",
        "Implemented data preprocessing and cleaning techniques"
      ],
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "SQL"],
      achievements: [
        "Improved model accuracy by 15% through feature engineering",
        "Automated data processing workflows",
        "Presented findings to senior management"
      ]
    }
  ];

  const achievements: Achievement[] = [
    {
      id: 1,
      title: "1st Place in PEC Hacks",
      description: "Achieved first place in a hackathon held by Panimalar Engineering College, demonstrating exceptional problem-solving and technical skills.",
      date: "2024",
      category: "Competition",
      icon: "🏆"
    },
    {
      id: 2,
      title: "High Academic Performance",
      description: "Maintained consistent academic excellence with a CGPA of 7.37/10 in the first 12 terms of Data Science program.",
      date: "2021-2024",
      category: "Academic",
      icon: "📚"
    },
    {
      id: 3,
      title: "Project Excellence",
      description: "Successfully completed multiple complex projects including ML models with 95% accuracy and full-stack web applications.",
      date: "2023-2024",
      category: "Project",
      icon: "💻"
    }
  ];

  const certifications: Certification[] = [
    {
      id: 1,
      name: "Junior Grade Typewriting English",
      issuer: "Dote - Tamil Nadu",
      date: "Certified",
      description: "Professional typing certification demonstrating proficiency in English typing skills."
    },
    {
      id: 2,
      name: "REST APIs with Flask and Python",
      issuer: "Udemy",
      date: "Certified",
      description: "Comprehensive course covering REST API development using Flask framework and Python programming."
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title fade-in-up">Experience & Achievements</h2>
        
        <div className="experience-content">
          {/* Work Experience */}
          <div className="work-experience fade-in-up">
            <h3 className="subsection-title">Professional Experience</h3>
            <div className="experience-list">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className="experience-card"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="experience-header">
                    <div className="job-info">
                      <h4 className="job-title">{exp.title}</h4>
                      <h5 className="company-name">{exp.company}</h5>
                    </div>
                    <div className="job-meta">
                      <span className="duration">{exp.duration}</span>
                      <span className="job-type">{exp.type}</span>
                    </div>
                  </div>
                  
                  <p className="job-description">{exp.description}</p>
                  
                  <div className="responsibilities">
                    <h6>Key Responsibilities:</h6>
                    <ul>
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="job-technologies">
                    <h6>Technologies Used:</h6>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="job-achievements">
                    <h6>Key Achievements:</h6>
                    <ul>
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Achievements */}
          <div className="achievements-section fade-in-up">
            <h3 className="subsection-title">Notable Achievements</h3>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.id} 
                  className="achievement-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-content">
                    <h4 className="achievement-title">{achievement.title}</h4>
                    <p className="achievement-description">{achievement.description}</p>
                    <div className="achievement-meta">
                      <span className="achievement-date">{achievement.date}</span>
                      <span className="achievement-category">{achievement.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div className="certifications-section fade-in-up">
            <h3 className="subsection-title">Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.id} 
                  className="certification-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="cert-header">
                    <h4 className="cert-name">{cert.name}</h4>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                  <h5 className="cert-issuer">{cert.issuer}</h5>
                  <p className="cert-description">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;