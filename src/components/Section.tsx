import React from 'react';
import { motion, Variants } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <motion.section 
        id={id} 
        className={`py-16 md:py-24 ${className}`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center uppercase tracking-widest">{title}</h2>
      <div className="container mx-auto px-4">{children}</div>
    </motion.section>
  );
};

export default Section;