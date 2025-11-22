import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import resumeFile from '../../assets/Harshil_Italiya_Resume.pdf';
import logoImg from '../images/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'experience', label: 'Experience', icon: '📈' },
    { id: 'contact', label: 'Contact', icon: '📞' }
  ];

  const handleNavClick = (sectionId) => {
    closeMenu();
    setActiveSection(sectionId);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <h2>
              <div className="logo-circle">
                <img src={logoImg} alt="Portfolio Logo" className="logo-img" />
              </div>
              Portfolio
            </h2>
          </div>


          <ul className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Download Resume Button - Visible on desktop */}
          <div className="header-actions">
            <a
              href={resumeFile}
              className="download-btn"
              download="Harshil_Italiya_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="download-icon">📄</span>
              Download CV
            </a>
          </div>

          <div
            className={`hamburger ${isMenuOpen ? 'toggle' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-overlay" onClick={closeMenu}></div>
      )}
    </header>
  );
};

export default Header;