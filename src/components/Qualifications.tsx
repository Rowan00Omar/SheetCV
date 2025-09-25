import React from "react";
import { motion, Variants } from "framer-motion";
import Section from "./Section";
import { useSheetData } from "../hooks/useSheetData";

interface QualificationsProps {
  gid: string;
  language?: string; // default: "en"
}

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Qualifications: React.FC<QualificationsProps> = ({ gid, language = "en" }) => {
  const { data, loading, error } = useSheetData(gid);

  if (loading) return <p></p>; /*Loading qualifications...*/
  if (error) return <p>Error: {error}</p>;
  if (!data.length) return <p>No qualifications data found.</p>;

  // Filter rows by language
  const rows = data.filter((row: any) => row.LanguageCode === language);

  if (!rows.length) return <p>No matching language found.</p>;

  return (
    <Section
      id="qualifications"
      title={language === "en" ? "Qualifications" : "المؤهلات"}
    >
      <motion.div
        className="
          grid grid-cols-1 md:grid-cols-2 gap-8 
          relative
        "
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {rows.map((cred: any, index: number) => (
          <motion.div
            key={index}
            className="relative pl-6 border-l-2 border-primary/40 rtl:border-l-0 rtl:border-r-2 rtl:pr-6"
            variants={itemVariants}
          >
            {/* Timeline dot */}
            <span className="absolute left-[-6px] rtl:right-[-6px] top-2 w-3 h-3 rounded-full bg-primary"></span>

            {/* Degree / Qualification */}
            <h3 className="text-xl font-bold text-primary">
              {cred["Degree / Qualification"]}
            </h3>

            {/* Institution + Year */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-grayy-200 mt-1">
              {cred["Institution / Authority"] && (
                <span>{cred["Institution / Authority"]}</span>
              )}
              {cred["Year"] && (
                <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-md text-xs">
                  {cred["Year"]}
                </span>
              )}
            </div>

            {/* Notes */}
            {cred["Notes"] && (
              <p className="mt-2 text-base leading-relaxed text-grayy-400 whitespace-pre-line">
                {cred["Notes"]}
              </p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Qualifications;
