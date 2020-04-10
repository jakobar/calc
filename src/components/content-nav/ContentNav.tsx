import * as React from 'react';

import { SmartLink } from 'components/smart-link/SmartLink';

import Speed from 'assets/svg/speed.svg';

import links from 'utils/links';

import s from './ContentNav.scss';

interface IContentNavProps {
  children?: React.ReactNode;
}

export const ContentNav = ({ children }: IContentNavProps) => (
  <section className={s.contentNav}>
    <div className={s.contentNav__row}>

    {links.subpages.map((subpage) => (
      <div className={s.contentNav__item}>
        <SmartLink to={subpage.link} >
            <span className={s.contentNav__bg}>
              <span className={s.contentNav__label}>
                {subpage.name}
              </span>
              <span className={s.contentNav__icon}>
                <Speed className={s.contentNav__svg} />
              </span>
            </span>
        </SmartLink>
      </div>
    ))}

    </div>
  </section>
);
