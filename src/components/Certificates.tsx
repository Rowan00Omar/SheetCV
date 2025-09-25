import React from "react";
import { motion, Variants } from "framer-motion";
import Section from "./Section";
import { useSheetData } from "../hooks/useSheetData";

interface CertificatesProps {
  gid: string;
  language?: string; // default: "en"
}

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
};

const Certificates: React.FC<CertificatesProps> = ({ gid, language = "en" }) => {
  const { data, loading, error } = useSheetData(gid);

  if (loading) return <p></p>; /*Loading certificates... */
  // if (error) return <p>Error: { error } </p>;
  console.log(`Error: ${error}`)

  if (!data.length) return <p></p>; /*No certificates data found.*/

  // Filter rows by language
  const rows = data.filter((row: any) => row.LanguageCode === language);

  if (!rows.length) return <p>No matching language found.</p>;

  // Collect general notes
  const generalNotes: string[] = [];

  const processedRows = rows.map((cert: any) => {
    let notes = cert["Notes"] || "";

    if (notes.includes("GENERAL:")) {
      // Split into lines
      const lines = notes.split(/\r?\n/);

      // Extract GENERAL lines
      const remainingLines: string[] = [];
      lines.forEach((line) => {
        if (line.trim().startsWith("GENERAL:")) {
          generalNotes.push(line.replace("GENERAL:", "").trim());
        } else {
          remainingLines.push(line);
        }
      });

      return { ...cert, Notes: remainingLines.join("\n").trim() };
    }

    return cert;
  });

  return (
    <Section
      id= "certificates"
  title = { language === "en" ? "Certificates" : "الشهادات"
}
    >
  {/* General Notes Section */ }
{
  generalNotes.length > 0 && (
    <div className="mb-6 p-4 bg-base-100 border border-base-300 rounded-xl shadow-sm" >

      <ul className="list-disc list-inside space-y-1 text-md text-grayy-200" >
      {
        generalNotes.map((note, i) => (
          <li key= { i } > { note } </li>
        ))
      }
        </ul>
        </div>
      )
}

{/* Certificates Grid */ }
<motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
variants = { gridVariants }
initial = "hidden"
whileInView = "visible"
viewport = {{ once: true, amount: 0.2 }}
      >
{
  processedRows.map((cert: any, index: number) => (
    <motion.div
            key= { index }
            className = "bg-base-100 p-5 rounded-2xl shadow-md border border-base-300 hover:shadow-lg transition flex items-start gap-4"
            variants = { cardVariants }
    >
    {/* Image */ }
  {/* Certificate Image (if exists) */ }
            {
      cert["Image"] && (
        <img
                src={ "/images/"+cert["Image"]}
                alt = { cert["Certificate"]}
                className = "w-24 h-24 object-cover rounded-md border border-base-300"
    />
            )
}

<div>

{/* Certificate Title */ }
<h3 className="text-lg font-bold text-primary mb-2" >
  { cert["Certificate"]}
  </h3>

{/* Level & Year */ }
<div className="flex flex-wrap gap-2 text-sm text-grayy-400 mb-3" >
{
  cert["Level/Details"] && (
    <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-md text-xs">
      { cert["Level/Details"]}
      </span>
              )
}
{
  cert["Year"] && (
    <span className="px-2 py-0.5 bg-secondary/10 text-secondaryy rounded-md text-xs" >
      { cert["Year"]}
      </span>
              )
}
</div>

{/* Notes (excluding GENERAL:) */ }
{
  cert["Notes"] && (
    <p className="text-sm whitespace-pre-line text-base-content/80" >
      { cert["Notes"]}
      </p>
            )
}
</div>
</motion.div>
        ))}
</motion.div>
  </Section>
  );
};

export default Certificates;
