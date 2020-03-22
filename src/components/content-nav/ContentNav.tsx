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

      <div className={s.contentNav__item}>
        <SmartLink to={links.subpages.speed.link} >
          <div className={s.contentNav__label}>
            {links.subpages.speed.name}
          </div>
          <div className={s.contentNav__icon}>
            <Speed className={s.contentNav__svg} />
          </div>
        </SmartLink>
      </div>

      <div className={s.contentNav__item}>
        <SmartLink to={links.subpages.mass.link} >
          <div className={s.contentNav__label}>
            {links.subpages.mass.name}
          </div>
          <div className={s.contentNav__icon}>
            <Speed className={s.contentNav__svg} />
          </div>
        </SmartLink>
      </div>

      <div className={s.contentNav__item}>
        <SmartLink to={links.subpages.tempature.link} >
          <div className={s.contentNav__label}>
            {links.subpages.tempature.name}
          </div>
          <div className={s.contentNav__icon}>
            <Speed className={s.contentNav__svg} />
          </div>
        </SmartLink>
      </div>

    </div>
  </section>
);
