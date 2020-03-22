import * as React from 'react';

import { Link as InternalLink } from 'components/link/Link';

import s from './SmartLink.scss';

interface ISmartLinkProps {
  to: string;
  label?: string;
  children?: React.ReactNode;
}

export const SmartLink = ({ label, to, children }: ISmartLinkProps) => {
  const isLink = (typeof to !== 'undefined');
  const isExternal = isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(to || '');

  if (isExternal) {
    return (
      <a
        className={s.smartlink}
        target="_blank"
        rel="noopener noreferrer"
        href={to}
      >
        {label && label}
        {children}
      </a>
    );
  }

  return (
    <InternalLink
      className={s.smartlink}
      to={to}
    >
      {label && label}
      {children}
    </InternalLink>
  );
};
