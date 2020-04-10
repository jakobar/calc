import React, { Component } from 'react';
import PropTypes from 'prop-types';

import f from 'utils/formulas';

import { Container } from 'components/container/Container';
import { CalcInput } from 'components/calc-input/CalcInput';

export class Calc extends Component {

  static propTypes = {
    ui: PropTypes.object,
    store: PropTypes.object,
    type: PropTypes.string,
  };

  render() {
    const { ui, type } = this.props;

    console.log('fomulas', f);

    const typeUnits = f.formulas.find((item) => item.type === type);

    const unitList = typeUnits && typeUnits.units;

    return (
      <Container>
        {
          unitList &&
          <CalcInput
            unitList={unitList ? unitList : []}
          />
        }
        {
          !unitList && <div>
            Því miður er ekki til reiknivél fyrir þessa mælieiningu.
          </div>
        }
      </Container>
    );
  }
}
