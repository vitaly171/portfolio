import s from './Skills.module.css';
import React from 'react';

export default function Skills() {
  return (
    <div className={s.skills}>
      <h3 className={s.block_tittle}>Skills</h3>
      <ul className={s.list}>
        <li className={s.item}>Communication</li>
        <div className={s.progress}></div>
        <li className={s.item}>Problem Solving</li>
        <div className={s.progress}></div>
        <li className={s.item}>Leadership</li>
        <div className={s.progress}></div>
      </ul>
    </div>
  );
}
