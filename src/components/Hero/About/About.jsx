import s from './About.module.css';
import React from 'react';

export default function About() {
  return (
    <div className={s.about}>
      <h3 className={s.tittle}>About me</h3>
      <p className={s.text}>
        I’m a passionate junior full stack web developer who can develop both
        client and server software. In addition to mastering HTML and CSS, I
        also know how to program a browser using JavaScript and program a server
        using Node.JS. I do not stop there; I always try to improve my skills
        and be in the trend of new technologies. Adept at contributing to a
        highly collaborative environment, finding solutions, and determining
        customer satisfaction.
      </p>
    </div>
  );
}
