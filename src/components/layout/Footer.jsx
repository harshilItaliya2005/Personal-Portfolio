import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Android App Development',
    'Frontend Web Development',
    'UI/UX Design',
    'Cross-Platform Solutions',
    'API Integration',
    'App Maintenance'
  ];

  const socialLinks = [
    { name: 'GitHub', icon: '💻', url: 'https://github.com' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' },
    { name: 'Email', icon: '📧', url: 'mailto:your.email@domain.com' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="footer-brand">
              <h3 className="brand-name">Android & Web Developer</h3>
              <p className="brand-tagline">
                Crafting exceptional digital experiences with 2+ years of expertise 
                in Android development and frontend web design.
              </p>
              <div className="footer-stats">
                <div className="footer-stat">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="footer-stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Clients</span>
                </div>
                <div className="footer-stat">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Years</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="footer-service">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="footer-section">
            <h4 className="footer-title">Let's Connect</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>italiyaharshil78@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span>+91 93289 40845</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Gujrat, India</span>
              </div>
            </div>
            
            <div className="social-links">
              <h5 className="social-title">Follow Me</h5>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <span className="social-icon">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} Android & Web Developer. All rights reserved.</p>
            </div>
            <div className="footer-extra">
              <a href="#privacy" className="footer-bottom-link">Privacy Policy</a>
              <a href="#terms" className="footer-bottom-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;