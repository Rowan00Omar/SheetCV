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
import Universities from './components/Universities';
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

<main  className="overflow-x-hidden">

  { GIDS.hero && GIDS.heroSlider && <Hero heroGid={ GIDS.hero } sliderGid = { GIDS.heroSlider } language = { lang } /> }
{ GIDS.about && <About gid={ GIDS.about } language = { lang } />}
{ GIDS.qualifications && <Qualifications gid={ GIDS.qualifications } language = { lang } />}
{ GIDS.certificates && <Certificates gid={ GIDS.certificates } language = { lang } />}
{ GIDS.experience && <Experience gid={ GIDS.experience } language = { lang } />}
{ GIDS.trainingCourses && <TrainingCourses gid={ GIDS.trainingCourses } language = { lang } />}
{GIDS.universities && <Universities gid={GIDS.universities} language = { lang } />}
{ GIDS.contact && <Contact gid={ GIDS.contact } language = { lang } />}
</main>
  </div>
  );
}


export default App;