import s from './Resume.module.css';
import React from 'react';

export default function Resume() {
  return (
    <div className={s.nameBlock}>
      <h1 className={s.name}>Vitaly Ivlev</h1>
      <h2 className={s.profession}>Front-End Developer</h2>
      <div className={s.decorLine}></div>
    </div>
  );
}
