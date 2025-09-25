import React from 'react';
import { motion, Variants } from 'framer-motion';
import Section from './Section';

interface CareerItemData {
    year: string;
    role: string;
    team: string;
    description?: string;
    image: string;
}

interface CareerSectionData {
    title: string;
    items: CareerItemData[];
}

interface CareerProps {
    content: {
        title: string;
        coachCareer: CareerSectionData;
        playerCareer: CareerSectionData;
    }
}

// Variant for the main career item container.
// It slides in from the side and staggers its children's animations.
const itemContainerVariants = (isLeft: boolean): Variants => ({
  hidden: { opacity: 0, x: isLeft ? -100 : 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 40,
      damping: 10,
      staggerChildren: 0.2, // Animate children after the container appears
    },
  },
});

// Variant for the content (image and text) inside each career item.
const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const CareerItem: React.FC<{ item: CareerItemData; index: number }> = ({ item, index }) => {
    const isLeft = index % 2 === 0;
    return (
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center p-8 rounded-lg bg-base-100 shadow-lg"
            variants={itemContainerVariants(isLeft)}
            whileHover={{ y: -10, scale: 1.03, boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.15)" }}
            transition={{ type: 'spring', stiffness: 300 }} // For the hover effect
        >
            <motion.div 
                className={`md:col-span-2 ${isLeft ? 'md:order-last' : ''}`}
                variants={contentVariants}
            >
                <img src={item.image} alt={item.team} className="rounded-lg shadow-md w-full h-auto object-cover" />
            </motion.div>
            <motion.div 
                className={`md:col-span-3 text-left rtl:text-right ${!isLeft ? 'md:text-right md:rtl:text-left' : ''}`}
                variants={contentVariants}
            >
                <p className="text-warning font-semibold">{item.year}</p>
                <h3 className="text-2xl font-bold mt-1">{item.role}</h3>
                <p className="text-lg mt-1">{item.team}</p>
                {item.description && <p className="mt-3 text-base-content/80">{item.description}</p>}
            </motion.div>
        </motion.div>
    );
};

const sectionContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.4,
        },
    },
};

const CareerSection: React.FC<{ section: CareerSectionData }> = ({ section }) => (
    <div className="mb-16">
        <motion.h3 
            className="text-3xl font-bold mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
        >
            {section.title}
        </motion.h3>
        <motion.div 
            className="space-y-12"
            variants={sectionContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            {section.items.map((item, index) => (
                <CareerItem key={index} item={item} index={index} />
            ))}
        </motion.div>
    </div>
);

const Career: React.FC<CareerProps> = ({ content }) => {
  return (
    <Section id="career" title={content.title}>
        <CareerSection section={content.coachCareer} />
        <CareerSection section={content.playerCareer} />
    </Section>
  );
};

export default Career;