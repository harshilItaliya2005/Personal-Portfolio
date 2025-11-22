import React, { useState, useEffect, useRef } from 'react';
import '../styles/About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const aboutRef = useRef(null);

  const features = [
    {
      icon: "📱",
      title: "Android Development",
      description: "Native Android apps with modern architecture patterns including MVVM, Clean Architecture, and Jetpack Compose",
      technologies: ["Kotlin", "Java", "Android SDK", "Firebase"],
      color: "#667eea"
    },
    {
      icon: "🌐",
      title: "Frontend Web Design",
      description: "Responsive and interactive web applications using modern frameworks and best practices",
      technologies: ["React.js", "JavaScript", "HTML5/CSS3", "TypeScript"],
      color: "#764ba2"
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "User-centered design principles creating intuitive and beautiful user experiences",
      technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      color: "#f093fb"
    }
  ];

  const stats = [
    { number: "20+", label: "Projects Completed", icon: "🚀" },
    { number: "2+", label: "Years Experience", icon: "💼" },
    { number: "10+", label: "Happy Clients", icon: "😊" },
    { number: "15k+", label: "Lines of Code", icon: "💻" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'fade-in-up' : ''}`}>
          About Me
        </h2>
        
        <div className="about-content">
          <div className="about-main">
            <div className="about-text">
              <div className={`intro-text ${isVisible ? 'fade-in-up' : ''}`}>
                <p>
                  I'm a passionate <span className="highlight">Android and Frontend Web Developer</span> with over 2 years of professional 
                  experience creating innovative digital solutions. My expertise spans across mobile 
                  application development and modern web design.
                </p>
                <p>
                  I specialize in building <span className="highlight">responsive, user-friendly applications</span> that deliver 
                  exceptional user experiences. With 20+ successful projects and 10+ satisfied clients, 
                  I bring ideas to life through clean code and creative design.
                </p>
              </div>

              {/* Animated Stats */}
              <div className={`stats-grid ${isVisible ? 'fade-in-up' : ''}`}>
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fixed What I Do Section */}
            <div className="features-section">
              <div className="section-header">
                <h3 className="section-subtitle">What I Do</h3>
                <p className="section-description">Here are the key services I offer to bring your digital ideas to life</p>
              </div>

              <div className="features-grid">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`feature-card ${isVisible ? 'fade-in-up' : ''}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                    onMouseEnter={() => setActiveFeature(index)}
                  >
                    <div className="feature-header">
                      <div className="feature-icon" style={{ color: feature.color }}>
                        {feature.icon}
                      </div>
                      <h4 className="feature-title">{feature.title}</h4>
                    </div>
                    <p className="feature-description">{feature.description}</p>
                    <div className="technologies">
                      {feature.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Feature Indicators for Mobile */}
              <div className="feature-indicators">
                {features.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${activeFeature === index ? 'active' : ''}`}
                    onClick={() => setActiveFeature(index)}
                  />
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className={`cta-section ${isVisible ? 'fade-in-up' : ''}`}>
              <div className="cta-content">
                <h3>Ready to bring your ideas to life?</h3>
                <p>Let's collaborate and create something amazing together!</p>
                <div className="cta-buttons">
                  <a href="#contact" className="btn btn-primary">
                    Start a Project
                  </a>
                  <a href="#projects" className="btn btn-outline">
                    View My Work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;