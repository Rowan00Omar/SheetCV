import React from 'react';
import { motion, Variants } from 'framer-motion';
import Section from './Section';

interface ListSectionData {
    title: string;
    points: string[];
}

interface CredentialsProps {
    content: {
        title: string;
        qualifications: ListSectionData;
        certificates: ListSectionData;
        training: ListSectionData;
    }
}

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ListSection: React.FC<{ data: ListSectionData }> = ({ data }) => (
    <div>
        <h3 className="text-2xl font-bold mb-4">{data.title}</h3>
        <motion.ul 
            className="space-y-3"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {data.points.map((point, index) => (
                <motion.li key={index} className="flex items-start" variants={itemVariants}>
                    <svg className="w-5 h-5 mr-3 mt-1 text-warning rtl:ml-3 rtl:mr-0 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>{point}</span>
                </motion.li>
            ))}
        </motion.ul>
    </div>
);


const Credentials: React.FC<CredentialsProps> = ({ content }) => {
  return (
    <Section id="credentials" title={content.title} className="bg-base-100">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left rtl:text-right">
            <ListSection data={content.qualifications} />
            <ListSection data={content.certificates} />
            <ListSection data={content.training} />
        </div>
    </Section>
  );
};

export default Credentials;