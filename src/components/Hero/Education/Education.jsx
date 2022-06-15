import s from './Education.module.css';
import React from 'react';

export default function Education() {
  return (
    <div className={s.education}>
      <h3 className={s.tittle}>Education</h3>
      <ul className={s.list}>
        <li className={s.item}>
          <b>Bachelor’s Degree in economics</b> University of Coimbra, Portugal
          | September 2016
        </li>
        <li className={s.item}>
          <b>Full Stack Developer Course</b> GO IT, Ukraine | April 2022
        </li>
      </ul>
    </div>
  );
}
