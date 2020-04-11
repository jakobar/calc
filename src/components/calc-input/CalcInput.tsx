import * as React from 'react';
import { IUnit } from 'typings';

import { Parser } from 'expr-eval';

import { formatNumber } from 'utils/helpers';

import s from './CalcInput.scss';

interface ICalcInputProps {
  unitList: IUnit[];
}

export class CalcInput extends React.Component<ICalcInputProps> {

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
    const { fromValue, toUnit, fromUnit } = this.state;

    const newFromUnit = e.target.value;
    let newToUnit = toUnit;

    if (newFromUnit === toUnit) {
      newToUnit = fromUnit;
    }

    const unitListFrom = unitList.find((item) => (item.id === newFromUnit));
    const unitListTo = unitListFrom && unitListFrom.formulas.find((item) => (item.id === newToUnit));
    const toFormula = unitListTo && unitListTo.formula;

    if (toFormula) {
      const expr = Parser.parse(toFormula);

      this.setState({
        fromValue,
        toValue: formatNumber(expr.evaluate({ x: fromValue })),
        fromUnit: newFromUnit,
        toUnit: newToUnit,
      });
    }
  }

  onChangeUnitTo = (e: any) => {
    console.log('onChangeUnitTo e', e.target.value);

    const { unitList } = this.props;
    const { fromValue, toUnit, fromUnit } = this.state;

    const newToUnit = e.target.value;
    let newFromUnit = fromUnit;

    if (newToUnit === fromUnit) {
      newFromUnit = toUnit;
    }

    const unitListFrom = unitList.find((item) => (item.id === newFromUnit));
    const unitListTo = unitListFrom && unitListFrom.formulas.find((item) => (item.id === newToUnit));
    const toFormula = unitListTo && unitListTo.formula;

    if (toFormula) {
      const expr = Parser.parse(toFormula);

      this.setState({
        fromValue,
        toValue: formatNumber(expr.evaluate({ x: fromValue })),
        fromUnit: newFromUnit,
        toUnit: newToUnit,
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

    // console.log('this.state', this.state);

    return (
      <div className={s.calcInput}>
        <div className={s.calcInput__inputWrapper}>
          <input
            name="from"
            type="tel"
            onKeyDown={(e) => this.onKeyUpInputFrom(e)}
            onChange={(e) => this.onChangeInputFrom(e)}
            value={fromValue}
            className={s(s.calcInput__input, 'from')}
          />
          <select
            onChange={(e) => this.onChangeUnitFrom(e)}
            value={fromUnit}
            className={s(s.calcInput__select, 'from')}
          >
            { unitList.map((unit: IUnit) => {
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
        <div className={s.calcInput__inputWrapper}>
          <input
            name="to"
            type="tel"
            onKeyUp={(e) => this.onKeyUpInputTo(e)}
            onChange={(e) => this.onChangeInputTo(e)}
            value={toValue}
            className={s(s.calcInput__input, 'to')}
          />
          <select
            onChange={(e) => this.onChangeUnitTo(e)}
            value={toUnit}
            className={s(s.calcInput__select, 'to')}
          >
          { unitList.map((unit: IUnit) => {
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