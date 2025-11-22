import React, { useState, useEffect, useRef } from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState([]);
  const skillsRef = useRef(null);

  const skills = [
    { name: 'Android Development', level: 90, icon: '📱', category: 'mobile' },
    { name: 'Kotlin', level: 85, icon: '⚡', category: 'language' },
    { name: 'Java', level: 80, icon: '☕', category: 'language' },
    { name: 'React.js', level: 88, icon: '⚛️', category: 'frontend' },
    { name: 'JavaScript', level: 85, icon: '🟨', category: 'language' },
    { name: 'HTML/CSS', level: 90, icon: '🎨', category: 'frontend' },
    { name: 'UI/UX Design', level: 75, icon: '✨', category: 'design' },
    { name: 'Firebase', level: 80, icon: '🔥', category: 'backend' },
    { name: 'Node.js', level: 70, icon: '🟢', category: 'backend' },
    { name: 'Git/GitHub', level: 85, icon: '📚', category: 'tools' },
    { name: 'REST API', level: 80, icon: '🌐', category: 'backend' },
    { name: 'SQL', level: 75, icon: '🗃️', category: 'database' }
  ];

  const categories = [
    { key: 'all', label: 'All Skills', count: skills.length },
    { key: 'mobile', label: 'Mobile', count: skills.filter(s => s.category === 'mobile').length },
    { key: 'frontend', label: 'Frontend', count: skills.filter(s => s.category === 'frontend').length },
    { key: 'backend', label: 'Backend', count: skills.filter(s => s.category === 'backend').length },
    { key: 'design', label: 'Design', count: skills.filter(s => s.category === 'design').length }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills with delays
          const timer = setTimeout(() => {
            setAnimatedSkills(filteredSkills);
          }, 300);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, [filteredSkills]);

  const getSkillLevelText = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  const getSkillLevelColor = (level) => {
    if (level >= 90) return '#4ade80';
    if (level >= 80) return '#667eea';
    if (level >= 70) return '#fbbf24';
    return '#f87171';
  };

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <div className="skills-header">
          <h2 className={`section-title ${isVisible ? 'fade-in-up' : ''}`}>
            Skills & Technologies
          </h2>
          <p className={`section-subtitle ${isVisible ? 'fade-in-up' : ''}`}>
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Category Filters */}
        <div className={`skills-filters ${isVisible ? 'fade-in-up' : ''}`}>
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

        {/* Skills Grid */}
        <div className="skills-grid compact">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className={`skill-card ${isVisible ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-header">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-info">
                  <h4 className="skill-name">{skill.name}</h4>
                  <span 
                    className="skill-level-text"
                    style={{ color: getSkillLevelColor(skill.level) }}
                  >
                    {getSkillLevelText(skill.level)}
                  </span>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>

              <div className="skill-bar">
                <div 
                  className="skill-progress"
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    background: `linear-gradient(45deg, ${getSkillLevelColor(skill.level)}, ${getSkillLevelColor(skill.level)}99)`
                  }}
                ></div>
              </div>

              {/* Skill Tags */}
              <div className="skill-tags">
                <span className={`skill-tag ${skill.category}`}>
                  {skill.category}
                </span>
                <span className="skill-experience">
                  {skill.level >= 80 ? '2+ years' : skill.level >= 70 ? '1+ year' : '<1 year'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Stats */}
        <div className={`skills-stats ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="stat-item">
            <div className="stat-number">{skills.length}+</div>
            <div className="stat-label">Technologies</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              {skills.filter(s => s.level >= 80).length}
            </div>
            <div className="stat-label">Advanced Skills</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
            </div>
            <div className="stat-label">Average Proficiency</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;