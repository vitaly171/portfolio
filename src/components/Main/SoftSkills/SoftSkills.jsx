import s from './SoftSkills.module.css';
import React from 'react';
import Icons from 'images/sprite.svg';

export default function SoftSkills() {
  return (
    <div className={s.skills}>
      <h3 className={s.block_tittle}>Soft Skills</h3>
      <ul className={s.list}>
        <li className={s.item}>
          <svg className={s.skills__svg}>
            <use href={`${Icons}#icon-bubbles4`} />
          </svg>
          Communication
        </li>
        <li className={s.item}>
          <svg className={s.skills__svg}>
            <use href={`${Icons}#icon-key`} />
          </svg>
          Problem Solving
        </li>
        <li className={s.item}>
          <svg className={s.skills__svg}>
            <use href={`${Icons}#icon-trophy`} />
          </svg>
          Leadership
        </li>
        <li className={s.item}>
          <svg className={s.skills__svg}>
            <use href={`${Icons}#icon-group`} />
          </svg>
          Teamwork
        </li>

        <li className={s.item}>
          <svg className={s.skills__svg}>
            <use href={`${Icons}#icon-shuffle`} />
          </svg>
          Flexibility
        </li>
      </ul>
    </div>
  );
}
