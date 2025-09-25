import React from 'react';
import { motion } from 'framer-motion';
import type { Language } from '../data';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ lang, onLanguageChange }) => {
  // Static nav labels for both languages
  const NAVIGATION = {
    en: {
      home: 'Home',
      about: 'About',
      qualifications: 'Qualifications',
      certificates: 'Certificates',
      trainingCourses: 'Training Courses',
      experience: 'Experience',
      universities:"Universities",
      contact: 'Contact',
    },
    ar: {
      home: 'الرئيسية',
      about: 'من أنا',
      qualifications: 'المؤهلات',
      certificates: 'الشهادات',
      trainingCourses: 'الدورات التدريبية',
      experience: 'الخبرة العملية',
      universities:"الجامعات",
      contact: 'تواصل',
    }
  };

  const navigation = NAVIGATION[lang];

  const navLinks = Object.keys(navigation).map(key => ({ key, href: `#${key}` }));

  // Scroll safely to section
  const handleScroll = (href: string) => {
    const tryScroll = () => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else setTimeout(tryScroll, 50); // Retry if element not yet rendered
    };
    tryScroll();
  };

  const linkHover = { color: '#e2d562', scale: 1.05 };
  const buttonHover = { scale: 1.05, y: -2 };
  const buttonTap = { scale: 0.95 };

  return (
    <header className="navbar bg-base-200 text-base-content backdrop-blur-sm shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <motion.label whileTap={{ scale: 0.9 }} tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </motion.label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
            {navLinks.map(link => (
              <li key={link.key}>
                <a onClick={(e) => { e.preventDefault(); handleScroll(link.href); }}>
                  {navigation[link.key]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <motion.a
          href="#home"
          className="btn btn-ghost normal-case text-xl font-bold"
          whileHover={linkHover}
          onClick={(e) => { e.preventDefault(); handleScroll('#home'); }}
        >
          <div className="avatar mr-2 rtl:ml-2 rtl:mr-0">
            <div className="w-10 rounded-full">
              <img src="images/myphoto.jpg" alt="Ahmad Ashkanani" />
            </div>
          </div>
          Ahmad Ashkanani
        </motion.a>
      </div>

      {/* Desktop nav */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          {navLinks.map(link => (
            <li key={link.key}>
              <motion.a
                onClick={(e) => { e.preventDefault(); handleScroll(link.href); }}
                whileHover={linkHover}
                className="cursor-pointer"
              >
                {navigation[link.key]}
              </motion.a>
            </li>
          ))}
        </ul>
      </div>

      {/* Language switch */}
      <div className="navbar-end">
        <div className="flex items-center space-x-1">
          <motion.button
            onClick={() => onLanguageChange('en')}
            className={`btn btn-sm rounded-full ${lang === 'en' ? 'btn-primary' : 'btn-ghost'}`}
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            EN
          </motion.button>
          <motion.button
            onClick={() => onLanguageChange('ar')}
            className={`btn btn-sm rounded-full ${lang === 'ar' ? 'btn-primary' : 'btn-ghost'}`}
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            AR
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;
