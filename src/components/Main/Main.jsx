import s from './Main.module.css';
import React from 'react';
import Photo from './Photo';
import Contact from './Contact';
import Education from './Education';
import Skills from './Skills';
import Languages from './Languages';
import HardSkills from './HardSkills';
import SoftSkills from './SoftSkills';

export default function Main() {
  return (
    <div className={s.main}>
      <Photo />
      <Contact />
      <HardSkills />
      <SoftSkills />
      {/* <Education /> */}
      {/* <Skills /> */}
      <Languages />
    </div>
  );
}
