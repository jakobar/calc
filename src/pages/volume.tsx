import * as React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/intro/Intro';

export default () => (
  <>
    <Helmet title="About" />

    <Intro>
      volume page
    </Intro>
  </>
);
