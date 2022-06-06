import s from './HardSkills.module.css';
import React from 'react';
// import Icons from 'images/sprite.svg';

export default function HardSkills() {
  return (
    <div className={s.skills}>
      <h3 className={s.block_tittle}>Hard Skills</h3>
      <ul className={s.list_icons}>
        <li className={s.html}></li>
        <li className={s.css}></li>
        <li className={s.js}></li>
        <li className={s.react}></li>
        <li className={s.node}></li>
      </ul>
    </div>
  );
}
