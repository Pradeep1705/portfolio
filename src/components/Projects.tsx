import React, { useState } from 'react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  date: string;
  githubLink?: string;
  features: string[];
  category: string;
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Tracking Student Progress in Projects",
      description: "A comprehensive web application for instructors to manage and monitor student projects throughout the semester. The system allows projects to be broken into milestones for cleaner progress tracking and deadlines. It will integrate with GitHub or similar version control systems to pull and visualize commit histories.",
      technologies: ["Vue.js", "Flask", "SQLite", "Redis", "GitHub SDK", "GenAI"],
      date: "December 2024",
      githubLink: "#",
      features: [
        "Project milestone tracking",
        "GitHub integration for commit visualization",
        "Real-time progress monitoring",
        "Instructor dashboard",
        "Student progress analytics"
      ],
      category: "web"
    },
    {
      id: 2,
      title: "Crime Cast",
      description: "Analyze this dataset to predict crime categories. Developed ML models capable of accurately predicting the crime categories with an accuracy of 95% based on this information.",
      technologies: ["Python", "Machine Learning", "Data Analysis"],
      date: "August 2024",
      githubLink: "#",
      features: [
        "Crime category prediction",
        "95% accuracy ML model",
        "Data preprocessing and analysis",
        "Statistical modeling",
        "Performance optimization"
      ],
      category: "ml"
    },
    {
      id: 3,
      title: "Tickets Zippy",
      description: "This software handles the entire booking data of the Movie Tickets. It is fully based on the concept of reserving movie tickets for various theatre and user, admin logins.",
      technologies: ["HTML/CSS", "Vue.js", "Flask", "SQLite", "Redis"],
      date: "August 2023",
      githubLink: "#",
      features: [
        "Movie ticket booking system",
        "Theatre management",
        "User and admin authentication",
        "Booking history tracking",
        "Real-time seat availability"
      ],
      category: "web"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'ml', name: 'Machine Learning' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title fade-in-up">Featured Projects</h2>
        
        <div className="project-filters fade-in-up">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-header">
                <div className="project-meta">
                  <span className="project-date">{project.date}</span>
                  <span className="project-category">{project.category.toUpperCase()}</span>
                </div>
                {project.githubLink && (
                  <a href={project.githubLink} className="github-link" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                )}
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;