import React from "react";
import { motion, Variants } from "framer-motion";
import Section from "./Section";
import { useSheetData } from "../hooks/useSheetData";

interface TrainingCoursesProps {
  gid: string;
  language?: string;
}

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const TrainingCourses: React.FC<TrainingCoursesProps> = ({ gid, language = "en" }) => {
  const { data, loading, error } = useSheetData(gid);

  if (loading) return <p></p>; /*Loading courses...*/
//   if (error) return <p>Error: {error}</p>;
  console.log(`Error: ${error}`)

  if (!data.length) return <p></p>; /*No training courses found.*/

  // Filter by language
  const rows = data.filter((row: any) => row.LanguageCode === language);

  if (!rows.length) return <p>No matching language found.</p>;

  return (
    <Section
      id="trainingCourses"
      title={language === "ar" ? "الدورات التدريبية" : "Training Courses"}
    >
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {rows.map((row: any, index: number) => (
          <motion.div
            key={index}
            className="bg-base-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            variants={itemVariants}
          >
            {/* Course Name */}
            <h3 className="text-lg font-bold text-primary mb-2">
              {row["Course"]}
            </h3>

            {/* Provider */}
            {row["Provider / Place"] && (
              <p className="text-sm text-grayy-300 mb-1">
                {row["Provider / Place"]}
              </p>
            )}

            {/* Date */}
            {row["Date"] && (
              <span className="inline-block mt-2 px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                {row["Date"]}
              </span>
            )}
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default TrainingCourses;
