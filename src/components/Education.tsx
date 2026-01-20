import React from 'react';
import './Education.css';

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  cgpa?: string;
  percentage?: string;
  status: string;
  description: string;
  highlights: string[];
}

const Education: React.FC = () => {
  const educationData: EducationItem[] = [
    {
      id: 1,
      degree: "B.S. in Data Science and Applications",
      institution: "Indian Institute of Technology, Madras",
      duration: "2021-2025",
      cgpa: "7.37/10",
      status: "Completed",
      description: "Currently pursuing a comprehensive degree program focusing on data science, machine learning, and statistical analysis with practical applications.",
      highlights: [
        "First 12 terms completed with distinction",
        "Strong foundation in statistical methods",
        "Hands-on experience with ML algorithms",
        "Data visualization and analysis projects"
      ]
    },
    {
      id: 2,
      degree: "Bachelor of Commerce",
      institution: "Ramakrishna Mission Vivekananda College",
      duration: "2018-2021",
      cgpa: "7.0/10",
      status: "Completed",
      description: "Completed undergraduate degree in Commerce with focus on business fundamentals, accounting, and analytical thinking.",
      highlights: [
        "Strong analytical and problem-solving skills",
        "Business fundamentals and economics",
        "Financial analysis and accounting",
        "Leadership and teamwork experience"
      ]
    },
    {
      id: 3,
      degree: "Class XII",
      institution: "Alagappa Matriculation Senior Secondary School",
      duration: "2017-2018",
      percentage: "88.3%",
      status: "Completed",
      description: "Completed higher secondary education with excellent academic performance and strong foundation in mathematics and sciences.",
      highlights: [
        "Excellent academic performance",
        "Strong foundation in mathematics",
        "Science and analytical subjects",
        "Active participation in school activities"
      ]
    }
  ];

  return (
    <section id="education" className="education section">
      <div className="container">
        <h2 className="section-title fade-in-up">Educational Journey</h2>
        
        <div className="education-timeline">
          {educationData.map((item, index) => (
            <div 
              key={item.id} 
              className={`timeline-item fade-in-up ${index % 2 === 0 ? 'left' : 'right'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-content">
                <div className="education-card">
                  <div className="card-header">
                    <div className="institution-info">
                      <h3 className="degree-title">{item.degree}</h3>
                      <h4 className="institution-name">{item.institution}</h4>
                    </div>
                    <div className="education-meta">
                      <span className="duration">{item.duration}</span>
                      <span className={`status ${item.status.toLowerCase().replace(' ', '-')}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="performance-metrics">
                    {item.cgpa && (
                      <div className="metric">
                        <span className="metric-label">CGPA:</span>
                        <span className="metric-value">{item.cgpa}</span>
                      </div>
                    )}
                    {item.percentage && (
                      <div className="metric">
                        <span className="metric-label">Percentage:</span>
                        <span className="metric-value">{item.percentage}</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="education-description">{item.description}</p>
                  
                  <div className="highlights">
                    <h5 className="highlights-title">Key Highlights:</h5>
                    <ul className="highlights-list">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx} className="highlight-item">{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-year">{item.duration.split('-')[0]}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="education-stats fade-in-up">
          <div className="stat-card">
            <div className="stat-icon">🎓</div>
            <div className="stat-info">
              <span className="stat-number">3</span>
              <span className="stat-label">Degrees Pursued</span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">📚</div>
            <div className="stat-info">
              <span className="stat-number">7+</span>
              <span className="stat-label">Years of Learning</span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🏆</div>
            <div className="stat-info">
              <span className="stat-number">7.37</span>
              <span className="stat-label">Current CGPA</span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-info">
              <span className="stat-number">IIT</span>
              <span className="stat-label">Madras Student</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;