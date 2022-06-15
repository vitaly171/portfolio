import s from './Contact.module.css';
import React from 'react';
import Icons from 'images/sprite.svg';

export default function Contact() {
  return (
    <div className={s.contact}>
      <h3 className={s.block_tittle}>Contact</h3>
      <ul className={s.list}>
        <li className={s.item}>
          <a className={s.link} href="tel:+351919077782">
            <svg className={s.contacts__svg}>
              <use href={`${Icons}#icon-mobile`} />
            </svg>{' '}
            (+351) 91 9077782
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="mailto:vitaly.ivlev5@gmail.com">
            <svg className={s.contacts__svg}>
              <use href={`${Icons}#icon-envelop`} />
            </svg>
            vitaly.ivlev5@gmail.com
          </a>
        </li>
        {/* <li className={s.item}>
          <a
            className={s.link}
            href="https://www.google.com/maps/@42.6866998,23.2991859,17.83z"
          >
            <svg className={s.contacts__svg}>
              <use href={`${Icons}#icon-location`} />
            </svg>
            Troyansky Prohod 59, Sofia
          </a>
        </li> */}
      </ul>
      <ul className={s.social__list}>
        <li className={s.social__item}>
          <a
            className={s.social__link}
            href="https://twitter.com/Vitaly_Ivlev"
            target="_blank"
            rel="noopener noreferer"
            aria-label="twitter"
          >
            <svg className={s.social__svg}>
              <use href={`${Icons}#icon-twitter`} />
            </svg>
          </a>
        </li>
        <li className={s.social__item}>
          <a
            className={s.social__link}
            href="https://www.facebook.com/vitaly.ivlev/"
            target="_blank"
            rel="noopener noreferer"
            aria-label="facebook"
          >
            <svg className={s.social__svg}>
              <use href={`${Icons}#icon-facebook`} />
            </svg>
          </a>
        </li>
        <li className={s.social__item}>
          <a
            className={s.social__link}
            href="https://www.linkedin.com/in/vitaly-ivlev-a74aa5169/"
            target="_blank"
            rel="noopener noreferer"
            aria-label="linkedin"
          >
            <svg className={s.social__svg}>
              <use href={`${Icons}#icon-linkedin2`} />
            </svg>
          </a>
        </li>
        <li className={s.social__item}>
          <a
            className={s.social__link}
            href="https://github.com/vitaly171"
            target="_blank"
            rel="noopener noreferer"
            aria-label="github"
          >
            <svg className={s.social__svg}>
              <use href={`${Icons}#icon-github`} />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}
