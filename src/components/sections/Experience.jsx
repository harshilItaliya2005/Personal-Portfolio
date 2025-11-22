import React, { useState, useEffect, useRef } from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const experienceRef = useRef(null);

  const experiences = [
    {
      id: 1,
      period: '2025 - Present',
      role: 'Senior Android & Frontend Developer',
      company: 'Freelance',
      description: 'Developing innovative mobile and web applications for clients across various industries, delivering high-quality solutions and exceptional user experiences.',
      achievements: [
        '20+ Successful Projects Delivered',
        '10+ Satisfied Clients',
        'Multiple App Store Launches',
        'Cross-platform Development'
      ],
      skills: ['Android', 'React.js', 'Kotlin', 'JavaScript', 'Firebase'],
      category: 'professional',
      icon: '💼',
      type: 'work'
    },
    {
      id: 2,
      period: '2022 - 2023',
      role: 'Junior Android Developer',
      company: 'Argon It Serive and LLP.',
      description: 'Started professional career focusing on Android application development using modern architecture patterns and best practices.',
      achievements: [
        '5+ Complete apps',
        'MVVM Architecture Implementation',
        'REST API Integration',
        'Team Collaboration'
      ],
      skills: ['Android', 'Java', 'REST API', 'SQLite', 'Git'],
      category: 'professional',
      icon: '🚀',
      type: 'work'
    }
  ];

  const skillTimeline = [
    {
      id: 1,
      skill: 'Android Development',
      duration: '2+ Years',
      level: 'Advanced',
      description: 'Native Android app development with Kotlin and Java',
      projects: '15+ Projects',
      icon: '📱',
      progress: 90,
      category: 'skills'
    },
    {
      id: 2,
      skill: 'Frontend Development',
      duration: '1+ Year',
      level: 'Intermediate',
      description: 'Modern web development with React.js and JavaScript',
      projects: '8+ Projects',
      icon: '🌐',
      progress: 75,
      category: 'skills'
    },
    {
      id: 3,
      skill: 'Backend Development',
      duration: '2+ Years',
      level: 'Intermediate',
      description: 'Server-side development with Node.js and Firebase',
      projects: '12+ Projects',
      icon: '⚡',
      progress: 80,
      category: 'skills'
    },
    {
      id: 4,
      skill: 'UI/UX Design',
      duration: '2+ Years',
      level: 'Advanced',
      description: 'User interface and experience design with modern tools',
      projects: '18+ Projects',
      icon: '🎨',
      progress: 85,
      category: 'skills'
    }
  ];

  const categories = [
    { key: 'all', label: 'All', count: experiences.length + skillTimeline.length },
    { key: 'professional', label: 'Work', count: experiences.length },
    { key: 'skills', label: 'Skills', count: skillTimeline.length }
  ];

  const allItems = [...experiences, ...skillTimeline];
  const filteredItems = activeCategory === 'all' 
    ? allItems 
    : allItems.filter(item => item.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  const getLevelColor = (level) => {
    switch (level) {
      case 'Advanced': return '#4ade80';
      case 'Intermediate': return '#fbbf24';
      case 'Beginner': return '#f87171';
      default: return '#667eea';
    }
  };

  return (
    <section id="experience" className="experience" ref={experienceRef}>
      <div className="container">
        <div className="experience-header">
          <h2 className={`section-title ${isVisible ? 'fade-in-up' : ''}`}>
            Experience & Skills
          </h2>
          <p className={`section-subtitle ${isVisible ? 'fade-in-up' : ''}`}>
            My professional journey and technical expertise across different domains
          </p>
        </div>

        {/* Category Filters */}
        <div className={`experience-filters ${isVisible ? 'fade-in-up' : ''}`}>
          {categories.map((category, index) => (
            <button
              key={category.key}
              className={`filter-btn ${activeCategory === category.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.key)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="filter-text">{category.label}</span>
              <span className="filter-count">{category.count}</span>
            </button>
          ))}
        </div>

        {/* Combined Timeline */}
        <div className="combined-timeline">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`timeline-item ${item.type || 'skill'} ${isVisible ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Timeline Marker */}
              <div className="timeline-marker">
                <div className="marker-icon">{item.icon}</div>
                <div className="timeline-line"></div>
              </div>

              {/* Timeline Content */}
              <div className="timeline-content compact">
                {/* Header */}
                <div className="content-header">
                  <div className="header-main">
                    <h3 className="timeline-title">
                      {item.role || item.skill}
                    </h3>
                    <span className="timeline-period">{item.period || item.duration}</span>
                  </div>
                  {item.company && (
                    <span className="company-badge">{item.company}</span>
                  )}
                  {item.level && (
                    <span 
                      className="level-badge"
                      style={{ backgroundColor: getLevelColor(item.level) + '20', color: getLevelColor(item.level) }}
                    >
                      {item.level}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="timeline-description compact">
                  {item.description}
                </p>

                {/* Progress Bar for Skills */}
                {item.progress && (
                  <div className="skill-progress-section">
                    <div className="progress-header">
                      <span className="progress-label">Proficiency</span>
                      <span className="progress-percentage">{item.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ 
                          width: `${item.progress}%`,
                          background: `linear-gradient(45deg, ${getLevelColor(item.level)}, ${getLevelColor(item.level)}99)`
                        }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Projects Count for Skills */}
                {item.projects && (
                  <div className="projects-count">
                    <span className="projects-icon">📊</span>
                    <span>{item.projects}</span>
                  </div>
                )}

                {/* Skills Tags */}
                {item.skills && (
                  <div className="skills-tags">
                    {item.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Achievements List */}
                {item.achievements && (
                  <div className="achievements-section">
                    <h4 className="achievements-title">Key Achievements:</h4>
                    <ul className="achievements-list compact">
                      {item.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="achievement-item">
                          <span className="achievement-icon">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Stats */}
        <div className={`experience-stats ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="stat-item">
            <div className="stat-number">2+</div>
            <div className="stat-label">Years in Android</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1+</div>
            <div className="stat-label">Year in Frontend</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">2+</div>
            <div className="stat-label">Years in Backend</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">2+</div>
            <div className="stat-label">Years in UI/UX</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;