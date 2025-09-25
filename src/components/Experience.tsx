import React from 'react';
import { motion, Variants } from 'framer-motion';
import Section from './Section';
import { useSheetData } from '../hooks/useSheetData';

interface ExperienceItemData {
  organization: string;
  role: string;
  period: string;
  achievements?: string;
  image?: string; // optional for logos/photos
}

interface ExperienceProps {
  gid: string;
  language: string;
}

// Animation for container (slides in from left/right depending on index)
const itemContainerVariants = (isLeft: boolean): Variants => ({
  hidden: { opacity: 0, x: isLeft ? -100 : 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 40,
      damping: 10,
      staggerChildren: 0.2,
    },
  },
});

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// const ExperienceItem: React.FC<{ item: ExperienceItemData; index: number }> = ({ item, index }) => {
//   const isLeft = index % 2 === 0;

//   return (
//     <motion.div
//       className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center p-8 rounded-lg bg-base-100 shadow-lg"
//       variants={itemContainerVariants(isLeft)}
//       whileHover={{ y: -10, scale: 1.03, boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.15)' }}
//       transition={{ type: 'spring', stiffness: 300 }}
//     >
//       {/* Optional Image */}
//       {item.image && (
//         <motion.div
//           className={`md:col-span-2 ${isLeft ? 'md:order-last' : ''}`}
//           variants={contentVariants}
//         >
//           <img
//             src={item.image}
//             alt={item.organization}
//             className="rounded-lg shadow-md w-full h-auto object-cover"
//           />
//         </motion.div>
//       )}

//       {/* Text Content */}
//       <motion.div
//         className={`md:col-span-${item.image ? '3' : '5'} text-left rtl:text-right ${
//           !isLeft ? 'md:text-right md:rtl:text-left' : ''
//         }`}
//         variants={contentVariants}
//       >
//         <p className="text-warning font-semibold">{item.period}</p>
//         <h3 className="text-2xl font-bold mt-1">{item.role}</h3>
//         <p className="text-lg mt-1">{item.organization}</p>
//         {item.achievements && <p className="mt-3 text-base-content/80">{item.achievements}</p>}
//       </motion.div>
//     </motion.div>
//   );
// };
const ExperienceItem: React.FC<{ item: ExperienceItemData; index: number }> = ({ item, index }) => {
  return (
    <motion.div
      className="flex flex-col p-6 rounded-lg bg-base-100 shadow-lg"
      variants={contentVariants}
      whileHover={{ y: -6, scale: 1.02, boxShadow: '0 20px 40px -10px rgb(0 0 0 / 0.15)' }}
    >
      {/* Optional Image */}
      {item.image && (
        <img
          src={item.image}
          alt={item.organization}
          className="rounded-lg shadow-md w-full h-40 object-cover mb-4"
        />
      )}

      {/* Text Content */}
      <p className="text-warning font-semibold">{item.period}</p>
      <h3 className="text-xl font-bold text-primary mt-1">{item.role}</h3>
      <p className="text-base mt-1">{item.organization}</p>
      {item.achievements && <p className="mt-3 text-base-content/80">{item.achievements}</p>}
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

const Experience: React.FC<ExperienceProps> = ({ gid, language }) => {
  const { data, loading } = useSheetData(gid);

  if (loading) return <div></div>; /*Loading...*/
  if (!data || data.length === 0) return null;

  // Transform sheet data into structured items
  const items: ExperienceItemData[] = data
  .map((row: any) => ({
    organization: row['Club / Organization']?.trim() || '',
    role: row['Role']?.trim() || '',
    period: row['Period']?.trim() || '',
    achievements: row['Achievements']?.trim() || '',
    image: row['Image']?.trim() || undefined, // optional
  }))
  // filter out completely empty rows
  .filter(
    (item) =>
      item.organization !== '' ||
      item.role !== '' ||
      item.period !== '' ||
      item.achievements !== ''
  );


   return (
  <Section id="experience" title={language === 'ar' ? 'الخبرات' : 'Experience'}>
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {items.map((item, index) => (
        <ExperienceItem key={index} item={item} index={index} />
      ))}
    </motion.div>
  </Section>
);
};

export default Experience;
