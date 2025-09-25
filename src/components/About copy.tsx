import React from 'react';
import { motion, Variants } from 'framer-motion';
import Section from './Section';

interface AboutProps {
    content: {
        title: string;
        points: string[];
    }
}

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const CheckIcon = () => (
    <svg className="w-6 h-6 mr-3 inline-block text-warning rtl:ml-3 rtl:mr-0 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <Section id="about" title={content.title}>
        <motion.ul 
            className="space-y-5 max-w-4xl mx-auto"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {content.points.map((point, index) => (
                <motion.li key={index} className="text-lg md:text-xl flex items-start" variants={itemVariants}>
                    <CheckIcon />
                    <span>{point}</span>
                </motion.li>
            ))}
        </motion.ul>
    </Section>
  );
};

export default About;