
import * as React from 'react';
import Helmet from 'react-helmet';

import { Calc } from 'containers/calc/Calc';

export default () => (
  <>
    <Helmet title="Speed" />

    <Calc type="speed" />
  </>
);
