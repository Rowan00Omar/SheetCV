import React from "react";
import { motion, Variants } from "framer-motion";
import Section from "./Section";
import { useSheetData } from "../hooks/useSheetData";

interface AboutProps {
  gid: string;
  language?: string; // default: "en"
}

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const CheckIcon = () => (
    <svg className="w-6 h-6 mr-3 inline-block text-warning rtl:ml-3 rtl:mr-0 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

export const About: React.FC<AboutProps> = ({ gid, language = "en" }) => {
  const { data, loading, error } = useSheetData(gid);

  if (loading) return <p></p>; /*Loading About... */
  if (error) return <p>Error: {error}</p>;
  if (!data.length) return <p>No About data found</p>;

  const row = data.find((d) => d.LanguageCode === language);
  if (!row) return <p>No matching language found</p>;

  // Collect paragraphs dynamically (P1, P2, P3...)
  const paragraphs = Object.keys(row)
    .filter((key) => key.startsWith("P") && row[key])
    .map((key) => row[key]);

  const sectionTitle = `${row.TitlePart1} ${row.TitlePart2}`;

  return (
    <Section id="about" title={sectionTitle}>
      <motion.div
        className="space-y-5 max-w-4xl mx-auto"
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {paragraphs.map((para, index) => (
          <motion.li 
            key={index}
            className="text-lg md:text-xl flex items-start leading-relaxedd"
            variants={itemVariants}
          >
          <CheckIcon />
            
            <span>{para}</span>
          </motion.li>
        ))}
      </motion.div>
    </Section>
  );
};

export default About;
