import s from './Main.module.css';
import React from 'react';
import Photo from './Photo';
import Contact from './Contact';
import Education from './Education';
import Skills from './Skills';

export default function Main() {
  return (
    <div className={s.main}>
      <Photo />
      <Contact />
      <Education />
      <Skills />
    </div>
  );
}
