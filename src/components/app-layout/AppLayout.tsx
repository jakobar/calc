import * as React from 'react';
import Helmet from 'react-helmet';

import JakobarLogo from 'assets/svg/jakobar-logo.svg';
import Dribbble from 'assets/svg/dribbble.svg';
import Twitter from 'assets/svg/twitter.svg';
import Github from 'assets/svg/github.svg';
import Instagram from 'assets/svg/instagram.svg';
import Facebook from 'assets/svg/facebook.svg';
import Linkedin from 'assets/svg/linkedin.svg';

import { helmet } from 'utils/helmet';
import { Header } from 'components/header/Header';
import { Link as HeaderLink } from 'components/header/Link';
import { Footer } from 'components/footer/Footer';
import { Devtools } from 'components/devtools/Devtools';

import s from './AppLayout.scss';

interface IAppLayoutProps {
  children: React.ReactNode;
}

const isDev = process.env.NODE_ENV === 'development';

export default ({ children }: IAppLayoutProps) => (
  <div className={s.layout}>
    <Helmet {...helmet} />

    <Header>
      <HeaderLink
        name="about"
        to="/about"
      />

      <HeaderLink
        name="github"
        to="https://github.com/ueno-llc"
        icon={<Github />}
      />
    </Header>

    {children}

    <Footer
      logo={<JakobarLogo />}
      social={[
        { icon: <Dribbble />, to: 'https://dribbble.com/jakobar' },
        { icon: <Twitter />, to: 'https://twitter.com/jakobarni' },
        { icon: <Github />, to: 'https://github.com/jakobar' },
        { icon: <Instagram />, to: 'https://www.instagram.com/jakobar_' },
        { icon: <Facebook />, to: 'https://www.facebook.com/jakobar' },
        { icon: <Linkedin />, to: 'https://www.linkedin.com/in/jakobar' },
      ]}
    />

    {isDev && <Devtools />}
  </div>
);
