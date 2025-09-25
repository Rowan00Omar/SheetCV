import React from 'react';
import { motion, Variants } from 'framer-motion';
import Section from './Section';

interface SkillsProps {
    content: {
        title: string;
        items: string[];
    }
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: 'spring', stiffness: 120 }
  },
};


const Skills: React.FC<SkillsProps> = ({ content }) => {
  return (
    <Section id="skills" title={content.title}>
        <motion.div 
            className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {content.items.map((skill, index) => (
                <motion.div 
                    key={index}
                    className="badge badge-lg md:badge-xl badge-outline badge-warning p-4 md:p-5 font-semibold transition-colors duration-300 hover:bg-warning hover:text-warning-content" 
                    variants={itemVariants}
                >
                    {skill}
                </motion.div>
            ))}
        </motion.div>
    </Section>
  );
};

export default Skills;