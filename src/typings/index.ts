export interface IUnit {
  id: string;
  name: string;
  code: string;
  formulas: IFormula[];
}

export interface IFormula {
  id: string;
  formula: string;
}