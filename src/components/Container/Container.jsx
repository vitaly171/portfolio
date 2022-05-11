import s from './Container.module.css';
import Main from '../Main';
import Hero from '../Hero';
import React from 'react';

export default function Container() {
  return (
    <div className={s.container}>
      <Main />
      <Hero />
    </div>
  );
}
