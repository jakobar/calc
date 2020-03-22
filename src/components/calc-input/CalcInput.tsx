import * as React from 'react';

import s from './CalcInput.scss';
import { renderStatic } from 'react-helmet';

interface ICalcInputProps {
  onChangeUnitFrom: React.ChangeEventHandler<any>;
  onChangeUnitTo: React.ChangeEventHandler<any>;
  onKeyDownInputFrom: React.KeyboardEventHandler<any>;
  onKeyDownInputTo: React.KeyboardEventHandler<any>;
  unitList: [];
}

export default class CalcInput extends React.Component<ICalcInputProps> {

  render() {
    const { onChangeUnitFrom, onChangeUnitTo, onKeyDownInputFrom, onKeyDownInputTo, unitList } = this.props;

    console.log('unitlist', unitList);

    return (
      <div className={s.calcInput}>
        <div className={s.calcInput__fromWrapper}>
          <input
            name="from"
            type="tel"
            onKeyDown={(e) => onKeyDownInputFrom(e)}
          />
          <select onChange={(e) => onChangeUnitFrom(e)}>
            <option selected value="c">C</option>
            <option value="f">F</option>
            <option value="k">K</option>
          </select>
        </div>
        <div className={s.calcInput__toWrapper}>
          <input
            name="to"
            type="tel"
            onKeyDown={(e) => onKeyDownInputTo(e)}
          />
          <select onChange={(e) => onChangeUnitTo(e)}>
            <option value="c">C</option>
            <option selected value="f">F</option>
            <option value="k">K</option>
          </select>
        </div>
      </div>
    );
  }
}