import s from './Languages.module.css';
import React from 'react';

export default function Languages() {
  return (
    <div className={s.languages}>
      <h3 className={s.block_tittle}>Languages</h3>
      <ul className={s.list}>
        <li className={s.rus}>
          <p className={s.popup}>Native</p>
        </li>
        <li className={s.prt}>
          <p className={s.popup}>Fluent</p>
        </li>
        <li className={s.eng}>
          <p className={s.popup}>B1/B2</p>
        </li>
        <li className={s.esp}>
          <p className={s.popup}>A1/A2</p>
        </li>
      </ul>
    </div>
  );
}
