import s from './Resume.module.css';
import React from 'react';

export default function Resume() {
  return (
    <div className={s.resume}>
      <h3 className={s.tittle}>Resume</h3>
      <div className={s.nameBlock}>
        <h1 className={s.name}>Vitaly Ivlev</h1>
        <h2>Front-End Developer</h2>
      </div>
    </div>
  );
}
