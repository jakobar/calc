import * as React from 'react';

import { Link } from 'components/link/Link';

import Logo from 'assets/svg/calcify-logo.svg';

import s from './Header.scss';

interface IHeaderProps {
  children?: React.ReactNode;
}

export const Header = ({ children }: IHeaderProps) => (
  <header className={s.header}>
    <div className={s.header__container}>
      <div className={s.header__content}>
        <Link
          to="/"
          className={s.header__logo}
        >
          <Logo className={s.header__logoSvg} />
        </Link>

        <div className={s.header__navigation}>
          {children}
        </div>
      </div>
    </div>
  </header>
);
