import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { useSheetData } from "../hooks/useSheetData";

interface ContactProps {
  gid: string;
  language?: string; // default: "en"
}

const Contact: React.FC<ContactProps> = ({ gid, language = "en" }) => {
  const { data, loading, error } = useSheetData(gid);

  if (loading) return <p></p>; /*Loading Contact... */
  // if (error) return <p>Error: {error}</p>;
    console.log(`Error: ${error}`)

  if (!data.length) return <p></p>; /*No Contact data found*/

  const row = data.find((d) => d.LanguageCode === language);
  if (!row) return <p>No matching language found</p>;

  // Build content + heroContent from sheet row
  const content = {
    title: `${row.TitlePart1} ${row.TitlePart2}`,
    form: {
      name: language === "ar" ? "الاسم" : "Your Name",
      email: language === "ar" ? "البريد الإلكتروني" : "Your Email",
      subject: language === "ar" ? "الموضوع" : "Subject",
      message: language === "ar" ? "رسالتك" : "Message",
      submit: language === "ar" ? "إرسال" : "Send Message",
    },
  };

  const heroContent = {
    name: "Ashkanani Sport Company",
    phone: row.Phone,
    email: row.Email,
    website: "https://heydrop.me", // static (unless you also add Website col)
    socials: {
      twitter: "#",
      instagram: "#",
      facebook: "#",
      whatsapp: `https://wa.me/${row.Phone}`,
    },
  };

  return (
    <>
      <Section id="contact" title={content.title} className="bg-base-100">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={content.form.name}
                  className="input input-bordered w-full"
                />
                <input
                  type="email"
                  placeholder={content.form.email}
                  className="input input-bordered w-full"
                />
              </div>
              <input
                type="text"
                placeholder={content.form.subject}
                className="input input-bordered w-full"
              />
              <textarea
                className="textarea textarea-bordered w-full"
                rows={6}
                placeholder={content.form.message}
              ></textarea>
              <motion.button
                type="submit"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {content.form.submit}
              </motion.button>
            </form>
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            className="text-left rtl:text-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold">{heroContent.name}</h3>
            <p className="mt-2">FIFA Sports Agent</p>
            <div className="mt-6 space-y-3">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${heroContent.email}`}
                  className="link link-hover"
                >
                  {heroContent.email}
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href={`tel:${heroContent.phone}`}
                  className="link link-hover"
                >
                  {heroContent.phone}
                </a>
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a
                  href={heroContent.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-hover"
                >
                  HeyDrop.me
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="footer items-center p-4 bg-base-200 text-base-content">
        <aside className="items-center grid-flow-col">
          <p>
            &copy; {new Date().getFullYear()} {heroContent.name}. All Rights
            Reserved.
          </p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          {/* same social links */}
          <motion.a
            href={heroContent.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.1 }}
            className="transition-transform"
          >
            {/* Twitter SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
             <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.295 1.613 4.227 3.765 4.671-.65.178-1.337.218-2.029.079.598 1.884 2.333 3.256 4.385 3.303-1.794 1.407-4.065 2.16-6.42 1.795 1.954 1.257 4.275 2.01 6.78 2.01 8.14 0 12.583-6.745 12.3-13.065.855-.616 1.59-1.38 2.168-2.253z"></path>
            </svg>
          </motion.a>
          
          <motion.a
            href={heroContent.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.1 }}
            className="transition-transform"
          >
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.359-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.359-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"></path></svg>
          </motion.a>
          <motion.a
            href={heroContent.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.1 }}
            className="transition-transform"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
          </motion.a>
          <motion.a
            href={heroContent.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.1 }}
            className="transition-transform"
          >
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.203 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path></svg>
          </motion.a>
        </nav>
      </footer>
    </>
  );
};

export default Contact;
