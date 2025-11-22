import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ skill, index }) => {
  return (
    <motion.div 
      className="skill-bar"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="skill-header">
        <div className="skill-info">
          <span className="skill-icon">{skill.icon}</span>
          <span className="skill-name">{skill.name}</span>
        </div>
        <span className="skill-level">{skill.level}%</span>
      </div>
      
      <div className="skill-progress">
        <motion.div 
          className="skill-progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;