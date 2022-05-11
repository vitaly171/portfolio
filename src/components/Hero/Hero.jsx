import s from './Hero.module.css';
import React from 'react';
import About from './About';
import Resume from './Resume';
import Experience from './Experience';

export default function Main() {
  return (
    <div className={s.hero}>
      <Resume />
      <About />
      <Experience />
    </div>
  );
}
