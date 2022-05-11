import s from './Contact.module.css';
import React from 'react';

export default function Contact() {
  return (
    <div className={s.contact}>
      <h3 className={s.block_tittle}>Contact</h3>
      <ul className={s.list}>
        <li className={s.item}>
          Phone:
          <a className={s.link} href="tel:+351919077782">
            (+351) 91 9077782
          </a>
        </li>
        <li className={s.item}>
          Email:
          <a className={s.link} href="mailto:vitaly.ivlev5@gmail.com">
            vitaly.ivlev5@gmail.com
          </a>
        </li>
        <li className={s.item}>
          Address:
          <a
            className={s.link}
            href="https://www.google.com/maps/@42.6866998,23.2991859,17.83z"
          >
            Troyansky Prohod 59, Sofia
          </a>
        </li>
      </ul>
    </div>
  );
}
