import React, { useState, useEffect, useRef } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const projectsRef = useRef(null);

  const allProjects = [
    {
      id: 1,
      title: 'TurfCircle With Admin',
      description: 'Complete turf booking system with admin panel for management',
      tech: ['Android', 'Kotlin', 'Firebase', 'Admin SDK'],
      category: 'android',
      icon: '🏟️',
      featured: true,
      status: 'Completed',
      duration: '3 months'
    },
    {
      id: 2,
      title: 'PixAura Wallpaper',
      description: 'Beautiful wallpaper app with curated collections',
      tech: ['Android', 'Java', 'REST API', 'Glide'],
      category: 'android',
      icon: '🎨',
      featured: false,
      status: 'Live',
      duration: '2 months'
    },
    {
      id: 3,
      title: 'E-commerce with Admin',
      description: 'Full-featured e-commerce app with dashboard',
      tech: ['Android', 'Kotlin', 'Firebase', 'Stripe'],
      category: 'android',
      icon: '🛒',
      featured: true,
      status: 'Completed',
      duration: '4 months'
    },
    {
      id: 4,
      title: 'WhatsApp Clone',
      description: 'Real-time messaging app with modern UI',
      tech: ['Android', 'Java', 'Firebase', 'WebRTC'],
      category: 'android',
      icon: '💬',
      featured: false,
      status: 'Prototype',
      duration: '2.5 months'
    },
    {
      id: 5,
      title: 'E-commerce Shopping',
      description: 'Responsive e-commerce platform',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Redux'],
      category: 'web',
      icon: '🛍️',
      featured: true,
      status: 'Deployed',
      duration: '3 months'
    },
    {
      id: 6,
      title: 'Appointment Booking',
      description: 'Booking system with calendar integration',
      tech: ['React.js', 'TypeScript', 'Firebase', 'Stripe'],
      category: 'web',
      icon: '📅',
      featured: false,
      status: 'Live',
      duration: '2 months'
    },
    {
      id: 7,
      title: 'Hotel Booking',
      description: 'Hotel reservation system',
      tech: ['React.js', 'Redux', 'Node.js', 'MySQL'],
      category: 'web',
      icon: '🏨',
      featured: true,
      status: 'Completed',
      duration: '3.5 months'
    },
    {
      id: 8,
      title: 'Food Order App',
      description: 'Food delivery platform',
      tech: ['React.js', 'Firebase', 'Map API', 'PWA'],
      category: 'web',
      icon: '🍕',
      featured: false,
      status: 'Development',
      duration: '4 months'
    },
    {
      id: 9,
      title: 'Weather App',
      description: 'Real-time weather forecasting',
      tech: ['React.js', 'API', 'Chart.js', 'PWA'],
      category: 'web',
      icon: '🌤️',
      featured: false,
      status: 'Live',
      duration: '1 month'
    },
    {
      id: 10,
      title: 'Task Manager',
      description: 'Productivity app with team collaboration',
      tech: ['React.js', 'Node.js', 'Socket.io', 'MongoDB'],
      category: 'web',
      icon: '✅',
      featured: false,
      status: 'Completed',
      duration: '2 months'
    },
    {
      id: 11,
      title: 'Social Media App',
      description: 'Social platform with real-time features',
      tech: ['Android', 'Kotlin', 'Firebase', 'WebRTC'],
      category: 'android',
      icon: '👥',
      featured: false,
      status: 'Prototype',
      duration: '3 months'
    },
    {
      id: 12,
      title: 'Fitness Tracker',
      description: 'Health and fitness monitoring app',
      tech: ['Android', 'Java', 'SQLite', 'Charts'],
      category: 'android',
      icon: '💪',
      featured: false,
      status: 'Live',
      duration: '2.5 months'
    }
  ];

  const filters = [
    { key: 'all', label: 'All', count: allProjects.length },
    { key: 'android', label: 'Android', count: allProjects.filter(p => p.category === 'android').length },
    { key: 'web', label: 'Web', count: allProjects.filter(p => p.category === 'web').length },
    { key: 'featured', label: 'Featured', count: allProjects.filter(p => p.featured).length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(project => 
        activeFilter === 'featured' ? project.featured : project.category === activeFilter
      );

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  // Get grid columns based on screen size
  const getGridClass = () => {
    if (windowWidth < 640) return 'mobile';
    if (windowWidth < 768) return 'tablet-sm';
    if (windowWidth < 1024) return 'tablet';
    if (windowWidth < 1280) return 'desktop-sm';
    return 'desktop';
  };

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <div className="container">
        <div className="projects-header">
          <h2 className={`section-title ${isVisible ? 'fade-in-up' : ''}`}>
            My Projects
          </h2>
          <p className={`section-subtitle ${isVisible ? 'fade-in-up' : ''}`}>
            Discover my portfolio of {allProjects.length}+ projects across Android and Web development
          </p>
        </div>

        {/* Filter Buttons - Responsive */}
        <div className={`projects-filters ${getGridClass()} ${isVisible ? 'fade-in-up' : ''}`}>
          {filters.map((filter, index) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="filter-text">{filter.label}</span>
              <span className="filter-count">{filter.count}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid - Responsive */}
        <div className={`projects-grid ${getGridClass()} ${isVisible ? 'fade-in-up' : ''}`}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${getGridClass()} ${project.featured ? 'featured' : ''} ${isVisible ? 'fade-in-up' : ''} ${hoveredProject === project.id ? 'hovered' : ''}`}
              style={{ animationDelay: `${index * 0.05}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {project.featured && (
                <div className="featured-badge">
                  <span>⭐</span>
                </div>
              )}
              
              <div className="project-header">
                <div className="project-icon">{project.icon}</div>
                <div className="project-meta">
                  <span className={`category-badge ${project.category}`}>
                    {windowWidth < 480 ? (project.category === 'android' ? '📱' : '🌐') : 
                     project.category === 'android' ? 'Android' : 'Web'}
                  </span>
                  <span className={`status-badge status-${project.status.toLowerCase()}`}>
                    {windowWidth < 640 ? project.status.substring(0, 3) : project.status}
                  </span>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">
                  {windowWidth < 480 && project.title.length > 20 
                    ? `${project.title.substring(0, 20)}...` 
                    : project.title
                  }
                </h3>
                <p className="project-description">
                  {windowWidth < 480 && project.description.length > 60
                    ? `${project.description.substring(0, 60)}...`
                    : windowWidth < 768 && project.description.length > 80
                    ? `${project.description.substring(0, 80)}...`
                    : project.description
                  }
                </p>
                
                <div className="project-tech">
                  {project.tech.slice(0, windowWidth < 480 ? 2 : 3).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {windowWidth < 380 && tech.length > 8 
                        ? `${tech.substring(0, 8)}...` 
                        : tech
                      }
                    </span>
                  ))}
                  {project.tech.length > (windowWidth < 480 ? 2 : 3) && (
                    <span className="tech-tag more">+{project.tech.length - (windowWidth < 480 ? 2 : 3)}</span>
                  )}
                </div>

                <div className="project-footer">
                  <span className="project-duration">{project.duration}</span>
                  <div className="project-actions">
                    <span className="view-details">
                      {windowWidth < 480 ? 'View →' : 'View Details →'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="card-hover-effect"></div>
            </div>
          ))}
        </div>

        {/* Stats Section - Responsive */}
        <div className={`projects-stats ${getGridClass()} ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="stat-item">
            <div className="stat-number">{allProjects.length}+</div>
            <div className="stat-label">Total Projects</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{allProjects.filter(p => p.category === 'android').length}</div>
            <div className="stat-label">Android Apps</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{allProjects.filter(p => p.category === 'web').length}</div>
            <div className="stat-label">Web Projects</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{allProjects.filter(p => p.featured).length}</div>
            <div className="stat-label">Featured</div>
          </div>
        </div>

        {/* Mobile Filter Info */}
        {windowWidth < 768 && (
          <div className="mobile-filter-info">
            <p>Showing {filteredProjects.length} of {allProjects.length} projects</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;