import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'expr-eval';

import { Container } from 'components/container/Container';
import CalcInput from 'components/calc-input/CalcInput';

export default class Tempature extends Component {

  static propTypes = {
    ui: PropTypes.object,
    store: PropTypes.object,
  };

  onChangeUnitFrom = (event: React.MouseEvent) => {

    const expr = Parser.parse(this.unitList.c.formulas.f.formula);
    console.log(expr.evaluate({ x: 0 }));

    // console.log('event', event);
  }

  onChangeUnitTo = (event: React.MouseEvent) => {
    console.log('event', event);
  }

  onKeyDownInputFrom = (event: React.KeyboardEvent) => {
    console.log('event', event);
  }

  onKeyDownInputTo = (event: React.KeyboardEvent) => {
    console.log('event', event);
  }

  unitList = {
      c: {
        name: 'celcius',
        code: '°C',
        selected: 'd1',
        formulas: {
          f: {
            formula: '(x * (9/5)) + 32',
          },
          k: {
            formula: 'x + 273.15',
          },
        },
      },
      f: {
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
      },
      k: {
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
    };

  render() {
    const { ui } = this.props;

    return (
      <Container>
        <CalcInput
          onChangeUnitFrom={this.onChangeUnitFrom}
          onChangeUnitTo={this.onChangeUnitTo}
          onKeyDownInputFrom={this.onKeyDownInputFrom}
          onKeyDownInputTo={this.onKeyDownInputTo}
          unitList={this.unitList}
        />
      </Container>
    );
  }
}
