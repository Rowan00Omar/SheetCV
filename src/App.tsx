// import React, { useState, useEffect } from "react";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Career from "./components/Career";
// import Skills from "./components/Skills";
// import Credentials from "./components/Credentials";
// import Documents from "./components/Documents";
// import Videos from "./components/Videos";
// import Contact from "./components/Contact";
// import { fetchCvData, CvData, Language } from "./dataLoader";

// function App() {
//   const [lang, setLang] = useState<Language>("en");
//   const [cvData, setCvData] = useState<CvData | null>(null);

//   useEffect(() => {
//     document.documentElement.lang = lang;
//     document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
//   }, [lang]);

//   useEffect(() => {
//     const urls = {
//       en: "https://docs.google.com/spreadsheets/d/.../output=csv",
//       ar: "https://docs.google.com/spreadsheets/d/.../output=csv",
//     };
//     fetchCvData(urls[lang], lang).then(setCvData);
//   }, [lang]);

//   if (!cvData) return <div>Loading...</div>; // ✅ works fine now

//   return (
//     <div className="bg-base-200 text-base-content font-sans">
//       <Header
//         lang={lang}
//         onLanguageChange={setLang}
//         navigation={cvData.navigation}
//       />
//       <main>
//         <Hero galleryImages={cvData.galleryImages} motto={cvData.motto} />
//         <About content={cvData.about} />
//         <Career content={cvData.career} />
//         <Skills content={cvData.skills} />
//         <Credentials content={cvData.credentials} />
//         <Documents content={cvData.documents} />
//         <Videos content={cvData.videos} />
//         <Contact content={cvData.contact} heroContent={cvData.hero} />
//       </main>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { About } from './components/About';
import Career from './components/Career';
import Skills from './components/Skills';
import Credentials from './components/Credentials';
import Certificates from './components/Certificates';
import Qualifications from './components/Qualifications';
import Experience from './components/Experience';
import TrainingCourses from './components/Training';
import Documents from './components/Documents';
import Videos from './components/Videos';
import Contact from './components/Contact';
import { cvData } from './data';
import type { Language } from './data';


function App() {
  const [lang, setLang] = useState<Language>("en");

  const GIDS = {
    hero: "805709393",
    heroSlider: "2090106626",
    about: "1036526330",
    qualifications: "1264471432",
    certificates: "2040890205",
    trainingCourses: "421828290",
    experience: "2086521893",
    universities: "1775365057",
    contact: "1931647393",
  };

  // const data = cvData[lang] || {};

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  // if (!data) return <div>Loading...</div>;

  return (
    <div className= "bg-base-200 text-base-content font-sans" >
    {< Header
  lang = { lang }
  onLanguageChange = { setLang }
    />}
{/*navigation = { data.navigation }*/ }

<main>

  { GIDS.hero && GIDS.heroSlider && <Hero heroGid={ GIDS.hero } sliderGid = { GIDS.heroSlider } language = { lang } /> }
{ GIDS.about && <About gid={ GIDS.about } language = { lang } />}
{ GIDS.qualifications && <Qualifications gid={ GIDS.qualifications } language = { lang } />}
{ GIDS.certificates && <Certificates gid={ GIDS.certificates } language = { lang } />}
{ GIDS.experience && <Experience gid={ GIDS.experience } language = { lang } />}
{ GIDS.trainingCourses && <TrainingCourses gid={ GIDS.trainingCourses } language = { lang } />}
{/*GIDS.career && <Career content={GIDS.career} />*/ }
{ GIDS.contact && <Contact gid={ GIDS.contact } language = { lang } />}
</main>
  </div>
  );
}


export default App;