import * as React from 'react';
import { IUnit } from 'typings';

import { Parser } from 'expr-eval';

import { formatNumber } from 'utils/helpers';

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

  componentDidMount() {
    const { unitList } = this.props;

    const expr = Parser.parse(unitList[0].formulas[0].formula);
    const intValue = 1;

    this.setState({
      fromValue: intValue,
      toValue: expr.evaluate({ x: intValue }),
      fromUnit: unitList[0].id,
      toUnit: unitList[1].id,
    });

  }

  onChangeUnitFrom = (e: any) => {
    console.log('onChangeUnitFrom e', e.target.value);

    const { unitList } = this.props;
    const { toValue, toUnit } = this.state;

    const eValue = e.target.value;

    const unitListTo = unitList.find((item) => (item.id === toUnit));
    const unitListFrom = unitListTo && unitListTo.formulas.find((item) => (item.id === eValue));
    const fromFormula = unitListFrom && unitListFrom.formula;

    if (fromFormula) {
      const expr = Parser.parse(fromFormula);

      this.setState({
        toValue,
        fromValue: formatNumber(expr.evaluate({ x: toValue })),
        fromUnit: eValue,
      });
    }
  }

  onChangeUnitTo = (e: any) => {
    console.log('onChangeUnitTo e', e.target.value);

    const { unitList } = this.props;
    const { fromValue, fromUnit } = this.state;

    const eValue = e.target.value;

    const unitListFrom = unitList.find((item) => (item.id === fromUnit));
    const unitListTo = unitListFrom && unitListFrom.formulas.find((item) => (item.id === eValue));
    const toFormula = unitListTo && unitListTo.formula;

    if (toFormula) {
      const expr = Parser.parse(toFormula);

      this.setState({
        fromValue,
        toValue: formatNumber(expr.evaluate({ x: fromValue })),
        toUnit: eValue,
      });
    }
  }

  onKeyUpInputFrom = (e: any) => {
    console.log('onKeyUpInputFrom e', e.target.value);
  }

  onKeyUpInputTo = (e: any) => {
    console.log('onKeyUpInputTo e', e.target.value);
  }

  onChangeInputFrom = (e: any) => {
    const { unitList } = this.props;
    const { fromUnit, toUnit } = this.state;

    const eValue = e.target.value;

    const unitListFrom = unitList.find((item) => (item.id === fromUnit));
    const unitListTo = unitListFrom && unitListFrom.formulas.find((item) => (item.id === toUnit));
    const toFormula = unitListTo && unitListTo.formula;

    if (toFormula) {
      const expr = Parser.parse(toFormula);

      this.setState({
        fromValue: eValue,
        toValue: formatNumber(expr.evaluate({ x: eValue })),
      });
    }
  }

  onChangeInputTo = (e: any) => {
    const { unitList } = this.props;
    const { fromUnit, toUnit } = this.state;

    const eValue = e.target.value;

    const unitListTo = unitList.find((item) => (item.id === toUnit));
    const unitListFrom = unitListTo && unitListTo.formulas.find((item) => (item.id === fromUnit));
    const fromFormula = unitListFrom && unitListFrom.formula;

    if (fromFormula) {
      const expr = Parser.parse(fromFormula);

      this.setState({
        toValue: eValue,
        fromValue: formatNumber(expr.evaluate({ x: eValue })),
      });
    }
  }

  render() {
    const { unitList } = this.props;

    const { fromValue, toValue, fromUnit, toUnit } = this.state;

    console.log('this.state', this.state);

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
          <select
            onChange={(e) => this.onChangeUnitFrom(e)}
            value={fromUnit}
          >
            { unitList.filter((item) => item.id !== toUnit).map((unit: IUnit) => {
              return(
                <option
                  key={unit.id}
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
          <select
            onChange={(e) => this.onChangeUnitTo(e)}
            value={toUnit}
          >
          { unitList.filter((item) => item.id !== fromUnit).map((unit: IUnit) => {
              return(
                <option
                  key={unit.id}
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