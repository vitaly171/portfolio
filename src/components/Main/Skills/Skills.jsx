import s from './Skills.module.css';
import React from 'react';
import Icons from 'images/sprite.svg';

export default function Skills() {
  return (
    <div className={s.skills}>
      <div className={s.soft_skills_block}>
        <h3 className={s.block_tittle}>Hard Skills</h3>
        <ul className={s.list_icons}>
          <li className={s.html}></li>
          <li className={s.css}></li>
          <li className={s.js}></li>
          <li className={s.react}></li>
          <li className={s.node}></li>
        </ul>
      </div>
      <div>
        <h3 className={s.block_tittle}>Soft Skills</h3>
        <ul className={s.list}>
          <li className={s.item}>
            <svg className={s.skills__svg}>
              <use href={`${Icons}#icon-bubbles4`} />
            </svg>
            Communication
          </li>

          {/* <div className={s.progress}></div> */}
          <li className={s.item}>
            <svg className={s.skills__svg}>
              <use href={`${Icons}#icon-key`} />
            </svg>
            Problem Solving
          </li>

          {/* <div className={s.progress}></div> */}
          <li className={s.item}>
            <svg className={s.skills__svg}>
              <use href={`${Icons}#icon-trophy`} />
            </svg>
            Leadership
          </li>

          {/* <div className={s.progress}></div> */}
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
    </div>
  );
}
