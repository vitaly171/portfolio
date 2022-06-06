import s from './Hero.module.css';
import React from 'react';
import About from './About';
import Resume from './Resume';
import Experience from './Experience';
import Footer from './Footer';
import Education from './Education';

export default function Main() {
  return (
    <div className={s.hero}>
      <Resume />
      <About />
      <Education />
      <Experience />
      <Footer />
    </div>
  );
}
