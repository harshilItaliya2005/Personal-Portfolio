import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaGooglePlay, FaExternalLinkAlt, FaStar } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="project-image">
        <div className="phone-mockup">
          <div className="phone-content">
            <div className="app-preview">
              <h4>{project.title}</h4>
              <p>Android App</p>
            </div>
          </div>
        </div>
        
        <div className="project-overlay">
          <div className="project-links">
            {project.playStoreLink && (
              <a 
                href={project.playStoreLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FaGooglePlay /> Play Store
              </a>
            )}
            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <FaGithub /> Code
              </a>
            )}
          </div>
        </div>

        {project.status === 'published' && (
          <div className="project-badge">
            <FaStar /> Published
          </div>
        )}
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-highlights">
          {project.highlights.map((highlight, idx) => (
            <span key={idx} className="highlight-tag">{highlight}</span>
          ))}
        </div>

        <div className="project-technologies">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="tech-tag">{tech}</span>
          ))}
        </div>

        <div className="project-features">
          <h4>Key Features:</h4>
          <ul>
            {project.features.slice(0, 3).map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        <motion.div 
          className="project-actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          <button className="btn btn-outline">
            <FaExternalLinkAlt /> View Details
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;