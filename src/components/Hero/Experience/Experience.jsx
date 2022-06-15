import s from './Experience.module.css';
import React from 'react';

export default function Experience() {
  return (
    <div className={s.experience}>
      <h3 className={s.tittle}>Experience</h3>
      <ul className={s.list}>
        <li className={s.item}>
          <b>Social Media Analyst</b>TELUS INTERNATIONAL, Bulgaria, Sofia |
          January 2019 – Present
          <ul className={s.knowledge__list}>
            <li>
              View and action potentially violating content on an ongoing basis
            </li>
            <li>
              Conduct objective, fair, unbiased, and investigations into
              reported content
            </li>
            <li>
              Be an expert on internal policies and stay up-to-date with policy
              updates
            </li>
            <li>
              Use market specific knowledge, signals and insights to spot and
              scope scalable solutions to improve the support of community of
              users
            </li>
            <li>
              Recognize trends and patterns, and escalate issues outside our
              company policy to the global team
            </li>
          </ul>
        </li>
        <li className={s.item}>
          <b>Full Stack Developer Student</b>GO IT, Ukraine, Kyiv | September
          2020 – April 2022
          <ul className={s.knowledge__list}>
            <li>
              Write clean code, drive technical design, and take responsibility
              for technical delivery.
            </li>
            <li>
              Prearranged, wrote, and debugged web applications and software
              with complete accuracy.
            </li>
            <li>
              Integrated the user authentication to support third-party accounts
              login.
            </li>
            <li>Manage, optimize, and update databases as required.</li>
            <li> Developed, improved, and operated web-based software.</li>
            <li>Creating quality web pages </li>
            <li> Performing basic website testing.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
