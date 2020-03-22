import * as React from 'react';

import { Container } from 'components/container/Container';

import s from './Footer.scss';

interface ISocial {
  icon: React.ReactNode;
  to: string;
}

interface IFooterProps {
  logo: React.ReactNode;
  social?: ISocial[];
}

export const Footer = ({ logo, social }: IFooterProps) => (
  <footer className={s.footer}>
    <Container>
      <div className={s.footer__content}>
        <a
          href="https://jakobar.is"
          target="_blank"
          rel="noopener noreferrer"
          className={s.footer__logo}
        >
          {logo}
        </a>

        <ul className={s.footer__list}>
          {social && social.map((item) => (
            <li
              key={item.to}
              className={s.footer__item}
            >
              <a
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </footer>
);
