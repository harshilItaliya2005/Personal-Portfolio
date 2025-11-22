import React, { useState, useEffect, useRef } from 'react';
import '../styles/Hero.css';

// Import your local avatar image
import profilePhoto from '../images/avatar.jpg';
import resumeFile from '../../assets/Harshil_Italiya_Resume.pdf';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const heroRef = useRef(null);

  const roles = [
    "Android Developer",
    "Frontend Developer", 
    "UI/UX Designer",
    "Full Stack Developer"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Role rotation effect
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(roleInterval);
  }, [roles.length]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = (e) => {
    console.error('Failed to load profile image:', e);
    setImageLoaded(false);
  };

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className={`hero-title ${isVisible ? 'fade-in-up' : ''}`}>
              Hi, I'm <span className="highlight">Harshil Italiya</span>
            </h1>
            
            <div className="role-container">
              <span className="static-text">I'm a </span>
              <div className="dynamic-text">
                <span className="typing-text">{roles[currentRole]}</span>
              </div>
            </div>

            <p className={`hero-subtitle ${isVisible ? 'fade-in-up' : ''}`}>
              Crafting exceptional digital experiences with 2+ years of expertise in 
              Android development and frontend web design. Passionate about creating 
              innovative solutions that make a difference.
            </p>

            <div className={`hero-stats ${isVisible ? 'fade-in-up' : ''}`}>
              <div className="stat">
                <div className="stat-number">20+</div>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <div className="stat-number">2+</div>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <div className="stat-number">10+</div>
                <p>Happy Clients</p>
              </div>
            </div>

            <div className={`hero-buttons ${isVisible ? 'fade-in-up' : ''}`}>
              <a href="#projects" className="btn btn-primary">
                <span className="btn-icon">🚀</span>
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                <span className="btn-icon">💬</span>
                Get In Touch
              </a>
            <a 
                href={resumeFile} 
                className="btn btn-outline"
                download="Harshil_Italiya_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="btn-icon">📄</span>
                Download CV
              </a>
            </div>
          </div>

          <div className="hero-image">
            {/* Animated Background Elements */}
            <div className="animation-container">
              <div className="floating-circle circle-1"></div>
              <div className="floating-circle circle-2"></div>
              <div className="floating-circle circle-3"></div>
              
              {/* Pulsing Ring Effect */}
              <div className="pulse-ring"></div>
              <div className="pulse-ring ring-2"></div>
            </div>

            {/* Profile Photo Container */}
            <div className={`profile-container ${isVisible ? 'slide-in-right' : ''}`}>
              <div className="photo-wrapper">
                <div className="main-circle">
                  <div className="photo-circle">
                    <img 
                      src={profilePhoto}
                      alt="John Doe - Android & Frontend Developer"
                      className={`profile-photo ${imageLoaded ? 'loaded' : ''}`}
                      onLoad={handleImageLoad}
                      onError={handleImageError}
                    />
                    {!imageLoaded && (
                      <div className="photo-placeholder">
                        <span className="placeholder-icon">👨‍💻</span>
                        <span className="placeholder-text">Loading...</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Rotating Border */}
                  <div className="rotating-border"></div>
                  
                  {/* Floating Tech Icons */}
                  <div className="tech-icon android-icon">
                    <span className="tech-emoji">📱</span>
                    <div className="tech-tooltip">Android</div>
                  </div>
                  <div className="tech-icon react-icon">
                    <span className="tech-emoji">⚛️</span>
                    <div className="tech-tooltip">React</div>
                  </div>
                  <div className="tech-icon code-icon">
                    <span className="tech-emoji">💻</span>
                    <div className="tech-tooltip">Development</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator with Mouse Icon */}
        <div className="scroll-indicator">
          <div className="mouse-icon">
            <div className="mouse-wheel"></div>
          </div>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;