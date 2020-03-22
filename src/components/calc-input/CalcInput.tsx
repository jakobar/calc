import * as React from 'react';
import { IUnit } from 'typings';

import { Parser } from 'expr-eval';

import s from './CalcInput.scss';

interface ICalcInputProps {
  unitList: IUnit[];
}

export default class CalcInput extends React.Component<ICalcInputProps> {

  state = {
    fromValue: '',
    toValue: '',
    fromUnit: '',
    toUnit: '',
  };

  onChangeUnitFrom = (e) => {
    console.log('onChangeUnitFrom e', e.target.value);
  }

  onChangeUnitTo = (e) => {
    console.log('onChangeUnitTo e', e.target.value);
  }

  onKeyUpInputFrom = (e) => {
    console.log('onKeyUpInputFrom e', e.target.value);
  }

  onKeyUpInputTo = (e) => {
    console.log('onKeyUpInputTo e', e.target.value);
  }

  onChangeInputFrom = (e) => {
    console.log('onChangeInputFrom e', e.target.value);

    console.log('state - before', this.state);

    const eValue = e.target.value;

    console.log('eValue', eValue);

    const expr = Parser.parse('x + 5');
    console.log(expr.evaluate({ x: eValue }));

    this.setState({
      toValue: expr.evaluate({ x: eValue }),
      fromValue: eValue,
    });

    console.log('state - after', this.state);

  }

  onChangeInputTo = (e) => {
    console.log('onChangeInputTo e', e.target.value);

    // Is digit from 0 to 10 in length
    const inputRegex = /^([\d]{0,10})$/;
    if (e.target.value.match(inputRegex)) {
      console.log(e.target.value);
    }
  }

  updateToInput = () => {

  }

  updateToFromInput = () => {

  }

  render() {
    const { unitList } = this.props;

    const { fromValue, toValue, fromUnit, toUnit } = this.state;

    return (
      <div className={s.calcInput}>
        <div className={s.calcInput__fromWrapper}>
          <input
            name="from"
            type="tel"
            onKeyDown={(e) => this.onKeyUpInputFrom(e)}
            onChange={(e) => this.onChangeInputFrom(e)}
            value={fromValue}
          />
          <select onChange={(e) => this.onChangeUnitFrom(e)}>
            { unitList.map((unit: IUnit) => {
              return(
                <option
                  key={unit.id}
                  selected={unit.selected === 'd1'}
                  value={unit.id}
                >
                  {unit.code}
                </option>
              );
            })}
          </select>
        </div>
        <div className={s.calcInput__toWrapper}>
          <input
            name="to"
            type="tel"
            onKeyUp={(e) => this.onKeyUpInputTo(e)}
            onChange={(e) => this.onChangeInputTo(e)}
            value={toValue}
          />
          <select onChange={(e) => this.onChangeUnitTo(e)}>
          { unitList.map((unit: IUnit) => {
              return(
                <option
                  key={unit.id}
                  selected={unit.selected === 'd2'}
                  value={unit.id}
                >
                  {unit.code}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  }
}