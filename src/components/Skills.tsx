import React, { useState, useEffect } from 'react';
import './Skills.css';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

const Skills: React.FC = () => {
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());

  const skills: Skill[] = [
    // Languages
    { name: 'Python', level: 90, category: 'languages', icon: '🐍' },
    { name: 'SQLite', level: 85, category: 'languages', icon: '🗄️' },
    { name: 'JavaScript', level: 80, category: 'languages', icon: '⚡' },
    { name: 'HTML/CSS', level: 85, category: 'languages', icon: '🎨' },
    
    // Frameworks
    { name: 'React.js', level: 75, category: 'frameworks', icon: '⚛️' },
    { name: 'Vue.js', level: 80, category: 'frameworks', icon: '💚' },
    { name: 'Flask', level: 85, category: 'frameworks', icon: '🌶️' },
    { name: 'Django', level: 70, category: 'frameworks', icon: '🎯' },
    
    // Tools & Technologies
    { name: 'Git', level: 80, category: 'tools', icon: '📝' },
    { name: 'Redis', level: 75, category: 'tools', icon: '🔴' },
    { name: 'GitHub SDK', level: 70, category: 'tools', icon: '🐙' },
    { name: 'GenAI', level: 65, category: 'tools', icon: '🤖' },
    
    // Data Science & ML
    { name: 'Machine Learning', level: 80, category: 'ml', icon: '🧠' },
    { name: 'Data Analysis', level: 85, category: 'ml', icon: '📊' },
    { name: 'Deep Learning', level: 75, category: 'ml', icon: '🔬' },
    { name: 'Statistical Modeling', level: 80, category: 'ml', icon: '📈' }
  ];

  const categories = [
    { id: 'languages', name: 'Languages', color: '#e50914' },
    { id: 'frameworks', name: 'Frameworks', color: '#ffd700' },
    { id: 'tools', name: 'Tools & Software', color: '#00d4aa' },
    { id: 'ml', name: 'ML & Data Science', color: '#ff6b6b' }
  ];

  const personalSkills = [
    'Self Starter', 'Flexible', 'Team Player', 
    'Communication', 'Multitasker', 'Adaptable'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.getAttribute('data-skill');
            if (skillName) {
              setAnimatedSkills(prev => new Set([...prev, skillName]));
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => observer.observe(bar));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title fade-in-up">Technical Expertise</h2>
        
        <div className="skills-content">
          <div className="technical-skills">
            {categories.map(category => (
              <div key={category.id} className="skill-category fade-in-up">
                <h3 className="category-title" style={{ color: category.color }}>
                  {category.name}
                </h3>
                <div className="skills-grid">
                  {skills
                    .filter(skill => skill.category === category.id)
                    .map((skill, index) => (
                      <div 
                        key={skill.name} 
                        className="skill-item"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="skill-header">
                          <span className="skill-icon">{skill.icon}</span>
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div 
                          className="skill-bar" 
                          data-skill={skill.name}
                        >
                          <div 
                            className="skill-progress"
                            style={{ 
                              width: animatedSkills.has(skill.name) ? `${skill.level}%` : '0%',
                              backgroundColor: category.color
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="personal-skills fade-in-up">
            <h3 className="category-title">Personal Skills</h3>
            <div className="personal-skills-grid">
              {personalSkills.map((skill, index) => (
                <div 
                  key={skill} 
                  className="personal-skill-tag"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="course-work fade-in-up">
          <h3 className="category-title">Course Work</h3>
          <div className="courses-grid">
            {[
              'AI: Search Method', 'Deep Learning', 'Application Development',
              'Data Structures and Algorithms', 'Database Management System',
              'Machine Learning Theory', 'Business Analytics', 'Tools in Data Science',
              'Machine Learning Practice', 'Software Engineering and Testing'
            ].map((course, index) => (
              <div 
                key={course} 
                className="course-item"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="course-bullet">📚</span>
                {course}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;