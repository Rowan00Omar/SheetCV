import React from 'react';
import { motion } from 'framer-motion';
import { useSheetData } from '../hooks/useSheetData';
import Section from './Section';
import type { Language } from '../data';

interface UniversityEntry {
    LanguageCode: string;
    Institution: string;
    Role: string;
    Period: string;
    Notes?: string;
}

interface UniversitiesProps {
    gid: string;
    language: Language;
}

const Universities: React.FC<UniversitiesProps> = ({ gid, language }) => {
    const { data, loading } = useSheetData<UniversityEntry>(gid);
    const lang = language;

    if (loading) return <p className="text-center py-4" > </p>;
    if (!data || data.length === 0) return <p className="text-center py-4" >  </p>; /*No data available*/

    const rows = data.filter(row => row.LanguageCode === lang).filter(row => row.Institution || row.Role || row.Period); // keep only rows with content


    return (
        <Section
      id= "universities"
    title = { lang === 'en' ? 'Universities & Institutions' : 'الجامعات والمؤسسات'
}
    >
    <div className="relative max-w-5xl mx-auto" >
        {/* vertical timeline line */ }
        < div className = "absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gray-300" > </div>

{
    rows.map((row, idx) => (
        <motion.div
            key= { idx }
            initial = {{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
whileInView = {{ opacity: 1, x: 0 }}
viewport = {{ once: true }}
transition = {{ duration: 0.6, delay: idx * 0.1 }}
className = {`relative mb-8 w-full flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
    }`}
          >
    {/* Circle marker */ }
    < div className = "absolute left-1/2 -translate-x-1/2 bg-primary w-4 h-4 rounded-full z-10" > </div>

{/* Card */ }
<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg md:w-5/12 border border-gray-200" >
    <h3 className="text-xl font-semibold mb-1" > { row.Institution } </h3>
        < p className = "text-sm text-gray-600 dark:text-gray-300 mb-1" > { row.Role } </p>
            < p className = "text-sm text-gray-500 dark:text-gray-400 mb-2" > { row.Period } </p>
{ row.Notes && <p className="text-sm italic text-gray-400" > { row.Notes } </p> }
</div>
    </motion.div>
        ))}
</div>
    </Section>
  );
};

export default Universities;
