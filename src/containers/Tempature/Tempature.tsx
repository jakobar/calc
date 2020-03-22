import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { IUnit } from 'typings';

import { Container } from 'components/container/Container';
import CalcInput from 'components/calc-input/CalcInput';

export default class Tempature extends Component {

  static propTypes = {
    ui: PropTypes.object,
    store: PropTypes.object,
  };

  unitList: IUnit[] = [
      {
        id: 'c',
        name: 'celcius',
        code: '°C',
        selected: 'd1',
        formulas: [{
          id: 'f',
          formula: '(x * (9/5)) + 32',
        }, {
          id: 'k',
          formula: 'x + 273.15',
        }],
      }, {
        id: 'f',
        name: 'farainheit',
        code: '°F',
        selected: 'd2',
        formulas: [{
          id: 'c',
          formula: ' (x - 32) × 5/9',
        }, {
          id: 'k',
          formula: '(x + 459.67) × 5/9',
        }],
      }, {
        id: 'k',
        name: 'kelvin',
        code: '°K',
        selected: '',
        formulas: [{
          id: 'c',
          formula: 'x - 273.15',
        }, {
          id: 'f',
          formula: '(x × 9/5) - 459.67',
        }],
      },
    ];

  render() {
    const { ui } = this.props;

    return (
      <Container>
        <CalcInput
          unitList={this.unitList}
        />
      </Container>
    );
  }
}
